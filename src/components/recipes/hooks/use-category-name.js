import { useGetIngredients } from '../../../hooks';

export const useCategoryName = () => {
    const { data: ingredients } = useGetIngredients();

    const getCategoryName = (search) => {
        const searchIndices = search.toLowerCase().split(' ');

        if (!ingredients) {
            return 'Other';
        }

        const matchingIngredients = ingredients.filter(ingredient => {
            const ingredientIndices = ingredient.name.toLowerCase().split(' ');
            const categoryIndices = ingredient.category.toLowerCase().split(' ').map(c => c.replace(/,/g, ''));
            
            return ingredientIndices.find(ingredient => searchIndices.find(s => s.includes(ingredient))) ||
                searchIndices.find(search => ingredientIndices.find(i => i.includes(search))) ||
                categoryIndices.find(category => searchIndices.find(s => s.includes(category))) ||
                searchIndices.find(search => categoryIndices.find(c => c.includes(search)));
        });

        let category = 'Other';
        if (matchingIngredients.find(ingredient => ingredient.name.toLowerCase() === search.toLowerCase())) {
            // HIT THE EXACT MATCH
            category = matchingIngredients.find(ingredient => ingredient.name.toLowerCase() === search.toLowerCase()).category;
        } else if (matchingIngredients.find(ingredient => ingredient.name.toLowerCase().includes(search.toLowerCase()))) {
            // SEARCH IS INCLUDED IN INGREDIENTS (LIKE 'SALT' IN 'SEA SALT');
            category = matchingIngredients.find(ingredient => ingredient.name.toLowerCase().includes(search.toLowerCase())).category;
        } else if (matchingIngredients.find(ingredient => search.toLowerCase().includes(ingredient.name.toLowerCase()))) {
            // INGREDIENT IS INCLUDED IN SEARCH;
            category = matchingIngredients.find(ingredient => search.toLowerCase().includes(ingredient.name.toLowerCase())).category;
        } else if (matchingIngredients.length === 1) {
            // SINGLE INGREDIENT
            category = matchingIngredients[0].category;
        } else if (matchingIngredients.length > 1) {
            // MULTIPLE INGREDIENTS
            const categories = matchingIngredients.map(ingredient => ingredient.category);
            // logic to see if there's only one category type
            const uniqueCategories = [...new Set(categories)];
            if (uniqueCategories.length === 1) {
                category = uniqueCategories[0];
            }
            // logic to see which is a dominant category
            else {
                const counts = categories.reduce((acc, category) => ({
                    ...acc,
                    [category]: (acc[category] || 0) + 1
                }), {});

                const maxCount = Math.max(...Object.values(counts));
                const matchingCount = Object.entries(counts).filter(([_category, value]) => value === maxCount);
                if (matchingCount.length === 1) {
                    category = matchingCount[0][0];
                }
            }
        }

        return category;
    }

    return { getCategoryName, ingredients };
}