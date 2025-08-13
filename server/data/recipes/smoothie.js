const smoothie = '../assets/Products/smoothie.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const {
    ALMOND_MILK,
    BANANA,
    FROZEN_BERRIES,
    KALE,
    PLAIN_YOGURT,
    PEANUT_BUTTER,
} = require('./ingredients');

module.exports = {
    cardName: 'Smoothie',
    name: 'Smoothie',
    img: smoothie,
    recipeAuthors: ['Kevin Ung'],
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.SNACK, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PEANUT],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...ALMOND_MILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...BANANA, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...FROZEN_BERRIES, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...KALE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...PLAIN_YOGURT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...PEANUT_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'blender' },
    ],
    directions: [
        { step: 'Place bananas at the bottom on the blender.', section: SECTIONS.MAIN },
        { step: 'Add peanut butter and yogurt.', section: SECTIONS.MAIN },
        { step: 'Add mixed frozen fruits.', section: SECTIONS.MAIN },
        { step: 'Add almond milk.', section: SECTIONS.MAIN },
        { step: 'Blend until everything is well mixed.', section: SECTIONS.MAIN },
        { step: 'Slowly add each of the preferred ingredients and feel free to swap out fruits and vegetables.', section: SECTIONS.MAIN },
        { step: 'The thing to keep in mind is the liquid to solid food ratio. Too much liquid will leave a very liquidy smoothie while not enough liquid will make a terrible noise and can damage your blender blades.', section: SECTIONS.MAIN },
        { step: 'When you are satisfied with what you want inside the smoothie, begin to blend. I like to start on a blend setting with a low speed. Then as it begins to blend then I increase the speed.', section: SECTIONS.MAIN },
        { step: 'From my Jamba Juice years, if you can see a tornado inside the smoothie - it\'s perfect. I continue to follow that as I blend my smoothies.', section: SECTIONS.MAIN },
        { step: 'Enjoy the fresh, fruity sweetness and goodness!', section: SECTIONS.MAIN },
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