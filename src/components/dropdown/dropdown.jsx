import { useEffect, useRef } from 'react';

import arrow from '../../Assets/arrow.png';

export const Dropdown = ({
    DropdownContent,
    dropdownOnClick,
    DropdownSelectorLeftContent,
    onClickOutside,
    openAbove,
    optionsCount,
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

    const getTopPosition = () => {
        if (optionsCount === 3) {
            return { top: '-93px' };
        } else if (optionsCount === 2) {
            return { top: '-62px' };
        }
        return { top: '100%' };
    }

    return (
        <div ref={dropdownRef} className={`dropdown-container ${show ? 'is-open' : ''} ${openAbove ? 'open-above' : ''}`}>
            <div className="dropdown-selector" onClick={dropdownOnClick}>
                {DropdownSelectorLeftContent}
                <img src={arrow} alt="arrow" className={`icon chevron-arrow ${show ? 'is-open' : ''} ${openAbove ? 'reverse' : ''}`} />
            </div>
            {show && (
                <div className={`dropdown-options-container ${openAbove ? 'open-above' : ''}`} style={getTopPosition()}>
                    {DropdownContent}
                </div>
            )}
        </div>
    )
}