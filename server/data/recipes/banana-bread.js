const bread1 = '../assets/Products/banana-bread-1.jpeg';
const bread2 = '../assets/Products/banana-bread-2.jpeg';
const bread3 = '../assets/Products/banana-bread-3.jpeg';
const bread4 = '../assets/Products/banana-bread-4.jpeg';
const bread5 = '../assets/Products/banana-bread-5.jpeg';
const bread6 = '../assets/Products/banana-bread-6.jpeg';
const bread7 = '../assets/Products/banana-bread-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, YIELD_UNITS } = require('./constants');

const BANANA_SECTION = 'Banana';
const CREAMED_BUTTER_SECTION = 'Creamed Butter';
const VANILLA_SECTION = 'Vanilla';
const ADDITIONAL_INGREDIENTS = 'Additional Ingredients';

const MASH_BANANA = 'Mash Banana';

const {
    ALL_PURPOSE_FLOUR,
    BAKING_SODA,
    BANANA,
    BREAD_PAN,
    EGG,
    LARGE_BOWL,
    MIXING_BOWL,
    OVEN,
    RUBBER_SPATULA,
    SALT,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    TOOTHPICK,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WALNUTS,
    WHITE_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Banana Bread',
    name: 'Banana Bread',
    img: bread7,
    available: true,
    recommended: true,
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    type: [CATEGORIES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.TREE_NUT, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Banana Bread',
            link: 'https://natashaskitchen.com/banana-bread-recipe-video/',
            authors: ['Natasha Kravchuk'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...BANANA, amount: 3, unit: '', additionalDetails: '', section: BANANA_SECTION },

        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room temperature', section: CREAMED_BUTTER_SECTION },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAMED_BUTTER_SECTION },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.EGGS },

        { ...ALL_PURPOSE_FLOUR, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_SECTION },

        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'optional', section: ADDITIONAL_INGREDIENTS },
        { ...WALNUTS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'optional', section: ADDITIONAL_INGREDIENTS },
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        MIXING_BOWL,
        LARGE_BOWL,
        RUBBER_SPATULA,
        BREAD_PAN,
        TOOTHPICK,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.PREHEAT_OVEN },

        { step: `In large bowl, cream together the "${CREAMED_BUTTER_SECTION}" section ingredients.`, section: SECTIONS.CREAM_BUTTER, img: bread1 },

        { step: 'In mixing bowl, mash bananas until its consistency is smooth.', section: MASH_BANANA, img: bread2 },

        { step: 'In the mixing bowl with the mashed bananas, add the creamed butter and eggs.', section: SECTIONS.PREP_BATTER },

        { step: `In the large bowl, combine the "${SECTIONS.DRY_INGREDIENTS}" section ingredients. Transfer to the wet ingredients.`, section: SECTIONS.PREP_BATTER, img: bread3 },
        { step: 'Add vanilla.', section: SECTIONS.PREP_BATTER },
        { step: 'Optionally add chocolate chips, walnuts or your favorite ingredients.', section: SECTIONS.PREP_BATTER, img: bread4 },

        { step: 'Pour the batter into the bread pan.', section: SECTIONS.PREP_PAN, img: bread5 },

        { step: 'Bake until an inserted toothpick comes out clean (about 55 to 60 minutes).', section: SECTIONS.BAKE },

        { step: 'Let bread rest for 10 minutes before serving.', section: SECTIONS.SERVE, img: bread6 },
    ],
    notes: [
        { note: 'Feel free to experiment with your favorite ingredients.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};