import React from 'react';

export const RecipeItem = ({ item, onClick }) => {
    return (
        <div className="recipe-item-container" onClick={onClick}>
            <img src={item.img} alt={item.name} />
            <h2 className="recipe-item-title">
                {item.cardName}
            </h2>
        </div>
    )
}