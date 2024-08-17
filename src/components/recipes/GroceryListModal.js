import React, { useEffect, useState } from 'react';
import closeBtn from '../../Assets/x.png';

const EMPTY_GROCERY_ITEM_ID = 'empty-grocery-list-item';
const GROCERY_ITEM_ID = 'grocery-list-item-';

const EmptyGroceryListItem = ({ setGroceryList }) => {
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState(false);

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
                        setGroceryList(prev => [...prev, { name: inputValue, checked }]);
                        setInputValue('');
                        setChecked(false);
                    }
                }}
            />
        </div>
    )
}

const GroceryListItem = ({ checked, index, groceryList, name, setGroceryList }) => {
    const [inputValue, setInputValue] = useState(name);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newGroceryList = [...groceryList];
            if (newGroceryList[index]?.name && inputValue) {
                newGroceryList[index].name = inputValue;
                setGroceryList(newGroceryList);
            }
        }, 500);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line
    }, [inputValue, index, JSON.stringify(groceryList)]);

    return (
        <div className="grocery-list-item">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                    const newGroceryList = [...groceryList];
                    newGroceryList[index].checked = !checked;
                    setGroceryList(newGroceryList);
                }}
            />
            {checked ? (
                <label className={checked ? 'checked' : ''}>{inputValue}</label>
            ) : (
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
            )}
        </div>
    )
}

export const GroceryListModal = ({ show, handleClose, groceryList, setGroceryList }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteType, setDeleteType] = useState(null);
    const showClass = show || isDeleteModalOpen ? 'opened' : '';

    const openDeleteModal = (type) => {
        setIsDeleteModalOpen(true);
        setDeleteType(type);
    }

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteType(null);
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

    return (
        <>
            <div className={`overlay ${showClass} ${isDeleteModalOpen ? 'layered-opened' : ''}`} onClick={isDeleteModalOpen ? closeDeleteModal : handleClose} />
            <div className={`grocery-list-modal ${showClass}`}>
                <div className="modal-header">
                    <h3>Grocery List</h3>
                    <button className="close" onClick={handleClose}>
                        <img src={closeBtn} alt="close" onClick={handleClose} />
                    </button>
                </div>
                <div className="grocery-list">
                    {groceryList.map((item, index) => (
                        <GroceryListItem key={item.name + '-' + index} {...{ ...item, index, groceryList, setGroceryList }} />
                    ))}
                    <EmptyGroceryListItem setGroceryList={setGroceryList} />
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
        </>
    )
}