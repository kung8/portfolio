const casserole1 = '../assets/Products/breakfast-casserole-1.jpeg';
const casserole2 = '../assets/Products/breakfast-casserole-2.jpeg';
const casserole3 = '../assets/Products/breakfast-casserole-3.jpeg';
const casserole4 = '../assets/Products/breakfast-casserole-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BLACK_PEPPER, CHEDDAR_CHEESE, COOKING_SPRAY, EGG, FRYING_PAN, GREEN_BELL_PEPPER, GREEN_ONION, MILK, OVEN, RED_BELL_PEPPER, SALT, SAUSAGE, SOUR_CREAM, STAND_MIXER, STOVE } = require('./ingredients');

const EGG_MIXTURE = 'Egg Mixture';

module.exports = {
    cardName: 'Breakfast Casserole',
    name: 'Breakfast Casserole',
    img: casserole4,
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK, PROTEIN.EGG],
    type: [TYPES.CASSEROLE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Breakfast Casserole',
            link: 'https://tastesbetterfromscratch.com/breakfast-casserole/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...EGG, amount: 12, unit: '', additionalDetails: '', section: EGG_MIXTURE },
        { ...SOUR_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: EGG_MIXTURE },
        { ...MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: EGG_MIXTURE },
        { ...CHEDDAR_CHEESE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: EGG_MIXTURE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGG_MIXTURE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGG_MIXTURE },

        { ...SAUSAGE, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.SAUSAGE },
        { ...GREEN_ONION, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
        STOVE,
    ],
    supplies: [
        BAKING_PAN,
        COOKING_SPRAY,
        FRYING_PAN,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Spray a baking pan with cooking spray.`, section: SECTIONS.PREP_PAN },

        { step: `In a stand mixer, combine the "${EGG_MIXTURE}" section ingredients.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Over medium heat, brown sausage in a frying pan. Break apart as it cooks.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Drain most of the oil. Transfer sausage to egg mixture.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients to frying pan. Saute for 2 to 3 minutes.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Transfer veggies to the egg mixture.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Mix everything.`, section: SECTIONS.PREP_CASSEROLE, img: casserole1  },
        { step: `Pour mixture in baking pan.`, section: SECTIONS.PREP_CASSEROLE, img: casserole2  },

        { step: `Bake until edges are set and center is just jiggly (about 35 to 50 minutes).`, section: SECTIONS.BAKE, img: casserole3  },

        { step: `Enjoy this delicious breakfast dish!`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave individual servings until heated through.',
        },
    ],
    mealPrep: true,
};
