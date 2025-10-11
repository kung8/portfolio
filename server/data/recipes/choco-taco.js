// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { FREEZER, MICROWAVE, MIXING_BOWL, PAPER_TOWELS, SAUCEPAN, SEMI_SWEET_CHOCOLATE_CHIPS, STOVE, UNSALTED_PEANUT, VANILLA_ICE_CREAM, WAFFLE_CONE } = require('./ingredients');

const TACO_SHELL = 'Taco Shell';

const PREP_TACO_SHELL = 'Prep Taco Shell';
const MELT_CHOCOLATE = 'Melt Chocolate';
const FILL_ICE_CREAM = 'Fill Ice Cream';
const TOP_TACO = 'Top Taco';

module.exports = {
    wip: true,
    cardName: 'Choco Taco',
    name: 'Choco Taco',
    img: '',
    recipeAuthors: ['Ashley Durand'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.FREEZE],
    type: [TYPES.DESSERT, TYPES.ICE_CREAM],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Choco Taco', link: 'https://www.heinens.com/recipes/homemade-choco-tacos/' }
    ],
    separated: true,
    ingredients: [
        { ...WAFFLE_CONE, amount: 12, unit: '', additionalDetails: '', section: TACO_SHELL },
        { ...VANILLA_ICE_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...UNSALTED_PEANUT, amount: '', unit: '', additionalDetails: 'crushed', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        MICROWAVE,
        STOVE,
        FREEZER,
    ],
    supplies: [
        PAPER_TOWELS,
        SAUCEPAN,
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Dampen 2 to 3 paper towels with warm water. Wring excess water.', section: PREP_TACO_SHELL },
        { step: 'Wrap the paper towels around a waffle cone.', section: PREP_TACO_SHELL },
        { step: 'Microwave for 30 seconds.', section: PREP_TACO_SHELL },
        { step: 'Carefully remove from the microwave.', section: PREP_TACO_SHELL },
        { step: 'Take the handle of a saucepan to reshape the cone into a taco shell while it is warm. Start at the point where the cone overlaps. If it hardens, repeat the microwave process and reshaping.', section: PREP_TACO_SHELL },

        { step: 'Over medium-high heat, bring a pot of hot water to a boil.', section: MELT_CHOCOLATE },
        { step: 'Place a mixing bowl on top.', section: MELT_CHOCOLATE },
        { step: 'Add the chocolate chips to the bowl. Stir until melted.', section: MELT_CHOCOLATE },
        { step: 'Remove the bowl. Set aside.', section: MELT_CHOCOLATE },

        { step: 'Fill the taco shell with vanilla ice cream.', section: FILL_ICE_CREAM },
        { step: 'Place shell in the freezer to firm up the ice cream for a few minutes.', section: FILL_ICE_CREAM },

        { step: 'Dip the taco upside down into the melted chocolate or drizzle over top.', section: TOP_TACO },
        { step: 'Sprinkle peanuts on top.', section: TOP_TACO },

        { step: 'Place tacos in the freezer until ready to serve (at least 10 minutes).', section: SECTIONS.FREEZE },
        { step: 'Enjoy these childhood ice cream treats.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};