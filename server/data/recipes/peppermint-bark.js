const bark1 = '../assets/Products/peppermint-bark-1.jpeg';
const bark2 = '../assets/Products/peppermint-bark-2.jpeg';
const bark3 = '../assets/Products/peppermint-bark-3.jpeg';
const bark4 = '../assets/Products/peppermint-bark-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, CANDY_CANES, KNIFE, MEDIUM_BOWL, MICROWAVE, PARCHMENT_PAPER, PEPPERMINT_EXTRACT, SEMI_SWEET_CHOCOLATE_CHIPS, SPATULA, WHITE_CHOCOLATE_CHIPS } = require('./ingredients');

module.exports = {
    cardName: 'Peppermint Bark',
    name: 'Peppermint Bark',
    img: bark4,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MELT, METHODS.CHILLED],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 16, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Peppermint Bark', 
            link: "https://www.dinneratthezoo.com/peppermint-bark-recipe/",
            authors: ['Sara Welch'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: false,
    ingredients: [
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_CHOCOLATE_CHIPS, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEPPERMINT_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANDY_CANES, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'crushed', section: SECTIONS.MAIN },
    ],
    appliances: [
        MICROWAVE,
    ],
    supplies: [
        { ...MEDIUM_BOWL, amount: 2, additionalDetails: 'microwavable' },
        PARCHMENT_PAPER,
        BAKING_SHEET,
        SPATULA,
        KNIFE,
    ],
    directions: [
        { step: 'Place some parchment paper on a baking sheet.', section: SECTIONS.MAIN },
        { step: 'In a microwaveable bowl, melt the semisweet chocolate chips in 30 second intervals.', section: SECTIONS.MAIN },
        { step: 'Pour the chocolate on the parchment paper and carefully spread until it\'s a thin layer of chocolate.', section: SECTIONS.MAIN },
        { step: 'Chill in the fridge to help it partially set (up to 10 minutes). Any more time past that will cause it to not stick to the melted white chocolate layer.', section: SECTIONS.MAIN, img: bark1 },
        { step: 'Repeat the melting process for the white chocolate chips.', section: SECTIONS.MAIN },
        { step: 'Mix in peppermint extract.', section: SECTIONS.MAIN },
        { step: 'Spread the melted white chocolate over the semisweet chocolate.', section: SECTIONS.MAIN, img: bark2 },
        { step: 'Sprinkle the crushed candy cane over the white chocolate.', section: SECTIONS.MAIN },
        { step: 'Chill in the fridge until the chocolate is completely set (about 20 minutes).', section: SECTIONS.MAIN, img: bark3 },
        { step: 'Take the bark and let it sit at room temperature before cutting (about 20 minutes).', section: SECTIONS.MAIN },
        { step: 'Using a sharp knife, cut through the bark and enjoy.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};