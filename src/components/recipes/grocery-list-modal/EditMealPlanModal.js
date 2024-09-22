import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import xBtn from '../../../Assets/x.png';
import closeBtn from '../../../Assets/close.png';
import arrow from '../../../Assets/arrow.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_LONG_DATE_FORMAT } from '../constants';

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
    const today = dayjs();

    useEffect(() => {
        setDate(mealToEdit?.date);
    }, [mealToEdit]);

    return (
        <div className="edit-meal-plan-modal">
            <div className="modal-content">
                <div className="top-container">
                    <div className="modal-header">
                        <h3>{title}</h3>
                        <img src={xBtn} alt="close" onClick={closeEditMealPlanModal} />
                    </div>
                    <div className="modal-body">
                        <input className="edit-recipe-name-input" placeholder="Meal Name" value={mealToEdit?.recipeName} onChange={(e) => setMealToEdit({ ...mealToEdit, recipeName: e.target.value })} />
                        <div className="category-dropdown-container">
                            <li className="selected-category category-selector-item" onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}>
                                <span>{mealToEdit?.type}</span>
                                <img src={arrow} alt="arrow" className={`chevron-arrow ${isTypeDropdownOpen ? 'is-open' : ''}`} />
                            </li>
                            <ul className={`category-selector ${isTypeDropdownOpen ? 'is-open' : ''}`}>
                                {MEAL_PLAN_MEAL_TYPES.map((option) => (
                                    <li
                                        key={option}
                                        value={option}
                                        className="category-selector-item"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setMealToEdit({ ...mealToEdit, type: option });
                                            setIsTypeDropdownOpen(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="edit-recipe-date-input">
                            <p className="edit-recipe-date-label-container">
                                <span className={`edit-recipe-date-label ${!date ? 'is-default' : ''}`} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>{date ? dayjs(date).format(READABLE_LONG_DATE_FORMAT) : '(Optional) Set when you need it by...'}</span>
                                {date && (
                                    <img
                                        className="delete-date-btn"
                                        src={closeBtn}
                                        alt="delete date"
                                        onClick={() => {
                                            setDate('');
                                            setMealToEdit({ ...mealToEdit, date: '' });
                                        }}
                                    />
                                )}
                            </p>
                            {isCalendarOpen && (
                                <Calendar
                                    minDate={new Date(today)}
                                    onChange={(value) => {
                                        const formattedDate = dayjs(value).format(DATE_FORMAT);
                                        setDate(formattedDate);
                                        setMealToEdit({ ...mealToEdit, date: formattedDate });
                                        setIsCalendarOpen(false);
                                    }}
                                    prev2Label={null}
                                    next2Label={null}
                                    value={date}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeEditMealPlanModal}>Cancel</button>
                    <button
                        className="edit-btn"
                        disabled={(
                            originalMealToEdit?.recipeName === mealToEdit?.recipeName &&
                            originalMealToEdit?.type === mealToEdit?.type &&
                            originalMealToEdit?.date === mealToEdit?.date
                        ) || !mealToEdit?.recipeName
                        }
                        onClick={() => {
                            updateMeal(originalMealToEdit, mealToEdit);
                            closeEditMealPlanModal();
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}