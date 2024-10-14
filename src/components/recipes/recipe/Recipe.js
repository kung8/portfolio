import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { getAsyncData, useGetData } from '../../../hooks';
import { Loader } from '../../Loader';
import { NonDashboardPage } from '../../Page';
import list from '../../../Assets/list.png';
import { GroceryListModal } from '../grocery-list-modal/GroceryListModal';
import { useGroceryList } from '../hooks/use-grocery-list';
import { useMealPlanning } from '../hooks/use-meal-planning';
import { EmailRecipe } from '../email-recipe-form/EmailRecipeForm';
import { AddToGroceryListModal } from './AddToGroceryListModal';
import { SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY } from '../constants';
import { categorizeRecipeType } from '../categorize-recipe-type';
import { RecipeImageModal } from './RecipeImageModal';

const formatIngredientItem = (item) => {
    const amount = item.amount ? item.amount + ' ' : '';
    const name = item.name;
    const additionalDetails = item.additionalDetails ? ', ' + item.additionalDetails : '';
    return amount + name + additionalDetails;
}

const getIngredientData = (recipeName, ingredient, index) => ({
    name: formatIngredientItem(ingredient),
    index,
    linkId: ingredient.linkId,
    category: ingredient.category,
    recipeName,
});

const IngredientItem = ({ index, item, link, selectedIngredients, setSelectedIngredients }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(!!selectedIngredients.find(i => i.name === item.name && i.index === index));
    }, [selectedIngredients, item.name, index]);

    const handleCheckboxChange = () => {
        const included = selectedIngredients.find(i => i.name === item.name && i.index === index);
        if (included) {
            // removes the ingredient if it's already included
            const newSelectedIngredients = selectedIngredients.filter(ingredient => ingredient.name !== item.name && ingredient.index !== index);
            setSelectedIngredients(newSelectedIngredients);
        } else {
            // adds the ingredient if it's not included
            setSelectedIngredients([...selectedIngredients, getIngredientData(item.recipeName, item, index)]);
        }
    }

    const getLink = () => {
        const isDev = process.env.NODE_ENV === 'development';
        return link.url.includes('http') ? link.url : (isDev ? 'http://localhost:3000/#/' : 'https://kevinung8.com/#/') + link.url;
    }

    const labelId = item.name + '-' + index;

    return (
        <div className="checkbox-ingredient-container">
            <input
                type="checkbox"
                id={labelId}
                checked={checked}
                className="checkbox-ingredient"
                onChange={handleCheckboxChange}
            />
            {link ? (
                <a href={getLink()} target="_blank" rel="noopener noreferrer" className="ingredient-label-with-link">
                    {item.name}
                </a>
            ) : (
                <label htmlFor={labelId}>
                    {item.name}
                </label>
            )}
        </div>
    )
};

const Notes = ({ notes }) => (
    <>
        <h4 className="recipe-detail-label notes-label">Notes:</h4>
        <ul className="recipe-notes">
            {notes.map((note, i) => (
                <li key={i}>{note}</li>
            ))}
        </ul>
    </>
)

const Figure = ({ index, figure, onClick, setSelectedFigureLabel }) => (
    <div key={index} className="figure-container">
        <label id={`figure-${index + 1}`} onClick={() => setSelectedFigureLabel(index + 1)}>Figure {index + 1}</label>
        {figure.video ? (
            <video className="additional-recipe-video" autoPlay loop muted>
                <source src={figure.video} type="video/mp4" />
            </video>
        ) : (
            Array.isArray(figure.img) ? figure.img.map((img, i) => (
                <img key={i} className="additional-recipe-image" src={img} alt={figure.step} onClick={() => onClick(img)} />
            )) : (
                <img className="additional-recipe-image" src={figure.img} alt={figure.step} onClick={() => onClick(figure.img)} />
            )
        )}
    </div>
);

