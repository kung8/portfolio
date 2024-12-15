// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Poached Salmon',
    name: 'Poached Salmon with Hollandaise Sauce',
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
        { label: 'Poached Salmon with Hollandaise Sauce', link: 'https://www.allrecipes.com/recipe/133137/poached-salmon-with-hollandaise-sauce/' }
    ],
    separated: false,
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