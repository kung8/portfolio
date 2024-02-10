const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';
const { CATEGORIES } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: cilantroLimeChicken,
    available: false,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
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