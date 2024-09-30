import React, { useEffect, useState } from 'react';
import { Dropdown } from '../dropdown/dropdown';
import { ModalBody, ModalContent, ModalHeader } from '../modal/ModalContent';

const FilterDropdown = ({
    category,
    options,
    selectedFilters,
    setSelectedFilters,
}) => {
    const [show, setShow] = useState(false);
    return (
        <Dropdown
            DropdownSelectorLeftContent={
                <span className="dropdown-label">
                    {options.find(option => option.value === selectedFilters[category])?.label}
                </span>
            }
            dropdownOnClick={() => setShow(!show)}
            DropdownContent={options.map(({ value, label }) => (
                <li
                    key={value}
                    className="dropdown-option"
                    onClick={() => {
                        setSelectedFilters({ ...selectedFilters, [category]: value });
                        setShow(false);
                    }}
                >{label}</li>
            ))}
            show={show}
        />
    )
}

export const BookFilterContainer = ({
    closeFilters,
    filterOptions,
    selectedFilters,
    setSelectedFilters,
    show,
}) => {
    useEffect(() => {
        const rootId = document.getElementById('root');
        if (show) {
            rootId.style.overflowY = 'hidden';
            rootId.style.height = '100vh';
        } else {
            rootId.style.overflowY = '';
            rootId.style.height = '';
        }
        // eslint-disable-next-line
    }, [show]);

    return (
        <div className="modal-container">
            <div
                className="overlay opened"
                onClick={() => closeFilters()}
            />
            <div className="modal-tray opened">
                <ModalContent>
                    <ModalHeader handleClose={closeFilters} title="Filters" />
                    <ModalBody>
                        {filterOptions && Object.entries(filterOptions).map(([key, { label, options }]) => {
                            return (
                                <div key={key} className={`filter-category-container ${key}`}>
                                    <h6 className="filter-category-label">{label}</h6>
                                    <FilterDropdown
                                        category={key}
                                        options={options}
                                        selectedFilters={selectedFilters}
                                        setSelectedFilters={setSelectedFilters}
                                    />
                                </div>
                            )
                        })}
                    </ModalBody>
                </ModalContent>
            </div>
        </div>
    )
}