import React, { useEffect, useState } from 'react';
import edit from '../../../Assets/edit.png';

export const MealItem = ({ item, onCheckboxChange, onEditClick, onEmptyInputChange, onInputChange, showDate, showType }) => {
    const { checked, date, mealPlanningDateRange, recipeName, type } = item;
    const [inputValue, setInputValue] = useState(recipeName);    

    useEffect(() => {
        if (inputValue !== recipeName) {
            const timeout = setTimeout(() => {
                onInputChange(inputValue);
            }, 500);

            return () => clearTimeout(timeout);
        }
        // eslint-disable-next-line
    }, [inputValue]);

    useEffect(() => {
        if (recipeName !== inputValue) setInputValue(recipeName);
        // eslint-disable-next-line
    }, [recipeName])
    

    return (
        <li className="meal-item-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onCheckboxChange()}
            />
            {checked ? (
                <div className="meal-item-content">
                    <div className="meal-text-input-container">
                        <label className={checked ? 'checked' : ''}>{inputValue}</label>
                        <img
                            onClick={onEditClick}
                            src={edit} alt="edit" className="edit-icon" />
                    </div>
                    {showDate && <span className="meal-item-date">{mealPlanningDateRange?.length > 0 ? mealPlanningDateRange.join('-') : date}</span>}
                    {showType && <span className="meal-item-meal-type">{type}</span>}
                </div>
            ) : (
                <div className="meal-item-content">
                    <div className="meal-text-input-container">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    if (!inputValue) {
                                        onEmptyInputChange();
                                    }
                                }
                            }}
                        />
                        <img
                            onClick={onEditClick}
                            src={edit} alt="edit" className="edit-icon" />
                    </div>
                    {showDate && <span className="meal-item-date">{mealPlanningDateRange?.length > 0 ? mealPlanningDateRange.join('-') : date}</span>}
                    {showType && <span className="meal-item-meal-type">{type}</span>}
                </div>
            )}
        </li>
    )
}