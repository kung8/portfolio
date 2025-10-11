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
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    BAKING_SHEET,
    TAPIOCA_STARCH,
    MILK,
    VEGETABLE_OIL,
    PARMESAN_CHEESE,
    MOZZARELLA_CHEESE,
    EGG,
    SALT,
    WATER,
    OVEN,
    STAND_MIXER,
    SPATULA,
} = require('./ingredients');

const STARCH_SECTION = 'Starch';
const LIQUID_SECTION = 'Liquid';
const CHEESES_SECTION = 'Cheeses';

module.exports = {
    cardName: 'Pao de Queijo',
    name: 'Pao de Queijo',
    img: zoomed,
    recipeAuthors: ['Olivia Mesquita'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.BRAZILIAN, GENRES.LATIN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD, TYPES.FINGER_FOOD],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Brazilian Cheese Bread', link: "https://www.oliviascuisine.com/authentic-brazilian-cheese-bread/" }
    ],
    separated: false,
    ingredients: [
        { ...TAPIOCA_STARCH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'plus some for thickening', section: STARCH_SECTION },

        { ...MILK, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUID_SECTION },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: LIQUID_SECTION },
        { ...VEGETABLE_OIL, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LIQUID_SECTION },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: LIQUID_SECTION },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...PARMESAN_CHEESE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: CHEESES_SECTION },
        { ...MOZZARELLA_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: CHEESES_SECTION },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        SPATULA,
        BAKING_SHEET,
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.PREP_DOUGH },
        { step: 'In a stand mixer bowl, combine tapioca flour.', section: SECTIONS.PREP_DOUGH, img: flour },
        { step: 'Over medium-high heat, combine milk, water, oil and salt in a saucepan.', section: SECTIONS.PREP_DOUGH, img: milk },
        { step: 'Bring to a boil.', section: SECTIONS.PREP_DOUGH, img: boiling },
        { step: 'Pour the boiled milk into the stand mixer bowl.', section: SECTIONS.PREP_DOUGH, img: raw },
        { step: 'Turn on the mixer slowly and mix until the dough is white and sticky.', section: SECTIONS.PREP_DOUGH },
        { step: 'Slowly add eggs, one at a time, until it is mixed.', section: SECTIONS.PREP_DOUGH },
        { step: 'Slowly add the cheeses until it is well mixed.', section: SECTIONS.PREP_DOUGH, img: rawZoomed },
        { step: 'The dough will most likely be sticky, so I added about another cup of tapioca starch to thicken the batter. Slowly add the cornstarch.', section: SECTIONS.PREP_DOUGH, img: batter },
        { step: 'Shape the dough into 1.5 inch balls.', section: SECTIONS.PREP_DOUGH, img: balls },
        { step: 'Place on a baking sheet about 2 inches apart. They do not expand very much.', section: SECTIONS.PREP_DOUGH, img: pan },
        { step: 'Bake until the cheeseballs are a golden brown (about 15 to 25 minutes).', section: SECTIONS.BAKE, img: cooked },
        { step: 'Serve these warm.', section: SECTIONS.DOUGH, img: plated },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'From frozen, bake at 400ºF until golden and puffy (about 25 to 30 minutes).',
        },
    ],
    mealPrep: true,
};