const saltado1 = '../assets/Products/lomo-saltado-1.jpeg';
const saltado2 = '../assets/Products/lomo-saltado-2.jpeg';
const saltado3 = '../assets/Products/lomo-saltado-3.jpeg';
const saltado4 = '../assets/Products/lomo-saltado-4.jpeg';
const saltado5 = '../assets/Products/lomo-saltado-5.jpeg';
const saltado6 = '../assets/Products/lomo-saltado-6.jpeg';
const saltado7 = '../assets/Products/lomo-saltado-7.jpeg';
const saltado8 = '../assets/Products/lomo-saltado-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { AJI_AMARILLO_PASTE, BEEF_SIRLOIN, CILANTRO, CORNSTARCH, FRENCH_FRIES, GARLIC, GREEN_ONION, LIGHT_SOY_SAUCE, MIXING_BOWL, OYSTER_SAUCE, RED_ONION, RED_WINE_VINEGAR, ROMA_TOMATO, SMALL_BOWL, STOVE, VEGETABLE_OIL, WHITE_RICE, WOK } = require('./ingredients');

module.exports = {
    cardName: 'Lomo Saltado',
    name: 'Lomo Saltado',
    img: saltado8,
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
        { 
            label: 'Lomo Saltado', 
            link: 'https://littlespicejar.com/lomo-saltado/',
            authors: ['Marzia'],
            finder: 'Kevin Ung', 
        }
    ],
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
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        SMALL_BOWL,
        WOK,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.BEEF}" section ingredients.`, section: SECTIONS.MARINATE_BEEF, img: saltado1 },
        { step: `Let it marinate for 5 to 7 minutes.`, section: SECTIONS.MARINATE_BEEF },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients. Stir and set aside.`, section: SECTIONS.PREP_SAUCE },

        { step: `Over medium-high heat, add oil to a wok.`, section: SECTIONS.STIR_FRY },
        { step: `Add the beef. Sear both sides of the beef (about 1 to 2 minutes). Cook in batches if needed and add more between batches as needed. If you want more browned beef, you may not want to pour in the marinade with it.`, section: SECTIONS.STIR_FRY, img: saltado2 },
        { step: `Remove beef from pan. Set aside.`, section: SECTIONS.STIR_FRY },
        { step: `Add onions. Sauté for 1 minute.`, section: SECTIONS.STIR_FRY, img: saltado3 },
        { step: `Add garlic and tomatoes. Sauté for 1 minute.`, section: SECTIONS.STIR_FRY, img: saltado4 },
        { step: `Re-add the beef.`, section: SECTIONS.STIR_FRY, img: saltado6 },
        { step: `If you prefer less crispy fries, add fries now. For crispy fries, top later.`, section: SECTIONS.STIR_FRY, img: saltado5 },
        { step: `Add the sauce and combine until everything is coated.`, section: SECTIONS.STIR_FRY, img: saltado7 },

        { step: `Serve this delicious dish with rice and crispy french fries. Top with green onions and cilantro.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Keep the frozen fries in the freezer. Cook them when you are ready to eat.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};