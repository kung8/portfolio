const cilantro1 = '../assets/Products/mexican-cilantro-lime-chicken-cilantro-1.jpeg';
const dressing = '../assets/Products/mexican-cilantro-lime-chicken-dressing.jpeg';
const marinade3 = '../assets/Products/mexican-cilantro-lime-chicken-marinade-3.jpeg';
const broiled1 = '../assets/Products/mexican-cilantro-lime-chicken-broiled-1.jpeg';
const rack = '../assets/Products/mexican-cilantro-lime-chicken-raw-on-baking-rack.jpeg';
const set1 = '../assets/Products/mexican-cilantro-lime-chicken-plated-set-1.jpeg';
const set2 = '../assets/Products/mexican-cilantro-lime-chicken-plated-set-2.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    CHICKEN_WINGS,
    CILANTRO,
    LIME,
    GARLIC,
    AVOCADO_OIL,
    CHILI_POWDER,
    SALT,
    BLACK_PEPPER,
    CAYENNE_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Cilantro Lime Chicken',
    name: 'Mexican Cilantro Lime Chicken',
    img: set1,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.RICE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    separated: true,
    websites: [
        { label: 'Cilantro Lime Chicken Wings', link: 'https://kaleforniakravings.com/easy-cilantro-lime-chicken-wings/' }
    ],
    ingredients: [
        { ...CHICKEN_WINGS, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MEAT },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'chopped', section: SECTIONS.DRESSING },
        { ...LIME, amount: 5, unit: '', additionalDetails: 'juiced', section: SECTIONS.DRESSING },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...AVOCADO_OIL, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...CHILI_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...CAYENNE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'ziploc' },
        { name: 'wire rack' },
        { name: 'baking sheet' },
        { name: 'tongs' },
    ],
    directions: [
        { step: 'Combine all the dressing ingredients in a blender.', type: SECTIONS.DRESSING, img: [cilantro1, dressing] },
        { step: 'Pour 1/2 of the dressing into a ziploc bag and place the chicken wings and drum.', type: SECTIONS.MEAT, img: marinade3 },
        { step: 'Let the chicken marinate for 4 hours.', type: SECTIONS.MEAT },
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Place a wire rack on top of a baking pan.', type: SECTIONS.MAIN },
        { step: 'Use tongs to transfer chicken to wire rack in a single layer.', type: SECTIONS.MAIN, img: rack },
        { step: 'Bake for 30 to 35 minutes. Feel free to broil the wings for 2 to 3 minutes in addition to make it crispier.', type: SECTIONS.MAIN, img: broiled1 },
        { step: 'Dip this chicken in the dressing and serve it with a side of salad and cilantro rice.', type: SECTIONS.SERVE, img: set2 },
    ]
};