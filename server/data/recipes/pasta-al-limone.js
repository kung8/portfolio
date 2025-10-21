const limone1 = '../assets/Products/pasta-al-limone-1.jpeg';
const limone2 = '../assets/Products/pasta-al-limone-2.jpeg';
const limone3 = '../assets/Products/pasta-al-limone-3.jpeg';
const limone4 = '../assets/Products/pasta-al-limone-4.jpeg';
const limone5 = '../assets/Products/pasta-al-limone-5.jpeg';
const limone6 = '../assets/Products/pasta-al-limone-6.jpeg';
const limone7 = '../assets/Products/pasta-al-limone-7.jpeg';
const limone8 = '../assets/Products/pasta-al-limone-8.jpeg';
const limone9 = '../assets/Products/pasta-al-limone-9.jpeg';
const limone10 = '../assets/Products/pasta-al-limone-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, FETTUCCINE_NOODLES, HEAVY_CREAM, LEMON_JUICE, LEMON_ZEST, PARMIGIANO_REGGIANO, SALT, UNSALTED_BUTTER } = require('./ingredients');

const COMBINE = 'Combine';

module.exports = {
    cardName: 'Pasta al Limone',
    name: 'Pasta al Limone',
    img: limone10,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.PASTA],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pasta al Limone', 
            link: 'https://tastefullygrace.com/lemon-pasta-pasta-al-limone/',
            author: ['Grace Vallo'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...FETTUCCINE_NOODLES, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_ZEST, amount: 5 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...PARMIGIANO_REGGIANO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.SAUCE },

        { ...PARMIGIANO_REGGIANO, amount: '', unit: '', additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
        { ...LEMON_ZEST, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'Over medium heat, add butter, lemon juice and lemon zest to a large pan. Stir occasionally.', section: SECTIONS.COOK_SAUCE, img: limone1 },
        { step: 'Let the butter melt and simmer for 20 seconds.', section: SECTIONS.COOK_SAUCE, img: limone2 },
        { step: 'Add the heavy cream, black pepper and salt. Mix.', section: SECTIONS.COOK_SAUCE, img: limone3 },
        { step: 'Reduce to medium-low heat. Bring to a gentle simmer. Let it simmer while you cook the pasta.', section: SECTIONS.COOK_SAUCE },

        { step: 'Over medium-high heat, bring a pot of salted water to a boil.', section: SECTIONS.COOK_NOODLES },
        { step: 'Add the pasta and cook until al dente.', section: SECTIONS.COOK_NOODLES, img: limone5 },
        { step: 'Drain the pasta.', section: SECTIONS.COOK_NOODLES },

        { step: 'Reduce to low heat. Add the parmesan to the sauce and stir.', section: COMBINE, img: limone4 },
        { step: 'Add pasta to the sauce. Combine.', section: COMBINE, img: [limone6, limone7] },
        { step: 'Serve immediately and garnish with more of the toppings as desired. Enjoy the fresh bright flavors of this dish.', section: SECTIONS.SERVE, img: [limone8, limone9] },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, add a splash of olive oil and reheat the pasta until heated through (about a few minutes).',
        },
    ],
    mealPrep: true,
};