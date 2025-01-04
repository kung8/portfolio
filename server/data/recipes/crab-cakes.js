// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Crab Cakes',
    name: 'Crab Cakes',
    img: '',
    recipeCredit: '',
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
        { label: 'Crab Cakes', link: 'https://www.foodandwine.com/recipes/baltimore-style-crab-cakes' }
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