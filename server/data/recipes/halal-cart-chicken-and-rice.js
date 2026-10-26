// const halalCartChickenAndRice1 = '../assets/Products/halal-cart-chicken-and-rice-1.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALLSPICE,
    BASMATI_RICE,
    BLACK_PEPPER,
    BONELESS_AND_SKINLESS_CHICKEN_THIGH,
    CHICKEN_BROTH,
    CORIANDER,
    CUMIN,
    CUTTING_BOARD,
    GARLIC,
    KNIFE,
    LEMON_JUICE,
    LETTUCE,
    MAYONNAISE,
    OLIVE_OIL,
    PAPRIKA,
    PARSLEY,
    PITA_BREAD,
    POT,
    ROMA_TOMATO,
    SALT,
    SOUR_CREAM,
    STOVE,
    TURMERIC,
    WATER,
    WHITE_SUGAR,
    WHITE_VINEGAR,
    YELLOW_ONION,
} = require('./ingredients');

const RICE_SEASONINGS = 'Rice Seasonings';
const RICE_LIQUIDS = 'Rice Liquids';
const WHITE_SAUCE = 'White Sauce';

module.exports = {
    cardName: 'Halal Cart Chicken and Rice',
    name: 'Halal Cart Chicken and Rice',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-10-25 23:09:03',
    modifiedAt: '2026-10-25 23:09:03',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MIDDLE_EASTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 60, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Halal Cart Chicken',
            link: 'https://www.foodnetwork.com/recipes/food-network-kitchen/halal-cart-chicken-11312197',
            authors: ['Shadi Hasanzadenemati'],
            finder: 'Kevin Ung',
        },
        {
            label: 'Halal Cart-Style Yellow Rice',
            link: 'https://www.foodnetwork.com/recipes/food-network-kitchen/halal-cart-style-yellow-rice-11261062',
            authors: ['Shadi Hasanzadenemati'],
            finder: 'Kevin Ung',
        },
        {
            label: 'Halal Cart White Sauce',
            link: 'https://www.littlespicejar.com/halal-cart-white-sauce/',
            authors: ['Marzia'],
            finder: 'Kevin Ung',
        },
    ],
    ingredients: [
        { ...LEMON_JUICE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'about 2 lemons', section: SECTIONS.CHICKEN_MARINADE },
        { ...OLIVE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...ALLSPICE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...TURMERIC, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.CHICKEN_MARINADE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN_MARINADE },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'freshly ground', section: SECTIONS.CHICKEN_MARINADE },

        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1-inch pieces', section: SECTIONS.CHICKEN },

        { ...BASMATI_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'rinsed', section: SECTIONS.RICE },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'extra-virgin', section: SECTIONS.RICE },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.RICE },
        { ...TURMERIC, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_SEASONINGS },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_SEASONINGS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_SEASONINGS },
        { ...CHICKEN_BROTH, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_LIQUIDS },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_LIQUIDS },

        { ...SOUR_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'full fat', section: WHITE_SAUCE },
        { ...MAYONNAISE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WHITE_SAUCE },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: WHITE_SAUCE },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WHITE_SAUCE },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WHITE_SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'adjust to taste', section: WHITE_SAUCE },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'dried', section: WHITE_SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WHITE_SAUCE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'kosher', section: WHITE_SAUCE },

        { ...LETTUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVING },
        { ...ROMA_TOMATO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVING },
        { ...PITA_BREAD, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVING },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        POT,
        CUTTING_BOARD,
        KNIFE,
    ],
    directions: [
        { step: `In a large bowl, combine the "${SECTIONS.CHICKEN_MARINADE}" section ingredients.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Add the chicken and toss to coat.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Cover and refrigerate for at least 30 minutes and up to 6 hours.`, section: SECTIONS.MARINATE_CHICKEN },

        { step: `Rinse the basmati rice until the water runs clear.`, section: SECTIONS.COOK_RICE },
        { step: `Over medium heat, heat olive oil in a saucepan.`, section: SECTIONS.COOK_RICE },
        { step: `Add onions. Saute, stirring occasionally, until translucent and lightly golden (about 5 minutes).`, section: SECTIONS.COOK_RICE },
        { step: `Add rice and the "${RICE_SEASONINGS}" section ingredients. Stir.`, section: SECTIONS.COOK_RICE },
        { step: `Add the "${RICE_LIQUIDS}" section ingredients.`, section: SECTIONS.COOK_RICE },
        { step: `Increase to medium-high heat.`, section: SECTIONS.COOK_RICE },
        { step: `Bring to a boil. Lower to medium heat.`, section: SECTIONS.COOK_RICE },
        { step: `Cover the pan and cook until the liquid is absorbed and the rice is tender (about 15 to 20 minutes).`, section: SECTIONS.COOK_RICE },
        { step: `Keep covered but removed from heat (about 5 minutes).`, section: SECTIONS.COOK_RICE },
        { step: `Fluff with a fork.`, section: SECTIONS.COOK_RICE },

        { step: `In a medium bowl, combine the "${WHITE_SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },
        { step: `Whisk until smooth and creamy. Add more sugar as needed.`, section: SECTIONS.PREP_SAUCE },

        { step: `Over medium-high heat, heat a large pan.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Cook the chicken in batches as needed. Add the chicken in a single layer. Cook, without stirring, 5 to 7 minutes.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Stir the chicken. Cook until fully cooked and caramelized on all sides (about 5 minutes).`, section: SECTIONS.COOK_CHICKEN },
        { step: `Transfer to a plate. Repeat with the remaining chicken.`, section: SECTIONS.COOK_CHICKEN },

        { step: `Enjoy this street cart classic! Serve the chicken over the yellow rice with the white sauce, lettuce, tomatoes, and pita.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The chicken will release its juices during cooking and there will be liquid in the skillet. Keep cooking over medium-high heat until the liquid has cooked off. The chicken will be tender on the inside and slightly crispy on the outside.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the chicken, rice, and toppings separately for the best texture.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave the chicken and rice until heated through. Add a splash of water to the rice if it feels dry.',
        },
    ],
    mealPrep: true,
};
