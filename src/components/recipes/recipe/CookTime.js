import React from 'react';
import { useRecipeContext } from './RecipeContext';
import { formatTime } from '../utils';

export const CookTime = () => {
    const { item } = useRecipeContext();
    if (!item.cookTime || !item.cookTime.amount) return null;
    return (
        <div className="cook-time">
            <span>Cook Time: {formatTime(item.cookTime)}</span>
        </div>
    )
}