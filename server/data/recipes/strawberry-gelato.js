const gelato1 = '../assets/Products/strawberry-gelato-1.jpeg';
const gelato2 = '../assets/Products/strawberry-gelato-2.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLENDER, HEAVY_CREAM, ICE_CREAM_MAKER, LEMON_JUICE, SPATULA, STRAWBERRY, WHISK, WHITE_SUGAR, WHOLE_MILK } = require('./ingredients');

const STRAWBERRIES_SECTION = 'Strawberries';
const MILK_SECTION = 'Milk';
const CREAM_SECTION = 'Cream';

const PREP_GELATO = 'Prep Gelato';
const FIRM_UP_GELATO = 'Firm Up Gelato';

module.exports = {
    cardName: 'StrawberryGelato',
    name: 'Strawberry Gelato',
    img: gelato2,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BLEND, METHODS.FREEZE],
    type: [TYPES.ICE_CREAM],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Strawberry Gelato',
            link: 'https://www.askchefdennis.com/strawberry-gelato/',
            authors: ['Dennis Littley'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...STRAWBERRY, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: STRAWBERRIES_SECTION },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: STRAWBERRIES_SECTION },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: STRAWBERRIES_SECTION },

        { ...WHOLE_MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MILK_SECTION },

        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_SECTION },
    ],
    appliances: [
        BLENDER,
        ICE_CREAM_MAKER,
    ],
    supplies: [
        WHISK,
        SPATULA,
    ],
    directions: [
        { step: `Wash and hull the strawberries.`, section: PREP_GELATO },
        { step: `Add the "${STRAWBERRIES_SECTION}" section ingredients to a blender. Blend until smooth.`, section: PREP_GELATO },
        { step: `Add milk. Blend until mixed.`, section: PREP_GELATO },
        { step: `In a mixing bowl, whisk the heavy cream until soft peaks form.`, section: PREP_GELATO },
        { step: `Pour the blended strawberry mixture into the whipped cream and fold until combined.`, section: PREP_GELATO },

        { step: `Pour the mixture into the ice cream maker.`, section: FIRM_UP_GELATO },
        { step: `Transfer gelato into a container and freeze until firm.`, section: FIRM_UP_GELATO, img: gelato1 },
        { step: `Enjoy this sweet soft scoop of heaven!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};