import React from 'react';
import arrow from '../../../Assets/arrow.png';

export const RecipeCategoryInput = ({ 
    isDropdownOpen,
    handleDropdownSelection,
    handleDropdownToggle,
    label,
    options,
}) => {
    return (
        <div className="category-dropdown-container">
            <li className="selected-category category-selector-item" onClick={handleDropdownToggle}>
                <span>{label}</span>
                <img src={arrow} alt="arrow" className={`chevron-arrow ${isDropdownOpen ? 'is-open' : ''}`} />
            </li>
            <ul className={`category-selector ${isDropdownOpen ? 'is-open' : ''}`}>
                {options.map((option) => (
                    <li
                        key={option}
                        value={option}
                        className="category-selector-item"
                        onClick={handleDropdownSelection}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    )
}