// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { PEANUT_BUTTER, MAPLE_SYRUP, WHITE_VINEGAR, LIGHT_SOY_SAUCE, SRIRACHA_SAUCE, WATER, VERMICELLI_RICE_NOODLES, OLIVE_OIL, ROMAINE_LETTUCE, RED_BELL_PEPPER, CARROT, CUCUMBER, BASIL_LEAF, UNSALTED_PEANUT, RED_CABBAGE, BONELESS_CHICKEN_BREAST, SALT, BLACK_PEPPER, LIME } = require('./ingredients');

const BOWL_SECTION = 'Bowl';
const PREP_BOWLS = 'Prep Bowls';

module.exports = {
    wip: true,
    cardName: 'Spring Roll Bowl',
    name: 'Peanut Chicken Spring Roll Bowl',
    img: '',
    recipeAuthor: 'Maxine Sharf',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.VIETNAMESE],
    method: [METHODS.BOIL, METHODS.MIX, METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE, TYPES.SALAD],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Peanut Chicken Spring Roll Bowl', link: 'https://www.instagram.com/reel/DIZbF2vyT7D' }
    ],
    separated: true,
    ingredients: [
        { ...PEANUT_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'juiced', section: SECTIONS.DRESSING },
        { ...MAPLE_SYRUP, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...SRIRACHA_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...WATER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },

        { ...VERMICELLI_RICE_NOODLES, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...ROMAINE_LETTUCE, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thin strips', section: BOWL_SECTION },
        { ...RED_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'thin strips', section: BOWL_SECTION },
        { ...RED_CABBAGE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thin strips', section: BOWL_SECTION },
        { ...CARROT, amount: 1 / 2, unit: '', additionalDetails: 'thin strips', section: BOWL_SECTION },
        { ...CUCUMBER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thin strips', section: BOWL_SECTION },

        { ...BONELESS_CHICKEN_BREAST, amount: 1, unit: '', additionalDetails: 'cut in half lengthwise', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },

        { ...BASIL_LEAF, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...UNSALTED_PEANUT, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'serving bowls' },
        { name: 'meat mallet' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: `In a medium bowl, combine the "${SECTIONS.DRESSING}" section ingredients. If the dressing is too thick, add more water as needed.`, section: SECTIONS.PREP_DRESSING },

        { step: 'Cook the noodles per package directions.', section: PREP_BOWLS },
        { step: 'Rinse in cool water.', section: PREP_BOWLS },
        { step: 'Toss in oil.', section: PREP_BOWLS },
        { step: 'Divide between bowls.', section: PREP_BOWLS },
        { step: `Add "${BOWL_SECTION}" section ingredients to the bowls. Mix.`, section: PREP_BOWLS },

        { step: 'With a meat mallet, pound the chicken to 1/2-inch thick.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Season both sides with salt and pepper.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Over medium heat, heat olive oil in a frying pan.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add chicken. Sear both sides of the chicken (about 5 to 6 minutes per side). Cook until it gets an internal temperature of 165ºF.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Let it rest (about 5 minutes).', section: SECTIONS.COOK_CHICKEN },
        { step: 'Cut it into bite size pieces.', section: SECTIONS.COOK_CHICKEN },

        { step: 'Enjoy these bowls with chicken and your favorite toppings.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the ingredients separately in airtight containers. The noodles are best cooked fresh.'
        },
    ],
    mealPrep: true,
};