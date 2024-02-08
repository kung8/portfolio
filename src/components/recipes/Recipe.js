import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useGetData } from '../../hooks';
import { Cursor } from '../Cursor';
import { Loader } from '../Loader';

export const Recipe = ({ history, match }) => {
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
        if (cache) {
            setIsLoaded(true);
        } else {
            setTimeout(() => {
                setIsLoaded(true);
            }, 3000);
        }
        return () => {
            setIsLoaded(false);
        }
        // eslint-disable-next-line
    }, []);

    const separatedIngredients = item?.separated && item?.ingredients &&
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
                if (direction.img) {
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

    const formattedDirections = item?.separated && item?.directions && formatSeparatedDirections();

    const figures = formattedDirections?.flat(2)?.filter(step => step.img) ?? [];
    const nonSeparatedFigures = item?.directions?.filter(step => step.img) ?? [];

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

    return (
        <div className='recipe page'>
            <div className="heading-container">
                <span className='back-btn' onClick={() => history.push('/recipes')}>
                    Back to Recipes
                </span>
                <h1 className="heading">{item?.name ?? ''}</h1>
            </div>
            {item && isLoaded ? (
                <div className="recipe-details">
                    {item.img ? <img src={item.img} alt={item.name} className="recipe-image" /> : <div className="recipe-image">Image Coming Soon!</div>}
                    <p className="prep-time">Prep Time: {item.prepTime}</p>
                    <p className="cook-time">Cook Time: {item.cookTime}</p>
                    <p className="yields">Yields: {item.yields}</p>

                    <h4 className="recipe-detail-label">Supplies:</h4>
                    <ul className="recipe-detail-list">
                        {(item.supplies || []).map(ingredient => (
                            <li key={ingredient.name}>
                                {ingredient.name}
                            </li>
                        ))}
                    </ul>

                    <h4 className="recipe-detail-label">Ingredients:</h4>
                    {item.separated ? (
                        <div className="separated-recipe-container">
                            {formattedIngredients.map(([section, ingredients]) => (
                                <div key={section} className="sectioned-recipe-container">
                                    <h5 className="separated-recipe-detail-label">{section}</h5>
                                    {ingredients.map((ingredient) => {
                                        const formattedIngredient = formatIngredientItem(ingredient);
                                        return (
                                            <div key={formattedIngredient} className="checkbox-ingredient-container">
                                                <input
                                                    type="checkbox"
                                                    id={formattedIngredient}
                                                    value={formattedIngredient}
                                                    className="checkbox-ingredient"
                                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                                />
                                                <label htmlFor={formattedIngredient}>
                                                    {formattedIngredient}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="recipe-container">
                            {item?.ingredients?.map((ingredient) => {
                                const formattedIngredient = formatIngredientItem(ingredient);
                                return (
                                    <div key={formattedIngredient} className="checkbox-ingredient-container">
                                        <input
                                            type="checkbox"
                                            id={formattedIngredient}
                                            value={formattedIngredient}
                                            className="checkbox-ingredient"
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                        />
                                        <label htmlFor={formattedIngredient}>
                                            {formattedIngredient}
                                        </label>
                                    </div>
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
                                        {directions.map(({ step, figure }) => (
                                            <li key={step}>
                                                {step} {figure && (
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
                            {(item.directions || []).map(({ step, img }) => {
                                const figure = nonSeparatedFigures.findIndex(item => item.img === img) + 1;
                                return (
                                    <li key={step}>{step} {img && (
                                        <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className="figure-label-anchor">(See figure {figure})</span>
                                    )}</li>
                                )
                            })}
                        </ol>
                    )}

                    {item.notes && (
                        <>
                            <h4 className="recipe-detail-label">Notes:</h4>
                            <ul className="recipe-notes">
                                {item.notes.map((note, i) => (
                                    <li key={i}>{note}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    {item.separated && figures ? (
                        <div className="figures-container">
                            {figures.map((figure, i) => (
                                <div key={i} className="figure-container">
                                    <label id={`figure-${i + 1}`} onClick={() => setSelectedFigureLabel(i + 1)}>Figure {i + 1}</label>
                                    <img className="recipe-image" src={figure.img} alt={figure.step} />
                                </div>
                            ))}
                        </div>
                    ) : nonSeparatedFigures ? (
                        <div className="figures-container">
                            {nonSeparatedFigures.map((figure, i) => (
                                <div key={i} className="figure-container">
                                    <label id={`figure-${i + 1}`} onClick={() => setSelectedFigureLabel(i + 1)}>Figure {i + 1}</label>
                                    <img className="recipe-image" src={figure.img} alt={figure.step} />
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : <Loader />
            }
            <Cursor />
        </div >
    )
}