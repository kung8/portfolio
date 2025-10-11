// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, DURUM_WHEAT, EGG, RED_POTATO, SALT } = require('./ingredients');

const PREP_POTATOES = 'Prep Potatoes';
const MAKE_DOUGH = 'Make Dough';
const COOK_GNOCCHI = 'Cook Gnocchi';

module.exports = {
    wip: true,
    cardName: 'Potato Gnocchi',
    name: 'Potato Gnocchi',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Potato Gnocchi', link: 'https://www.giallozafferano.com/recipes/Potato-gnocchi.html' }
    ],
    separated: true,
    ingredients: [
        { ...RED_POTATO, amount: 2.2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.MAIN },
        { ...DURUM_WHEAT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
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
        { step: 'Peel the potatoes.', section: PREP_POTATOES },
        { step: 'Add potatoes to a large pot and fill to cover the potatoes with cold water.', section: PREP_POTATOES },
        { step: 'Place the pot over medium-high heat. Boil the potatoes until a fork can be inserted into the potatoes easily (about 30 to 40 minutes).', section: PREP_POTATOES },
        { step: 'Drain.', section: PREP_POTATOES },
        { step: 'Pour flour on a clean surface.', section: MAKE_DOUGH },
        { step: 'Place hot potatoes on the flour and mash the potatoes.', section: MAKE_DOUGH },
        { step: 'In a small bowl, combine the egg and salt.', section: MAKE_DOUGH },
        { step: 'Add the egg mixture over the mashed potatoes.', section: MAKE_DOUGH },
        { step: 'Mix with your hands until it is soft but compact. Avoid kneading it too long or else it can get too hard.', section: MAKE_DOUGH },
        { step: 'Take a part of the dough and cover the remaining dough with a towel to prevent it from drying out.', section: MAKE_DOUGH },
        { step: 'Roll the dough with your finger to get 3/4 inch loaves. Add the durum wheat as needed.', section: MAKE_DOUGH },
        { step: 'Press a fork over each gnocchi to create the pattern.', section: MAKE_DOUGH },
        { step: 'Place each on a lightly floured towel.', section: MAKE_DOUGH },
        { step: 'Over medium-high heat, bring a pot of water and salt to a boil.', section: COOK_GNOCCHI },
        { step: 'Add the gnocchi to the boiling water in batches.', section: COOK_GNOCCHI },
        { step: 'Once the gnocchi float to the surface, strain out these cooked gnocchi and place them on a plate.', section: COOK_GNOCCHI },
        { step: 'Use these gnocchi as part of dishes.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};