import { useRecipeContext } from './RecipeContext';

export const Websites = () => {
    const { item } = useRecipeContext();
    const websites = item?.websites;

    if (!websites || !websites.length) return null;

    return (
        <>
            <h4 className="recipe-detail-label website-label">Website References:</h4>
            <ul className="recipe-websites-list">
                {websites?.map(({ authors, finder, label, link }, i) => (
                    <li key={i} className="recipe-website-item">
                        <div className="recipe-website-link">
                            {link ? (
                                <>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="recipe-link">
                                        {label}
                                    </a>
                                    {' '}
                                    {authors && (
                                        <span className="recipe-author">by {authors}</span>
                                    )}
                                </>
                            ) : (
                                <span className="no-link-label-and-author">{label}{authors && ` by ${authors}`}</span>
                            )}

                        </div>
                        {finder && (
                            <span className="recipe-finder">Referred by {finder}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}