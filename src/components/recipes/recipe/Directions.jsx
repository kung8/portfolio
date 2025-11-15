import { useEffect, useState } from 'react';
import { getRecipeFontSizeClass, getShowRecipeFigures } from '../utils';
import { useRecipeContext } from './RecipeContext';
import { cloneDeep } from 'lodash';

export const Directions = () => {
    const { formattedDirections, setSelectedFigure } = useRecipeContext();
    const showRecipeFigures = getShowRecipeFigures();
    const [checkedDirections, setCheckedDirections] = useState({});

    useEffect(() => {
        const newCheckedDirections = formattedDirections.reduce((acc, [section, directions]) => {
            const newDirections = directions.map(step => step.checked);
            acc[section] = newDirections;
            return acc;
        }, {});
        setCheckedDirections(newCheckedDirections);
    }, [formattedDirections]);

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
            <h4 className={`recipe-detail-label ${getRecipeFontSizeClass()}`}>Directions:</h4>
            {formattedDirections.map(([section, directions]) => (
                <div key={section} className="separated-recipe-container direction-container">
                    <h5 className={`separated-recipe-detail-label direction-label ${getRecipeFontSizeClass()}`}>{section}</h5>
                    <ol className="separated-recipe-detail-list">
                        {directions.map(({ step, figure, link, _time }, index) => (
                            <li
                                key={step + '-' + index}
                                onClick={() => {
                                    const newCheckedDirections = cloneDeep(checkedDirections);
                                    const newSection = newCheckedDirections[section];
                                    const currentValue = newSection[index];
                                    const newValue = !currentValue;
                                    newSection[index] = newValue;
                                    newCheckedDirections[section] = newSection;
                                    setCheckedDirections(newCheckedDirections);
                                }}
                                className={`recipe-step-list-item ${checkedDirections?.[section]?.[index] ? 'direction-checked' : ''}`}
                            >
                                <div>
                                    {step && (
                                        <span className={`recipe-step ${getRecipeFontSizeClass()}`}>{step}</span>
                                    )}
                                    &nbsp;
                                    {link && (
                                        <span className={`recipe-step-link ${getRecipeFontSizeClass()}`}>{formatLink(link)}</span>
                                    )}
                                    {showRecipeFigures && figure && (
                                        <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className={`figure-label-anchor ${getRecipeFontSizeClass()}`}>(See figure {figure})</span>
                                    )}
                                </div>
                                {/* {time && (
                                    <div className="time-container">
                                        <span className={`clock-icon ${getRecipeFontSizeClass()}`}>🕐</span>
                                        <p className={`time-value ${getRecipeFontSizeClass()}`}>{time}</p>
                                    </div>
                                )} */}
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </>
    )
}