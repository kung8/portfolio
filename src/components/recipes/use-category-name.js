import { useGetIngredients } from '../../hooks';

export const useCategoryName = () => {
    const { data: ingredients } = useGetIngredients();

    const getCategoryName = (search) => {
        const searchIndices = search.toLowerCase().split(' ');

        const matchingIngredients = ingredients.filter(ingredient => {
            const ingredientIndices = ingredient.name.toLowerCase().split(' ');
            const categoryIndices = ingredient.category.toLowerCase().split(' ');
            
            return ingredientIndices.find(ingredient => searchIndices.includes(ingredient)) ||
                searchIndices.find(search => ingredientIndices.includes(search)) ||
                categoryIndices.find(category => searchIndices.find(s => s.includes(category))) ||
                searchIndices.find(search => categoryIndices.find(c => c.includes(search)))
        });

        let category = 'Other';
        if (matchingIngredients.find(ingredient => ingredient.name.toLowerCase() === search.toLowerCase())) {
            category = matchingIngredients.find(ingredient => ingredient.name.toLowerCase() === search.toLowerCase()).category;
        } else if (matchingIngredients.length === 1) {
            category = matchingIngredients[0].category;
        } else if (matchingIngredients.length > 1) {
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