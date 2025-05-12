// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { CREAM_CHEESE, CHOCOLATE_INSTANT_PUDDING_MIX, MILK, GRAHAM_CRACKER, WHITE_SUGAR, SALT, UNSALTED_BUTTER, HEAVY_CREAM, POWDERED_SUGAR, RICOTTA_CHEESE, ORANGE_ZEST, VANILLA_EXTRACT, MINI_CHOCOLATE_CHIPS } = require('./ingredients');

const PUDDING_MIXTURE_SECTION = 'Pudding Mixture';
const GRAHAM_CRACKER_CRUST_SECTION = 'Graham Cracker Mixture';
const WHIPPED_CREAM_SECTION = 'Whipped Cream';
const CREAM_CHEESE_MIXTURE = 'Cream Cheese Mixture';

const PREP_PUDDING_MIXTURE = 'Prep Pudding Mixture';
const MAKE_GRAHAM_CRACKER_CRUST = 'Make Graham Cracker Crust';
const WHIP_CREAM = 'Whip Cream';
const MAKE_CREAM_CHEESE_MIXTURE = 'Make Cream Cheese Mixture';
const ASSEMBLE = 'Assemble';
const CUT = 'Cut';

module.exports = {
    wip: true,
    cardName: 'Cannoli Delight',
    name: 'No Bake Cannoli Delight',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ITALIAN],
    method: [METHODS.MIX, METHODS.CHILLED],
    type: [TYPES.DESSERT],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'No Bake Cannoli Delight', link: 'https://www.thekitchn.com/cannoli-delight-recipe-23718781' }
    ],
    separated: true,
    ingredients: [
        { ...CHOCOLATE_INSTANT_PUDDING_MIX, amount: 3.9, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PUDDING_MIXTURE_SECTION },
        { ...MILK, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUDDING_MIXTURE_SECTION },

        { ...GRAHAM_CRACKER, amount: 6.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: GRAHAM_CRACKER_CRUST_SECTION },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GRAHAM_CRACKER_CRUST_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GRAHAM_CRACKER_CRUST_SECTION },
        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: GRAHAM_CRACKER_CRUST_SECTION },

        { ...HEAVY_CREAM, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WHIPPED_CREAM_SECTION },
        { ...POWDERED_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WHIPPED_CREAM_SECTION },

        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'room temperature', section: CREAM_CHEESE_MIXTURE },
        { ...RICOTTA_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_CHEESE_MIXTURE },
        { ...POWDERED_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_CHEESE_MIXTURE },
        { ...ORANGE_ZEST, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CREAM_CHEESE_MIXTURE },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CREAM_CHEESE_MIXTURE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CREAM_CHEESE_MIXTURE },

        { ...MINI_CHOCOLATE_CHIPS, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'medium bowl' },
        { name: 'whisk' },
        { name: 'spatula' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Pudding Mixture" section ingredients. Mix until it begins to thicken (about 2 minutes).', section: PREP_PUDDING_MIXTURE },
        { step: 'Set aside. It will continue to thicken.', section: PREP_PUDDING_MIXTURE },

        { step: 'Line a baking sheet with two sheets of parchment paper (perpendicular of each other).', section: MAKE_GRAHAM_CRACKER_CRUST },
        { step: 'In a stand mixer, combine all the "Graham Cracker Crust Mixture" section ingredients except the melted butter.', section: MAKE_GRAHAM_CRACKER_CRUST },
        { step: 'Crush until it becomes like sand (about 15 to 30 seconds).', section: MAKE_GRAHAM_CRACKER_CRUST },
        { step: 'Add melted butter. Mix until combined.', section: MAKE_GRAHAM_CRACKER_CRUST },
        { step: 'Transfer graham cracker crust mixture onto the baking sheet.', section: MAKE_GRAHAM_CRACKER_CRUST },
        { step: 'Use your fingers or the bottom of a measuring cup to flatten the crust to an even layer.', section: MAKE_GRAHAM_CRACKER_CRUST },
        { step: 'Place the crust in the fridge.', section: MAKE_GRAHAM_CRACKER_CRUST },

        { step: 'In a medium bowl, combine the "Whipping Cream" section ingredients.', section: WHIP_CREAM },
        { step: 'Whisk until stiff peaks form (about 2 to 4 minutes).', section: WHIP_CREAM },

        { step: 'In a stand mixer, combine the "Cream Cheese Mixture" section ingredients.', section: MAKE_CREAM_CHEESE_MIXTURE },
        { step: 'Mix until light and fluffy (about 3 minutes). Scrape sides as needed during this process.', section: MAKE_CREAM_CHEESE_MIXTURE },
        { step: 'Fold in 1 cup of the whipped cream and 1/2 cup of the mini chocolate chips with a spatula.', section: MAKE_CREAM_CHEESE_MIXTURE },

        { step: 'Evenly layer the cream cheese mixture over the crust.', section: ASSEMBLE },
        { step: 'Evenly layer the chocolate pudding.', section: ASSEMBLE },
        { step: 'Evenly layer the whipped cream.', section: ASSEMBLE },
        { step: 'Cover and chill for at least 4 hours (or overnight).', section: ASSEMBLE },

        { step: 'Sprinkle the remaining chocolate chips on top.', section: CUT },
        { step: 'Carefully transfer the parchment paper slab over to a cutting board.', section: CUT },
        { step: 'Cut--wiping the knife between cuts.', section: CUT },

        { step: 'Enjoy this layered dessert', section: SECTIONS.SERVE },
    ]
};