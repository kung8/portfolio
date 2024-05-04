const fullPlate = '../assets/Products/chicken-cordon-bleu-plated.jpeg';
const almond = '../assets/Products/green-bean-almondine-almond-and-onion.jpeg';
const boiled = '../assets/Products/green-bean-almondine-boiled.jpeg';
const cooked = '../assets/Products/green-bean-almondine-cooked.jpeg';
const bath = '../assets/Products/green-bean-almondine-ice-bath.jpeg';
const ice = '../assets/Products/green-bean-almondine-ice-water.jpeg';
const plate = '../assets/Products/green-bean-almondine-plate.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');

module.exports = {
    cardName: 'Green Bean Almondine',
    name: 'Green Bean Almondine',
    img: plate,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BOIL, METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: 'salt', amount: '2 1/2 tsp', additionalDetails: '', optional: false, section: '' },
        { name: 'french green bean', amount: '1 lb', additionalDetails: '', optional: false, section: '' },
        { name: 'unsalted butter', amount: '1/4 c', additionalDetails: '', optional: false, section: '' },
        { name: 'sliced almonds', amount: '1/4 c', additionalDetails: '', optional: false, section: '' },
        { name: 'shallot', amount: '1', additionalDetails: '', optional: false, section: '' },
        { name: 'lemon zest', amount: '1 tsp', additionalDetails: '', optional: false, section: '' },
        { name: 'lemon juice', amount: '2 tsp', additionalDetails: '', optional: false, section: '' },
        { name: 'pepper', amount: '1/4 tsp', additionalDetails: '', optional: false, section: '' },
        { name: 'ice', amount: '', additionalDetails: '', optional: false, section: '' },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'saucepan' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Over medium-high heat, boil water and salt in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Add beans into pan and cook until they become bright green (3 to 4 minutes).', type: SECTIONS.MAIN, img: boiled },
        { step: 'Fill a mixing bowl with ice and water.', type: SECTIONS.MAIN, img: ice },
        { step: 'Transfer green beans into ice water and let chill for 3 to 4 minutes.', type: SECTIONS.MAIN, img: bath },
        { step: 'Drain.', type: SECTIONS.MAIN },
        { step: 'Brown butter in pan.', type: SECTIONS.MAIN },
        { step: 'Add almonds and shallots to pan and cook for 2 minutes.', type: SECTIONS.MAIN, img: almond },
        { step: 'Add green beans back into the pan and cook for a few minutes.', type: SECTIONS.MAIN, img: cooked },
        { step: 'Serve warm.', type: SECTIONS.MAIN, img: fullPlate },
    ]
};