// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { LEMON_JUICE, OLIVE_OIL, SALT, BLACK_PEPPER, SALMON_FISH, EGG_YOLKS, WATER, UNSALTED_BUTTER, CHIVE } = require('./ingredients');

const SALMON_SECTION = 'Salmon';
const HOLLANDAISE_SECTION = 'Hollandaise Sauce';

const COOK_SALMON = 'Cook Salmon';
const COOK_HOLLANDAISE = 'Cook Hollandaise Sauce';

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
        { ...SALMON_FISH, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'skinless, boneless', section: SALMON_SECTION },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SALMON_SECTION },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SALMON_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SALMON_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SALMON_SECTION },

        { ...EGG_YOLKS, amount: 3, unit: '', additionalDetails: '', section: HOLLANDAISE_SECTION },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'hot', section: HOLLANDAISE_SECTION },
        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HOLLANDAISE_SECTION },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HOLLANDAISE_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: HOLLANDAISE_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: HOLLANDAISE_SECTION },
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
        { step: 'In a medium saucepan, add the "Salmon" section ingredients.', type: COOK_SALMON },
        { step: 'Add enough water to just cover the salmon.', type: COOK_SALMON },
        { step: 'Over medium-high heat, heat the salmon until the water is hot and steaming (not simmering). Lower the temperature as needed.', type: COOK_SALMON },
        { step: 'Poach until the salmon is opaque and is firm (internal temperature of 140ºF).', type: COOK_SALMON },
        { step: 'Over high heat, bring a few inches of water in another saucepan to a boil.', type: COOK_HOLLANDAISE },
        { step: 'Turn down to medium-high heat and let water come to a gentle boil.', type: COOK_HOLLANDAISE },
        { step: 'In a metal bowl, add egg yolks and 1 tablespoon of the boiling water.', type: COOK_HOLLANDAISE },
        { step: 'Place the bowl over the saucepan (it shouldn\'t touch the water).', type: COOK_HOLLANDAISE },
        { step: 'Whisk until the yolk thickens, becomes a light opaque yellow and doubles in size. (You might need to remove the bowl occasionally too prevent it from becoming scrambled eggs).', type: COOK_HOLLANDAISE },
        { step: 'Add in the butter, one at a time, until it melts and incorporates with the sauce.', type: COOK_HOLLANDAISE },
        { step: 'Once all incorporated, remove from heat.', type: COOK_HOLLANDAISE },
        { step: 'Add in lemon juice, salt and pepper.', type: COOK_HOLLANDAISE },
        { step: 'Drain the salmon. Serve with sauce and top with chives.', type: SECTIONS.SERVE },
    ]
};