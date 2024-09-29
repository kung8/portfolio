import React from 'react';
import xBtn from '../../../Assets/x.png';

export const RecipeModalHeader = ({
    handleClose,
    title,
}) => (
    <div className="modal-header">
        <h3>{title}</h3>
        <img src={xBtn} alt="close" onClick={handleClose} />
    </div>
);

export const RecipeModalBody = ({ children }) =>
    <div className="modal-body">
        {children}
    </div>

export const RecipeModalFooter = ({
    actionLabel,
    disabled,
    handleAction,
    handleCancel,
}) => (
    <div className="modal-footer">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button
            className="action-btn"
            disabled={disabled}
            onClick={handleAction}
        >
            {actionLabel}
        </button>
    </div>
);

export const RecipeModalContent = ({ children }) =>
    <div className="modal-content">
        {children}
    </div>