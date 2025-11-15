// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLUEBERRY,
    BRIOCHE,
    CASSEROLE_DISH,
    CINNAMON,
    CONFECTIONERS_SUGAR,
    EGG,
    MILK,
    MIXING_BOWL,
    OVEN,
    VANILLA_EXTRACT,
    WHISK,
} = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'French Toast Casserole',
    name: 'Blueberry French Toast Casserole',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CASSEROLE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Blueberry French Toast Casserole', 
            link: 'https://mixandmatchmama.com/2025/06/blueberry-french-toast-casserole-3/',
            authors: ['Shay'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BRIOCHE, amount: 1, unit: INGREDIENT_UNITS.LOAF, additionalDetails: 'torn into pieces', section: SECTIONS.BREAD },
        { ...BLUEBERRY, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'fresh', section: SECTIONS.TOPPINGS },

        { ...EGG, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.BATTER },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BATTER },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BATTER },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BATTER },

        { ...MILK, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'for glaze', section: SECTIONS.GLAZE },
        { ...CONFECTIONERS_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'for glaze', section: SECTIONS.GLAZE },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        CASSEROLE_DISH,
        MIXING_BOWL,
        WHISK,
    ],
    directions: [
        { step: `Preheat the oven to 375°F.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Spray a baking dish with cooking spray.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Place torn pieces of bread in the baking dish in an even layer.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Sprinkle blueberries over the bread.`, section: SECTIONS.PREP_CASSEROLE },
        { step: `Set aside.`, section: SECTIONS.PREP_CASSEROLE },

        { step: `In a mixing bowl, combine the "${SECTIONS.BATTER}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `Pour batter.`, section: SECTIONS.PREP_BATTER },


        { step: `Bake until edges are browned and center is set (about 35 minutes).`, section: SECTIONS.BAKE },

        { step: `In a small bowl, combine the "${SECTIONS.GLAZE}" section ingredients.`, section: SECTIONS.PREP_GLAZE },

        { step: `Drizzle with glaze on top right before serving.`, section: SECTIONS.SERVE },
        { step: `Enjoy this delightful breakfast casserole!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave individual portions until heated through (about 1 to 2 mintues).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil. Bake at 350°F until heated through (about 10-15 minutes).',
        },
    ],
    mealPrep: true,
};