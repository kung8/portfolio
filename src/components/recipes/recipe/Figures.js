import React from 'react';
import { useRecipeContext } from './RecipeContext';

const Figure = ({ index, figure }) => {
    const { openRecipeImageModal, setSelectedFigureLabel } = useRecipeContext();
    return (
        <div key={index} className="figure-container">
            <label id={`figure-${index + 1}`} onClick={() => setSelectedFigureLabel(index + 1)}>Figure {index + 1}</label>
            {figure.video ? (
                <video className="additional-recipe-video" autoPlay loop muted>
                    <source src={figure.video} type="video/mp4" />
                </video>
            ) : (
                Array.isArray(figure.img) ? figure.img.map((img, i) => (
                    <img key={i} className="additional-recipe-image" src={img} alt={figure.step} onClick={() => openRecipeImageModal(img)} />
                )) : (
                    <img className="additional-recipe-image" src={figure.img} alt={figure.step} onClick={() => openRecipeImageModal(figure.img)} />
                )
            )}
        </div>
    )
};

export const Figures = () => {
    const { figures, item, nonSeparatedFigures } = useRecipeContext();
    const separated = item.separated;

    return separated && figures ? (
        <div className="figures-container">
            {figures.map((figure, i) => <Figure key={i} index={i} figure={figure} />)}
        </div>
    ) : nonSeparatedFigures ? (
        <div className="figures-container">
            {nonSeparatedFigures.map((figure, i) => <Figure key={i} index={i} figure={figure} />)}
        </div>
    ) : null;
};