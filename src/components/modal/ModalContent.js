import React from 'react';
import xBtn from '../../Assets/x.png';

export const ModalHeader = ({
    handleClose,
    title,
}) => (
    <div className="modal-header">
        <h3>{title}</h3>
        <button className="close" onClick={handleClose}>
            <img src={xBtn} alt="close" />
        </button>
    </div>
);

export const ModalBody = ({ children }) =>
    <div className="modal-body">
        {children}
    </div>

export const ModalFooter = ({
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

export const ModalContent = ({ children }) =>
    <div className="modal-content">
        {children}
    </div>