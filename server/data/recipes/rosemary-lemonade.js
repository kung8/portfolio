const lemonade1 = '../assets/Products/rosemary-lemonade-1.jpeg';
const lemonade2 = '../assets/Products/rosemary-lemonade-2.jpeg';
const lemonade3 = '../assets/Products/rosemary-lemonade-3.jpeg';
const lemonade4 = '../assets/Products/rosemary-lemonade-4.jpeg';
const lemonade5 = '../assets/Products/rosemary-lemonade-5.jpeg';
const lemonade6 = '../assets/Products/rosemary-lemonade-6.jpeg';
const lemonade7 = '../assets/Products/rosemary-lemonade-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { FRESH_ROSEMARY, HONEY, ICE, LEMON, LEMON_JUICE, WATER, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Rosemary Lemonade',
    name: 'Rosemary Lemonade',
    img: lemonade7,
    recipeAuthors: ['Dixie Graham'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DRINK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.DRINK],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Rosemary Lemonade', link: "https://www.tasteofhome.com/recipes/rosemary-lemonade/" }
    ],
    separated: true,
    ingredients: [
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: 2, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...HONEY, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...ICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.SERVE },
        { ...FRESH_ROSEMARY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'pitcher' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat 2 cups of water in a saucepan. Bring to a boil.', section: SECTIONS.MAIN, img: lemonade1 },
        { step: 'Add rosemary sprigs and cover with a lid. Reduce to low heat and simmer for 10 minutes.', section: SECTIONS.MAIN, img: lemonade2 },
        { step: 'Take out the rosemary.', section: SECTIONS.MAIN, img: lemonade3 },
        { step: 'Add honey and sugar. Mix until dissolved.', section: SECTIONS.MAIN, img: lemonade4 },
        { step: 'Transfer sugar mixture to a pitcher. Place in the fridge for 15 minutes.', section: SECTIONS.MAIN, img: lemonade5 },
        { step: 'Add lemon juice and cold water.', section: SECTIONS.SERVE, img: lemonade6 },
        { step: 'Serve with ice, lemon slices, and more rosemary.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};