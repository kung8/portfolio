const pie1 = '../assets/Products/key-lime-pie-1.jpeg';
const pie2 = '../assets/Products/key-lime-pie-2.jpeg';
const pie3 = '../assets/Products/key-lime-pie-3.jpeg';
const pie4 = '../assets/Products/key-lime-pie-4.jpeg';
const pie5 = '../assets/Products/key-lime-pie-5.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { MIXING_BOWL, EGG_YOLK, SWEETENED_CONDENSED_MILK, KEY_LIME_JUICE, WHIPPED_CREAM, LIME, GRAHAM_CRACKER_PIE_CRUST, OVEN } = require('./ingredients');

const PREP_PIE = 'Prep Pie';

module.exports = {
    cardName: 'Key Lime Pie',
    name: 'Key Lime Pie',
    img: pie5,
    recipeAuthors: ['Dinner2'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.DESSERT, TYPES.PIE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Key Lime Pie', link: 'https://www.allrecipes.com/recipe/12698/easy-key-lime-pie-i/' }
    ],
    separated: true,
    ingredients: [
        { ...EGG_YOLK, amount: 5, unit: '', additionalDetails: 'beaten', section: SECTIONS.FILLING },
        { ...SWEETENED_CONDENSED_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...KEY_LIME_JUICE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GRAHAM_CRACKER_PIE_CRUST, amount: 1, unit: '', additionalDetails: '9 inch', section: SECTIONS.CRUST },
        { ...WHIPPED_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF.', section: PREP_PIE },
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: PREP_PIE, img: [pie1, pie2] },
        { step: 'Pour the filling into the pie crust.', section: PREP_PIE, img: pie3 },
        { step: 'Bake until the filling is set (about 15 minutes).', section: SECTIONS.BAKE, img: pie4 },
        { step: 'Let it completely cool before slicing.', section: SECTIONS.BAKE },
        { step: 'Top each slice with whipped cream and a lime slice.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};