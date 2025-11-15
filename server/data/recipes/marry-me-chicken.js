const chicken1 = '../assets/Products/marry-me-chicken-1.jpeg';
const chicken2 = '../assets/Products/marry-me-chicken-2.jpeg';
const chicken3 = '../assets/Products/marry-me-chicken-3.jpeg';
const chicken4 = '../assets/Products/marry-me-chicken-4.jpeg';
const chicken5 = '../assets/Products/marry-me-chicken-5.jpeg';
const chicken6 = '../assets/Products/marry-me-chicken-6.jpeg';
const chicken7 = '../assets/Products/marry-me-chicken-7.jpeg';
const chicken8 = '../assets/Products/marry-me-chicken-8.jpeg';
const chicken9 = '../assets/Products/marry-me-chicken-9.jpeg';
const chicken10 = '../assets/Products/marry-me-chicken-10.jpeg';
const chicken11 = '../assets/Products/marry-me-chicken-11.jpeg';
const chicken12 = '../assets/Products/marry-me-chicken-12.jpeg';
const chicken13 = '../assets/Products/marry-me-chicken-13.jpeg';
const chicken14 = '../assets/Products/marry-me-chicken-14.jpeg';
const chicken15 = '../assets/Products/marry-me-chicken-15.jpeg';
const chicken16 = '../assets/Products/marry-me-chicken-16.jpeg';
const chicken17 = '../assets/Products/marry-me-chicken-17.jpeg';
const chicken18 = '../assets/Products/marry-me-chicken-18.jpeg';
const chicken19 = '../assets/Products/marry-me-chicken-19.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASIL_LEAF, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, CHICKEN_BROTH, DUTCH_OVEN_POT, GARLIC, HEAVY_CREAM, OLIVE_OIL, OREGANO, OVEN, PARMESAN_CHEESE, RED_PEPPER_FLAKES, SALT, STOVE, SUN_DRIED_TOMATOES, TONGS } = require('./ingredients');

const SUN_DRIED_TOMATO_CREAM_SAUCE = 'Sun-Dried Tomato Cream Sauce';

module.exports = {
    cardName: 'Marry Me Chicken',
    name: 'Marry Me Chicken',
    img: chicken19,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CHICKEN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Marry Me Chicken', 
            link: 'https://40aprons.com/marry-me-chicken/',
            authors: ['Cheryl Malik'],
            finder: 'Montana Hiltbrand', 
        }
    ],
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'butterflied or cut in half', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...CHICKEN_BROTH, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room temperature', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...PARMESAN_CHEESE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded at room temperature', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...SUN_DRIED_TOMATOES, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...BASIL_LEAF, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        DUTCH_OVEN_POT,
        TONGS,
    ],
    directions: [
        { step: `Preheat the oven to 375ºF. Arrange the rack so the dutch oven pot will be cooked in the center of the oven.`, section: SECTIONS.PREHEAT_OVEN, img: chicken1 },
        { step: `Prepare chicken by removing any fat and pat dry.`, section: SECTIONS.CHICKEN, img: chicken2 },
        { step: `Season with salt and pepper generously on both sides.`, section: SECTIONS.CHICKEN, img: chicken3 },
        { step: `Over medium-high heat, add olive oil and spread until covered.`, section: SECTIONS.CHICKEN, img: chicken4 },
        { step: `Sear chicken until lightly golden (about 3 to 4 minutes).`, section: SECTIONS.CHICKEN, img: chicken5 },
        { step: `Flip and sear the other side (about 3 to 4 minutes).`, section: SECTIONS.CHICKEN, img: chicken6 },
        { step: `Transfer chicken to plate (chicken should not be cooked all the way through).`, section: SECTIONS.CHICKEN, img: chicken7 },

        { step: `Reduce to medium-low heat and wait until dutch oven pot cools.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: `Add garlic. Saute until fragrant (about 1 to 2 minutes).`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken8 },
        { step: `Add broth and deglaze the pan.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken9 },
        { step: `Remove pan from heat.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: `Add cream and mix.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken10 },
        { step: `Add cheese and stir until the cheese melts.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken11 },
        { step: `Move pot back to burner and stir for a minute (while the pot returns to heat).`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken12 },
        { step: `Add sun-dried tomatoes, oregano and red pepper flakes. Stir.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken13 },
        { step: `Taste sauce and adjust with seasoning as needed.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: `Simmer over medium-low heat and stir occasionally.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken14 },
        { step: `Once simmering, add chicken and flip several times until the chicken is coated.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken15 },
        { step: `Transfer the pot to the oven.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken16 },
        { step: `Bake until the chicken reaches 160ºF (about 12 to 15 minutes).`, section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: `Carefully remove pot from oven and spoon sauce over chicken.`, section: SUN_DRIED_TOMATO_CREAM_SAUCE, img: chicken17 },
        { step: `Let chicken rest for 5 minutes (residual heat will cook the chicken, wait until it is at least 165ºF).`, section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: `Serve with your favorite sides and be sure to ladle sauce over the chicken.`, section: SECTIONS.SERVE, img: chicken18 },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until heated through (about 3 to 4 minutes).',
        },
    ],
    mealPrep: true,
};