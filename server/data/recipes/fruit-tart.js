const tart1 = '../assets/Products/fruit-tart-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, BLUEBERRY, CORNSTARCH, EGG_YOLK, KIWI, MILK, MIXING_BOWL, OVEN, PARCHMENT_PAPER, POWDERED_SUGAR, RASPBERRY, SALT, SAUCEPAN, STAND_MIXER, STRAINER, STRAWBERRY, TART_PAN, UNSALTED_BUTTER, VANILLA_BEAN, VANILLA_EXTRACT, WHISK, WHITE_SUGAR } = require('./ingredients');

const PASTRY_CREAM_SECTION = 'Pastry Cream';
const MAKE_PASTRY_CREAM = 'Make Pastry Cream';

module.exports = {
    cardName: 'Fruit Tart',
    name: 'Fruit Tart',
    img: tart1,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN, GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.TART],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 3.5, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Fruit Tart', link: 'https://preppykitchen.com/fruit-tart/#recipe', authors: ['John Kanell'], finder: 'Justin Ung' }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cubed', section: SECTIONS.CRUST },
        { ...POWDERED_SUGAR, amount: 5 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...EGG_YOLK, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.CRUST },
        { ...ALL_PURPOSE_FLOUR, amount: 10 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },

        { ...MILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTRY_CREAM_SECTION },
        { ...VANILLA_BEAN, amount: 1 / 2, unit: '', additionalDetails: '', section: PASTRY_CREAM_SECTION },
        { ...EGG_YOLK, amount: 6, unit: '', additionalDetails: '', section: PASTRY_CREAM_SECTION },
        { ...WHITE_SUGAR, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTRY_CREAM_SECTION },
        { ...CORNSTARCH, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTRY_CREAM_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold', section: PASTRY_CREAM_SECTION },

        { ...STRAWBERRY, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...BLUEBERRY, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...RASPBERRY, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...KIWI, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        PARCHMENT_PAPER,
        TART_PAN,
        SAUCEPAN,
        WHISK,
        MIXING_BOWL,
        STRAINER,
    ],
    directions: [
        { step: `In a stand mixer, mix the "${SECTIONS.CRUST}" section ingredients except the egg yolks and flour until combined.`, section: SECTIONS.MAKE_CRUST },
        { step: `Add yolks. Mix.`, section: SECTIONS.MAKE_CRUST },
        { step: `Add flour. Mix (about 45 seconds).`, section: SECTIONS.MAKE_CRUST },
        { step: `Divide into 2 to 3 portions.`, section: SECTIONS.MAKE_CRUST },
        { step: `Place each portion between 2 sheets of parchment paper.`, section: SECTIONS.MAKE_CRUST },
        { step: `Press each into a flat disc about 1/8 inch thick.`, section: SECTIONS.MAKE_CRUST },
        { step: `Chill for at least 1 hour.`, section: SECTIONS.MAKE_CRUST },
        { step: `Cut the chilled dough to place in the bottom of the tart pans and the strips for the side. Cut excess.`, section: SECTIONS.MAKE_CRUST },
        { step: `Freeze for 30 minutes.`, section: SECTIONS.MAKE_CRUST },
        { step: `Bake at 320ºF until golden (about 12 to 15 minutes).`, section: SECTIONS.MAKE_CRUST },

        { step: `Over medium heat, heat milk and vanilla bean to a boil.`, section: MAKE_PASTRY_CREAM },
        { step: `Turn off heat and set aside.`, section: MAKE_PASTRY_CREAM },
        { step: `In a mixing bowl, combine egg yolks and sugar until light and fluffy.`, section: MAKE_PASTRY_CREAM },
        { step: `Add cornstarch. Whisk until no lumps remain.`, section: MAKE_PASTRY_CREAM },
        { step: `Add 1/4 cup of the hot milk to the bowl. Whisk until combined.`, section: MAKE_PASTRY_CREAM },
        { step: `Add the rest of the hot milk.`, section: MAKE_PASTRY_CREAM },
        { step: `Pour mixture through a strainer over the saucepan.`, section: MAKE_PASTRY_CREAM },
        { step: `Over medium-high heat, whisk constantly until thickened and boiling.`, section: MAKE_PASTRY_CREAM },
        { step: `Remove from heat. Add butter and stir.`, section: MAKE_PASTRY_CREAM },
        { step: `Let cool.`, section: MAKE_PASTRY_CREAM },
        { step: `Cover with plastic wrap directly over the cream to prevent a skin from forming.`, section: MAKE_PASTRY_CREAM },
        { step: `Chill for at least 2 hours.`, section: MAKE_PASTRY_CREAM },

        { step: `Fill the crust with the pastry cream.`, section: SECTIONS.ASSEMBLE },
        { step: `Top with fresh fruit arranged as desired.`, section: SECTIONS.ASSEMBLE },

        { step: `Enjoy these delicious fruit tarts!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};