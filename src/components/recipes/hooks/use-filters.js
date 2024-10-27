import { useGetRecipeCategories } from '../../../hooks';

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
        { heading: 'Has Image', type: 'image', filterOptions: ['Yes', 'No'] }
    ];

    const filterRecipeBySelectedFilters = (compared, filter) => {
        return compared.some(value => filter.find(v => v === value))
    }

    const checkSelectedImageOption = (img) => {
        const no = selectedFilters.image.includes('No'); 
        const yes = selectedFilters.image.includes('Yes');
        const all = no && yes;
        
        if (all) return true;
        if (no && !img) return true;
        if (yes && img) return true;
        return false;
    }

    const availableFilteredRecipes = filteredRecipes.filter(item => !!item.available);
    const filteredRecipeBySelectedFilters = availableFilteredRecipes.filter(item => {
        const { category, diet, genre, image, method, protein, type } = selectedFilters;        
        return (
            (!category.length || filterRecipeBySelectedFilters(item.category || [], category)) &&
            (!diet.length || filterRecipeBySelectedFilters(item.diet || [], diet)) &&
            (!genre.length || filterRecipeBySelectedFilters(item.genre || [], genre)) &&
            (!method.length || filterRecipeBySelectedFilters(item.method || [], method)) &&
            (!protein.length || filterRecipeBySelectedFilters(item.protein || [], protein)) &&
            (!type.length || filterRecipeBySelectedFilters(item.type || [], type)) &&
            (!image.length || checkSelectedImageOption(item.img))
        );
    });

    return {
        availableFilteredRecipes,
        filterMapping,
        filteredRecipeBySelectedFilters,
    }
}