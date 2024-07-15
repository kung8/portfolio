import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useGetData } from '../../hooks';
import { Loader } from '../Loader';
import { NonDashboardPage } from '../Page';
import list from './list.png';
import { GroceryListModal } from './GroceryListModal';
import { useGroceryList } from './use-grocery-list';

const IngredientItem = ({ item, selectedIngredients, setSelectedIngredients }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(!!selectedIngredients.find(i => i === item));
    }, [selectedIngredients, item]);

    const handleCheckboxChange = (value) => {
        const included = selectedIngredients.includes(value);
        if (included) {
            // removes the ingredient if it's already included
            const newSelectedIngredients = selectedIngredients.filter(item => item !== value);
            setSelectedIngredients(newSelectedIngredients);
        } else {
            // adds the ingredient if it's not included
            setSelectedIngredients([...selectedIngredients, value]);
        }
    }

    return (
        <div className="checkbox-ingredient-container">
            <input
                type="checkbox"
                id={item}
                checked={checked}
                className="checkbox-ingredient"
                onChange={(e) => handleCheckboxChange(e.target.id)}
            />
            <label htmlFor={item}>
                {item}
            </label>
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

const Figure = ({ index, figure, setSelectedFigureLabel }) => (
    <div key={index} className="figure-container">
        <label id={`figure-${index + 1}`} onClick={() => setSelectedFigureLabel(index + 1)}>Figure {index + 1}</label>
        {figure.video ? (
            <video className="additional-recipe-video" autoPlay loop muted>
                <source src={figure.video} type="video/mp4" />
            </video>
        ) : (
            <img className="additional-recipe-image" src={figure.img} alt={figure.step} />
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
        item.ingredients.reduce((acc, ingredient) => {
            if (ingredient.section && !acc[ingredient.section]) acc[ingredient.section] = [];
            if (ingredient.section && acc[ingredient.section]) {
                acc[ingredient.section].push(ingredient);
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

    const formatIngredientItem = (item) => {
        const amount = item.amount ? item.amount + ' ' : '';
        const name = item.name;
        const additionalDetails = item.additionalDetails ? ', ' + item.additionalDetails : '';
        return amount + name + additionalDetails;
    }

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

    const { show: showGroceryList, setShow: setShowGroceryList, handleClose, handleOpen, groceryList, setGroceryList } = useGroceryList();

    return (
        <NonDashboardPage mainClassName={`recipe page ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header
                backRoute='/recipes'
                backText='Back to Recipes'
                title={item?.name ?? ''}
                customTitle={(
                    <div className="custom-heading-wrapper">
                        <h1 className="heading">{item?.name ?? ''}</h1>
                        <img src={list} alt="list" className="list-img" onClick={showGroceryList ? handleClose : handleOpen} />
                    </div>
                )}
            >
                {item?.recipeCredit && (
                    <h4 className="recipe-credit">Credit to {item.recipeCredit}</h4>
                )}
            </NonDashboardPage.Header>
            {item && isLoaded ? (
                <div className="recipe-details">
                    {item.img ? <img src={item.img} alt={item.name} className="recipe-image" /> : <div className="recipe-image empty">Image Coming Soon!</div>}
                    <p className="prep-time">Prep Time: {item.prepTime}</p>
                    <p className="cook-time">Cook Time: {item.cookTime}</p>
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
                                onClick={() => {
                                    if (selectedIngredients.length === item.ingredients.length) {
                                        setSelectedIngredients([]);
                                    } else {
                                        setSelectedIngredients(item.ingredients.map(ingredient => formatIngredientItem(ingredient)));
                                    }
                                }}
                            >
                                {item.ingredients.length > 0 && selectedIngredients.length === item.ingredients.length ? 'Deselect All' : 'Select All'}
                            </span>
                            <span
                                className={`add-to-list-button ${selectedIngredients.length > 0 ? 'active' : ''}`}
                                onClick={() => {
                                    setGroceryList([...groceryList, ...selectedIngredients.map(item => ({ name: item, checked: false }))]);
                                    handleOpen();
                                    setSelectedIngredients([]);
                                }}
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
                                        return <IngredientItem key={formattedIngredient} item={formattedIngredient} selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
                                    })}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="recipe-container">
                            {item?.ingredients?.map((ingredient) => {
                                const formattedIngredient = formatIngredientItem(ingredient);
                                return <IngredientItem key={formattedIngredient} item={formattedIngredient} selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
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
                            {figures.map((figure, i) => <Figure key={i} index={i} figure={figure} setSelectedFigureLabel={setSelectedFigureLabel} />)}
                        </div>
                    ) : nonSeparatedFigures ? (
                        <div className="figures-container">
                            {nonSeparatedFigures.map((figure, i) => <Figure key={i} index={i} figure={figure} setSelectedFigureLabel={setSelectedFigureLabel} />)}
                        </div>
                    ) : null}
                </div>
            ) : (
                <div className="loader-container">
                    <Loader />
                </div>
            )}

            {showGroceryList && (
                <GroceryListModal show={showGroceryList} setShow={setShowGroceryList} handleClose={handleClose} groceryList={groceryList} setGroceryList={setGroceryList} />
            )}
        </NonDashboardPage>
    )
}