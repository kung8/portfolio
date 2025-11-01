const cookie1 = '../assets/Products/snickerdoodle-cookies-1.jpeg';
const cookie2 = '../assets/Products/snickerdoodle-cookies-2.jpeg';
const cookie3 = '../assets/Products/snickerdoodle-cookies-3.jpeg';
const cookie4 = '../assets/Products/snickerdoodle-cookies-4.jpeg';
const cookie5 = '../assets/Products/snickerdoodle-cookies-5.jpeg';
const cookie6 = '../assets/Products/snickerdoodle-cookies-6.jpeg';
const cookie7 = '../assets/Products/snickerdoodle-cookies-7.jpeg';
const cookie8 = '../assets/Products/snickerdoodle-cookies-8.jpeg';
const cookie9 = '../assets/Products/snickerdoodle-cookies-9.jpeg';
const cookie10 = '../assets/Products/snickerdoodle-cookies-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_SHEET,
    BAKING_SODA,
    CINNAMON,
    CREAM_OF_TARTAR,
    EGG,
    MIXING_BOWL,
    OVEN,
    PLATE,
    SALT,
    SILICON_BAKING_MAT,
    SMALL_BOWL,
    SPATULA,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

const COATING = 'Coating';

module.exports = {
    cardName: 'Snickerdoodles',
    name: 'Snickerdoodle Cookies',
    img: cookie10,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Snickerdoodles', 
            link: 'https://lilluna.com/snickerdoodles/',
            authors: ['Kristyn Merkley'],
            finder: 'Kevin Ung', 
        },
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 11 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...CREAM_OF_TARTAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COATING },
        { ...CINNAMON, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COATING },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        SMALL_BOWL,
        MIXING_BOWL,
        SPATULA,
        PLATE,
        BAKING_SHEET,
        SILICON_BAKING_MAT,
    ],
    directions: [
        { step: 'In a small bowl, combine the sugar and cinnamon together.', section: COATING, img: cookie1 },
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Place the silicon baking mat on the baking sheet.', section: SECTIONS.MAIN },
        { step: 'In a mixing bowl, mix the softened butter until it is a consistent cream-like texture.', section: SECTIONS.MAIN, img: cookie2 },
        { step: 'Cream together the sugar with the butter.', section: SECTIONS.MAIN, img: cookie3 },
        { step: 'Combine vanilla and eggs to the creamed butter mixture.', section: SECTIONS.MAIN },
        { step: 'Add the dry ingredients one at a time to the wet batter and mix well. I recommend adding the flour last.', section: SECTIONS.MAIN, img: cookie4 },
        { step: 'Create 1 inch dough balls and place them on a plate to be rolled in the cinnamon-sugar mixture in the next step. I recommend this to keep your hands clean of the cinnamon-sugar.', section: SECTIONS.MAIN, img: cookie5 },
        { step: 'Roll each ball in the cinnamon-sugar mixture.', section: SECTIONS.MAIN, img: cookie6 },
        { step: 'Place the coated dough balls on a baking sheet about 2-inches apart.', section: SECTIONS.MAIN, img: cookie7 },
        { step: 'Bake for 8 to 10 minutes.', section: SECTIONS.MAIN, img: cookie8 },
        { step: 'Enjoy these quick, light treats in any mood and any time of the day.', section: SECTIONS.MAIN, img: cookie9 },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};