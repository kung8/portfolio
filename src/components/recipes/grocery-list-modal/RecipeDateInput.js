import React from 'react';
import dayjs from 'dayjs';
import closeBtn from '../../../Assets/close.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const RecipeDateInput = ({
    date,
    handleChange,
    handleClick,
    handleDelete,
    hasDate,
    initialDate,
    isCalendarOpen,
    label,
    selectRange,
}) => {
    const today = dayjs();

    return (
        <div className="edit-recipe-date-input">
            <p className="edit-recipe-date-label-container">
                <span
                    className={`edit-recipe-date-label ${hasDate ? '' : 'is-default'}`}
                    onClick={handleClick}
                >
                    {label}
                </span>
                {hasDate && (
                    <img
                        className="delete-date-btn"
                        src={closeBtn}
                        alt="delete date"
                        onClick={handleDelete}
                    />
                )}
            </p>
            {isCalendarOpen && (
                <Calendar
                    calendarType='gregory'
                    minDate={new Date(today)}
                    onChange={handleChange}
                    next2Label={null}
                    prev2Label={null}
                    selectRange={selectRange}
                    value={date ?? initialDate}
                />
            )}
        </div>
    )
}