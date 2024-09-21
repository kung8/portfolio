import React from 'react';
import arrow from '../../Assets/arrow.png';

export const Dropdown = ({
    DropdownContent,
    dropdownOnClick,
    DropdownSelectorLeftContent,
    openAbove,
    show,
}) => {
    return (
        <div className={`dropdown-container ${show ? 'is-open' : ''} ${openAbove ? 'open-above' : ''}`}>
            <div className="dropdown-selector" onClick={dropdownOnClick}>
                {DropdownSelectorLeftContent}
                <img src={arrow} alt="arrow" className={`icon chevron-arrow ${show ? 'is-open' : ''} ${openAbove ? 'reverse' : ''}`} />
            </div>
            {show && (
                <div className={`dropdown-options-container ${openAbove ? 'open-above' : ''}`}>
                    {DropdownContent}
                </div>
            )}
        </div>
    )
}