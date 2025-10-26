import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const Appliances = () => {
    const { item } = useRecipeContext();
    const appliances = item.appliances;

    if (!appliances || !appliances.length) return null;
    return (
        <>
            <h4 className={`recipe-detail-label ${getRecipeFontSizeClass()}`}>Appliances:</h4>
            <ul className="recipe-detail-list">
                {appliances.map((appliance, index) => (
                    <li key={appliance.name + '-' + index} className={`appliance-item ${getRecipeFontSizeClass()}`}>
                        {appliance.name}
                    </li>
                ))}
            </ul>
        </>
    );
}