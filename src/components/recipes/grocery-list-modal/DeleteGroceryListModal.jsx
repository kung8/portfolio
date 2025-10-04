import { ModalContent, ModalFooter, ModalHeader } from '../../modal/ModalContent';

export const DeleteGroceryListModal = ({
    closeDeleteIngredientModal,
    deleteType,
    setGroceryList,
    updateLocalStorage
}) => {
    const deleteTitle = deleteType === 'all' ? 'Are you sure you want to delete all the items?' : 'Are you sure you want to delete all the checked items?'

    const handleDelete = () => {
        if (!deleteType) return;
        if (deleteType === 'checked') {
            setGroceryList(prev => {
                const newGroceryList = prev.filter(item => !item.checked)
                updateLocalStorage({ groceryList: newGroceryList });
                return newGroceryList;
            });
        } else if (deleteType === 'all') {
            setGroceryList([]);
            updateLocalStorage({ groceryList: [] });
        }
        closeDeleteIngredientModal();
    }

    return (
        <div className="delete-grocery-item-modal">
            <ModalContent>
                <ModalHeader 
                    handleClose={closeDeleteIngredientModal}
                    title={deleteTitle}
                />
                <ModalFooter 
                    actionLabel='Yes'
                    cancelLabel='No'
                    disabled={false}
                    handleAction={handleDelete}
                    handleCancel={closeDeleteIngredientModal}
                />
            </ModalContent>
        </div>
    )
}