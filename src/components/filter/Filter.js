import React from 'react';

export const Filter = ({ hasAnyFilters, onClick }) => (
    <div
        className="filter-icon"
        onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}
    >
        <div className="top-bar" />
        <div className="middle-bar" />
        <div className="bottom-bar" />
        <div className={`filter-dot ${hasAnyFilters ? 'show' : ''}`} />
    </div>
)