const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: cilantroLimeChicken,
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.MEXICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};