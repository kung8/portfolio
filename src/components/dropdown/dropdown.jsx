import arrow from '../../Assets/arrow.png';

export const Dropdown = ({
    DropdownContent,
    dropdownOnClick,
    DropdownSelectorLeftContent,
    openAbove,
    optionsCount,
    show,
}) => {
    const getTopPosition = () => {
        if (optionsCount === 3) {
            return { top: '-93px' };
        } else if (optionsCount === 2) {
            return { top: '-62px' };
        }
        return { top: '100%' };
    }

    return (
        <div className={`dropdown-container ${show ? 'is-open' : ''} ${openAbove ? 'open-above' : ''}`}>
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