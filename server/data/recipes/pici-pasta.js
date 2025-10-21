// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BABY_SPINACH, FOOD_PROCESSOR, LARGE_POT, SALT, STOVE } = require('./ingredients');

const COOK_DOUGH = 'Cook Dough';

module.exports = {
    wip: true,
    cardName: 'Pici Pasta',
    name: 'Pici Pasta',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BLEND, METHODS.BOIL],
    type: [TYPES.PASTA],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pici Pasta', 
            link: 'https://monmackfood.com/vibrant-green-pici-pasta-no-pasta-roller-required/',
            author: ['Montana Mack'],
            finder: 'Chelsey Hickenlooper', 
        }
    ],
    separated: false,
    ingredients: [
        { ...BABY_SPINACH, amount: 4.2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 6.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        FOOD_PROCESSOR,
        STOVE,
    ],
    supplies: [
        LARGE_POT,
    ],
    directions: [
        { step: 'Add all ingredients to a food processor.', section: SECTIONS.PREP_DOUGH },
        { step: 'Blend until it forms a vibrant green, smooth dough.', section: SECTIONS.PREP_DOUGH },
        { step: 'Transfer to a clean working station.', section: SECTIONS.PREP_DOUGH },
        { step: 'Pinch a teaspoon worth of dough.', section: SECTIONS.PREP_DOUGH },
        { step: 'Roll it out to long skinny shapes.', section: SECTIONS.PREP_DOUGH },
        { step: 'Repeat for the rest of the dough.', section: SECTIONS.PREP_DOUGH },
        { step: 'Bring a pot of salted water to a boil.', section: COOK_DOUGH },
        { step: 'Drop dough into water.', section: COOK_DOUGH },
        { step: 'Cook until the dough floats to the top (about 30 seconds to 1 minute).', section: COOK_DOUGH },
        { step: 'Serve them with your preferred sauce.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original chef tops with a garlic butter sauce.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};