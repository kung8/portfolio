// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BREAD, UNSALTED_BUTTER, SWEET_ONION, CELERY, GARLIC, SALT, BLACK_PEPPER, FRESH_SAGE, FRESH_ROSEMARY, PARSLEY, CHICKEN_BROTH, EGGS } = require('./ingredients');

module.exports = {
    cardName: 'Stuffing',
    name: 'Stuffing',
    img: '',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.SIDE_DISH],
    yields: '8 servings',
    prepTime: '45 m',
    cookTime: '50 m',
    websites: [
        { label: 'Stuffing', link: 'https://www.howsweeteats.com/2020/11/best-stuffing-recipe/' }
    ],
    separated: false,
    ingredients: [
        { ...BREAD, amount: '18 - 24 oz / 1.5 loaves stale', additionalDetails: 'cubed', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SWEET_ONION, amount: '3 c', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...CELERY, amount: '2 c', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '6', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...SALT, amount: '1 tsp', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '1 tsp', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...FRESH_SAGE, amount: '3 Tbsp', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: '3 Tbsp', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...PARSLEY, amount: '3 Tbsp', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: '2 1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '2', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: '9 x 13 baking pan' },
        { name: 'cooking spray' },
        { name: 'frying pan' },
        { name: 'whisk' },
        { name: 'small bowl'}
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Brush the baking pan with some cooking spray.', type: SECTIONS.MAIN },
        { step: 'Place cubed bread in baking pan.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, heat butter in a pan.', type: SECTIONS.MAIN },
        { step: 'Once melted, stir in onion, celery, garlic, salt and black pepper.', type: SECTIONS.MAIN },
        { step: 'Cook until the veggie are soft (about 8 to 10 minutes).', type: SECTIONS.MAIN },
        { step: 'Add in chopped fresh herbs. Mix and cook for 1 minute.', type: SECTIONS.MAIN },
        { step: 'Stir in 1 cup of stock.', type: SECTIONS.MAIN },
        { step: 'Pour mixture over the cubed bread. Mix until coated.', type: SECTIONS.MAIN },
        { step: 'In a small bowl, combine the eggs and the remaining stock.', type: SECTIONS.MAIN },
        { step: 'Pour egg mixture over the cubed bread and fold until combined.', type: SECTIONS.MAIN },
        { step: 'Bake until the internal temperature is 160ºF (about 45 to 50 minutes). If getting browned and it isn\'t finished yet, you can cover it with foil in a tent shape.', type: SECTIONS.MAIN },
        { step: 'Serve warm on the side of your holiday feast or on any occasion.', type: SECTIONS.MAIN },
    ]
};