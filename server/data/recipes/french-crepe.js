const crepe1 = '../assets/Products/crepe-1.jpeg';
const crepe2 = '../assets/Products/crepe-2.jpeg';
const crepe3 = '../assets/Products/crepe-3.jpeg';
const crepe4 = '../assets/Products/crepe-4.jpeg';
const crepe5 = '../assets/Products/crepe-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    BANANA,
    BLUEBERRY,
    EGG,
    FRYING_PAN,
    LEMON_JUICE,
    MEASURING_CUPS,
    MEASURING_SPOONS,
    MILK,
    MIXING_BOWL,
    NUTELLA,
    PEANUT_BUTTER,
    POWDERED_SUGAR,
    SALT,
    STOVE,
    STRAWBERRY,
    SWEET_CHOCOLATE,
    SYRUP,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WATER,
    WHIPPED_CREAM,
    WHISK,
} = require('./ingredients');

const CREPE_BATTER = 'Crepe batter';
const MELTED_CHOCOLATE = 'Melted chocolate';

module.exports = {
    cardName: 'Crepe',
    name: 'Crepe',
    img: crepe4,
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.DESSERT, TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.PEANUT, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Sam Giraud-Carrier'],
            finder: 'Sam Giraud-Carrier'
        }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREPE_BATTER },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: CREPE_BATTER },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREPE_BATTER },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: CREPE_BATTER },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CREPE_BATTER },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CREPE_BATTER },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: CREPE_BATTER },

        { ...STRAWBERRY, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...BLUEBERRY, amount: '', unit: '', additionalDetails: 'halved', section: SECTIONS.TOPPINGS },
        { ...BANANA, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...NUTELLA, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PEANUT_BUTTER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...WHIPPED_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SWEET_CHOCOLATE, amount: '', unit: '', additionalDetails: 'melted', section: SECTIONS.TOPPINGS },
        { ...SYRUP, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LEMON_JUICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        { ...FRYING_PAN, additionalDetails: 'curved rim' },
        WHISK,
        MEASURING_SPOONS,
        MEASURING_CUPS,
    ],
    directions: [
        { step: 'In a mixing bowl, mix together the flour, eggs, milk, salt, vanilla, and water, and butter.', section: SECTIONS.MAIN, img: crepe1 },
        { step: 'Over medium-high heat, add a little butter to a curvy pan.', section: SECTIONS.MAIN },
        { step: 'Use a 1/4-cup measuring cup and ladle some of the crepe batter into the pan. Be sure to tilt and angle the pan so that it spreads evenly and very thin in the pan.', section: SECTIONS.MAIN, img: [crepe2, crepe3] },
        { step: 'Cook for about 2 minutes on each side. Carefully flip by loosening the edges then flip.', section: SECTIONS.MAIN },
        { step: 'Continue this for each of the crepes. As the crepes begin to stick, add some more of the butter.', section: SECTIONS.MAIN },
        { step: 'Add your favorite toppings, fold them however you like, and enjoy this ingenious, light French dish: sweet, savory or a combination of both! Best eaten fresh!', section: SECTIONS.SERVE },
        { step: 'Mix together some semisweet chocolate chips, milk, and sugar in a microwavable bowl. Heat in the microwave for 30 second intervals and mix.', section: MELTED_CHOCOLATE, img: crepe5 },
        { step: 'Heat this closer to when you are about to use it.', section: MELTED_CHOCOLATE },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};