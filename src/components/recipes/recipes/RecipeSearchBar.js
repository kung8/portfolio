import React from 'react';
import { SearchBar } from '../../search-bar/SearchBar';

export const RecipeSearchBar = ({ search, setSearch, showFilters }) => (
    <div className={`search-and-filter-visible-toggle-container ${!showFilters ? 'hide' : ''}`}>
        <SearchBar search={search} setSearch={setSearch} />
    </div>
);