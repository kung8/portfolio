import React, { useState } from 'react';
import { ModalBody, ModalContent, ModalHeader } from '../../modal/ModalContent';
import { useFilters } from '../hooks/use-filters';
import { RecipeFilterContainer } from './RecipeFilterContainer';
import { SearchBar } from '../../search-bar/SearchBar';
import xBtn from '../../../Assets/x.png';

export const RecipeFilterModal = ({
    closeFilters,
    filteredRecipes,
    hasAnyFilters,
    resetAllFilters,
    selectedFilters,
    setSelectedFilters,
    totalAvailableRecipes,
}) => {
    const { filterMapping, filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });
    const hasIngredientFilter = !!selectedFilters.ingredients?.length;
    const [ingredientSearch, setIngredientSearch] = useState('');

    return (
        <div className="modal-container">
            <div className="modal-tray">
                <ModalContent>
                    <ModalHeader handleClose={closeFilters} title="Filters" />
                    <ModalBody>
                        <div
                            className="filters-container"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            {filterMapping.map((option =>
                                <RecipeFilterContainer
                                    key={option.heading}
                                    {...{ ...option, selectedFilters, setSelectedFilters }}
                                />
                            ))}
                            <div className="ingredients-filter-container">
                                <div className="filter-heading-container">
                                    <h4>Ingredients</h4>
                                    <span
                                        className={`reset-filter-btn ${hasIngredientFilter ? 'has-filter' : ''}`}
                                        onClick={hasIngredientFilter ? () => setSelectedFilters({ ...selectedFilters, ingredients: [] }) : undefined}
                                    >
                                        Reset
                                    </span>
                                </div>
                                <div className="ingredient-filter-search">
                                    <SearchBar
                                        allowExpand={false}
                                        fullWidth
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && ingredientSearch) {
                                                setSelectedFilters({ ...selectedFilters, ingredients: selectedFilters.ingredients ? [...selectedFilters.ingredients, ingredientSearch] : [ingredientSearch] });
                                                setIngredientSearch('');
                                            }
                                        }}
                                        search={ingredientSearch}
                                        setSearch={setIngredientSearch}
                                    />
                                </div>
                                <div className="ingredients-filter">
                                    {selectedFilters.ingredients?.map((ingredient, index) => (
                                        <div key={index} className="ingredient-filter">
                                            <span>{ingredient}</span>
                                            <span
                                                className="remove-ingredient"
                                                onClick={() => setSelectedFilters({ ...selectedFilters, ingredients: selectedFilters.ingredients.filter((selectedIngredient) => selectedIngredient !== ingredient) })}
                                            >
                                                <img src={xBtn} alt="close" />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <div className="modal-footer">
                        <span className="total-ratio">{filteredRecipeBySelectedFilters.length} / {totalAvailableRecipes}</span>
                        <span
                            className={`reset-all ${hasAnyFilters ? 'has-values' : ''}`}
                            onClick={hasAnyFilters ? resetAllFilters : undefined}
                        >
                            Reset All
                        </span>
                    </div>
                </ModalContent>
            </div>
        </div>
    )
}