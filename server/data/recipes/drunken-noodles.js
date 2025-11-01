const drunken1 = '../assets/Products/drunken-noodles-1.jpeg';
const drunken2 = '../assets/Products/drunken-noodles-2.jpeg';
const drunken3 = '../assets/Products/drunken-noodles-3.jpeg';
const drunken4 = '../assets/Products/drunken-noodles-4.jpeg';
const drunken5 = '../assets/Products/drunken-noodles-5.jpeg';
const drunken6 = '../assets/Products/drunken-noodles-6.jpeg';
const drunken7 = '../assets/Products/drunken-noodles-7.jpeg';
const drunken8 = '../assets/Products/drunken-noodles-8.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CHICKEN_BREAST, FISH_SAUCE, FRESH_RICE_NOODLES, GARLIC, GREEN_BELL_PEPPER, OYSTER_SAUCE, PEANUT_OIL, RED_BELL_PEPPER, SMALL_BOWL, SRIRACHA_SAUCE, STOVE, SWEET_SOY_SAUCE, THAI_BASIL, THAI_CHILI_PEPPER, WHITE_ONION, WHITE_SUGAR, WOK } = require('./ingredients');

const COOK_AROMATICS = 'Cook Aromatics';

module.exports = {
    cardName: 'Drunken Noodles',
    name: 'Drunken Noodles',
    img: drunken8,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.NOODLE],
    allergies: [ALLERGIES.EGG, ALLERGIES.FISH],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.PESCATARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Drunken Noodles', 
            link: 'https://www.foodnetwork.com/recipes/my-famous-drunken-noodles-3827989?fbclid=IwY2xjawIfTmlleHRuA2FlbQIxMAABHVqvQu2XwUkyb_68QE5482xWyQggrknFtByQl4kjDwlqFUsOQo0_ThKjQA_aem_eAwibywVvwmX2-nPbsMtdg',
            authors: ['Jet Tila'],
            finder: 'Amanda Berg', 
        }
    ],
    ingredients: [
        { ...SWEET_SOY_SAUCE, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SRIRACHA_SAUCE, amount: 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...THAI_BASIL, amount: 16, unit: INGREDIENT_UNITS.LEAF, additionalDetails: 'long thin strips/chiffonade', section: SECTIONS.SAUCE },

        { ...PEANUT_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.NOODLES },
        { ...THAI_CHILI_PEPPER, amount: 3, unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.NOODLES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.NOODLES },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.NOODLES },
        { ...WHITE_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.NOODLES },
        { ...CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.NOODLES },
        { ...FRESH_RICE_NOODLES, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...THAI_BASIL, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'packed', section: SECTIONS.NOODLES },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SMALL_BOWL,
        WOK,
    ],
    directions: [
        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE, img: drunken1 },

        { step: `Over high heat, add oil to a wok.`, section: COOK_AROMATICS },
        { step: `Add garlic and cook until light brown.`, section: COOK_AROMATICS },
        { step: `Add thai chili peppers.`, section: COOK_AROMATICS, img: drunken2 },

        { step: `Add chicken. Cook until chicken becomes white (about 5 to 6 minutes). Avoid browning.`, section: SECTIONS.COOK_CHICKEN, img: drunken3 },
        { step: `Transfer chicken to a bowl.`, section: SECTIONS.COOK_CHICKEN },

        { step: `Add bell peppers and onions (or preferred vegetables). Cook until softened (about 4 to 5 minutes).`, section: SECTIONS.COOK_VEGGIES, img: drunken4 },
        { step: `Transfer the vegetables to the bowl with the chicken.`, section: SECTIONS.COOK_VEGGIES },

        { step: `Cook noodles one serving at a time. This makes it much easier to cook. Add portioned noodles and sauce. Mix until covered.`, section: SECTIONS.COOK_NOODLES, img: [drunken5, drunken6] },

        { step: `Add chicken and vegetables. Stir and cook until well integrated.`, section: SECTIONS.ASSEMBLE, img: drunken7 },
        { step: `Add Thai basil. Stir until wilted.`, section: SECTIONS.ASSEMBLE },
        { step: `Enjoy this dish warm!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Make sure the fresh rice noodles are thawed and at room temperature before cooking.' },
        { note: 'I would recommend using thicker flat noodles for this dish.' },
        { note: 'The trick is to cook each serving individually. This prevents the noodles from breaking.' },
        { note: 'When I made this dish I had not updated the sauce ingredient amounts (i.e. it is now doubled). I\'m more used to a saucier drunken noodle dish. I will remake this dish and update the images.', }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a splash of water. Heat on medium, stirring frequently, until heated through.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 30 second intervals, stirring in between, until heated through.',
        },
    ],
    mealPrep: true,
};