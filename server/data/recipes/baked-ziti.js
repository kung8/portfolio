// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASIL_LEAF, CASSEROLE_DISH, COLANDER, CRUSHED_TOMATOES, GARLIC, HEAVY_CREAM, ITALIAN_SAUSAGE, LARGE_PAN, LARGE_POT, MOZZARELLA_CHEESE, OVEN, PARMIGIANO_REGGIANO, RED_PEPPER_FLAKES, SALT, STOVE, WHITE_SUGAR, WOODEN_SPOON, ZITI } = require('./ingredients');

const CASSEROLE_MIXTURE_SECTION = 'Casserole Mixture';
const LAYERING_SECTION = 'Layering';

const COOK_CASSEROLE_MIXTURE = 'Cook Casserole Mixture';
const LAYER_CASSEROLE = 'Layer Casserole';
const BAKE = 'Bake';

module.exports = {
    wip: true,
    cardName: 'Baked Ziti',
    name: 'Baked Ziti',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PASTA],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Baked Ziti', 
            link: 'https://www.onceuponachef.com/recipes/baked-ziti-with-sausage.html',
            author: ['Jennifer Segal'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...ZITI, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.PASTA },

        { ...ITALIAN_SAUSAGE, amount: 1.5, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: CASSEROLE_MIXTURE_SECTION },
        { ...CRUSHED_TOMATOES, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...WHITE_SUGAR, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...PARMIGIANO_REGGIANO, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: CASSEROLE_MIXTURE_SECTION },
        { ...BASIL_LEAF, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: CASSEROLE_MIXTURE_SECTION },

        { ...MOZZARELLA_CHEESE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: LAYERING_SECTION },
        { ...PARMIGIANO_REGGIANO, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'grated', section: LAYERING_SECTION },
    ],
    appliances: [
        STOVE,
        OVEN
    ],
    supplies: [
        LARGE_POT,
        { ...CASSEROLE_DISH, additionalDetails: '9 x 13 inch' },
        COLANDER,
        LARGE_PAN,
        WOODEN_SPOON,
    ],
    directions: [
        { step: 'Over medium-high heat, bring a pot of salted water to a boil.', section: SECTIONS.COOK_PASTA },
        { step: 'Add ziti and cook until it is al dente (about 7 minutes).', section: SECTIONS.COOK_PASTA },
        { step: 'Drain. Add back to pot and set aside.', section: SECTIONS.COOK_PASTA },

        { step: 'Preheat the oven to 425ºF and set oven rack to the center.', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Over medium-high heat, heat a large pan.', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Break up the Italian sausage with a wooden spoon in the pan. Cook until lightly browned (about 5 to 6 minutes).', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Set aside 1 tablespoon of the fat.', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Drain the sausage.', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Re-add the fat to the pot.', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Add garlic and cook until soft (about 2 minute).', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Add crushed tomatoes, salt, sugar and red pepper flakes. Simmer for 10 minutes.', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Add cream, parmesan, sausage and basil. Stir until mixed.', section: COOK_CASSEROLE_MIXTURE },
        { step: 'Combine the filling with the pasta in the large pot.', section: COOK_CASSEROLE_MIXTURE },

        { step: 'Pour half the pasta mixture into a casserole dish.', section: LAYER_CASSEROLE },
        { step: 'Layer half the mozzarella and parmesan evenly.', section: LAYER_CASSEROLE },
        { step: 'Pour the remaining pasta mixture.', section: LAYER_CASSEROLE },
        { step: 'Layer the rest of the cheese evenly.', section: LAYER_CASSEROLE },

        { step: 'Bake until the cheese has melted and browned (for about 15 to 20 minutes).', section: BAKE },

        { step: 'Serve with more basil.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Thaw in the fridge overnight before reheating, or add 15 to 20 minutes to the baking time if reheating from frozen.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 20 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with a microwave-safe lid and heat on high until heated through (about 3 to 5 minutes).',
        },
    ],
    mealPrep: false,
};