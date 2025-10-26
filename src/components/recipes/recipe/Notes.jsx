import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

export const Notes = () => {
    const { item } = useRecipeContext();
    const notes = item?.notes;

    if (!notes || !notes.length) return null;

    return (
        <>
            <h4 className={`recipe-detail-label ${getRecipeFontSizeClass()} notes-label`}>Notes:</h4>
            <ul className="recipe-notes">
                {notes.map(({ note, img }, i) => (
                    <li key={i}>
                        <p className={`recipe-note ${getRecipeFontSizeClass()}`}>{note}</p>
                        {img && <img className="note-image" src={img} alt="note" />}
                    </li>
                ))}
            </ul>
        </>
    );
}