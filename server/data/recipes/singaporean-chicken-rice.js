const rice1 = '../assets/Products/singaporean-chicken-rice-1.jpeg';
const rice2 = '../assets/Products/singaporean-chicken-rice-2.jpeg';
const rice3 = '../assets/Products/singaporean-chicken-rice-3.jpeg';
const rice4 = '../assets/Products/singaporean-chicken-rice-4.jpeg';
const rice5 = '../assets/Products/singaporean-chicken-rice-5.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BOWL,
    CHICKEN_BROTH,
    CHICKEN_THIGH,
    CUCUMBER,
    CUTTING_BOARD,
    GARLIC,
    GINGER,
    GREEN_ONION,
    JASMINE_RICE,
    KNIFE,
    LIME_JUICE,
    POT,
    ROMA_TOMATO,
    SALT,
    SESAME_OIL,
    SRIRACHA_SAUCE,
    STOVE,
    TURMERIC,
    WHITE_SUGAR,
} = require('./ingredients');

const CHILI_SAUCE = 'Chili Sauce';
const COOK_CHICKEN_AND_RICE = 'Cook Chicken and Rice';

module.exports = {
    cardName: 'Singaporean Chicken Rice',
    name: 'Singaporean Chicken Rice',
    img: rice5,
    available: true,
    recommended: true,
    createdAt: '2024-06-18 21:24:50',
    modifiedAt: '2026-10-26 00:05:45',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SINGAPOREAN, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Singaporean Chicken Rice',
            link: 'https://www.youtube.com/shorts/yYKQK5_80p0',
            authors: ['Douglas Chau'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'bone-in, skin on', section: SECTIONS.CHICKEN_MARINADE },
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },

        { ...JASMINE_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.RICE },
        { ...GINGER, amount: 1 / 2, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'minced', section: SECTIONS.RICE },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'chopped', section: SECTIONS.RICE },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...TURMERIC, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.RICE },

        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: CHILI_SAUCE },
        { ...GINGER, amount: 1 / 2, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'minced', section: CHILI_SAUCE },
        { ...SRIRACHA_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHILI_SAUCE },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHILI_SAUCE },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHILI_SAUCE },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHILI_SAUCE },

        { ...CUCUMBER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        { ...POT, additionalDetails: 'with lid' },
        BOWL,
        CUTTING_BOARD,
        KNIFE,
    ],
    directions: [
        { step: `In a large bowl, combine the "${SECTIONS.CHICKEN_MARINADE}" section ingredients.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Marinade for at least 30 minutes.`, section: SECTIONS.MARINATE_CHICKEN },

        { step: `Wash the rice.`, section: SECTIONS.PREP_RICE },
        { step: `Prep the garlic, ginger, and green onion.`, section: SECTIONS.PREP_RICE },
        { step: `In a large pot, combine the "${SECTIONS.RICE}" section ingredients.`, section: SECTIONS.PREP_RICE, img: rice1 },

        { step: `Place the chicken thigh on top of the rice mixture and cover with a lid.`, section: COOK_CHICKEN_AND_RICE, img: rice2 },
        { step: `Cook until the chicken and rice is cooked (about 15 to 25 minutes).`, section: COOK_CHICKEN_AND_RICE, img: rice3 },
        { step: `Cut the chicken into slices.`, section: COOK_CHICKEN_AND_RICE },

        { step: `In a bowl, combine the "${CHILI_SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE, img: rice4 },

        { step: `Serve this dish with cucumbers and tomatoes. Top with chili sauce.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `The original recipe only uses 1 pound of chicken per 2 cups of rice, but every time that I have made this it doesn't seem to be enough, so I upped the chicken quantity to 2 pounds per 2 cups of rice mainly because there is bone in the chicken.` },
        { note: `Keep an eye on the liquid level while the rice is cooking -- it can evaporate quickly and the bottom of the rice may burn.` },
        { note: `If the chicken is still pink after cooking, place the sliced chicken in a pan with a layer of water and cover with a lid. Cook for 5 minutes over medium-high heat.` }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the chicken, rice, and chili sauce separately.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave the chicken and rice separately. Add a little water to rice. Microwave rice until heated through (about 3 to 4 minutes). Cover the chicken with a damp paper towel and microwave until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};