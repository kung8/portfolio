const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BRIE_CHEESE, BROWN_SUGAR, FLAKY_SEA_SALT, HONEY, HONEY_CRISP_APPLE, OVEN, PARCHMENT_PAPER, PHYLLO_DOUGH, THYME, UNSALTED_BUTTER } = require('./ingredients');

const THYME_BUTTER = 'Thyme Butter';
const APPLES_SECTION = 'Apples';

const PREP_BUTTER = 'Prep Thyme Butter';

module.exports = {
    wip: true,
    cardName: 'Apple Brie Phyllo Galette',
    name: 'Apple Brie Phyllo Galette',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    protein: [],
    type: [TYPES.PASTRY, TYPES.FINGER_FOOD],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sally\'s Baking Addiction', link: 'https://sallysbakingaddiction.com/apple-brie-phyllo-galette/', authors: ['Sally McKenney'], finder: 'Recipe Creation' }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: THYME_BUTTER },
        { ...THYME, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: THYME_BUTTER },

        { ...PHYLLO_DOUGH, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thawed', section: SECTIONS.CRUST },
        { ...BRIE_CHEESE, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CHEESE },
        
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: APPLES_SECTION },
        { ...HONEY_CRISP_APPLE, amount: 4, unit: INGREDIENT_UNITS.SMALL, additionalDetails: '', section: APPLES_SECTION },

        { ...HONEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...FLAKY_SEA_SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        PARCHMENT_PAPER,
        BAKING_SHEET,
    ],
    directions: [
        { step: `Preheat oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Over medium heat, "${THYME_BUTTER}" in a saucepan.`, section: PREP_BUTTER },
        { step: `Melt the butter.`, section: PREP_BUTTER },
        { step: `Transfer to a bowl.`, section: PREP_BUTTER },

        { step: `Line a large baking sheet with parchment paper.`, section: SECTIONS.PREP_PAN },
        { step: `Brush the parchment paper with a little thyme butter.`, section: SECTIONS.PREP_PAN },

        { step: `Place one phyllo dough sheet on the baking sheet.`, section: SECTIONS.ASSEMBLE },
        { step: `Brush the dough with the melted butter.`, section: SECTIONS.ASSEMBLE },
        { step: `Lay another sheet on top rotated at 10º. Brush butter.`, section: SECTIONS.ASSEMBLE },
        { step: `Continue to layer the sheets rotated at 10º angles and brush butter.`, section: SECTIONS.ASSEMBLE },
        { step: `Spread the brie in the center (about 4 inches from the border).`, section: SECTIONS.ASSEMBLE },
        { step: `In a mixing bowl, combine the "${APPLES_SECTION}" section ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: `Arrange the apple slices, in an overlapping pattern.`, section: SECTIONS.ASSEMBLE },
        { step: `Fold the edges over to form a crust around the apple and brie topping.`, section: SECTIONS.ASSEMBLE },
        { step: `Brush the crust with the melted butter.`, section: SECTIONS.ASSEMBLE },

        { step: `Bake until dough is golden brown and crisp (about 40 to 45 minutes).`, section: SECTIONS.BAKE },

        { step: `Serve with drizzles of honey and sprinkle with salt.`, section: SECTIONS.SERVE },
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
            instruction: 'Bake at 325°F for 10 minutes.',
        },
    ],
    mealPrep: false,
};