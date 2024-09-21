import React from 'react';
import list from '../../../Assets/list.png';
import { RecipeFilterContainer } from './RecipeFilterContainer';
import { initialShownFilters } from './Recipes';
import { useFilters } from '../hooks/use-filters';

export const FilterContainer = ({
    filteredRecipes,
    selectedFilters,
    setSelectedFilters,
    shownFilters,
    setShownFilters,
}) => {
    const { availableFilteredRecipes, filterMapping, filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });

    return (
        <div
            className="filters-container"
            onClick={(e) => {
                e.stopPropagation();
                setShownFilters(initialShownFilters);
            }}
        >
            {filterMapping.map((option =>
                <RecipeFilterContainer
                    key={option.heading}
                    {...{ ...option, selectedFilters, setSelectedFilters, shownFilters, setShownFilters }} />
            ))}
            <span className="total-ratio">{filteredRecipeBySelectedFilters.length} / {availableFilteredRecipes.length}</span>
        </div>
    )
};

export const SearchAndFilterContainer = ({
    handleClose,
    handleOpen,
    search,
    setSearch,
    setShow,
    show,
    showGroceryList,
}) => (
    <div className="search-and-filter-container">
        <div className={`search-bar ${search ? 'contains-search' : ''}`}>
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="filter-icon" onClick={(e) => {
            e.stopPropagation();
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
        }}>
            <div className="top-bar"></div>
            <div className="middle-bar"></div>
            <div className="bottom-bar"></div>
        </div>
        <img src={list} alt="list" className="list-img" onClick={showGroceryList ? handleClose : handleOpen} />
    </div>
);