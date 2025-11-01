const noodles1 = '../assets/Products/pad-thai-1.jpeg';
const noodles2 = '../assets/Products/pad-thai-2.jpeg';
const noodles3 = '../assets/Products/pad-thai-3.jpeg';
const noodles4 = '../assets/Products/pad-thai-4.jpeg';
const noodles5 = '../assets/Products/pad-thai-5.jpeg';
const noodles6 = '../assets/Products/pad-thai-6.jpeg';
const noodles7 = '../assets/Products/pad-thai-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BEAN_SPROUT,
    BROWN_RICE_NOODLES,
    BROWN_SUGAR,
    CHICKEN_BREAST,
    CILANTRO,
    EGG,
    FISH_SAUCE,
    FRYING_PAN,
    GARLIC,
    LIGHT_SOY_SAUCE,
    LIME,
    MEASURING_SPOONS,
    MEDIUM_BOWL,
    MIXING_BOWL,
    PEANUT_BUTTER,
    RED_BELL_PEPPER,
    RICE_WINE_VINEGAR,
    SPATULA,
    SRIRACHA_SAUCE,
    STOVE,
    STRAINER,
    UNSALTED_BUTTER,
    UNSALTED_PEANUT,
} = require('./ingredients');

const CHICKEN_AND_VEGGIES_SECTION = 'Chicken and Veggies';

const COOK_CHICKEN_AND_VEGGIES = 'Cook Chicken and Veggies';
const ROAST_PEANUTS = 'Roast Peanuts';

module.exports = {
    cardName: 'Pad Thai',
    name: 'Thai Pad Thai',
    img: noodles5,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.ALTERNATIVE, PROTEIN.CHICKEN, PROTEIN.PEANUT],
    type: [TYPES.NOODLE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.FISH, ALLERGIES.PEANUT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Pad Thai',
            link: 'https://tastesbetterfromscratch.com/pad-thai/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_AND_VEGGIES_SECTION },
        { ...CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: CHICKEN_AND_VEGGIES_SECTION },
        { ...GARLIC, amount: 9, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: CHICKEN_AND_VEGGIES_SECTION },
        { ...RED_BELL_PEPPER, amount: 4, unit: '', additionalDetails: 'sliced', section: CHICKEN_AND_VEGGIES_SECTION },

        { ...BROWN_RICE_NOODLES, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...EGG, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.EGGS },

        { ...SRIRACHA_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: 9, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 15, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PEANUT_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...UNSALTED_PEANUT, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'wedged', section: SECTIONS.TOPPINGS },
        { ...BEAN_SPROUT, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        MIXING_BOWL,
        STRAINER,
        MEDIUM_BOWL,
        SPATULA,
        MEASURING_SPOONS,
    ],
    directions: [
        { step: 'Over medium-high heat, melt butter in a wok.', section: COOK_CHICKEN_AND_VEGGIES },
        { step: 'Add chicken. Brown the chicken for a few minutes.', section: COOK_CHICKEN_AND_VEGGIES },
        { step: 'Add garlic and bell peppers. Cook for a few minutes.', section: COOK_CHICKEN_AND_VEGGIES, img: noodles1 },
        { step: 'Set aside.', section: COOK_CHICKEN_AND_VEGGIES },

        { step: 'Over medium-high heat, boil water in a saucepan.', section: SECTIONS.COOK_NOODLES },
        { step: 'Add rice noodles. Cook until just barely tender (about 3 to 5 minutes). Be careful not to overcook the noodles.', section: SECTIONS.COOK_NOODLES, img: noodles2 },
        { step: 'Drain in a strainer. Rinse noodles under cold water.', section: SECTIONS.COOK_NOODLES },

        { step: `In a medium bowl, mix together the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },
        { step: 'Set aside sauce.', section: SECTIONS.PREP_SAUCE },

        { step: 'Over medium-high heat, add a little butter to the wok.', section: SECTIONS.COOK_EGGS },
        { step: 'In a medium bowl, beat eggs.', section: SECTIONS.COOK_EGGS },
        { step: 'Pour eggs in wok and cook. Spread the eggs and lift up the edges.', section: SECTIONS.COOK_EGGS },
        { step: 'Flip and cook for 30 seconds before turning off heat. Continue to let eggs cook with the residual heat.', section: SECTIONS.COOK_EGGS },
        { step: 'Remove the eggs from wok and cut eggs into thin strips.', section: SECTIONS.COOK_EGGS, img: noodles3 },

        { step: 'In the wok, mix together noodles, chicken, and vegetables.', section: SECTIONS.ASSEMBLE },
        { step: 'Add eggs. Carefully mix.', section: SECTIONS.ASSEMBLE },
        { step: 'Add sauce. Mix together.', section: SECTIONS.ASSEMBLE, img: noodles4 },

        { step: 'Roast the peanuts in a pan.', section: ROAST_PEANUTS },
        { step: 'Set aside.', section: ROAST_PEANUTS, img: noodles6 },

        { step: `Serve and garnish with "${SECTIONS.TOPPINGS}" section ingredients. Enjoy this majestic Thai dish!`, section: SECTIONS.SERVE, img: noodles7 },
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
            instruction: 'Add a little water. Cover with a microwave-safe lid and microwave on medium power. Start with 1 minute and then microwave in 30-second intervals until heated through.',
        },
        {
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Add a little oil. Over medium heat, stir-fry until heated through (about 5 to 10 minutes).',
        },
    ],
    mealPrep: true,
};