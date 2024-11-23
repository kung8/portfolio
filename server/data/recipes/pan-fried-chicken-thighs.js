// const example = '../assets/Products/pan-fried-chicken.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { UNSALTED_BUTTER, CHICKEN_THIGH, SALT, BLACK_PEPPER, RED_WINE, GARLIC, WHIPPED_CREAM, ROSEMARY } = require('./ingredients');

module.exports = {
    cardName: 'Pan-Fried Chicken Thighs',
    name: 'Pan-Fried Chicken Thighs',
    img: '',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '25 m',
    websites: [
        { label: 'Pan-Fried Chicken Thighs', link: 'https://www.tasteofhome.com/recipes/chicken-with-red-wine-cream-sauce/?srsltid=AfmBOooc4dAJPAm_QOVoYx4eAh_PoXSByNsmunXRhp1QXGKX6uPk3VH5' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_THIGH, amount: '4', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...RED_WINE, amount: '1/3 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: '1 clove', additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...WHIPPED_CREAM, amount: '1/2 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ROSEMARY, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'spatula' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat butter in frying pan.', type: SECTIONS.CHICKEN },
        { step: 'Brown both sides of the chicken.', type: SECTIONS.CHICKEN },
        { step: 'Season with salt and pepper.', type: SECTIONS.CHICKEN },
        { step: 'Reduce to medium heat.', type: SECTIONS.CHICKEN },
        { step: 'Cover and cook until the chicken is cooked through and reaches an internal temperature of 175ºF (about 10 to 12 minutes).', type: SECTIONS.CHICKEN },
        { step: 'Set aide chicken.', type: SECTIONS.CHICKEN },
        { step: 'Keep drippings in pan and add wine and garlic.', type: SECTIONS.SAUCE },
        { step: 'Bring to a boil and loosening the browned food particles (deglazing the fond). Cook until wine is reduced by half (about 1 to 2 minutes).', type: SECTIONS.SAUCE },
        { step: 'Stir in cream and rosemary.', type: SECTIONS.SAUCE },
        { step: 'Return to a boil.', type: SECTIONS.SAUCE },
        { step: 'Cook until slightly thickened (about 1 to 2 minutes).', type: SECTIONS.SAUCE },
        { step: 'Top the chicken with the sauce and serve with your favorite sides.', type: SECTIONS.SERVE },
    ]
};