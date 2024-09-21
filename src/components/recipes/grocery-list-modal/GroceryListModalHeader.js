import React, { useState } from 'react';
import closeBtn from '../../../Assets/x.png';
import { Dropdown } from '../../dropdown/dropdown';

export const GroceryListModalHeader = ({ 
    handleClose,
    selectedView,
    setSelectedView,
}) => {
    const [showViewOptions, setShowViewOptions] = useState(false);

    const viewOptions = [
        { id: 'groceryList', label: 'Grocery List' },
        { id: 'mealPlanning', label: 'Meal Planning' },
    ];

    return (
        <div className="modal-header">
            <Dropdown
                DropdownSelectorLeftContent={<span className="dropdown-label">{viewOptions.find(({ id }) => id === selectedView)?.label ?? ''}</span>}
                dropdownOnClick={() => setShowViewOptions(!showViewOptions)}
                DropdownContent={viewOptions.map(({ id, label }) => (
                    <li
                        key={id}
                        onClick={() => {
                            setSelectedView(id);
                            setShowViewOptions(false);
                        }}
                    >{label}</li>
                ))}
                show={showViewOptions}
            />
            <button className="close" onClick={handleClose}>
                <img src={closeBtn} alt="close" onClick={handleClose} />
            </button>
        </div>
    )
}