export const Recipe = ({ match }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const { id } = match.params;
    const { data: recipe = [] } = useGetData('recipes', id);
    const item = recipe[0];
    const [selectedFigure, setSelectedFigure] = useState(null);
    const [selectedFigureLabel, setSelectedFigureLabel] = useState(null);

    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', id];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;

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

    const separatedIngredients = !!item?.separated && item?.ingredients &&
        item.ingredients.reduce((acc, ingredient, index) => {
            if (ingredient.section && !acc[ingredient.section]) acc[ingredient.section] = [];
            if (ingredient.section && acc[ingredient.section]) {
                acc[ingredient.section].push({ ...ingredient, index, linkId: ingredient.link?.id });
            }
            return acc;
        }, {});

    const formatSeparatedIngredients = () => {
        const finalIngredients = [];
        for (const key in separatedIngredients) {
            const ingredients = separatedIngredients[key];
            finalIngredients.push([key, ingredients]);
        }
        return finalIngredients;
    }

    const formattedIngredients = separatedIngredients && formatSeparatedIngredients();

    const formatSeparatedDirections = () => {
        let figureCount = 1;
        const separatedDirections = item.directions.reduce((acc, direction) => {
            if (direction.type && !acc[direction.type]) acc[direction.type] = [];
            if (direction.type && acc[direction.type]) {
                const newDirection = { ...direction };
                if (direction.video || direction.img) {
                    newDirection.figure = figureCount;
                    figureCount += 1;
                }

                acc[direction.type].push(newDirection);
            }
            return acc;
        }, {});

        const finalDirections = [];

        for (const key in separatedDirections) {
            const directions = separatedDirections[key];
            finalDirections.push([key, directions]);
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

    const formatLink = (link) => link ? (
        <>
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="link-text">
                {link.text}
            </a>
            {link.additionalText && (
                <span>{link.additionalText}</span>
            )}
        </>
    ) : null;

    const { show: showGroceryList, setShow: setShowGroceryList, handleClose: closeGroceryListModal, handleOpen: openGroceryListModal, groceryList, setGroceryList } = useGroceryList();
    const { show: showMealPlanning, setShow: setShowMealPlanning, handleClose: closeMealPlanningModal, handleOpen: openMealPlanningModal, mealPlan, setMealPlan } = useMealPlanning();

    const [isAddToGroceryListModalOpen, setIsAddToGroceryListModalOpen] = useState(false);

    const openAddToGroceryListModal = () => setIsAddToGroceryListModalOpen(true);
    const closeAddToGroceryListModal = () => setIsAddToGroceryListModalOpen(false);

    const [isRecipeImageModalOpen, setIsRecipeImageModalOpen] = useState(false);
    const [selectedRecipeImage, setSelectedRecipeImage] = useState(null);
    const openRecipeImageModal = (image) => {
        setIsRecipeImageModalOpen(true);
        setSelectedRecipeImage(image);
    }

    return (
        <NonDashboardPage mainClassName={`recipe page ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header
                backRoute='/recipes'
                backText='Back to Recipes'
                title={item?.name ?? ''}
                customTitle={(
                    <div className="custom-heading-wrapper">
                        <h1 className="heading">{item?.name ?? ''}</h1>
                        <img
                            src={list}
                            alt="list"
                            className="list-img"
                            onClick={() => {
                                const selectedModalView = localStorage.getItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY);
                                if (selectedModalView === 'mealPlanning') {
                                    if (showMealPlanning) {
                                        closeMealPlanningModal();
                                    } else {
                                        openMealPlanningModal();
                                    }
                                } else {
                                    if (showGroceryList) {
                                        closeGroceryListModal();
                                    } else {
                                        openGroceryListModal();
                                    }
                                }
                            }}
                        />
                    </div>
                )}
            >
                {item?.recipeCredit && (
                    <h4 className="recipe-credit">Credit to {item.recipeCredit}</h4>
                )}
            </NonDashboardPage.Header>
            {item && isLoaded ? (
                <div className="recipe-details">
                    {item.img ? (
                        <img
                            src={item.img}
                            alt={item.name}
                            className="recipe-image"
                            onClick={() => openRecipeImageModal(item.img)}
                        />
                    ) : (
                        <div className="recipe-image empty">Image Coming Soon!</div>
                    )}
                    <p className="prep-time">Prep Time: {item.prepTime}</p>
                    {item.cookTime && (
                        <p className="cook-time">Cook Time: {item.cookTime}</p>
                    )}
                    <p className="yields">Yields: {item.yields}</p>

                    {item.appliances && item.appliances.length > 0 && (
                        <h4 className="recipe-detail-label">Appliances:</h4>
                    )}

                    {item.appliances && item.appliances.length > 0 && (
                        <ul className="recipe-detail-list">
                            {(item.appliances || []).map(appliance => (
                                <li key={appliance.name}>
                                    {appliance.name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {item.supplies && item.supplies.length > 0 && (
                        <h4 className="recipe-detail-label">Supplies:</h4>
                    )}

                    {item.supplies && item.supplies.length > 0 && (
                        <ul className="recipe-detail-list">
                            {(item.supplies || []).map(supply => (
                                <li key={supply.name}>
                                    {supply.name}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="recipe-ingredients-label-container">
                        <h4 className="recipe-detail-label">Ingredients:</h4>
                        <div className="grocery-list-button-container">
                            <span
                                className="select-all-button"
                                onClick={() => {
                                    if (selectedIngredients.length === item.ingredients.length) {
                                        setSelectedIngredients([]);
                                    } else {
                                        if (item.separated) {
                                            const newIngredients = Object.values(formattedIngredients).flatMap((group) => group[1].map(ingredient => getIngredientData(item.name, ingredient, ingredient.index)));
                                            setSelectedIngredients(newIngredients);
                                        } else {
                                            const newIngredients = item.ingredients.map((ingredient, index) => getIngredientData(item.name, ingredient, index));
                                            setSelectedIngredients(newIngredients);
                                        }
                                    }
                                }}
                            >
                                {item.ingredients.length > 0 && selectedIngredients.length === item.ingredients.length ? 'Deselect All' : 'Select All'}
                            </span>
                            <span
                                className={`add-to-list-button ${selectedIngredients.length > 0 ? 'active' : ''}`}
                                onClick={openAddToGroceryListModal}
                            >
                                Add to List
                            </span>
                        </div>
                    </div>

                    {item.separated ? (
                        <div className="separated-recipe-container">
                            {formattedIngredients.map(([section, ingredients]) => (
                                <div key={section} className="sectioned-recipe-container">
                                    <h5 className="separated-recipe-detail-label">{section}</h5>
                                    {ingredients.map((ingredient) => {
                                        const formattedIngredient = formatIngredientItem(ingredient);
                                        return (
                                            <IngredientItem
                                                key={formattedIngredient + '-' + ingredient.index}
                                                index={ingredient.index}
                                                item={{ name: formattedIngredient, linkId: ingredient.linkId, recipeName: item.name, category: ingredient.category }}
                                                link={ingredient.link}
                                                selectedIngredients={selectedIngredients}
                                                setSelectedIngredients={setSelectedIngredients}
                                            />
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="recipe-container">
                            {item?.ingredients?.map((ingredient, index) => {
                                const formattedIngredient = formatIngredientItem(ingredient);
                                return (
                                    <IngredientItem
                                        key={formattedIngredient + '-' + index}
                                        index={index}
                                        item={{ name: formattedIngredient, linkId: ingredient.linkId, recipeName: item.name, category: ingredient.category }}
                                        link={ingredient.link}
                                        selectedIngredients={selectedIngredients}
                                        setSelectedIngredients={setSelectedIngredients}
                                    />
                                )
                            })}
                        </div>
                    )}

                    <h4 className="recipe-detail-label">Directions:</h4>
                    {item.separated ? (
                        <>
                            {formattedDirections.map(([section, directions]) => (
                                <div key={section} className="separated-recipe-container">
                                    <h5 className="separated-recipe-detail-label">{section}</h5>
                                    <ol className="separated-recipe-detail-list numbered">
                                        {directions.map(({ step, figure, link }) => (
                                            <li key={step}>
                                                {step}
                                                {formatLink(link)}
                                                {figure && (
                                                    <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className="figure-label-anchor">(See figure {figure})</span>
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            ))}
                        </>
                    ) : (
                        <ol className="recipe-detail-list numbered">
                            {(item.directions || []).map(({ step, img, video, link }) => {
                                const figure = nonSeparatedFigures.findIndex(item => item.img === img) + 1;
                                return (
                                    <li key={step}>
                                        {step}
                                        {formatLink(link)}
                                        {img && (
                                            <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className="figure-label-anchor">(See figure {figure})</span>
                                        )}
                                        {video && (
                                            <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className="figure-label-anchor">(See figure {figure})</span>
                                        )}
                                    </li>
                                )
                            })}
                        </ol>
                    )}

                    {item.notes && <Notes notes={item.notes} />}

                    {item.separated && figures ? (
                        <div className="figures-container">
                            {figures.map((figure, i) => <Figure key={i} index={i} figure={figure} setSelectedFigureLabel={setSelectedFigureLabel} onClick={openRecipeImageModal} />)}
                        </div>
                    ) : nonSeparatedFigures ? (
                        <div className="figures-container">
                            {nonSeparatedFigures.map((figure, i) => <Figure key={i} index={i} figure={figure} setSelectedFigureLabel={setSelectedFigureLabel} onClick={openRecipeImageModal} />)}
                        </div>
                    ) : null}
                </div>
            ) : (
                <div className="loader-container">
                    <Loader />
                </div>
            )}

            {item && isLoaded && <EmailRecipe />}
            <RecipeImageModal
                closeModal={() => setIsRecipeImageModalOpen(false)}
                image={selectedRecipeImage}
                images={[item?.img, ...figures.flatMap(figure => figure.img)]}
                name={item?.name}
                show={isRecipeImageModalOpen}
            />
            <GroceryListModal
                groceryList={groceryList}
                handleClose={() => {
                    const selectedModalView = localStorage.getItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY);
                    if (selectedModalView === 'mealPlanning') {
                        closeMealPlanningModal();
                    } else if (selectedModalView === 'groceryList') {
                        closeGroceryListModal();
                    }
                }}
                handleSelectedViewChange={(newSelectedView) => {
                    setShowMealPlanning(newSelectedView === 'mealPlanning');
                    setShowGroceryList(newSelectedView === 'groceryList');
                }}
                mealPlan={mealPlan}
                setGroceryList={setGroceryList}
                setMealPlan={setMealPlan}
                show={showGroceryList || showMealPlanning}
                showGroceryList={showGroceryList}
            />

            <div id="add-to-grocery-list-modal-overlay" className="overlay" onClick={closeAddToGroceryListModal} />
            {isAddToGroceryListModalOpen && (
                <AddToGroceryListModal
                    closeModal={closeAddToGroceryListModal}
                    initialType={categorizeRecipeType(item.category?.[0])}
                    onAdd={async (date, type, mealPlanningDateRange) => {
                        // Adds to Meal Plan
                        const newMealPlan = [...mealPlan, { recipeName: item.name, date, type, checked: false, mealPlanningDateRange }];
                        setMealPlan(newMealPlan);
                        localStorage.setItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, 'groceryList');

                        // Adds to Grocery List
                        const newIngredientsToAdd = await [...groceryList, ...selectedIngredients.map(async item => {
                            if (item.linkId) {
                                const response = await getAsyncData('recipes', item.linkId);
                                return response?.data?.[0]?.ingredients?.map((ingredient, index) => getIngredientData(response.data[0].name, ingredient, index + item.index));
                            }
                            return { ...item, checked: false, date, mealPlanningDateRange };
                        })];
                        Promise.all(newIngredientsToAdd).then((newIngredientsToAdd) => {
                            setGroceryList(newIngredientsToAdd.flat());
                            openGroceryListModal();
                            setSelectedIngredients([]);
                        });
                    }}
                    show={isAddToGroceryListModalOpen}
                />
            )}
        </NonDashboardPage>
    )
}