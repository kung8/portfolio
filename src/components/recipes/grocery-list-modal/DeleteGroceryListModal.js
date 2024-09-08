import React from 'react';
import closeBtn from '../../../Assets/x.png';

export const DeleteGroceryListModal = ({
    deleteTitle,
    closeDeleteModal,
    handleDelete
}) => {
    return (
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
    )
}