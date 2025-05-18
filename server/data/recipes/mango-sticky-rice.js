// const mango1 = '../assets/Products/mango-sticky-rice-1.jpeg';
// const mango2 = '../assets/Products/mango-sticky-rice-2.jpeg';
// const mango3 = '../assets/Products/mango-sticky-rice-3.jpeg';
// const mango4 = '../assets/Products/mango-sticky-rice-4.jpeg';
// const mango5 = '../assets/Products/mango-sticky-rice-5.jpeg';
// const mango6 = '../assets/Products/mango-sticky-rice-6.jpeg';
// const mango7 = '../assets/Products/mango-sticky-rice-7.jpeg';
// const mango8 = '../assets/Products/mango-sticky-rice-8.jpeg';
// const mango9 = '../assets/Products/mango-sticky-rice-9.jpeg';
// const mango10 = '../assets/Products/mango-sticky-rice-10.jpeg';
// const mango11 = '../assets/Products/mango-sticky-rice-11.jpeg';
// const mango12 = '../assets/Products/mango-sticky-rice-12.jpeg';
// // const mango13 = '../assets/Products/mango-sticky-rice-13.jpeg';
// const mango14 = '../assets/Products/mango-sticky-rice-14.jpeg';
// // const mango15 = '../assets/Products/mango-sticky-rice-15.jpeg';
// const mango16 = '../assets/Products/mango-sticky-rice-16.jpeg';
// const mango17 = '../assets/Products/mango-sticky-rice-17.jpeg';
// // const mango18 = '../assets/Products/mango-sticky-rice-18.jpeg';
// const mango19 = '../assets/Products/mango-sticky-rice-19.jpeg';
// const mango20 = '../assets/Products/mango-sticky-rice-20.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { COCONUT_MILK, SALT, MANGO, SWEET_RICE, COCONUT_CREAM, BROWN_SUGAR } = require('./ingredients');

// const SOAK_RICE = 'Soak Rice';
// const STEAM_RICE = 'Steam Rice';
// const STICKY_RICE = 'Sticky Rice';
// const COCONUT_CREAM_SAUCE = 'Coconut Cream Sauce';

const RICE_SECTION = 'Rice';
const COCONUT_SAUCE_SECTION = 'Coconut Sauce';
const STICKY_RICE_SECTION = 'Sticky Rice';

const PREP_RICE = 'Prep Rice';
const COOK_RICE = 'Cook Rice';
const HEAT_COCONUT_SAUCE = 'Heat Coconut Sauce';
const MAKE_STICKY_RICE = 'Make Sticky Rice';

