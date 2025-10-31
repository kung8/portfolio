import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const Websites = () => {
    const { item } = useRecipeContext();
    const websites = item?.websites;

    if (!websites || !websites.length) return null;

    return (
        <>
            <h4 className={`recipe-detail-label ${getRecipeFontSizeClass()} website-label`}>Website References:</h4>
            <ul className="recipe-websites-list">
                {websites?.map(({ authors, finder, label, link }, i) => (
                    <li key={i} className="recipe-website-item">
                        <div className="recipe-website-link">
                            {link ? (
                                <a href={link} target="_blank" rel="noopener noreferrer" className={`recipe-link ${getRecipeFontSizeClass()}`}>
                                    {label}{' '}
                                    {authors && (
                                        <span className={`recipe-author ${getRecipeFontSizeClass()}`}>by {authors}</span>
                                    )}
                                </a>
                            ) : (
                                <span className={`no-link-label-and-author ${getRecipeFontSizeClass()}`}>{label}{authors && ` by ${authors}`}</span>
                            )}

                        </div>
                        {finder && (
                            <span className={`recipe-finder ${getRecipeFontSizeClass()}`}>Referred by {finder}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}