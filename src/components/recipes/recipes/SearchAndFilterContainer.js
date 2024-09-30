import React from 'react';
import list from '../../../Assets/list.png';
import { SearchBar } from '../../search-bar/SearchBar';
import { Filter } from '../../filter/Filter';

export const SearchAndFilterContainer = ({
    imageOnClick,
    search,
    setSearch,
    setShow,
    show,
}) => (
    <div className="search-and-filter-container">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter 
            onClick={() => {
                if (show) {
                    const filtersContainer = document.querySelector('.filters-container');
                    if (filtersContainer) filtersContainer.classList.add('is-closing');
                    setTimeout(() => {
                        if (filtersContainer) filtersContainer.classList.remove('is-closing');
                        setShow(!show);
                    }, 300);
                } else {
                    setShow(!show);
                }
            }} 
        />
        <img src={list} alt="list" className="list-img" onClick={imageOnClick} />
    </div>
);