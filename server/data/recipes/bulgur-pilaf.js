// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Bulgur Pilaf',
    name: 'Bulgur Pilaf',
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
        { label: 'Bulgur Pilaf', link: 'https://feelgoodfoodie.net/recipe/bulgur-pilaf/' }
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