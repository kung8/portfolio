import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_SHORT_DATE } from '../constants';
import { RecipeDateInput } from './RecipeDateInput';
import { RecipeCategoryInput } from './RecipeCategoryInput';
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from '../../modal/ModalContent';
import { getValidDateRangeError } from './getValidDateRangeError';

export const EditMealPlanModal = ({
    generateUUID,
    mealToEdit,
    setMealToEdit,
    originalMealToEdit,
    updateMeal,
    closeEditMealPlanModal,
    updateSharedIngredients,
}) => {
    const title = originalMealToEdit ? 'Update Meal' : 'Add Meal';
    const buttonText = originalMealToEdit ? 'Update' : 'Add';
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [date, setDate] = useState(originalMealToEdit?.date);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const today = dayjs();

    const [isStartMealPlanningCalendarOpen, setIsStartMealPlanningCalendarOpen] = useState(false);
    const [isEndMealPlanningCalendarOpen, setIsEndMealPlanningCalendarOpen] = useState(false);
    const [mealPlanningDateRange, setMealPlanningDateRange] = useState(originalMealToEdit?.mealPlanningDateRange ?? []);

    useEffect(() => {
        setDate(mealToEdit?.date);
    }, [mealToEdit]);

    return (
        <div className="edit-meal-plan-modal">
            <ModalContent>
                <div className="top-container">
                    <ModalHeader
                        handleClose={closeEditMealPlanModal}
                        title={title}
                    />
                    <ModalBody>
                        <input className="edit-recipe-name-input" placeholder="Meal Name" value={mealToEdit?.recipeName} onChange={(e) => setMealToEdit({ ...mealToEdit, recipeName: e.target.value })} />
                        <RecipeCategoryInput
                            isDropdownOpen={isTypeDropdownOpen}
                            handleDropdownToggle={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                            handleDropdownSelection={(option, event) => {
                                event.stopPropagation();
                                setMealToEdit(prev => ({ ...prev, type: option }));
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
                                setMealToEdit(prev => ({ ...prev, date: formattedDate }));
                                setIsCalendarOpen(false);
                            }}
                            handleClick={() => {
                                setIsStartMealPlanningCalendarOpen(false);
                                setIsEndMealPlanningCalendarOpen(false);
                                setIsCalendarOpen(!isCalendarOpen);
                            }}
                            handleDelete={() => {
                                setDate('');
                                setMealToEdit(prev => ({ ...prev, date: '' }));
                            }}
                            hasDate={!!date}
                            initialDate={new Date(date || mealPlanningDateRange?.[0] || mealPlanningDateRange?.[1] || today)}
                            isCalendarOpen={isCalendarOpen}
                            label={date ? dayjs(date).format(READABLE_SHORT_DATE) : '(Optional) Need by date...'}
                        />
                        <div className="edit-recipe-date-range-container">
                            <RecipeDateInput
                                date={mealPlanningDateRange[0]}
                                handleChange={(value) => {
                                    const formattedDate = dayjs(value).format(DATE_FORMAT);
                                    const formattedDates = [formattedDate, mealPlanningDateRange[1]];
                                    const invalid = getValidDateRangeError(formattedDates);

                                    if (formattedDates[0] && formattedDates[1] && invalid) {
                                        // reverse the dates if the range is invalid
                                        formattedDates.reverse();
                                    }

                                    setMealPlanningDateRange(formattedDates);
                                    setMealToEdit(prev => ({ ...prev, mealPlanningDateRange: formattedDates }));
                                    setIsStartMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(!isStartMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => {
                                    const formattedDates = [null, mealPlanningDateRange[1]];
                                    setMealPlanningDateRange(formattedDates);
                                    setMealToEdit(prev => ({ ...prev, mealPlanningDateRange: formattedDates }));
                                }}
                                hasDate={!!mealPlanningDateRange?.[0]}
                                initialDate={new Date(mealPlanningDateRange?.[0] || mealPlanningDateRange?.[1] || date || today)}
                                isCalendarOpen={isStartMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[0] ?
                                    dayjs(mealPlanningDateRange[0]).format(READABLE_SHORT_DATE) :
                                    'Starting range...'
                                }
                            />
                            <RecipeDateInput
                                date={mealPlanningDateRange[1]}
                                handleChange={(value) => {
                                    const formattedDate = dayjs(value).format(DATE_FORMAT);
                                    const formattedDates = [mealPlanningDateRange[0], formattedDate];
                                    const invalid = getValidDateRangeError(formattedDates);

                                    if (formattedDates[0] && formattedDates[1] && invalid) {
                                        // reverse the dates if the range is invalid
                                        formattedDates.reverse();
                                    }

                                    setMealPlanningDateRange(formattedDates);
                                    setMealToEdit(prev => ({ ...prev, mealPlanningDateRange: formattedDates }));
                                    setIsEndMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(!isEndMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => {
                                    const formattedDates = [mealPlanningDateRange[0], null];
                                    setMealPlanningDateRange(formattedDates);
                                    setMealToEdit(prev => ({ ...prev, mealPlanningDateRange: formattedDates }));
                                }}
                                hasDate={!!mealPlanningDateRange?.[1]}
                                initialDate={new Date(mealPlanningDateRange?.[1] || mealPlanningDateRange?.[0] || date || today)}
                                isCalendarOpen={isEndMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[1] ?
                                    dayjs(mealPlanningDateRange[1]).format(READABLE_SHORT_DATE) :
                                    'Ending range...'
                                }
                            />
                        </div>
                    </ModalBody>
                </div>
                <ModalFooter
                    actionLabel={buttonText}
                    disabled={(
                        originalMealToEdit?.recipeName === mealToEdit?.recipeName &&
                        originalMealToEdit?.type === mealToEdit?.type &&
                        originalMealToEdit?.date === mealToEdit?.date &&
                        originalMealToEdit?.mealPlanningDateRange?.[0] === mealToEdit?.mealPlanningDateRange?.[0] &&
                        originalMealToEdit?.mealPlanningDateRange?.[1] === mealToEdit?.mealPlanningDateRange?.[1]
                    ) || !mealToEdit?.recipeName}
                    handleAction={() => {
                        const finalMealToEdit = { ...mealToEdit };
                        if (!finalMealToEdit.id) finalMealToEdit.id = originalMealToEdit?.id ?? generateUUID();

                        if (mealToEdit?.mealPlanningDateRange?.[0] && !mealToEdit?.mealPlanningDateRange?.[1]) {
                            finalMealToEdit.mealPlanningDateRange = [mealToEdit.mealPlanningDateRange[0], mealToEdit.mealPlanningDateRange[0]];
                        } else if (!mealToEdit?.mealPlanningDateRange?.[0] && mealToEdit?.mealPlanningDateRange?.[1]) {
                            finalMealToEdit.mealPlanningDateRange = [mealToEdit.mealPlanningDateRange[1], mealToEdit.mealPlanningDateRange[1]];
                        }
                        // update the meal
                        updateMeal(originalMealToEdit, finalMealToEdit);

                        // update the shared ingredients
                        updateSharedIngredients(originalMealToEdit, finalMealToEdit);

                        closeEditMealPlanModal();
                    }}
                    handleCancel={closeEditMealPlanModal}
                />
            </ModalContent>
        </div>
    )
}