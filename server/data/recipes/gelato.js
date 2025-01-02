// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { WHOLE_MILK, EGG_YOLKS, WHITE_SUGAR, VANILLA_BEAN } = require('./ingredients');

const GELATO_SECTION = 'Gelato';
const FREEZING = 'Freezing';

module.exports = {
    wip: true,
    cardName: 'Gelato',
    name: 'Gelato',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.FREEZE],
    type: [TYPES.ICE_CREAM],
    yields: ' servings',
    prepTime: '10 m',
    cookTime: '10 m',
    websites: [
        { label: 'Gelato', link: 'https://foodnouveau.com/how-to-make-gelato/' }
    ],
    separated: true,
    ingredients: [
        { ...WHOLE_MILK, amount: '3 c', additionalDetails: '', section: GELATO_SECTION },
        { ...EGG_YOLKS, amount: '5', additionalDetails: '', section: GELATO_SECTION },
        { ...WHITE_SUGAR, amount: '3/4 c', additionalDetails: '', section: GELATO_SECTION },
        { ...VANILLA_BEAN, amount: '1', additionalDetails: 'split lengthwise', section: GELATO_SECTION },
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
        { step: 'Over medium heat, warm milk in a saucepan. Once it starts to bubble around the edges, remove the saucepan from heat.', type: GELATO_SECTION },
        { step: 'In a stand mixer, mix the yolks and sugar until it is thick and creamy (about 2 minutes on medium).', type: GELATO_SECTION },
        { step: 'On low speed, slowly add one spoonful of the hot milk into the egg mixture.', type: GELATO_SECTION },
        { step: 'Slowly add the rest of the milk and mix until it is smooth.', type: GELATO_SECTION },
        { step: 'Transfer the mixture into the saucepan and add the vanilla.', type: GELATO_SECTION },
        { step: 'Over medium-low heat, cook and stir constantly until the custard sticks to the back of a wooden spoon.', type: GELATO_SECTION },
        { step: 'Remove from heat and let it get to room temperature.', type: GELATO_SECTION },
        { step: 'Place it in the fridge overnight.', type: GELATO_SECTION },
        { step: 'Remove the vanilla bean and strain the custard into an ice cream maker bowl.', type: FREEZING },
        { step: 'Follow the ice cream maker directions. It should be soft and not icy.', type: FREEZING },
        { step: 'Take out the gelato 15 to 20 minutes before serving so it can soften at room temperature.', type: SECTIONS.SERVE },
        { step: 'Enjoy this sweet soft scoop of heaven!', type: SECTIONS.SERVE },
    ]
};