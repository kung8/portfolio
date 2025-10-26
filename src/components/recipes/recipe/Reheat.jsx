import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const Reheat = () => {
    const { item } = useRecipeContext();
    const reheat = item?.reheat;

    if (!reheat || !reheat.length) return null;
    return (
        <>
            <h4 className={`recipe-detail-label ${getRecipeFontSizeClass()} reheat-label`}>Reheat Options:</h4>
            <ul className="recipe-reheat">
                {reheat.map(({ method, instruction }, i) => (
                    <li key={i}>
                        <p className={`method-type ${getRecipeFontSizeClass()}`}>{method}</p>
                        {instruction && (
                            <p className={`instruction ${getRecipeFontSizeClass()}`}>{instruction}</p>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}