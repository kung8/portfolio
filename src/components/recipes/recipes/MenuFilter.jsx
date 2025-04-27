export const MenuFilter = ({ items, itemType, label, selectedFilters, setSelectedFilters }) => {
    const updateSelectedFilters = (prop, value) => {
        const filters = selectedFilters[prop];
        const hasFilter = filters.includes(value);

        setSelectedFilters({
            ...selectedFilters,
            [prop]: hasFilter ? filters.filter(item => item !== value) : filters.concat(value),
        });
    };

    const hasFilter = (prop, value) => !selectedFilters[prop].length || selectedFilters[prop].find(item => item === value);

    return (
        <div className="menu-filter-container">
            <p className="menu-type">{label}</p>
            <ul className="menu-list">
                {items?.map((item, index) => (
                    <li key={item.name + '-' + itemType + '-' + index} className="menu-item" onClick={() => updateSelectedFilters(itemType, item?.itemType)}>
                        {item?.img ? (
                            <img className={`menu-image ${hasFilter(itemType, item?.itemType) ? 'includes-menu-item' : ''}`} src={item?.img} alt={item.name} />
                        ) : (
                            <div className={`menu-image ${hasFilter(itemType, item?.itemType) ? 'includes-menu-item-with-no-image' : ''}`} />
                        )}
                        <span className="menu-label">{item?.itemType}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}