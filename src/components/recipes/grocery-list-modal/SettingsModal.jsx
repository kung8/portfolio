import { useDebouncedCallback } from 'use-debounce';
import closeBtn from '../../../Assets/x.png';
import { getStartingDay, getVendorOptions } from '../utils';
import { useEffect, useState } from 'react';
import { isEqual } from 'lodash';

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

export const SettingsModal = ({
    closeModal,
    handleApply,
    setStartingDay,
    setVendorOptions,
    startingDay,
    vendorOptions,
}) => {
    const days = [
        { label: 'Sun', value: 'sunday' },
        { label: 'Mon', value: 'monday' },
        { label: 'Tue', value: 'tuesday' },
        { label: 'Wed', value: 'wednesday' },
        { label: 'Thu', value: 'thursday' },
        { label: 'Fri', value: 'friday' },
        { label: 'Sat', value: 'saturday' }
    ];

    const addVendorOption = () => {
        setVendorOptions([...vendorOptions, '']);
    }

    const removeVendorOption = (index) => {
        const newOptions = [...vendorOptions];
        newOptions.splice(index, 1);
        setVendorOptions(newOptions);
    }

    const updateVendorOptions = (index, value) => {
        const newOptions = [...vendorOptions];
        newOptions[index] = value;
        setVendorOptions(newOptions);
    }

    const startingDayUnchanged = startingDay === getStartingDay();
    const vendorOptionsUnchanged = isEqual(vendorOptions, getVendorOptions());
    const allVendorOptionsFilled = vendorOptions.every(option => !!option);

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
                                className={`starting-day-option ${value === startingDay ? 'selected-day' : ''}`}
                                onClick={() => setStartingDay(value)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                    <h4 className="section-heading">Vendors</h4>
                    <ul className="vendor-options">
                        {vendorOptions.map((option, index) => (
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
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                    <button
                        className="action-btn"
                        onClick={handleApply}
                        disabled={startingDayUnchanged && (vendorOptionsUnchanged || !allVendorOptionsFilled)}>Apply</button>
                </div>
            </div>
        </div>
    )
};