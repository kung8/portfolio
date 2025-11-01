// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SODA, BROWN_SUGAR, CASSEROLE_DISH, COOKING_SPRAY, CORN_SYRUP, OVEN, POPCORN, SALT, SAUCEPAN, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT } = require('./ingredients');

const POPCORN_SECTION = 'Popcorn';
const CARAMEL_SECTION = 'Caramel';

const WARM_POPCORN = 'Warm Popcorn';
const MAKE_CARAMEL = 'Make Caramel';
const MAKE_CARAMEL_POPCORN = 'Make Caramel Popcorn';

module.exports = {
    wip: true,
    cardName: 'Caramel Popcorn',
    name: 'Caramel Popcorn',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.SNACK, CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN],
    method: [METHODS.BAKE, METHODS.BOIL],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Caramel Popcorn', 
            link: 'https://www.allrecipes.com/recipe/173309/classic-caramel-corn/',
            authors: ['Argo', 'Karo', "Fleischmann's"],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: POPCORN_SECTION },
        { ...POPCORN, amount: 4, unit: INGREDIENT_UNITS.QUART, additionalDetails: 'popped', section: POPCORN_SECTION },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CARAMEL_SECTION },
        { ...CORN_SYRUP, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CARAMEL_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CARAMEL_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: '1/2 tsp', section: CARAMEL_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CARAMEL_SECTION },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CARAMEL_SECTION },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        CASSEROLE_DISH,
        SAUCEPAN,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: `Preheat the oven to 250ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Spray a casserole dish with cooking spray.`, section: WARM_POPCORN },
        { step: `Fill it with popped popcorn.`, section: WARM_POPCORN },
        { step: `Add it to the preheated oven.`, section: WARM_POPCORN },
        { step: `Over medium heat, add the brown sugar, corn syrup, butter and salt to a large sauce pan.`, section: MAKE_CARAMEL },
        { step: `Stir constantly until it comes to a boil.`, section: MAKE_CARAMEL },
        { step: `Stop stirring and let it boil for 5 minutes.`, section: MAKE_CARAMEL },
        { step: `Remove the pan from heat.`, section: MAKE_CARAMEL },
        { step: `Add the vanilla and baking soda. Mix.`, section: MAKE_CARAMEL },
        { step: `Remove the popcorn from the oven.`, section: MAKE_CARAMEL_POPCORN },
        { step: `Pour the caramel over the popcorn. Stir until it is evenly coated.`, section: MAKE_CARAMEL_POPCORN },
        { step: `Bake for 45 minutes. Stir occasionally.`, section: MAKE_CARAMEL_POPCORN },
        { step: `Lay aluminum foil on a large flat surface and lightly grease with the cooking spray.`, section: MAKE_CARAMEL_POPCORN },
        { step: `Transfer the popcorn to the foil. Let it cool.`, section: MAKE_CARAMEL_POPCORN },
        { step: `Break it up and enjoy this sweet treat throughout the year.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};