import { useState } from 'react';

import check from '../../Assets/check.png';
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
                >
                    <span>{label}</span>
                    {selectedFilters[category] === value && <img className="icon" src={check} alt="check" />}
                </li>
            ))}
            show={show}
        />
    )
}

export const BookFilterContainer = ({
    closeFilters,
    filteredBooks,
    filterOptions,
    selectedFilters,
    setSelectedFilters,
    totalBooks,
}) => {
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
                                    <h4>{label}</h4>
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
                    <div className="modal-footer">
                        <span className="total-ratio">{filteredBooks} / {totalBooks}</span>
                    </div>
                </ModalContent>
            </div>
        </div>
    )
}