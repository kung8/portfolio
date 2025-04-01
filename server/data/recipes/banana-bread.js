const { CATEGORIES, SECTIONS, GENRES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const creamedSugar = '../assets/Products/banana-bread-creamed-sugar.jpeg';
const mixture = '../assets/Products/banana-bread-flour-mixture.jpeg';
const mashed = '../assets/Products/banana-bread-mashed-banana.jpeg';
// const batter = '../assets/Products/banana-bread-batter.jpeg';
const zoomed = '../assets/Products/banana-bread-with-chocolate-chips-side-view.jpeg';
// const raw = '../assets/Products/banana-bread-with-chocolate-chips-raw.jpeg';
const baked = '../assets/Products/banana-bread-with-chocolate-chips-baked.jpeg';
const walnuts = '../assets/Products/banana-bread-with-walnuts-and-nutmeg.jpeg';
const walnutsBatter = '../assets/Products/banana-bread-batter-with-walnuts-and-nutmeg.jpeg';
const {
    BANANA,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    EGG,
    ALL_PURPOSE_FLOUR,
    BAKING_SODA,
    SALT,
    VANILLA_EXTRACT,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    WALNUTS,
    NUTMEG
} = require('./ingredients');

module.exports = {
    cardName: 'Banana Bread',
    name: 'Banana Bread',
    img: zoomed,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    type: [CATEGORIES.DESSERT],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Banana Bread', link: 'https://natashaskitchen.com/banana-bread-recipe-video/' }
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
        { ...NUTMEG, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'optional', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'large bowl' },
        { name: 'rubber spatula' },
        { name: 'bread pan' },
        { name: 'toothpick' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'In large bowl, cream together the softened butter and sugar.', type: SECTIONS.MAIN, img: creamedSugar },
        { step: 'In mixing bowl, mash bananas until its consistency is smooth.', type: SECTIONS.MAIN, img: mashed },
        { step: 'Add the butter and sugar and eggs to the bananas.', type: SECTIONS.MAIN },
        { step: 'In the large bowl, combine flour, baking soda, and salt. Then add to the batter.', type: SECTIONS.MAIN, img: mixture },
        { step: 'Add vanilla to the batter.', type: SECTIONS.MAIN },
        { step: 'Add chocolate chips, nutmeg and walnuts to the batter. Feel free to experiment with your favorite ingredients.', type: SECTIONS.MAIN, img: walnutsBatter },
        { step: 'Pour the batter into the bread pan.', type: SECTIONS.MAIN, img: walnuts },
        { step: 'Bake for 55 to 60 minutes, or until a toothpick inserted into the center comes out clean.', type: SECTIONS.MAIN },
        { step: 'Let bread rest for 10 minutes before serving.', type: SECTIONS.MAIN, img: baked },
    ]
};