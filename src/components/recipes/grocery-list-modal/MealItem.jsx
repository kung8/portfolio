import { useEffect, useState } from 'react';

import edit from '../../../Assets/edit.png';
import { baseUrl } from '../utils';
import { useGroceryList } from '../hooks/use-grocery-list';

export const MealItem = ({ item, onCheckboxChange, onEditClick, onEmptyInputChange, onInputChange, showDate, showType }) => {
    const { checked, date, mealPlanningDateRange, recipeName, recipeLink, type } = item;
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
    }, [recipeName]);

    const {
        setShow: setShowGroceryListModal,
        handleClose: closeGroceryListModal,
    } = useGroceryList();

    return (
        <li className="meal-item-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onCheckboxChange()}
            />
            <div className="meal-item-details-container">
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
                {recipeLink && (
                    <span
                        className="meal-item-recipe-link"
                        onClick={() => {
                            // route to recipe page
                            window.location.href = baseUrl + recipeLink;

                            // close modal and remove some styling
                            setShowGroceryListModal(false);
                            closeGroceryListModal();
                        }}
                    >
                        View by Recipe
                    </span>
                )}
            </div>
        </li>
    )
}