import React from 'react';
import top from './top.png';

export const TopArrow = () => (
    <div
        className="back-to-top-arrow"
        onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
    >
        <img src={top} alt="top" />
        <span>TOP</span>
    </div>
);