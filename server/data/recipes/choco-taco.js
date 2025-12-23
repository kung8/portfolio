const taco1 = '../assets/Products/choco-taco-1.jpeg';
const taco2 = '../assets/Products/choco-taco-2.jpeg';
const taco3 = '../assets/Products/choco-taco-3.jpeg';
const taco4 = '../assets/Products/choco-taco-4.jpeg';
const taco5 = '../assets/Products/choco-taco-5.jpeg';
const taco6 = '../assets/Products/choco-taco-6.jpeg';
const taco7 = '../assets/Products/choco-taco-7.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { FREEZER, MICROWAVE, MIXING_BOWL, PAPER_TOWELS, SAUCEPAN, SEMI_SWEET_CHOCOLATE_CHIPS, STOVE, UNSALTED_PEANUT, VANILLA_ICE_CREAM, WAFFLE_CONE } = require('./ingredients');

const TACO_SHELL = 'Taco Shell';

const PREP_TACO_SHELL = 'Prep Taco Shell';
const MELT_CHOCOLATE = 'Melt Chocolate';
const FILL_ICE_CREAM = 'Fill Ice Cream';
const TOP_TACO = 'Top Taco';

module.exports = {
    cardName: 'Choco Taco',
    name: 'Choco Taco',
    img: taco7,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.FREEZE],
    type: [TYPES.DESSERT, TYPES.ICE_CREAM],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Choco Taco',
            link: 'https://www.heinens.com/recipes/homemade-choco-tacos/',
            authors: ['Ashley Durand'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...WAFFLE_CONE, amount: 12, unit: '', additionalDetails: '', section: TACO_SHELL },
        { ...VANILLA_ICE_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
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
        { step: `Dampen 2 to 3 paper towels with warm water. Wring excess water.`, section: PREP_TACO_SHELL },
        { step: `Wrap the paper towels around a waffle cone.`, section: PREP_TACO_SHELL, img: taco1 },
        { step: `Microwave for 30 seconds.`, section: PREP_TACO_SHELL },
        { step: `Carefully remove from the microwave.`, section: PREP_TACO_SHELL },
        { step: `Take the handle of a saucepan to reshape the cone into a taco shell while it is warm. Start at the point where the cone overlaps. If it hardens, repeat the microwave process and reshaping.`, section: PREP_TACO_SHELL, img: taco2 },

        { step: `Over medium-high heat, bring a pot of hot water to a boil.`, section: MELT_CHOCOLATE },
        { step: `Place a mixing bowl on top.`, section: MELT_CHOCOLATE },
        { step: `Add the chocolate chips to the bowl. Stir until melted.`, section: MELT_CHOCOLATE, img: taco3 },
        { step: `Remove the bowl. Set aside.`, section: MELT_CHOCOLATE },

        { step: `Fill the taco shell with vanilla ice cream.`, section: FILL_ICE_CREAM, img: taco4 },
        { step: `Place shell in the freezer to firm up the ice cream for a few minutes.`, section: FILL_ICE_CREAM },

        { step: `Spread the melted chocolate over the ice cream.`, section: TOP_TACO, img: taco5 },
        { step: `Sprinkle peanuts on top.`, section: TOP_TACO, img: taco6 },

        { step: `Place tacos in the freezer until ready to serve (at least 10 minutes).`, section: SECTIONS.FREEZE },
        { step: `Enjoy these childhood ice cream treats.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `I ended up using a blender to crush the peanuts.` },
        { note: `I recommend holding the shell when filling it with ice cream to have more control. I placed the ice cream in the center then used the spoon to push it to one end.` },
        { note: `I melted about 1 cup of chocolate chips to cover about 3 tacos.`}
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

/*
    Reference this if wanting to make the cone from scratch
    By Crowded Kitchen
    Website: https://www.crowdedkitchen.com/homemade-choco-tacos/
    Amazon Link for Waffle Iron: https://www.amazon.com/dp/B08464TZV5
*/