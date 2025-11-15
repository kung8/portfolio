const dinner1 = '../assets/Products/hobo-dinner-1.jpeg';
const dinner2 = '../assets/Products/hobo-dinner-2.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALUMINUM_FOIL,
    BAKING_PAN,
    BLACK_PEPPER,
    CARROT,
    OLIVE_OIL,
    OVEN,
    POTATO,
    SALT,
    SUMMER_SAUSAGE,
    YELLOW_ONION,
} = require('./ingredients');

const HOBO_DINNER = 'Hobo Dinner';
const PREP_DISH = 'Prep Dish';

module.exports = {
    cardName: 'Hobo Dinner',
    name: 'Hobo Dinner',
    img: dinner1,
    available: true,
    category: [CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.VEGETABLE, TYPES.PROTEIN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...SUMMER_SAUSAGE, amount: 1, unit: '', additionalDetails: 'sliced', section: HOBO_DINNER },
        { ...CARROT, amount: 3, unit: '', additionalDetails: 'sliced', section: HOBO_DINNER },
        { ...POTATO, amount: 3, unit: '', additionalDetails: 'chunked', section: HOBO_DINNER },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'sliced', section: HOBO_DINNER },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: HOBO_DINNER },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: HOBO_DINNER },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HOBO_DINNER },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Add your preferred sliced veggies and proteins into the baking pan.`, section: PREP_DISH },
        { step: `Drizzle a light amount of olive oil.`, section: PREP_DISH },
        { step: `Cover with aluminum foil.`, section: PREP_DISH },
        { step: `Bake for 40 minutes, or until the selected protein is cooked.`, section: SECTIONS.BAKE, img: dinner2 },
        { step: `Enjoy this nostalgic meal around a campfire, backyard or in your home.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'I love summer sausage with these simple hearty veggies.' },
        { note: 'If you choose to use other proteins, note that the amount of oil may need to be adjusted.' },
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