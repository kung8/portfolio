// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { ZITI, ITALIAN_SAUSAGE, GARLIC, CRUSHED_TOMATOES, SALT, RED_PEPPER_FLAKES, HEAVY_CREAM, PARMIGIANO_REGGIANO, BASIL_LEAF, MOZZARELLA_CHEESE, WHITE_SUGAR } = require('./ingredients');

const PASTA_SECTION = 'Pasta';
const CASSEROLE_MIXTURE_SECTION = 'Casserole Mixture';
const LAYERING_SECTION = 'Layering';

const COOK_PASTA = 'Cook Pasta';
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
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Baked Ziti', link: 'https://www.onceuponachef.com/recipes/baked-ziti-with-sausage.html' }
    ],
    separated: true,
    ingredients: [
        { ...ZITI, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: PASTA_SECTION },

        { ...ITALIAN_SAUSAGE, amount: 1.5, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: CASSEROLE_MIXTURE_SECTION },
        { ...CRUSHED_TOMATOES, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...WHITE_SUGAR, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...RED_PEPPER_FLAKES, amount: 1/4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CASSEROLE_MIXTURE_SECTION },
        { ...PARMIGIANO_REGGIANO, amount: 1/3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: CASSEROLE_MIXTURE_SECTION },
        { ...BASIL_LEAF, amount: 1/3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: CASSEROLE_MIXTURE_SECTION },

        { ...MOZZARELLA_CHEESE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: LAYERING_SECTION },
        { ...PARMIGIANO_REGGIANO, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'grated', section: LAYERING_SECTION },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: '9 x 13 inch casserole dish' },
        { name: 'colander' },
        { name: 'large pan' },
        { name: 'wooden spoon' },
    ],
    directions: [
        { step: 'Over medium-high heat, bring a pot of salted water to a boil.', type: COOK_PASTA },
        { step: 'Add ziti and cook until it is al dente (about 7 minutes).', type: COOK_PASTA },
        { step: 'Drain. Add back to pot and set aside.', type: COOK_PASTA },

        { step: 'Preheat the oven to 425ºF and set oven rack to the center.', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Over medium-high heat, heat a large pan.', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Break up the Italian sausage with a wooden spoon in the pan. Cook until lightly browned (about 5 to 6 minutes).', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Set aside 1 tablespoon of the fat.', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Drain the sausage.', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Re-add the fat to the pot.', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Add garlic and cook until soft (about 2 minute).', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Add crushed tomatoes, salt, sugar and red pepper flakes. Simmer for 10 minutes.', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Add cream, parmesan, sausage and basil. Stir until mixed.', type: COOK_CASSEROLE_MIXTURE },
        { step: 'Combine the filling with the pasta in the large pot.', type: COOK_CASSEROLE_MIXTURE },

        { step: 'Pour half the pasta mixture into a casserole dish.', type: LAYER_CASSEROLE },
        { step: 'Layer half the mozzarella and parmesan evenly.', type: LAYER_CASSEROLE },
        { step: 'Pour the remaining pasta mixture.', type: LAYER_CASSEROLE },
        { step: 'Layer the rest of the cheese evenly.', type: LAYER_CASSEROLE },

        { step: 'Bake until the cheese has melted and browned (for about 15 to 20 minutes).', type: BAKE },

        { step: 'Serve with more basil.', type: SECTIONS.SERVE },
    ]
};