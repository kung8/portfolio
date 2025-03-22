const batter = '../assets/Products/pao-de-queijo-batter.jpeg';
const boiling = '../assets/Products/pao-de-queijo-boiling-milk-mixture.jpeg';
const cooked = '../assets/Products/pao-de-queijo-cooked-cheeseballs.jpeg';
const zoomed = '../assets/Products/pao-de-queijo-cooked-zoomed.jpeg';
const pan = '../assets/Products/pao-de-queijo-dough-balls-in-pan.jpeg';
const balls = '../assets/Products/pao-de-queijo-dough-balls.jpeg';
const flour = '../assets/Products/pao-de-queijo-flour.jpeg';
const milk = '../assets/Products/pao-de-queijo-milk-mixture.jpeg';
const rawZoomed = '../assets/Products/pao-de-queijo-mixer-zoomed.jpeg';
const raw = '../assets/Products/pao-de-queijo-mixer.jpeg';
// const first = '../assets/Products/pao-de-queijo-zoomed-cheeseballs.jpeg';
const plated = '../assets/Products/pao-de-queijo-plated.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    TAPIOCA_STARCH,
    MILK,
    WARM_WATER,
    VEGETABLE_OIL,
    PARMESAN_CHEESE,
    MOZZARELLA_CHEESE,
    EGGS,
    SALT,
} = require('./ingredients');

module.exports = {
    cardName: 'Pao de Queijo',
    name: 'Pao de Queijo',
    img: zoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.BRAZILIAN, GENRES.LATIN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD, TYPES.FINGER_FOOD],
    yields: '2 dozen',
    prepTime: '20 m',
    cookTime: '30 m',
    websites: [
        { label: 'Brazilian Cheese Bread', link: "https://www.oliviascuisine.com/authentic-brazilian-cheese-bread/" }
    ],
    separated: false,
    ingredients: [
        { ...TAPIOCA_STARCH, amount: '4 c', unit: '', additionalDetails: 'plus some for thickening', section: SECTIONS.MAIN },
        { ...MILK, amount: '1 1/4 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WARM_WATER, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '6 Tbsp', section: SECTIONS.MAIN },
        { ...PARMESAN_CHEESE, amount: '1 1/2 c', unit: '', additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...MOZZARELLA_CHEESE, amount: '1 c', unit: '', additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...EGGS, amount: '2', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '2 tsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'spatula' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'In a stand mixer bowl, combine tapioca flour and cornstarch.', type: SECTIONS.DOUGH, img: flour },
        { step: 'Over medium-high heat, combine milk, water, oil and salt in a saucepan.', type: SECTIONS.DOUGH, img: milk },
        { step: 'Bring to a boil.', type: SECTIONS.DOUGH, img: boiling },
        { step: 'Pour the boiled milk into the stand mixer bowl.', type: SECTIONS.DOUGH, img: raw },
        { step: 'Turn on the mixer slowly and mix until the dough is white and sticky.', type: SECTIONS.DOUGH },
        { step: 'Slowly add eggs, one at a time, until it is mixed.', type: SECTIONS.DOUGH },
        { step: 'Slowly add the cheeses until it is well mixed.', type: SECTIONS.DOUGH, img: rawZoomed },
        { step: 'The dough will most likely be sticky, so I added about another cup of cornstarch to thicken the batter. Slowly add the cornstarch.', type: SECTIONS.DOUGH, img: batter },
        { step: 'Shape the dough into 1.5 inch balls.', type: SECTIONS.DOUGH, img: balls },
        { step: 'Place on a baking sheet about 2 inches apart. They do not expand very much.', type: SECTIONS.DOUGH, img: pan },
        { step: 'Bake until the cheeseballs are a golden brown (about 15 to 25 minutes).', type: SECTIONS.DOUGH, img: cooked },
        { step: 'Serve these warm.', type: SECTIONS.DOUGH, img: plated },
    ]
};