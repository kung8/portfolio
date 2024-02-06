const { LUNCH, DINNER } = require("./constants");

const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';

module.exports = {
    cardName: '',
    name: '',
    img: cilantroLimeChicken,
    available: false,
    type: [LUNCH, DINNER],
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