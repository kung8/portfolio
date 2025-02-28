const butter = '../assets/Products/garlic-chicken-with-herbs-butter.jpeg';
const cooked1 = '../assets/Products/garlic-chicken-with-herbs-cooked-chicken-1.jpeg';
const cooked2 = '../assets/Products/garlic-chicken-with-herbs-cooked-chicken-2.jpeg';
const chicken1 = '../assets/Products/garlic-chicken-with-herbs-cooking-chicken-1.jpeg';
const zoomed = '../assets/Products/garlic-chicken-with-herbs-cooking-chicken-zoomed.jpeg';
const covered2 = '../assets/Products/garlic-chicken-with-herbs-covered-2.jpeg';
const flipped = '../assets/Products/garlic-chicken-with-herbs-flipped-chicken.jpeg';
const plated = '../assets/Products/garlic-chicken-with-herbs-plated.jpeg';
const roasting = '../assets/Products/garlic-chicken-with-herbs-roasting-garlic.jpeg';
const sauteed = '../assets/Products/garlic-chicken-with-herbs-sauteed-fragrant.jpeg';
const seasoned = '../assets/Products/garlic-chicken-with-herbs-seasoned-chicken.jpeg';
const wine = '../assets/Products/garlic-chicken-with-herbs-white-wine.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, CATEGORIES } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_THIGH, SALT, BLACK_PEPPER, UNSALTED_BUTTER, GARLIC, CHICKEN_BROTH, FRESH_ROSEMARY, FRESH_SAGE, JASMINE_RICE, WHITE_WINE } = require('./ingredients');

module.exports = {
    cardName: 'Garlic Chicken w/ Herbs',
    name: 'Garlic Chicken with Herbs',
    img: plated,
    available: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '20 m',
    websites: [
        { label: 'Garlic Chicken', link: "https://www.tasteofhome.com/recipes/garlic-chicken-with-herbs/" }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: '4', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC, amount: '10 cloves', additionalDetails: 'halved', section: SECTIONS.MAIN },
        { ...WHITE_WINE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: '1 1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_SAGE, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
    ],
    directions: [
        { step: 'Season chicken with salt and pepper.', type: SECTIONS.CHICKEN, img: seasoned },
        { step: 'Over medium-high heat, heat butter in a pan.', type: SECTIONS.CHICKEN, img: butter },
        { step: 'Add chicken and brown on both sides.', type: SECTIONS.CHICKEN, img: [chicken1, flipped] },
        { step: 'Remove chicken and set aside.', type: SECTIONS.CHICKEN, img: cooked1 },
        { step: 'Over medium-high heat, saute garlic in the same pan.', type: SECTIONS.MAIN, img: [roasting] },
        { step: 'Cook until golden brown.', type: SECTIONS.MAIN },
        { step: 'Add wine and herbs. Bring to a boil and stir.', type: SECTIONS.MAIN, img: [wine, sauteed] },
        { step: 'Cook until wine is almost evaporated.', type: SECTIONS.MAIN },
        { step: 'Add chicken broth and chicken. Bring to a boil.', type: SECTIONS.MAIN, img: cooked2 },
        { step: 'Reduce heat to low. Cover and simmer (about 10 to 12 minutes).', type: SECTIONS.MAIN, img: covered2 },
        { step: 'Cook until the internal temperature of the chicken is at least 165ºF.', type: SECTIONS.MAIN, img: zoomed },
        { step: 'Spoon juices over chicken and rice.', type: SECTIONS.SERVE },
    ]
};