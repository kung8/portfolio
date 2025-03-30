import React from 'react';
import { useRecipeContext } from './RecipeContext';
import { formatTime } from '../utils';

export const PrepTime = () => {
    const { item } = useRecipeContext();
    if (!item.prepTime || !item.prepTime.amount) return null;
    return (
        <div className="prep-time">
            <span>Prep Time: {formatTime(item.prepTime)}</span>
        </div>
    )
}