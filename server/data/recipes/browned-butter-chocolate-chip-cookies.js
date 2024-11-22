// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BROWNED_BUTTER, BROWN_SUGAR, WHITE_SUGAR, VANILLA_EXTRACT, EGGS, EGG_YOLKS, CAKE_FLOUR, ALL_PURPOSE_FLOUR, CORNSTARCH, BAKING_SODA, SALT, SEMI_SWEET_CHOCOLATE_CHIPS, WALNUTS, MILK_CHOCOLATE } = require('./ingredients');

const BROWNED_BUTTER_SECTION = 'Browned Butter';
const SUGARS = 'Sugars';
const EGGS_SECTION = 'Eggs';
const FLOURS = 'Flours';

module.exports = {
    cardName: 'Browned Butter Cookies',
    name: 'Browned Butter Chocolate Chip Cookies',
    img: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    yields: '8 to 24 servings',
    prepTime: '15 m',
    cookTime: '11 m',
    separated: true,
    ingredients: [
        { ...BROWNED_BUTTER, amount: '1 c', additionalDetails: '', section: BROWNED_BUTTER_SECTION, link: { id: 'browned-butter', url: 'recipes/browned-butter' } },
        { ...BROWN_SUGAR, amount: '1 c', additionalDetails: '', section: SUGARS },
        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: SUGARS },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: SUGARS },
        { ...EGGS, amount: '2', additionalDetails: '', section: EGGS_SECTION },
        { ...EGG_YOLKS, amount: '1', additionalDetails: '', section: EGGS_SECTION },
        { ...CAKE_FLOUR, amount: '1 1/2 c', additionalDetails: '', section: FLOURS },
        { ...ALL_PURPOSE_FLOUR, amount: '1 1/2 c', additionalDetails: '', section: FLOURS },
        { ...CORNSTARCH, amount: '1 tsp', additionalDetails: '', section: FLOURS },
        { ...BAKING_SODA, amount: '3/4 tsp', additionalDetails: '', section: FLOURS },
        { ...SALT, amount: '3/4 tsp', additionalDetails: '', section: FLOURS },
        { ...MILK_CHOCOLATE, amount: '8 oz', additionalDetails: 'chopped', section: SECTIONS.FILLING },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: '1/2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...WALNUTS, amount: '2 c', additionalDetails: 'chopped', section: SECTIONS.FILLING },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'mixing bowl' },
        { name: 'silicon baking mats' },
        { name: 'baking sheets' },
        { name: 'cooling rack' },
    ],
    directions: [
        { step: 'Preheat the oven to 415ºF.', type: SECTIONS.MAIN },
        { step: 'Place silicon baking mats on baking sheets.', type: SECTIONS.MAIN },
        { step: 'In a mixing bowl, combine the "Sugars" ingredients.', type: SECTIONS.MAIN },
        { step: 'Add the "Eggs" ingredients one at a time.', type: SECTIONS.MAIN },
        { step: 'Add the "Flours" ingredients.', type: SECTIONS.MAIN },
        { step: 'Add the "Filling" ingredients. Mix together. Dough will be crumbly. But you can add 1 to 2 tablespoons of water if you feel it will not stick together.', type: SECTIONS.MAIN },
        { step: 'Divide the dough into 8 to 24 mounds (depending on how large you want the cookies). They will look about the same when they finish.', type: SECTIONS.MAIN },
        { step: 'Bake until golden brown (about 8 to 11 minutes).', type: SECTIONS.MAIN },
        { step: 'Let the cookies cool on a cooling rack (about 10 minutes).', type: SECTIONS.MAIN },
        { step: 'Enjoy these warm, fluffy, gooey treats.', type: SECTIONS.MAIN },
    ]
};