const paella1 = '../assets/Products/shrimp-paella-1.jpeg';
const paella2 = '../assets/Products/shrimp-paella-2.jpeg';
const paella3 = '../assets/Products/shrimp-paella-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ARBORIO_RICE, BOWL, CAYENNE_PEPPER, CHICKEN_BROTH, DUTCH_OVEN_POT, GARLIC, GREEN_PEA, LEMON, OLIVE_OIL, OVEN, PAPRIKA, PARSLEY, POLISH_KIELBASA, RED_BELL_PEPPER, SAFFRON_THREADS, SALT, SAUCEPAN, SHRIMP, STOVE, STRAINER, YELLOW_ONION } = require('./ingredients');

const PAELLA = 'Paella';
const MAKE_PAELLA = 'Make Paella';

module.exports = {
    cardName: 'Shrimp Paella',
    name: 'Shrimp Paella',
    img: paella3,
    available: true,
    recommended: true,
    createdAt: '12/11/2024 21:26:48',
    modifiedAt: '06/04/2026 19:22:12',
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.SPANISH],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Paella', 
            link: 'https://www.allrecipes.com/recipe/238588/quick-and-easy-paella/',
            authors: ['John Mitzewich'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'deveined with peels', section: SECTIONS.SAUCE },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SAFFRON_THREADS, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PAELLA },
        { ...POLISH_KIELBASA, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thin round slices', section: PAELLA },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: PAELLA },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: PAELLA },
        { ...ARBORIO_RICE, amount: 4 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PAELLA },
        { ...GREEN_PEA, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PAELLA },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: PAELLA },

        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: 'or to taste', section: SECTIONS.SEASONINGS },

        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced wedges', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        SAUCEPAN,
        STRAINER,
        BOWL,
        DUTCH_OVEN_POT,
    ],
    directions: [
        { step: `Peel the shrimp. Set aside the shell for the broth.`, section: SECTIONS.COOK_SAUCE },
        { step: `Over medium heat, add shrimp shells and olive oil to a saucepan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Cook until the shells are pink and fragrant (about 1 to 2 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add saffron and stir.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add chicken broth. Bring to a simmer.`, section: SECTIONS.COOK_SAUCE },
        { step: `Cook until the broth is rusty brown and fragrant (about 20 minutes).`, section: SECTIONS.COOK_SAUCE, img: paella1 },
        { step: `Strain the broth over a bowl. Discard the shells and saffron.`, section: SECTIONS.COOK_SAUCE },
        { step: `Pour saffron broth back into a saucepan and set it on low heat.`, section: SECTIONS.COOK_SAUCE },

        { step: `Preheat the oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Over medium heat, heat olive oil in a dutch oven pan.`, section: MAKE_PAELLA },
        { step: `Add sausage. Cook until browned (about 2 minutes per side).`, section: MAKE_PAELLA },
        { step: `Add onion. Cook and stir until onion is soft and translucent (about 3 minutes).`, section: MAKE_PAELLA },
        { step: `Lower to medium-low heat.`, section: MAKE_PAELLA },
        { step: `Add garlic. Cook and stir until fragrant (about 1 minute).`, section: MAKE_PAELLA },
        { step: `Add rice. Stir to coat rice.`, section: MAKE_PAELLA },
        { step: `Add peas. Mix.`, section: MAKE_PAELLA },
        { step: `Pat rice down so it is in an even layer. The rice would not be cooked at this point.`, section: MAKE_PAELLA },
        { step: `Arrange shrimp in a single layer over the rice.`, section: MAKE_PAELLA },
        { step: `Place peppers in between and around the shrimp.`, section: MAKE_PAELLA },
        { step: `Season with the seasonings.`, section: MAKE_PAELLA },
        { step: `Turn heat to high. Let rice cook some more.`, section: MAKE_PAELLA, img: paella2 },
        { step: `Once the rice sizzles, pour the saffron broth over the shrimp and shake the pan to spread the broth (do not mix).`, section: MAKE_PAELLA },
        { step: `Bake until the rice is almost tender and still wet (about 20 minutes).`, section: MAKE_PAELLA },
        { step: `Over medium-high heat, let the rice become tender, liquid has been absorbed, and bottom part of the rice has crusted and caramelized (about 3 to 5 minutes).`, section: MAKE_PAELLA },
        { step: `Serve this dish warm`, section: SECTIONS.SERVE },
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
            instruction: 'Bake at 350ºF until heated through (about 8 minutes).',
        },
    ],
    mealPrep: true,
};