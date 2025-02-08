import React from 'react';
import closeBtn from '../../../Assets/x.png';

export const FilterChips = ({ formattedFilters, onClick}) => {
    return (
        <div className="filter-chips-container">
            <p className="filtered-by-label">Filtered By:</p>
            <div className={`filter-chips ${formattedFilters.length > 0 ? 'show' : ''}`}>
                {formattedFilters.map((filter, index) => (
                    <div
                        key={index}
                        className="chip"
                        onClick={() => onClick(filter)}>
                        <span>{filter.label}</span>
                        <img src={closeBtn} alt="close" />
                    </div>
                ))}
            </div>
            {formattedFilters.length === 0 && <div className="chip non-chip">No filters applied</div>}
        </div>
    )
}