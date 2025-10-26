import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

const storageMap = {
    "fridge": "Store in the fridge up to",
    "freezer": "Store in the freezer up to",
    "cool dry place": "Store in a cool, dry place up to",
    "room temperature": "Store at room temperature up to",
};

const containerMap = {
    "airtight container": "in an airtight container",
    "its own container": "in its own container",
}

const handleUnitPluralization = (amount, unit) => {
    return amount > 1 ? unit.p : unit.s;
}

export const Storage = () => {
    const { item } = useRecipeContext();
    const storage = item?.store;

    if (!storage || !storage.length) return null;
    return (
        <>
            <h4 className={`recipe-detail-label ${getRecipeFontSizeClass()} storage-label`}>Storage Options:</h4>
            <ul className="recipe-storage">
                {storage.map(({ duration, location, container, instruction }, i) => (
                    <li key={i}>
                        <p className={`storage ${getRecipeFontSizeClass()}`}>{`${storageMap[location]} ${duration.amount} ${handleUnitPluralization(duration.amount, duration.unit)} ${containerMap[container]}.`}</p>
                        {instruction && (
                            <p className={`instruction ${getRecipeFontSizeClass()}`}>{instruction}</p>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}