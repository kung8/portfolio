// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { UNSALTED_BUTTER, YELLOW_ONION, GARLIC, SALT, BLACK_PEPPER, WHITE_RICE, CHICKEN_BROTH, PARSLEY } = require('./ingredients');

const RICE_SECTION = 'Rice';
const ONION_MIXTURE_SECTION = 'Onion Mixture';
const BROTH_SECTION = 'Broth';

const PREP_RICE = 'Prep Rice';
const COOK_RICE = 'Cook Rice';
const COOK_ONION = 'Cook Onion';
const STEAM_RICE = 'Steam Rice';

module.exports = {
    wip: true,
    cardName: 'Rice Pilaf',
    name: 'Rice Pilaf',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MIDDLE_EASTERN],
    method: [METHODS.SIMMER],
    protein: [],
    type: [TYPES.RICE],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Rice Pilaf', link: 'https://tastesbetterfromscratch.com/how-to-make-easy-rice-pilaf/' }
    ],
    separated: true,
    ingredients: [
        { ...WHITE_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICE_SECTION },

        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: ONION_MIXTURE_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: ONION_MIXTURE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ONION_MIXTURE_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ONION_MIXTURE_SECTION },

        { ...CHICKEN_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BROTH_SECTION },
        { ...PARSLEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'strainer' },
        { name: 'saucepan with lid' },
    ],
    directions: [
        { step: 'Run the rice under water until it comes out clear. Drain.', type: PREP_RICE },
        { step: 'Over medium heat, melt butter in a saucepan.', type: COOK_RICE },
        { step: 'Add rice. Cook and stir until golden.', type: COOK_RICE },
        { step: 'Add "Onion Mixture" section ingredients to the pan. Cook until the onions are softened.', type: COOK_ONION },
        { step: 'Add broth. Bring to a boil.', type: STEAM_RICE },
        { step: 'Reduce to low heat. Cover with a lid. Cook for 15 to 18 minutes. Do not remove lid during the simmering process.', type: STEAM_RICE },
        { step: 'Remove pot from heat and let rest for 10 minutes. Leave the lid on.', type: STEAM_RICE },
        { step: 'Remove lid and fluff rice.', type: STEAM_RICE },
        { step: 'Top with parsley and serve with your favorite side dishes.', type: SECTIONS.SERVE },
    ]
};