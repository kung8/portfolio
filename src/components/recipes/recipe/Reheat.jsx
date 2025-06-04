import { useRecipeContext } from './RecipeContext';

export const Reheat = () => {
    const { item } = useRecipeContext();
    const reheat = item?.reheat;

    if (!reheat || !reheat.length) return null;
    return (
        <>
            <h4 className="recipe-detail-label reheat-label">Reheat Instructions:</h4>
            <ul className="recipe-reheat">
                {reheat.map(({ method, instruction }, i) => (
                    <li key={i}>
                        <p className="method-type">{method}</p>
                        {instruction && (
                            <p>{instruction}</p>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}