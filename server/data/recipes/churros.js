const churros1 = '../assets/Products/churros-1.jpeg';
const churros2 = '../assets/Products/churros-2.jpeg';
const churros3 = '../assets/Products/churros-3.jpeg';
const churros4 = '../assets/Products/churros-4.jpeg';
const churros5 = '../assets/Products/churros-5.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { UNSALTED_BUTTER, WHITE_SUGAR, SALT, ALL_PURPOSE_FLOUR, EGG, VANILLA_EXTRACT, VEGETABLE_OIL, CINNAMON, WATER } = require('./ingredients');

const CHURROS_SECTION = 'Churros';
const COATING = 'Coating';
const MAKE_DOUGH = 'Make Dough';
const MAKE_CHURROS = 'Make Churros';
const MAKE_COATING = 'Make Coating';

module.exports = {
    cardName: 'Churros',
    name: 'Churros',
    img: churros5,
    recipeAuthors: ['Jaclyn'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.SPANISH],
    method: [METHODS.DEEP_FRY],
    type: [TYPES.DESSERT],
    yields: { amount: 18, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Churros', link: 'https://www.cookingclassy.com/churros/' }
    ],
    separated: true,
    ingredients: [
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: CHURROS_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced cubes', section: CHURROS_SECTION },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHURROS_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHURROS_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHURROS_SECTION },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: CHURROS_SECTION },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHURROS_SECTION },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: CHURROS_SECTION },

        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COATING },
        { ...CINNAMON, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COATING },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'shallow dish' },
        { name: 'saucepan' },
        { name: 'mixing bowl' },
        { name: 'pot' },
        { name: 'piping bag with tip' },
        { name: 'cooking scissors' },
        { name: 'tongs' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'wire cooling rack' },
    ],
    directions: [
        { step: 'In a shallow dish, combine the "Coating" ingredients.', section: MAKE_COATING },
        { step: 'Over medium-high heat, add butter, water, sugar and salt to a saucepan. Mix and bring to a boil.', section: MAKE_DOUGH, img: churros1 },
        { step: 'Reduce heat to medium-low heat. Add flour and mix until there are no lumps.', section: MAKE_DOUGH },
        { step: 'Transfer to a mixing bowl and let it cool for 5 minutes.', section: MAKE_DOUGH },
        { step: 'Once it has cooled, add vanilla and eggs. Mix until smooth. It will look like it won\'t mix but it will.', section: MAKE_DOUGH, img: churros2 },
        { step: 'Over medium-high heat, add 1 1/2 inches of vegetable oil to a pot. The oil needs to be 360ºF to ensure the right fry, so adjust the heat as needed. Adding more churros in the oil will also help lower the oil temperature. But avoid overcrowding as much as possible.', section: MAKE_CHURROS },
        { step: 'Lay some paper towels on a baking sheet and place a wire rack on top.', section: MAKE_CHURROS },
        { step: 'Ready a 16 inch piping bag with a 1/2" rounded star tip and fill the bag with the batter.', section: MAKE_CHURROS },
        { step: 'Once the oil is at 360ºF, carefully pipe out 6 inches of churros into the oil and cut with cooking scissors.', section: MAKE_CHURROS, img: churros3 },
        { step: 'Let it fry until golden brown (about 2 minutes on each side).', section: MAKE_CHURROS },
        { step: 'Using tongs, transfer the cooked churros to the drying station and let it drip for 10 seconds.', section: MAKE_CHURROS },
        { step: 'Dip them into the cinnamon sugar mixture and roll until it is well coated.', section: MAKE_CHURROS, img: churros4 },
        { step: 'Enjoy these immediately and serve with any additional toppings or sauces.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The churros batter was pretty thick and I had to add a mixture of water and eggs to help thin out the batter so that it could come out of the piping bag more easily.' },
        { note: 'The piping tip was pretty small which made the churros come out thin like curly fries. I would recommend using a larger tip to get the traditional churros shape.' },
        { note: 'If you want to invest in a deep fryer, I love the deep fryer that I have. It has a oil filtration system and was very easy to use.' },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: false,
};