const thigh1 = '../assets/Products/pan-fried-chicken-thigh-1.jpeg';
const thigh2 = '../assets/Products/pan-fried-chicken-thigh-2.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CHICKEN_THIGH, FRYING_PAN, GARLIC, PLATE, RED_WINE, ROSEMARY, SALT, SPATULA, STOVE, UNSALTED_BUTTER, WHIPPED_CREAM } = require('./ingredients');

module.exports = {
    cardName: 'Pan-Fried Chicken Thighs',
    name: 'Pan-Fried Chicken Thighs',
    img: thigh2,
    available: true,
    recommended: false,
    createdAt: '11/09/2024 13:35:59',
    modifiedAt: '06/02/2026 21:02:57',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pan-Fried Chicken Thighs', 
            link: 'https://www.tasteofhome.com/recipes/chicken-with-red-wine-cream-sauce/?srsltid=AfmBOooc4dAJPAm_QOVoYx4eAh_PoXSByNsmunXRhp1QXGKX6uPk3VH5',
            authors: ['Sarah Campbell'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_THIGH, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...RED_WINE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...WHIPPED_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ROSEMARY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        SPATULA,
        PLATE,
    ],
    directions: [
        { step: `Over medium-high heat, heat butter in frying pan.`, section: SECTIONS.CHICKEN },
        { step: `Brown both sides of the chicken.`, section: SECTIONS.CHICKEN },
        { step: `Season with salt and pepper.`, section: SECTIONS.CHICKEN },
        { step: `Reduce to medium heat.`, section: SECTIONS.CHICKEN },
        { step: `Cover and cook until the chicken is cooked through and reaches an internal temperature of 175ºF (about 10 to 12 minutes).`, section: SECTIONS.CHICKEN },
        { step: `Set aide chicken.`, section: SECTIONS.CHICKEN, img: thigh1 },
        { step: `Keep drippings in the pan and add wine and garlic.`, section: SECTIONS.SAUCE },
        { step: `Bring to a boil and loosening the browned food particles (deglazing the fond). Cook until wine is reduced by half (about 1 to 2 minutes).`, section: SECTIONS.SAUCE },
        { step: `Stir in cream and rosemary.`, section: SECTIONS.SAUCE },
        { step: `Return to a boil.`, section: SECTIONS.SAUCE },
        { step: `Cook until slightly thickened (about 1 to 2 minutes).`, section: SECTIONS.SAUCE },
        { step: `Re-add the chicken to the pan. Ladle the sauce over the chicken.`, section: SECTIONS.SAUCE },
        { step: `Top the chicken with the creamy sauce and serve with your favorite sides.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};