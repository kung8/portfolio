import React, { useState } from 'react';
import dayjs from 'dayjs';
import xBtn from '../../../Assets/x.png';
import closeBtn from '../../../Assets/close.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import arrow from '../../../Assets/arrow.png';
import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_LONG_DATE_FORMAT } from '../constants';

export const AddToGroceryListModal = ({
    closeModal,
    onAdd,
    initialType,
}) => {
    const [type, setType] = useState(initialType ?? MEAL_PLAN_MEAL_TYPES[0]);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [date, setDate] = useState('');
    const today = dayjs();

    return (
        <div className="add-to-grocery-list-modal">
            <div className="modal-content">
                <div className="top-container">
                    <div className="modal-header">
                        <h3>Add to Grocery List</h3>
                        <img src={xBtn} alt="close" onClick={closeModal} />
                    </div>
                    <div className="modal-body">
                        <div className="category-dropdown-container">
                            <li className="selected-category category-selector-item" onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}>
                                <span>{type || 'Meal Type'}</span>
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
                                            setType(option);
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
                                        onClick={() => setDate(null)}
                                    />
                                )}
                            </p>
                            {isCalendarOpen && (
                                <Calendar
                                    minDate={new Date(today)}
                                    onChange={(value) => {
                                        const formattedDate = dayjs(value).format(DATE_FORMAT);
                                        setDate(formattedDate);
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
                    <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                    <button
                        className="add-btn"
                        disabled={!date || !type}
                        onClick={() => {
                            onAdd(date, type);
                            closeModal();
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}