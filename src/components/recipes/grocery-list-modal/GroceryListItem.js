import React, { useEffect, useState } from 'react';
import edit from '../assets/edit.png';

export const GroceryListItem = ({
    checked,
    date,
    name,
    openEditModal,
    onCheckboxChange,
    onEmptyInputChange,
    onInputChange,
    recipeName
}) => {
    const [inputValue, setInputValue] = useState(name);

    useEffect(() => {
        if (inputValue !== name) {
            const timeout = setTimeout(() => {
                onInputChange(inputValue);
            }, 500);

            return () => clearTimeout(timeout);
        }
        // eslint-disable-next-line
    }, [inputValue]);

    return (
        <div className="grocery-list-item">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onCheckboxChange()}
            />
            <div className="grocery-list-item-detail-container">
                {checked ? (
                    <div className="grocery-input-container">
                        <label className={checked ? 'checked' : ''}>{inputValue}</label>
                        <img onClick={openEditModal} src={edit} alt="edit" className="edit-icon" />
                    </div>
                ) : (
                    <div className="grocery-input-container">
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
                        <img onClick={openEditModal} src={edit} alt="edit" className="edit-icon" />
                    </div>
                )}
                {recipeName && <p className="recipe-name"><span>Needed for</span> "{recipeName}"</p>}
                {date && <p className="recipe-date"><span>Needed on {date}</span></p>}
            </div>
        </div>
    )
}