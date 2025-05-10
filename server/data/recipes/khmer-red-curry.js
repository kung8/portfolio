const cooked2 = '../assets/Products/khmer-red-curry-cooked-2.jpeg';
const bagged = '../assets/Products/khmer-red-curry-bagged.jpeg';
const chicken = '../assets/Products/khmer-red-curry-chicken.jpeg';
const mixed1 = '../assets/Products/khmer-red-curry-coconut-milk-mixed-1.jpeg';
const mixed2 = '../assets/Products/khmer-red-curry-coconut-milk-mixed-2.jpeg';
const milk = '../assets/Products/khmer-red-curry-coconut-milk.jpeg';
const beans2 = '../assets/Products/khmer-red-curry-green-beans-2.jpeg';
const kaffir = '../assets/Products/khmer-red-curry-kaffir-leaves.jpeg';
const lemongrass = '../assets/Products/khmer-red-curry-lemongrass.jpeg';
const nonBeans3 = '../assets/Products/khmer-red-curry-non-green-beans-3.jpeg';
const plated1 = '../assets/Products/khmer-red-curry-plated-1.jpeg';
const veggies = '../assets/Products/khmer-red-curry-veggies.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    CHICKEN_THIGH,
    RED_CURRY_PASTE,
    COCONUT_MILK,
    LEMONGRASS,
    KAFFIR_LIME_LEAF,
    SALT,
    BLACK_PEPPER,
    RUSSET_POTATO,
    WATER,
} = require('./ingredients');

module.exports = {
    cardName: 'Khmer Red Curry',
    name: 'Khmer Red Curry',
    img: cooked2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CAMBODIAN, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Khmer Red Chicken Curry', link: 'https://cambodiarecipe.com/recipe/khmer-red-chicken-curry/' }
    ],
    separated: false,
    ingredients: [
        { ...CHICKEN_THIGH, amount: 5, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...RED_CURRY_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...RUSSET_POTATO, amount: 1, unit: '', additionalDetails: 'peeled and cubed', section: SECTIONS.MAIN },
        { ...COCONUT_MILK, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMONGRASS, amount: '', unit: '', additionalDetails: 'diagonally sliced', section: SECTIONS.MAIN },
        { ...KAFFIR_LIME_LEAF, amount: 12, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: '', unit: '', additionalDetails: 'warm', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok or pot' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium-high heat, add red curry paste and coconut milk in a pan.', section: SECTIONS.MAIN, img: milk },
        { step: 'Cook and stir until it is well combined.', section: SECTIONS.MAIN, img: [mixed1, mixed2] },
        { step: 'Place the lemongrass and kaffir lime leaves in a spice bag.', section: SECTIONS.MAIN, img: [lemongrass, kaffir, bagged] },
        { step: 'Add the chicken, potatoes, and spice bag.', section: SECTIONS.MAIN, img: [chicken, veggies, nonBeans3] },
        { step: 'Cook for about 10.', section: SECTIONS.MAIN },
        { step: 'Turn down the heat and let it simmer for 10 to 15 minutes. Cook until the chicken is completely cooked through and the potatoes are softened but not mushy.', section: SECTIONS.MAIN, img: beans2 },
        { step: 'Add water or more coconut milk to help thin the curry as desired and cut the spice level.', section: SECTIONS.MAIN },
        { step: 'Serve this delicious Cambodian spicy curry with vermicelli noodles or baked bread.', section: SECTIONS.MAIN, img: plated1 },
    ],
    notes: [
        { note: 'You can really add any structural veggies. I did not like some of the textures of the eggplant when reheated.' },
        { note: 'Green beans does not add much to the taste besides some color and adds crunch as long as you do not overcook it. Make sure to add a little later in the cooking process.' },
        { note: '1/4 cup of the red curry paste is a great spice level (don\'t add any more even if you double or triple the amount).' },
    ]
};