import React from 'react';

export const RecipeItem = ({ item, onClick }) => {
    return (
        <div className="recipe-item-container" onClick={onClick}>
            {item.img ? (
                <img src={item.img} alt={item.name} className="recipe-image" />
            ) : (
                <div className="recipe-image">Image Coming Soon!</div>
            )}
            <h2 className="recipe-item-title">
                {item.cardName}
            </h2>
        </div>
    )
}