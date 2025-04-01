const fullPlate = '../assets/Products/chicken-cordon-bleu-plated.jpeg';
const almond = '../assets/Products/green-bean-almondine-almond-and-onion.jpeg';
const boiled = '../assets/Products/green-bean-almondine-boiled.jpeg';
const cooked = '../assets/Products/green-bean-almondine-cooked.jpeg';
const bath = '../assets/Products/green-bean-almondine-ice-bath.jpeg';
const ice = '../assets/Products/green-bean-almondine-ice-water.jpeg';
const plate = '../assets/Products/green-bean-almondine-plate.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    SALT,
    FRENCH_GREEN_BEAN,
    UNSALTED_BUTTER,
    SLICED_ALMONDS,
    SHALLOT,
    LEMON_ZEST,
    LEMON_JUICE,
    BLACK_PEPPER,
    ICE,
} = require('./ingredients');

module.exports = {
    cardName: 'Green Bean Almondine',
    name: 'Green Bean Almondine',
    img: plate,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BOIL, METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Green Bean Almondine', link: 'https://www.abeautifulplate.com/green-beans-almondine/' }
    ],
    ingredients: [
        { ...SALT, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: '' },
        { ...FRENCH_GREEN_BEAN, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: '' },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...SLICED_ALMONDS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...SHALLOT, amount: 1, unit: '', additionalDetails: '', section: '' },
        { ...LEMON_ZEST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: '' },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: '' },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: '' },
        { ...ICE, amount: '', unit: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Over medium-high heat, boil water and salt in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Add beans into pan and cook until they become bright green (3 to 4 minutes).', type: SECTIONS.MAIN, img: boiled },
        { step: 'Fill a mixing bowl with ice and water.', type: SECTIONS.MAIN, img: ice },
        { step: 'Transfer green beans into ice water and let chill for 3 to 4 minutes.', type: SECTIONS.MAIN, img: bath },
        { step: 'Drain.', type: SECTIONS.MAIN },
        { step: 'Brown butter in pan.', type: SECTIONS.MAIN },
        { step: 'Add almonds and shallots to pan and cook for 2 minutes.', type: SECTIONS.MAIN, img: almond },
        { step: 'Add green beans back into the pan and cook for a few minutes.', type: SECTIONS.MAIN, img: cooked },
        { step: 'Serve warm.', type: SECTIONS.MAIN, img: fullPlate },
    ]
};