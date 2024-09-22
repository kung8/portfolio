import React from 'react';
import closeBtn from '../../../Assets/x.png';

export const DeleteGroceryListModal = ({
    closeDeleteIngredientModal,
    deleteType,
    setGroceryList,
}) => {
    const deleteTitle = deleteType === 'all' ? 'Are you sure you want to delete all the items?' : 'Are you sure you want to delete all the checked items?'

    const handleDelete = () => {
        if (!deleteType) return;
        if (deleteType === 'checked') {
            setGroceryList(prev => prev.filter(item => !item.checked));
        } else if (deleteType === 'all') {
            setGroceryList([]);
        }
        closeDeleteIngredientModal();
    }

    return (
        <div className="delete-grocery-item-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{deleteTitle}</h3>
                    <img src={closeBtn} alt="close" onClick={closeDeleteIngredientModal} />
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeDeleteIngredientModal}>No</button>
                    <button className="delete-btn" onClick={handleDelete}>Yes</button>
                </div>
            </div>
        </div>
    )
}