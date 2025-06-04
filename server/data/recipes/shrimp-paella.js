// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { SHRIMP, OLIVE_OIL, SAFFRON_THREADS, CHICKEN_BROTH, CHORIZO, YELLOW_ONION, GARLIC, RED_BELL_PEPPER, SALT, PAPRIKA, CAYENNE_PEPPER, GREEN_PEA, ARBORIO_RICE, PARSLEY, LEMON } = require('./ingredients');

const SAFFRON_BROTH = 'Saffron Broth';
const PAELLA = 'Paella';

module.exports = {
    wip: true,
    cardName: 'Shrimp Paella',
    name: 'Shrimp Paella',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.SPANISH],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Paella', link: 'https://www.allrecipes.com/recipe/238588/quick-and-easy-paella/' }
    ],
    separated: true,
    ingredients: [
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'deveined with peels', section: SAFFRON_BROTH },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAFFRON_BROTH },
        { ...SAFFRON_THREADS, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAFFRON_BROTH },
        { ...CHICKEN_BROTH, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAFFRON_BROTH },

        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PAELLA },
        { ...CHORIZO, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thin round slices', section: PAELLA },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: PAELLA },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: PAELLA },
        { ...ARBORIO_RICE, amount: 4 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PAELLA },
        { ...GREEN_PEA, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PAELLA },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'thin slices', section: PAELLA },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: PAELLA },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PAELLA },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: 'or to taste', section: PAELLA },

        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced wedges', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'strainer' },
        { name: 'bowl' },
        { name: 'dutch oven pan' },
        { name: '' },
    ],
    directions: [
        { step: 'Peel the shrimp. Set aside the shell for the broth.', section: SAFFRON_BROTH },
        { step: 'Over medium heat, add shrimp shells and olive oil to a saucepan.', section: SAFFRON_BROTH },
        { step: 'Cook until the shells are pink and fragrant (about 1 to 2 minutes).', section: SAFFRON_BROTH },
        { step: 'Add saffron and stir.', section: SAFFRON_BROTH },
        { step: 'Add chicken broth. Bring to a simmer.', section: SAFFRON_BROTH },
        { step: 'Cook until the broth is rusty brown and fragrant (about 20 minutes).', section: SAFFRON_BROTH },
        { step: 'Strain the broth over a bowl. Discard the shells and saffron.', section: SAFFRON_BROTH },
        { step: 'Pour saffron broth back into a saucepan and set it on low heat.', section: SAFFRON_BROTH },

        { step: 'Preheat the oven to 425ºF.', section: PAELLA },
        { step: 'Over medium heat, heat olive oil in a dutch oven pan.', section: PAELLA },
        { step: 'Add chorizo. Cook until browned (about 2 minutes per side).', section: PAELLA },
        { step: 'Add onion. Cook and stir until onion is soft and translucent (about 3 minutes).', section: PAELLA },
        { step: 'Lower to medium-low heat.', section: PAELLA },
        { step: 'Add garlic. Cook and stir until fragrant (about 1 minute).', section: PAELLA },
        { step: 'Add rice. Stir to coat rice.', section: PAELLA },
        { step: 'Add peas. Mix.', section: PAELLA },
        { step: 'Pat rice down so it is even. The rice would not be cooked at this point.', section: PAELLA },
        { step: 'Arrange shrimp in a single layer over the rice.', section: PAELLA },
        { step: 'Place peppers in between and around the shrimp.', section: PAELLA },
        { step: 'Season with the seasonings.', section: PAELLA },
        { step: 'Turn heat to high. Let rice cook some more.', section: PAELLA },
        { step: 'Once the rice sizzles, pour the saffron broth over the shrimp and shake the pan to spread the broth.', section: PAELLA },
        { step: 'Bake until the rice is almost tender and still wet (about 20 minutes).', section: PAELLA },
        { step: 'Over medium-high heat, let the rice become tender, liquid has been absorbed, and bottom part of the rice has crusted and caramelized (about 3 to 5 minutes).', section: PAELLA },
        { step: 'Serve this dish warm', section: SECTIONS.SERVE },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};