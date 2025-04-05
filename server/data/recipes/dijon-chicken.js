// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { CHICKEN_THIGH, SALT, BLACK_PEPPER, OLIVE_OIL, UNSALTED_BUTTER, DIJON_MUSTARD, YELLOW_ONION, WHITE_WINE, CHICKEN_BROTH, HEAVY_CREAM, BAY_LEAF, FRESH_THYME } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const SAUCE_SECTION = 'Sauce';

const COOK_CHICKEN = 'Cook Chicken';
const COOK_SAUCE = 'Cook Sauce';
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
        { ...CHICKEN_THIGH, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CHICKEN_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_SECTION },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '', section: SAUCE_SECTION },
        { ...DIJON_MUSTARD, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...WHITE_WINE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...CHICKEN_BROTH, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...HEAVY_CREAM, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: SAUCE_SECTION },
        { ...FRESH_THYME, amount: 5, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: SAUCE_SECTION },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'dutch oven pot' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: COOK_CHICKEN },
        { step: 'Season both sides of the chicken with salt and pepper.', type: COOK_CHICKEN },
        { step: 'Over medium-high heat, heat oil and butter in a dutch oven pot.', type: COOK_CHICKEN },
        { step: 'Add chicken thigh, skin-side down. Cook until skin is golden (about 3 to 4 minutes).', type: COOK_CHICKEN },
        { step: 'Flip chicken. Brush top with mustard and cook until bottom is golden (about 3 to 4 minutes).', type: COOK_CHICKEN },
        { step: 'Transfer chicken to a plate.', type: COOK_CHICKEN },

        { step: 'Lower to medium heat.', type: COOK_SAUCE },
        { step: 'Add onion and mustard. Cook until onions are translucent and coated (about 4 to 5 minutes).', type: COOK_SAUCE },
        { step: 'Add wine. Deglaze the pan.', type: COOK_SAUCE },
        { step: 'Increase to medium-high heat. Bring to a boil.', type: COOK_SAUCE },
        { step: 'Let simmer until no longer smells of alcohol (about 3 minutes).', type: COOK_SAUCE },
        { step: 'Add the rest of the "Sauce" section ingredients. Stir.', type: COOK_SAUCE },
        
        { step: 'Add chicken, skin-side up, to the pan.', type: BAKE_DIJON_CHICKEN },
        { step: 'Bake until chicken is no longer pink and it reaches an internal temperature of 165ºF (about 15 to 20 minutes).', type: BAKE_DIJON_CHICKEN },
        { step: 'Enjoy this dish over noodles or rice.', type: SECTIONS.SERVE },
    ]
};