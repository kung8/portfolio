// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Béarnaise Sauce',
    name: 'Béarnaise Sauce',
    img: '',
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
        { label: 'Béarnaise Sauce', link: 'https://www.allrecipes.com/recipe/256569/chef-johns-bearnaise-sauce/' }
    ],
    separated: true,
    ingredients: [
        { ...GENRES, amount: '', unit: '', additionalDetails: '', section: '' },
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