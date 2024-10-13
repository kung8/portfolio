import React, { useEffect } from 'react';
import { ModalBody, ModalContent, ModalHeader } from '../../modal/ModalContent';
import { useFilters } from '../hooks/use-filters';
import { RecipeFilterContainer } from './RecipeFilterContainer';
import { handleModalClass } from '../utils/handle-modal-class';

export const RecipeFilterModal = ({
    closeFilters,
    filteredRecipes,
    selectedFilters,
    setSelectedFilters,
    show,
    totalAvailableRecipes,
}) => {
    const { filterMapping, filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });

    useEffect(() => {
        handleModalClass(show, '.modal-tray', 'modal-tray-overlay');
    }, [show]);

    return (
        <div className="modal-container">
            <div
                id="modal-tray-overlay"
                className="overlay"
                onClick={closeFilters}
            />
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
                                    {...{ ...option, selectedFilters, setSelectedFilters }} />
                            ))}
                        </div>
                    </ModalBody>
                    <div className="modal-footer">
                        <span className="total-ratio">{filteredRecipeBySelectedFilters.length} / {totalAvailableRecipes}</span>
                    </div>
                </ModalContent>
            </div>
        </div>
    )
}