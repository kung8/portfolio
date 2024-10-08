const batter = '../assets/Products/crepes-batter.jpeg';
const plated1 = '../assets/Products/crepes-plated-1.jpeg';
const plated2 = '../assets/Products/crepes-plated-2.jpeg';
const scoop = '../assets/Products/crepes-scoop-in-pan.jpeg';
const spread = '../assets/Products/crepes-scoop-spread-in-pan.jpeg';
const unmelted = '../assets/Products/crepes-unmelted-chocolate.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    EGGS,
    MILK,
    UNSALTED_BUTTER,
    SALT,
    VANILLA_EXTRACT,
    WARM_WATER,
    STRAWBERRIES,
    BLUEBERRIES,
    BANANA,
    NUTELLA,
    PEANUT_BUTTER,
    WHIPPED_CREAM,
    SWEET_CHOCOLATE,
    SYRUP,
    POWDERED_SUGAR,
    LEMON_JUICE,
} = require('./ingredients');

const MELTED_CHOCOLATE = 'Melted chocolate';

module.exports = {
    cardName: 'Crepes',
    name: 'Crepes',
    recipeCredit: 'Sam Giraud-Carrier',
    img: plated2,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.DESSERT, TYPES.FINGER_FOOD],
    yields: '4 - 5 servings',
    prepTime: '5 - 8 m',
    cookTime: '15 - 20 m',
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '2', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '2 Tbsp', additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WARM_WATER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...STRAWBERRIES, amount: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...BLUEBERRIES, amount: '', additionalDetails: 'halved', section: SECTIONS.TOPPINGS },
        { ...BANANA, amount: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...NUTELLA, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PEANUT_BUTTER, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...WHIPPED_CREAM, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SWEET_CHOCOLATE, amount: '', additionalDetails: 'melted', section: SECTIONS.TOPPINGS },
        { ...SYRUP, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...POWDERED_SUGAR, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LEMON_JUICE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'curvy frying pan' },
        { name: 'whisk' },
        { name: 'measuring spoon' },
        { name: 'measuring cups' },
    ],
    directions: [
        { step: 'In a mixing bowl, mix together the flour, eggs, milk, salt, vanilla, and water, and butter.', type: SECTIONS.MAIN, img: batter },
        { step: 'Over medium-high heat, add a little butter to a curvy pan.', type: SECTIONS.MAIN },
        { step: 'Use a 1/4-cup measuring cup and ladle some of the crepe batter into the pan. Be sure to tilt and angle the pan so that it spreads evenly and very thin in the pan.', type: SECTIONS.MAIN, img: [scoop, spread] },
        { step: 'Cook for about 2 minutes on each side. Carefully flip by loosening the edges then flip.', type: SECTIONS.MAIN },
        { step: 'Continue this for each of the crepes. As the crepes begin to stick, add some more of the butter.', type: SECTIONS.MAIN },
        { step: 'Add your favorite toppings, fold them however you like, and enjoy this ingenious, light French dish: sweet, savory or a combination of both! Best eaten fresh!', type: SECTIONS.SERVE, img: plated1 },
        { step: 'Mix together some semisweet chocolate chips, milk, and sugar in a microwavable bowl. Heat in the microwave for 30 second intervals and mix.', type: MELTED_CHOCOLATE, img: unmelted },
        { step: 'Heat this closer to when you are about to use it.', type: MELTED_CHOCOLATE },
    ]
};