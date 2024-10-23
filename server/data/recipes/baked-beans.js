// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { SALT, DRY_BEAN, BAKING_SODA, BACON, SMALL_YELLOW_ONION, BROWN_SUGAR, KETCHUP, MAPLE_SYRUP, APPLE_CIDER_VINEGAR } = require('./ingredients');

const BEANS = 'Beans';

module.exports = {
    cardName: 'Baked Beans',
    name: 'Baked Beans',
    img: '',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK, PROTEIN.BEAN],
    type: [TYPES.PROTEIN],
    yields: '14 servings',
    prepTime: '30 m',
    cookTime: '3 h',
    websites: [
        { label: 'Baked Beans', link: 'https://dancearoundthekitchen.com/baked-beans-from-scratch/' }
    ],
    separated: true,
    ingredients: [
        { ...DRY_BEAN, amount: '1 lb', additionalDetails: '', section: BEANS },
        { ...SALT, amount: '2 tsp', additionalDetails: '', section: BEANS },
        { ...BAKING_SODA, amount: '1/4 tsp', additionalDetails: '', section: BEANS },
        { ...BACON, amount: '8 slices', additionalDetails: 'diced', section: '' },
        { ...SMALL_YELLOW_ONION, amount: '1 c', additionalDetails: 'diced', section: '' },
        { ...BROWN_SUGAR, amount: '', additionalDetails: '', section: '' },
        { ...KETCHUP, amount: '', additionalDetails: '', section: '' },
        { ...MAPLE_SYRUP, amount: '', additionalDetails: '', section: '' },
        { ...APPLE_CIDER_VINEGAR, amount: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'dutch oven pot' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a large pot, add the dry beans.', type: BEANS },
        { step: 'Fill the pot with cold water until it is a few inches above the beans.', type: BEANS },
        { step: 'Cover with a lid and soak the beans for 12 hours or overnight.', type: BEANS },
        { step: 'Drain beans in a colander.', type: BEANS },
        { step: 'Again fill the pot with water until there\'s 2 inches above the beans.', type: BEANS },
        { step: 'Add salt and baking soda and mix.', type: BEANS },
        { step: 'Over medium-high heat, bring the pot of beans to a boil.', type: BEANS },
        { step: 'Reduce to a low heat and simmer for one hour. Stirring occasionally.', type: BEANS },
        { step: 'Drain the beans. Reserve about 3 cups of the bean water for later. Set aside the beans.', type: BEANS },
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Over medium-high heat, add the diced bacon in a dutch oven pot. Cook for a few minutes.', type: SECTIONS.MAIN },
        { step: 'Add onions. Cook until the bacon is crisp and onions are translucent.', type: SECTIONS.MAIN },
        { step: 'Add the brown sugar, ketchup, syrup, apple cider vinegar and 1 1/2 cups of the bean liquid.', type: SECTIONS.MAIN },
        { step: 'Add the beans to the dutch oven and cover with a lid.', type: SECTIONS.MAIN },
        { step: 'Bake for 1 hour.', type: SECTIONS.MAIN },
        { step: 'Stir. If it looks dry, add more of the reserved bean water.', type: SECTIONS.MAIN },
        { step: 'Bake for another 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Remove the lid. Bake for another 30 minutes. The beans will thicken now.', type: SECTIONS.MAIN },
        { step: 'Stir and serve warm.', type: SECTIONS.MAIN },
    ]
};