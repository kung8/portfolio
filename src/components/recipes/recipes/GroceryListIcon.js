import React from 'react';
import list from '../../../Assets/list.png';

export const GroceryListIcon = ({ imageOnClick }) => (
    <img src={list} alt="list" className="list-img" onClick={imageOnClick} />
);