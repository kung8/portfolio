const gelato1 = '../assets/Products/chocolate-gelato-1.jpeg';
const gelato2 = '../assets/Products/chocolate-gelato-2.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { COCOA_POWDER, DARK_COOKING_CHOCOLATE, EGG_YOLK, HEAVY_CREAM, ICE_CREAM_MAKER, MIXING_BOWL, SALT, SAUCEPAN, VANILLA_BEAN, WHITE_SUGAR, WHOLE_MILK } = require('./ingredients');

const MILK_MIXTURE_SECTION = 'Milk Mixture';
const SUGAR_EGGS_MIXTURE_SECTION = 'Sugar & Eggs Mixture';
const COCOA_POWDER_SECTION = 'Cocoa Powder';
const CHOCOLATE_MIXTURE_SECTION = 'Chocolate Mixture';

const HEAT_MILK_SECTION = 'Heat Milk';
const MIX_SUGAR_AND_EGGS_SECTION = 'Mix Sugar & Eggs';
const COMBINE_MIXTURES_SECTION = 'Combine Mixtures';
const THICKEN_CUSTARD = 'Thicken Custard';
const PREP_CHOCOLATE = 'Prep Chocolate';
const CHILL_CUSTARD = 'Chill Custard';
const CHURN_CUSTARD = 'Churn Custard';

module.exports = {
    wip: true,
    cardName: 'Chocolate Gelato',
    name: 'Chocolate Gelato',
    img: gelato2,
    recipeAuthors: ['Emma Duckworth'],
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ITALIAN],
    method: [METHODS.FREEZE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 8, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Chocolate Gelato', link: 'https://emmaduckworthbakes.com/chocolate-gelato-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...WHOLE_MILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room temperature', section: MILK_MIXTURE_SECTION },
        { ...HEAVY_CREAM, amount: 1.25, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MILK_MIXTURE_SECTION },
        { ...VANILLA_BEAN, amount: 1, unit: '', additionalDetails: 'cut in half length-wise', section: MILK_MIXTURE_SECTION },

        { ...EGG_YOLK, amount: 5, unit: '', additionalDetails: 'room temperature', section: SUGAR_EGGS_MIXTURE_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_EGGS_MIXTURE_SECTION },
        { ...COCOA_POWDER, amount: 1.5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COCOA_POWDER_SECTION },

        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_MIXTURE_SECTION },
        { ...DARK_COOKING_CHOCOLATE, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: CHOCOLATE_MIXTURE_SECTION },
    ],
    appliances: [
        ICE_CREAM_MAKER,
    ],
    supplies: [
        SAUCEPAN,
        MIXING_BOWL,
    ],
    directions: [
        { step: `In a saucepan, combine "${MILK_MIXTURE_SECTION}" section ingredients.`, section: HEAT_MILK_SECTION },
        { step: 'Over medium heat, bring to a simmer and bubbles around the edges. Do not let it boil.', section: HEAT_MILK_SECTION },
        { step: 'Turn off heat.', section: HEAT_MILK_SECTION },
        { step: 'Remove the vanilla bean and scrape the seeds. Set pod and seeds aside.', section: HEAT_MILK_SECTION },

        { step: `In a mixing bowl, whisk the "${SUGAR_EGGS_MIXTURE_SECTION}" section ingredients until thickened.`, section: MIX_SUGAR_AND_EGGS_SECTION },
        { step: 'Add cocoa powder. Whisk.', section: MIX_SUGAR_AND_EGGS_SECTION },

        { step: `While whisking the egg mixture, slowly add milk mixture.`, section: COMBINE_MIXTURES_SECTION },
        { step: 'Transfer mixture to the saucepan.', section: COMBINE_MIXTURES_SECTION },
        { step: 'Re-add the vanilla pod and seeds.', section: COMBINE_MIXTURES_SECTION },

        { step: 'Over low heat, whisk until the custard thickens.', section: THICKEN_CUSTARD },
        { step: 'Run through a strainer. Let cool and refrigerate.', section: THICKEN_CUSTARD },

        { step: `In a small bowl, combine the "${CHOCOLATE_MIXTURE_SECTION}" section ingredients.`, section: PREP_CHOCOLATE },
        { step: 'Disard vanilla pods.', section: PREP_CHOCOLATE },
        { step: 'Pour custard through a strainer over chocolate. Whisk until chocolate is melted.', section: PREP_CHOCOLATE },

        { step: 'Cover with parchment paper to prevent a film from forming. Let it touch the surface of the custard.', section: CHILL_CUSTARD },
        { step: 'Place in the fridge until cool and thickened (at least 3 hours or overnight).', section: CHILL_CUSTARD },

        { step: 'In an ice cream maker, churn the custard until it becomes a soft-serve consistency.', section: CHURN_CUSTARD },

        { step: 'Cover with parchment paper and plastic wrap. Let the paper and wrap touch the surface of the custard.', section: SECTIONS.FREEZE },
        { step: 'Freeze until set (about 4 to 6 hours).', section: SECTIONS.FREEZE, img: gelato1 },

        { step: 'Enjoy this delicious Italian dessert.', section: SECTIONS.SERVE },
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