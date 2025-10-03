// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { BEEF_RIBEYE_STEAK, GARLIC, BROWN_SUGAR, LIGHT_SOY_SAUCE, FISH_SAUCE, BLACK_PEPPER, WHITE_SUGAR, WHITE_VINEGAR, WATER, RED_ONION, ROMA_TOMATO, WHITE_RICE, CILANTRO, VEGETABLE_OIL, OYSTER_SAUCE, WATERCRESS } = require('./ingredients');

const RED_ONION_SAUCE = 'Red Onion Sauce';
const OIL_SECTION = 'Oil for Cooking';
const VEGETABLE_BED = 'Vegetable Bed';

const PREP_RED_ONION_SAUCE = 'Prep Red Onion Sauce';
const PLATE_UP_VEGETABLES = 'Plate Up Vegetables';

module.exports = {
    wip: true,
    cardName: 'Shaking Beef',
    name: 'Vietnamese Shaking Beef (Bo Luc Lac)',
    img: '',
    recipeAuthors: ['Matthew Johnson'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
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
        { ...RED_ONION, amount: 1, unit: '', additionalDetails: 'sliced into rings', section: RED_ONION_SAUCE },

        { ...WATERCRESS, amount: 2, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: '', section: VEGETABLE_BED },
        { ...ROMA_TOMATO, amount: 3, unit: '', additionalDetails: 'sliced', section: VEGETABLE_BED },

        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OIL_SECTION },

        { ...CILANTRO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
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
        { step: 'Marinate at room temperature for 30 minutes.', section: SECTIONS.MARINATE_BEEF },

        { step: `In a small bowl, combine the "${RED_ONION_SAUCE}" section ingredients. Set aside.`, section: PREP_RED_ONION_SAUCE },
        { step: 'Arrange watercress and tomato slices on a serving plate.', section: PLATE_UP_VEGETABLES },

        { step: 'Over high heat, add oil to a wok. Tilt to spread the oil so it coats the wok.', section: SECTIONS.COOK_BEEF },
        { step: 'Add beef in batches. Sear until all sides are charred and medium rare (about 3 to 5 minutes).', section: SECTIONS.COOK_BEEF },
        { step: 'Remove beef. Continue with as many batches as needed.', section: SECTIONS.COOK_BEEF },
        { step: 'Arrange beef on top of the bed of watercress and tomatoes.', section: SECTIONS.ASSEMBLE },
        { step: 'Top with the red onion sauce and cilantro.', section: SECTIONS.ASSEMBLE },
        { step: 'Enjoy this Vietnamese dish with rice!', section: SECTIONS.SERVE },
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