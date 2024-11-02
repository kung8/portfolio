import React, { useState } from 'react';
import closeBtn from '../../../Assets/x.png';
import settingsBtn from '../../../Assets/settings.png';
import { Dropdown } from '../../dropdown/dropdown';
import { GROCERY_LIST_VIEW, MEAL_PLANNING_VIEW, SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY } from '../constants';

export const GroceryListModalHeader = ({ 
    handleClose,
    selectedView,
    setSelectedView,
    openSettingsModal,
}) => {
    const [showViewOptions, setShowViewOptions] = useState(false);

    const viewOptions = [
        { id: GROCERY_LIST_VIEW, label: 'Grocery List' },
        { id: MEAL_PLANNING_VIEW, label: 'Meal Planning' },
    ];

    return (
        <div className="modal-header">
            <div className="left-modal-header-container">
                <Dropdown
                    DropdownSelectorLeftContent={<span className="dropdown-label">{viewOptions.find(({ id }) => id === selectedView)?.label ?? ''}</span>}
                    dropdownOnClick={() => setShowViewOptions(!showViewOptions)}
                    DropdownContent={viewOptions.map(({ id, label }) => (
                        <li
                            key={id}
                            onClick={() => {
                                setSelectedView(id);
                                localStorage.setItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, id);
                                setShowViewOptions(false);
                            }}
                        >{label}</li>
                    ))}
                    show={showViewOptions}
                />
                <img src={settingsBtn} alt="settings" className="settings-img" onClick={openSettingsModal} />
            </div>
            <button className="close" onClick={handleClose}>
                <img src={closeBtn} alt="close" />
            </button>
        </div>
    )
}