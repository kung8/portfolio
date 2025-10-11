import { useRecipeContext } from './RecipeContext';
import { formatIngredientItem, getIngredientData } from '../utils';

export const IngredientsHeader = () => {
    const { conversionRate, formattedIngredients, handleAddIngredientsToGroceryListModalOpen, item, localIngredients, selectedIngredients, setSelectedIngredients } = useRecipeContext();
    const separated = item.separated;
    return (
        <div className="recipe-ingredients-label-container">
            <h4 className="recipe-detail-label">Ingredients:</h4>
            <div className="grocery-list-button-container">
                <span
                    className="select-all-button"
                    onClick={() => {
                        if (selectedIngredients.length === localIngredients.length) {
                            setSelectedIngredients([]);
                        } else {
                            if (separated) {
                                const newIngredients = Object.values(formattedIngredients).flatMap((group) => group[1].map(ingredient => getIngredientData(item.name, ingredient, ingredient.id)));
                                setSelectedIngredients(newIngredients);
                            } else {
                                const newIngredients = localIngredients.map((ingredient) => getIngredientData(item.name, ingredient, ingredient.id));
                                setSelectedIngredients(newIngredients);
                            }
                        }
                    }}
                >
                    {localIngredients.length > 0 && selectedIngredients.length === localIngredients.length ? 'Deselect All' : 'Select All'}
                </span>
                <span
                    className={`add-to-list-button ${selectedIngredients.length > 0 ? 'active' : ''}`}
                    onClick={() => {
                        // ensure that the selectedIngredients has the converted amount
                        const newSelectedIngredients = selectedIngredients.map((selectedIngredient) => {
                            const selectedIngredientId = selectedIngredient.id;
                            const foundIngredient = localIngredients.find((ingredient) => ingredient.id === selectedIngredientId);
                            if (!foundIngredient) return selectedIngredient;
                            const ingredientName = formatIngredientItem({ ...foundIngredient, amount: conversionRate * foundIngredient.amount }, true);
                            return { ...selectedIngredient, name: ingredientName };
                        });
                        setSelectedIngredients(newSelectedIngredients);

                        // Open Add Ingredients to Grocery List Modal
                        handleAddIngredientsToGroceryListModalOpen();
                    }}
                >
                    Add to List
                </span>
            </div>
        </div>
    )
}