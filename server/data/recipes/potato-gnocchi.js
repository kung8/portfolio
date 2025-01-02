// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { RED_POTATOES, ALL_PURPOSE_FLOUR, EGGS, SALT, DURUM_WHEAT } = require('./ingredients');

const PREP_POTATOES = 'Prep Potatoes';
const MAKE_DOUGH = 'Make Dough';
const COOK_GNOCCHI = 'Cook Gnocchi';

module.exports = {
    wip: true,
    cardName: 'Potato Gnocchi',
    name: 'Potato Gnocchi',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL],
    type: [TYPES.PASTA],
    yields: '4 servings',
    prepTime: '20 m',
    cookTime: '40 m',
    websites: [
        { label: 'Potato Gnocchi', link: 'https://www.giallozafferano.com/recipes/Potato-gnocchi.html' }
    ],
    separated: true,
    ingredients: [
        { ...RED_POTATOES, amount: '2.2 lbs', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: '2 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 'pinch of', additionalDetails: '', section: SECTIONS.MAIN },
        { ...DURUM_WHEAT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'masher' },
        { name: 'small bowl' },
        { name: 'fork' },
        { name: 'towel' },
        { name: 'spider strainer' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Peel the potatoes.', type: PREP_POTATOES },
        { step: 'Add potatoes to a large pot and fill to cover the potatoes with cold water.', type: PREP_POTATOES },
        { step: 'Place the pot over medium-high heat. Boil the potatoes until a fork can be inserted into the potatoes easily (about 30 to 40 minutes).', type: PREP_POTATOES },
        { step: 'Drain.', type: PREP_POTATOES },
        { step: 'Pour flour on a clean surface.', type: MAKE_DOUGH },
        { step: 'Place hot potatoes on the flour and mash the potatoes.', type: MAKE_DOUGH },
        { step: 'In a small bowl, combine the egg and salt.', type: MAKE_DOUGH },
        { step: 'Add the egg mixture over the mashed potatoes.', type: MAKE_DOUGH },
        { step: 'Mix with your hands until it is soft but compact. Avoid kneading it too long or else it can get too hard.', type: MAKE_DOUGH },
        { step: 'Take a part of the dough and cover the remaining dough with a towel to prevent it from drying out.', type: MAKE_DOUGH },
        { step: 'Roll the dough with your finger to get 3/4 inch loaves. Add the durum wheat as needed.', type: MAKE_DOUGH },
        { step: 'Press a fork over each gnocchi to create the pattern.', type: MAKE_DOUGH },
        { step: 'Place each on a lightly floured towel.', type: MAKE_DOUGH },
        { step: 'Over medium-high heat, bring a pot of water and salt to a boil.', type: COOK_GNOCCHI },
        { step: 'Add the gnocchi to the boiling water in batches.', type: COOK_GNOCCHI },
        { step: 'Once the gnocchi float to the surface, strain out these cooked gnocchi and place them on a plate.', type: COOK_GNOCCHI },
        { step: 'Use these gnocchi as part of dishes.', type: SECTIONS.SERVE },
    ],
};