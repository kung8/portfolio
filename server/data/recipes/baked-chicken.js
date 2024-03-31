const bakedChicken = '../assets/Products/baked-chicken.jpeg';
const rawChicken = '../assets/Products/raw-chicken.jpeg';
const pan = '../assets/Products/baked-chicken-in-pan.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'Baked Chicken',
    name: 'Baked Chicken',
    img: bakedChicken,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '5 servings',
    prepTime: '5 m',
    cookTime: '50 m',
    ingredients: [
        { name: 'chicken drumsticks', amount: '10', additionalDetails: 'skin on', optional: false, section: SECTIONS.MAIN },
        { name: 'olive oil', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'black pepper', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic powder', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'paprika', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'cayenne pepper', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'baking pan' },
        { name: 'basting brush' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Place the chicken in the baking pan in a single layer.', type: SECTIONS.MAIN },
        { step: 'Mix the dry seasoning together and then add the oil.', type: SECTIONS.MAIN },
        { step: 'Once all is mixed, use the basting brush to coat the top of the chicken.', type: SECTIONS.MAIN, img: rawChicken },
        { step: 'Bake the chicken for 40 - 50 minutes, or until the internal temperature reaches 165ºF.', type: SECTIONS.MAIN, img: pan },
        { step: 'Serve with rice and your favorite veggies.', type: SECTIONS.MAIN },
    ]
};