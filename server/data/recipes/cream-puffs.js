const puffs1 = '../assets/Products/cream-puffs-1.jpeg';
const puffs2 = '../assets/Products/cream-puffs-2.jpeg';
const puffs3 = '../assets/Products/cream-puffs-3.jpeg';
const puffs4 = '../assets/Products/cream-puffs-4.jpeg';
const puffs5 = '../assets/Products/cream-puffs-5.jpeg';
const puffs6 = '../assets/Products/cream-puffs-6.jpeg';
const puffs7 = '../assets/Products/cream-puffs-7.jpeg';
const puffs8 = '../assets/Products/cream-puffs-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, EGG, HEAVY_CREAM, LARGE_POT, MILK, MIXING_BOWL, OVEN, SALT, STOVE, UNSALTED_BUTTER, VANILLA_INSTANT_PUDDING_MIX, WATER } = require('./ingredients');

const PUFF = 'Puff';

module.exports = {
    cardName: 'Cream Puffs',
    name: 'Cream Puffs',
    img: puffs8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH, GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT, TYPES.PASTRY],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Cream Puffs', 
            link: 'https://www.allrecipes.com/recipe/15869/cream-puffs/',
            authors: [''],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...VANILLA_INSTANT_PUDDING_MIX, amount: 7, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...HEAVY_CREAM, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUFF },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: PUFF },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUFF },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUFF },
        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: PUFF },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        { ...MIXING_BOWL, amount: 2 },
        LARGE_POT,
        BAKING_SHEET,
    ],
    directions: [
        { step: `In a mixing bowl, combine together the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.FILLING, img: puffs1 },
        { step: `Cover and chill until it sets.`, section: SECTIONS.FILLING },

        { step: `Preheat the over to 425ºF.`, section: PUFF },
        { step: `Over medium-high heat, bring a large pot of water and butter to a boil.`, section: PUFF },
        { step: `Add in flour and salt. Mix until it becomes a ball.`, section: PUFF, img: puffs2 },
        { step: `Transfer to a mixing bowl.`, section: PUFF },
        { step: `Beat eggs in one at a time.`, section: PUFF, img: puffs3 },
        { step: `Place spoonful of batter on a baking sheet, a few inches apart.`, section: PUFF, img: puffs4 },
        { step: `Bake until golden brown (about 20 to 25 minutes). Centers will be dry.`, section: PUFF },
        { step: `Let cool.`, section: PUFF, img: puffs5 },

        { step: `Either carefully split the puffs and fill with the cream filling or pipe into the shell.`, section: SECTIONS.ASSEMBLE, img: [puffs6, puffs7] },
        { step: `Enjoy these delicious desserts.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: false,
};