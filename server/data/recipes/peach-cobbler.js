const cobbler1 = '../assets/Products/peach-cobbler-1.jpeg';
const cobbler2 = '../assets/Products/peach-cobbler-2.jpeg';
const cobbler3 = '../assets/Products/peach-cobbler-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_PAN,
    BAKING_POWDER,
    CANNED_PEACH,
    CINNAMON,
    MILK,
    MIXING_BOWL,
    OVEN,
    RUBBER_SPATULA,
    SALT,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Peach Cobbler',
    name: 'Peach Cobbler',
    img: cobbler3,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Peach Cobbler',
            link: 'https://tastesbetterfromscratch.com/peach-cobbler/',
            author: ['Lauren Allen'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANNED_PEACH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...CINNAMON, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        MIXING_BOWL,
        RUBBER_SPATULA,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Add butter into the baking pan and place pan in the oven while it preheats.', section: SECTIONS.MAIN },
        { step: 'Remove the pan from the oven once the butter has melted.', section: SECTIONS.MAIN },
        { step: 'In a mixing bowl, mix together flour, sugar, salt, and baking powder.', section: SECTIONS.MAIN },
        { step: 'Combine milk to the mixing bowl.', section: SECTIONS.MAIN },
        { step: 'Pour mixture into the baking pan and smooth to an even layer.', section: SECTIONS.MAIN },
        { step: 'Add the canned peaches and its juices to the baking pan.', section: SECTIONS.MAIN },
        { step: 'Generously drizzle cinnamon on top.', section: SECTIONS.MAIN, img: cobbler1 },
        { step: 'Bake for 35 to 40 minutes.', section: SECTIONS.MAIN },
        { step: 'Serve warm with ice cream.', section: SECTIONS.SERVE, img: cobbler2 },
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