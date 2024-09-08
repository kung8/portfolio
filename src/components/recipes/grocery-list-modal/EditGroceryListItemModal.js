import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import closeBtn from '../../../Assets/x.png';
import arrow from '../assets/arrow.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const EditGroceryListItemModal = ({
    itemToEdit,
    setItemToEdit,
    originalItemToEdit,
    updateItem,
    closeEditModal,
    categories,
    isCategoryDropdownOpen,
    setIsCategoryDropdownOpen
}) => {
    const [date, setDate] = useState(originalItemToEdit.date);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const today = dayjs();    

    useEffect(() => {
        setDate(itemToEdit.date);
    }, [itemToEdit]);

    return (
        <div className="edit-ingredient-modal">
            <div className="modal-content">
                <div className="top-container">
                    <div className="modal-header">
                        <h3>Update Ingredient</h3>
                        <img src={closeBtn} alt="close" onClick={closeEditModal} />
                    </div>
                    <div className="modal-body">
                        <input className="edit-ingredient-input" placeholder="Ingredient Name" value={itemToEdit?.name} onChange={(e) => setItemToEdit({ ...itemToEdit, name: e.target.value })} />
                        <div className="category-dropdown-container">
                            <li className="selected-category category-selector-item" onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}>
                                <span>{itemToEdit.category}</span>
                                <img src={arrow} alt="arrow" className={`chevron-arrow ${isCategoryDropdownOpen ? 'is-open' : ''}`} />
                            </li>
                            <ul className={`category-selector ${isCategoryDropdownOpen ? 'is-open' : ''}`}>
                                {categories.map((option) => (
                                    <li
                                        key={option}
                                        value={option}
                                        className="category-selector-item"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setItemToEdit({ ...itemToEdit, category: option });
                                            setIsCategoryDropdownOpen(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <input className="edit-recipe-name-input" placeholder="(Optional) Add what this is needed for..." value={itemToEdit?.recipeName} onChange={(e) => setItemToEdit({ ...itemToEdit, recipeName: e.target.value })} />
                        <div className="edit-recipe-date-input">
                            <span className="edit-recipe-date-label" onClick={() => setIsCalendarOpen(!isCalendarOpen)}>{date ? date : '(Optional) Set a due date...'}</span>
                            {isCalendarOpen && (
                                <Calendar
                                    minDate={new Date(today)}
                                    onChange={(value) => {
                                        const formattedDate = dayjs(value).format('MMMM D, YYYY');
                                        setDate(formattedDate);
                                        setItemToEdit({ ...itemToEdit, date: formattedDate });
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
                    <button className="cancel-btn" onClick={closeEditModal}>Cancel</button>
                    <button
                        className="edit-btn"
                        disabled={(
                            originalItemToEdit.name === itemToEdit.name &&
                            originalItemToEdit.category === itemToEdit.category &&
                            originalItemToEdit.recipeName === itemToEdit.recipeName && 
                            originalItemToEdit.date === itemToEdit.date
                        ) || !itemToEdit.name
                        }
                        onClick={() => {
                            updateItem(originalItemToEdit, itemToEdit);
                            closeEditModal();
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}