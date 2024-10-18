import React from 'react';
import list from '../../../Assets/list.png';
import { SearchBar } from '../../search-bar/SearchBar';
import { Filter } from '../../filter/Filter';

export const SearchAndFilterContainer = ({
    filterOnClick,
    imageOnClick,
    search,
    setSearch,
}) => (
    <div className="search-and-filter-container">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter onClick={() => filterOnClick()} />
        <img src={list} alt="list" className="list-img" onClick={imageOnClick} />
    </div>
);