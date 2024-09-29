import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useGetIngredientCategories } from '../../../hooks';
import { DATE_FORMAT, READABLE_SHORT_DATE } from '../constants';
import { RecipeDateInput } from './RecipeDateInput';
import { RecipeCategoryInput } from './RecipeCategoryInput';
import { RecipeModalBody, RecipeModalContent, RecipeModalFooter, RecipeModalHeader } from './RecipeModalContent';
import { getValidDateRangeError } from './getValidDateRangeError';

export const EditGroceryListItemModal = ({
    itemToEdit,
    setItemToEdit,
    originalItemToEdit,
    updateItem,
    closeEditIngredientModal,
}) => {
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

    const [date, setDate] = useState(originalItemToEdit.date);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const [isStartMealPlanningCalendarOpen, setIsStartMealPlanningCalendarOpen] = useState(false);
    const [isEndMealPlanningCalendarOpen, setIsEndMealPlanningCalendarOpen] = useState(false);
    const [mealPlanningDateRange, setMealPlanningDateRange] = useState(originalItemToEdit?.mealPlanningDateRange ?? []);

    useEffect(() => {
        setDate(itemToEdit.date);
    }, [itemToEdit]);

    const { data: categories = [] } = useGetIngredientCategories();

    return (
        <div className="edit-ingredient-modal">
            <RecipeModalContent>
                <div className="top-container">
                    <RecipeModalHeader
                        handleClose={closeEditIngredientModal}
                        title="Update Ingredient"
                    />
                    <RecipeModalBody>
                        <input className="edit-ingredient-input" placeholder="Ingredient Name" value={itemToEdit?.name} onChange={(e) => setItemToEdit({ ...itemToEdit, name: e.target.value })} />
                        <RecipeCategoryInput
                            isDropdownOpen={isCategoryDropdownOpen}
                            handleDropdownToggle={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            handleDropdownSelection={(e) => {
                                e.stopPropagation();
                                setItemToEdit({ ...itemToEdit, category: e.target.value });
                                setIsCategoryDropdownOpen(false);
                            }}
                            label={itemToEdit.category}
                            options={categories}
                        />
                        <input className="edit-recipe-name-input" placeholder="(Optional) Add what this is needed for..." value={itemToEdit?.recipeName} onChange={(e) => setItemToEdit({ ...itemToEdit, recipeName: e.target.value })} />
                        <RecipeDateInput
                            date={date}
                            handleChange={(value) => {
                                const formattedDate = dayjs(value).format(DATE_FORMAT);
                                setDate(formattedDate);
                                setItemToEdit({ ...itemToEdit, date: formattedDate });
                            }}
                            handleClick={() => {
                                setIsStartMealPlanningCalendarOpen(false);
                                setIsEndMealPlanningCalendarOpen(false);
                                setIsCalendarOpen(!isCalendarOpen)
                            }}
                            handleDelete={() => {
                                setDate('');
                                setItemToEdit({ ...itemToEdit, date: '' });
                            }}
                            hasDate={!!date}
                            isCalendarOpen={isCalendarOpen}
                            label={date ? dayjs(date).format(READABLE_SHORT_DATE) : '(Optional) Need by date...'}
                        />
                        <div className="edit-recipe-date-range-container">
                            <RecipeDateInput
                                date={mealPlanningDateRange?.[0]}
                                handleChange={(value) => {
                                    const formattedDate = dayjs(value).format(DATE_FORMAT);
                                    const formattedDates = [formattedDate, mealPlanningDateRange?.[1]];
                                    const invalid = getValidDateRangeError(formattedDates);

                                    if (formattedDates[0] && formattedDates[1] && invalid) {
                                        // reverse the dates if the range is invalid
                                        formattedDates.reverse();
                                    }

                                    setMealPlanningDateRange(formattedDates);
                                    setItemToEdit({ ...itemToEdit, mealPlanningDateRange: formattedDates });
                                    setIsStartMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(!isStartMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => {
                                    const formattedDates = [null, mealPlanningDateRange?.[1]];
                                    setMealPlanningDateRange(formattedDates);
                                    setItemToEdit({ ...itemToEdit, mealPlanningDateRange: formattedDates });
                                }}
                                hasDate={mealPlanningDateRange?.[0]}
                                isCalendarOpen={isStartMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[0] ?
                                    dayjs(mealPlanningDateRange[0]).format(READABLE_SHORT_DATE) :
                                    'Starting range...'}
                            />
                            <RecipeDateInput
                                date={mealPlanningDateRange?.[1]}
                                handleChange={(value) => {
                                    const formattedDate = dayjs(value).format(DATE_FORMAT);
                                    const formattedDates = [mealPlanningDateRange?.[0], formattedDate];
                                    const invalid = getValidDateRangeError(formattedDates);

                                    if (formattedDates[0] && formattedDates[1] && invalid) {
                                        // reverse the dates if the range is invalid
                                        formattedDates.reverse();
                                    }

                                    setMealPlanningDateRange(formattedDates);
                                    setItemToEdit({ ...itemToEdit, mealPlanningDateRange: formattedDates });
                                    setIsEndMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(!isEndMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => {
                                    const formattedDates = [mealPlanningDateRange?.[1], null];
                                    setMealPlanningDateRange(formattedDates);
                                    setItemToEdit({ ...itemToEdit, mealPlanningDateRange: formattedDates });
                                }}
                                hasDate={mealPlanningDateRange?.[1]}
                                isCalendarOpen={isEndMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[1] ?
                                    dayjs(mealPlanningDateRange[1]).format(READABLE_SHORT_DATE) :
                                    'Ending range...'}
                            />
                        </div>
                    </RecipeModalBody>
                </div>
                <RecipeModalFooter
                    actionLabel={'Save'}
                    handleAction={() => {
                        const finalItemToEdit = { ...itemToEdit };
                        if (finalItemToEdit?.mealPlanningDateRange?.[0] && !finalItemToEdit?.mealPlanningDateRange?.[1]) {
                            finalItemToEdit.mealPlanningDateRange = [finalItemToEdit.mealPlanningDateRange[0], finalItemToEdit.mealPlanningDateRange[0]];
                        } else if (!finalItemToEdit?.mealPlanningDateRange?.[0] && finalItemToEdit?.mealPlanningDateRange?.[1]) {
                            finalItemToEdit.mealPlanningDateRange = [finalItemToEdit.mealPlanningDateRange[1], finalItemToEdit.mealPlanningDateRange[1]];
                        }

                        updateItem(originalItemToEdit, finalItemToEdit);
                        closeEditIngredientModal();
                    }}
                    handleCancel={closeEditIngredientModal}
                    disabled={(
                        originalItemToEdit.name === itemToEdit.name &&
                        originalItemToEdit.category === itemToEdit.category &&
                        originalItemToEdit.recipeName === itemToEdit.recipeName &&
                        originalItemToEdit.date === itemToEdit.date &&
                        originalItemToEdit?.mealPlanningDateRange?.[0] === itemToEdit?.mealPlanningDateRange?.[0] &&
                        originalItemToEdit?.mealPlanningDateRange?.[1] === itemToEdit?.mealPlanningDateRange?.[1]
                    ) || !itemToEdit.name}
                />
            </RecipeModalContent>
        </div>
    )
}