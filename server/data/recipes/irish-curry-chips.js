// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BLACK_PEPPER, COLANDER, CORIANDER, CUMIN, CURRY_POWDER, GARLIC, GARLIC_POWDER, HEAVY_CREAM, LARGE_POT, MIXING_BOWL, OVEN, PAPRIKA, PARCHMENT_PAPER, RED_PEPPER_FLAKES, RUSSET_POTATO, SALT, STOVE, TURMERIC, UNSALTED_BUTTER, VEGETABLE_BROTH, VEGETABLE_OIL, YELLOW_ONION } = require('./ingredients');

const FLOUR_AND_SPICES = 'Flour and Spices';

module.exports = {
    wip: true,
    cardName: 'Irish Curry Chips',
    name: 'Irish Curry Chips',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.IRISH],
    method: [METHODS.PARBOIL, METHODS.BAKE, METHODS.SIMMER],
    type: [TYPES.DIP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Irish Curry Chips', link: 'https://munchyesta.com/irish-curry-recipe-with-chips-irish-pub-sauce/', authors: ['Simone'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...RUSSET_POTATO, amount: 4, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: SECTIONS.POTATOES },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...PAPRIKA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...TURMERIC, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...CURRY_POWDER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_AND_SPICES },
        { ...VEGETABLE_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BROTH },
        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CREAM },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        COLANDER,
        MIXING_BOWL,
        { ...BAKING_SHEET, amount: 2 },
        PARCHMENT_PAPER,
    ],
    directions: [
        { step: `Preheat the oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Wash and scrub the potatoes. Leave the peels on.`, section: SECTIONS.PREP_POTATOES },
        { step: `Cut potatoes into thick wedges (about 8 wedges per potato).`, section: SECTIONS.PREP_POTATOES },

        { step: `In a large pot, combine cold water, salt and potatoes.`, section: SECTIONS.PARBOIL },
        { step: `Bring water to a boil and cook until potatoes are slightly tender (about 4 to 5 minutes).`, section: SECTIONS.PARBOIL },
        { step: `Drain in a colander. Keep in the colander to let it continue to steam dry for a few minutes.`, section: SECTIONS.PARBOIL },

        { step: `Transfer potatoes to a mixing bowl.`, section: SECTIONS.SEASON },
        { step: `Drizzle potatoes with oil and add the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.SEASON },
        { step: `Toss until the potatoes are coated.`, section: SECTIONS.SEASON },

        { step: `Line baking sheets with parchment paper.`, section: SECTIONS.BAKE },
        { step: `Arrange wedges in a single layer with some space.`, section: SECTIONS.BAKE },
        { step: `Bake until wedges are golden brown and crispy (about 30 to 35 minutes). Flip them halfway.`, section: SECTIONS.BAKE },
        { step: `Let them cool slightly.`, section: SECTIONS.BAKE },

        { step: `Over medium heat, add butter to a saucepan.`, section: SECTIONS.COOK_CURRY },
        { step: `Add onions and garlic. Saute until softened (about 2 to 3 minutes).`, section: SECTIONS.COOK_CURRY },
        { step: `Add the "${FLOUR_AND_SPICES}" section ingredients. Stir to form a paste. Toast the spices (about 1 to 2 minutes).`, section: SECTIONS.COOK_CURRY },
        { step: `Slowly add the broth while stirring constantly to avoid clumping. Bring to a boil.`, section: SECTIONS.COOK_CURRY },
        { step: `Reduce to low heat.`, section: SECTIONS.COOK_CURRY },
        { step: `Let it simmer until your desired thickness (about 10 to 15 minutes). Stir occasionally.`, section: SECTIONS.COOK_CURRY },
        { step: `Stir in cream. Bring to a simmer (about 2 to 3 minutes).`, section: SECTIONS.COOK_CURRY },
        { step: `Taste and adjust with salt and red pepper flakes.`, section: SECTIONS.COOK_CURRY },

        { step: `Serve the fries hot topped with the curry.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store curry and fries separately.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave the curry until warmed through (2 to 3 minutes).',
        },
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Heat the curry over the stove until warmed through (5 to 10 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until fries are warmed through and crisp (about 10 to 15 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until fries are warmed through and crisp (about 8 to 10 minutes).',
        },
    ],
    mealPrep: true,
};