import { useState } from 'react';

import { Dropdown } from '../../dropdown/dropdown';
import { GROUPED_BY_OPTIONS } from '../constants';

export const RecipeSortFilter = ({ groupedBy, setGroupedBy }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="recipes-sort-filter-container">
            <h4>Group/Sort Recipes By</h4>
            <Dropdown
                DropdownSelectorLeftContent={<span className="dropdown-label">{GROUPED_BY_OPTIONS.find(({ id }) => id === groupedBy)?.label}</span>}
                dropdownOnClick={() => setShow(!show)}
                DropdownContent={GROUPED_BY_OPTIONS.map(({ id, label }) => (
                    <li
                        key={id}
                        onClick={() => {
                            setGroupedBy(id);
                            setShow(false);
                        }}
                    >{label}</li>
                ))}
                show={show}
            />
        </div>
    )
}