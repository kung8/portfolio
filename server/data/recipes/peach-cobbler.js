const pan = '../assets/Products/peach-cobbler-pan.jpeg'
const slice = '../assets/Products/peach-cobbler-slice.jpeg'
const baked = '../assets/Products/peach-cobbler-baked.jpeg'
const butter = '../assets/Products/peach-cobbler-butter.jpeg'
const cinnamon = '../assets/Products/peach-cobbler-cinnamon.jpeg'
const dry = '../assets/Products/peach-cobbler-dry.jpeg'
const melted = '../assets/Products/peach-cobbler-melted-butter.jpeg'
const milk = '../assets/Products/peach-cobbler-milk.jpeg'
const mixed = '../assets/Products/peach-cobbler-mixed.jpeg'
const peaches = '../assets/Products/peach-cobbler-peaches.jpeg'
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    UNSALTED_BUTTER,
    ALL_PURPOSE_FLOUR,
    WHITE_SUGAR,
    BAKING_POWDER,
    SALT,
    MILK,
    CINNAMON,
    CANNED_PEACH,
} = require('./ingredients');

module.exports = {
    cardName: 'Peach Cobbler',
    name: 'Peach Cobbler',
    img: slice,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANNED_PEACH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...CINNAMON, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'mixing bowl' },
        { name: 'rubber spatula' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Add butter into the baking pan and place pan in the oven while it preheats.', section: SECTIONS.MAIN, img: butter },
        { step: 'Remove the pan from the oven once the butter has melted.', section: SECTIONS.MAIN, img: melted },
        { step: 'In a mixing bowl, mix together flour, sugar, salt, and baking powder.', section: SECTIONS.MAIN, img: dry },
        { step: 'Combine milk to the mixing bowl.', section: SECTIONS.MAIN, img: milk },
        { step: 'Pour mixture into the baking pan and smooth to an even layer.', section: SECTIONS.MAIN, img: mixed },
        { step: 'Add the canned peaches and its juices to the baking pan.', section: SECTIONS.MAIN, img: peaches },
        { step: 'Generously drizzle cinnamon on top.', section: SECTIONS.MAIN, img: cinnamon },
        { step: 'Bake for 35 to 40 minutes.', section: SECTIONS.MAIN, img: baked },
        { step: 'Serve warm with ice cream.', section: SECTIONS.SERVE, img: pan },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Let it come to room temperature. Cover with foil and bake at 350ºF until heated through (about 20 minutes).',
        },
    ],
    mealPrep: true,
};