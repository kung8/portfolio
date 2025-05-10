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

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { JASMINE_RICE, GREEN_ONION, CARROT, FROZEN_CORN, FROZEN_PEAS, EGG, SALT, VEGETABLE_OIL, LIGHT_SOY_SAUCE, DARK_SOY_SAUCE, WHITE_SUGAR, CHICKEN_BOUILLON, CHINESE_SAUSAGE, WATER } = require('./ingredients');

const RICE_SECTION = 'Rice';
const VEGGIES_SECTION = 'Veggies';
const EGGS_SECTION = 'Eggs';
const FRIED_RICE_SECTION = 'Fried Rice';
const SAUCE_SECTION = 'Sauce';

const COOK_RICE = 'Cook Rice';
const PREP_VEGGIES = 'Prep Veggies';
const PREP_SAUCE = 'Prep Sauce';
const FLUFF_RICE = 'Fluff Rice';
const COOK_EGGS = 'Cook Eggs';
const STIR_FRY = 'Stir Fry';

module.exports = {
    cardName: 'Chinese Fried Rice',
    name: 'Chinese Fried Rice',
    img: rice9,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.EGG],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Egg Fried Rice', link: 'https://www.madewithlau.com/recipes/egg-fried-rice' }
    ],
    separated: true,
    ingredients: [
        { ...JASMINE_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'uncooked', section: RICE_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: RICE_SECTION },

        { ...CARROT, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'diced', section: VEGGIES_SECTION },
        { ...FROZEN_CORN, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: VEGGIES_SECTION },
        { ...FROZEN_PEAS, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: VEGGIES_SECTION },
        { ...WATER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: VEGGIES_SECTION },

        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...DARK_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...CHICKEN_BOUILLON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },

        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: EGGS_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGGS_SECTION },
        { ...CHINESE_SAUSAGE, amount: 2, unit: '', additionalDetails: '', section: EGGS_SECTION },

        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'diced green parts only', section: FRIED_RICE_SECTION },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FRIED_RICE_SECTION },
    ],
    appliances: [
        { name: 'rice cooker' },
        { name: 'stove' },
    ],
    supplies: [
        { name: '2 medium bowls' },
        { name: 'small bowl' },
        { name: 'chopsticks' },
        { name: 'wok' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Wash and cook the rice in a rice cooker.', section: COOK_RICE },

        { step: 'In a medium bowl, combine the carrots, corn and peas.', section: PREP_VEGGIES },
        { step: 'Fill the bowl with water and microwave for 2 minutes.', section: PREP_VEGGIES },
        { step: 'Drain and set aside.', section: PREP_VEGGIES, img: rice3 },

        { step: 'In a small bowl, combine the "Sauce" section ingredients.', section: PREP_SAUCE, img: rice1 },

        { step: 'Leave the lid on the rice cooker after it finishes cooking for a few minutes.', section: FLUFF_RICE },
        { step: 'Remove the lid and use chopsticks to stir and lift up the rice. This releases steam and helps prevent sticking.', section: FLUFF_RICE },

        { step: 'In a medium bowl, combine the eggs and salt. Beat and set aside for a few minutes.', section: COOK_EGGS, img: rice2 },
        { step: 'Over high heat, heat a wok.', section: COOK_EGGS },
        { step: 'Turn down the heat to low and add oil to a wok. Spread the oil to coat the wok.', section: COOK_EGGS, img: rice4 },
        { step: 'Add eggs. Lightly stir and cook for 20 to 30 seconds.', section: COOK_EGGS, img: rice5 },
        { step: 'Optionally add the Chinese sausage and cook for 2 to 3 minutes.', section: COOK_EGGS, img: rice6 },
        { step: 'Add rice on top of the eggs.', section: COOK_EGGS },
        { step: 'Stir fry and break up any clumps (for about 2 minutes). Make sure to get to the bottom and the sides to prevent burning and sticking.', section: COOK_EGGS },
        { step: 'Lightly press down on the rice.', section: COOK_EGGS, img: rice7 },

        { step: 'Turn up the heat to high.', section: STIR_FRY },
        { step: 'Add the veggies. Stir fry for 2 to 3 minutes.', section: STIR_FRY, img: rice8 },
        { step: 'Add the sauce. Stir fry for another 2 to 3 minutes.', section: STIR_FRY, img: rice10 },
        { step: 'Add the oil and green onions. Stir fry for another minute.', section: STIR_FRY },
        { step: 'Turn the heat off.', section: STIR_FRY },
        { step: 'Taste and add any additional seasonings.', section: STIR_FRY },

        { step: 'Serve warm and enjoy this simple Chinese cuisine.', section: SECTIONS.SERVE },
    ]
};