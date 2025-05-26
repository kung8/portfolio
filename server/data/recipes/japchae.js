const japchae1 = '../assets/Products/japchae-1.jpeg';
const japchae2 = '../assets/Products/japchae-2.jpeg';
const japchae3 = '../assets/Products/japchae-3.jpeg';
const japchae4 = '../assets/Products/japchae-4.jpeg';
const japchae5 = '../assets/Products/japchae-5.jpeg';
const japchae6 = '../assets/Products/japchae-6.jpeg';
const japchae7 = '../assets/Products/japchae-7.jpeg';
const japchae8 = '../assets/Products/japchae-8.jpeg';
const japchae9 = '../assets/Products/japchae-9.jpeg';
const japchae10 = '../assets/Products/japchae-10.jpeg';
const japchae11 = '../assets/Products/japchae-11.jpeg';
const japchae12 = '../assets/Products/japchae-12.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { KOREAN_GLASS_NOODLES, EGG, CARROT, RED_BELL_PEPPER, YELLOW_ONION, GREEN_ONION, GARLIC, SHIITAKE_MUSHROOM, SPINACH, LIGHT_SOY_SAUCE, SESAME_OIL, BROWN_SUGAR, BLACK_PEPPER, SESAME_SEEDS, SALT, ORANGE_BELL_PEPPER } = require('./ingredients');

const FIRST_VEGGIES_SECTION = 'First Veggies';
const SECOND_VEGGIES_SECTION = 'Second Veggies';
const COOK_FIRST_VEGGIES = 'Cook First Veggies';
const COOK_SECOND_VEGGIES = 'Cook Second Veggies';

module.exports = {
    cardName: 'Japchae',
    name: 'Japchae (Korean Glass Noodles)',
    img: japchae12,
    recipeAuthor: 'Christian Ou',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
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
        { ...KOREAN_GLASS_NOODLES, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.EGGS },

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

        { ...LIGHT_SOY_SAUCE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

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
        { step: 'Boil water in a pot and cook glass noodles as instructed from the packaging.', section: SECTIONS.COOK_NOODLES, img: japchae1 },
        { step: 'Drain and rinse in cold water.', section: SECTIONS.COOK_NOODLES, img: japchae2 },
        { step: 'Cut the noodles a few times with cooking scissors.', section: SECTIONS.COOK_NOODLES },

        { step: 'In a small bowl, whisk eggs.', section: SECTIONS.COOK_EGGS },
        { step: 'Over medium heat, heat oil in a frying pan.', section: SECTIONS.COOK_EGGS },
        { step: 'Add whisked eggs into pan. Tilt the pan in a circular motion to spread the egg.', section: SECTIONS.COOK_EGGS },
        { step: 'Cook the egg for a minute.', section: SECTIONS.COOK_EGGS },
        { step: 'Flip and cook for another minute.', section: SECTIONS.COOK_EGGS, img: japchae3 },
        { step: 'Transfer to a cutting board to cool.', section: SECTIONS.COOK_EGGS },
        { step: 'Cut eggs into thin strips.', section: SECTIONS.COOK_EGGS, img: japchae4 },

        { step: 'Over medium-high heat, heat oil in a frying pan.', section: COOK_FIRST_VEGGIES },
        { step: 'Saute the carrots and bell peppers until softened (about 3 to 4 minutes). Set aside.', section: COOK_FIRST_VEGGIES, img: japchae5 },

        { step: 'Over medium-high heat, heat oil in a frying pan.', section: COOK_SECOND_VEGGIES },
        { step: 'Saute the onion, mushrooms, garlic, and green onions until softened.', section: COOK_SECOND_VEGGIES, img: japchae6 },
        { step: 'Add spinach and salt. Cook until spinach wilts. Set aside.', section: COOK_SECOND_VEGGIES, img: japchae7 },

        { step: `Over medium-high heat, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.ASSEMBLE, img: japchae8 },
        { step: 'Once the sugar dissolves, add noodles. Toss to coat noodles in the sauce.', section: SECTIONS.ASSEMBLE, img: japchae9 },
        { step: 'Add vegetables back in and combine until mixed.', section: SECTIONS.ASSEMBLE, img: japchae10 },

        { step: 'Serve topped with eggs and sesame seed.', section: SECTIONS.SERVE, img: japchae11 },
    ],
    notes: [
        { note: 'Feel free to add or replace veggies with your favorites and you can even add whatever protein you like.' },
        { note: 'I enjoyed the simplicity of this dish, but I would add an additional protein next time to make it more filling.' },
    ]
};