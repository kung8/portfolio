const butter = '../assets/Products/snickerdoodle-butter.jpeg';
const creamed = '../assets/Products/snickerdoodle-creamed-sugar.jpeg';
const flour = '../assets/Products/snickerdoodle-flour.jpeg';
const mixture = '../assets/Products/snickerdoodle-cinnamon-sugar-mixture.jpeg';
const ball = '../assets/Products/snickerdoodle-dough-balls.jpeg';
const doughWithMixture = '../assets/Products/snickerdoodle-dough-balls-with-mixture.jpeg';
const oven = '../assets/Products/snickerdoodle-baking-in-oven.jpeg';
const pan = '../assets/Products/snickerdoodle-dough-in-pan.jpeg';
const cooked = '../assets/Products/snickerdoodle-cooked.jpeg';
const plated1 = '../assets/Products/snickerdoodle-plated-1.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_CONTAINER, STORAGE_LOCATION, STORAGE_DURATION_UNIT } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    CREAM_OF_TARTAR,
    BAKING_SODA,
    SALT,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    EGG,
    VANILLA_EXTRACT,
    CINNAMON,
} = require('./ingredients');

const COATING = 'Coating';

module.exports = {
    cardName: 'Snickerdoodles',
    name: 'Snickerdoodle Cookies',
    img: plated1,
    recipeAuthors: ['Kristyn Merkley'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Snickerdoodles', link: 'https://lilluna.com/snickerdoodles/' },
    ],
    separated: true,
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
        { name: 'oven' },
    ],
    supplies: [
        { name: 'small bowl' },
        { name: 'mixing bowl' },
        { name: 'spatula' },
        { name: 'plate' },
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'In a small bowl, combine the sugar and cinnamon together.', section: COATING, img: mixture },
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Place the silicon baking mat on the baking sheet.', section: SECTIONS.MAIN },
        { step: 'In a mixing bowl, mix the softened butter until it is a consistent cream-like texture.', section: SECTIONS.MAIN, img: butter },
        { step: 'Cream together the sugar with the butter.', section: SECTIONS.MAIN, img: creamed },
        { step: 'Combine vanilla and eggs to the creamed butter mixture.', section: SECTIONS.MAIN },
        { step: 'Add the dry ingredients one at a time to the wet batter and mix well. I recommend adding the flour last.', section: SECTIONS.MAIN, img: flour },
        { step: 'Create 1-inch dough balls and place them on a plate to be rolled in the cinnamon-sugar mixture in the next step. I recommend this to keep your hands clean of the cinnamon-sugar.', section: SECTIONS.MAIN, img: ball },
        { step: 'Roll each ball in the cinnamon-sugar mixture.', section: SECTIONS.MAIN, img: doughWithMixture },
        { step: 'Place the coated dough balls on a baking sheet about 2-inches apart.', section: SECTIONS.MAIN, img: pan },
        { step: 'Bake for 8 to 10 minutes.', section: SECTIONS.MAIN, img: oven },
        { step: 'Enjoy these quick, light treats in any mood and any time of the day.', section: SECTIONS.MAIN, img: cooked },
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