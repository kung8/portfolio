const ziti1 = '../assets/Products/baked-ziti-1.jpeg';
const ziti2 = '../assets/Products/baked-ziti-2.jpeg';
const ziti3 = '../assets/Products/baked-ziti-3.jpeg';
const ziti4 = '../assets/Products/baked-ziti-4.jpeg';
const ziti5 = '../assets/Products/baked-ziti-5.jpeg';
const ziti6 = '../assets/Products/baked-ziti-6.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASIL_LEAF, CASSEROLE_DISH, COLANDER, CRUSHED_TOMATOES, GARLIC, HEAVY_CREAM, ITALIAN_SAUSAGE, LARGE_PAN, LARGE_POT, MOZZARELLA_CHEESE, OVEN, PARMIGIANO_REGGIANO, RED_PEPPER_FLAKES, SALT, STOVE, WHITE_SUGAR, WOODEN_SPOON, ZITI } = require('./ingredients');

module.exports = {
    cardName: 'Baked Ziti',
    name: 'Baked Ziti',
    img: ziti5,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PASTA],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Baked Ziti',
            link: 'https://www.onceuponachef.com/recipes/baked-ziti-with-sausage.html',
            authors: ['Jennifer Segal'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...ZITI, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.PASTA },

        { ...ITALIAN_SAUSAGE, amount: 1.5, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.CASSEROLE },
        { ...CRUSHED_TOMATOES, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...WHITE_SUGAR, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...PARMIGIANO_REGGIANO, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.CASSEROLE },
        { ...BASIL_LEAF, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.CASSEROLE },

        { ...MOZZARELLA_CHEESE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.CHEESE },
        { ...PARMIGIANO_REGGIANO, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'grated', section: SECTIONS.CHEESE },
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
        { step: `Over medium-high heat, bring a pot of salted water to a boil.`, section: SECTIONS.COOK_NOODLES },
        { step: `Add ziti and cook until it is al dente (about 7 minutes).`, section: SECTIONS.COOK_NOODLES },
        { step: `Drain. Add back to pot and set aside.`, section: SECTIONS.COOK_NOODLES },

        { step: `Preheat the oven to 425ºF and set oven rack to the center.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Over medium-high heat, heat a large pan.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Break up the Italian sausage with a wooden spoon in the pan. Cook until lightly browned (about 5 to 6 minutes).`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Set aside 1 tablespoon of the fat.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Drain the sausage.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Re-add the fat to the pot.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Add garlic and cook until soft (about 2 minute).`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Add crushed tomatoes, salt, sugar and red pepper flakes. Simmer for 10 minutes.`, section: SECTIONS.PREP_CASSEROLE, img: ziti1 },
        { step: `Add cream, parmesan, sausage and basil. Stir until mixed.`, section: SECTIONS.PREP_CASSEROLE, img: ziti2 },
        { step: `Combine the filling with the pasta in the large pot.`, section: SECTIONS.PREP_CASSEROLE, img: ziti3 },

        { step: `Pour half the pasta mixture into a casserole dish.`, section: SECTIONS.LAYER },
        { step: `Layer half the mozzarella and parmesan evenly.`, section: SECTIONS.LAYER },
        { step: `Pour the remaining pasta mixture.`, section: SECTIONS.LAYER },
        { step: `Layer the rest of the cheese evenly.`, section: SECTIONS.LAYER, img: ziti4 },

        { step: `Bake until the cheese has melted and browned (for about 15 to 20 minutes).`, section: SECTIONS.BAKE },

        { step: `Serve with more basil.`, section: SECTIONS.SERVE, img: ziti6 },
    ],
    notes: [
        { note: `This tasted just like lasagna but was way easier to make!` },
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