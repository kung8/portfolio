const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BAKING_POWDER, BAKING_SODA, CINNAMON, CREAM_CHEESE, EGG, MIXING_BOWL, OVEN, POWDERED_SUGAR, PUMPKIN_PUREE, SALT, STAND_MIXER, UNSALTED_BUTTER, VANILLA_EXTRACT, VEGETABLE_OIL, WHITE_SUGAR } = require('./ingredients');

const FIRST_CAKE_SECTION = 'First Cake Mix';
const SECOND_CAKE_SECTION = 'Second Cake Mix';

module.exports = {
    wip: true,
    cardName: 'Pumpkin Bars',
    name: 'Paul\'s Pumpkin Bars',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE, METHODS.MIX],
    type: [TYPES.BAR, TYPES.CAKE, TYPES.DESSERT],
    yields: { amount: 24, unit: YIELD_UNITS.BAR },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Paul\'s Pumpkin Bars',
            link: 'https://www.allrecipes.com/recipe/11646/pauls-pumpkin-bars/',
            authors: ['Deb Martin'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...PUMPKIN_PUREE, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: FIRST_CAKE_SECTION },
        { ...WHITE_SUGAR, amount: 8 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FIRST_CAKE_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FIRST_CAKE_SECTION },
        { ...EGG, amount: 4, unit: INGREDIENT_UNITS.WHOLE, additionalDetails: '', section: FIRST_CAKE_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECOND_CAKE_SECTION },
        { ...CINNAMON, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECOND_CAKE_SECTION },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECOND_CAKE_SECTION },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECOND_CAKE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECOND_CAKE_SECTION },

        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: SECTIONS.FROSTING },
        { ...CREAM_CHEESE, amount: 3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.FROSTING },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FROSTING },
        { ...POWDERED_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sifted', section: SECTIONS.FROSTING },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        { ...MIXING_BOWL, amount: 2 },
        BAKING_PAN,
    ],
    directions: [
        { step: `Preheat the oven to 350°F.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `In a mixing bowl, beat the "${FIRST_CAKE_SECTION}" section ingredients.`, section: SECTIONS.PREP_CAKE },
        { step: `In another mixing bowl, combine the "${SECOND_CAKE_SECTION}" section ingredients.`, section: SECTIONS.PREP_CAKE },
        { step: `Combine the cake mixtures.`, section: SECTIONS.PREP_CAKE },
        { step: `Pour batter evenly into baking pan.`, section: SECTIONS.PREP_CAKE },
        { step: `Bake until a toothpick inserted in the center comes out clean (about 25 to 30 minutes).`, section: SECTIONS.BAKE },
        { step: `Let completely cool before frosting.`, section: SECTIONS.COOL },

        { step: `In a medium bowl, combine butter and cream cheese.`, section: SECTIONS.MAKE_FROSTING },
        { step: `Add vanilla.`, section: SECTIONS.MAKE_FROSTING },
        { step: `Add powdered sugar, a little at a time. beat until combined.`, section: SECTIONS.MAKE_FROSTING },

        { step: `Spread frosting on cake.`, section: SECTIONS.FROST },
        { step: `Cut and enjoy!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: `If frosted, it should be stored in the fridge.`,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};