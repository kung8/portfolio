import { formatTime, getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const WaitTime = () => {
    const { item } = useRecipeContext();
    if (!item.waitTime || !item.waitTime.amount) return null;
    return (
        <div className="wait-time">
            <span className={`wait-time-label ${getRecipeFontSizeClass()}`}>Wait Time: {formatTime(item.waitTime)}</span>
        </div>
    )
}