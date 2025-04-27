import React from 'react';
import closeBtn from '../../../Assets/x.png';

export const DeleteMealPlanModal = ({
    closeDeleteMealPlanModal,
    deleteType,
    setMealPlan,
    updateLocalStorage
}) => {
    const deleteTitle = deleteType === 'all' ? 'Are you sure you want to delete all the items?' : 'Are you sure you want to delete all the checked items?'

    const handleDelete = () => {
        if (!deleteType) return;
        if (deleteType === 'checked') {
            setMealPlan(prev => {
                const newMealPlan = prev.filter(item => !item.checked);
                updateLocalStorage({ mealPlan: newMealPlan });
                return newMealPlan;
            });
        } else if (deleteType === 'all') {
            setMealPlan([]);
            updateLocalStorage({ mealPlan: [] });
        }
        closeDeleteMealPlanModal();
    }

    return (
        <div className="delete-grocery-item-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{deleteTitle}</h3>
                    <img src={closeBtn} alt="close" onClick={closeDeleteMealPlanModal} />
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeDeleteMealPlanModal}>No</button>
                    <button className="delete-btn" onClick={handleDelete}>Yes</button>
                </div>
            </div>
        </div>
    )
}