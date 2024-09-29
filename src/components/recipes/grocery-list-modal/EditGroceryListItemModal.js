import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useGetIngredientCategories } from '../../../hooks';
import { DATE_FORMAT, READABLE_LONG_DATE_FORMAT } from '../constants';
import { RecipeDateInput } from './RecipeDateInput';
import { RecipeCategoryInput } from './RecipeCategoryInput';
import { RecipeModalBody, RecipeModalContent, RecipeModalFooter, RecipeModalHeader } from './RecipeModalContent';

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

    const [isMealPlanningCalendarOpen, setIsMealPlanningCalendarOpen] = useState(false);
    const [mealPlanningDateRange, setMealPlanningDateRange] = useState(originalItemToEdit.mealPlanningDateRange ?? []);

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
                                setIsMealPlanningCalendarOpen(false);
                                setIsCalendarOpen(!isCalendarOpen)
                            }}
                            handleDelete={() => {
                                setDate('');
                                setItemToEdit({ ...itemToEdit, date: '' });
                            }}
                            hasDate={!!date}
                            isCalendarOpen={isCalendarOpen}
                            label={date ? dayjs(date).format(READABLE_LONG_DATE_FORMAT) : '(Optional) Need by date...'}
                        />
                        <RecipeDateInput
                            date={mealPlanningDateRange}
                            handleChange={(value) => {
                                const formattedDates = value.map(date => dayjs(date).format(DATE_FORMAT));
                                setMealPlanningDateRange(formattedDates);
                                setItemToEdit({ ...itemToEdit, mealPlanningDateRange: formattedDates });
                            }}
                            handleClick={() => {
                                setIsCalendarOpen(false);
                                setIsMealPlanningCalendarOpen(!isMealPlanningCalendarOpen)
                            }}
                            handleDelete={() => {
                                setMealPlanningDateRange([]);
                                setItemToEdit({ ...itemToEdit, mealPlanningDateRange: [] });
                            }}
                            hasDate={mealPlanningDateRange?.length > 0}
                            isCalendarOpen={isMealPlanningCalendarOpen}
                            label={mealPlanningDateRange.length ?
                                `${dayjs(mealPlanningDateRange[0]).format(READABLE_LONG_DATE_FORMAT)} - ${dayjs(mealPlanningDateRange[1]).format(READABLE_LONG_DATE_FORMAT)}` :
                                '(Optional) Meal prep date range...'}
                            selectRange
                        />
                    </RecipeModalBody>
                </div>
                <RecipeModalFooter
                    actionLabel={'Save'}
                    handleAction={() => {
                        updateItem(originalItemToEdit, itemToEdit);
                        closeEditIngredientModal();
                    }}
                    handleCancel={closeEditIngredientModal}
                    disabled={(
                        originalItemToEdit.name === itemToEdit.name &&
                        originalItemToEdit.category === itemToEdit.category &&
                        originalItemToEdit.recipeName === itemToEdit.recipeName &&
                        originalItemToEdit.date === itemToEdit.date &&
                        originalItemToEdit.mealPlanningDateRange === itemToEdit.mealPlanningDateRange
                    ) || !itemToEdit.name}
                />
            </RecipeModalContent>
        </div>
    )
}