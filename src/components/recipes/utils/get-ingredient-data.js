import { formatIngredientItem } from "./format-ingredient-item";

export const getIngredientData = (recipeName, ingredient, id) => ({
    name: formatIngredientItem(ingredient),
    additionalDetails: ingredient.additionalDetails,
    id,
    linkId: ingredient.linkId,
    category: ingredient.category,
    recipeName,
});