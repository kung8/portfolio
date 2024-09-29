import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_LONG_DATE_FORMAT } from '../constants';
import { useGetRecipeCategories } from '../../../hooks/use-get-recipe-categories';
import { categorizeRecipeType } from '../categorize-recipe-type';
import { RecipeDateInput } from '../grocery-list-modal/RecipeDateInput';
import { RecipeCategoryInput } from '../grocery-list-modal/RecipeCategoryInput';
import { RecipeModalBody, RecipeModalContent, RecipeModalFooter, RecipeModalHeader } from '../grocery-list-modal/RecipeModalContent';

export const AddToGroceryListModal = ({
    closeModal,
    onAdd,
    initialType,
}) => {
    const [type, setType] = useState(initialType);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [date, setDate] = useState('');

    const [isMealPlanningCalendarOpen, setIsMealPlanningCalendarOpen] = useState(false);
    const [mealPlanningDateRange, setMealPlanningDateRange] = useState([]);

    const today = dayjs();

    const { data: categoryData } = useGetRecipeCategories();
    const categories = categoryData?.CATEGORIES ?? [];

    useEffect(() => {
        if (!type) {
            setType(categorizeRecipeType(categories[0]));
        }
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
                                setIsMealPlanningCalendarOpen(false);
                            }}
                            handleDelete={() => setDate('')}
                            hasDate={!!date}
                            isCalendarOpen={isCalendarOpen}
                            label={date ? dayjs(date).format(READABLE_LONG_DATE_FORMAT) : '(Optional) Set when you need it by...'}
                        />
                        <RecipeDateInput
                            date={mealPlanningDateRange}
                            handleChange={(value) => {
                                const formattedDates = value.map(date => dayjs(date).format(DATE_FORMAT));
                                setMealPlanningDateRange(formattedDates);
                            }}
                            handleClick={() => {
                                setIsMealPlanningCalendarOpen(!isMealPlanningCalendarOpen);
                                setIsCalendarOpen(false);
                            }}
                            handleDelete={() => setMealPlanningDateRange([])}
                            hasDate={mealPlanningDateRange.length > 0}
                            isCalendarOpen={isMealPlanningCalendarOpen}
                            label={mealPlanningDateRange.length > 0 ? `${dayjs(mealPlanningDateRange[0]).format(READABLE_LONG_DATE_FORMAT)} - ${dayjs(mealPlanningDateRange[1]).format(READABLE_LONG_DATE_FORMAT)}` : '(Optional) Set when you plan on using this...'}
                            selectRange
                        />
                    </RecipeModalBody>
                </div>
                <RecipeModalFooter
                    actionLabel="Add"
                    disabled={!(date || mealPlanningDateRange.length > 0) || !type}
                    handleAction={() => {
                        onAdd(date, type, mealPlanningDateRange);
                        closeModal();
                    }}
                    handleCancel={closeModal}
                />
            </RecipeModalContent>
        </div>
    )
}