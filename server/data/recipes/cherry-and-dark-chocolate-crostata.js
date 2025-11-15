const crostata1 = '../assets/Products/cherry-crostata-1.jpeg';
const crostata2 = '../assets/Products/cherry-crostata-2.jpeg';
const crostata3 = '../assets/Products/cherry-crostata-3.jpeg';
const crostata4 = '../assets/Products/cherry-crostata-4.jpeg';
const crostata5 = '../assets/Products/cherry-crostata-5.jpeg';
const crostata6 = '../assets/Products/cherry-crostata-6.jpeg';
const crostata7 = '../assets/Products/cherry-crostata-7.jpeg';
const crostata8 = '../assets/Products/cherry-crostata-8.jpeg';
const crostata9 = '../assets/Products/cherry-crostata-9.jpeg';
const crostata10 = '../assets/Products/cherry-crostata-10.jpeg';
const crostata11 = '../assets/Products/cherry-crostata-11.jpeg';
const crostata12 = '../assets/Products/cherry-crostata-12.jpeg';
const crostata13 = '../assets/Products/cherry-crostata-13.jpeg';
const crostata14 = '../assets/Products/cherry-crostata-14.jpeg';
const crostata15 = '../assets/Products/cherry-crostata-15.jpeg';
const crostata16 = '../assets/Products/cherry-crostata-16.jpeg';
const crostata17 = '../assets/Products/cherry-crostata-17.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, CHERRY, CORNSTARCH, DARK_COOKING_CHOCOLATE, DOUGH_KNIFE, EGG, EGG_YOLK, LEMON_JUICE, LEMON_ZEST, OVEN, PIE_PAN, SALT, SAUCEPAN, STAND_MIXER, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Cherry Crostata',
    name: 'Cherry and Dark Chocolate Crostata',
    img: crostata17,
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    type: [TYPES.PIE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 90, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Cherry and Dark Chocolate Crostata', 
            link: 'https://www.bonappetit.com/recipe/cherry-and-dark-chocolate-crostata',
            authors: ['Stefano Secchi'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...LEMON_ZEST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: 11, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chilled and divided', section: SECTIONS.DOUGH },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },

        { ...CHERRY, amount: 10 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'pitted', section: SECTIONS.FILLING },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },

        { ...DARK_COOKING_CHOCOLATE, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: SECTIONS.ASSEMBLY },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLY },
    ],
    appliances: [
        STAND_MIXER,
        STOVE,
        OVEN,
    ],
    supplies: [
        SAUCEPAN,
        PIE_PAN,
        DOUGH_KNIFE
    ],
    directions: [
        { step: `In a stand mixer, combine the flour, sugar, lemon zest, baking powder and salt.`, section: SECTIONS.MAKE_DOUGH, img: crostata1 },
        { step: `Add butter. Mix until it looks like wet sand.`, section: SECTIONS.MAKE_DOUGH, img: [crostata2, crostata3] },
        { step: `Add egg, yolk and vanilla. Mix. It will be crumbly but hold together.`, section: SECTIONS.MAKE_DOUGH, img: [crostata4, crostata5] },
        { step: `Transfer to a clean surface and flatten dough to a disc.`, section: SECTIONS.MAKE_DOUGH, img: [crostata6, crostata7] },
        { step: `Move to a plate and wrap. Chill for 1 hour.`, section: SECTIONS.MAKE_DOUGH, img: crostata8 },

        { step: `Over medium heat, add cherries, lemon juice, cornstarch, salt and sugar to a saucepan. Stir occasionally and cook until burst (about 6 to 8 minutes).`, section: SECTIONS.PREP_FILLING, img: [crostata9, crostata10] },
        { step: `Let cool for at least 15 minutes.`, section: SECTIONS.PREP_FILLING },

        { step: `Position the oven rack in the center. Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Roll out dough to 1/4" thick.`, section: SECTIONS.ASSEMBLE, img: crostata11 },
        { step: `Place the dough in the pie dish. Press sides. Trim any excess dough.`, section: SECTIONS.ASSEMBLE, img: crostata12 },
        { step: `Add chocolate pieces to the pie and pour filling over that.`, section: SECTIONS.ASSEMBLE, img: [crostata13, crostata14] },
        { step: `Re-roll the excess dough. Cut into strips to make a lattice top.`, section: SECTIONS.ASSEMBLE, img: crostata15 },
        { step: `Brush dough with egg wash.`, section: SECTIONS.ASSEMBLE, img: crostata16 },
        { step: `Bake until golden brown (about 20 to 25 minutes).`, section: SECTIONS.ASSEMBLE },
        { step: `Let it cool for 15 minutes.`, section: SECTIONS.ASSEMBLE },

        { step: `Enjoy this delicious dessert.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};