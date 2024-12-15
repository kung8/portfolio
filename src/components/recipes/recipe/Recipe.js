import React, { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { getAsyncData, useGetData } from '../../../hooks';
import { Loader } from '../../Loader';
import { NonDashboardPage } from '../../Page';
import list from '../../../Assets/list.png';
import { GroceryListModal } from '../grocery-list-modal/GroceryListModal';
import { useGroceryList } from '../hooks/use-grocery-list';
import { EmailRecipe } from '../email-recipe-form/EmailRecipeForm';
import { AddToGroceryListModal } from './AddToGroceryListModal';
import { GROCERY_LIST_VIEW, SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY } from '../constants';
import { categorizeRecipeType } from '../categorize-recipe-type';
import { RecipeImageModal } from './RecipeImageModal';
import { handleModalClass } from '../utils/handle-modal-class';

const formatIngredientItem = (item) => {
    const amount = item.amount ? item.amount + ' ' : '';
    const name = item.name;
    return amount + name;
}

const getIngredientData = (recipeName, ingredient, id) => ({
    name: formatIngredientItem(ingredient),
    additionalDetails: ingredient.additionalDetails,
    id,
    linkId: ingredient.linkId,
    category: ingredient.category,
    recipeName,
});

const IngredientItem = ({ id, item, link, selectedIngredients, setSelectedIngredients, }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(!!selectedIngredients.find(i => i.id === id));
        // eslint-disable-next-line
    }, [selectedIngredients.map(ingredient => ingredient.id), item.name, id]);

    const handleCheckboxChange = () => {
        const included = selectedIngredients.find(i => i.id === id);
        if (included) {
            // removes the ingredient if it's already included
            const newSelectedIngredients = selectedIngredients.filter(ingredient => ingredient.id !== id);
            setSelectedIngredients(newSelectedIngredients);
        } else {
            // adds the ingredient if it's not included
            setSelectedIngredients([...selectedIngredients, getIngredientData(item.recipeName, item, id)]);
        }
    }

    const getLink = () => {
        // eslint-disable-next-line
        const isDev = process.env.NODE_ENV === 'development';
        // if the link is an external link, use the link as is
        return link.url.includes('http') ? link.url : (isDev ? 'http://localhost:3000/#/' : 'https://kevinung8.com/#/') + link.url;
    }

    return (
        <div className="checkbox-ingredient-container">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                className="checkbox-ingredient"
                onChange={handleCheckboxChange}
            />
            {link ? (
                <a href={getLink()} target="_blank" rel="noopener noreferrer" className="ingredient-label-with-link">
                    <span className="ingredient-name">{item.name}</span>
                    {item.additionalDetails && (
                        <span className="ingredient-additional-details">, {item.additionalDetails}</span>
                    )}
                </a>
            ) : (
                <label htmlFor={id} className="ingredient-label">
                    <span className="ingredient-name">{item.name}</span>
                    {item.additionalDetails && (
                        <span className="ingredient-additional-details">, {item.additionalDetails}</span>
                    )}
                </label>
            )}
        </div>
    )
};

