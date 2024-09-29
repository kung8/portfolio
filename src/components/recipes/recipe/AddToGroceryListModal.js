import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_LONG_DATE_FORMAT } from '../constants';
import { useGetRecipeCategories } from '../../../hooks/use-get-recipe-categories';
import { categorizeRecipeType } from '../categorize-recipe-type';
import { RecipeDateInput } from '../grocery-list-modal/RecipeDateInput';
import { RecipeCategoryInput } from '../grocery-list-modal/RecipeCategoryInput';
import { RecipeModalBody, RecipeModalContent, RecipeModalFooter, RecipeModalHeader } from '../grocery-list-modal/RecipeModalContent';
import { getValidDateRangeError } from '../grocery-list-modal/getValidDateRangeError';

export const AddToGroceryListModal = ({
    closeModal,
    onAdd,
    initialType,
}) => {
    const [type, setType] = useState(initialType);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [date, setDate] = useState('');

    const [isStartMealPlanningCalendarOpen, setIsStartMealPlanningCalendarOpen] = useState(false);
    const [isEndMealPlanningCalendarOpen, setIsEndMealPlanningCalendarOpen] = useState(false);
    const [mealPlanningDateRange, setMealPlanningDateRange] = useState([]);

    const { data: categoryData } = useGetRecipeCategories();
    const categories = categoryData?.CATEGORIES ?? [];

    useEffect(() => {
        if (!type) {
            setType(categorizeRecipeType(categories[0]));
        }
        // eslint-disable-next-line
    }, [categoryData]);

    return (
        <div className="add-to-grocery-list-modal">
            <RecipeModalContent>
                <div className="top-container">
                    <RecipeModalHeader
                        handleClose={closeModal}
                        title="Add to Grocery List"
                    />
                    <RecipeModalBody>
                        <RecipeCategoryInput
                            isDropdownOpen={isTypeDropdownOpen}
                            handleDropdownToggle={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                            handleDropdownSelection={(e) => {
                                e.stopPropagation();
                                setType(e.target.value);
                                setIsTypeDropdownOpen(false);
                            }}
                            label={type || 'Meal Type'}
                            options={MEAL_PLAN_MEAL_TYPES}
                        />
                        <RecipeDateInput
                            date={date}
                            handleChange={(value) => {
                                const formattedDate = dayjs(value).format(DATE_FORMAT);
                                setDate(formattedDate);
                            }}
                            handleClick={() => {
                                setIsCalendarOpen(!isCalendarOpen);
                                setIsStartMealPlanningCalendarOpen(false);
                                setIsEndMealPlanningCalendarOpen(false);
                            }}
                            handleDelete={() => setDate('')}
                            hasDate={!!date}
                            isCalendarOpen={isCalendarOpen}
                            label={date ? dayjs(date).format(READABLE_LONG_DATE_FORMAT) : '(Optional) Set when you need it by...'}
                        />
                        <div className="edit-recipe-date-range-container">
                            <RecipeDateInput
                                date={mealPlanningDateRange?.[0]}
                                handleChange={(value) => {
                                    const formattedDate = dayjs(value).format(DATE_FORMAT);
                                    const formattedDates = [formattedDate, mealPlanningDateRange[1]];
                                    const invalid = getValidDateRangeError(formattedDates);

                                    if (formattedDates[0] && formattedDates[1] && invalid) {
                                        // reverse the dates if the range is invalid
                                        formattedDates.reverse();
                                    }

                                    setMealPlanningDateRange(formattedDates);
                                    setIsStartMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(!isStartMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => setMealPlanningDateRange([null, mealPlanningDateRange[1]])}
                                hasDate={mealPlanningDateRange?.[0]}
                                isCalendarOpen={isStartMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[0] ?
                                    dayjs(mealPlanningDateRange[0]).format(READABLE_LONG_DATE_FORMAT) :
                                    '(Optional) Starting range...'
                                }
                            />
                            <RecipeDateInput
                                date={mealPlanningDateRange?.[1]}
                                handleChange={(value) => {
                                    const formattedDate = dayjs(value).format(DATE_FORMAT);
                                    const formattedDates = [mealPlanningDateRange[0], formattedDate];
                                    const invalid = getValidDateRangeError(formattedDates);

                                    if (formattedDates[0] && formattedDates[1] && invalid) {
                                        // reverse the dates if the range is invalid
                                        formattedDates.reverse();
                                    }

                                    setMealPlanningDateRange(formattedDates);
                                    setIsEndMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(!isEndMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => setMealPlanningDateRange([mealPlanningDateRange[0], null])}
                                hasDate={mealPlanningDateRange?.[1]}
                                isCalendarOpen={isEndMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[1] ?
                                    dayjs(mealPlanningDateRange[1]).format(READABLE_LONG_DATE_FORMAT) :
                                    '(Optional) Ending range...'
                                }
                            />
                        </div>
                    </RecipeModalBody>
                </div>
                <RecipeModalFooter
                    actionLabel="Add"
                    disabled={!(date || mealPlanningDateRange.length > 0) || !type}
                    handleAction={() => {
                        const finalMealPlanningDateRange = [mealPlanningDateRange[0], mealPlanningDateRange[1]];
                        if (finalMealPlanningDateRange[0] && !finalMealPlanningDateRange[1]) {
                            finalMealPlanningDateRange[1] = finalMealPlanningDateRange[0];
                        } else if (!mealPlanningDateRange[0] && mealPlanningDateRange[1]) {
                            finalMealPlanningDateRange[0] = finalMealPlanningDateRange[1];
                        }

                        onAdd(date, type, finalMealPlanningDateRange);
                        closeModal();
                    }}
                    handleCancel={closeModal}
                />
            </RecipeModalContent>
        </div>
    )
}