import { ModalContent, ModalFooter, ModalHeader } from '../../modal/ModalContent';

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
            <ModalContent>
                <ModalHeader
                    handleClose={closeDeleteMealPlanModal}
                    title={deleteTitle}
                />
                <ModalFooter
                    actionLabel='Yes'
                    cancelLabel='No'
                    disabled={false}
                    handleAction={handleDelete}
                    handleCancel={closeDeleteMealPlanModal}
                />
            </ModalContent>
        </div>
    )
}