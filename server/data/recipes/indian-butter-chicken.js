const butterChicken = '../assets/Products/indian-butter-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Indian Butter Chicken',
    name: 'Indian Butter Chicken',
    img: butterChicken,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.INDIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY, TYPES.RICE],
    yields: '4 servings',
    prepTime: '12 - 15 m',
    cookTime: '25 - 30 m',
    ingredients: [
        { name: 'vegetable oil', amount: '1 Tbsp', additionalDetails: '', optional: false },
        { name: 'butter', amount: '1 Tbsp', additionalDetails: '', optional: false },
        { name: 'medium onion', amount: '1', additionalDetails: 'diced', optional: false },
        { name: 'ginger', amount: '1 tsp', additionalDetails: 'minced', optional: false },
        { name: 'garlic cloves', amount: '3', additionalDetails: 'minced', optional: false },
        { name: 'boneless, skinless chicken', amount: '2 lbs', additionalDetails: '1/2" pieces', optional: false },
        { name: 'tomato paste', amount: '4 Tbsp', additionalDetails: '', optional: false },
        { name: 'garam masala', amount: '1 Tbsp', additionalDetails: '', optional: false },
        { name: 'chili powder', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'mustard seed', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'ground cumin', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'salt', amount: '1 tsp', additionalDetails: 'to taste', optional: false },
        { name: 'pepper', amount: '1/4 tsp', additionalDetails: 'to taste', optional: false },
        { name: 'heavy cream', amount: '1 c', additionalDetails: '', optional: false },
        { name: 'rice', amount: 'cooked', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'large mixing bowl' },
        { name: 'medium bowl' },
        { name: 'spatula' },
        { name: 'measuring spoons' },
    ],
    directions: [
        { step: 'Add oil and butter to a large cooking pan on medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add the diced onion and cook until light brown.', type: SECTIONS.MAIN },
        { step: 'Add the ginger and garlic to the pan and cook until aromatic (about 30 seconds).' },
        { step: 'Add the chicken, spices, and tomato paste to the pan. Cook until the chicken is browned (about 5 to 6 minutes).' },
        { step: 'Add the heavy cream and let simmer for 8 to 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Serve with rice (and naan or roti is optional and delicious).', type: SECTIONS.MAIN },
    ]
};