const Notes = ({ notes }) => (
    <>
        <h4 className="recipe-detail-label notes-label">Notes:</h4>
        <ul className="recipe-notes">
            {notes.map(({ note, img }, i) => (
                <li key={i}>
                    <p>{note}</p>
                    {img && <img className="note-image" src={img} alt="note" />}
                </li>
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




    // add to grocery list modal
    const { handleClose: handleAddToGroceryListModalClose, handleOpen: handleAddToGroceryListModalOpen } = handleModalClass('.add-to-grocery-list-modal', 'add-to-grocery-list-modal-overlay');



    // image modal
    const { handleClose: handleCloseImageModal, handleOpen: handleOpenImageModal } = handleModalClass('.recipe-image-modal', 'recipe-image-modal-overlay');
    const [selectedRecipeImage, setSelectedRecipeImage] = useState(null);
    const openRecipeImageModal = (image) => {
        handleOpenImageModal();
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
                                if (showGroceryListModal) closeGroceryListModal();
                                else openGroceryListModal();
                                setShowGroceryListModal(toggle => !toggle);
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
                            {(item.appliances || []).map((appliance, index) => (
                                <li key={appliance.name + '-' + index}>
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
                            {(item.supplies || []).map((supply, index) => (
                                <li key={supply.name + '-' + index}>
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
                                    if (selectedIngredients.length === localIngredients.length) {
                                        setSelectedIngredients([]);
                                    } else {
                                        if (item.separated) {
                                            const newIngredients = Object.values(formattedIngredients).flatMap((group) => group[1].map(ingredient => getIngredientData(item.name, ingredient, ingredient.id)));
                                            setSelectedIngredients(newIngredients);
                                        } else {
                                            const newIngredients = localIngredients.map((ingredient) => getIngredientData(item.name, ingredient, ingredient.id));
                                            setSelectedIngredients(newIngredients);
                                        }
                                    }
                                }}
                            >
                                {localIngredients.length > 0 && selectedIngredients.length === localIngredients.length ? 'Deselect All' : 'Select All'}
                            </span>
                            <span
                                className={`add-to-list-button ${selectedIngredients.length > 0 ? 'active' : ''}`}
                                onClick={handleAddToGroceryListModalOpen}
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
                                    {ingredients.map((ingredient, index) => {
                                        const ingredientId = ingredient.id ?? generateUUID();
                                        const formattedIngredient = formatIngredientItem(ingredient);
                                        return (
                                            <IngredientItem
                                                key={ingredientId + '-' + index}
                                                id={ingredientId}
                                                item={{
                                                    id: ingredientId,
                                                    name: formattedIngredient,
                                                    linkId: ingredient.linkId,
                                                    recipeName: item.name,
                                                    category: ingredient.category,
                                                    additionalDetails: ingredient.additionalDetails,
                                                }}
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
                            {localIngredients?.map((ingredient, index) => {
                                const formattedIngredient = formatIngredientItem(ingredient);
                                const ingredientId = ingredient.id ?? generateUUID();
                                return (
                                    <IngredientItem
                                        key={ingredientId + '-' + index}
                                        id={ingredientId}
                                        item={{
                                            id: ingredientId,
                                            name: formattedIngredient,
                                            linkId: ingredient.linkId,
                                            recipeName: item.name,
                                            category: ingredient.category,
                                            additionalDetails: ingredient.additionalDetails,
                                        }}
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
                                        {directions.map(({ step, figure, link }, index) => (
                                            <li key={step + '-' + index}>
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
                            {(item.directions || []).map(({ step, img, video, link }, index) => {
                                const figure = nonSeparatedFigures.findIndex(item => item.img === img) + 1;
                                return (
                                    <li key={step + '-' + index}>
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

                    {item.websites && item.websites.length > 0 && (
                        <>
                            <h4 className="recipe-detail-label">Website References:</h4>
                            <ul className="recipe-websites-list">
                                {item.websites?.map(({ label, link }, i) => (
                                    <li key={i} className="recipe-website-item">
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
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
                closeModal={handleCloseImageModal}
                image={selectedRecipeImage}
                images={[item?.img, ...figures.flatMap(figure => figure.img)]}
                name={item?.name}
            />
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

            <div id="add-to-grocery-list-modal-overlay" className="overlay" onClick={handleAddToGroceryListModalClose} />
            <AddToGroceryListModal
                closeModal={handleAddToGroceryListModalClose}
                initialType={categorizeRecipeType(item?.category?.[0])}
                onAdd={async (date, type, mealPlanningDateRange) => {
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
                    const newIngredientsToAdd = await [...groceryList, ...selectedIngredients.map(async item => {
                        if (item.linkId) {
                            const response = await getAsyncData('recipes', item.linkId);
                            return response?.data?.[0]?.ingredients?.map((ingredient) => getIngredientData(response.data[0].name, ingredient, ingredient.id ?? generateUUID()));
                        }
                        return { ...item, checked: false, date, mealPlanningDateRange };
                    })];

                    Promise.all(newIngredientsToAdd).then((newGroceryList) => {
                        setGroceryList(newGroceryList.flat());
                        updateLocalStorage({ groceryList: newGroceryList.flat(), mealPlan: newMealPlan });
                        handleAddToGroceryListModalClose();
                        setTimeout(() => {
                            setShowGroceryListModal(true);
                            openGroceryListModal();
                            setSelectedIngredients([]);
                        }, 500);
                    });
                }}
            />
        </NonDashboardPage>
    )
}