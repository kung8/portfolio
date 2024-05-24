const beef = '../assets/Products/sloppy-joes-beef.jpeg';
const cooked = '../assets/Products/sloppy-joes-cooked.jpeg';
const cooking = '../assets/Products/sloppy-joes-cooking-beef.jpeg';
const garlic = '../assets/Products/sloppy-joes-garlic.jpeg';
const veggies = '../assets/Products/sloppy-joes-raw-veggies.jpeg';
const raw = '../assets/Products/sloppy-joes-raw.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Sloppy Joes',
    name: 'Sloppy Joes',
    img: cooked,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: '4 servings',
    prepTime: '7 m',
    cookTime: '25 m',
    websites: [],
    separated: false,
    ingredients: [
        { name: 'small onion', amount: '1', additionalDetails: 'chopped', optional: false, section: SECTIONS.MAIN },
        { name: 'bell pepper', amount: '1/2', additionalDetails: 'chopped', optional: false, section: SECTIONS.MAIN },
        { name: 'worcestershire sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'yellow mustard', amount: '1 1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'brown sugar', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'tomato sauce', amount: '15 oz', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'lean ground beef', amount: '1 lb', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'olive oil', amount: '1 T', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic cloves', amount: '3', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'hamburger buns', amount: '4', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'spatula' },
        { name: 'small pan' },
    ],
    directions: [
        { step: 'Chop up the onions and bell peppers.', type: SECTIONS.MAIN, img: veggies },
        { step: 'Mince the garlic.', type: SECTIONS.MAIN, img: garlic },
        { step: 'In a bowl, combine the worcestershire sauce, mustard, brown sugar, and tomato sauce.', type: SECTIONS.MAIN, img: raw },
        { step: 'Over medium heat, heat a pan with olive oil.', type: SECTIONS.MAIN },
        { step: 'Add the ground beef to the pan and saute and break up the beef chunks (about 5 minutes).', type: SECTIONS.MAIN, img: beef },
        { step: 'Season with salt and pepper and add the onions and peppers to the pan.', type: SECTIONS.MAIN, img: cooking },
        { step: 'Add garlic to the pan.', type: SECTIONS.MAIN },
        { step: 'Add the tomato sauce mixture to the pan and bring to a boil.', type: SECTIONS.MAIN },
        { step: 'Reduce to a low heat and let simmer for about 10 to 15 minutes.', type: SECTIONS.MAIN },
        { step: 'Add water to thin if desired.', type: SECTIONS.MAIN },
        { step: 'Toast hamburger buns in another pan with some butter.', type: SECTIONS.MAIN },
        { step: 'Enjoy these sweet sloppy joes. Feel free to add some heat with chili powder.', type: SECTIONS.MAIN },
    ]
};