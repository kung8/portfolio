import React from 'react';
import { useRecipeContext } from './RecipeContext';

export const PrepTime = () => {
    const { item } = useRecipeContext();
    return (
        <div className="prep-time">
            <span>Prep Time: {item.prepTime}</span>
        </div>
    )
}