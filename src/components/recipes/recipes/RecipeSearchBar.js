import React from 'react';
import { SearchBar } from '../../search-bar/SearchBar';
import xImg from '../../../Assets/x.png';

export const RecipeSearchBar = ({ search, setSearch, setShowFilters, showFilters }) => (
    <div className="search-and-filter-visible-toggle-container">
        <SearchBar search={search} setSearch={setSearch} />
        <img
            className={`x-img ${showFilters ? 'rotate' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
            src={xImg}
            alt="Show filters"
        />
    </div>
);