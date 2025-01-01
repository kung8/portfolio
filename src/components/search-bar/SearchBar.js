import React from 'react';
import xBtn from '../../Assets/x.png';

export const SearchBar = ({ 
    allowExpand = true, 
    fullWidth = false,
    onKeyDown,
    search, 
    setSearch, 
}) => (
    <div className={`search-bar ${fullWidth ? 'full-width' : ''} ${search && allowExpand ? 'contains-search' : ''} ${allowExpand ? 'expandable' : ''}`}>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={onKeyDown ? (e) => onKeyDown(e) : undefined} />
        <button 
            className={`clear-btn ${search ? 'contains-search' : ''}`} 
            onClick={() => setSearch('')}
        >
            <img src={xBtn} alt="close" />
        </button>
    </div>
);