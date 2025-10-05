const shakingBeef1 = '../assets/Products/shaking-beef-1.jpeg';
const shakingBeef2 = '../assets/Products/shaking-beef-2.jpeg';
const shakingBeef3 = '../assets/Products/shaking-beef-3.jpeg';
const shakingBeef4 = '../assets/Products/shaking-beef-4.jpeg';
const shakingBeef5 = '../assets/Products/shaking-beef-5.jpeg';
const shakingBeef6 = '../assets/Products/shaking-beef-6.jpeg';
const shakingBeef7 = '../assets/Products/shaking-beef-7.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { BEEF_RIBEYE_STEAK, GARLIC, BROWN_SUGAR, LIGHT_SOY_SAUCE, FISH_SAUCE, BLACK_PEPPER, WHITE_SUGAR, WHITE_VINEGAR, WATER, RED_ONION, ROMA_TOMATO, WHITE_RICE, VEGETABLE_OIL, OYSTER_SAUCE, BABY_ARUGULA } = require('./ingredients');

const RED_ONION_SAUCE = 'Red Onion Sauce';
const OIL_SECTION = 'Oil for Cooking';
const VEGETABLE_BED = 'Vegetable Bed';

const PREP_RED_ONION_SAUCE = 'Prep Red Onion Sauce';
const PLATE_UP_VEGETABLES = 'Plate Up Vegetables';

module.exports = {
    cardName: 'Shaking Beef',
    name: 'Vietnamese Shaking Beef (Bo Luc Lac)',
    img: shakingBeef6,
    recipeAuthors: ['Matthew Johnson'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.VIETNAMESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Vietnamese Shaking Beef', link: 'https://tasty.co/recipe/vietnamese-shaking-beef' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_RIBEYE_STEAK, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1 inch cubes', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 10, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...BROWN_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },

        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RED_ONION_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RED_ONION_SAUCE },
        { ...WHITE_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RED_ONION_SAUCE },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RED_ONION_SAUCE },
        { ...RED_ONION, amount: 1, unit: '', additionalDetails: 'sliced into half rings', section: RED_ONION_SAUCE },

        { ...BABY_ARUGULA, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: VEGETABLE_BED },
        { ...ROMA_TOMATO, amount: 3, unit: '', additionalDetails: 'sliced', section: VEGETABLE_BED },

        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OIL_SECTION },
        { ...WHITE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'small bowl' },
        { name: 'serving plate' },
        { name: 'wok' },
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.MARINATE_BEEF },
        { step: 'Marinate at room temperature for 30 minutes.', section: SECTIONS.MARINATE_BEEF, img: shakingBeef1 },

        { step: `In a small bowl, combine the "${RED_ONION_SAUCE}" section ingredients. Set aside.`, section: PREP_RED_ONION_SAUCE, img: shakingBeef2 },
        { step: 'Arrange arugula and tomato slices on a serving plate.', section: PLATE_UP_VEGETABLES, img: shakingBeef3 },

        { step: 'Over high heat, add oil to a wok. Tilt to spread the oil so it coats the wok.', section: SECTIONS.COOK_BEEF },
        { step: 'Add beef in batches. Sear until all sides are charred and medium rare (about 3 to 5 minutes).', section: SECTIONS.COOK_BEEF, img: shakingBeef4 },
        { step: 'Remove beef. Continue with as many batches as needed.', section: SECTIONS.COOK_BEEF },
        { step: 'Arrange beef on top of the bed of arugula and tomatoes.', section: SECTIONS.ASSEMBLE },
        { step: 'Optionally cook the red onion sauce over medium heat for 1 to 2 minutes.', section: SECTIONS.ASSEMBLE },
        { step: 'Top with the red onion sauce.', section: SECTIONS.ASSEMBLE, img: shakingBeef5 },
        { step: 'Enjoy this Vietnamese dish with rice!', section: SECTIONS.SERVE, img: shakingBeef7 },
    ],
    notes: [
        { note: 'The original recipe calls for watercress, but it had too strong of a peppery flavor and it overpowered the dish. Baby arugula is a great substitute that still gives a peppery flavor but is more mild. Plus baby arugula is easier to find.' },
        { note: 'The red onion sauce was not cooked in the original recipe. I found that the raw onion flavor was too strong and harsh. I am planning on cooking the sauce slightly to mellow out the flavor and makes it more palatable.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store beef separately from the vegetables so it can be reheated.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave just the beef until heated through (about 1 to 2 minutes).',
        },
    ],
    mealPrep: true,
};