import { useState } from 'react';

import { Dropdown } from '../../dropdown/dropdown';

export const SortBy = ({ options, setSortBy, sortBy }) => {
    const [show, setShow] = useState(false);

    return (
        <Dropdown
            DropdownSelectorLeftContent={<span className="dropdown-label">{options.find(({ id }) => id === sortBy).label}</span>}
            dropdownOnClick={() => setShow(!show)}
            DropdownContent={options.map(({ id, label }) => (
                <li
                    key={id}
                    onClick={() => {
                        setSortBy(id);
                        setShow(false);
                    }}
                >{label}</li>
            ))}
            openAbove
            optionsCount={options.length}
            show={show}
        />
    )
}