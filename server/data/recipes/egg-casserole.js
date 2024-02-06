const eggCasserole = '../assets/Products/egg-casserole.jpeg';
const { BREAKFAST, MAIN } = require("./constants");

module.exports = {
    cardName: 'Egg Casserole',
    name: 'Egg Casserole',
    img: eggCasserole,
    available: true,
    type: [BREAKFAST],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '1 h',
    ingredients: [
        { name: 'white bread slices', amount: '8', additionalDetails: 'cubed', optional: false },
        { name: 'shredded cheddar cheese', amount: '2 c', additionalDetails: '', optional: false },
        { name: 'cooked ham', amount: '1 1/4 c', additionalDetails: 'diced', optional: false },
        { name: 'onion', amount: '', additionalDetails: 'diced', optional: false },
        { name: 'bell pepper', amount: '1/4 c', additionalDetails: 'diced', optional: false },
        { name: 'eggs', amount: '6', additionalDetails: '', optional: false },
        { name: 'milk', amount: '3 c', additionalDetails: '', optional: false },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false },
        { name: 'pepper', amount: '1/4 tsp', additionalDetails: '', optional: false },
        { name: 'ketchup (optional serving)', amount: '', additionalDetails: '', optional: false },
        { name: 'salsa (optional serving)', amount: '', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'mixing bowl' },
        { name: 'baking pan' },
        { name: 'cutting board + knife' },
        { name: 'fork' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'refrigerator' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Cut the bread, ham, onion, and bell peppers.', type: MAIN },
        { step: 'Mix together eggs, milk, salt, and pepper in the mixing bowl.', type: MAIN },
        { step: 'Layer the base of the baking pan with the cubes of bread.', type: MAIN },
        { step: 'Pour the egg batter over the bread, add the veggies, and cheese.', type: MAIN },
        { step: 'Cover with tin foil and refrigerate for at least 8 hours (or overnight).', type: MAIN },
        { step: 'Once ready to cook, preheat oven to 350ºF.', type: MAIN },
        { step: 'Uncover casserole and bake for 40 minutes - 1 hour (or until it sets). This mostly depends on your oven.', type: MAIN },
        { step: 'Once the casserole is cooked, let cool for a few minutes.', type: MAIN },
        { step: 'Serve and enjoy this simple, hot breakfast feast.', type: MAIN },
    ]
};