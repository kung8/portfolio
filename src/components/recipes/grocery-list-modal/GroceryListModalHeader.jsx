import { useState } from 'react';

import settingsBtn from '../../../Assets/settings.png';
import closeBtn from '../../../Assets/x.png';
import { Dropdown } from '../../dropdown/dropdown';
import { selectedModalViewOptions, setSelectedModalViewLocalStorageKey } from '../utils';

export const GroceryListModalHeader = ({ 
    handleClose,
    selectedView,
    setSelectedView,
    openSettingsModal,
}) => {
    const [showViewOptions, setShowViewOptions] = useState(false);

    return (
        <div className="modal-header">
            <div className="left-modal-header-container">
                <Dropdown
                    DropdownSelectorLeftContent={<span className="dropdown-label">{selectedModalViewOptions.find(({ id }) => id === selectedView)?.label ?? ''}</span>}
                    dropdownOnClick={() => setShowViewOptions(!showViewOptions)}
                    DropdownContent={selectedModalViewOptions.map(({ id, label }) => (
                        <li
                            key={id}
                            onClick={() => {
                                setSelectedView(id);
                                setSelectedModalViewLocalStorageKey(id);
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