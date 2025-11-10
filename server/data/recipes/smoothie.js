const smoothie1 = '../assets/Products/smoothie-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALMOND_MILK,
    BANANA,
    FROZEN_BERRIES,
    KALE,
    PEANUT_BUTTER,
    PLAIN_YOGURT,
    BLENDER,
} = require('./ingredients');

const SMOOTHIE_SECTION = 'Smoothie';
const PREP_SMOOTHIE = 'Prep Smoothie';

module.exports = {
    cardName: 'Smoothie',
    name: 'Smoothie',
    img: smoothie1,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.SNACK, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.SMOOTHIE],
    allergies: [ALLERGIES.PEANUT],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...BANANA, amount: 2, unit: '', additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...PEANUT_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...PLAIN_YOGURT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...FROZEN_BERRIES, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...KALE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...ALMOND_MILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SMOOTHIE_SECTION },
    ],
    appliances: [
        BLENDER,
    ],
    directions: [
        { step: `Place bananas at the bottom on the blender.`, section: PREP_SMOOTHIE },
        { step: `Add peanut butter and yogurt.`, section: PREP_SMOOTHIE },
        { step: `Add mixed frozen fruits.`, section: PREP_SMOOTHIE },
        { step: `Add almond milk.`, section: PREP_SMOOTHIE },
        { step: `Blend until everything is well mixed.`, section: SECTIONS.BLEND },
        { step: `Pour into glasses and serve.`, section: SECTIONS.SERVE },
        { step: `Enjoy the fresh, fruity sweetness and goodness!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The thing to keep in mind is the liquid to solid food ratio. Too much liquid will leave a very liquidy smoothie while not enough liquid will make a terrible noise and can damage your blender blades.' },
        { note: 'I like to start on a blend setting with a low speed. Then as it begins to blend then I increase the speed.' },
        { note: 'From my Jamba Juice years, if you can see a tornado inside the smoothie - it\'s perfect. I continue to follow that as I blend my smoothies.' },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: false,
};