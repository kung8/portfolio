const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { OLIVE_OIL, ROSEMARY, GARLIC, CORNSTARCH, SALT, BLACK_PEPPER, SWEET_POTATOES } = require('./ingredients');

module.exports = {
    cardName: 'Rosemary Sweet Potato Fries',
    name: 'Rosemary Sweet Potato Fries',
    img: '',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '30 m',
    websites: [
        { label: 'Rosemary Sweet Potato Fries', link: 'https://www.tasteofhome.com/recipes/rosemary-sweet-potato-fries/' }
    ],
    separated: false,
    ingredients: [
        { ...OLIVE_OIL, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROSEMARY, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '1', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '3/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '1/8 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SWEET_POTATOES, amount: '3', additionalDetails: 'peeled and 1/4 inch julienned strip', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: '2 baking sheets' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat oven to 425ºF.', type: SECTIONS.MAIN },
        { step: 'Prepare two baking sheets with cooking spray.', type: SECTIONS.MAIN },
        { step: 'In a mixing bowl, combine all the herbs, spices and liquids.', type: SECTIONS.MAIN },
        { step: 'Add the sweet potatoes. Mix.', type: SECTIONS.MAIN },
        { step: 'Arrange the fries in a single layer on baking sheets.', type: SECTIONS.MAIN },
        { step: 'Bake until tender and lightly browned (for about 30 to 35 minutes). Turn occasionally.', type: SECTIONS.MAIN },
        { step: 'Enjoy this delicious side!', type: SECTIONS.MAIN },
    ]
};