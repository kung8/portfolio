import arrow from '../../../Assets/arrow.png';

export const RecipeDropdownInput = ({
    isDropdownOpen,
    handleDropdownSelection,
    handleDropdownToggle,
    label,
    options,
}) => (
    <div className="recipe-dropdown-container">
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