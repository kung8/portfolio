import React from 'react';
import xBtn from '../../Assets/x.png';

export const SearchBar = ({ search, setSearch }) => (
    <div className={`search-bar ${search ? 'contains-search' : ''}`}>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button 
            className={`clear-btn ${search ? 'contains-search' : ''}`} 
            onClick={() => setSearch('')}
        >
            <img src={xBtn} alt="close" />
        </button>
    </div>
);