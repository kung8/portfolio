// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { WARM_WATER, UNSALTED_BUTTER, WHITE_SUGAR, SALT, ALL_PURPOSE_FLOUR, EGGS, VANILLA_EXTRACT, VEGETABLE_OIL, CINNAMON } = require('./ingredients');

const CHURROS_SECTION = 'Churros';
const COATING = 'Coating';
const MAKE_DOUGH = 'Make Dough';
const MAKE_CHURROS = 'Make Churros';
const MAKE_COATING = 'Make Coating';

module.exports = {
    wip: true,
    cardName: 'Churros',
    name: 'Churros',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.SPANISH],
    method: [METHODS.DEEP_FRY],
    type: [TYPES.DESSERT],
    yields: '18 servings',
    prepTime: '10 m',
    cookTime: '20 m',
    websites: [
        { label: 'Churros', link: 'https://www.cookingclassy.com/churros/' }
    ],
    separated: true,
    ingredients: [
        { ...WARM_WATER, amount: '1 c', additionalDetails: '', section: CHURROS_SECTION },
        { ...UNSALTED_BUTTER, amount: '1/4 c', additionalDetails: 'diced cubes', section: CHURROS_SECTION },
        { ...WHITE_SUGAR, amount: '1 Tbsp', additionalDetails: '', section: CHURROS_SECTION },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: CHURROS_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: '1 c', additionalDetails: '', section: CHURROS_SECTION },
        { ...EGGS, amount: '1', additionalDetails: '', section: CHURROS_SECTION },
        { ...VANILLA_EXTRACT, amount: '1/2 tsp', additionalDetails: '', section: CHURROS_SECTION },
        { ...VEGETABLE_OIL, amount: '', additionalDetails: 'for frying', section: CHURROS_SECTION },

        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: COATING },
        { ...CINNAMON, amount: '3/4 tsp', additionalDetails: '', section: COATING },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'shallow dish' },
        { name: 'saucepan' },
        { name: 'mixing bowl' },
        { name: 'pot' },
        { name: 'piping bag with tip' },
        { name: 'cooking scissors' },
        { name: 'tongs' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'wire cooling rack' },
    ],
    directions: [
        { step: 'In a shallow dish, combine the "Coating" ingredients.', type: MAKE_COATING },
        { step: 'Over medium-high heat, add butter, water, sugar and salt to a saucepan. Mix and bring to a boil.', type: MAKE_DOUGH },
        { step: 'Reduce heat to medium-low heat. Add flour and mix until there are no lumps.', type: MAKE_DOUGH },
        { step: 'Transfer to a mixing bowl and let it cool for 5 minutes.', type: MAKE_DOUGH },
        { step: 'Once it has cooled, add vanilla and egg. Mix until smooth. It will look like it won\'t mix but it will.', type: MAKE_DOUGH },
        { step: 'Over medium-high heat, add 1 1/2 inches of vegetable oil to a pot. The oil needs to be 360ºF to ensure the right fry, so adjust the heat as needed. Adding more churros in the oil will also help lower the oil temperature. But avoid overcrowding as much as possible.', type: MAKE_CHURROS },
        { step: 'Lay some paper towels on a baking sheet and place a wire rack on top.', type: MAKE_CHURROS },
        { step: 'Ready a 16 inch piping bag with a 1/2" rounded star tip and fill the bag with the batter.', type: MAKE_CHURROS },
        { step: 'Once the oil is at 360ºF, carefully pipe out 6 inches of churros into the oil and cut with cooking scissors.', type: MAKE_CHURROS },
        { step: 'Let it fry until golden brown (about 2 minutes on each side).', type: MAKE_CHURROS },
        { step: 'Using tongs, transfer the cooked churros to the drying station and let it drip for 10 seconds.', type: MAKE_CHURROS },
        { step: 'Dip them into the cinnamon sugar mixture and roll until it is well coated.', type: MAKE_CHURROS },
        { step: 'Enjoy these immediately and serve with any additional toppings or sauces.', type: SECTIONS.SERVE },
    ]
};