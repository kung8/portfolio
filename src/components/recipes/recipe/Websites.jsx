import { useRecipeContext } from './RecipeContext';

export const Websites = () => {
    const { item } = useRecipeContext();
    const websites = item?.websites;

    if (!websites || !websites.length) return null;

    return (
        <>
            <h4 className="recipe-detail-label website-label">Website References:</h4>
            <ul className="recipe-websites-list">
                {websites?.map(({ author, finder, label, link }, i) => (
                    <li key={i} className="recipe-website-item">
                        <div className="recipe-website-link">
                            {link ? (
                                <>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="recipe-link">
                                        {label}
                                    </a>
                                    {' '}
                                    {author && (
                                        <span className="recipe-author">by {author}</span>
                                    )}
                                </>
                            ) : (
                                <span className="no-link-label-and-author">{label}{author && ` by ${author}`}</span>
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