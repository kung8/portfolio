import React from 'react';
import { useRecipeContext } from './RecipeContext';

export const CookTime = () => {
    const { item } = useRecipeContext();
    if (!item.cookTime) return null;
    return (
        <div className="cook-time">
            <span>Cook Time: {item.cookTime}</span>
        </div>
    )
}