import React from 'react';
import { ModalBody, ModalContent, ModalHeader } from '../../modal/ModalContent';
import { useFilters } from '../hooks/use-filters';
import { RecipeFilterContainer } from './RecipeFilterContainer';

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

    console.log('filteredRecipeBySelectedFilters', selectedFilters);

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