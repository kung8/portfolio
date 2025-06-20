const blend1 = '../assets/Products/five-spices-blend-1.jpeg';
const blend2 = '../assets/Products/five-spices-blend-2.jpeg';
const blend3 = '../assets/Products/five-spices-blend-3.jpeg';
const blend4 = '../assets/Products/five-spices-blend-4.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_CONTAINER, STORAGE_LOCATION } = require('./constants');
const { CINNAMON, STAR_ANISE, FENNEL_SEEDS, BLACK_PEPPER, GROUND_CLOVES } = require('./ingredients');

const SPICES_SECTION = 'Spices';

module.exports = {
    cardName: '5-Spice Blend',
    name: 'Five Spice Blend',
    img: blend2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.CHINESE],
    method: [METHODS.BLEND],
    type: [TYPES.SPICE],
    yields: { amount: 1 / 4, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: '5-Spice', link: 'https://www.food.com/recipe/five-spice-powder-66216' }
    ],
    separated: true,
    ingredients: [
        { ...CINNAMON, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...STAR_ANISE, amount: 6, unit: '', additionalDetails: '', section: SPICES_SECTION },
        { ...FENNEL_SEEDS, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...BLACK_PEPPER, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...GROUND_CLOVES, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
    ],
    supplies: [
        { name: 'pestle and mortar' },
    ],
    directions: [
        { step: 'In a pestle and mortar, combine the spices.', section: SECTIONS.MAIN, img: [blend1, blend3] },
    ],
    notes: [
        { note: 'Dry roasting the spices in a pan will accentuate the flavor.' },
    ],
    store: [
        {
            duration: { amount: 6, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};