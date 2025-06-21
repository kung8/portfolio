// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { UNSALTED_BUTTER, SEMI_SWEET_CHOCOLATE_CHIPS, CORN_SYRUP, VANILLA_EXTRACT, SALT, HEAVY_CREAM, VANILLA_ICE_CREAM, CHOCOLATE_ICE_CREAM, SPRINKLES, WHIPPED_CREAM, GLUTEN_FREE_OREO } = require('./ingredients');

const COOKIE_CRUMBLE_SECTION = 'Cookie Crumble';
const CHOCOLATE_FUDGE_SECTION = 'Chocolate Fudge';
const ICE_CREAM_LAYERS_SECTION = 'Ice Cream Layers';

const SOFTEN_ICE_CREAM = 'Soften Ice Cream';
const PREP_COOKIE_CRUMBLE = 'Prep Cookie Crumble';
const PREP_CHOCOLATE_FUDGE = 'Prep Chocolate Fudge';
const PREP_ICE_CREAM_CAKE = 'Prep Ice Cream Cake';
const DECORATE_ICE_CREAM_CAKE = 'Decorate Ice Cream Cake';
const FREEZE_ICE_CREAM_CAKE = 'Freeze Ice Cream Cake';

module.exports = {
    wip: true,
    cardName: 'Ice Cream Cake',
    name: 'Ice Cream Cake',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.FREEZE],
    type: [TYPES.DESSERT, TYPES.CAKE, TYPES.ICE_CREAM],
    yields: { amount: 16, unit: YIELD_UNITS.SERVINGS },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Ice Cream Cake', link: 'https://meaningfuleats.com/gluten-free-ice-cream-cake/' }
    ],
    separated: true,
    ingredients: [
        { ...GLUTEN_FREE_OREO, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COOKIE_CRUMBLE_SECTION },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: COOKIE_CRUMBLE_SECTION },

        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_FUDGE_SECTION },
        { ...CORN_SYRUP, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_FUDGE_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHOCOLATE_FUDGE_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_FUDGE_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_FUDGE_SECTION },

        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_FUDGE_SECTION },

        { ...VANILLA_ICE_CREAM, amount: 1.5, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: ICE_CREAM_LAYERS_SECTION },
        { ...CHOCOLATE_ICE_CREAM, amount: 1.5, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: ICE_CREAM_LAYERS_SECTION },

        { ...WHIPPED_CREAM, amount: 1, unit: INGREDIENT_UNITS.CAN, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SPRINKLES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'freezer' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
        { name: 'small bowl' },
        { name: 'mixing bowl' },
        { name: 'small microwavable bowl' },
        { name: '8-inch springform pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Take out the chocolate ice cream so it can soften for about 20 minutes while you make the cookie crumble.', section: SOFTEN_ICE_CREAM },

        { step: 'Preheat the oven to 350°F.', section: PREP_COOKIE_CRUMBLE },
        { step: 'Line a baking sheet with a silicon baking mat.', section: PREP_COOKIE_CRUMBLE },
        { step: `In a small bowl, combine the "${COOKIE_CRUMBLE_SECTION}" section ingredients.`, section: PREP_COOKIE_CRUMBLE },
        { step: 'Spread the cookie crumble onto the baking sheet.', section: PREP_COOKIE_CRUMBLE },
        { step: 'Bake for 8 to 10 minutes.', section: PREP_COOKIE_CRUMBLE },
        { step: 'Let cool completely until room temperature.', section: PREP_COOKIE_CRUMBLE },
        { step: 'Break up any of the large clumps into smaller ones.', section: PREP_COOKIE_CRUMBLE },
        { step: 'Set aside.', section: PREP_COOKIE_CRUMBLE },

        { step: `In a mixing bowl, combine all the "${CHOCOLATE_FUDGE_SECTION}" section ingredients except the heavy cream.`, section: PREP_CHOCOLATE_FUDGE },
        { step: 'In a microwavable bowl, microwave the whipping cream until just starting to boil (about 45 seconds to 1 minute).', section: PREP_CHOCOLATE_FUDGE },
        { step: 'Pour hot cream over the chocolate chip mixture.', section: PREP_CHOCOLATE_FUDGE },
        { step: 'Let it melt (about 2 to 3 minutes).', section: PREP_CHOCOLATE_FUDGE },
        { step: 'Whisk until smooth.', section: PREP_CHOCOLATE_FUDGE },
        { step: 'Let it completely cool to room temperature.', section: PREP_CHOCOLATE_FUDGE },

        { step: 'Spread an even layer of chocolate ice cream into the pan (you can decide the ratio of chocolate to vanilla).', section: PREP_ICE_CREAM_CAKE },
        { step: 'Freeze for 30 minutes. Take out the vanilla ice cream while the chocolate layer freezes.', section: PREP_ICE_CREAM_CAKE },
        { step: 'Take out cake pan from freezer.', section: PREP_ICE_CREAM_CAKE },
        { step: 'Spread an even layer of chocolate fudge.', section: PREP_ICE_CREAM_CAKE },
        { step: 'Sprinkle the cookie crumble in an even layer.', section: PREP_ICE_CREAM_CAKE },
        { step: 'Freeze for 10 minutes.', section: PREP_ICE_CREAM_CAKE },
        { step: 'Take out cake pan from freezer.', section: PREP_ICE_CREAM_CAKE },
        { step: 'Spread an even layer of vanilla ice cream.', section: PREP_ICE_CREAM_CAKE },
        { step: 'Freeze until firm (about 2 to 3 hours).', section: PREP_ICE_CREAM_CAKE },

        { step: 'Decorate the cake as desired.', section: DECORATE_ICE_CREAM_CAKE },

        { step: 'Freeze overnight.', section: FREEZE_ICE_CREAM_CAKE },

        { step: 'Take cake out 10 minutes before slicing to soften it a little.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Ensure the fudge completely cools down before layering on the chocolate ice cream layer. It will melt the ice cream which causes the layer of fudge and cookie crumble to sink into the ice cream layer.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};