import React from 'react';
import { useRecipeContext } from './RecipeContext';

export const Directions = () => {
    const { formattedDirections, item, nonSeparatedFigures, setSelectedFigure } = useRecipeContext();
    const directions = item.directions;
    const separated = item.separated;

    const formatLink = (link) => link ? (
        <>
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="link-text">
                {link.text}
            </a>
            {link.additionalText && (
                <span>{link.additionalText}</span>
            )}
        </>
    ) : null;

    return (
        <>
            <h4 className="recipe-detail-label">Directions:</h4>
            {separated ? (
                <>
                    {formattedDirections.map(([section, directions]) => (
                        <div key={section} className="separated-recipe-container">
                            <h5 className="separated-recipe-detail-label">{section}</h5>
                            <ol className="separated-recipe-detail-list numbered">
                                {directions.map(({ step, figure, link }, index) => (
                                    <li key={step + '-' + index}>
                                        {step}
                                        {formatLink(link)}
                                        {figure && (
                                            <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className="figure-label-anchor">(See figure {figure})</span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </>
            ) : (
                <ol className="recipe-detail-list numbered">
                    {directions.map(({ step, img, video, link }, index) => {
                        const figure = nonSeparatedFigures.findIndex(item => item.img === img) + 1;
                        return (
                            <li key={step + '-' + index}>
                                {step}
                                {formatLink(link)}
                                {img && (
                                    <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className="figure-label-anchor">(See figure {figure})</span>
                                )}
                                {video && (
                                    <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className="figure-label-anchor">(See figure {figure})</span>
                                )}
                            </li>
                        )
                    })}
                </ol>
            )}
        </>
    )
}