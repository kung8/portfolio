// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { CINNAMON, STAR_ANISE, FENNEL_SEEDS, BLACK_PEPPER, GROUND_CLOVES } = require('./ingredients');

const SPICES_SECTION = 'Spices';

module.exports = {
    wip: true,
    cardName: '5-Spice Blend',
    name: 'Five Spice Blend',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.CHINESE],
    method: [METHODS.BLEND],
    type: [TYPES.SPICE],
    yields: '1/4 c',
    prepTime: '10 m',
    websites: [
        { label: '5-Spice', link: 'https://www.food.com/recipe/five-spice-powder-66216' }
    ],
    separated: true,
    ingredients: [
        { ...CINNAMON, amount: '3 Tbsp', additionalDetails: '', section: SPICES_SECTION },
        { ...STAR_ANISE, amount: '6', additionalDetails: '', section: SPICES_SECTION },
        { ...FENNEL_SEEDS, amount: '1 1/2 tsp', additionalDetails: '', section: SPICES_SECTION },
        { ...BLACK_PEPPER, amount: '1 1/2 tsp', additionalDetails: '', section: SPICES_SECTION },
        { ...GROUND_CLOVES, amount: '3/4 tsp', additionalDetails: '', section: SPICES_SECTION },
    ],
    supplies: [
        { name: 'pestle and mortar' },
    ],
    directions: [
        { step: 'In a pestle and mortar, combine the spices.', type: SECTIONS.MAIN },
        { step: 'Store in an airtight container for 2 months.', type: SECTIONS.STORE },
    ],
    notes: [
        { note: 'Dry roasting the spices in a pan will accentuate the flavor.' },
    ]
};