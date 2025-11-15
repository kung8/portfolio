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

module.exports = {
    cardName: 'Singaporean Chicken Rice',
    name: 'Singaporean Chicken Rice',
    img: rice5,
    available: true,
    recommended: true,
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
        { ...CHICKEN_THIGH, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'bone-in, skin on', section: SECTIONS.CHICKEN },
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
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
        { step: `Marinade the chicken thigh with salt and sesame oil.`, section: SECTIONS.CHICKEN },
        { step: `Wash the rice.`, section: SECTIONS.RICE },
        { step: `Prep the garlic, ginger, and green onion.`, section: SECTIONS.RICE },
        { step: `Place the washed rice, garlic, ginger, green onion, chicken broth, and turmeric in a pot.`, section: SECTIONS.RICE, img: rice1 },
        { step: `Place the chicken thigh on top and cover with a lid.`, section: SECTIONS.RICE, img: rice2 },
        { step: `Cook until the chicken and rice is cooked (about 15 to 25 minutes).`, section: SECTIONS.RICE, img: rice3 },
        { step: `Cut the chicken into slices. If the chicken is still pink/raw, I recommend placing the sliced chicken in a pan filled with a layer of water and cover with a lid. Cook the chicken for 5 or so minutes over medium-high heat.`, section: SECTIONS.RICE },
        { step: `Mix garlic, ginger, sriracha, chicken stock, lime juice, and sugar in a bowl.`, section: CHILI_SAUCE, img: rice4 },
        { step: `Serve this dish with cucumbers and tomatoes. Top with chili sauce.`, section: SECTIONS.SERVE },
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