// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { ALL_PURPOSE_FLOUR, POWDERED_SUGAR, SALT, UNSALTED_BUTTER, LEMON_ZEST, WHITE_SUGAR, EGGS, LEMON_JUICE } = require('./ingredients');

module.exports = {
    cardName: 'Lemon Bars',
    name: 'Lemon Bars',
    img: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.BAR],
    yields: ' servings',
    prepTime: '20 m',
    cookTime: '55 m',
    websites: ["https://preppykitchen.com/lemon-bars"],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '2 1/2 c', additionalDetails: '', section: SECTIONS.CRUST },
        { ...POWDERED_SUGAR, amount: '2/3 c', additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: '12 Tbsp', additionalDetails: 'melted', section: SECTIONS.CRUST },

        { ...WHITE_SUGAR, amount: '3 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...LEMON_ZEST, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...ALL_PURPOSE_FLOUR, amount: '1/2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...EGGS, amount: '8', additionalDetails: 'room temperature', section: SECTIONS.FILLING },
        { ...LEMON_JUICE, amount: '1 c', additionalDetails: 'fresh', section: SECTIONS.FILLING },
        
        { ...POWDERED_SUGAR, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'parchment paper' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.CRUST },
        { step: 'Line a baking pan with parchment paper.', type: SECTIONS.CRUST },
        { step: 'In a mixing bowl, combine the flour, powdered sugar and salt.', type: SECTIONS.CRUST },
        { step: 'Add the butter and mix.', type: SECTIONS.CRUST },
        { step: 'Pour batter into baking pan and spread the batter until it coats the entire bottom and is an even layer.', type: SECTIONS.CRUST },
        { step: 'Bake until it is a light golden color (about 20 minutes).', type: SECTIONS.CRUST },
        { step: 'In a mixing bowl, combine sugar and lemon zest.', type: SECTIONS.FILLING },
        { step: 'Add flour and mix.', type: SECTIONS.FILLING },
        { step: 'Add lemon juice and eggs. Mix.', type: SECTIONS.FILLING },
        { step: 'Pour the filling mixture onto the cooked crust.', type: SECTIONS.MAIN },
        { step: 'Bake for 25 minutes (turning the pan about halfway). They will continue to set as they cool.', type: SECTIONS.MAIN },
        { step: 'Remove from the oven and let it cool for an hour.', type: SECTIONS.MAIN },
        { step: 'Chill in the fridge for 2 hours', type: SECTIONS.MAIN },
        { step: 'Top with powdered sugar.', type: SECTIONS.MAIN },
        { step: 'Wet a sharp knife between cuts.', type: SECTIONS.MAIN },
        { step: 'Enjoy these sweet and tart treats.', type: SECTIONS.TOPPINGS },
    ]
};