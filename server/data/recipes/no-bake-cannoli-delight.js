const cannoli1 = '../assets/Products/no-bake-cannoli-delight-1.jpeg';
const cannoli2 = '../assets/Products/no-bake-cannoli-delight-2.jpeg';
const cannoli3 = '../assets/Products/no-bake-cannoli-delight-3.jpeg';
const cannoli4 = '../assets/Products/no-bake-cannoli-delight-4.jpeg';
const cannoli5 = '../assets/Products/no-bake-cannoli-delight-5.jpeg';
const cannoli6 = '../assets/Products/no-bake-cannoli-delight-6.jpeg';
const cannoli7 = '../assets/Products/no-bake-cannoli-delight-7.jpeg';
const cannoli8 = '../assets/Products/no-bake-cannoli-delight-8.jpeg';
const cannoli9 = '../assets/Products/no-bake-cannoli-delight-9.jpeg';
const cannoli10 = '../assets/Products/no-bake-cannoli-delight-10.jpeg';
const cannoli11 = '../assets/Products/no-bake-cannoli-delight-11.jpeg';
const cannoli12 = '../assets/Products/no-bake-cannoli-delight-12.jpeg';
const cannoli13 = '../assets/Products/no-bake-cannoli-delight-13.jpeg';
const cannoli14 = '../assets/Products/no-bake-cannoli-delight-14.jpeg';
const cannoli15 = '../assets/Products/no-bake-cannoli-delight-15.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, CHOCOLATE_INSTANT_PUDDING_MIX, CREAM_CHEESE, CUTTING_BOARD, GRAHAM_CRACKER, HEAVY_CREAM, KNIFE, MEDIUM_BOWL, MILK, MINI_CHOCOLATE_CHIPS, MIXING_BOWL, ORANGE_ZEST, PARCHMENT_PAPER, POWDERED_SUGAR, RICOTTA_CHEESE, SALT, SPATULA, STAND_MIXER, UNSALTED_BUTTER, VANILLA_EXTRACT, WHISK, WHITE_SUGAR } = require('./ingredients');

const PUDDING_MIXTURE_SECTION = 'Pudding Mixture';
const WHIPPED_CREAM_SECTION = 'Whipped Cream';
const CREAM_CHEESE_MIXTURE = 'Cream Cheese Mixture';

const PREP_PUDDING_MIXTURE = 'Prep Pudding Mixture';
const WHIP_CREAM = 'Whip Cream';
const MAKE_CREAM_CHEESE_MIXTURE = 'Make Cream Cheese Mixture';
const CUT = 'Cut';

module.exports = {
    cardName: 'Cannoli Delight',
    name: 'No Bake Cannoli Delight',
    img: cannoli15,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ITALIAN],
    method: [METHODS.MIX, METHODS.CHILLED],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'No Bake Cannoli Delight', 
            link: 'https://www.thekitchn.com/cannoli-delight-recipe-23718781',
            authors: ['Patty Catalano'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CHOCOLATE_INSTANT_PUDDING_MIX, amount: 5.9, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PUDDING_MIXTURE_SECTION },
        { ...MILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUDDING_MIXTURE_SECTION },

        { ...GRAHAM_CRACKER, amount: 6.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CRUST },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.CRUST },

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
        STAND_MIXER,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
        PARCHMENT_PAPER,
        MEDIUM_BOWL,
        WHISK,
        SPATULA,
        CUTTING_BOARD,
        KNIFE,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${PUDDING_MIXTURE_SECTION}" section ingredients. Mix until it begins to thicken (about 2 minutes).`, section: PREP_PUDDING_MIXTURE, img: [cannoli5, cannoli6] },
        { step: `Set aside. It will continue to thicken.`, section: PREP_PUDDING_MIXTURE },

        { step: `Line a baking pan with two sheets of parchment paper (perpendicular of each other).`, section: SECTIONS.MAKE_CRUST },
        { step: `In a stand mixer, combine all the "${SECTIONS.CRUST}" section ingredients except the melted butter.`, section: SECTIONS.MAKE_CRUST, img: cannoli1 },
        { step: `I used a pestle to pound the graham crackers into sand (about 15 to 30 seconds).`, section: SECTIONS.MAKE_CRUST, img: cannoli2 },
        { step: `Add melted butter. Mix until combined.`, section: SECTIONS.MAKE_CRUST, img: cannoli3 },
        { step: `Transfer graham cracker crust mixture onto the baking pan.`, section: SECTIONS.MAKE_CRUST },
        { step: `Use your fingers or the bottom of a measuring cup to flatten the crust to an even layer.`, section: SECTIONS.MAKE_CRUST, img: cannoli4 },
        { step: `Place the crust in the fridge.`, section: SECTIONS.MAKE_CRUST },

        { step: `In a medium bowl, combine the "${WHIPPED_CREAM_SECTION}" section ingredients.`, section: WHIP_CREAM },
        { step: `Whisk until stiff peaks form (about 2 to 4 minutes).`, section: WHIP_CREAM, img: cannoli7 },

        { step: `In a stand mixer, combine the "${CREAM_CHEESE_MIXTURE}" section ingredients.`, section: MAKE_CREAM_CHEESE_MIXTURE },
        { step: `Mix until light and fluffy (about 3 minutes). Scrape sides as needed during this process.`, section: MAKE_CREAM_CHEESE_MIXTURE, img: cannoli8 },
        { step: `Fold in 1 cup of the whipped cream and 1/2 cup of the mini chocolate chips with a spatula.`, section: MAKE_CREAM_CHEESE_MIXTURE, img: [cannoli9, cannoli10] },

        { step: `Evenly layer the cream cheese mixture over the crust.`, section: SECTIONS.ASSEMBLE, img: cannoli11 },
        { step: `Evenly layer the chocolate pudding.`, section: SECTIONS.ASSEMBLE, img: cannoli12 },
        { step: `Evenly layer the whipped cream.`, section: SECTIONS.ASSEMBLE, img: cannoli13 },
        { step: `Cover and chill for at least 4 hours (or overnight).`, section: SECTIONS.ASSEMBLE },

        { step: `Sprinkle the remaining chocolate chips on top.`, section: CUT, img: cannoli14 },
        { step: `Carefully transfer the parchment paper slab over to a cutting board.`, section: CUT },
        { step: `Cut--wiping the knife between cuts.`, section: CUT },

        { step: `Enjoy this layered dessert`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original recipe calls for just 3.9 ounces of chocolate pudding mix. It was really tight and I had to spread it out into a really thin layer. I increased the amount of pudding mix and milk in the recipe to accommodate for a thicker layer.'}
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};