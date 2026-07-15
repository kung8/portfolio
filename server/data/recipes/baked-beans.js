const beans1 = '../assets/Products/baked-beans-1.jpeg';
const beans2 = '../assets/Products/baked-beans-2.jpeg';
const beans3 = '../assets/Products/baked-beans-3.jpeg';
const beans4 = '../assets/Products/baked-beans-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { APPLE_CIDER_VINEGAR, BACON, BAKING_SODA, BROWN_SUGAR, DRY_NAVY_BEAN, DUTCH_OVEN_POT, KETCHUP, LARGE_POT, MAPLE_SYRUP, OVEN, SALT, SPATULA, STOVE, YELLOW_ONION } = require('./ingredients');

const SOAKED_BEANS = 'Soaked Beans';
const BAKED_BEANS = 'Baked Beans';

const SOAK_BEANS = 'Soak Beans';
const COOK_BEANS = 'Cook Beans';
const PREP_DUTCH_OVEN_POT = 'Prep Dutch Oven Pot';

module.exports = {
    wip: true,
    cardName: 'Baked Beans',
    name: 'Baked Beans',
    img: beans4,
    available: true,
    recommended: false,
    createdAt: '10/22/2024 22:26:43',
    modifiedAt: '05/02/2026 13:40:32',
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK, PROTEIN.BEAN],
    type: [TYPES.PROTEIN],
    yields: { amount: 14, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 3, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Baked Beans',
            link: 'https://dancearoundthekitchen.com/baked-beans-from-scratch/',
            authors: ['Kelsey'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...DRY_NAVY_BEAN, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SOAKED_BEANS },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SOAKED_BEANS },
        { ...BAKING_SODA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SOAKED_BEANS },
        { ...BACON, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'diced', section: BAKED_BEANS },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: BAKED_BEANS },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAKED_BEANS },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAKED_BEANS },
        { ...MAPLE_SYRUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BAKED_BEANS },
        { ...APPLE_CIDER_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BAKED_BEANS },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        LARGE_POT,
        DUTCH_OVEN_POT,
        SPATULA,
    ],
    directions: [
        { step: `In a large pot, add the dry beans.`, section: SOAK_BEANS, img: beans1 },
        { step: `Fill the pot with cold water until it is a few inches above the beans.`, section: SOAK_BEANS },
        { step: `Cover with a lid and soak the beans for 12 hours or overnight.`, section: SOAK_BEANS },

        { step: `Drain beans in a colander.`, section: COOK_BEANS },
        { step: `Again fill the pot with water until there's 2 inches above the beans.`, section: COOK_BEANS },
        { step: `Add salt and baking soda and mix.`, section: COOK_BEANS },
        { step: `Over medium-high heat, bring the pot of beans to a boil.`, section: COOK_BEANS },
        { step: `Reduce to a low heat and simmer for one hour. Stirring occasionally.`, section: COOK_BEANS },
        { step: `Drain the beans. Reserve about 3 cups of the bean water for later. Set aside the beans.`, section: COOK_BEANS },

        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        
        { step: `Over medium-high heat, add the diced bacon in a dutch oven pot. Cook for a few minutes.`, section: PREP_DUTCH_OVEN_POT },
        { step: `Add onions. Cook until the bacon is crisp and onions are translucent.`, section: PREP_DUTCH_OVEN_POT },
        { step: `Add the brown sugar, ketchup, syrup, apple cider vinegar and 1 1/2 cups of the bean liquid.`, section: PREP_DUTCH_OVEN_POT },
        { step: `Add the beans to the dutch oven and cover with a lid.`, section: PREP_DUTCH_OVEN_POT, img: beans2 },

        { step: `Bake for 1 hour.`, section: SECTIONS.BAKE },
        { step: `Stir. If it looks dry, add more of the reserved bean water.`, section: SECTIONS.BAKE },
        { step: `Bake for another 30 minutes.`, section: SECTIONS.BAKE },
        { step: `Remove the lid. Bake for another 30 minutes. The beans will thicken now.`, section: SECTIONS.BAKE, img: beans3 },

        { step: `Stir and serve warm.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 6, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until hot and bubbly (about 30 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 30 seconds intervals, stirring in between, until hot.',
        },
    ],
    mealPrep: true,
};