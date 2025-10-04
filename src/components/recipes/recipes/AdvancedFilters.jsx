import { useEffect, useState } from 'react';
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from '../../modal/ModalContent';
import { handleModalClass } from '../utils';
import { getMenuFilterItems } from '../utils/get-menu-filter-items';
import Fuse from 'fuse.js';
import { SearchBar } from '../../search-bar/SearchBar';
import closeBtn from '../../../Assets/x.png';
import { isEqual } from 'lodash';

const IngredientSearchBar = ({ search, setSearch }) => (
    <div className="search-and-filter-visible-toggle-container">
        <SearchBar allowExpand={false} fullWidth placeholder="Search Ingredients" search={search} setSearch={setSearch} />
    </div>
);

const AdvancedFiltersModal = ({ closeModal, featuredRecipes, filterMapping, menuFilterProps }) => {
    const [localSelectedFilters, setLocalSelectedFilters] = useState(menuFilterProps.selectedFilters);
    const [searchTerm, setSearchTerm] = useState('');

    const finalSelectedFilters = menuFilterProps.selectedFilters;
    const setFinalSelectedFilters = menuFilterProps.setSelectedFilters;

    useEffect(() => {
        setLocalSelectedFilters(finalSelectedFilters);
    }, [finalSelectedFilters]);

    const ingredients = featuredRecipes.INGREDIENTS ? getMenuFilterItems(featuredRecipes.INGREDIENTS) : [];

    const fuse = new Fuse(ingredients, {
        keys: [
            'itemType',
        ],
        threshold: 0.4,
        // threshold value
        // closer to 1 => the more broad 
        // Closer to 0 => the more exact
    });

    const filteredIngredients = fuse.search(searchTerm).map(result => result.item);

    const updateSelectedFilters = (prop, value) => {
        const filters = localSelectedFilters[prop];
        const hasFilter = filters.includes(value);

        setLocalSelectedFilters({
            ...localSelectedFilters,
            [prop]: hasFilter ? filters.filter(item => item !== value) : filters.concat(value),
        });
    };

    const handleClose = () => {
        closeModal();
        setSearchTerm('');
    }

    // Disable primary button if no changes were made
    const disabledPrimaryButton = 
        isEqual(finalSelectedFilters.ingredients, localSelectedFilters.ingredients) && 
        isEqual(finalSelectedFilters.recommended, localSelectedFilters.recommended) && 
        isEqual(finalSelectedFilters.wip, localSelectedFilters.wip) && 
        isEqual(finalSelectedFilters.available, localSelectedFilters.available);

    const availableOptions = filterMapping.find(filterOption => filterOption.type === 'available')?.filterOptions || [];
    const recommendedOptions = filterMapping.find(filterOption => filterOption.type === 'recommended')?.filterOptions || [];
    const wipOptions = filterMapping.find(filterOption => filterOption.type === 'wip')?.filterOptions || [];

    return (
        <div className="advanced-filters-modal-container">
            <div
                id="advanced-filters-modal-overlay"
                className="overlay"
                onClick={handleClose}
            />
            <div className="advanced-filters-modal">
                <ModalContent>
                    <div className="top-container">
                        <ModalHeader
                            handleClose={handleClose}
                            title='Advanced Filters'
                        />
                        <ModalBody>
                            <section className="ingredients-filter-section">
                                <h4 className="filter-section-title">Ingredients</h4>
                                <IngredientSearchBar search={searchTerm} setSearch={setSearchTerm} />
                                <div className="ingredients-list-container">
                                    <ul className="ingredients-list">
                                        {filteredIngredients.map((ingredient, index) => (
                                            <li
                                                key={index}
                                                tabIndex={0}
                                                className={`ingredient ${localSelectedFilters.ingredients.includes(ingredient.itemType) ? 'included' : ''}`}
                                                onClick={() => updateSelectedFilters('ingredients', ingredient.itemType)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        updateSelectedFilters('ingredients', ingredient.itemType)
                                                    }
                                                }}
                                            >
                                                {ingredient.name}
                                            </li>
                                        ))}
                                    </ul>
                                    {localSelectedFilters.ingredients.length > 0 ? (
                                        <div className="filter-chips">
                                            {localSelectedFilters.ingredients.map((ingredient) => (
                                                <div key={ingredient} className="chip" onClick={() => updateSelectedFilters('ingredients', ingredient)}>
                                                    <span>{ingredient}</span>
                                                    <img src={closeBtn} alt="close" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="chip non-chip">No ingredients selected</span>
                                    )}
                                </div>
                            </section>
                            <section className="favorited-recipes-filter-section">
                                <h4 className="filter-section-title">Recommended Recipes</h4>
                                <div className="filter-chips">
                                    {recommendedOptions.map((option) => (
                                        <div key={option} className="chip" onClick={() => updateSelectedFilters('recommended', option)}>
                                            <span>{option}</span>
                                            {localSelectedFilters.recommended.includes(option) && (
                                                <img src={closeBtn} alt="close" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="wip-recipes-filter-section">
                                <h4 className="filter-section-title">Still In Progress Recipes</h4>
                                <div className="filter-chips">
                                    {wipOptions.map((option) => (
                                        <div key={option} className="chip" onClick={() => updateSelectedFilters('wip', option)}>
                                            <span>{option}</span>
                                            {localSelectedFilters.wip.includes(option) && (
                                                <img src={closeBtn} alt="close" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="available-recipes-filter-section">
                                <h4 className="filter-section-title">Available Recipes</h4>
                                <div className="filter-chips">
                                    {availableOptions.map((option) => (
                                        <div key={option} className="chip" onClick={() => updateSelectedFilters('available', option)}>
                                            <span>{option}</span>
                                            {localSelectedFilters.available.includes(option) && (
                                                <img src={closeBtn} alt="close" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </ModalBody>
                    </div>
                    <ModalFooter
                        actionLabel='Apply'
                        disabled={disabledPrimaryButton}
                        handleAction={() => {
                            setFinalSelectedFilters(localSelectedFilters);
                            handleClose();
                        }}
                        handleCancel={handleClose}
                    />
                </ModalContent>
            </div>
        </div>
    )
}


export const AdvancedFilters = ({ featuredRecipes, filterMapping, menuFilterProps }) => {
    const { handleClose: handleCloseImageModal, handleOpen: handleOpenImageModal } = handleModalClass('.advanced-filters-modal', 'advanced-filters-modal-overlay');
    return (
        <>
            <div className="advanced-filters-container">
                <span className="advanced-filters-label" onClick={handleOpenImageModal}>Advanced Filters +</span>
            </div>
            <AdvancedFiltersModal
                closeModal={handleCloseImageModal}
                featuredRecipes={featuredRecipes}
                filterMapping={filterMapping}
                menuFilterProps={menuFilterProps}
            />
        </>
    )
}