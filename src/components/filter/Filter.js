import React from 'react';

export const Filter = ({ onClick }) => (
    <div
        className="filter-icon"
        onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}
    >
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
    </div>
)