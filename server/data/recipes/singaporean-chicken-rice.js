const aromatics = '../assets/Products/singaporean-chicken-rice-aromatics.jpeg';
const broth = '../assets/Products/singaporean-chicken-rice-broth.jpeg';
const chicken = '../assets/Products/singaporean-chicken-rice-chicken-in-broth.jpeg';
const mixed = '../assets/Products/singaporean-chicken-rice-cooked-mixed.jpeg';
const mixed2 = '../assets/Products/singaporean-chicken-rice-cooked-mixed-2.jpeg';
const lid = '../assets/Products/singaporean-chicken-rice-lid.jpeg';
const chili = '../assets/Products/singaporean-chicken-rice-chili-sauce.jpeg';
const cooked = '../assets/Products/singaporean-chicken-rice-cooked.jpeg';
const plated = '../assets/Products/singaporean-chicken-rice-plated.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    CHICKEN_BROTH,
    CHICKEN_THIGH,
    CUCUMBER,
    GARLIC,
    GINGER,
    GREEN_ONION,
    JASMINE_RICE,
    LIME_JUICE,
    ROMA_TOMATO,
    SALT,
    SESAME_OIL,
    SRIRACHA_SAUCE,
    TURMERIC,
    WHITE_SUGAR,
} = require('./ingredients');

const CHILI_SAUCE = 'Chili Sauce';

module.exports = {
    cardName: 'Singaporean Chicken Rice',
    name: 'Singaporean Chicken Rice',
    img: plated,
    recipeAuthors: ['Douglas Chau'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SINGAPOREAN, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Singaporean Chicken Rice', link: 'https://www.youtube.com/shorts/yYKQK5_80p0' }
    ],
    separated: true,
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot with lid' },
        { name: 'bowl' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Marinade the chicken thigh with salt and sesame oil.', section: SECTIONS.CHICKEN },
        { step: 'Wash the rice.', section: SECTIONS.RICE },
        { step: 'Prep the garlic, ginger, and green onion.', section: SECTIONS.RICE, img: aromatics },
        { step: 'Place the washed rice, garlic, ginger, green onion, chicken broth, and turmeric in a pot.', section: SECTIONS.RICE, img: broth },
        { step: 'Place the chicken thigh on top and cover with a lid.', section: SECTIONS.RICE, img: [chicken, lid] },
        { step: 'Cook until the chicken and rice is cooked (about 15 to 25 minutes).', section: SECTIONS.RICE, img: [cooked, mixed, mixed2] },
        { step: 'Cut the chicken into slices. If the chicken is still pink/raw, I recommend placing the sliced chicken in a pan filled with a layer of water and cover with a lid. Cook the chicken for 5 or so minutes over medium-high heat.', section: SECTIONS.RICE },
        { step: 'Mix together garlic, ginger, sriracha, chicken stock, lime juice, and sugar in a bowl.', section: CHILI_SAUCE, img: chili },
        { step: 'Serve this dish with cucumbers and tomatoes. Top with chili sauce.', section: SECTIONS.SERVE },
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