const drumettes1 = '../assets/Products/orange-chicken-drumettes-1.jpeg';
const drumettes2 = '../assets/Products/orange-chicken-drumettes-2.jpeg';
const drumettes3 = '../assets/Products/orange-chicken-drumettes-3.jpeg';
const drumettes4 = '../assets/Products/orange-chicken-drumettes-4.jpeg';
const drumettes5 = '../assets/Products/orange-chicken-drumettes-5.jpeg';
const drumettes6 = '../assets/Products/orange-chicken-drumettes-6.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { BLACK_PEPPER, CHICKEN_DRUMETTES, GARLIC, HONEY, KETCHUP, LIGHT_SOY_SAUCE, ORANGE_JUICE, PAPRIKA, SALT, SMALL_BOWL, STOVE, WATER, WOK, YELLOW_MUSTARD } = require('./ingredients');

const COOK_CHICKEN_IN_JUICE = 'Cook Chicken in Juice';
const COAT_CHICKEN = 'Coat Chicken';

module.exports = {
    cardName: 'Orange Chicken Drumettes',
    name: 'Orange Chicken Drumettes',
    img: drumettes6,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH, CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SIMMER, METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE, TYPES.SIDE_DISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Orange Chicken Drumettes',
            link: 'https://www.facebook.com/WantMoreRecipes/videos/dont-fry-the-chicken-simmer-it-in-orange-juice-instead-and-watch-what-happens/1249752720421147/',
            authors: ['Laura Diniz Camargo'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...ORANGE_JUICE, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or pineapple juice', section: SECTIONS.CHICKEN },
        { ...CHICKEN_DRUMETTES, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SPICES },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SPICES },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SPICES },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SPICES },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SPICES },
        { ...LIGHT_SOY_SAUCE, amount: 5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SPICES },

        { ...YELLOW_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CONDIMENTS },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CONDIMENTS },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CONDIMENTS },
    ],
    appliances: [
        STOVE
    ],
    supplies: [
        WOK,
        { ...SMALL_BOWL, amount: 2 },
    ],
    directions: [
        { step: `In a large wok, add orange juice and chicken in a single layer.`, section: COOK_CHICKEN_IN_JUICE, img: drumettes1 },
        { step: `Over medium-high heat, cook the chicken cook until the orange juice reduces completely (about 10 to 15 minutes).`, section: COOK_CHICKEN_IN_JUICE, img: drumettes2 },

        { step: `In a small bowl, combine the "${SECTIONS.SPICES}" section ingredients.`, section: SECTIONS.SIMMER },
        { step: `Add spices. Mix until coated.`, section: SECTIONS.SIMMER, img: drumettes3 },
        { step: `Cover. Let it simmer for about 15 minutes.`, section: SECTIONS.SIMMER, img: drumettes4 },

        { step: `In a small bowl, combine the "${SECTIONS.CONDIMENTS}" section ingredients.`, section: COAT_CHICKEN },
        { step: `Add condiments. Mix until coated.`, section: COAT_CHICKEN },

        { step: `Optionally broil these for a few minutes to crisp up the skin.`, section: SECTIONS.BROIL, img: drumettes5 },

        { step: `Enjoy these delicious chicken wings!`, section: SECTIONS.SERVE },
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
            instruction: 'Over medium heat, reheat the chicken until warmed through.',
        },
    ],
    mealPrep: true,
};