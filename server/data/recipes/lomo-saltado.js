// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BEEF_SIRLOIN, LIGHT_SOY_SAUCE, GARLIC, OYSTER_SAUCE, RED_WINE_VINEGAR, AJI_AMARILLO_PASTE, CORNSTARCH, RED_ONION, ROMA_TOMATO, GREEN_ONIONS, VEGETABLE_OIL, CILANTRO, WHITE_RICE, FRENCH_FRIES } = require('./ingredients');

const BEEF_SECTION = 'Beef';
const SAUCE_SECTION = 'Sauce';

const MARINATE_BEEF = 'Marinate Beef';
const PREP_SAUCE = 'Prep Sauce';
const STIR_FRY = 'Stir Fry';

module.exports = {
    wip: true,
    cardName: 'Lomo Saltado',
    name: 'Lomo Saltado',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.PERUVIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.STIR_FRY],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '10 m',
    websites: [
        { label: 'Lomo Saltado', link: 'https://littlespicejar.com/lomo-saltado/' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_SIRLOIN, amount: '1 lb', additionalDetails: 'thinly sliced', section: BEEF_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: BEEF_SECTION },
        { ...GARLIC, amount: '2 cloves', additionalDetails: 'minced', section: BEEF_SECTION },

        { ...LIGHT_SOY_SAUCE, amount: '4 Tbsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...OYSTER_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...RED_WINE_VINEGAR, amount: '1 Tbsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...AJI_AMARILLO_PASTE, amount: '1 Tbsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...CORNSTARCH, amount: '1 tsp', additionalDetails: '', section: SAUCE_SECTION },

        { ...VEGETABLE_OIL, amount: '', additionalDetails: '', section: STIR_FRY },
        { ...RED_ONION, amount: '1 medium', additionalDetails: 'thinly sliced', section: STIR_FRY },
        { ...GARLIC, amount: '3 cloves', additionalDetails: 'minced', section: STIR_FRY },
        { ...ROMA_TOMATO, amount: '3', additionalDetails: 'thinly sliced', section: STIR_FRY },

        { ...GREEN_ONIONS, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...WHITE_RICE, amount: '', additionalDetails: 'cooked', section: SECTIONS.TOPPINGS },
        { ...FRENCH_FRIES, amount: '', additionalDetails: 'cooked', section: SECTIONS.TOPPINGS },
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
        { step: 'In a mixing bowl, combine the "Beef" section ingredients.', type: MARINATE_BEEF },
        { step: 'Let it marinate for 5 to 7 minutes.', type: MARINATE_BEEF },

        { step: 'In a small bowl, combine the "Sauce" section ingredients. Stir and set aside.', type: PREP_SAUCE },

        { step: 'Over medium-high heat, add 1 tablespoon of oil to a wok.', type: STIR_FRY },
        { step: 'Add the beef. Sear both sides of the beef (about 1 to 2 minutes). Cook in batches if needed and add more between batches as needed.', type: STIR_FRY },
        { step: 'Remove beef from pan. Set aside.', type: STIR_FRY },
        { step: 'Add onions. Sauté for 1 minute.', type: STIR_FRY },
        { step: 'Add garlic and tomatoes. Sauté for 1 minute.', type: STIR_FRY },
        { step: 'Re-add the beef.', type: STIR_FRY },
        { step: 'If you want the french fries in the sauce, add the french fries now. Or leave out if you want it to be crispy.', type: STIR_FRY },
        { step: 'Add the sauce and combine until everything is coated.', type: STIR_FRY },

        { step: 'Serve this delicious dish with rice and crispy french fries. Top with green onions and cilantro.', type: SECTIONS.SERVE },
    ]
};