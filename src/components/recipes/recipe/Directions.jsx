import { getRecipeFontSizeClass, getShowRecipeFigures } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const Directions = () => {
    const { formattedDirections, item, nonSeparatedFigures, setSelectedFigure } = useRecipeContext();
    const directions = item.directions;
    const separated = item.separated;
    const showRecipeFigures = getShowRecipeFigures();

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
            {separated ? (
                <>
                    {formattedDirections.map(([section, directions]) => (
                        <div key={section} className="separated-recipe-container direction-container">
                            <h5 className={`separated-recipe-detail-label direction-label ${getRecipeFontSizeClass()}`}>{section}</h5>
                            <ol className="separated-recipe-detail-list numbered">
                                {directions.map(({ step, figure, link }, index) => (
                                    <li key={step + '-' + index}>
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
                                {step && (
                                    <span className={`recipe-step ${getRecipeFontSizeClass()}`}>{step}</span>
                                )}
                                &nbsp;
                                {link && (
                                    <span className={`recipe-step-link ${getRecipeFontSizeClass()}`}>{formatLink(link)}</span>
                                )}
                                {showRecipeFigures && img && (
                                    <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className={`figure-label-anchor ${getRecipeFontSizeClass()}`}>(See figure {figure})</span>
                                )}
                                {showRecipeFigures && video && (
                                    <span id={`figure-label-${figure}`} onClick={() => setSelectedFigure(figure)} className={`figure-label-anchor ${getRecipeFontSizeClass()}`}>(See figure {figure})</span>
                                )}
                            </li>
                        )
                    })}
                </ol>
            )}
        </>
    )
}