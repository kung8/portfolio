const alfredo1 = '../assets/Products/breaded-chicken-alfredo-1.jpeg';
const alfredo2 = '../assets/Products/breaded-chicken-alfredo-2.jpeg';
const alfredo3 = '../assets/Products/breaded-chicken-alfredo-3.jpeg';
const alfredo4 = '../assets/Products/breaded-chicken-alfredo-4.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, BOWL, COLANDER, COOLING_RACK, CUTTING_BOARD, EGG, FETTUCCINE_NOODLES, FRYING_PAN, GARLIC, HEAVY_CREAM, LEMON, MEAT_MALLET, OLIVE_OIL, OVEN, PANKO_BREADCRUMBS, PARMESAN_CHEESE, PARSLEY, PLASTIC_WRAP, POT, SALT, SALTED_BUTTER, SAUCEPAN, STOVE, WHITE_PEPPER } = require('./ingredients');

const FLOUR_MIXTURE = 'Flour Mixture';
const EGG_DREDGE = 'Egg Dredge';
const BREADCRUMB_MIXTURE = 'Breadcrumb Mixture';
const ALFREDO_SAUCE = 'Alfredo Sauce';

module.exports = {
    cardName: 'Breaded Chicken Alfredo',
    name: 'Breaded Chicken Alfredo',
    img: alfredo4,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PASTA],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Magnolia Table, Volume 2: A Collection of Recipes for Gathering',
            label: `Mrs. Gail's Chicken Fettuccine Alfredo`,
            link: null,
            authors: ['Joanna Gaines'],
            finder: 'Amanda Strong'
        }
    ],
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 5 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: FLOUR_MIXTURE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: FLOUR_MIXTURE },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_MIXTURE },

        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: EGG_DREDGE },

        { ...PANKO_BREADCRUMBS, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADCRUMB_MIXTURE },
        { ...PARMESAN_CHEESE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: BREADCRUMB_MIXTURE },

        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'plus some more as needed', section: SECTIONS.FOR_FRYING },
        { ...SALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'plus some more as needed', section: SECTIONS.FOR_FRYING },

        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.PASTA },
        { ...FETTUCCINE_NOODLES, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.PASTA },

        { ...SALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ALFREDO_SAUCE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: ALFREDO_SAUCE },
        { ...HEAVY_CREAM, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ALFREDO_SAUCE },
        { ...PARMESAN_CHEESE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: ALFREDO_SAUCE },
        { ...WHITE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ALFREDO_SAUCE },

        { ...LEMON, amount: 2, unit: '', additionalDetails: 'wedged', section: SECTIONS.SERVE },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        CUTTING_BOARD,
        PLASTIC_WRAP,
        MEAT_MALLET,
        { ...BOWL, amount: 3 },
        BAKING_SHEET,
        COOLING_RACK,
        FRYING_PAN,
        POT,
        COLANDER,
        SAUCEPAN,
    ],
    directions: [
        { step: `Preheat the oven to 200ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Cut the chicken in half if needed. Place chicken on a cutting board and cover with plastic wrap.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Gently pound to get chicken to 1/2 inch thick.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Prep dredging station: (1) flour mixture, (2) eggs, and (3) panko mixture.`, section: SECTIONS.PREP_DREDGING_STATION },
        { step: `Dredge chicken in each bowl making sure to get both sides of the chicken and shake off the excess between each bowl.`, section: SECTIONS.DREDGE },
        { step: `Place coated chicken on a plate.`, section: SECTIONS.DREDGE, img: alfredo1 },

        { step: `Line a baking sheet with paper towels and place a wire rack on top.`, section: SECTIONS.FRY },
        { step: `Over medium heat, add olive oil and butter to a frying pan.`, section: SECTIONS.FRY },
        { step: `Once butter is melted and oil is shimmery, add chicken in batches.`, section: SECTIONS.FRY },
        { step: `Fry until golden brown on both sides (about 3 minutes per side).`, section: SECTIONS.FRY },
        { step: `Transfer chicken to the drip station.`, section: SECTIONS.FRY },
        { step: `Repeat with the remaining chicken. Add more oil and butter as needed.`, section: SECTIONS.FRY },
        { step: `Place fried chicken in the oven to keep warm while you cook the pasta and make the sauce.`, section: SECTIONS.FRY },

        { step: `Over medium-high heat, bring a pot of salted water to a boil.`, section: SECTIONS.COOK_PASTA },
        { step: `Add fettuccine. Cook to al dente. Drain.`, section: SECTIONS.COOK_PASTA },
        { step: `Drizzle with a little olive oil to help the noodles from sticking. Set aside.`, section: SECTIONS.COOK_PASTA },

        { step: `Over low heat, melt butter in a saucepan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add garlic. Saute until fragrant and softened (about 2 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add cream. Cook, and whisk often, until bubbling and thickened (about 6 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add parmesan and white pepper. Whisk until combined and cheese is melted.`, section: SECTIONS.COOK_SAUCE, img: alfredo2 },

        { step: `Add fettuccine. Toss until coated.`, section: SECTIONS.ASSEMBLE, img: alfredo3 },

        { step: `Enjoy this delicious elevated chicken alfredo dish.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium heat, heat a drizzle of olive oil in a pan. Heat chicken until warmed through and crispy (about 3 to 4 minutes per side). Add a splash of milk or cream to help loosen up the pasta. Heat until warmed through.',
        },
    ],
    mealPrep: true,
};