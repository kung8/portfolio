import React, { useEffect, useState } from 'react';
import { GroceryListModalHeader } from './GroceryListModalHeader';
import { GroceryListModalContent } from './GroceryListModalContent';
import { DeleteGroceryListModal } from './DeleteGroceryListModal';
import { EditGroceryListItemModal } from './EditGroceryListItemModal';

const GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY = 'groceryListSortBy';

export const GroceryListModal = ({ show, handleClose, groceryList, setGroceryList }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [originalItemToEdit, setOriginalItemToEdit] = useState(null);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [deleteType, setDeleteType] = useState(null);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

    const showClass = show || isDeleteModalOpen || isEditModalOpen ? 'opened' : '';
    const sortByFromLocalStorage = localStorage.getItem(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY);
    const [sortBy, setSortBy] = useState(sortByFromLocalStorage || 'category');

    useEffect(() => {
        localStorage.setItem(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY, sortBy);
    }, [sortBy]);

    const deleteTitle = deleteType === 'all' ? 'Are you sure you want to delete all the items?' : 'Are you sure you want to delete all the checked items?'

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteType(null);
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

    const updateItem = (originalItem, newItemValue) => {
        const newGroceryList = [...groceryList];
        const foundItem = newGroceryList.findIndex((item) => originalItem.index === item.index && originalItem.name === item.name);
        if (foundItem > -1) {
            const updatedItem = { ...originalItem, ...newItemValue };
            newGroceryList[foundItem] = updatedItem;
        }
        setGroceryList(newGroceryList);
    }

    const [selectedView, setSelectedView] = useState('groceryList');

    return (
        <>
            <div className="grocery-list-modal-container">
                <div className={`overlay ${showClass} ${isDeleteModalOpen || isEditModalOpen ? 'layered-opened' : ''}`} onClick={isDeleteModalOpen ? closeDeleteModal : isEditModalOpen ? closeEditModal : handleClose} />
                <div className={`grocery-list-modal ${showClass}`}>
                    <GroceryListModalHeader
                        handleClose={handleClose}
                        setSelectedView={setSelectedView}
                        selectedView={selectedView}
                    />
                    {selectedView === 'groceryList' && (
                        <GroceryListModalContent
                            {...{
                                groceryList,
                                setGroceryList,
                                setSortBy,
                                sortBy,
                                setIsDeleteModalOpen,
                                setIsEditModalOpen,
                                setOriginalItemToEdit,
                                setItemToEdit,
                                setDeleteType,
                                updateItem
                            }}
                        />
                    )}
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
                    isCategoryDropdownOpen={isCategoryDropdownOpen}
                    setIsCategoryDropdownOpen={setIsCategoryDropdownOpen}
                />
            )}
        </>
    )
}