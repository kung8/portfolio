// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Drunken Noodles',
    name: 'Drunken Noodles',
    img: '',
    recipeCredit: 'Amanda Berg',
    available: false,
    recommended: false,
    category: [],
    genre: [],
    method: [],
    protein: [],
    type: [],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    websites: [
        { label: 'Drunken Noodles', link: 'https://www.foodnetwork.com/recipes/my-famous-drunken-noodles-3827989?fbclid=IwY2xjawIfTmlleHRuA2FlbQIxMAABHVqvQu2XwUkyb_68QE5482xWyQggrknFtByQl4kjDwlqFUsOQo0_ThKjQA_aem_eAwibywVvwmX2-nPbsMtdg' }
    ],
    separated: true,
    ingredients: [
        { ...GENRES, amount: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};