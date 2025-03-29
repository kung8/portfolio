// const japchae1 = '../assets/Products/japchae-1.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { KOREAN_GLASS_NOODLES, EGG, CARROT, RED_BELL_PEPPER, YELLOW_ONION, GREEN_ONION, GARLIC, SHIITAKE_MUSHROOM, SPINACH, LIGHT_SOY_SAUCE, SESAME_OIL, BROWN_SUGAR, BLACK_PEPPER, SESAME_SEEDS, SALT, ORANGE_BELL_PEPPER } = require('./ingredients');

const NOODLES_SECTION = 'Noodles';
const EGG_SECTION = 'Eggs';
const FIRST_VEGGIES_SECTION = 'First Veggies';
const SECOND_VEGGIES_SECTION = 'Second Veggies';
const SAUCE_SECTION = 'Sauce';

const COOK_NOODLES = 'Cook Noodles';
const COOK_EGGS = 'Cook Eggs';
const COOK_FIRST_VEGGIES = 'Cook First Veggies';
const COOK_SECOND_VEGGIES = 'Cook Second Veggies';
const ASSEMBLE = 'Assemble';

module.exports = {
    wip: true,
    cardName: 'Japchae',
    name: 'Japchae (Korean Glass Noodles)',
    img: '',
    recipeFinder: 'Christian Ou',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.KOREAN, GENRES.ASIAN],
    method: [METHODS.BOIL, METHODS.SAUTE],
    protein: [PROTEIN.EGG],
    type: [TYPES.NOODLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Japchae', link: 'https://www.instagram.com/onehappybite/reel/C8ChLPupnZC/?hl=en' }
    ],
    separated: true,
    ingredients: [
        { ...KOREAN_GLASS_NOODLES, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: NOODLES_SECTION },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: EGG_SECTION },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGG_SECTION },

        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FIRST_VEGGIES_SECTION },
        { ...CARROT, amount: 1, unit: '', additionalDetails: 'julienned', section: FIRST_VEGGIES_SECTION },
        { ...RED_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'thinly sliced', section: FIRST_VEGGIES_SECTION },
        { ...ORANGE_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'thinly sliced', section: FIRST_VEGGIES_SECTION },

        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECOND_VEGGIES_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'sliced', section: SECOND_VEGGIES_SECTION },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'chopped', section: SECOND_VEGGIES_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECOND_VEGGIES_SECTION },
        { ...SHIITAKE_MUSHROOM, amount: 4, unit: '', additionalDetails: 'sliced', section: SECOND_VEGGIES_SECTION },

        { ...SPINACH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECOND_VEGGIES_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECOND_VEGGIES_SECTION },

        { ...LIGHT_SOY_SAUCE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },

        { ...SESAME_SEEDS, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'colander' },
        { name: 'cooking scissors' },
        { name: 'small bowl' },
        { name: 'frying pan' },
        { name: 'mixing bowl' },
        { name: '' },
    ],
    directions: [
        { step: 'Boil water in a pot and cook glass noodles as instructed from the packaging.', type: COOK_NOODLES },
        { step: 'Drain and rinse in cold water.', type: COOK_NOODLES },
        { step: 'Cut the noodles a few times with cooking scissors.', type: COOK_NOODLES },

        { step: 'In a small bowl, whisk eggs.', type: COOK_EGGS },
        { step: 'Over medium heat, heat oil in a frying pan.', type: COOK_EGGS },
        { step: 'Add whisked eggs into pan. Tilt the pan in a circular motion to spread the egg.', type: COOK_EGGS },
        { step: 'Cook the egg for a minute.', type: COOK_EGGS },
        { step: 'Flip and cook for another minute.', type: COOK_EGGS },
        { step: 'Transfer to a cutting board to cool.', type: COOK_EGGS },
        { step: 'Cut eggs into thin strips.', type: COOK_EGGS },

        { step: 'Over medium-high heat, heat oil in a frying pan.', type: COOK_FIRST_VEGGIES },
        { step: 'Saute the carrots and bell peppers until softened (about 3 to 4 minutes). Set aside.', type: COOK_FIRST_VEGGIES },

        { step: 'Over medium-high heat, heat oil in a frying pan.', type: COOK_SECOND_VEGGIES },
        { step: 'Saute the onion, mushrooms, garlic, and green onions until softened.', type: COOK_SECOND_VEGGIES },
        { step: 'Add spinach and salt. Cook until spinach wilts. Set aside.', type: COOK_SECOND_VEGGIES },

        { step: 'Over medium-high heat, combine the "Sauce" section ingredients.', type: ASSEMBLE },
        { step: 'Once the sugar dissolves, add noodles. Toss to coat noodles in the sauce.', type: ASSEMBLE },
        { step: 'Add vegetables back in and combine until mixed.', type: ASSEMBLE },

        { step: 'Serve topped with eggs and sesame seed.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Feel free to add or replace veggies with your favorites and you can even add whatever protein you like.' },
    ]
};