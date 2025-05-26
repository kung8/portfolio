// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { CHICKEN_THIGH, SALT, BLACK_PEPPER, OLIVE_OIL, UNSALTED_BUTTER, DIJON_MUSTARD, YELLOW_ONION, WHITE_WINE, CHICKEN_BROTH, HEAVY_CREAM, BAY_LEAF, FRESH_THYME } = require('./ingredients');

const BAKE_DIJON_CHICKEN = 'Bake Dijon Chicken';

module.exports = {
    wip: true,
    cardName: 'Dijon Chicken',
    name: 'Dijon Chicken',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.PAN_FRY, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Dijon Chicken', link: 'https://www.allrecipes.com/dijon-chicken-6575993' }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_THIGH, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_WINE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FRESH_THYME, amount: 5, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'dutch oven pot' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Season both sides of the chicken with salt and pepper.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Over medium-high heat, heat oil and butter in a dutch oven pot.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add chicken thigh, skin-side down. Cook until skin is golden (about 3 to 4 minutes).', section: SECTIONS.COOK_CHICKEN },
        { step: 'Flip chicken. Brush top with mustard and cook until bottom is golden (about 3 to 4 minutes).', section: SECTIONS.COOK_CHICKEN },
        { step: 'Transfer chicken to a plate.', section: SECTIONS.COOK_CHICKEN },

        { step: 'Lower to medium heat.', section: SECTIONS.COOK_SAUCE },
        { step: 'Add onion and mustard. Cook until onions are translucent and coated (about 4 to 5 minutes).', section: SECTIONS.COOK_SAUCE },
        { step: 'Add wine. Deglaze the pan.', section: SECTIONS.COOK_SAUCE },
        { step: 'Increase to medium-high heat. Bring to a boil.', section: SECTIONS.COOK_SAUCE },
        { step: 'Let simmer until no longer smells of alcohol (about 3 minutes).', section: SECTIONS.COOK_SAUCE },
        { step: 'Add the rest of the "Sauce" section ingredients. Stir.', section: SECTIONS.COOK_SAUCE },
        
        { step: 'Add chicken, skin-side up, to the pan.', section: BAKE_DIJON_CHICKEN },
        { step: 'Bake until chicken is no longer pink and it reaches an internal temperature of 165ºF (about 15 to 20 minutes).', section: BAKE_DIJON_CHICKEN },
        { step: 'Enjoy this dish over noodles or rice.', section: SECTIONS.SERVE },
    ]
};