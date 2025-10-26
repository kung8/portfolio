import { formatTime, getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const CookTime = () => {
    const { item } = useRecipeContext();
    if (!item.cookTime || !item.cookTime.amount) return null;
    return (
        <div className="cook-time">
            <span className={`cook-time-label ${getRecipeFontSizeClass()}`}>Cook Time: {formatTime(item.cookTime)}</span>
        </div>
    )
}