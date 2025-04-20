const pie1 = '../assets/Products/key-lime-pie-1.jpeg';
const pie2 = '../assets/Products/key-lime-pie-2.jpeg';
const pie3 = '../assets/Products/key-lime-pie-3.jpeg';
const pie4 = '../assets/Products/key-lime-pie-4.jpeg';
const pie5 = '../assets/Products/key-lime-pie-5.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { EGG_YOLKS, SWEETENED_CONDENSED_MILK, KEY_LIME_JUICE, WHIPPED_CREAM, LIME, NINE_INCH_GRAHAM_CRACKER_PIE_CRUST } = require('./ingredients');

const PIE_FILLING_SECTION = 'Pie Filling';
const CRUST_SECTION = 'Crust';

const PREP_PIE = 'Prep Pie';

module.exports = {
    cardName: 'Key Lime Pie',
    name: 'Key Lime Pie',
    img: pie5,
    recipeAuthor: '',
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
        { ...EGG_YOLKS, amount: 5, unit: '', additionalDetails: 'beaten', section: PIE_FILLING_SECTION },
        { ...SWEETENED_CONDENSED_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PIE_FILLING_SECTION },
        { ...KEY_LIME_JUICE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PIE_FILLING_SECTION },
        { ...NINE_INCH_GRAHAM_CRACKER_PIE_CRUST, amount: 1, unit: '', additionalDetails: '', section: CRUST_SECTION },
        { ...WHIPPED_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF.', type: PREP_PIE },
        { step: 'In a mixing bowl, combine the "Pie Filling" section ingredients.', type: PREP_PIE, img: [pie1, pie2] },
        { step: 'Pour the filling into the pie crust.', type: PREP_PIE, img: pie3 },
        { step: 'Bake until the filling is set (about 15 minutes).', type: SECTIONS.BAKE, img: pie4 },
        { step: 'Let it completely cool before slicing.', type: SECTIONS.BAKE },
        { step: 'Top each slice with whipped cream and a lime slice.', type: SECTIONS.SERVE },
    ]
};