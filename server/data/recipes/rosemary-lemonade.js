const boiled = '../assets/Products/rosemary-lemonade-boiled.jpeg';
const zoomed = '../assets/Products/rosemary-lemonade-pitcher-zoomed.jpeg';
const pitcher = '../assets/Products/rosemary-lemonade-pitcher.jpeg';
const rosemary = '../assets/Products/rosemary-lemonade-rosemary.jpeg';
const sugar = '../assets/Products/rosemary-lemonade-sugar.jpeg';
const sweet = '../assets/Products/rosemary-lemonade-sweet-mix.jpeg';
const water = '../assets/Products/rosemary-lemonade-water.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { COLD_WATER, FRESH_ROSEMARY, WHITE_SUGAR, HONEY, LEMON_JUICE, ICE, LEMON } = require('./ingredients');

module.exports = {
    cardName: 'Rosemary Lemonade',
    name: 'Rosemary Lemonade',
    img: zoomed,
    available: true,
    category: [CATEGORIES.DRINK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.DRINK],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '15 m',
    websites: [
        { label: 'Rosemary Lemonade', link: "https://www.tasteofhome.com/recipes/rosemary-lemonade/" }
    ],
    separated: true,
    ingredients: [
        { ...COLD_WATER, amount: '2 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: '2 sprigs of', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...HONEY, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: '1 1/4 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COLD_WATER, amount: '6 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.SERVE },
        { ...FRESH_ROSEMARY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'pitcher' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat 2 cups of water in a saucepan. Bring to a boil.', type: SECTIONS.MAIN, img: water },
        { step: 'Add rosemary sprigs and cover with a lid. Reduce to low heat and simmer for 10 minutes.', type: SECTIONS.MAIN, img: rosemary },
        { step: 'Take out the rosemary.', type: SECTIONS.MAIN, img: boiled },
        { step: 'Add honey and sugar. Mix until dissolved.', type: SECTIONS.MAIN, img: sugar },
        { step: 'Transfer sugar mixture to a pitcher. Place in the fridge for 15 minutes.', type: SECTIONS.MAIN, img: sweet },
        { step: 'Add lemon juice and cold water.', type: SECTIONS.SERVE, img: pitcher },
        { step: 'Serve with ice, lemon slices, and more rosemary.', type: SECTIONS.SERVE },
    ]
};