import React, { useState } from 'react';
import closeBtn from '../../../Assets/x.png';
import { useGetIngredientCategories } from '../../../hooks';
import { EmptyGroceryListItem } from './EmptyGroceryListItem';
import { GroceryListItem } from './GroceryListItem';
import { DeleteGroceryListModal } from './DeleteGroceryListModal';
import { EditGroceryListItemModal } from './EditGroceryListItemModal';
// import Calendar from 'react-calendar';

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

    const removeItem = async (index) => {
        const newGroceryList = [...groceryList].filter(ingredient => ingredient.index !== index);
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
                                            {...{ ...ingredient }}
                                            onInputChange={(value) => updateItem(ingredient, { name: value })}
                                            onCheckboxChange={() => updateItem(ingredient, { checked: !ingredient.checked })}
                                            onCategoryChange={(value) => updateItem(ingredient, { category: value })}
                                            openEditModal={() => openEditModal(ingredient)}
                                            onEmptyInputChange={() => removeItem(ingredient.index)}
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
                    <DeleteGroceryListModal 
                        deleteTitle={deleteTitle}
                        closeDeleteModal={closeDeleteModal}
                        handleDelete={handleDelete}
                    />
                )}
                {isEditModalOpen && originalItemToEdit && (
                    <EditGroceryListItemModal 
                        itemToEdit={itemToEdit}
                        setItemToEdit={setItemToEdit}
                        originalItemToEdit={originalItemToEdit}
                        updateItem={updateItem}
                        closeEditModal={closeEditModal}
                        categories={categories}
                        isCategoryDropdownOpen={isCategoryDropdownOpen}
                        setIsCategoryDropdownOpen={setIsCategoryDropdownOpen}
                    />
                )}
            </div>
        </>
    )
}