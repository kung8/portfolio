import React from 'react';
import { useRecipeContext } from './RecipeContext';
import { formatTime } from '../utils';

export const PrepTime = () => {
    const { item } = useRecipeContext();
    return (
        <div className="prep-time">
            <span>Prep Time: {formatTime(item.prepTime)}</span>
        </div>
    )
}