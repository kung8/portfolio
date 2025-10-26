import { useEffect, useState } from 'react';

import { isEqual } from 'lodash';
import { useDebouncedCallback } from 'use-debounce';

import closeBtn from '../../../Assets/x.png';
import { Dropdown } from '../../dropdown/dropdown';
import { SwitchToggle } from '../../switch-toggle/SwitchToggle';
import { fontSizeOptions } from '../utils';
import { useSettings } from '../hooks/use-settings';

const SettingContainer = ({ children, heading, subheading }) => (
    <div className="setting-container">
        <div className="section-heading-container">
            <h4 className="section-heading">{heading}</h4>
            <p className="section-subheading">{subheading}</p>
        </div>
        {children}
    </div>
);

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

export const SettingsModal = ({ closeModal }) => {
    const {
        defaultVendor,
        recipeFontSize,
        // recipePageLayout,
        showRecipeFigures,
        showRecipeNotes,
        showRecipeReheatOptions,
        showRecipeStorageOptions,
        showRecipeWebsiteReferences,
        startingDay,
        updateDefaultVendor,
        updateRecipeFontSize,
        // updateRecipePageLayout,
        updateShowRecipeFigures,
        updateShowRecipeNotes,
        updateShowRecipeReheatOptions,
        updateShowRecipeStorageOptions,
        updateShowRecipeWebsiteReferences,
        updateStartingDay,
        vendorOptions,
    } = useSettings();



    const [localDefaultVendor, setLocalDefaultVendor] = useState(defaultVendor);
    const [localRecipeFontSize, setLocalRecipeFontSize] = useState(recipeFontSize);
    // const [localRecipePageLayout, setLocalRecipePageLayout] = useState(recipePageLayout);
    const [localShowRecipeFigures, setLocalShowRecipeFigures] = useState(showRecipeFigures);
    const [localShowRecipeNotes, setLocalShowRecipeNotes] = useState(showRecipeNotes);
    const [localShowRecipeReheatOptions, setLocalShowRecipeReheatOptions] = useState(showRecipeReheatOptions);
    const [localShowRecipeStorageOptions, setLocalShowRecipeStorageOptions] = useState(showRecipeStorageOptions);
    const [localShowRecipeWebsiteReferences, setLocalShowRecipeWebsiteReferences] = useState(showRecipeWebsiteReferences);
    const [localStartingDay, setLocalStartingDay] = useState(startingDay);
    const [localVendorOptions, setLocalVendorOptions] = useState(vendorOptions);

    const [showDefaultVendorDropdown, setShowDefaultVendorDropdown] = useState(false);
    const [showRecipeFontSizeDropdown, setShowRecipeFontSizeDropdown] = useState(false);
    // const [showPageLayoutDropdown, setShowPageLayoutDropdown] = useState(false);

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
    const recipeFontSizeUnchanged = recipeFontSize === localRecipeFontSize;
    // const recipePageLayoutUnchanged = recipePageLayout === localRecipePageLayout;
    const showRecipeFiguresUnchanged = showRecipeFigures === localShowRecipeFigures;
    const showRecipeNotesUnchanged = showRecipeNotes === localShowRecipeNotes;
    const showRecipeReheatOptionsUnchanged = showRecipeReheatOptions === localShowRecipeReheatOptions;
    const showRecipeStorageOptionsUnchanged = showRecipeStorageOptions === localShowRecipeStorageOptions;
    const showRecipeWebsiteReferencesUnchanged = showRecipeWebsiteReferences === localShowRecipeWebsiteReferences;
    const startingDayUnchanged = startingDay === localStartingDay;
    const vendorOptionsUnchanged = isEqual(vendorOptions, localVendorOptions);
    const allVendorOptionsFilled = localVendorOptions.every(option => !!option);
    const disableApplyBtn =
        defaultVendorUnchanged &&
        recipeFontSizeUnchanged &&
        // recipePageLayoutUnchanged &&
        showRecipeFiguresUnchanged &&
        showRecipeNotesUnchanged &&
        showRecipeReheatOptionsUnchanged &&
        showRecipeStorageOptionsUnchanged &&
        showRecipeWebsiteReferencesUnchanged &&
        startingDayUnchanged &&
        (vendorOptionsUnchanged || !allVendorOptionsFilled);

    // Sync props to local state on prop change
    useEffect(() => {
        setLocalDefaultVendor(defaultVendor);
    }, [defaultVendor]);

    useEffect(() => {
        setLocalRecipeFontSize(recipeFontSize);
    }, [recipeFontSize]);

    // useEffect(() => {
    //     setLocalRecipePageLayout(recipePageLayout);
    // }, [recipePageLayout]);

    useEffect(() => {
        setLocalShowRecipeFigures(showRecipeFigures);
    }, [showRecipeFigures]);

    useEffect(() => {
        setLocalShowRecipeNotes(showRecipeNotes);
    }, [showRecipeNotes]);

    useEffect(() => {
        setLocalShowRecipeReheatOptions(showRecipeReheatOptions);
    }, [showRecipeReheatOptions]);

    useEffect(() => {
        setLocalShowRecipeStorageOptions(showRecipeStorageOptions);
    }, [showRecipeStorageOptions]);

    useEffect(() => {
        setLocalShowRecipeWebsiteReferences(showRecipeWebsiteReferences);
    }, [showRecipeWebsiteReferences]);

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
                    <SettingContainer
                        heading="Starting Day"
                        subheading="Day of the week your meal planning calendar will start from."
                    >
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
                    </SettingContainer>

                    <SettingContainer
                        heading="Vendors"
                        subheading="List of available vendors to pull from for your grocery list items."
                    >
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
                    </SettingContainer>

                    <SettingContainer
                        heading="Default Vendor"
                        subheading="Newly added grocery list items will default to this selected vendor."
                    >
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
                    </SettingContainer>

                    <SettingContainer
                        heading="Font Size"
                        subheading="Adjust the font size used throughout the recipe pages for better readability."
                    >
                        <Dropdown
                            DropdownSelectorLeftContent={<span className="dropdown-label">{localRecipeFontSize}</span>}
                            dropdownOnClick={() => setShowRecipeFontSizeDropdown(!showRecipeFontSizeDropdown)}
                            DropdownContent={fontSizeOptions.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => {
                                        setLocalRecipeFontSize(option);
                                        setShowRecipeFontSizeDropdown(false);
                                    }}
                                >{option}</li>
                            ))}
                            openAbove
                            optionsCount={fontSizeOptions.length}
                            show={showRecipeFontSizeDropdown}
                        />
                    </SettingContainer>

                    <SettingContainer
                        heading="Show Figures"
                        subheading="Show figures in the recipe directions to reduce the amount of things on the screen while cooking."
                    >
                        <SwitchToggle
                            enabled={localShowRecipeFigures}
                            onClick={() => setLocalShowRecipeFigures(!localShowRecipeFigures)}
                        />
                    </SettingContainer>

                    <SettingContainer
                        heading="Show Notes"
                        subheading="Show notes in the recipe directions to reduce the amount of things on the screen while cooking."
                    >
                        <SwitchToggle
                            enabled={localShowRecipeNotes}
                            onClick={() => setLocalShowRecipeNotes(!localShowRecipeNotes)}
                        />
                    </SettingContainer>

                    <SettingContainer
                        heading="Show Storage Options"
                        subheading="Show storage options in the recipe directions to reduce the amount of things on the screen while cooking."
                    >
                        <SwitchToggle
                            enabled={localShowRecipeStorageOptions}
                            onClick={() => setLocalShowRecipeStorageOptions(!localShowRecipeStorageOptions)}
                        />
                    </SettingContainer>

                    <SettingContainer
                        heading="Show Reheat Options"
                        subheading="Show reheat options in the recipe directions to reduce the amount of things on the screen while cooking."
                    >
                        <SwitchToggle
                            enabled={localShowRecipeReheatOptions}
                            onClick={() => setLocalShowRecipeReheatOptions(!localShowRecipeReheatOptions)}
                        />
                    </SettingContainer>

                    <SettingContainer
                        heading="Show Website References"
                        subheading="Show website references in the recipe directions to reduce the amount of things on the screen while cooking."
                    >
                        <SwitchToggle
                            enabled={localShowRecipeWebsiteReferences}
                            onClick={() => setLocalShowRecipeWebsiteReferences(!localShowRecipeWebsiteReferences)}
                        />
                    </SettingContainer>

                    {/* <SettingContainer
                        heading="Recipe Page Layout"
                        subheading="Adjust the preferred recipe page layout."
                    >
                        <Dropdown
                            DropdownSelectorLeftContent={<span className="dropdown-label">{pageLayoutOptions.find(option => option.id === localRecipePageLayout)?.label ?? ''}</span>}
                            dropdownOnClick={() => setShowPageLayoutDropdown(!showPageLayoutDropdown)}
                            DropdownContent={pageLayoutOptions.map(({ id, label }) => (
                                <li
                                    key={id}
                                    onClick={() => {
                                        setLocalRecipePageLayout(id);
                                        setShowPageLayoutDropdown(false);
                                    }}
                                >{label}</li>
                            ))}
                            openAbove
                            optionsCount={pageLayoutOptions.length}
                            show={showPageLayoutDropdown}
                        />
                    </SettingContainer> */}

                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                    <button
                        className="action-btn"
                        disabled={disableApplyBtn}
                        onClick={() => {
                            updateDefaultVendor(localDefaultVendor);
                            updateRecipeFontSize(localRecipeFontSize);
                            // updateRecipePageLayout(localRecipePageLayout);
                            updateShowRecipeFigures(localShowRecipeFigures);
                            updateShowRecipeNotes(localShowRecipeNotes);
                            updateShowRecipeReheatOptions(localShowRecipeReheatOptions);
                            updateShowRecipeStorageOptions(localShowRecipeStorageOptions);
                            updateShowRecipeWebsiteReferences(localShowRecipeWebsiteReferences);
                            updateStartingDay(localStartingDay);
                            updateVendorOptions(localVendorOptions);
                            closeModal();
                        }}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
};