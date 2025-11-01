const bars1 = '../assets/Products/lemon-bars-1.jpeg';
const bars2 = '../assets/Products/lemon-bars-2.jpeg';
const bars3 = '../assets/Products/lemon-bars-3.jpeg';
const bars4 = '../assets/Products/lemon-bars-4.jpeg';
const bars5 = '../assets/Products/lemon-bars-5.jpeg';
const bars6 = '../assets/Products/lemon-bars-6.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, EGG, LEMON_JUICE, LEMON_ZEST, MIXING_BOWL, OVEN, PARCHMENT_PAPER, POWDERED_SUGAR, SALT, UNSALTED_BUTTER, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Lemon Bars',
    name: 'Lemon Bars',
    img: bars6,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.BAR],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Lemon Bars', 
            link: "https://preppykitchen.com/lemon-bars",
            authors: ['John Kanell'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...POWDERED_SUGAR, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: 12, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.CRUST },

        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...LEMON_ZEST, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...EGG, amount: 8, unit: '', additionalDetails: 'room temperature', section: SECTIONS.FILLING },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'fresh', section: SECTIONS.FILLING },

        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        PARCHMENT_PAPER,
        MIXING_BOWL,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Line a baking pan with parchment paper.`, section: SECTIONS.MAKE_CRUST },
        { step: `In a mixing bowl, combine the flour, powdered sugar and salt.`, section: SECTIONS.MAKE_CRUST },
        { step: `Add the butter and mix.`, section: SECTIONS.MAKE_CRUST },
        { step: `Pour batter into baking pan and spread the batter until it coats the entire bottom and is an even layer.`, section: SECTIONS.PREP_CRUST, img: bars1 },
        { step: `Bake until it is a light golden color (about 20 minutes).`, section: SECTIONS.MAKE_CRUST, img: bars2 },

        { step: `In a mixing bowl, combine sugar and lemon zest.`, section: SECTIONS.FILLING },
        { step: `Add flour and mix.`, section: SECTIONS.FILLING },
        { step: `Add lemon juice and eggs. Mix.`, section: SECTIONS.FILLING, img: bars3 },

        { step: `Pour the filling mixture onto the cooked crust.`, section: SECTIONS.BAKE, img: bars4 },
        { step: `Bake for 25 minutes (turning the pan about halfway). They will continue to set as they cool.`, section: SECTIONS.BAKE },

        { step: `Remove from the oven and let it cool for an hour.`, section: SECTIONS.COOL },
        
        { step: `Chill in the fridge for 2 hours`, section: SECTIONS.CHILL },

        { step: `Top with powdered sugar.`, section: SECTIONS.SERVE, img: bars5 },
        { step: `Wet a sharp knife between cuts.`, section: SECTIONS.SERVE },
        { step: `Enjoy these sweet and tart treats.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};