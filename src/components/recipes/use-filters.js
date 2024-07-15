import { useGetRecipeCategories } from '../../hooks';

export const useFilters = ({ filteredRecipes, selectedFilters }) => {
    const { data: recipeCategories = { CATEGORIES: [], DIET: [], GENRES: [], METHODS: [], PROTEIN: [], TYPES: [] } } = useGetRecipeCategories();
    const categories = recipeCategories.CATEGORIES;
    // const diet = recipeCategories.DIET;
    const genres = recipeCategories.GENRES;
    const methods = recipeCategories.METHODS;
    const protein = recipeCategories.PROTEIN;
    const types = recipeCategories.TYPES;

    const filterMapping = [
        { heading: 'Categories', type: 'category', filterOptions: categories },
        { heading: 'Genres', type: 'genre', filterOptions: genres },
        // { heading: 'Diet', type: 'diet', filterOptions: diet },
        { heading: 'Cooking Methods', type: 'method', filterOptions: methods },
        { heading: 'Proteins', type: 'protein', filterOptions: protein },
        { heading: 'Type', type: 'type', filterOptions: types },
    ];

    const filterRecipeBySelectedFilters = (compared, filter) => {
        return compared.some(value => filter.find(v => v === value))
    }

    const availableFilteredRecipes = filteredRecipes.filter(item => !!item.available);
    const filteredRecipeBySelectedFilters = availableFilteredRecipes.filter(item => {
        const { category, diet, genre, method, protein, type } = selectedFilters;
        return (
            (!category.length || filterRecipeBySelectedFilters(item.category || [], category)) &&
            (!diet.length || filterRecipeBySelectedFilters(item.diet || [], diet)) &&
            (!genre.length || filterRecipeBySelectedFilters(item.genre || [], genre)) &&
            (!method.length || filterRecipeBySelectedFilters(item.method || [], method)) &&
            (!protein.length || filterRecipeBySelectedFilters(item.protein || [], protein)) &&
            (!type.length || filterRecipeBySelectedFilters(item.type || [], type))
        );
    });

    return {
        availableFilteredRecipes,
        filterMapping,
        filteredRecipeBySelectedFilters,
    }
}