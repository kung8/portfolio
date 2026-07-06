import { useEffect, useRef } from 'react';

import dayjs from 'dayjs';
import Calendar from 'react-calendar';

import closeBtn from '../../../Assets/close.png';

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
    onClickOutside,
    selectRange,
}) => {
    const today = dayjs();
    const dateInputRef = useRef(null);

    useEffect(() => {
        if (!isCalendarOpen || !onClickOutside) {
            return undefined;
        }

        const handlePointerDown = (event) => {
            if (!dateInputRef.current?.contains(event.target)) {
                onClickOutside();
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('touchstart', handlePointerDown);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('touchstart', handlePointerDown);
        };
    }, [isCalendarOpen, onClickOutside]);

    return (
        <div ref={dateInputRef} className="edit-recipe-date-input">
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