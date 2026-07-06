import { useEffect, useRef } from 'react';

import arrow from '../../../Assets/arrow.png';

export const RecipeDropdownInput = ({
    isDropdownOpen,
    handleDropdownSelection,
    handleDropdownToggle,
    label,
    onClickOutside,
    options,
}) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (!isDropdownOpen || !onClickOutside) {
            return undefined;
        }

        const handlePointerDown = (event) => {
            if (!dropdownRef.current?.contains(event.target)) {
                onClickOutside();
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('touchstart', handlePointerDown);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('touchstart', handlePointerDown);
        };
    }, [isDropdownOpen, onClickOutside]);

    return (
        <div ref={dropdownRef} className="recipe-dropdown-container">
            <li className="selected-item dropdown-list-item" onClick={handleDropdownToggle}>
                <span>{label}</span>
                <img src={arrow} alt="arrow" className={`chevron-arrow ${isDropdownOpen ? 'is-open' : ''}`} />
            </li>
            <ul className={`unordered-list-selector ${isDropdownOpen ? 'is-open' : ''}`}>
                {options.map((option) => (
                    <li
                        key={option}
                        value={option}
                        className="dropdown-list-item"
                        onClick={(event) => handleDropdownSelection(option, event)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};