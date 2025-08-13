const baked7 = '../assets/Products/cream-puffs-baked-7.jpeg';
const butter = '../assets/Products/cream-puffs-butter.jpeg';
const doled2 = '../assets/Products/cream-puffs-doled-2.jpeg';
const filled = '../assets/Products/cream-puffs-filled.jpeg';
const filling3 = '../assets/Products/cream-puffs-filling-3.jpeg';
const ball = '../assets/Products/cream-puffs-flour-ball.jpeg';
const flour = '../assets/Products/cream-puffs-flour.jpeg';
const batter = '../assets/Products/cream-puffs-pastry-batter.jpeg';
const plated2 = '../assets/Products/cream-puffs-plated-2.jpeg';
const plated11 = '../assets/Products/cream-puffs-plated-11.jpeg';
const sliced2 = '../assets/Products/cream-puffs-sliced-2.jpeg';
const vanilla = '../assets/Products/cream-puffs-vanilla-pudding-mix.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { VANILLA_INSTANT_PUDDING_MIX, HEAVY_CREAM, MILK, UNSALTED_BUTTER, SALT, ALL_PURPOSE_FLOUR, EGG, WATER } = require('./ingredients');

const PUFF = 'Puff';

module.exports = {
    cardName: 'Cream Puffs',
    name: 'Cream Puffs',
    img: plated11,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
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
        { label: 'Cream Puffs', link: 'https://www.allrecipes.com/recipe/15869/cream-puffs/' }
    ],
    separated: true,
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
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: 'large pot' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine together the filling ingredients.', section: SECTIONS.FILLING, img: [vanilla, filling3] },
        { step: 'Cover and chill until it sets.', section: SECTIONS.FILLING },
        { step: 'Preheat the over to 425ºF.', section: PUFF },
        { step: 'Over medium-high heat, bring a large pot of water and butter to a boil.', section: PUFF, img: butter },
        { step: 'Add in flour and salt. Mix until it becomes a ball.', section: PUFF, img: [flour, ball] },
        { step: 'Transfer to a mixing bowl.', section: PUFF },
        { step: 'Beat eggs in one at a time.', section: PUFF, img: batter },
        { step: 'Place spoonful of batter on a baking sheet, a few inches apart.', section: PUFF, img: doled2 },
        { step: 'Bake until golden brown (about 20 to 25 minutes). Centers will be dry.', section: PUFF },
        { step: 'Let cool.', section: PUFF, img: baked7 },
        { step: 'Either carefully split the puffs and fill with the cream filling or pipe into the shell.', section: SECTIONS.ASSEMBLE, img: [sliced2, filled] },
        { step: 'Enjoy these delicious desserts.', section: SECTIONS.SERVE, img: plated2 },
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