const stuffing1 = '../assets/Products/stuffing-1.jpeg';
const stuffing2 = '../assets/Products/stuffing-2.jpeg';
const stuffing3 = '../assets/Products/stuffing-3.jpeg';
const stuffing4 = '../assets/Products/stuffing-4.jpeg';
const stuffing5 = '../assets/Products/stuffing-5.jpeg';
const stuffing6 = '../assets/Products/stuffing-6.jpeg';
const stuffing7 = '../assets/Products/stuffing-7.jpeg';
const stuffing8 = '../assets/Products/stuffing-8.jpeg';
const stuffing9 = '../assets/Products/stuffing-9.jpeg';
const stuffing10 = '../assets/Products/stuffing-10.jpeg';
const stuffing11 = '../assets/Products/stuffing-11.jpeg';
const stuffing12 = '../assets/Products/stuffing-12.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BLACK_PEPPER, BREAD, CELERY, CHICKEN_BROTH, COOKING_SPRAY, EGG, FRESH_ROSEMARY, FRESH_SAGE, FRYING_PAN, GARLIC, OVEN, PARSLEY, SALT, SMALL_BOWL, STOVE, SWEET_ONION, UNSALTED_BUTTER, WHISK } = require('./ingredients');

module.exports = {
    cardName: 'Stuffing',
    name: 'Stuffing',
    img: stuffing12,
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.SIDE_DISH],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Stuffing',
            link: 'https://www.howsweeteats.com/2020/11/best-stuffing-recipe/',
            authors: ['Jessica'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...BREAD, amount: 24, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cubed', section: SECTIONS.BREAD },

        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...SWEET_ONION, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: SECTIONS.VEGGIES },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: SECTIONS.VEGGIES },

        { ...FRESH_SAGE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.HERBS },
        { ...FRESH_ROSEMARY, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.HERBS },
        { ...PARSLEY, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.HERBS },

        { ...CHICKEN_BROTH, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        { ...BAKING_PAN, additionalDetails: '9 x 13' },
        COOKING_SPRAY,
        FRYING_PAN,
        WHISK,
        SMALL_BOWL
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Brush the baking pan with some cooking spray.`, section: SECTIONS.PREP_PAN, img: stuffing1 },
        { step: `Place cubed bread in baking pan.`, section: SECTIONS.PREP_PAN, img: stuffing2 },

        { step: `Over medium heat, heat butter in a pan.`, section: SECTIONS.COOK_VEGGIES, img: stuffing3 },
        { step: `Once melted, add the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES, img: stuffing4 },
        { step: `Cook until the veggies are tender (about 8 to 10 minutes).`, section: SECTIONS.COOK_VEGGIES, img: stuffing5 },

        { step: `Add in chopped fresh herbs. Mix and cook for 1 minute.`, section: SECTIONS.COOK_HERBS, img: [stuffing6, stuffing7] },

        { step: `Stir in 1 cup of stock.`, section: SECTIONS.PREP_CASSEROLE, img: stuffing8 },
        { step: `If you like a crispier stuffing, you can scoop out some of the bread and set it aside.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Pour mixture over the cubed bread. Mix until coated.`, section: SECTIONS.PREP_CASSEROLE, img: stuffing9 },
        { step: `If you scooped out some bread, you can add it back in now.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `In a small bowl, combine the eggs and the remaining stock.`, section: SECTIONS.PREP_CASSEROLE, img: stuffing10 },
        { step: `Pour egg mixture over the cubed bread and fold until combined.`, section: SECTIONS.PREP_CASSEROLE },

        { step: `Bake until the internal temperature is 160ºF (about 45 to 50 minutes). If getting browned and it isn't finished yet, you can cover it with foil in a tent shape.`, section: SECTIONS.BAKE, img: stuffing11 },

        { step: `Serve warm on the side of your holiday feast or on any occasion.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a splash of broth. Cover with foil and bake at 350ºF until heated through (about 20 minutes). Then uncover and bake until the top is crispy (about 15 to 20 minutes).',
        },
    ],
    mealPrep: true,
};