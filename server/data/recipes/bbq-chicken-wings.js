const bbq = '../assets/Products/bbq-chicken-wings.jpeg';
const raw = '../assets/Products/bbq-chicken-wings-raw.jpeg';
const rawInPan = '../assets/Products/bbq-chicken-wings-raw-in-pan.jpeg';
const pan = '../assets/Products/bbq-chicken-wings-in-pan.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'BBQ Chicken Wings',
    name: 'BBQ Chicken Wings',
    img: bbq,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    yields: '3 servings',
    prepTime: '7 m',
    cookTime: '25 m',
    ingredients: [
        { name: 'chicken drumettes', amount: '14', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'baking soda', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'root beer', amount: '300 ml', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'butter', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'paprika', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'black pepper', amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'garlic cloves', amount: '4', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { name: 'soy sauce', amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'honey', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'ketchup', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'mustard', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large bowl' },
        { name: 'pan with lid' },
    ],
    directions: [
        { step: 'Marinate chicken in baking soda and water.', type: SECTIONS.MARINADE, img: raw },
        { step: 'Let it rest for 15 minutes', type: SECTIONS.MARINADE },
        { step: 'Put in pan in a concentric circle and combine root beer, butter, salt, paprika, black pepper, garlic and soy sauce.', type: SECTIONS.MAIN, img: rawInPan },
        { step: 'Cover with a lid and cook for 5 minutes.', type: SECTIONS.MAIN },
        { step: 'Uncover and skim off the froth.', type: SECTIONS.MAIN },
        { step: 'Re-cover the pan and continue cooking for 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Uncover and stir.', type: SECTIONS.MAIN },
        { step: 'Re-cover the pan and continue cooking for 5 minutes.', type: SECTIONS.MAIN },
        { step: 'Drain some of the residual liquid.', type: SECTIONS.MAIN },
        { step: 'Add the honey, ketchup and mustard in the pan. Stir.', type: SECTIONS.MAIN, img: pan },
        { step: 'Enjoy this light appetizer. Feel free to add some spice if you like a kick.', type: SECTIONS.SERVE },
    ]
};