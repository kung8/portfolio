const pie1 = '../assets/Products/empadao-de-frango-1.jpeg';
const pie2 = '../assets/Products/empadao-de-frango-2.jpeg';
const pie3 = '../assets/Products/empadao-de-frango-3.jpeg';
const pie4 = '../assets/Products/empadao-de-frango-4.jpeg';
const pie5 = '../assets/Products/empadao-de-frango-5.jpeg';
const pie6 = '../assets/Products/empadao-de-frango-6.jpeg';
const pie7 = '../assets/Products/empadao-de-frango-7.jpeg';
const pie8 = '../assets/Products/empadao-de-frango-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BLACK_PEPPER, BOWL, CHICKEN_BREAST, CHICKEN_BROTH, CORN, EGG_YOLK, FORK, GARLIC, GREEN_PEA, HOT_SAUCE, LARGE_PAN, MILK, MIXING_BOWL, OLIVE_OIL, OVEN, PARSLEY, ROLLING_PIN, ROMA_TOMATO, SALT, SPRINGFORM_PAN, STOVE, TOMATO_SAUCE, UNSALTED_BUTTER, WATER, YELLOW_ONION } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const FRAGRANCES_AND_VEGGIES_SECTION = 'Fragrances and Veggies';
const LIQUIDS_SECTION = 'Liquids';
const SPICES_AND_HERBS_SECTION = 'Spices';

const MAKE_CHICKEN_FILLING = 'Make Chicken Filling';
const FORM_PIE = 'Form Pie';

module.exports = {
    cardName: 'Empadão de Frango',
    name: 'Empadão de Frango',
    img: pie8,
    available: true,
    recommended: true,
    createdAt: '2026-06-13 23:37:35',
    modifiedAt: '2026-07-14 18:54:16',
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.BRAZILIAN, GENRES.LATIN],
    method: [METHODS.BAKE, METHODS.SAUTE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PIE, TYPES.CASSEROLE, TYPES.MAIN_COURSE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Brazilian Chicken Pot Pie (Empadão de Frango)',
            link: 'https://www.oliviascuisine.com/brazilian-chicken-pot-pie/',
            authors: ["Olivia's Cuisine"],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FRAGRANCES_AND_VEGGIES_SECTION },
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'finely chopped', section: FRAGRANCES_AND_VEGGIES_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: FRAGRANCES_AND_VEGGIES_SECTION },
        { ...ROMA_TOMATO, amount: 2, unit: '', additionalDetails: 'chopped', section: FRAGRANCES_AND_VEGGIES_SECTION },

        { ...CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cooked and shredded', section: CHICKEN_SECTION },
        { ...CORN, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHICKEN_SECTION },
        { ...GREEN_PEA, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHICKEN_SECTION },
        { ...TOMATO_SAUCE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHICKEN_SECTION },
        { ...HOT_SAUCE, amount: 2, unit: INGREDIENT_UNITS.DASH, additionalDetails: '', section: CHICKEN_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...MILK, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUIDS_SECTION },

        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SPICES_AND_HERBS_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SPICES_AND_HERBS_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SPICES_AND_HERBS_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...EGG_YOLK, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: 24, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided into tablespoons', section: SECTIONS.CRUST },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: 'for brushing', section: SECTIONS.CRUST },

    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        LARGE_PAN,
        { ...BOWL, amount: 2 },
        MIXING_BOWL,
        ROLLING_PIN,
        SPRINGFORM_PAN,
        FORK,
    ],
    directions: [
        { step: `Over medium heat, add olive oil to a large pan.`, section: MAKE_CHICKEN_FILLING },
        { step: `Add onion and garlic. Saute until translucent (about 2 minutes).`, section: MAKE_CHICKEN_FILLING },
        { step: `Add tomatoes. Cook until softened.`, section: MAKE_CHICKEN_FILLING },
        { step: `Add the "${CHICKEN_SECTION}" section ingredients.`, section: MAKE_CHICKEN_FILLING },
        { step: `In a bowl, combine flour and milk. Let the flour dissolve.`, section: MAKE_CHICKEN_FILLING },
        { step: `Add the "${LIQUIDS_SECTION}" section ingredients.`, section: MAKE_CHICKEN_FILLING },
        { step: `Lower heat to medium-low. Cook, stirring often, until liquid has reduced and is creamy and thick (about 10 minutes).`, section: MAKE_CHICKEN_FILLING },
        { step: `Add parsley. Stir.`, section: MAKE_CHICKEN_FILLING },
        { step: `Taste and adjust with salt and pepper.`, section: MAKE_CHICKEN_FILLING },
        { step: `Let it completely cool before filling it in pie.`, section: MAKE_CHICKEN_FILLING, img: pie1 },

        { step: `In a mixing bowl, combine flour and salt.`, section: SECTIONS.MAKE_CRUST },
        { step: `Add egg yolks. Combine.`, section: SECTIONS.MAKE_CRUST },
        { step: `Add butter. Work butter into batter until it becomes like sand.`, section: SECTIONS.MAKE_CRUST, img: pie2 },
        { step: `Add water, a few tablespoons at a time. Work until the dough comes together.`, section: SECTIONS.MAKE_CRUST },
        { step: `Wrap the dough. Chill for 20 minutes.`, section: SECTIONS.MAKE_CRUST, img: pie3 },

        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Set aside a third of the dough (crust top).`, section: FORM_PIE },
        { step: `Roll out the dough to about a 12-inch circle.`, section: FORM_PIE },
        { step: `Place dough in center of springform pan and let it go up the sides of the pan.`, section: FORM_PIE },
        { step: `Poke holes all over the pie crust with a fork.`, section: FORM_PIE, img: pie4 },
        { step: `Add cold filling evenly.`, section: FORM_PIE, img: pie5 },
        { step: `Roll out the remaining dough to top the pie.`, section: FORM_PIE },
        { step: `Make two slits in the center of the top crust.`, section: FORM_PIE },
        { step: `In a small bowl, beat egg yolk.`, section: FORM_PIE, img: pie6 },
        { step: `Brush pie with egg wash.`, section: FORM_PIE },

        { step: `Bake until golden brown and filling is hot (about 25 to 35 minutes).`, section: SECTIONS.BAKE },
        { step: `Remove from oven and let it cool for a few minutes.`, section: SECTIONS.COOL, img: pie7 },
        { step: `Enjoy this Brazilian dish.`, section: SECTIONS.SERVE },
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
            instruction: 'Cover loosely with foil. Bake at 350°F until heated through (about 15 to 20 minutes). Remove foil foil for the last 5 minutes for the crust to crisp up.',
        },
    ],
    mealPrep: true,
};