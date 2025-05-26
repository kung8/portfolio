// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { PANCAKE_MIX, EGG, SAUSAGE_PATTY, AMERICAN_CHEESE } = require('./ingredients');

const MCGRIDDLE_PANCAKE_SECTION = 'McGriddle Pancake';
const COOK_PANCAKE = 'Cook Pancake';
const HEAT_SAUSAGE = 'Heat Sausage';

module.exports = {
    wip: true,
    cardName: 'Sausage McGriddle',
    name: 'Sausage McGriddle',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 18, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...PANCAKE_MIX, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or enough to make about 16 3-inch pancakes', section: MCGRIDDLE_PANCAKE_SECTION },
        { ...EGG, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...SAUSAGE_PATTY, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...AMERICAN_CHEESE, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.FILLING },
    ],
    appliances: [
        { name: 'griddle or stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'pan if using a stove' },
        { name: 'metal mason jar lid rings' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a mixing bowl, prepare the pancake batter according to the box\'s instruction.', section: COOK_PANCAKE },
        { step: 'Place mason jar lid rings upside down on the griddle.', section: COOK_PANCAKE },
        { step: 'Turn on the griddle to 375ºF.', section: COOK_PANCAKE },
        { step: 'Write an "M" in the center of each ring. Let it cook for 30 seconds.', section: COOK_PANCAKE },
        { step: 'Fill each ring with the batter. Let it cook for 1 to 2 minutes.', section: COOK_PANCAKE },
        { step: 'Flip with spatula. Cook for 1 to 2 minutes.', section: COOK_PANCAKE },
        { step: 'Pop out the pancake and set aside.', section: COOK_PANCAKE },

        { step: 'In a medium bowl, whisk the eggs.', section: SECTIONS.COOK_EGGS },
        { step: 'Place the mason jar lid rings upside down on the griddle.', section: SECTIONS.COOK_EGGS },
        { step: 'Fill each ring with the egg batter. Let it cook for 2 to 3 minutes.', section: SECTIONS.COOK_EGGS },
        { step: 'Flip with spatula. Cook for 2 to 3 minutes.', section: SECTIONS.COOK_EGGS },
        { step: 'Pop out the eggs and set aside.', section: SECTIONS.COOK_EGGS },

        { step: 'Place sausage patties on griddle. Cook until each side is hot and cooked.', section: HEAT_SAUSAGE },
        { step: 'Add cheese slice on each patty.', section: HEAT_SAUSAGE },

        { step: 'Assemble the McGriddle sandwich: pancake, patty with cheese, egg, pancake.', section: SECTIONS.ASSEMBLE },
        { step: 'Enjoy this homemade McGriddle topped with a little syrup optionally.', section: SECTIONS.SERVE },
    ]
};