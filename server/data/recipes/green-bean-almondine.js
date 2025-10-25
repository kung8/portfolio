const bean1 = '../assets/Products/green-bean-almondine-1.jpeg';
const bean2 = '../assets/Products/green-bean-almondine-2.jpeg';
const bean3 = '../assets/Products/green-bean-almondine-3.jpeg';
const bean4 = '../assets/Products/green-bean-almondine-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    FRENCH_GREEN_BEAN,
    ICE,
    LEMON_JUICE,
    LEMON_ZEST,
    MIXING_BOWL,
    SALT,
    SAUCEPAN,
    SHALLOT,
    SLICED_ALMONDS,
    STOVE,
    UNSALTED_BUTTER,
} = require('./ingredients');

module.exports = {
    cardName: 'Green Bean Almondine',
    name: 'Green Bean Almondine',
    img: bean4,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BOIL, METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Green Bean Almondine', 
            link: 'https://www.abeautifulplate.com/green-beans-almondine/',
            authors: [''],
            finder: 'Kevin Ung', 
        }
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
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Over medium-high heat, boil water and salt in a saucepan.', section: SECTIONS.MAIN },
        { step: 'Add beans into pan and cook until they become bright green (3 to 4 minutes).', section: SECTIONS.MAIN, img: bean1 },
        { step: 'Fill a mixing bowl with ice and water.', section: SECTIONS.MAIN },
        { step: 'Transfer green beans into ice water and let chill for 3 to 4 minutes.', section: SECTIONS.MAIN, img: bean2 },
        { step: 'Drain.', section: SECTIONS.MAIN },
        { step: 'Brown butter in pan.', section: SECTIONS.MAIN },
        { step: 'Add almonds and shallots to pan and cook for 2 minutes.', section: SECTIONS.MAIN },
        { step: 'Add green beans back into the pan and cook for a few minutes.', section: SECTIONS.MAIN, img: bean3 },
        { step: 'Serve warm.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};