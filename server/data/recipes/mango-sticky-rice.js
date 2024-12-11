// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { COCONUT_MILK, WHITE_SUGAR, SALT, MANGOES, SESAME_SEEDS, SWEET_RICE, COCONUT_CREAM } = require('./ingredients');

const SOAK_RICE = 'Soak Rice';
const STEAM_RICE = 'Steam Rice';
const STICKY_RICE = 'Sticky Rice';
const COCONUT_CREAM_SAUCE = 'Coconut Cream Sauce';

module.exports = {
    wip: true,
    cardName: 'Mango Sticky Rice',
    name: 'Thai Mango Sticky Rice',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.STEAM],
    type: [TYPES.DESSERT],
    yields: '6 servings',
    prepTime: '25 m',
    cookTime: '20 m',
    websites: [
        { label: 'Mango Sticky Rice', link: 'https://theforkedspoon.com/mango-sticky-rice/' }
    ],
    separated: true,
    ingredients: [
        { ...SWEET_RICE, amount: '2 c', additionalDetails: '', section: STICKY_RICE },
        { ...COCONUT_MILK, amount: '13.5 oz', additionalDetails: 'full-fat recommended', section: STICKY_RICE },
        { ...WHITE_SUGAR, amount: '6 Tbsp', additionalDetails: '', section: STICKY_RICE },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: STICKY_RICE},
        { ...COCONUT_CREAM, amount: '2/3 c', additionalDetails: 'full-fat recommended', section: COCONUT_CREAM_SAUCE },
        { ...WHITE_SUGAR, amount: '3 Tbsp', additionalDetails: '', section: COCONUT_CREAM_SAUCE },
        { ...MANGOES, amount: '2', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'cheesecloth' },
        { name: 'large pot' },
        { name: 'steamer basket or strainer' },
        { name: 'saucepan' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'In a large bowl, soak the rice for at least one hour (or best to do it overnight).', type: SOAK_RICE },
        { step: 'Wrap the rice in a cheesecloth to carefully drain and rinse the rice.', type: STEAM_RICE },
        { step: 'Reposition the rice in the center of the cheesecloth.', type: STEAM_RICE },
        { step: 'Let the rice finish draining.', type: STEAM_RICE },
        { step: 'Fill a large pot with an inch of water.', type: STEAM_RICE },
        { step: 'Carefully place the cheesecloth filled with rice in either a steamer basket or a strainer that will fit inside a covered pot. It is important to steam and not boil the rice.', type: STEAM_RICE },
        { step: 'Cover the pot with a lid and turn the heat on to high.', type: STEAM_RICE },
        { step: 'Bring the water to a boil then reduce to a simmer.', type: STEAM_RICE },
        { step: 'Steam the rice until the rice becomes translucent (about 15 to 20 minutes).', type: STEAM_RICE },
        { step: 'Over medium heat, add coconut milk to a saucepan. Stir it often to prevent burning and curdling.', type: STICKY_RICE },
        { step: 'Stir in sugar and salt until it dissolves. Set aside.', type: STICKY_RICE },
        { step: 'In a mixing bowl, transfer the steamed rice from the cheesecloth.', type: STICKY_RICE },
        { step: 'Mix in the coconut milk mixture.', type: STICKY_RICE },
        { step: 'Cover and let the rice soak in the milk (at least 5 minutes).', type: STICKY_RICE },
        { step: 'Over medium-high heat, combine coconut cream and sugar in a saucepan.', type: COCONUT_CREAM_SAUCE },
        { step: 'Bring to a boil. Reduce to low and let simmer.', type: COCONUT_CREAM_SAUCE },
        { step: 'Once it starts to thicken it is ready.', type: COCONUT_CREAM_SAUCE },
        { step: 'Serve the sweetened sticky rice topped with mangoes, sauce and sesame seeds. You are going to be in heaven!', type: SECTIONS.SERVE },
    ]
};