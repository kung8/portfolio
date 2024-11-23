// const raw = '../assets/Products/khmer-red-curry-raw.jpeg';
// const paste = '../assets/Products/khmer-red-curry-paste-and-milk.jpeg';
// const leaves = '../assets/Products/khmer-red-curry-lime-leaves.jpeg';
const cooked1 = '../assets/Products/khmer-red-curry-cooked-1.jpeg';
const cooked2 = '../assets/Products/khmer-red-curry-cooked-2.jpeg';
const bread = '../assets/Products/khmer-red-curry-with-bread.jpeg';
const bagged = '../assets/Products/khmer-red-curry-bagged.jpeg';
const chicken = '../assets/Products/khmer-red-curry-chicken.jpeg';
const mixed1 = '../assets/Products/khmer-red-curry-coconut-milk-mixed-1.jpeg';
const mixed2 = '../assets/Products/khmer-red-curry-coconut-milk-mixed-2.jpeg';
const milk = '../assets/Products/khmer-red-curry-coconut-milk.jpeg';
const beans1 = '../assets/Products/khmer-red-curry-green-beans-1.jpeg';
const beans2 = '../assets/Products/khmer-red-curry-green-beans-2.jpeg';
const kaffir = '../assets/Products/khmer-red-curry-kaffir-leaves.jpeg';
const lemongrass = '../assets/Products/khmer-red-curry-lemongrass.jpeg';
const nonBeans1 = '../assets/Products/khmer-red-curry-non-green-beans-1.jpeg';
const nonBeans2 = '../assets/Products/khmer-red-curry-non-green-beans-2.jpeg';
const nonBeans3 = '../assets/Products/khmer-red-curry-non-green-beans-3.jpeg';
const plated1 = '../assets/Products/khmer-red-curry-plated-1.jpeg';
const plated2 = '../assets/Products/khmer-red-curry-plated-2.jpeg';
const veggies = '../assets/Products/khmer-red-curry-veggies.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    CHICKEN_THIGH,
    RED_CURRY_PASTE,
    COCONUT_MILK,
    LEMONGRASS,
    KAFFIR_LIME_LEAVES,
    WARM_WATER,
    SALT,
    BLACK_PEPPER,
    RUSSET_POTATOES,
} = require('./ingredients');

module.exports = {
    cardName: 'Khmer Red Curry',
    name: 'Khmer Red Curry',
    img: cooked2,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CAMBODIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: '6 servings',
    prepTime: '7 m',
    cookTime: '25 m',
    websites: [
        { label: 'Khmer Red Chicken Curry', link: 'https://cambodiarecipe.com/recipe/khmer-red-chicken-curry/' }
    ],
    separated: false,
    ingredients: [
        { ...CHICKEN_THIGH, amount: '5 lbs', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...RED_CURRY_PASTE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...RUSSET_POTATOES, amount: '1', additionalDetails: 'peeled and cubed', section: SECTIONS.MAIN },
        { ...COCONUT_MILK, amount: '13.5 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMONGRASS, amount: '', additionalDetails: 'diagonally sliced', section: SECTIONS.MAIN },
        { ...KAFFIR_LIME_LEAVES, amount: '10 - 12', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WARM_WATER, amount: '', additionalDetails: 'to thin', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok or pot' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium-high heat, add red curry paste and coconut milk in a pan.', type: SECTIONS.MAIN, img: milk },
        { step: 'Cook and stir until it is well combined.', type: SECTIONS.MAIN, img: [mixed1, mixed2] },
        { step: 'Place the lemongrass and kaffir lime leaves in a spice bag.', type: SECTIONS.MAIN, img: [lemongrass, kaffir, bagged] },
        { step: 'Add the chicken, potatoes, and spice bag.', type: SECTIONS.MAIN, img: [chicken, veggies, nonBeans1, nonBeans2, nonBeans3] },
        { step: 'Cook for about 10.', type: SECTIONS.MAIN },
        { step: 'Turn down the heat and let it simmer for 10 to 15 minutes. Cook until the chicken is completely cooked through and the potatoes are softened but not mushy.', type: SECTIONS.MAIN, img: [beans1, beans2] },
        { step: 'Add water or more coconut milk to help thin the curry as desired and cut the spice level.', type: SECTIONS.MAIN },
        { step: 'Serve this delicious Cambodian spicy curry with vermicelli noodles or baked bread.', type: SECTIONS.MAIN, img: [bread, plated1, plated2, cooked1] },
    ],
    notes: [
        { note: 'You can really add any structural veggies. I did not like some of the textures of the eggplant when reheated.' },
        { note: 'Green beans does not add much to the taste besides some color and adds crunch as long as you do not overcook it. Make sure to add a little later in the cooking process.' },
        { note: '1/4 cup of the red curry paste is a great spice level (don\'t add any more even if you double or triple the amount).' },
    ]
};