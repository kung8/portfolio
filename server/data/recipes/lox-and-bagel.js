const bagel1 = '../assets/Products/lox-and-bagel-1.jpeg';
const bagel2 = '../assets/Products/lox-and-bagel-2.jpeg';
const bagel3 = '../assets/Products/lox-and-bagel-3.jpeg';
const bagel4 = '../assets/Products/lox-and-bagel-4.jpeg';
const bagel5 = '../assets/Products/lox-and-bagel-5.jpeg';
const bagel6 = '../assets/Products/lox-and-bagel-6.jpeg';
const bagel7 = '../assets/Products/lox-and-bagel-7.jpeg';
const bagel8 = '../assets/Products/lox-and-bagel-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAGELS, BAKING_PAN, BLACK_PEPPER, BROWN_SUGAR, CAPER, COOLING_RACK, CREAM_CHEESE, FRESH_DILL, KOSHER_SALT, OVEN, PAPER_TOWELS, PARSLEY, PLASTIC_WRAP, RED_ONION, REFRIGERATOR, SALMON_FISH, SMALL_BOWL, STOVE, WOOD_CHIPS } = require('./ingredients');

const SALMON_SECTION = 'Salmon';
const CURE_SALMON = 'Cure Salmon';
const RINSE_SALMON = 'Rinse Salmon';
const CREATE_PELLICLE = 'Create Pellicle';
const COLD_SMOKE_SALMON = 'Cold Smoke Salmon';

module.exports = {
    cardName: 'Lox and Bagel',
    name: 'Lox and Bagel',
    img: bagel8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.SCANDINAVIAN],
    method: [METHODS.CURE, METHODS.TOAST],
    protein: [PROTEIN.FISH],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 76.5, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Cure Salmon',
            link: 'https://www.babaganosh.org/how-to-cure-salmon-lox-recipe/',
            authors: ['Kate Vaynshteyn'],
            finder: 'Kevin Ung'
        },
        {
            label: 'Curing and Cold Smoking Salmon',
            link: 'https://www.youtube.com/watch?v=_dBtzIHnsiU',
            authors: ['Impossibly Kosher'],
            finder: 'Kevin Ung'
        },
    ],
    ingredients: [
        { ...SALMON_FISH, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SALMON_SECTION },

        { ...KOSHER_SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...BAGELS, amount: 5, unit: '', additionalDetails: '', section: SECTIONS.SANDWICH },

        { ...CREAM_CHEESE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SANDWICH },
        { ...RED_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'thinly sliced', section: SECTIONS.SANDWICH },
        { ...CAPER, amount: '', unit: '', additionalDetails: 'drained', section: SECTIONS.SANDWICH },
        { ...FRESH_DILL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SANDWICH },
    ],
    appliances: [
        REFRIGERATOR,
        OVEN,
        STOVE,
    ],
    supplies: [
        SMALL_BOWL,
        PAPER_TOWELS,
        BAKING_PAN,
        PLASTIC_WRAP,
        COOLING_RACK,
        WOOD_CHIPS,
    ],
    directions: [
        { step: `In a small bowl, combine the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_SEASONINGS },

        { step: `Rinse the salmon. Pat dry with paper towel. Remove any bones if there are any.`, section: CURE_SALMON },
        { step: `In a baking pan, spread a layer of the seasoning mixture.`, section: CURE_SALMON },
        { step: `Place the salmon skin-side down in the baking pan. Rub the seasoning all over the salmon. Make sure the top of the salmon is covered by the seasoning.`, section: CURE_SALMON, img: bagel2 },
        { step: `Cover the salmon with plastic wrap and place something heavy on top.`, section: CURE_SALMON, img: bagel3 },
        { step: `Place it in the fridge and let it cure for 24 hours.`, section: CURE_SALMON, img: bagel4 },

        { step: `Rinse under cold water.`, section: RINSE_SALMON },
        { step: `Soak it a baking pan filled with water for 30 minutes to continue to extract excess salt.`, section: RINSE_SALMON },

        { step: `Pat dry with paper towels.`, section: CREATE_PELLICLE },
        { step: `Place a wire rack on top of a baking dish.`, section: CREATE_PELLICLE },
        { step: `Place the salmon on top of the wire rack with the skin side down uncovered.`, section: CREATE_PELLICLE, img: bagel5 },
        { step: `Place in the fridge for 48 hours. This will completely dry out the outer layer forming a hard crust called pellicle.`, section: CREATE_PELLICLE },

        { step: `Place wood chips in an oven-safe pan.`, section: COLD_SMOKE_SALMON },
        { step: `Heat it on the stove until the chips start to smoke.`, section: COLD_SMOKE_SALMON },
        { step: `Place the pan on the lowest rack in the oven.`, section: COLD_SMOKE_SALMON, img: bagel6 },
        { step: `Place a wire rack on top of a baking sheet. Place the salmon skin-side down on the wire rack.`, section: COLD_SMOKE_SALMON },
        { step: `Place the baking sheet on a higher rack.`, section: COLD_SMOKE_SALMON },
        { step: `Close the oven door and let it cold smoke for 2 to 4 hours.`, section: COLD_SMOKE_SALMON, img: bagel7 },

        { step: `Toast bagel.`, section: SECTIONS.ASSEMBLE },
        { step: `Spread cream cheese.`, section: SECTIONS.ASSEMBLE },
        { step: `Cut salmon into thin slices as needed.`, section: SECTIONS.ASSEMBLE },
        { step: `Top cured salmon slices`, section: SECTIONS.ASSEMBLE },
        { step: `Top with the rest of the "${SECTIONS.SANDWICH}" section ingredients.`, section: SECTIONS.ASSEMBLE },

        { step: `Enjoy this delicious open faced sandwich.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `Creating a pellicle is essential for properly smoking the salmon later on. If the pellicle hasn't formed the smoke will adhere to the water instead of penetrating the fish.` },
        { note: `I had this recipe for the first time at Apollo Bagel in NYC.`, img: bagel1 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store the lox in a separate airtight container in the fridge.',
        },
    ],
    mealPrep: true,
};