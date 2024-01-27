import React from 'react';
import { Cursor } from '../Cursor';
import { useGetData } from '../../hooks';
import { RecipeItem } from './RecipeItem';

export const Recipes = ({ history }) => {
    const { data: recipes } = useGetData('recipes');
    return (
        <div className='recipes page'>
            <div className="heading-container">
                <span className='back-btn' onClick={() => history.push('/')}>
                    Back Home
                </span>
                <h1 className="heading">Recipes</h1>
            </div>
            <div className="recipe-items-container">
                {recipes?.filter(item => !!item.available)?.map((item) => <RecipeItem key={item.id} item={item} onClick={() => history.push('/recipes/' + item.id)} />)}
            </div>
            <Cursor />
        </div>
    )
}