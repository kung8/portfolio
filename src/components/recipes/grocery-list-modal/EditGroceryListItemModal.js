import React from 'react';
import closeBtn from '../../../Assets/x.png';
import arrow from '../assets/arrow.png';

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
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeEditModal}>Cancel</button>
                    <button
                        className="edit-btn"
                        disabled={(
                            originalItemToEdit.name === itemToEdit.name &&
                            originalItemToEdit.category === itemToEdit.category &&
                            originalItemToEdit.recipeName === itemToEdit.recipeName
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