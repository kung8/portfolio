import { useEffect, useRef } from 'react';

import arrow from '../../Assets/arrow.png';

export const Dropdown = ({
    DropdownContent,
    dropdownOnClick,
    DropdownSelectorLeftContent,
    onClickOutside,
    openAbove,
    _optionsCount,
    show,
}) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (!show || !onClickOutside) {
            return undefined;
        }

        const handleDocumentMouseDown = (event) => {
            if (!dropdownRef.current?.contains(event.target)) {
                onClickOutside();
            }
        };

        document.addEventListener('mousedown', handleDocumentMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleDocumentMouseDown);
        };
    }, [onClickOutside, show]);

    const getDropdownPosition = () => {
        if (openAbove) {
            return { bottom: 'calc(100% - 1px)' };
        }

        return { top: 'calc(100% - 1px)' };
    }

    return (
        <div ref={dropdownRef} className={`dropdown-container ${show ? 'is-open' : ''} ${openAbove ? 'open-above' : ''}`}>
            <div className="dropdown-selector" onClick={dropdownOnClick}>
                {DropdownSelectorLeftContent}
                <img src={arrow} alt="arrow" className={`icon chevron-arrow ${show ? 'is-open' : ''} ${openAbove ? 'reverse' : ''}`} />
            </div>
            {show && (
                <div className={`dropdown-options-container ${openAbove ? 'open-above' : ''}`} style={getDropdownPosition()}>
                    {DropdownContent}
                </div>
            )}
        </div>
    )
}