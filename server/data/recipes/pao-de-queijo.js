const cheeseball1 = '../assets/Products/pao-de-queijo-1.jpeg';
const cheeseball2 = '../assets/Products/pao-de-queijo-2.jpeg';
const cheeseball3 = '../assets/Products/pao-de-queijo-3.jpeg';
const cheeseball4 = '../assets/Products/pao-de-queijo-4.jpeg';
const cheeseball5 = '../assets/Products/pao-de-queijo-5.jpeg';
const cheeseball6 = '../assets/Products/pao-de-queijo-6.jpeg';
const cheeseball7 = '../assets/Products/pao-de-queijo-7.jpeg';
const cheeseball8 = '../assets/Products/pao-de-queijo-8.jpeg';
const cheeseball9 = '../assets/Products/pao-de-queijo-9.jpeg';
const cheeseball10 = '../assets/Products/pao-de-queijo-10.jpeg';
const cheeseball11 = '../assets/Products/pao-de-queijo-11.jpeg';
const cheeseball12 = '../assets/Products/pao-de-queijo-12.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BAKING_SHEET,
    EGG,
    MILK,
    MOZZARELLA_CHEESE,
    OVEN,
    PARMESAN_CHEESE,
    SALT,
    SPATULA,
    STAND_MIXER,
    TAPIOCA_STARCH,
    VEGETABLE_OIL,
    WATER,
} = require('./ingredients');

const STARCH_SECTION = 'Starch';
const LIQUID_SECTION = 'Liquid';
const CHEESES_SECTION = 'Cheeses';

module.exports = {
    cardName: 'Pao de Queijo',
    name: 'Pao de Queijo',
    img: cheeseball10,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.BRAZILIAN, GENRES.LATIN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD, TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Brazilian Cheese Bread',
            link: "https://www.oliviascuisine.com/authentic-brazilian-cheese-bread/",
            authors: ['Olivia Mesquita'],
            finder: 'Kevin Ung',
        }
    ],
    separated: true,
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
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.PREHEAT_OVEN },
        
        { step: 'In a stand mixer bowl, combine tapioca flour.', section: SECTIONS.PREP_DOUGH, img: cheeseball1 },
        { step: 'Over medium-high heat, combine milk, water, oil and salt in a saucepan.', section: SECTIONS.PREP_DOUGH, img: cheeseball2 },
        { step: 'Bring to a boil.', section: SECTIONS.PREP_DOUGH, img: cheeseball3 },
        { step: 'Pour the boiled milk into the stand mixer bowl.', section: SECTIONS.PREP_DOUGH, img: cheeseball4 },
        { step: 'Turn on the mixer slowly and mix until the dough is white and sticky.', section: SECTIONS.PREP_DOUGH },
        { step: 'Slowly add eggs, one at a time, until it is mixed.', section: SECTIONS.PREP_DOUGH },
        { step: 'Slowly add the cheeses until it is well mixed.', section: SECTIONS.PREP_DOUGH, img: cheeseball5 },
        { step: 'The dough will most likely be sticky, so I added about another cup of tapioca starch to thicken the batter. Slowly add the cornstarch.', section: SECTIONS.PREP_DOUGH, img: cheeseball6 },
        { step: 'Shape the dough into 1.5 inch balls.', section: SECTIONS.PREP_DOUGH, img: cheeseball7 },
        { step: 'Place on a baking sheet about 2 inches apart. They do not expand very much.', section: SECTIONS.PREP_DOUGH, img: cheeseball8 },

        { step: 'Bake until the cheeseballs are a golden brown (about 15 to 25 minutes).', section: SECTIONS.BAKE, img: [cheeseball9, cheeseball12] },

        { step: 'Serve these warm.', section: SECTIONS.SERVE, img: cheeseball11 },
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