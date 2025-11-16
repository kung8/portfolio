import { useEffect, useState } from 'react';
import { getRecipeFontSizeClass, getShowRecipeFiguresLocalStorageKey } from '../utils';
import { useRecipeContext } from './RecipeContext';
import { cloneDeep } from 'lodash';

export const Directions = () => {
    const { formattedDirections } = useRecipeContext();
    const showRecipeFigures = getShowRecipeFiguresLocalStorageKey();
    const [checkedDirections, setCheckedDirections] = useState({});

    useEffect(() => {
        const newCheckedDirections = formattedDirections.reduce((acc, [section, directions]) => {
            const newDirections = directions.map(step => step.checked);
            acc[section] = newDirections;
            return acc;
        }, {});
        setCheckedDirections(newCheckedDirections);
    }, [formattedDirections]);

    // Function to render step text with quoted text as clickable anchor links
    const renderStepWithQuotedLinks = (text) => {
        if (!text || typeof text !== 'string') return text;

        // Use a different approach: replace quoted text with placeholders, then process
        const quotedSections = [];
        let processedText = text;

        // Find all quoted sections and replace them with placeholders
        const quotedTextRegex = /"([^"]*)"/g;
        let match;
        let placeholderIndex = 0;

        while ((match = quotedTextRegex.exec(text)) !== null) {
            const quotedText = match[1];
            const placeholder = `__QUOTED_${placeholderIndex}__`;
            quotedSections.push(quotedText);
            processedText = processedText.replace(match[0], placeholder);
            placeholderIndex++;
        }

        // Split by placeholders and reconstruct with React elements
        const parts = processedText.split(/(__QUOTED_\d+__)/g);

        return parts.map((part, index) => {
            // Check if this part is a placeholder
            const placeholderMatch = part.match(/^__QUOTED_(\d+)__$/);
            if (placeholderMatch) {
                const quotedIndex = parseInt(placeholderMatch[1]);
                const quotedText = quotedSections[quotedIndex];
                const anchorId = quotedText.toLowerCase().split(' ').join('-');

                return (
                    <a
                        key={index}
                        className="quoted-text-link"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent step checkbox toggle
                            // 
                            const element = document.getElementById('recipe-section-' + anchorId);
                            console.log(element, anchorId);

                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        "{quotedText}"
                    </a>
                );
            }
            // Return regular text as-is (excluding empty strings)
            return part ? <span key={index}>{part}</span> : null;
        }).filter(Boolean); // Remove null/empty elements
    };

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
                                        <span className={`recipe-step ${getRecipeFontSizeClass()}`}>
                                            {renderStepWithQuotedLinks(step)}
                                        </span>
                                    )}
                                    &nbsp;
                                    {link && (
                                        <span className={`recipe-step-link ${getRecipeFontSizeClass()}`}>{formatLink(link)}</span>
                                    )}
                                    {showRecipeFigures && figure && (
                                        <span
                                            id={`figure-label-${figure}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const el = document.getElementById(`figure-${figure}`);
                                                if (el) {
                                                    el.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className={`figure-label-anchor ${getRecipeFontSizeClass()}`}
                                        >
                                            (See figure {figure})
                                        </span>
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