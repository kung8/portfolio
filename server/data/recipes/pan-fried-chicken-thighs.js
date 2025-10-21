const thigh1 = '../assets/Products/pan-fried-chicken-thigh-1.jpeg';
const thigh2 = '../assets/Products/pan-fried-chicken-thigh-2.jpeg';
// const thigh3 = '../assets/Products/pan-fried-chicken-thigh-3.jpeg';
const thigh4 = '../assets/Products/pan-fried-chicken-thigh-4.jpeg';
const thigh5 = '../assets/Products/pan-fried-chicken-thigh-5.jpeg';
const thigh6 = '../assets/Products/pan-fried-chicken-thigh-6.jpeg';
const thigh7 = '../assets/Products/pan-fried-chicken-thigh-7.jpeg';
const thigh8 = '../assets/Products/pan-fried-chicken-thigh-8.jpeg';
// const thigh9 = '../assets/Products/pan-fried-chicken-thigh-9.jpeg';
const thigh10 = '../assets/Products/pan-fried-chicken-thigh-10.jpeg';
const thigh11 = '../assets/Products/pan-fried-chicken-thigh-11.jpeg';
const thigh12 = '../assets/Products/pan-fried-chicken-thigh-12.jpeg';
const thigh13 = '../assets/Products/pan-fried-chicken-thigh-13.jpeg';
const thigh14 = '../assets/Products/pan-fried-chicken-thigh-14.jpeg';
const thigh15 = '../assets/Products/pan-fried-chicken-thigh-15.jpeg';
// const thigh16 = '../assets/Products/pan-fried-chicken-thigh-16.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CHICKEN_THIGH, GARLIC, RED_WINE, ROSEMARY, SALT, UNSALTED_BUTTER, WHIPPED_CREAM } = require('./ingredients');

module.exports = {
    cardName: 'Pan-Fried Chicken Thighs',
    name: 'Pan-Fried Chicken Thighs',
    img: thigh15,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pan-Fried Chicken Thighs', 
            link: 'https://www.tasteofhome.com/recipes/chicken-with-red-wine-cream-sauce/?srsltid=AfmBOooc4dAJPAm_QOVoYx4eAh_PoXSByNsmunXRhp1QXGKX6uPk3VH5',
            author: ['Sarah Campbell'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'spatula' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat butter in frying pan.', section: SECTIONS.CHICKEN, img: thigh1 },
        { step: 'Brown both sides of the chicken.', section: SECTIONS.CHICKEN, img: thigh2 },
        { step: 'Season with salt and pepper.', section: SECTIONS.CHICKEN },
        { step: 'Reduce to medium heat.', section: SECTIONS.CHICKEN },
        { step: 'Cover and cook until the chicken is cooked through and reaches an internal temperature of 175ºF (about 10 to 12 minutes).', section: SECTIONS.CHICKEN, img: [thigh4, thigh5] },
        { step: 'Set aide chicken.', section: SECTIONS.CHICKEN, img: thigh6 },
        { step: 'Keep drippings in pan and add wine and garlic.', section: SECTIONS.SAUCE, img: thigh7 },
        { step: 'Bring to a boil and loosening the browned food particles (deglazing the fond). Cook until wine is reduced by half (about 1 to 2 minutes).', section: SECTIONS.SAUCE, img: thigh8 },
        { step: 'Stir in cream and rosemary.', section: SECTIONS.SAUCE, img: thigh10 },
        { step: 'Return to a boil.', section: SECTIONS.SAUCE, img: thigh11 },
        { step: 'Cook until slightly thickened (about 1 to 2 minutes).', section: SECTIONS.SAUCE, img: thigh12 },
        { step: 'Re-add the chicken to the pan. Ladle the sauce over the chicken.', section: SECTIONS.SAUCE, img: thigh13 },
        { step: 'Top the chicken with the creamy sauce and serve with your favorite sides.', section: SECTIONS.SERVE, img: thigh14 },
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