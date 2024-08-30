import React, { useEffect, useState } from 'react';
import closeBtn from '../../Assets/x.png';
import { useGetIngredientCategories, useGetIngredients } from '../../hooks';
import arrow from './arrow.png';
import pencil from './pencil.png';

const EMPTY_GROCERY_ITEM_ID = 'empty-grocery-list-item';
const GROCERY_ITEM_ID = 'grocery-list-item-';

const EmptyGroceryListItem = ({ setGroceryList }) => {
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState(false);
    const { data: ingredients } = useGetIngredients();

    return (
        <div className="grocery-list-item">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <input
                id={EMPTY_GROCERY_ITEM_ID}
                type="text"
                placeholder="Add item"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue) {
                        const matchingIngredients = ingredients.filter(ingredient => ingredient.name.includes(inputValue.toLowerCase()));

                        let category = 'Other';
                        if (matchingIngredients.length === 1) {
                            category = matchingIngredients[0].category;
                        } else if (matchingIngredients.length > 1) {
                            const categories = matchingIngredients.map(ingredient => ingredient.category);
                            // logic to see if there's only one category type
                            const uniqueCategories = [...new Set(categories)];
                            if (uniqueCategories.length === 1) {
                                category = uniqueCategories[0];
                            }
                            // logic to see which is a dominant category
                            else {
                                const counts = categories.reduce((acc, category) => ({
                                    ...acc,
                                    [category]: (acc[category] || 0) + 1
                                }), {});

                                const maxCount = Math.max(...Object.values(counts));
                                const matchingCount = Object.entries(counts).filter(([_category, value]) => value === maxCount);
                                if (matchingCount.length === 1) {
                                    category = matchingCount[0][0];
                                }
                            }
                        }

                        setGroceryList(prev => [...prev, { name: inputValue, index: prev.length, checked, category }]);
                        setInputValue('');
                        setChecked(false);
                    }
                }}
            />
        </div>
    )
}

const GroceryListItem = ({ checked, index, groceryList, name, openEditModal, onCheckboxChange, onInputChange, recipeName, setGroceryList }) => {
    const [inputValue, setInputValue] = useState(name);

    useEffect(() => {
        if (inputValue !== name) {
            const timeout = setTimeout(() => {
                onInputChange(inputValue);
            }, 500);

            return () => clearTimeout(timeout);
        }
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
                        <img onClick={openEditModal} src={pencil} alt="pencil" className="edit-icon" />
                    </div>
                ) : (
                    <div className="grocery-input-container">
                        <input
                            id={GROCERY_ITEM_ID + index}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={async (e) => {
                                const getNextItem = (nextItem, nextIndex) => {
                                    if (nextItem) {
                                        document.getElementById(GROCERY_ITEM_ID + nextIndex).focus();
                                    } else {
                                        document.getElementById(EMPTY_GROCERY_ITEM_ID).focus();
                                    }
                                }

                                if (e.key === 'Enter') {
                                    const nextIndex = index + 1;
                                    const nextItem = groceryList[nextIndex];
                                    if (!inputValue) {
                                        await setGroceryList(prev => prev.filter((_, i) => i !== index))
                                        getNextItem(nextItem, index);
                                    } else {
                                        getNextItem(nextItem, nextIndex);
                                    }
                                }
                            }}
                        />
                        <img onClick={openEditModal} src={pencil} alt="pencil" className="edit-icon" />
                    </div>
                )}
                {recipeName && <p className="recipe-name"><span>Needed for</span> {recipeName}</p>}
            </div>
        </div>
    )
}

