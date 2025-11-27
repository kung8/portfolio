import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import { useDebounce } from 'use-debounce';

import edit from '../../../Assets/edit.png';
import { READABLE_SHORT_DATE } from '../constants';
import { GROCERY_LIST_SORT_BY_CATEGORY, GROCERY_LIST_SORT_BY_DATE, GROCERY_LIST_SORT_BY_VENDOR, baseUrl } from '../utils';
import { useGroceryList } from '../hooks/use-grocery-list';

export const GroceryListItem = ({
    category,
    checked,
    date,
    name,
    openEditModal,
    onCheckboxChange,
    onEmptyInputChange,
    onInputChange,
    recipeLink,
    recipeName,
    recipeYield,
    sortBy,
    vendor
}) => {
    const [inputValue, setInputValue] = useState(name);
    const [debouncedValue] = useDebounce(inputValue, 1000);

    useEffect(() => {
        if (debouncedValue !== name) {
            onInputChange(debouncedValue);
        }
        // eslint-disable-next-line
    }, [debouncedValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const {
        setShow: setShowGroceryListModal,
        handleClose: closeGroceryListModal,
    } = useGroceryList();

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
                            onChange={handleInputChange}
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
                {recipeName && (
                    <p className="recipe-name">
                        <span className="needed-for">Needed for</span>
                        {recipeLink ? (
                            <span
                                className="recipe-name-text"
                                onClick={() => {
                                    // route to recipe page
                                    window.location.href = baseUrl + recipeLink;

                                    // close modal and remove some styling
                                    setShowGroceryListModal(false);
                                    closeGroceryListModal();
                                }}
                            >
                                "{recipeName}"
                            </span>
                        ) : (
                            <span className="recipe-name-text">"{recipeName}"</span>
                        )}
                    </p>
                )}
                {recipeYield && (
                    <p className={`recipe-yield ${sortBy === GROCERY_LIST_SORT_BY_DATE ? 'recipe-yield-date' : sortBy === GROCERY_LIST_SORT_BY_VENDOR ? 'recipe-yield-vendor' : 'recipe-yield-category'}`}>
                        <span>Yields</span>
                        <span className="recipe-yield-text">{recipeYield}</span>
                    </p>
                )}
                {sortBy !== GROCERY_LIST_SORT_BY_CATEGORY && category && <p className="recipe-category"><span>{category}</span></p>}
                {sortBy !== GROCERY_LIST_SORT_BY_DATE && date && <p className="recipe-date"><span>Needed on {dayjs(date).format(READABLE_SHORT_DATE)}</span></p>}
                {sortBy !== GROCERY_LIST_SORT_BY_VENDOR && vendor && (<p className="recipe-vendor"><span>Buy at {vendor}</span></p>)}
            </div>
        </div>
    )
}