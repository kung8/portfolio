import { useRecipeContext } from './RecipeContext';

export const Supplies = () => {
    const { item } = useRecipeContext();
    const supplies = item.supplies;

    if (!supplies || !supplies.length) return null;
    return (
        <>
            <h4 className="recipe-detail-label">Supplies:</h4>
            <ul className="recipe-detail-list">
                {supplies.map((supply, index) => (
                    <li key={supply.name + '-' + index}>
                        {supply.name}
                    </li>
                ))}
            </ul>
        </>
    );
};