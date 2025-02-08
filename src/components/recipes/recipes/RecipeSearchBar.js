import React from 'react';
import { SearchBar } from '../../search-bar/SearchBar';

export const RecipeSearchBar = ({ search, setSearch, setShowFilters, showFilters }) => (
    <div className="search-and-filter-visible-toggle-container">
        <SearchBar search={search} setSearch={setSearch} />
        <p className="filter-visible-toggle" onClick={() => setShowFilters(!showFilters)}>{showFilters ? 'Collapse' : 'Expand'}</p>
    </div>
);