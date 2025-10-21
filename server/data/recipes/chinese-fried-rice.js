const rice1 = '../assets/Products/chinese-fried-rice-1.jpeg';
const rice2 = '../assets/Products/chinese-fried-rice-2.jpeg';
const rice3 = '../assets/Products/chinese-fried-rice-3.jpeg';
const rice4 = '../assets/Products/chinese-fried-rice-4.jpeg';
const rice5 = '../assets/Products/chinese-fried-rice-5.jpeg';
const rice6 = '../assets/Products/chinese-fried-rice-6.jpeg';
const rice7 = '../assets/Products/chinese-fried-rice-7.jpeg';
const rice8 = '../assets/Products/chinese-fried-rice-8.jpeg';
const rice9 = '../assets/Products/chinese-fried-rice-9.jpeg';
const rice10 = '../assets/Products/chinese-fried-rice-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CARROT, CHICKEN_BOUILLON, CHINESE_SAUSAGE, CHOPSTICKS, DARK_SOY_SAUCE, EGG, FROZEN_CORN, FROZEN_PEAS, GREEN_ONION, JASMINE_RICE, LIGHT_SOY_SAUCE, MEDIUM_BOWL, RICE_COOKER, SALT, SMALL_BOWL, SPATULA, STOVE, VEGETABLE_OIL, WATER, WHITE_SUGAR, WOK } = require('./ingredients');

const FRIED_RICE_SECTION = 'Fried Rice';
const FLUFF_RICE = 'Fluff Rice';

module.exports = {
    cardName: 'Chinese Fried Rice',
    name: 'Chinese Fried Rice',
    img: rice9,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.EGG],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.EGG],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Egg Fried Rice', 
            link: 'https://www.madewithlau.com/recipes/egg-fried-rice',
            author: ['Chef Lau'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...JASMINE_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'uncooked', section: SECTIONS.RICE },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.RICE },

        { ...CARROT, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...FROZEN_CORN, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...FROZEN_PEAS, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...WATER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.VEGGIES },

        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DARK_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BOUILLON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.EGGS },
        { ...CHINESE_SAUSAGE, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.EGGS },

        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'diced green parts only', section: FRIED_RICE_SECTION },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FRIED_RICE_SECTION },
    ],
    appliances: [
        RICE_COOKER,
        STOVE,
    ],
    supplies: [
        {...MEDIUM_BOWL, amount: 2 },
        SMALL_BOWL,
        CHOPSTICKS,
        WOK,
        SPATULA,
    ],
    directions: [
        { step: 'Wash and cook the rice in a rice cooker.', section: SECTIONS.COOK_RICE },

        { step: 'In a medium bowl, combine the carrots, corn and peas.', section: SECTIONS.PREP_VEGGIES },
        { step: 'Fill the bowl with water and microwave for 2 minutes.', section: SECTIONS.PREP_VEGGIES },
        { step: 'Drain and set aside.', section: SECTIONS.PREP_VEGGIES, img: rice3 },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE, img: rice1 },

        { step: 'Leave the lid on the rice cooker after it finishes cooking for a few minutes.', section: FLUFF_RICE },
        { step: 'Remove the lid and use chopsticks to stir and lift up the rice. This releases steam and helps prevent sticking.', section: FLUFF_RICE },

        { step: 'In a medium bowl, combine the eggs and salt. Beat and set aside for a few minutes.', section: SECTIONS.COOK_EGGS, img: rice2 },
        { step: 'Over high heat, heat a wok.', section: SECTIONS.COOK_EGGS },
        { step: 'Turn down the heat to low and add oil to a wok. Spread the oil to coat the wok.', section: SECTIONS.COOK_EGGS, img: rice4 },
        { step: 'Add eggs. Lightly stir and cook for 20 to 30 seconds.', section: SECTIONS.COOK_EGGS, img: rice5 },
        { step: 'Optionally add the Chinese sausage and cook for 2 to 3 minutes.', section: SECTIONS.COOK_EGGS, img: rice6 },
        { step: 'Add rice on top of the eggs.', section: SECTIONS.COOK_EGGS },
        { step: 'Stir fry and break up any clumps (for about 2 minutes). Make sure to get to the bottom and the sides to prevent burning and sticking.', section: SECTIONS.COOK_EGGS },
        { step: 'Lightly press down on the rice.', section: SECTIONS.COOK_EGGS, img: rice7 },

        { step: 'Turn up the heat to high.', section: SECTIONS.STIR_FRY },
        { step: 'Add the veggies. Stir fry for 2 to 3 minutes.', section: SECTIONS.STIR_FRY, img: rice8 },
        { step: 'Add the sauce. Stir fry for another 2 to 3 minutes.', section: SECTIONS.STIR_FRY, img: rice10 },
        { step: 'Add the oil and green onions. Stir fry for another minute.', section: SECTIONS.STIR_FRY },
        { step: 'Turn the heat off.', section: SECTIONS.STIR_FRY },
        { step: 'Taste and add any additional seasonings.', section: SECTIONS.STIR_FRY },

        { step: 'Serve warm and enjoy this simple Chinese cuisine.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a little water. Cover with a microwave-safe lid. Microwave in 45-second intervals until heated through.',
        },
        {
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Over medium-high heat, add a little oil to a wok. Add the fried rice and stir-fry until it crisps up (about 3 to 4 minutes). Add a little water. Cover with a lid and cook until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};