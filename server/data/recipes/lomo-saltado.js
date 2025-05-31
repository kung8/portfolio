const saltado1 = '../assets/Products/lomo-saltado-1.jpeg';
const saltado2 = '../assets/Products/lomo-saltado-2.jpeg';
const saltado3 = '../assets/Products/lomo-saltado-3.jpeg';
const saltado4 = '../assets/Products/lomo-saltado-4.jpeg';
const saltado5 = '../assets/Products/lomo-saltado-5.jpeg';
const saltado6 = '../assets/Products/lomo-saltado-6.jpeg';
const saltado7 = '../assets/Products/lomo-saltado-7.jpeg';
const saltado8 = '../assets/Products/lomo-saltado-8.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { BEEF_SIRLOIN, LIGHT_SOY_SAUCE, GARLIC, OYSTER_SAUCE, RED_WINE_VINEGAR, AJI_AMARILLO_PASTE, CORNSTARCH, RED_ONION, ROMA_TOMATO, GREEN_ONION, VEGETABLE_OIL, CILANTRO, WHITE_RICE, FRENCH_FRIES } = require('./ingredients');

module.exports = {
    cardName: 'Lomo Saltado',
    name: 'Lomo Saltado',
    img: saltado8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.PERUVIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.STIR_FRY],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Lomo Saltado', link: 'https://littlespicejar.com/lomo-saltado/' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_SIRLOIN, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thinly sliced', section: SECTIONS.BEEF },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.BEEF },

        { ...LIGHT_SOY_SAUCE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RED_WINE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...AJI_AMARILLO_PASTE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.STIR_FRY },
        { ...RED_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'thinly sliced', section: SECTIONS.STIR_FRY },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.STIR_FRY },
        { ...ROMA_TOMATO, amount: 3, unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.STIR_FRY },

        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...WHITE_RICE, amount: '', unit: '', additionalDetails: 'cooked', section: SECTIONS.TOPPINGS },
        { ...FRENCH_FRIES, amount: '', unit: '', additionalDetails: 'cooked', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'small bowl' },
        { name: 'wok' },
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.BEEF}" section ingredients.`, section: SECTIONS.MARINATE_BEEF, img: saltado1 },
        { step: 'Let it marinate for 5 to 7 minutes.', section: SECTIONS.MARINATE_BEEF },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients. Stir and set aside.`, section: SECTIONS.PREP_SAUCE },

        { step: 'Over medium-high heat, add 1 tablespoon of oil to a wok.', section: SECTIONS.STIR_FRY },
        { step: 'Add the beef. Sear both sides of the beef (about 1 to 2 minutes). Cook in batches if needed and add more between batches as needed. If you want more browned beef, you may not want to pour in the marinade with it.', section: SECTIONS.STIR_FRY, img: saltado2 },
        { step: 'Remove beef from pan. Set aside.', section: SECTIONS.STIR_FRY },
        { step: 'Add onions. Sauté for 1 minute.', section: SECTIONS.STIR_FRY, img: saltado3 },
        { step: 'Add garlic and tomatoes. Sauté for 1 minute.', section: SECTIONS.STIR_FRY, img: saltado4 },
        { step: 'Re-add the beef.', section: SECTIONS.STIR_FRY, img: saltado6 },
        { step: 'If you want the french fries in the sauce, add the french fries now. Or leave out if you want it to be crispy.', section: SECTIONS.STIR_FRY, img: saltado5 },
        { step: 'Add the sauce and combine until everything is coated.', section: SECTIONS.STIR_FRY, img: saltado7 },

        { step: 'Serve this delicious dish with rice and crispy french fries. Top with green onions and cilantro.', section: SECTIONS.SERVE },
    ]
};