module.exports = {
    wip: true,
    cardName: 'Mango Sticky Rice',
    name: 'Thai Mango Sticky Rice',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.STEAM],
    type: [TYPES.DESSERT],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Mango Sticky Rice', link: 'https://cooking.nytimes.com/recipes/1014806-sticky-rice-with-mango' }
        // { label: 'Mango Sticky Rice', link: 'https://theforkedspoon.com/mango-sticky-rice/' }
    ],
    separated: true,
    ingredients: [
        { ...SWEET_RICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...COCONUT_MILK, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: COCONUT_SAUCE_SECTION },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_SAUCE_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COCONUT_SAUCE_SECTION },
        { ...COCONUT_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: STICKY_RICE_SECTION },
        { ...MANGO, amount: 2, unit: '', additionalDetails: 'peeled and 1/2-inch sliced', section: SECTIONS.SERVE },


        // { ...SWEET_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: STICKY_RICE },
        // { ...COCONUT_MILK, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'full-fat recommended', section: STICKY_RICE },
        // { ...WHITE_SUGAR, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: STICKY_RICE },
        // { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: STICKY_RICE },
        // { ...COCONUT_CREAM, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'full-fat recommended', section: COCONUT_CREAM_SAUCE },
        // { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COCONUT_CREAM_SAUCE },
        // { ...MANGO, amount: 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        // { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'steamer basket' },
        { name: 'cheesecloth' },
        { name: 'pot' },
        { name: 'saucepan' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'In a medium bowl, add rice.', section: PREP_RICE },
        { step: 'Rinse rice in cold water until the water is clear.', section: PREP_RICE },
        { step: 'Drain.', section: PREP_RICE },
        { step: 'Cover rice with cold water. Soak for at least 2 hours.', section: PREP_RICE },

        { step: 'Drain rice.', section: COOK_RICE },
        { step: 'Line a steamer basket that will fit on the pot with a cheesecloth.', section: COOK_RICE },
        { step: 'Place the drained rice in the steamer basket', section: COOK_RICE },
        { step: 'Bring a pot of water to a boil.', section: COOK_RICE },
        { step: 'Place the basket on the pot and cover with a lid.', section: COOK_RICE },
        { step: 'Steam for 15 minutes.', section: COOK_RICE },
        { step: 'Carefully flip the rice. Re-place the lid.', section: COOK_RICE },
        { step: 'Steam until the rice is cooked and translucent (about 10 - 20 minutes).', section: COOK_RICE },
        { step: 'Turn off heat.', section: COOK_RICE },
        { step: 'Fluff the rice with a fork.', section: COOK_RICE },
        { step: 'Let rest for 5 minutes.', section: COOK_RICE },

        { step: 'In a saucepan, combine the "Coconut Sauce" section ingredients. If using coconut milk from a can only use the milk and leave the cream for later.', section: HEAT_COCONUT_SAUCE },
        { step: 'Over low heat, heat until the sugar dissolves.', section: HEAT_COCONUT_SAUCE },
        { step: 'Set aside.', section: HEAT_COCONUT_SAUCE },

        { step: 'In a mixing bowl, add cooked rice and the warm coconut sauce. Mix.', section: MAKE_STICKY_RICE },
        { step: 'Let sit for 10 minutes. This gives it enough time for it to absorb the milk mixture.', section: MAKE_STICKY_RICE },
        { step: 'Add coconut cream. Mix.', section: MAKE_STICKY_RICE },

        { step: 'Serve this topped with the mango slices.', section: SECTIONS.SERVE },
        // { step: 'In a large bowl, soak the rice for at least one hour (or best to do it overnight).', section: SOAK_RICE, img: mango1 },
        // { step: 'Wrap the rice in a cheesecloth to carefully drain and rinse the rice.', section: STEAM_RICE, img: mango2 },
        // { step: 'Reposition the rice in the center of the cheesecloth.', section: STEAM_RICE },
        // { step: 'Let the rice finish draining.', section: STEAM_RICE },
        // { step: 'Fill a large pot with an inch of water.', section: STEAM_RICE, img: mango3 },
        // { step: 'Carefully place the cheesecloth filled with rice in either a steamer basket or a strainer that will fit inside a covered pot. It is important to steam and not boil the rice.', section: STEAM_RICE, img: [mango4, mango5, mango6] },
        // { step: 'Cover the pot with a lid and turn the heat on to high.', section: STEAM_RICE, img: mango7 },
        // { step: 'Bring the water to a boil then reduce to a simmer.', section: STEAM_RICE },
        // { step: 'Steam the rice until the rice becomes translucent (about 15 to 20 minutes).', section: STEAM_RICE, img: mango8 },
        // { step: 'In a mixing bowl, transfer the steamed rice from the cheesecloth.', section: STEAM_RICE, img: mango9 },
        // { step: 'Over medium heat, add coconut milk to a saucepan. Stir it often to prevent burning and curdling.', section: STICKY_RICE, img: mango10 },
        // { step: 'Stir in sugar and salt until it dissolves. Set aside.', section: STICKY_RICE, img: mango11 },
        // { step: 'Mix the coconut milk mixture to the rice in the mixing bowl.', section: STICKY_RICE, img: mango12 },
        // { step: 'Cover and let the rice soak in the milk (at least 5 minutes).', section: STICKY_RICE, img: mango14 },
        // { step: 'Over medium-high heat, combine coconut cream and sugar in a saucepan.', section: COCONUT_CREAM_SAUCE, img: mango16 },
        // { step: 'Bring to a boil. Reduce to low and let simmer.', section: COCONUT_CREAM_SAUCE, img: mango17 },
        // { step: 'Once it starts to thicken it is ready.', section: COCONUT_CREAM_SAUCE },
        // { step: 'Serve the sweetened sticky rice topped with mangoes, sauce and sesame seeds. You are going to be in heaven!', section: SECTIONS.SERVE, img: mango20 },
    ], 
    notes: [
        { note: 'A 13.5 oz can of coconut milk produces the exact amount of milk and cream for one batch.' },
        { note: 'Make sure the water does not touch the basket. If it does, the rice will boil instead of steam.' },
    ]
};