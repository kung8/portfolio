const basilBlended = '../assets/Products/basil-pesto-basil-blended.jpeg';
const basil = '../assets/Products/basil-pesto-basil-in-blender.jpeg';
const pineBlended = '../assets/Products/basil-pesto-blended-pine-nuts.jpeg';
const fresh = '../assets/Products/basil-pesto-fresh-basil.jpeg';
const bowl = '../assets/Products/basil-pesto-in-bowl.jpeg';
const plated = '../assets/Products/basil-pesto-meal-plated.jpeg';
const mixed = '../assets/Products/basil-pesto-mixed.jpeg';
const parmesan = '../assets/Products/basil-pesto-parmesan.jpeg';
const parmesanBlended = '../assets/Products/basil-pesto-parmesan-blended.jpeg';
const pine = '../assets/Products/basil-pesto-pine-nuts.jpeg';
const topped = '../assets/Products/basil-pesto-topped.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    PINE_NUTS,
    LEMON_JUICE,
    GARLIC,
    SEA_SALT,
    BLACK_PEPPER,
    BASIL_LEAVES,
    OLIVE_OIL,
    PARMESAN_CHEESE,
    SPAGHETTI_NOODLES
} = require('./ingredients');

module.exports = {
    cardName: 'Basil Pesto',
    name: 'Basil Pesto',
    img: plated,
    available: true,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PINE_NUT],
    type: [TYPES.SAUCE],
    yields: '4 servings',
    prepTime: '1 m',
    cookTime: '7 m',
    websites: [
        { label: 'Pesto', link: "https://www.loveandlemons.com/pesto-recipe" }
    ],
    separated: true,
    ingredients: [
        { ...PINE_NUTS, amount: '1/2 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: '1', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SEA_SALT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BASIL_LEAVES, amount: '2 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OLIVE_OIL, amount: '1/4 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PARMESAN_CHEESE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SPAGHETTI_NOODLES, amount: '8 oz', additionalDetails: 'cooked', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'blender' },
    ],
    directions: [
        { step: 'In a blender, combine pine nuts, lemon juice, garlic, sea salt, and black pepper until blended.', type: SECTIONS.SAUCE, img: [pine, pineBlended] },
        { step: 'Add basil and oil. Blend.', type: SECTIONS.SAUCE, img: [fresh, basil, basilBlended] },
        { step: 'Add cheese. Blend.', type: SECTIONS.SAUCE },
        { step: 'For more smoother pesto, add more oil.', type: SECTIONS.SAUCE, img: [parmesan, parmesanBlended, bowl] },
        { step: 'Top noodles and mix together.', type: SECTIONS.SERVE, img: [topped, mixed] },
    ]
};