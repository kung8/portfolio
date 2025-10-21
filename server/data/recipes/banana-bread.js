const bread1 = '../assets/Products/banana-bread-1.jpeg';
const bread2 = '../assets/Products/banana-bread-2.jpeg';
const bread3 = '../assets/Products/banana-bread-3.jpeg';
const bread4 = '../assets/Products/banana-bread-4.jpeg';
const bread5 = '../assets/Products/banana-bread-5.jpeg';
const bread6 = '../assets/Products/banana-bread-6.jpeg';
const bread7 = '../assets/Products/banana-bread-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, YIELD_UNITS } = require('./constants');

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
            author: ['Natasha Kravchuk'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BANANA, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room temperature', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...WALNUTS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'optional', section: SECTIONS.MAIN },
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
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'In large bowl, cream together the softened butter and sugar.', section: SECTIONS.MAIN, img: bread1 },
        { step: 'In mixing bowl, mash bananas until its consistency is smooth.', section: SECTIONS.MAIN, img: bread2 },
        { step: 'Add the butter and sugar and eggs to the bananas.', section: SECTIONS.MAIN },
        { step: 'In the large bowl, combine flour, baking soda, and salt. Then add to the batter.', section: SECTIONS.MAIN, img: bread3 },
        { step: 'Add vanilla to the batter.', section: SECTIONS.MAIN },
        { step: 'Add chocolate chips and walnuts to the batter. Feel free to experiment with your favorite ingredients.', section: SECTIONS.MAIN, img: bread4 },
        { step: 'Pour the batter into the bread pan.', section: SECTIONS.MAIN, img: bread5 },
        { step: 'Bake for 55 to 60 minutes, or until a toothpick inserted into the center comes out clean.', section: SECTIONS.MAIN },
        { step: 'Let bread rest for 10 minutes before serving.', section: SECTIONS.MAIN, img: bread6 },
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