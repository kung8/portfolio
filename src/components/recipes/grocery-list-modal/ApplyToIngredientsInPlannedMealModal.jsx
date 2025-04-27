import closeBtn from '../../../Assets/x.png';

export const ApplyToIngredientsInPlannedMealModal = ({
    closeModal,
    handleApply
}) => (
    <div className="apply-to-ingredients-in-planned-meal-modal">
        <div className="modal-content">
            <div className="modal-header">
                <h3>Do you want to update all ingredients in this planned meal?</h3>
                <img src={closeBtn} alt="close" onClick={closeModal} />
            </div>
            <div className="modal-footer">
                <button className="cancel-btn" onClick={closeModal}>No</button>
                <button className="action-btn" onClick={handleApply}>Yes</button>
            </div>
        </div>
    </div>
);