const mango1 = '../assets/Products/mango-sticky-rice-1.jpeg';
const mango2 = '../assets/Products/mango-sticky-rice-2.jpeg';
const mango3 = '../assets/Products/mango-sticky-rice-3.jpeg';
const mango4 = '../assets/Products/mango-sticky-rice-4.jpeg';
const mango5 = '../assets/Products/mango-sticky-rice-5.jpeg';
const mango6 = '../assets/Products/mango-sticky-rice-6.jpeg';
const mango7 = '../assets/Products/mango-sticky-rice-7.jpeg';
const mango8 = '../assets/Products/mango-sticky-rice-8.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BROWN_SUGAR, CHEESECLOTH, COCONUT_MILK, LARGE_POT, MANGO, MEDIUM_BOWL, MIXING_BOWL, SALT, SAUCEPAN, STEAMER, STOVE, SWEET_RICE } = require('./ingredients');

const MAKE_STICKY_RICE = 'Make Sticky Rice';

module.exports = {
    cardName: 'Mango Sticky Rice',
    name: 'Thai Mango Sticky Rice',
    img: mango8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.STEAM],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Mango Sticky Rice', 
            link: 'https://cooking.nytimes.com/recipes/1014806-sticky-rice-with-mango',
            authors: ['David Tanis'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...SWEET_RICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...COCONUT_MILK, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...MANGO, amount: 2, unit: '', additionalDetails: 'peeled and 1/2 inch sliced', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MEDIUM_BOWL,
        STEAMER,
        CHEESECLOTH,
        LARGE_POT,
        SAUCEPAN,
        MIXING_BOWL,
    ],
    directions: [
        { step: `In a medium bowl, add rice.`, section: SECTIONS.PREP_RICE },
        { step: `Rinse rice in cold water until the water is clear.`, section: SECTIONS.PREP_RICE },
        { step: `Drain.`, section: SECTIONS.PREP_RICE },
        { step: `Cover rice with cold water. Soak for at least 2 hours.`, section: SECTIONS.PREP_RICE, img: mango1 },

        { step: `Drain rice.`, section: SECTIONS.COOK_RICE, img: mango2 },
        { step: `Line a steamer basket that will fit on the pot with a cheesecloth.`, section: SECTIONS.COOK_RICE },
        { step: `Place the drained rice in the steamer basket`, section: SECTIONS.COOK_RICE, img: mango3 },
        { step: `Bring a pot of water to a boil.`, section: SECTIONS.COOK_RICE },
        { step: `Place the basket on the pot and cover with a lid.`, section: SECTIONS.COOK_RICE, img: mango4 },
        { step: `Steam for 15 minutes.`, section: SECTIONS.COOK_RICE },
        { step: `Carefully flip the rice. Re-place the lid.`, section: SECTIONS.COOK_RICE },
        { step: `Steam until the rice is cooked and translucent (about 10 to 20 minutes).`, section: SECTIONS.COOK_RICE },
        { step: `Turn off heat.`, section: SECTIONS.COOK_RICE },
        { step: `Fluff the rice with a fork.`, section: SECTIONS.COOK_RICE },
        { step: `Let rest for 5 minutes.`, section: SECTIONS.COOK_RICE, img: mango5 },

        { step: `In a saucepan, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE },
        { step: `Over low heat, heat until the sugar dissolves.`, section: SECTIONS.COOK_SAUCE, img: mango6 },
        { step: `Set aside.`, section: SECTIONS.COOK_SAUCE },

        { step: `In a mixing bowl, add cooked rice and the warm coconut sauce. Mix.`, section: MAKE_STICKY_RICE, img: mango7 },
        { step: `Let sit for 10 minutes. This gives it enough time for it to absorb the milk mixture.`, section: MAKE_STICKY_RICE },

        { step: `Serve this topped with the mango slices. You are going to be in heaven!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'A 13.5 oz can of coconut milk produces the exact amount of milk and cream for one batch.' },
        { note: 'Make sure the water does not touch the basket. If it does, the rice will boil instead of steam.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave the sticky rice in 15-second intervals until warm.',
        },
    ],
    mealPrep: true,
};