// const example1 = '../assets/Products/example-1.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { WHOLE_MILK, EGG_YOLK, WHITE_SUGAR, VANILLA_BEAN } = require('./ingredients');

const GELATO_SECTION = 'Gelato';
const FREEZING = 'Freezing';

module.exports = {
    wip: true,
    cardName: 'Gelato',
    name: 'Gelato',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.FREEZE],
    type: [TYPES.ICE_CREAM],
    yields: { amount: 1, unit: YIELD_UNITS.QUART },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Gelato', link: 'https://foodnouveau.com/how-to-make-gelato/' }
    ],
    separated: true,
    ingredients: [
        { ...WHOLE_MILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GELATO_SECTION },
        { ...EGG_YOLK, amount: 5, unit: '', additionalDetails: '', section: GELATO_SECTION },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GELATO_SECTION },
        { ...VANILLA_BEAN, amount: 1, unit: '', additionalDetails: 'split lengthwise', section: GELATO_SECTION },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'stand mixer' },
        { name: 'ice cream maker' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'wooden spoon' },
    ],
    directions: [
        { step: 'Over medium heat, warm milk in a saucepan. Once it starts to bubble around the edges, remove the saucepan from heat.', section: GELATO_SECTION },
        { step: 'In a stand mixer, mix the yolks and sugar until it is thick and creamy (about 2 minutes on medium).', section: GELATO_SECTION },
        { step: 'On low speed, slowly add one spoonful of the hot milk into the egg mixture.', section: GELATO_SECTION },
        { step: 'Slowly add the rest of the milk and mix until it is smooth.', section: GELATO_SECTION },
        { step: 'Transfer the mixture into the saucepan and add the vanilla.', section: GELATO_SECTION },
        { step: 'Over medium-low heat, cook and stir constantly until the custard sticks to the back of a wooden spoon.', section: GELATO_SECTION },
        { step: 'Remove from heat and let it get to room temperature.', section: GELATO_SECTION },
        { step: 'Place it in the fridge overnight.', section: GELATO_SECTION },
        { step: 'Remove the vanilla bean and strain the custard into an ice cream maker bowl.', section: FREEZING },
        { step: 'Follow the ice cream maker directions. It should be soft and not icy.', section: FREEZING },
        { step: 'Take out the gelato 15 to 20 minutes before serving so it can soften at room temperature.', section: SECTIONS.SERVE },
        { step: 'Enjoy this sweet soft scoop of heaven!', section: SECTIONS.SERVE },
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