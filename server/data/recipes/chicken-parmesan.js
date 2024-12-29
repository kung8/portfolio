const chickenParm = '../assets/Products/chicken-parmesan.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require('./constants');
const {} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Parmesan',
    name: 'Chicken Parmesan',
    img: chickenParm,
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    yields: 'servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', additionalDetails: '', section: '' },
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