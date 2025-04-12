// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, WHITE_SUGAR, LEMON_ZEST, BAKING_POWDER, SALT, UNSALTED_BUTTER, EGG, EGG_YOLKS, VANILLA_EXTRACT, CHERRY, LEMON_JUICE, CORNSTARCH, DARK_COOKING_CHOCOLATE } = require('./ingredients');

const DOUGH_SECTION = 'Dough';
const FILLING_SECTION = 'Filling';
const ASSEMBLY_SECTION = 'Assembly';

const MAKE_DOUGH = 'Make Dough';
const MAKE_FILLING = 'Make Filling';
const ASSEMBLE_CROSTATA = 'Assemble Crostata';

module.exports = {
    wip: true,
    cardName: 'Cherry Crostata',
    name: 'Cherry and Dark Chocolate Crostata',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
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
        { label: 'Cherry and Dark Chocolate Crostata', link: 'https://www.bonappetit.com/recipe/cherry-and-dark-chocolate-crostata' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...LEMON_ZEST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: 11, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chilled and divided', section: DOUGH_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: DOUGH_SECTION },
        { ...EGG_YOLKS, amount: 1, unit: '', additionalDetails: '', section: DOUGH_SECTION },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },

        { ...CHERRY, amount: 10 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'pitted', section: FILLING_SECTION },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FILLING_SECTION },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FILLING_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: FILLING_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FILLING_SECTION },
        { ...DARK_COOKING_CHOCOLATE, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: ASSEMBLY_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: ASSEMBLY_SECTION },
    ],
    appliances: [
        { name: 'stand mixer' },
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'pie dish' },
        { name: 'dough knife' },
    ],
    directions: [
        { step: 'In a stand mixer, combine the flour, sugar, lemon zest, baking powder and salt.', type: MAKE_DOUGH },
        { step: 'Add butter. Mix until it looks like wet sand.', type: MAKE_DOUGH },
        { step: 'Add egg, yolk and vanilla. Mix. It will be crumbly but hold together.', type: MAKE_DOUGH },
        { step: 'Transfer to a clean surface and flatten dough to a disc.', type: MAKE_DOUGH },
        { step: 'Move to a plate and wrap. Chill for 1 hour.', type: MAKE_DOUGH },

        { step: 'Over medium heat, add cherries, lemon juice, cornstarch, salt and sugar to a saucepan. Stir occasionally and cook until burst (about 6 to 8 minutes).', type: MAKE_FILLING },
        { step: 'Let cool for at least 15 minutes.', type: MAKE_FILLING },

        { step: 'Position the oven rack in the center. Preheat the oven to 350ºF.', type: ASSEMBLE_CROSTATA },
        { step: 'Roll out dough to 1/4" thick.', type: ASSEMBLE_CROSTATA },
        { step: 'Place the dough in the pie dish. Press sides. Trim any excess dough.', type: ASSEMBLE_CROSTATA },
        { step: 'Add chocolate pieces to the pie and pour filling over that.', type: ASSEMBLE_CROSTATA },
        { step: 'Re-roll the excess dough. Cut into strips to make a lattice top.', type: ASSEMBLE_CROSTATA },
        { step: 'Brush dough with egg wash.', type: ASSEMBLE_CROSTATA },
        { step: 'Bake until golden brown (about 20 to 25 minutes).', type: ASSEMBLE_CROSTATA },
        { step: 'Let it cool for 15 minutes.', type: ASSEMBLE_CROSTATA },

        { step: 'Enjoy this delicious dessert.', type: SECTIONS.SERVE },
    ]
};