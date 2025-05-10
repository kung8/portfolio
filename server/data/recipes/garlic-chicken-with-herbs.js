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

const { GENRES, METHODS, PROTEIN, SECTIONS, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_THIGH, SALT, BLACK_PEPPER, UNSALTED_BUTTER, GARLIC, CHICKEN_BROTH, FRESH_ROSEMARY, FRESH_SAGE, JASMINE_RICE, WHITE_WINE } = require('./ingredients');

module.exports = {
    cardName: 'Garlic Chicken w/ Herbs',
    name: 'Garlic Chicken with Herbs',
    img: plated,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Garlic Chicken', link: "https://www.tasteofhome.com/recipes/garlic-chicken-with-herbs/" }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC, amount: 10, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'halved', section: SECTIONS.MAIN },
        { ...WHITE_WINE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_SAGE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
    ],
    directions: [
        { step: 'Season chicken with salt and pepper.', section: SECTIONS.CHICKEN, img: seasoned },
        { step: 'Over medium-high heat, heat butter in a pan.', section: SECTIONS.CHICKEN, img: butter },
        { step: 'Add chicken and brown on both sides.', section: SECTIONS.CHICKEN, img: [chicken1, flipped] },
        { step: 'Remove chicken and set aside.', section: SECTIONS.CHICKEN, img: cooked1 },
        { step: 'Over medium-high heat, saute garlic in the same pan.', section: SECTIONS.MAIN, img: [roasting] },
        { step: 'Cook until golden brown.', section: SECTIONS.MAIN },
        { step: 'Add wine and herbs. Bring to a boil and stir.', section: SECTIONS.MAIN, img: [wine, sauteed] },
        { step: 'Cook until wine is almost evaporated.', section: SECTIONS.MAIN },
        { step: 'Add chicken broth and chicken. Bring to a boil.', section: SECTIONS.MAIN, img: cooked2 },
        { step: 'Reduce heat to low. Cover and simmer (about 10 to 12 minutes).', section: SECTIONS.MAIN, img: covered2 },
        { step: 'Cook until the internal temperature of the chicken is at least 165ºF.', section: SECTIONS.MAIN, img: zoomed },
        { step: 'Spoon juices over chicken and rice.', section: SECTIONS.SERVE },
    ]
};