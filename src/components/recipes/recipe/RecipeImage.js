import React from 'react';
import { useRecipeContext } from './RecipeContext';

export const RecipeImage = () => {
    const { item, openRecipeImageModal } = useRecipeContext();
    return item.img ? (
        <img
            src={item.img}
            alt={item.name}
            className="recipe-image"
            onClick={() => openRecipeImageModal(item.img)}
        />
    ) : (
        <div className="recipe-image empty">Image Coming Soon!</div>
    )
}