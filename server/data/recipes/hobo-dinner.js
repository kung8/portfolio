const dinner = '../assets/Products/hobo-dinner.jpeg';
const pan = '../assets/Products/hobo-dinner-pan.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const {
    BLACK_PEPPER,
    CARROT,
    YELLOW_ONION,
    OLIVE_OIL,
    POTATO,
    SALT,
    SUMMER_SAUSAGE,
} = require('./ingredients');

module.exports = {
    cardName: 'Hobo Dinner',
    name: 'Hobo Dinner',
    img: pan,
    recipeAuthors: ['Kevin Ung'],
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.VEGETABLE, TYPES.PROTEIN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...SUMMER_SAUSAGE, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...CARROT, amount: 3, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...POTATO, amount: 3, unit: '', additionalDetails: 'chunked', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.MAIN },
        { step: 'Add your preferred sliced veggies and proteins into the baking pan. I love summer sausage with these simple hearty veggies.', section: SECTIONS.MAIN },
        { step: 'Drizzle a light amount of olive oil. If you choose to use other proteins, note that the amount of oil may need to be adjusted.', section: SECTIONS.MAIN },
        { step: 'Cover with aluminum foil.', section: SECTIONS.MAIN },
        { step: 'Bake for 40 minutes, or until the selected protein is cooked.', section: SECTIONS.MAIN, img: dinner },
    ],
    notes: [
        { note: 'This was a favorite tradition of mine when camping. Simply wrapping whatever food in layers of tin foil and cooking over a campfire. And while it cooked, telling stories and enjoying the outdoors.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Wrap in foil and place in a freezer bag.'
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Wrap in foil.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover in foil and bake at 400ºF until heated through (about 35 to 40 minutes).',
        },
    ],
    mealPrep: true,
};