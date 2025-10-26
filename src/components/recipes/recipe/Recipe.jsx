import { useEffect, useMemo, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import Fuse from 'fuse.js';
import { Redirect } from 'react-router-dom';

import list from '../../../Assets/list.png';
import { getAsyncData, useGetData } from '../../../hooks';
import { Loader } from '../../Loader';
import { NonDashboardPage } from '../../Page';
import { GROCERY_LIST_VIEW, SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY } from '../constants';
import { EmailRecipe } from '../email-recipe-form/EmailRecipeForm';
import { GroceryListModal } from '../grocery-list-modal/GroceryListModal';
import { useGroceryList } from '../hooks/use-grocery-list';
import { categorizeRecipeType, formatYield, getIngredientData, getRecipeFontSizeClass, handleModalClass } from '../utils';
import { AddToGroceryListModal } from './AddToGroceryListModal';
import { RecipeContext } from './RecipeContext';
import { RecipeDetails } from './RecipeDetails';
import { RecipeImageModal } from './RecipeImageModal';
import settingsBtn from '../../../Assets/settings.png';
import { SettingsModal } from '../grocery-list-modal/SettingsModal';

const convertIdToName = (id) =>
    id.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

export const Recipe = ({ match }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [selectedSupplies, setSelectedSupplies] = useState([]);
    const { id } = match.params;
    const { data: recipe = [], isFetched: recipeIsFetched } = useGetData('recipes', id);
    const { data: recipes = [] } = useGetData('recipes');

    const item = recipe[0];
    const [selectedFigure, setSelectedFigure] = useState(null);
    const [selectedFigureLabel, setSelectedFigureLabel] = useState(null);
    const [supplies, setSupplies] = useState(item?.supplies || []);

    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', id];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;

    // allowing users to update yield amounts
    const [appliedYieldAmount, setAppliedYieldAmount] = useState(item?.yields?.amount ?? 1);
    const originalYieldAmount = item?.yields?.amount ?? 1;
    useEffect(() => {
        if (item) {
            setAppliedYieldAmount(item?.yields?.amount ?? 1);
        }
    }, [item]);
    const conversionRate = appliedYieldAmount / originalYieldAmount;

    // SETTINGS MODAL
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const closeSettingsModal = () => setIsSettingsModalOpen(false);

    // grocery list modal
    const {
        show: showGroceryListModal,
        setShow: setShowGroceryListModal,
        handleClose: closeGroceryListModal,
        handleOpen: openGroceryListModal,
        groceryList,
        setGroceryList,
        mealPlan,
        setMealPlan,
        updateLocalStorage,
        selectedView,
        setSelectedView,
        generateUUID,
    } = useGroceryList();

    useEffect(() => {
        const newSupplies = (item?.supplies || []).map(supply => {
            // if it's missing an id, generate one
            if (supply.id) return supply;
            return {
                ...supply,
                id: generateUUID(),
            }
        });
        setSupplies(newSupplies);
    }, [generateUUID, item?.supplies]);

    // memoized ingredients
    const localIngredients = useMemo(() => {
        return item?.ingredients?.map(i => ({ ...i, id: i.id ?? generateUUID() })) ?? [];
        // eslint-disable-next-line
    }, [JSON.stringify(item?.ingredients)]);


    useEffect(() => {
        let mounted = true;
        setIsLoaded(false);
        if (cache) {
            setIsLoaded(true);
        } else {
            setTimeout(() => {
                if (mounted) {
                    setIsLoaded(true);
                }
            }, 3000);
        }
        return () => {
            mounted = false;
            setIsLoaded(false);
            setSelectedFigure(null);
            setSelectedFigureLabel(null);
            setSelectedIngredients([]);
        }
        // eslint-disable-next-line
    }, []);

    const separatedIngredients = !!item?.separated && localIngredients &&
        localIngredients.reduce((acc, ingredient) => {
            if (!ingredient.id) ingredient.id = generateUUID();
            if (ingredient.section && !acc[ingredient.section]) acc[ingredient.section] = [];
            if (ingredient.section && acc[ingredient.section]) {
                acc[ingredient.section].push({ ...ingredient, linkId: ingredient.link?.id });
            }
            // if there are any ingredients without a section, add them to the 'Other' section so that I can at least display them (and I will need to add a section in the recipe)
            if (!ingredient.section && !acc['Other']) acc['Other'] = [];
            if (!ingredient.section && acc['Other']) {
                acc['Other'].push({ ...ingredient, linkId: ingredient.link?.id });
            }
            return acc;
        }, {});

    const formatSeparatedIngredients = () => {
        const finalIngredients = [];
        for (const key in separatedIngredients) {
            if (key === 'Other') continue;
            const ingredients = separatedIngredients[key];
            finalIngredients.push([key, ingredients]);
        }
        // add the 'Other' section at the end
        if (separatedIngredients['Other']) {
            const otherIngredients = separatedIngredients['Other'];
            finalIngredients.push(['Other', otherIngredients]);
        }
        return finalIngredients;
    }

    const formattedIngredients = separatedIngredients && formatSeparatedIngredients();

    const formatSeparatedDirections = () => {
        let figureCount = 1;
        const separatedDirections = item.directions.reduce((acc, direction) => {
            if (direction.section && !acc[direction.section]) acc[direction.section] = [];
            if (direction.section && acc[direction.section]) {
                const newDirection = { ...direction };
                if (direction.video || direction.img) {
                    newDirection.figure = figureCount;
                    figureCount += 1;
                }

                acc[direction.section].push(newDirection);
            }

            // if there are any directions without a type, add them to the 'Other' type so that I can at least display them (and I will need to add a section in the recipe)
            if (!direction.section && !acc['Other']) acc['Other'] = [];
            if (!direction.section && acc['Other']) {
                const newDirection = { ...direction };
                if (direction.video || direction.img) {
                    newDirection.figure = figureCount;
                    figureCount += 1;
                }

                acc['Other'].push(newDirection);
            }
            return acc;
        }, {});

        const finalDirections = [];

        for (const key in separatedDirections) {
            if (key === 'Other') continue;
            const directions = separatedDirections[key];
            finalDirections.push([key, directions]);
        }

        // add the 'Other' section at the end
        if (separatedDirections['Other']) {
            const otherIngredients = separatedDirections['Other'];
            finalDirections.push(['Other', otherIngredients]);
        }

        return finalDirections;
    }

    const formattedDirections = !!item?.separated && item?.directions ? formatSeparatedDirections() : null;

    const figures = formattedDirections?.flat(2)?.filter(step => step.video || step.img) ?? [];
    const nonSeparatedFigures = item?.directions?.filter(step => step.video || step.img) ?? [];

    useEffect(() => {
        if (selectedFigure) {
            const el = document.getElementById(`figure-${selectedFigure}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            setSelectedFigure(null);
            setSelectedFigureLabel(null);
        }
    }, [selectedFigure]);

    useEffect(() => {
        if (selectedFigureLabel) {
            const el = document.getElementById(`figure-label-${selectedFigureLabel}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            setSelectedFigure(null);
            setSelectedFigureLabel(null);
        }
    }, [selectedFigureLabel]);

    // add ingredients to grocery list modal
    const { handleClose: handleAddIngredientsToGroceryListModalClose, handleOpen: handleAddIngredientsToGroceryListModalOpen } = handleModalClass('.add-ingredients-to-grocery-list-modal', 'add-ingredients-to-grocery-list-modal-overlay');

    // add supplies to grocery list modal
    const { handleClose: handleAddSuppliesToGroceryListModalClose, handleOpen: handleAddSuppliesToGroceryListModalOpen } = handleModalClass('.add-supplies-to-grocery-list-modal', 'add-ingredients-to-grocery-list-modal-overlay');

    // handle settings modal
    const { handleClose: handleSettingsModalClose, handleOpen: handleSettingsModalOpen } = handleModalClass('.settings-modal', 'settings-modal-action-overlay');
    const handleCloseSettingsModal = () => {
        handleSettingsModalClose();
        closeSettingsModal();
    }

    // image modal
    const { handleClose: handleCloseImageModal, handleOpen: handleOpenImageModal } = handleModalClass('.recipe-image-modal', 'recipe-image-modal-overlay');
    const [selectedRecipeImage, setSelectedRecipeImage] = useState(null);
    const openRecipeImageModal = (image) => {
        handleOpenImageModal();
        setSelectedRecipeImage(image);
    }

    if (recipeIsFetched && recipe.length === 0) {
        const fuse = new Fuse(recipes, {
            keys: [
                'name',
            ],
            threshold: 0.3,
            shouldSort: true,
            includeScore: true,
            // threshold value
            // closer to 1 => the more broad 
            // Closer to 0 => the more exact
        });

        const closestRecipe = fuse.search(convertIdToName(id)).sort((a, b) => a.score > b.score ? -1 : 1).flatMap(recipe => recipe.item).filter(recipe => recipe.available);

        if (closestRecipe.length > 0) {
            const closestRecipeId = closestRecipe[0].name;
            const formattedClosestRecipeId = closestRecipeId.replace(/ /g, '-').toLowerCase();
            return <Redirect to={`/recipes/${formattedClosestRecipeId}`} />
        }


        return <Redirect to='/recipes/' />
    }

    return (
        <NonDashboardPage mainClassName={`recipe page ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header
                backRoute='/recipes'
                backText='Back to Recipes'
                title={item?.name ?? ''}
                customTitle={(
                    <div className="custom-heading-wrapper">
                        <h1 className={`heading ${getRecipeFontSizeClass()}`}>{item?.name ?? ''}</h1>

                        <div className="icons-wrapper">
                            <img
                                src={settingsBtn}
                                alt="settings"
                                className="settings-img"
                                onClick={() => {
                                    if (isSettingsModalOpen) handleSettingsModalClose();
                                    else handleSettingsModalOpen();
                                    setIsSettingsModalOpen(toggle => !toggle);
                                }}
                            />
                            <img
                                src={list}
                                alt="list"
                                className="list-img"
                                onClick={() => {
                                    if (showGroceryListModal) closeGroceryListModal();
                                    else openGroceryListModal();
                                    setShowGroceryListModal(toggle => !toggle);
                                }}
                            />
                        </div>
                    </div>
                )}
            />
            <RecipeContext.Provider
                value={{
                    appliedYieldAmount,
                    conversionRate,
                    figures,
                    formattedDirections,
                    formattedIngredients,
                    generateUUID,
                    handleAddIngredientsToGroceryListModalOpen,
                    handleAddSuppliesToGroceryListModalOpen,
                    handleCloseImageModal,
                    item,
                    localIngredients,
                    nonSeparatedFigures,
                    openRecipeImageModal,
                    selectedIngredients,
                    selectedRecipeImage,
                    selectedSupplies,
                    setAppliedYieldAmount,
                    setSelectedFigure,
                    setSelectedFigureLabel,
                    setSelectedIngredients,
                    setSelectedSupplies,
                    supplies,
                }}
            >
                {item && isLoaded ? <RecipeDetails /> : (
                    <div className="loader-container">
                        <Loader />
                    </div>
                )}

                {item && isLoaded && <EmailRecipe />}
                <RecipeImageModal />
                <div
                    id="settings-modal-action-overlay"
                    className={`overlay ${isSettingsModalOpen ? 'layered-opened' : ''}`}
                    onClick={handleCloseSettingsModal}
                />
                {isSettingsModalOpen && (
                    <SettingsModal closeModal={handleCloseSettingsModal} />
                )}
                <GroceryListModal
                    generateUUID={generateUUID}
                    groceryList={groceryList}
                    handleClose={() => {
                        closeGroceryListModal();
                        setShowGroceryListModal(false);
                    }}
                    mealPlan={mealPlan}
                    setGroceryList={setGroceryList}
                    setMealPlan={setMealPlan}
                    updateLocalStorage={updateLocalStorage}
                    selectedView={selectedView}
                    setSelectedView={setSelectedView}
                />

                <div id="add-ingredients-to-grocery-list-modal-overlay" className="overlay" onClick={handleAddIngredientsToGroceryListModalClose} />
                <AddToGroceryListModal
                    closeModal={handleAddIngredientsToGroceryListModalClose}
                    initialType={categorizeRecipeType(item?.category?.[0])}
                    modalClassName='add-ingredients-to-grocery-list-modal'
                    onAdd={async ({ date, mealPlanningDateRange, type, vendor }) => {
                        // Adds if it doesn't already exist inside the meal plan
                        const hasMealPlanItem = mealPlan.find(meal =>
                            meal?.recipeName === item.name &&
                            meal?.date === date &&
                            meal?.type === type &&
                            meal?.mealPlanningDateRange?.[0] === mealPlanningDateRange?.[0] &&
                            meal?.mealPlanningDateRange?.[1] === mealPlanningDateRange?.[1]
                        );
                        const newMealPlan = [...mealPlan];
                        if (!hasMealPlanItem) {
                            newMealPlan.push({ id: generateUUID(), recipeName: item.name, date, type, checked: false, mealPlanningDateRange });
                            setMealPlan(newMealPlan);
                        }

                        // Handle selected view for modal
                        localStorage.setItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, GROCERY_LIST_VIEW);
                        setSelectedView(GROCERY_LIST_VIEW);

                        // Adds to Grocery List
                        const newIngredientsToAdd = await [...groceryList, ...selectedIngredients.map(async ingredientItem => {
                            if (ingredientItem.linkId) {
                                const response = await getAsyncData('recipes', ingredientItem.linkId);
                                return response?.data?.[0]?.ingredients?.map((ingredient) => getIngredientData(response.data[0].name, ingredient, ingredient.id ?? generateUUID()));
                            }

                            return {
                                ...ingredientItem,
                                checked: false,
                                date,
                                mealPlanningDateRange,
                                recipeYield: item?.yields?.unit ? formatYield({ amount: appliedYieldAmount, unit: item?.yields?.unit }) : undefined,
                                vendor: vendor || '',
                            };
                        })];

                        Promise.all(newIngredientsToAdd).then((newGroceryList) => {
                            setGroceryList(newGroceryList.flat());
                            updateLocalStorage({ groceryList: newGroceryList.flat(), mealPlan: newMealPlan });
                            handleAddIngredientsToGroceryListModalClose();
                            setTimeout(() => {
                                setShowGroceryListModal(true);
                                openGroceryListModal();
                                setSelectedIngredients([]);
                            }, 500);
                        });
                    }}
                />

                <div id="add-supplies-to-grocery-list-modal-overlay" className="overlay" onClick={handleAddSuppliesToGroceryListModalClose} />
                <AddToGroceryListModal
                    closeModal={handleAddSuppliesToGroceryListModalClose}
                    initialType={categorizeRecipeType(item?.category?.[0])}
                    modalClassName='add-supplies-to-grocery-list-modal'
                    onAdd={async ({ date, mealPlanningDateRange, vendor }) => {
                        // Handle selected view for modal
                        localStorage.setItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, GROCERY_LIST_VIEW);
                        setSelectedView(GROCERY_LIST_VIEW);

                        // Adds to Grocery List
                        const newIngredientsToAdd = await [...groceryList, ...selectedSupplies.map(async ingredientItem => {
                            return {
                                ...ingredientItem,
                                checked: false,
                                date,
                                mealPlanningDateRange,
                                // recipeYield: item?.yields?.unit ? formatYield({ amount: appliedYieldAmount, unit: item?.yields?.unit }) : undefined,
                                vendor: vendor || '',
                            };
                        })];

                        Promise.all(newIngredientsToAdd).then((newGroceryList) => {
                            setGroceryList(newGroceryList.flat());
                            updateLocalStorage({ groceryList: newGroceryList.flat(), mealPlan });
                            handleAddSuppliesToGroceryListModalClose();
                            setTimeout(() => {
                                setShowGroceryListModal(true);
                                openGroceryListModal();
                                setSelectedSupplies([]);
                            }, 500);
                        });
                    }}
                />
            </RecipeContext.Provider>
        </NonDashboardPage>
    )
}