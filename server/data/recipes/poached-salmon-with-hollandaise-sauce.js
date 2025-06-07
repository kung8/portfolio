// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { LEMON_JUICE, OLIVE_OIL, SALT, BLACK_PEPPER, SALMON_FISH, EGG_YOLK, WATER, UNSALTED_BUTTER, CHIVE } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Poached Salmon',
    name: 'Poached Salmon with Hollandaise Sauce',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.POACHED],
    protein: [PROTEIN.FISH],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Poached Salmon with Hollandaise Sauce', link: 'https://www.allrecipes.com/recipe/133137/poached-salmon-with-hollandaise-sauce/' }
    ],
    separated: true,
    ingredients: [
        { ...SALMON_FISH, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'skinless, boneless', section: SECTIONS.FISH },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FISH },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FISH },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.FISH },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.FISH },

        { ...EGG_YOLK, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'hot', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...CHIVE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium saucepan' },
        { name: 'saucepan' },
        { name: 'metal bowl' },
    ],
    directions: [
        { step: `In a medium saucepan, add the "${SECTIONS.FISH}" section ingredients.`, section: SECTIONS.COOK_FISH },
        { step: 'Add enough water to just cover the salmon.', section: SECTIONS.COOK_FISH },
        { step: 'Over medium-high heat, heat the salmon until the water is hot and steaming (not simmering). Lower the temperature as needed.', section: SECTIONS.COOK_FISH },
        { step: 'Poach until the salmon is opaque and is firm (internal temperature of 140ºF).', section: SECTIONS.COOK_FISH },
        { step: 'Over high heat, bring a few inches of water in another saucepan to a boil.', section: SECTIONS.COOK_SAUCE },
        { step: 'Turn down to medium-high heat and let water come to a gentle boil.', section: SECTIONS.COOK_SAUCE },
        { step: 'In a metal bowl, add egg yolks and 1 tablespoon of the boiling water.', section: SECTIONS.COOK_SAUCE },
        { step: 'Place the bowl over the saucepan (it shouldn\'t touch the water).', section: SECTIONS.COOK_SAUCE },
        { step: 'Whisk until the yolk thickens, becomes a light opaque yellow and doubles in size. (You might need to remove the bowl occasionally too prevent it from becoming scrambled eggs).', section: SECTIONS.COOK_SAUCE },
        { step: 'Add in the butter, one at a time, until it melts and incorporates with the sauce.', section: SECTIONS.COOK_SAUCE },
        { step: 'Once all incorporated, remove from heat.', section: SECTIONS.COOK_SAUCE },
        { step: 'Add in lemon juice, salt and pepper.', section: SECTIONS.COOK_SAUCE },
        { step: 'Drain the salmon. Serve with sauce and top with chives.', section: SECTIONS.SERVE },
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