export const GroceryListModal = ({ show, handleClose, groceryList, setGroceryList }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [originalItemToEdit, setOriginalItemToEdit] = useState(null);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [deleteType, setDeleteType] = useState(null);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const showClass = show || isDeleteModalOpen || isEditModalOpen ? 'opened' : '';

    const openDeleteModal = (type) => {
        setIsDeleteModalOpen(true);
        setDeleteType(type);
    }

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteType(null);
    }

    const openEditModal = (item) => {
        setIsEditModalOpen(true);
        setOriginalItemToEdit(item);
        setItemToEdit(item);
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setOriginalItemToEdit(null);
        setItemToEdit(null);
    }

    const handleDelete = () => {
        if (!deleteType) return;
        if (deleteType === 'checked') {
            setGroceryList(prev => prev.filter(item => !item.checked));
        } else if (deleteType === 'all') {
            setGroceryList([]);
        }
        closeDeleteModal();
    }

    useEffect(() => {
        if (show && document.getElementById(EMPTY_GROCERY_ITEM_ID)) {
            document.getElementById(EMPTY_GROCERY_ITEM_ID).focus();
        }
    }, [show]);

    const deleteTitle = deleteType === 'all' ? 'Are you sure you want to delete all the items?' : 'Are you sure you want to delete all the checked items?'

    const displayedIngredientsList = Object.entries((groceryList || [])?.reduce((group, ingredient) => {
        if (!group[ingredient.category]) group[ingredient.category] = [];
        group[ingredient.category].push(ingredient);
        return group;
    }, {})).sort((a, b) => {
        if (a[0] === 'Other') return 1;
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });

    const updateItem = (originalItem, newItemValue) => {
        const newGroceryList = [...groceryList];
        const foundItem = newGroceryList.findIndex((item) => originalItem.index === item.index && originalItem.name === item.name);
        if (foundItem > -1) {
            const updatedItem = { ...originalItem, ...newItemValue };
            newGroceryList[foundItem] = updatedItem;
        }
        setGroceryList(newGroceryList);
    }

    const { data: categories } = useGetIngredientCategories();

    return (
        <>
            <div className="grocery-list-modal-container">
                <div className={`overlay ${showClass} ${isDeleteModalOpen || isEditModalOpen ? 'layered-opened' : ''}`} onClick={isDeleteModalOpen ? closeDeleteModal : isEditModalOpen ? closeEditModal : handleClose} />
                <div className={`grocery-list-modal ${showClass}`}>
                    <div className="modal-header">
                        <h3>Grocery List</h3>
                        <button className="close" onClick={handleClose}>
                            <img src={closeBtn} alt="close" onClick={handleClose} />
                        </button>
                    </div>
                    <div className="grocery-list">
                        <EmptyGroceryListItem setGroceryList={setGroceryList} />
                        {displayedIngredientsList.map(([category, ingredients]) => (
                            <div key={category} className="category-ingredient-container">
                                <h6 className="ingredient-category">{category}</h6>
                                {ingredients.map((ingredient, index) => {
                                    return (
                                        <GroceryListItem
                                            key={ingredient.name + '-' + index}
                                            {...{ ...ingredient, index, groceryList, setGroceryList }}
                                            onInputChange={(value) => updateItem(ingredient, { name: value })}
                                            onCheckboxChange={() => updateItem(ingredient, { checked: !ingredient.checked })}
                                            onCategoryChange={(value) => updateItem(ingredient, { category: value })}
                                            openEditModal={() => openEditModal(ingredient)}
                                        />
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <span onClick={groceryList.filter(item => item.checked).length > 0 ? () => openDeleteModal('checked') : undefined} className={groceryList.filter(item => item.checked).length > 0 ? 'has-values' : ''}>Delete Checked</span>
                        <span onClick={groceryList.length > 0 ? () => openDeleteModal('all') : undefined} className={groceryList.length > 0 ? 'has-values' : ''}>Delete All</span>
                    </div>
                </div>
                {isDeleteModalOpen && (
                    <div className="delete-grocery-item-modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>{deleteTitle}</h3>
                                <img src={closeBtn} alt="close" onClick={closeDeleteModal} />
                            </div>
                            <div className="modal-footer">
                                <button className="cancel-btn" onClick={closeDeleteModal}>No</button>
                                <button className="delete-btn" onClick={handleDelete}>Yes</button>
                            </div>
                        </div>
                    </div>
                )}
                {isEditModalOpen && originalItemToEdit && (
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
                )}
            </div>
        </>
    )
}