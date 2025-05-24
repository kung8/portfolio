const mango1 = '../assets/Products/mango-sticky-rice-1.jpeg';
const mango2 = '../assets/Products/mango-sticky-rice-2.jpeg';
const mango3 = '../assets/Products/mango-sticky-rice-3.jpeg';
const mango4 = '../assets/Products/mango-sticky-rice-4.jpeg';
const mango5 = '../assets/Products/mango-sticky-rice-5.jpeg';
const mango6 = '../assets/Products/mango-sticky-rice-6.jpeg';
const mango7 = '../assets/Products/mango-sticky-rice-7.jpeg';
const mango8 = '../assets/Products/mango-sticky-rice-8.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { COCONUT_MILK, SALT, MANGO, SWEET_RICE, BROWN_SUGAR } = require('./ingredients');

const RICE_SECTION = 'Rice';
const COCONUT_SAUCE_SECTION = 'Coconut Sauce';

const PREP_RICE = 'Prep Rice';
const COOK_RICE = 'Cook Rice';
const HEAT_COCONUT_SAUCE = 'Heat Coconut Sauce';
const MAKE_STICKY_RICE = 'Make Sticky Rice';

module.exports = {
    cardName: 'Mango Sticky Rice',
    name: 'Thai Mango Sticky Rice',
    img: mango8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.STEAM],
    type: [TYPES.DESSERT],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Mango Sticky Rice', link: 'https://cooking.nytimes.com/recipes/1014806-sticky-rice-with-mango' }
    ],
    separated: true,
    ingredients: [
        { ...SWEET_RICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...COCONUT_MILK, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: COCONUT_SAUCE_SECTION },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_SAUCE_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COCONUT_SAUCE_SECTION },
        { ...MANGO, amount: 2, unit: '', additionalDetails: 'peeled and 1/2-inch sliced', section: SECTIONS.SERVE },
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
        { step: 'Cover rice with cold water. Soak for at least 2 hours.', section: PREP_RICE, img: mango1 },

        { step: 'Drain rice.', section: COOK_RICE, img: mango2 },
        { step: 'Line a steamer basket that will fit on the pot with a cheesecloth.', section: COOK_RICE },
        { step: 'Place the drained rice in the steamer basket', section: COOK_RICE, img: mango3 },
        { step: 'Bring a pot of water to a boil.', section: COOK_RICE },
        { step: 'Place the basket on the pot and cover with a lid.', section: COOK_RICE, img: mango4 },
        { step: 'Steam for 15 minutes.', section: COOK_RICE },
        { step: 'Carefully flip the rice. Re-place the lid.', section: COOK_RICE },
        { step: 'Steam until the rice is cooked and translucent (about 10 - 20 minutes).', section: COOK_RICE },
        { step: 'Turn off heat.', section: COOK_RICE },
        { step: 'Fluff the rice with a fork.', section: COOK_RICE },
        { step: 'Let rest for 5 minutes.', section: COOK_RICE, img: mango5 },

        { step: 'In a saucepan, combine the "Coconut Sauce" section ingredients.', section: HEAT_COCONUT_SAUCE },
        { step: 'Over low heat, heat until the sugar dissolves.', section: HEAT_COCONUT_SAUCE, img: mango6 },
        { step: 'Set aside.', section: HEAT_COCONUT_SAUCE },

        { step: 'In a mixing bowl, add cooked rice and the warm coconut sauce. Mix.', section: MAKE_STICKY_RICE, img: mango7 },
        { step: 'Let sit for 10 minutes. This gives it enough time for it to absorb the milk mixture.', section: MAKE_STICKY_RICE },

        { step: 'Serve this topped with the mango slices. You are going to be in heaven!', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'A 13.5 oz can of coconut milk produces the exact amount of milk and cream for one batch.' },
        { note: 'Make sure the water does not touch the basket. If it does, the rice will boil instead of steam.' },
    ]
};