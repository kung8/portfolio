// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, CATEGORIES } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_THIGH, SALT, BLACK_PEPPER, UNSALTED_BUTTER, GARLIC, CHICKEN_BROTH, FRESH_ROSEMARY, FRESH_SAGE, JASMINE_RICE, WHITE_WINE } = require('./ingredients');

module.exports = {
    cardName: 'Garlic Chicken w/ Herbs',
    name: 'Garlic Chicken with Herbs',
    // img: '',
    available: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.AMERICAN],
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
        { ...GARLIC, amount: '10', additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Season chicken with salt and pepper.', type: SECTIONS.CHICKEN },
        { step: 'Over medium-high heat, heat butter in a pan.', type: SECTIONS.CHICKEN },
        { step: 'Add chicken and brown on both sides.', type: SECTIONS.CHICKEN },
        { step: 'Remove chicken and set aside.', type: SECTIONS.CHICKEN },
        { step: 'Over medium-high heat, saute garlic in the same pan.', type: SECTIONS.MAIN },
        { step: 'Cook until golden brown.', type: SECTIONS.MAIN },
        { step: 'Add wine and herbs. Bring to a boil and stir.', type: SECTIONS.MAIN },
        { step: 'Cook until wine is almost evaporated.', type: SECTIONS.MAIN },
        { step: 'Add chicken broth and chicken. Bring to a boil.', type: SECTIONS.MAIN },
        { step: 'Reduce heat to low. Cover and simmer (about 10 to 12 minutes).', type: SECTIONS.MAIN },
        { step: 'Cook until the internal temperature of the chicken is at least 165ºF.', type: SECTIONS.MAIN },
        { step: 'Spoon juices over chicken and rice.', type: SECTIONS.SERVE },
    ]
};