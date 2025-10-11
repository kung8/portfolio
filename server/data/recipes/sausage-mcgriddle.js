const mcgriddle1 = '../assets/Products/mcgriddle-1.jpeg';
const mcgriddle2 = '../assets/Products/mcgriddle-2.jpeg';
const mcgriddle3 = '../assets/Products/mcgriddle-3.jpeg';
const mcgriddle4 = '../assets/Products/mcgriddle-4.jpeg';
const mcgriddle5 = '../assets/Products/mcgriddle-5.jpeg';
const mcgriddle6 = '../assets/Products/mcgriddle-6.jpeg';
const mcgriddle7 = '../assets/Products/mcgriddle-7.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { MIXING_BOWL, PANCAKE_MIX, EGG, SAUSAGE_PATTY, AMERICAN_CHEESE, SPATULA, GRIDDLE, FRYING_PAN, MASON_JAR_LID } = require('./ingredients');

const MCGRIDDLE_PANCAKE_SECTION = 'McGriddle Pancake';
const COOK_PANCAKE = 'Cook Pancake';
const HEAT_SAUSAGE = 'Heat Sausage';

module.exports = {
    cardName: 'Sausage McGriddle',
    name: 'Sausage McGriddle',
    img: mcgriddle6,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
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
        { ...GRIDDLE, additionalDetails: 'or stove' },
    ],
    supplies: [
        MIXING_BOWL,
        FRYING_PAN,
        MASON_JAR_LID,
        SPATULA,
    ],
    directions: [
        { step: 'In a mixing bowl, prepare the pancake batter according to the box\'s instruction.', section: COOK_PANCAKE },
        { step: 'Place mason jar lid rings upside down on the griddle.', section: COOK_PANCAKE },
        { step: 'Turn on the griddle to 375ºF.', section: COOK_PANCAKE },
        { step: 'Write an "M" in the center of each ring. Let it cook for 30 seconds.', section: COOK_PANCAKE, img: mcgriddle1 },
        { step: 'Fill each ring with the batter. Let it cook for 1 to 2 minutes.', section: COOK_PANCAKE, img: mcgriddle2 },
        { step: 'Flip with spatula. Cook for 1 to 2 minutes.', section: COOK_PANCAKE },
        { step: 'Pop out the pancake and set aside.', section: COOK_PANCAKE },

        { step: 'In a medium bowl, whisk the eggs.', section: SECTIONS.COOK_EGGS },
        { step: 'Place the mason jar lid rings upside down on the griddle.', section: SECTIONS.COOK_EGGS },
        { step: 'Fill each ring with the egg batter. Let it cook for 2 to 3 minutes.', section: SECTIONS.COOK_EGGS, img: mcgriddle3 },
        { step: 'Flip with spatula. Cook for 2 to 3 minutes.', section: SECTIONS.COOK_EGGS, img: mcgriddle4 },
        { step: 'Pop out the eggs and set aside.', section: SECTIONS.COOK_EGGS },

        { step: 'Place sausage patties on griddle. Cook until each side is hot and cooked.', section: HEAT_SAUSAGE, img: mcgriddle5 },
        { step: 'Add cheese slice on each patty.', section: HEAT_SAUSAGE },

        { step: 'Assemble the McGriddle sandwich: pancake, patty with cheese, egg, pancake.', section: SECTIONS.ASSEMBLE, img: mcgriddle7 },
        { step: 'Enjoy this homemade McGriddle topped with a little syrup optionally.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'I enjoyed these homemade McGriddles but I thing the amount of work cooking the batter and the eggs within the cookie cutter/mason jar lids and popping them out wasn\'t worth it. I think you can still get the same experience and taste if you cook without those.' },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'For a softer bun, wrap in a damp paper towel and microwave until heated through (about 80 to 90 seconds).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'For a crispier bun, bake at 350ºF until heated through (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};