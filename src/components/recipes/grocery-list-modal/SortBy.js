import React from 'react';
export const SortBy = ({ options, setSortBy, sortBy }) => {
    return (
        <div className="sort-by-container">
            <select onChange={(e) => setSortBy(e.target.value)} defaultValue={sortBy}>
                {options.map(({ id, label }) => (
                    <option key={id} value={id}>{label}</option>
                ))}
            </select>
        </div>
    )
}