// const example = '../assets/Products/example.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BOWL, GLUTINOUS_RICE_FLOUR, KITCHEN_TOWEL, MEDIUM_POT, MIXING_BOWL, MORTAR_AND_PESTLE, SESAME_SEEDS, SLOTTED_SPOON, STOVE, UNSALTED_BUTTER, WATER, WHITE_SUGAR } = require('./ingredients');

const PREP_DOUGH_BALLS = 'Prep Dough Balls';
const COOK_TANG_YUAN = 'Cook Tang Yuan';

module.exports = {
    wip: true,
    cardName: 'Tang Yuan',
    name: 'Tang Yuan',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-11-07 23:27:20',
    modifiedAt: '2026-11-07 23:27:20',
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.BOIL, METHODS.KNEAD, METHODS.MIX, METHODS.WRAP],
    type: [TYPES.SOUP, TYPES.DESSERT],
    yields: { amount: 12, unit: YIELD_UNITS.BALL },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Tang Yuan',
            link: 'https://thewoksoflife.com/tang-yuan-recipe/',
            authors: ['Judy'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...SESAME_SEEDS, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'black', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'softened', section: SECTIONS.FILLING },
        { ...GLUTINOUS_RICE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'plus more for dusting', section: SECTIONS.DOUGH },
        { ...WATER, amount: 0.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.DOUGH },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MORTAR_AND_PESTLE,
        BOWL,
        MIXING_BOWL,
        KITCHEN_TOWEL,
        MEDIUM_POT,
        SLOTTED_SPOON,
    ],
    directions: [
        { step: `In a mortar and pestle, grind sesame seeds finely.`, section: SECTIONS.PREP_FILLING },
        { step: `Transfer to a bowl.`, section: SECTIONS.PREP_FILLING },
        { step: `Add sugar. Mix.`, section: SECTIONS.PREP_FILLING },
        { step: `Add butter. Mix until filling comes together.`, section: SECTIONS.PREP_FILLING },
        { step: `Chill until firm (about 30 minutes).`, section: SECTIONS.PREP_FILLING },

        { step: `In a mixing bowl, add the rice flour.`, section: PREP_DOUGH_BALLS },
        { step: `Gradually add water until a soft dough forms.`, section: PREP_DOUGH_BALLS },
        { step: `Cover with a damp towel.`, section: PREP_DOUGH_BALLS },
        { step: `Bring a small pot of water to a boil.`, section: PREP_DOUGH_BALLS },
        { step: `Add a 1-inch piece of dough to the boiling water. Cook until it floats.`, section: PREP_DOUGH_BALLS },
        { step: `Remove the cooked dough from the water and knead it into the remaining dough until smooth.`, section: PREP_DOUGH_BALLS },
        { step: `Divide the dough into 12 pieces. Roll into balls.`, section: PREP_DOUGH_BALLS },
        { step: `Cover them with a damp towel.`, section: PREP_DOUGH_BALLS },

        { step: `Roll the filling into 3/4 inch balls.`, section: SECTIONS.ASSEMBLE },
        { step: `Flatten each dough ball into a 2-inch round disc.`, section: SECTIONS.ASSEMBLE },
        { step: `Place the filling in the center. Fold the edges over to seal and pinch to close.`, section: SECTIONS.ASSEMBLE },

        { step: `Over medium-high heat, bring a pot of water to a boil.`, section: COOK_TANG_YUAN },
        { step: `Add tang yuan. Stir gently to prevent sticking.`, section: COOK_TANG_YUAN },
        { step: `Bring the water to a boil again. Add 1/2 cup of water.`, section: COOK_TANG_YUAN },
        { step: `Repeat two more times, bring to a boil each time.`, section: COOK_TANG_YUAN },
        { step: `Remove the tang yuan from the water using a slotted spoon.`, section: COOK_TANG_YUAN },

        { step: `Enjoy these sweet, chewy desserts with some of the hot water!`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Simmer the tang yuan in water until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};