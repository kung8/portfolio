import React from 'react';
import closeBtn from '../../../Assets/x.png';

export const FilterChips = ({ formattedFilters, onChipClick, onFilterDrawerClick, showFilters }) => {
    return (
        <div className={`filter-chips-container ${showFilters ? '' : 'hidden-filters'}`}>
            <div className="filtered-by-header-container">
                <p className="filtered-by-label">Filtered By:</p>
                <img
                    className={`x-img ${showFilters ? 'rotate' : ''}`}
                    onClick={() => onFilterDrawerClick()}
                    src={closeBtn}
                    alt="Show filters"
                />
            </div>
            <div className={`filter-chips ${formattedFilters.length > 0 ? 'show' : ''}`}>
                {formattedFilters.map((filter, index) => (
                    <div
                        key={index}
                        className="chip"
                        onClick={() => onChipClick(filter)}
                    >
                        <span>{filter.label}</span>
                        <img src={closeBtn} alt="close" />
                    </div>
                ))}
            </div>
            {formattedFilters.length === 0 && <div className="chip non-chip">No filters applied</div>}
        </div>
    )
}