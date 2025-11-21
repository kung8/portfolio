export const getRecipeRoute = (recipe) => {
    if (!recipe || !recipe.name) return '/recipes';

    const formattedName = recipe.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, '');    // Remove leading and trailing hyphens

    return `/recipes/${formattedName}`;
}

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/#' : 'https://www.kevinung8.com/#';