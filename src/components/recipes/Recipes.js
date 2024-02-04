import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { Cursor } from '../Cursor';
import { useGetData } from '../../hooks';
import { RecipeItem } from './RecipeItem';
import { Loader } from '../Loader';

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;

    const { data: recipes = [] } = useGetData('recipes');

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

    // convert to kebab case
    const convertNameToId = (name) => name.toLowerCase().split(' ').join('-');

    return (
        <div className='recipes page'>
            <div className="heading-container">
                <span className='back-btn' onClick={() => history.push('/')}>
                    Back Home
                </span>
                <h1 className="heading">Recipes</h1>
            </div>
            {recipes.length && isLoaded ? (
                <div className="recipe-items-container">
                    {recipes.filter(item => !!item.available).map((item) =>
                        <RecipeItem key={item.name} item={item} onClick={() => history.push('/recipes/' + convertNameToId(item.name))} />
                    )}
                </div>
            ) : <Loader />}
            <Cursor />
        </div>
    )
}