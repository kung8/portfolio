import { formatTime, getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const PrepTime = () => {
    const { item } = useRecipeContext();
    if (!item.prepTime || !item.prepTime.amount) return null;
    return (
        <div className="prep-time">
            <span className={`prep-time-label ${getRecipeFontSizeClass()}`}>Prep Time: {formatTime(item.prepTime)}</span>
        </div>
    )
}