const cheese1 = '../assets/Products/baked-macaroni-and-cheese-1.jpeg';
const cheese2 = '../assets/Products/baked-macaroni-and-cheese-2.jpeg';
const cheese3 = '../assets/Products/baked-macaroni-and-cheese-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BLACK_PEPPER, CHEDDAR_CHEESE, COLANDER, COOKING_SPRAY, ELBOW_MACARONI, GRUYERE_CHEESE, HEAVY_CREAM, LARGE_POT, MIXING_BOWL, OLIVE_OIL, OVEN, PANKO_BREADCRUMBS, PARMESAN_CHEESE, SALT, SMALL_BOWL, SMOKED_PAPRIKA, STOVE, UNSALTED_BUTTER, WHOLE_MILK } = require('./ingredients');

module.exports = {
    cardName: 'Baked Mac and Cheese',
    name: 'Baked Macaroni and Cheese',
    img: cheese3,
    available: true,
    recommended: true,
    createdAt: '2024-10-22 21:36:31',
    modifiedAt: '2026-05-02 14:03:03',
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL, METHODS.BAKE],
    type: [TYPES.CASSEROLE, TYPES.PASTA],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Macaroni and Cheese', 
            link: 'https://www.momontimeout.com/best-homemade-baked-mac-and-cheese-recipe/',
            authors: ['Trish'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...ELBOW_MACARONI, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...CHEDDAR_CHEESE, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.SAUCE },
        { ...GRUYERE_CHEESE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHOLE_MILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...PANKO_BREADCRUMBS, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PARMESAN_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...SMOKED_PAPRIKA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        COOKING_SPRAY,
        LARGE_POT,
        COLANDER,
        { ...MIXING_BOWL, amount: 2 },
        SMALL_BOWL,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Light spray some cooking oil spray in a baking dish.`, section: SECTIONS.PREP_PAN },
        { step: `In a large pot, boil water.`, section: SECTIONS.COOK_NOODLES },
        { step: `Cook pasta until it is cooked to al dente (follow the instructions on the package).`, section: SECTIONS.COOK_NOODLES },
        { step: `Drain the pasta in a colander and place in a bowl.`, section: SECTIONS.COOK_NOODLES },
        { step: `Drizzle with olive oil and mix until pasta is coated. Set aside.`, section: SECTIONS.COOK_NOODLES },
        { step: `In a mixing bowl, combine shredded cheese and set aside.`, section: SECTIONS.COOK_SAUCE },
        { step: `Over medium heat, melt butter in a large pot.`, section: SECTIONS.COOK_SAUCE },
        { step: `Whisk flour until it becomes golden (about 1 minute).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add milk and heavy cream and whisk until smooth.`, section: SECTIONS.COOK_SAUCE },
        { step: `Continue to whisk until it bubbles (for about 2 minutes)`, section: SECTIONS.COOK_SAUCE },
        { step: `Add salt and pepper.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add 2 cups of the mixed cheeses and mix. Repeat with another 2 cups. Sauce should be thick.`, section: SECTIONS.COOK_SAUCE },
        { step: `Mix together the sauce and the pasta until the pasta is coated.`, section: SECTIONS.ASSEMBLE, img: cheese1 },
        { step: `Pour half of the macaroni and cheese into the baking dish.`, section: SECTIONS.ASSEMBLE },
        { step: `Add the last 2 cups of cheese on top of the mac and cheese.`, section: SECTIONS.ASSEMBLE },
        { step: `Add the last of the mac and cheese.`, section: SECTIONS.ASSEMBLE },
        { step: `In a small bowl, mix panko breadcrumbs, parmesan cheese, paprika and melted butter.`, section: SECTIONS.ASSEMBLE },
        { step: `Sprinkle this mixture over the mac and cheese.`, section: SECTIONS.ASSEMBLE },
        { step: `Bake until bubbly and golden brown (about 30 minutes).`, section: SECTIONS.BAKE, img: cheese2 },
        { step: `Serve this warm and enjoy this comfort food.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a little milk or cheese sauce. Cover in foil and bake at 350ºF until heated through (about 20 minutes). Remove foil and broil until the crust is crispy (about 5 minutes).',
        },
    ],
    mealPrep: true,
};