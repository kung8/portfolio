import React, { useEffect } from 'react';
import { ModalBody, ModalContent, ModalHeader } from '../../modal/ModalContent';
import { useFilters } from '../hooks/use-filters';
import { initialShownFilters } from './Recipes';
import { RecipeFilterContainer } from './RecipeFilterContainer';

export const RecipeFilterModal = ({
    closeFilters,
    filteredRecipes,
    selectedFilters,
    setSelectedFilters,
    shownFilters,
    show,
    setShownFilters,
    totalAvailableRecipes,
}) => {
    const { filterMapping, filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });

    useEffect(() => {
        const rootId = document.getElementById('root');
        if (show) {
            rootId.style.overflowY = 'hidden';
            rootId.style.height = '100vh';
        } else {
            rootId.style.overflowY = '';
            rootId.style.height = '';
        }
        // eslint-disable-next-line
    }, [show]);

    return (
        <div className="modal-container">
            <div
                className="overlay opened"
                onClick={closeFilters}
            />
            <div className="modal-tray opened">
                <ModalContent>
                    <ModalHeader handleClose={closeFilters} title="Filters" />
                    <ModalBody>
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
                            <span className="total-ratio">{filteredRecipeBySelectedFilters.length} / {totalAvailableRecipes}</span>
                        </div>
                    </ModalBody>
                </ModalContent>
            </div>
        </div>
    )
}