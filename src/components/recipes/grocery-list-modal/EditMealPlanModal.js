import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_LONG_DATE_FORMAT } from '../constants';
import { RecipeDateInput } from './RecipeDateInput';
import { RecipeCategoryInput } from './RecipeCategoryInput';
import { RecipeModalBody, RecipeModalContent, RecipeModalFooter, RecipeModalHeader } from './RecipeModalContent';

export const EditMealPlanModal = ({
    mealToEdit,
    setMealToEdit,
    originalMealToEdit,
    updateMeal,
    closeEditMealPlanModal,
}) => {
    const title = originalMealToEdit ? 'Update Meal' : 'Add Meal';
    const buttonText = originalMealToEdit ? 'Update' : 'Add';
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [date, setDate] = useState(originalMealToEdit?.date);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const [isMealPlanningCalendarOpen, setIsMealPlanningCalendarOpen] = useState(false);
    const [mealPlanningDateRange, setMealPlanningDateRange] = useState(originalMealToEdit.mealPlanningDateRange ?? []);

    useEffect(() => {
        setDate(mealToEdit?.date);
    }, [mealToEdit]);

    return (
        <div className="edit-meal-plan-modal">
            <RecipeModalContent>
                <div className="top-container">
                    <RecipeModalHeader 
                        handleClose={closeEditMealPlanModal}
                        title={title}
                    />
                    <RecipeModalBody>
                        <input className="edit-recipe-name-input" placeholder="Meal Name" value={mealToEdit?.recipeName} onChange={(e) => setMealToEdit({ ...mealToEdit, recipeName: e.target.value })} />
                        <RecipeCategoryInput 
                            isDropdownOpen={isTypeDropdownOpen}
                            handleDropdownToggle={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                            handleDropdownSelection={(e) => {
                                e.stopPropagation();
                                setMealToEdit({ ...mealToEdit, type: e.target.value });
                                setIsTypeDropdownOpen(false);
                            }}
                            label={mealToEdit.type}
                            options={MEAL_PLAN_MEAL_TYPES}
                        />
                        <RecipeDateInput
                            date={date}
                            handleChange={(value) => {
                                const formattedDate = dayjs(value).format(DATE_FORMAT);
                                setDate(formattedDate);
                                setMealToEdit({ ...mealToEdit, date: formattedDate });
                                setIsCalendarOpen(false);
                            }}
                            handleClick={() => {
                                setIsMealPlanningCalendarOpen(false);
                                setIsCalendarOpen(!isCalendarOpen);
                            }}
                            handleDelete={() => {
                                setDate('');
                                setMealToEdit((prev) => ({ ...prev, date: '' }));
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
                                setMealToEdit({ ...mealToEdit, mealPlanningDateRange: formattedDates });
                            }}
                            handleClick={() => {
                                setIsCalendarOpen(false);
                                setIsMealPlanningCalendarOpen(!isMealPlanningCalendarOpen);
                            }}
                            handleDelete={() => {
                                setMealPlanningDateRange([]);
                                setMealToEdit((prev) => ({ ...prev, mealPlanningDateRange: [] }));
                            }}
                            hasDate={mealPlanningDateRange?.length > 0}
                            isCalendarOpen={isMealPlanningCalendarOpen}
                            label={mealPlanningDateRange.length ? `${dayjs(mealPlanningDateRange[0]).format(READABLE_LONG_DATE_FORMAT)} - ${dayjs(mealPlanningDateRange[1]).format(READABLE_LONG_DATE_FORMAT)}` : '(Optional) Meal prep date range...'}
                            selectRange
                        />
                    </RecipeModalBody>
                </div>
                <RecipeModalFooter
                    actionLabel={buttonText}
                    disabled={(
                        originalMealToEdit?.recipeName === mealToEdit?.recipeName &&
                        originalMealToEdit?.type === mealToEdit?.type &&
                        originalMealToEdit?.date === mealToEdit?.date &&
                        originalMealToEdit?.mealPlanningDateRange === mealToEdit?.mealPlanningDateRange
                    ) || !mealToEdit?.recipeName}
                    handleAction={() => {
                        updateMeal(originalMealToEdit, mealToEdit);
                        closeEditMealPlanModal();
                    }}
                    handleCancel={closeEditMealPlanModal}
                />
            </RecipeModalContent>
        </div>
    )
}