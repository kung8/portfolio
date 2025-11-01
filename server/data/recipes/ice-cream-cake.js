const cake1 = '../assets/Products/ice-cream-cake-1.jpeg';
const cake2 = '../assets/Products/ice-cream-cake-2.jpeg';
const cake3 = '../assets/Products/ice-cream-cake-3.jpeg';
const cake4 = '../assets/Products/ice-cream-cake-4.jpeg';
const cake5 = '../assets/Products/ice-cream-cake-5.jpeg';
const cake6 = '../assets/Products/ice-cream-cake-6.jpeg';
const cake7 = '../assets/Products/ice-cream-cake-7.jpeg';
const cake8 = '../assets/Products/ice-cream-cake-8.jpeg';
const cake9 = '../assets/Products/ice-cream-cake-9.jpeg';
const cake10 = '../assets/Products/ice-cream-cake-10.jpeg';
const cake11 = '../assets/Products/ice-cream-cake-11.jpeg';
const cake12 = '../assets/Products/ice-cream-cake-12.jpeg';
const cake13 = '../assets/Products/ice-cream-cake-13.jpeg';
const cake14 = '../assets/Products/ice-cream-cake-14.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, CHOCOLATE_ICE_CREAM, CORN_SYRUP, FREEZER, GLUTEN_FREE_OREO, HEAVY_CREAM, MIXING_BOWL, OVEN, SALT, SEMI_SWEET_CHOCOLATE_CHIPS, SILICON_BAKING_MAT, SMALL_BOWL, SPATULA, SPRINGFORM_PAN, SPRINKLES, UNSALTED_BUTTER, VANILLA_EXTRACT, VANILLA_ICE_CREAM, WHIPPED_CREAM } = require('./ingredients');

const COOKIE_CRUMBLE_SECTION = 'Cookie Crumble';
const CHOCOLATE_FUDGE_SECTION = 'Chocolate Fudge';
const ICE_CREAM_LAYERS_SECTION = 'Ice Cream Layers';

const SOFTEN_ICE_CREAM = 'Soften Ice Cream';
const PREP_COOKIE_CRUMBLE = 'Prep Cookie Crumble';
const PREP_CHOCOLATE_FUDGE = 'Prep Chocolate Fudge';
const PREP_ICE_CREAM_CAKE = 'Prep Ice Cream Cake';

module.exports = {
    cardName: 'Ice Cream Cake',
    name: 'Ice Cream Cake',
    img: cake12,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.FREEZE],
    type: [TYPES.DESSERT, TYPES.CAKE, TYPES.ICE_CREAM],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 16, unit: YIELD_UNITS.SERVINGS },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Ice Cream Cake', 
            link: 'https://meaningfuleats.com/gluten-free-ice-cream-cake/',
            authors: ['Erin Collins'],
            finder: 'Kevin Ung', 
        }
    ],
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
        OVEN,
        FREEZER,
    ],
    supplies: [
        BAKING_SHEET,
        SILICON_BAKING_MAT,
        SMALL_BOWL,
        MIXING_BOWL,
        { ...SMALL_BOWL, additionalDetails: 'microwavable' },
        { ...SPRINGFORM_PAN, additionalDetails: '8 inch' },
        SPATULA,
    ],
    directions: [
        { step: `Take out the chocolate ice cream so it can soften for about 20 minutes while you make the cookie crumble.`, section: SOFTEN_ICE_CREAM },

        { step: `Preheat the oven to 350°F.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with a silicon baking mat.`, section: PREP_COOKIE_CRUMBLE },
        { step: `In a small bowl, combine the "${COOKIE_CRUMBLE_SECTION}" section ingredients.`, section: PREP_COOKIE_CRUMBLE },
        { step: `Spread the cookie crumble onto the baking sheet.`, section: PREP_COOKIE_CRUMBLE },
        { step: `Bake for 8 to 10 minutes.`, section: PREP_COOKIE_CRUMBLE, img: cake2 },
        { step: `Let cool completely until room temperature.`, section: PREP_COOKIE_CRUMBLE },
        { step: `Break up any of the large clumps into smaller ones.`, section: PREP_COOKIE_CRUMBLE },
        { step: `Set aside.`, section: PREP_COOKIE_CRUMBLE },

        { step: `In a mixing bowl, combine all the "${CHOCOLATE_FUDGE_SECTION}" section ingredients except the heavy cream.`, section: PREP_CHOCOLATE_FUDGE, img: cake3 },
        { step: `In a microwavable bowl, microwave the whipping cream until just starting to boil (about 45 seconds to 1 minute).`, section: PREP_CHOCOLATE_FUDGE },
        { step: `Pour hot cream over the chocolate chip mixture.`, section: PREP_CHOCOLATE_FUDGE, img: cake4 },
        { step: `Let it melt (about 2 to 3 minutes).`, section: PREP_CHOCOLATE_FUDGE },
        { step: `Whisk until smooth.`, section: PREP_CHOCOLATE_FUDGE, img: cake5 },
        { step: `Let it completely cool to room temperature.`, section: PREP_CHOCOLATE_FUDGE },

        { step: `Spread an even layer of chocolate ice cream into the pan (you can decide the ratio of chocolate to vanilla).`, section: PREP_ICE_CREAM_CAKE, img: cake1 },
        { step: `Freeze for 30 minutes. Take out the vanilla ice cream while the chocolate layer freezes.`, section: PREP_ICE_CREAM_CAKE },
        { step: `Take out cake pan from freezer.`, section: PREP_ICE_CREAM_CAKE, img: cake6 },
        { step: `Spread an even layer of chocolate fudge.`, section: PREP_ICE_CREAM_CAKE, img: cake7 },
        { step: `Sprinkle the cookie crumble in an even layer.`, section: PREP_ICE_CREAM_CAKE, img: cake8 },
        { step: `Freeze for 10 minutes.`, section: PREP_ICE_CREAM_CAKE },
        { step: `Take out cake pan from freezer.`, section: PREP_ICE_CREAM_CAKE },
        { step: `Spread an even layer of vanilla ice cream.`, section: PREP_ICE_CREAM_CAKE, img: cake9 },
        { step: `Freeze until firm (about 2 to 3 hours).`, section: PREP_ICE_CREAM_CAKE, img: cake10 },

        { step: `Decorate the cake as desired.`, section: SECTIONS.DECORATE, img: cake11 },

        { step: `Freeze overnight.`, section: SECTIONS.FREEZE },

        { step: `Take cake out 10 minutes before slicing to soften it a little.`, section: SECTIONS.SERVE, img: [cake13, cake14] },
    ],
    notes: [
        { note: 'Ensure the fudge completely cools down before layering on the chocolate ice cream layer. It will melt the ice cream which causes the layer of fudge and cookie crumble to sink into the ice cream layer. Add a little more time to the freezing process for the fudge and cookie crumble layer if you did not wait until it was completely cooled down (about 5 to 10 minutes). But I would caution to not allow this to happen all together and just be patient with the cooling of the fudge.' }
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