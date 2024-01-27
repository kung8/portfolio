import React, { useEffect, useState } from 'react';
import { useGetData } from '../../hooks';
import { Cursor } from '../Cursor';
import { Loader } from '../Loader';

export const Recipe = ({ history, match }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = match.params;
    const { data: recipe = [], isFetched, isFetching } = useGetData('recipes', id);
    const item = recipe[0];

    useEffect(() => {
        if (!isFetched) {
            setTimeout(() => {
                setIsLoaded(true);
            }, 1500);
        } else {
            setIsLoaded(true);
        }
    }, [isFetching])

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
                    <ul className="recipe-detail-list">
                        {(item.ingredients || []).map(ingredient => (
                            <li key={ingredient.name}>
                                {ingredient.amount}{' '}
                                {ingredient.name}
                                {ingredient.additionalDetails ? `, ${ingredient.additionalDetails}` : ''}
                            </li>
                        ))}
                    </ul>

                    <h4 className="recipe-detail-label">Directions:</h4>
                    <ol className="recipe-detail-list numbered">
                        {(item.directions || []).map(step => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>
            ) : <Loader />}
            <Cursor />
        </div>
    )
}