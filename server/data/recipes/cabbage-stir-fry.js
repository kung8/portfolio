const cabbageStirFry = '../assets/Products/cabbage-stir-fry.jpeg';
const raw = '../assets/Products/cabbage-stir-fry-raw.jpeg';
const bowl = '../assets/Products/cabbage-stir-fry-in-bowl.jpeg';
const { CATEGORIES, GENRES, TYPES, PROTEIN, SECTIONS } = require("./constants");
const {
    CABBAGE,
    RED_PEPPER_FLAKES,
    SESAME_OIL,
} = require('./ingredients');

module.exports = {
    cardName: 'Cabbage Stir Fry',
    name: 'Cabbage Stir Fry',
    img: bowl,
    available: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.VEGETABLE],
    yields: '4 servings',
    prepTime: '3 m',
    cookTime: '10 m',
    ingredients: [
        { ...CABBAGE, amount: '1/2 head of', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...RED_PEPPER_FLAKES, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...SESAME_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, in a frying pan add cabbage.', type: SECTIONS.MAIN, img: raw },
        { step: 'Top with oil and toss or mix until oil has coated cabbage.', type: SECTIONS.MAIN },
        { step: 'Add red pepper flakes as desired. Stir.', type: SECTIONS.MAIN, img: cabbageStirFry },
    ]
};