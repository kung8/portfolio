const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { ALL_PURPOSE_FLOUR, UNSALTED_BUTTER, PEANUT_BUTTER, BROWN_SUGAR, WHITE_SUGAR, VANILLA_EXTRACT, EGGS, BAKING_POWDER, SALT } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Peanut Butter Cookies',
    name: 'Peanut Butter Cookies',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    yields: '18 cookies',
    prepTime: '1 m',
    cookTime: '10 m',
    websites: [
        { label: 'Peanut Butter Cookies', link: 'https://preppykitchen.com/peanut-butter-cookies-recipe/' }
    ],
    separated: false,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: '1 1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: '3/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stand mixer' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'In a stand mixer, cream together butter, white sugar, and brown sugar.', type: SECTIONS.MAIN },
        { step: 'Mix in salt.', type: SECTIONS.MAIN },
        { step: 'Mix in peanut butter.', type: SECTIONS.MAIN },
        { step: 'Mix in egg and vanilla.', type: SECTIONS.MAIN },
        { step: 'Mix in flour and baking powder.', type: SECTIONS.MAIN },
        { step: 'Place the silicon baking mat on the baking sheet.', type: SECTIONS.MAIN },
        { step: 'Form one inch dough balls and place on the mats.', type: SECTIONS.MAIN },
        { step: 'Flatten the cookies with a fork to form a crisscross pattern.', type: SECTIONS.MAIN },
        { step: 'Bake for 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Let cookies completely cool before transferring. They will continue to set while on the baking sheet.', type: SECTIONS.MAIN },
        { step: 'Enjoy these light, delicious cookies.', type: SECTIONS.SERVE },
    ]
};