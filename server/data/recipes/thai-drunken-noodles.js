const raw = '../assets/Products/thai-drunken-noodles-raw.jpeg';
const chicken = '../assets/Products/thai-drunken-noodles-chicken.jpeg';
const combined = '../assets/Products/thai-drunken-noodles-combined.jpeg';
const sauce = '../assets/Products/thai-drunken-noodles-sauce.jpeg';
const alliums = '../assets/Products/thai-drunken-noodles-alliums.jpeg';
const veggies = '../assets/Products/thai-drunken-noodles-veggies.jpeg';
const plated = '../assets/Products/thai-drunken-noodles-plated.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Drunken Noodles',
    name: 'Thai Drunken Noodles',
    img: plated,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.THAI],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE],
    yields: '6 servings',
    prepTime: 'm',
    cookTime: 'm',
    websites: [
        'https://www.halfbakedharvest.com/better-than-takeout-thai-drunken-noodles'
    ],
    separated: true,
    ingredients: [
        { name: 'wide rice noodles', amount: '8 oz', additionalDetails: '', optional: false, section: '' },
        { name: 'soy sauce', amount: '1/3 c', additionalDetails: '', optional: false, section: '' },
        { name: 'oyster sauce', amount: '3 Tbsp', additionalDetails: '', optional: false, section: '' },
        { name: 'fish sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: '' },
        { name: 'maple syrup', amount: '2 tsp', additionalDetails: '', optional: false, section: '' },
        { name: 'water', amount: '1/3 c', additionalDetails: '', optional: false, section: '' },
        { name: 'sesame oil', amount: '2 Tbsp', additionalDetails: '', optional: false, section: '' },
        { name: 'chicken breast', amount: '1/2 lb', additionalDetails: 'strips', optional: false, section: '' },
        { name: 'shallots', amount: '2', additionalDetails: 'thinly sliced', optional: false, section: '' },
        { name: 'garlic cloves', amount: '3', additionalDetails: '', optional: false, section: '' },
        { name: 'jalapeno peppers', amount: '2', additionalDetails: 'seeded and chopped', optional: false, section: '' },
        { name: 'green onions', amount: '4', additionalDetails: 'chopped', optional: false, section: '' },
        { name: 'zucchini', amount: '1 medium', additionalDetails: 'sliced', optional: false, section: '' },
        { name: 'red bell peppers', amount: '1', additionalDetails: 'sliced', optional: false, section: '' },
        { name: 'carrots', amount: '2', additionalDetails: 'ribboned', optional: false, section: '' },
        { name: 'Thai basil', amount: '1 c', additionalDetails: 'chopped', optional: false, section: '' },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'bowl' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'Cook the rice noodles. Follow the instructions on the package. Drain.', type: SECTIONS.MAIN },
        { step: 'In a bowl, combine the soy sauce, oyster sauce, fish sauce, maple syrup, and water.', type: SECTIONS.MAIN },
        { step: 'Prep the veggies and chicken.', type: SECTIONS.MAIN, img: raw },
        { step: 'Over medium heat, heat oil in a wok.', type: SECTIONS.MAIN },
        { step: 'Add chicken and season with peppers. Cook until browned.', type: SECTIONS.MAIN, img: chicken },
        { step: 'Add shallots, garlic, jalapeno peppers, and green onion. Cook until fragrant and softened (about 2 to 3 minutes).', type: SECTIONS.MAIN, img: alliums },
        { step: 'Add zucchini and bell peppers. Cook until softened (about 5 minutes).', type: SECTIONS.MAIN, img: veggies },
        { step: 'Add sauce from step 2. Cook until sauce coats the chicken.', type: SECTIONS.MAIN, img: sauce },
        { step: 'Add noodles, carrots, and basil. Cooking and combining until noodles are coated (about 3 to 5 minutes).', type: SECTIONS.MAIN, img: combined },
        { step: 'Enjoy this delicious Thai noodle dish warm, topped with more basil.', type: SECTIONS.MAIN },
    ]
};