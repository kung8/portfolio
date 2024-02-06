const banhMi = '../assets/Products/banh-mi-sandwich.jpeg';
const frenchBread = '../assets/Products/french-bread.jpeg';
const porkLoafCut = '../assets/Products/pork-loaf-cut.jpeg';
const porkLoafOpened = '../assets/Products/pork-loaf-opened.jpeg';
const porkLoafWrapped = '../assets/Products/pork-loaf-wrapped.jpeg';
const { MAIN } = require('./constants');

module.exports = {
    cardName: 'Banh Mi Sandwich',
    name: 'Vietnamese Banh Mi Sandwich',
    img: banhMi,
    available: false,
    type: 'Lunch / Dinner',
    yields: '10 servings',
    prepTime: 'm',
    cookTime: 'm',
    separated: true,
    ingredients: [
        { name: '', amount: '', additionalDetails: '', optional: false, section: 'Pork Loaf' },
        { name: '', amount: '', additionalDetails: '', optional: false, section: 'Pork Loaf' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};