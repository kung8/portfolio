import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useGetData } from '../../hooks';
import { Cursor } from '../Cursor';
import { Loader } from '../Loader';

export const Recipe = ({ history, match }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = match.params;
    const { data: recipe = [] } = useGetData('recipes', id);
    const item = recipe[0];

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
                    <img src={item.img} alt={item.name} className="recipe-image" />
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
                        <>
                            {formattedIngredients.map(([section, ingredients]) => (
                                <div key={section} className="separated-recipe-container">
                                    <h5 className="separated-recipe-detail-label">{section}</h5>
                                    <ul className="separated-recipe-detail-list">
                                        {ingredients.map(ingredient => (
                                            <li key={ingredient.name}>
                                                {ingredient.amount}{' '}
                                                {ingredient.name}
                                                {ingredient.additionalDetails ? `, ${ingredient.additionalDetails}` : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </>
                    ) : (
                        <ul className="recipe-detail-list">
                            {(item.ingredients || []).map(ingredient => (
                                <li key={ingredient.name}>
                                    {ingredient.amount}{' '}
                                    {ingredient.name}
                                    {ingredient.additionalDetails ? `, ${ingredient.additionalDetails}` : ''}
                                </li>
                            ))}
                        </ul>
                    )}

                    <h4 className="recipe-detail-label">Directions:</h4>
                    <ol className="recipe-detail-list numbered">
                        {(item.directions || []).map(({ step }) => {
                            return (
                                <li key={step}>{step}</li>
                            )
                        })}
                    </ol>
                </div>
            ) : <Loader />
            }
            <Cursor />
        </div >
    )
}