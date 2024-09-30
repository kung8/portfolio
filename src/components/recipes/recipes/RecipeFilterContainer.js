import React, { useState } from "react";
import check from '../../../Assets/check.png';
import greenCheck from '../../../Assets/green-check.png';
import partial from '../../../Assets/partial.png';
import { Dropdown } from "../../dropdown/dropdown";

export const RecipeFilterContainer = ({ heading, type, filterOptions, selectedFilters, setSelectedFilters }) => {
    const [show, setShow] = useState(false);

    const handleFilterSelector = (type, value) => {
        const newType = [...selectedFilters[type]];
        newType.includes(value) ? newType.splice(newType.indexOf(value), 1) : newType.push(value);
        const newFilters = { ...selectedFilters, [type]: newType };
        setSelectedFilters(newFilters);
    }

    const selectAllFilters = (type, values) => {
        const newFilters = { ...selectedFilters, [type]: values };
        setSelectedFilters(newFilters);
    }

    const deselectAllFilters = (type) => {
        const newFilters = { ...selectedFilters, [type]: [] };
        setSelectedFilters(newFilters);
    }

    return (
        <div className="filter-container">
            <h4>{heading}</h4>
            <Dropdown
                DropdownContent={(
                    <>
                        <span
                            className="select-all-text"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (filterOptions.length && filterOptions.length === selectedFilters[type]?.length) {
                                    deselectAllFilters(type);
                                } else {
                                    selectAllFilters(type, filterOptions);
                                }
                            }}
                        >
                            {filterOptions.length && filterOptions.length === selectedFilters[type]?.length ? 'Deselect All' : 'Select All'}
                            <div className="checkbox">
                                {filterOptions.length && filterOptions.length === selectedFilters[type]?.length ? (
                                    <img className="icon" src={check} alt="check" />
                                ) : selectedFilters[type]?.length && filterOptions.length > selectedFilters[type]?.length ? (
                                    <img className="icon partial" src={partial} alt="check" />
                                ) : ''}
                            </div>
                        </span>
                        <ul className="filter-selector">
                            {filterOptions.map((option) => (
                                <FilterListItem
                                    key={option}
                                    option={option}
                                    type={type}
                                    selectedFilters={selectedFilters}
                                    handleFilterSelector={handleFilterSelector}
                                />
                            ))}
                        </ul>
                    </>
                )}
                dropdownOnClick={(e) => {
                    e.stopPropagation();
                    setShow(!show);
                }}
                DropdownSelectorLeftContent={(
                    <div>
                        {selectedFilters[type].length > 1 ? (
                            <div>
                                <span className="selected-filter-chip">{selectedFilters[type][0]}</span>
                                <span className="additional-filter-text">+ {selectedFilters[type].slice(1).length}</span>
                            </div>
                        ) : selectedFilters[type].length ? (
                            <span className="selected-filter-chip">{selectedFilters[type][0]}</span>
                        ) : (
                            <span className="no-selected-filter">No selected {type.toLowerCase()}</span>
                        )}
                    </div>
                )}
                show={show}
            />
        </div>
    )
}

const FilterListItem = ({ option, type, selectedFilters, handleFilterSelector }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            value={option}
            className="filter-selector-item"
            onClick={(e) => {
                e.stopPropagation();
                handleFilterSelector(type, option);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={`${selectedFilters[type].includes(option) ? 'selected-option' : ''}`}>{option}</span>
            <div className="checkbox">
                {selectedFilters[type].includes(option) ? <img className="icon" src={isHovered ? greenCheck : check} alt="check" /> : ''}
            </div>
        </li>
    )
}