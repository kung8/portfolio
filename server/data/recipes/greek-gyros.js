const gryo1 = '../assets/Products/gyro-1.jpeg';
const gryo2 = '../assets/Products/gyro-2.jpeg';
const gryo3 = '../assets/Products/gyro-3.jpeg';
const gryo4 = '../assets/Products/gyro-4.jpeg';
const gryo5 = '../assets/Products/gyro-5.jpeg';
const gryo6 = '../assets/Products/gyro-6.jpeg';
const gryo7 = '../assets/Products/gyro-7.jpeg';
const gryo8 = '../assets/Products/gyro-8.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_THIGH, GARLIC, WHITE_VINEGAR, LEMON_JUICE, OLIVE_OIL, GREEK_YOGURT, OREGANO, SALT, BLACK_PEPPER, CUCUMBER, ROMA_TOMATO, RED_ONION, PARSLEY, PITA_BREAD } = require('./ingredients');

const TZATZIKI_SAUCE_SECTION = 'Tzatziki Sauce';

const PREP_TZATZIKI_SAUCE = 'Prep Tzatziki Sauce';

module.exports = {
    wip: true,
    cardName: 'Greek Gyros',
    name: 'Greek Gyros',
    img: gryo8,
    recipeAuthor: 'Nagi Maehashi',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.GREEK, GENRES.MEDITERRANEAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.WRAP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 6, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 3, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Greek Gyros', link: 'https://www.recipetineats.com/greek-chicken-gyros-with-tzatziki/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GREEK_YOGURT, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OREGANO, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...CUCUMBER, amount: 2, unit: '', additionalDetails: '', section: TZATZIKI_SAUCE_SECTION },
        { ...GREEK_YOGURT, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: TZATZIKI_SAUCE_SECTION },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TZATZIKI_SAUCE_SECTION },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TZATZIKI_SAUCE_SECTION },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: TZATZIKI_SAUCE_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: TZATZIKI_SAUCE_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: TZATZIKI_SAUCE_SECTION },

        { ...ROMA_TOMATO, amount: 3, unit: '', additionalDetails: '', section: '' },
        { ...CUCUMBER, amount: 3, unit: '', additionalDetails: '', section: '' },
        { ...RED_ONION, amount: 1 / 2, unit: '', additionalDetails: '', section: '' },
        { ...PARSLEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: '' },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: '' },

        { ...PITA_BREAD, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'ziploc bag' },
        { name: 'box grater' },
        { name: 'cheesecloth' },
        { name: '2 mixing bowls' },
        { name: 'frying pan' },
        { name: 'aluminum foil' },
        { name: 'parchment paper' },
        { name: '' },
    ],
    directions: [
        { step: `In a ziploc bag, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Add the chicken. Massage.', section: SECTIONS.MARINATE_CHICKEN, img: gryo1 },
        { step: 'Marinate overnight (or at least 3 hours).', section: SECTIONS.MARINATE_CHICKEN },

        { step: 'Cut the cucumber in half lengthwise.', section: PREP_TZATZIKI_SAUCE },
        { step: 'Scrape the seeds out.', section: PREP_TZATZIKI_SAUCE, img: gryo2 },
        { step: 'Grate the cucumber.', section: PREP_TZATZIKI_SAUCE },
        { step: 'Wrap the grated cucumber in cheesecloth.', section: PREP_TZATZIKI_SAUCE, img: gryo3 },
        { step: 'Squeeze to remove liquid.', section: PREP_TZATZIKI_SAUCE, img: gryo4 },
        { step: `In a mixing bowl, combine the "${TZATZIKI_SAUCE_SECTION}" section ingredients (including the grated cucumber).`, section: PREP_TZATZIKI_SAUCE, img: gryo5 },
        { step: 'Let it sit for at least 20 minutes.', section: PREP_TZATZIKI_SAUCE },

        { step: `In a mixing bowl, combine the "${SECTIONS.SALAD}" section ingredients.`, section: SECTIONS.PREP_SALAD },

        { step: 'Over medium-high heat, heat oil in a frying pan.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add chicken. Cook until golden brown and cooked through (about 2 to 3 minutes per side).', section: SECTIONS.COOK_CHICKEN, img: gryo6 },
        { step: 'Transfer the chicken to a plate.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Cover loosely with foil and let rest for at least 5 minutes.', section: SECTIONS.COOK_CHICKEN },

        { step: 'Wrap pita bread in damp towel. Microwave in 15-seconds intervals.', section: SECTIONS.ASSEMBLE },
        { step: 'Place pita bread on parchment paper.', section: SECTIONS.ASSEMBLE },
        { step: 'Add salad in the middle.', section: SECTIONS.ASSEMBLE },
        { step: 'Top with chicken and tzatziki sauce.', section: SECTIONS.ASSEMBLE, img: gryo7 },
        { step: 'Enclose the filling by wrapping the pita bread and the parchment paper.', section: SECTIONS.ASSEMBLE },

        { step: 'Serve and enjoy!', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the ingredients separately.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave the chicken in 30-second intervals until heated through.',
        },
    ],
    mealPrep: true,
};