import { useRecipeContext } from './RecipeContext';

export const Websites = () => {
    const { item } = useRecipeContext();
    const websites = item?.websites;

    if (!websites || !websites.length) return null;

    return (
        <>
            <h4 className="recipe-detail-label website-label">Website References:</h4>
            <ul className="recipe-websites-list">
                {websites?.map(({ label, link }, i) => (
                    <li key={i} className="recipe-website-item">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}