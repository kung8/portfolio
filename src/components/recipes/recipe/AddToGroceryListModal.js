import React, { useState } from 'react';
import dayjs from 'dayjs';
import xBtn from '../../../Assets/x.png';
import closeBtn from '../../../Assets/close.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const AddToGroceryListModal = ({
    closeModal,
    onAdd,
}) => {
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
                        <div className="edit-recipe-date-input">
                            <p className="edit-recipe-date-label-container">
                                <span className="edit-recipe-date-label" onClick={() => setIsCalendarOpen(!isCalendarOpen)}>{date ? date : '(Optional) Set when you need it by...'}</span>
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
                                        const formattedDate = dayjs(value).format('MMMM D, YYYY');
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
                        onClick={() => {
                            onAdd(date);
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