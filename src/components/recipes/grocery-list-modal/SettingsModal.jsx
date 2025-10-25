import { useEffect, useState } from 'react';

import { isEqual } from 'lodash';
import { useDebouncedCallback } from 'use-debounce';

import closeBtn from '../../../Assets/x.png';
import { Dropdown } from '../../dropdown/dropdown';

const VendorOptionItem = ({ originalOption, removeVendorOption, updateVendorOption }) => {
    const [option, setOption] = useState(originalOption);

    const updateDebouncedValue = useDebouncedCallback(updateVendorOption, 300);

    useEffect(() => {
        setOption(originalOption);
    }, [originalOption]);

    return (
        <li className="vendor-option">
            <input
                id={"vendor-" + originalOption}
                name={option}
                className="vendor-name-input"
                placeholder="Vendor Name"
                value={option}
                onChange={(e) => {
                    setOption(e.target.value);
                    updateDebouncedValue(e.target.value);
                }}
            />
            <img src={closeBtn} alt='close' className="remove-vendor-btn" onClick={removeVendorOption} />
        </li>
    )
}

const days = [
    { label: 'Sun', value: 'sunday' },
    { label: 'Mon', value: 'monday' },
    { label: 'Tue', value: 'tuesday' },
    { label: 'Wed', value: 'wednesday' },
    { label: 'Thu', value: 'thursday' },
    { label: 'Fri', value: 'friday' },
    { label: 'Sat', value: 'saturday' }
];

export const SettingsModal = ({
    closeModal,
    defaultVendor,
    handleApply,
    startingDay,
    vendorOptions,
}) => {
    const [localDefaultVendor, setLocalDefaultVendor] = useState(defaultVendor);
    const [localStartingDay, setLocalStartingDay] = useState(startingDay);
    const [localVendorOptions, setLocalVendorOptions] = useState(vendorOptions);

    const [showDefaultVendorDropdown, setShowDefaultVendorDropdown] = useState(false);

    // Vendor Options Handlers
    const addVendorOption = () => {
        setLocalVendorOptions([...localVendorOptions, '']);
    }

    const removeVendorOption = (index) => {
        const newOptions = [...localVendorOptions];
        newOptions.splice(index, 1);
        setLocalVendorOptions(newOptions);
    }

    const updateVendorOptions = (index, value) => {
        const newOptions = [...localVendorOptions];
        newOptions[index] = value;
        setLocalVendorOptions(newOptions);
    }

    // Check if changes were made
    const defaultVendorUnchanged = defaultVendor === localDefaultVendor;
    const startingDayUnchanged = startingDay === localStartingDay;
    const vendorOptionsUnchanged = isEqual(vendorOptions, localVendorOptions);
    const allVendorOptionsFilled = localVendorOptions.every(option => !!option);
    const disableApplyBtn = defaultVendorUnchanged && startingDayUnchanged && (vendorOptionsUnchanged || !allVendorOptionsFilled);

    // Sync props to local state on prop change
    useEffect(() => {
        setLocalDefaultVendor(defaultVendor);
    }, [defaultVendor]);

    useEffect(() => {
        setLocalStartingDay(startingDay);
    }, [startingDay]);

    useEffect(() => {
        setLocalVendorOptions(vendorOptions);
    }, [vendorOptions]);

    return (
        <div className="settings-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Settings</h3>
                    <img src={closeBtn} alt="close" onClick={closeModal} />
                </div>
                <div className="modal-body">
                    <h4 className="section-heading">Starting Day</h4>
                    <ul className="starting-day-checklist">
                        {days.map(({ label, value }) => (
                            <li
                                key={value}
                                className={`starting-day-option ${value === localStartingDay ? 'selected-day' : ''}`}
                                onClick={() => setLocalStartingDay(value)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>

                    <h4 className="section-heading">Vendors</h4>
                    <ul className="vendor-options">
                        {localVendorOptions.map((option, index) => (
                            <VendorOptionItem
                                key={index}
                                originalOption={option}
                                removeVendorOption={() => removeVendorOption(index)}
                                updateVendorOption={(updatedOption) => updateVendorOptions(index, updatedOption)}
                            />
                        ))}
                    </ul>
                    <div className="add-vendor-btn-container">
                        <button className={"add-vendor-btn action-btn"} onClick={addVendorOption}>+ Add Vendor</button>
                    </div>

                    <h4 className="section-heading">Default Vendor</h4>
                    <Dropdown
                        DropdownSelectorLeftContent={<span className="dropdown-label">{localDefaultVendor}</span>}
                        dropdownOnClick={() => setShowDefaultVendorDropdown(!showDefaultVendorDropdown)}
                        DropdownContent={localVendorOptions.filter(option => !!option).map((option) => (
                            <li
                                key={option}
                                onClick={() => {
                                    setLocalDefaultVendor(option);
                                    setShowDefaultVendorDropdown(false);
                                }}
                            >{option}</li>
                        ))}
                        openAbove
                        optionsCount={localVendorOptions.length}
                        show={showDefaultVendorDropdown}
                    />
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                    <button
                        className="action-btn"
                        disabled={disableApplyBtn}
                        onClick={() => handleApply({
                            defaultVendor: localDefaultVendor,
                            startingDay: localStartingDay,
                            vendorOptions: localVendorOptions,
                        })}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
};