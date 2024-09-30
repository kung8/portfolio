import React from 'react';

export const SearchBar = ({ search, setSearch }) => (
    <div className={`search-bar ${search ? 'contains-search' : ''}`}>
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
    </div>
);