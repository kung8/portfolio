import { useEffect, useState } from 'react';

import { formatIngredientItem, getIngredientData, getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

const IngredientItem = ({ id, item, link }) => {
    const { selectedIngredients, setSelectedIngredients } = useRecipeContext();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(!!selectedIngredients.find(i => i.id === id));
        // eslint-disable-next-line
    }, [selectedIngredients.map(ingredient => ingredient.id), item.name, id]);

    const handleCheckboxChange = () => {
        const included = selectedIngredients.find(i => i.id === id);
        if (included) {
            // removes the ingredient if it's already included
            const newSelectedIngredients = selectedIngredients.filter(ingredient => ingredient.id !== id);
            setSelectedIngredients(newSelectedIngredients);
        } else {
            // adds the ingredient if it's not included
            setSelectedIngredients([...selectedIngredients, getIngredientData(item.recipeName, item, id)]);
        }
    }

    const getLink = () => {
        // eslint-disable-next-line
        const isDev = process.env.NODE_ENV === 'development';
        // if the link is an external link, use the link as is
        return link.url.includes('http') ? link.url : (isDev ? 'http://localhost:3000/#/' : 'https://kevinung8.com/#/') + link.url;
    }

    return (
        <div className="checkbox-ingredient-container">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                className={`checkbox-ingredient ${getRecipeFontSizeClass()}`}
                onChange={handleCheckboxChange}
            />
            {link ? (
                <a href={getLink()} target="_blank" rel="noopener noreferrer" className="ingredient-label-with-link">
                    <span className={`ingredient-name ${getRecipeFontSizeClass()}`} itemProp="recipeIngredient">{item.name}</span>
                    {item.additionalDetails && (
                        <span className={`ingredient-additional-details ${getRecipeFontSizeClass()}`}>, {item.additionalDetails}</span>
                    )}
                </a>
            ) : (
                <label htmlFor={id} className="ingredient-label">
                    <span className={`ingredient-name ${getRecipeFontSizeClass()}`} itemProp="recipeIngredient">{item.name}</span>
                    {item.additionalDetails && (
                        <span className={`ingredient-additional-details ${getRecipeFontSizeClass()}`}>, {item.additionalDetails}</span>
                    )}
                </label>
            )}
        </div>
    )
};

export const Ingredients = () => {
    const { conversionRate, formattedIngredients, generateUUID, item, localIngredients: ingredients } = useRecipeContext();
    if (!ingredients || !ingredients.length) return null;

    return (
        <div className="separated-recipe-container">
            {formattedIngredients.map(([section, ingredients]) => (
                <div key={section} className="sectioned-recipe-container">
                    <h5 className={`separated-recipe-detail-label ${getRecipeFontSizeClass()}`}>{section}</h5>
                    {ingredients.map((ingredient, index) => {
                        const ingredientId = ingredient.id ?? generateUUID();
                        const formattedIngredient = formatIngredientItem({ ...ingredient, amount: (conversionRate || 1) * ingredient.amount });
                        return (
                            <IngredientItem
                                key={ingredientId + '-' + index}
                                id={ingredientId}
                                item={{
                                    id: ingredientId,
                                    name: formattedIngredient,
                                    linkId: ingredient.linkId,
                                    recipeName: item.name,
                                    category: ingredient.category,
                                    additionalDetails: ingredient.additionalDetails,
                                }}
                                link={ingredient.link}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    );
}