const stroganoff1 = '../assets/Products/beef-stroganoff-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BEEF_BROTH,
    BEEF_SIRLOIN,
    BLACK_PEPPER,
    CUTTING_BOARD,
    DIJON_MUSTARD,
    EGG_NOODLES,
    FRYING_PAN,
    GARLIC,
    KNIFE,
    MUSHROOM,
    OLIVE_OIL,
    SALT,
    SOUR_CREAM,
    SPATULA,
    STOVE,
    THYME,
    UNSALTED_BUTTER,
    WORCESTERSHIRE_SAUCE,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Beef Stroganoff',
    name: 'Beef Stroganoff',
    img: stroganoff1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.RUSSIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.NOODLE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Beef Stroganoff',
            link: 'https://www.spendwithpennies.com/easy-beef-stroganoff/',
            author: ['Holly Nilsson'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_SIRLOIN, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: '1/2 inch slices', section: SECTIONS.BEEF },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...MUSHROOM, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'sliced', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },

        { ...BEEF_BROTH, amount: 14.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WORCESTERSHIRE_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...THYME, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...SOUR_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SERVE },
        { ...EGG_NOODLES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        CUTTING_BOARD,
        KNIFE,
        FRYING_PAN,
        SPATULA,
    ],
    directions: [
        { step: 'Pat dry beef with paper towels and cut into strips.', section: SECTIONS.COOK_BEEF },
        { step: 'Season the beef with salt and pepper.', section: SECTIONS.COOK_BEEF },
        { step: 'Toss beef in flour. Shake off excess flour.', section: SECTIONS.COOK_BEEF },
        { step: 'Over medium-high heat, add a little olive oil to a pan.', section: SECTIONS.COOK_BEEF },
        { step: 'Cook beef in batches. Brown beef (about 1 minute per side). Set aside.', section: SECTIONS.COOK_BEEF },

        { step: 'Reduce to medium heat.', section: SECTIONS.COOK_VEGGIES },
        { step: 'Add butter and onion to the pan. Cook until onion is softened (about 4 to 5 minutes).', section: SECTIONS.COOK_VEGGIES },
        { step: 'Add garlic and mushroom. Cook until softened (about 4 minutes).', section: SECTIONS.COOK_VEGGIES },
        { step: 'Add flour. Cook for 1 minute.', section: SECTIONS.COOK_VEGGIES },

        { step: 'Add broth, worchestershire sauce, mustard and thyme. Bring to a boil.', section: SECTIONS.COOK_SAUCE },
        { step: 'Reduce heat to low. Simmer uncovered for 5 minutes.', section: SECTIONS.COOK_SAUCE },

        { step: 'Add back beef. Cook until beef is heated through (about 2 minutes).', section: SECTIONS.ASSEMBLE },
        { step: 'Remove from heat. Add sour cream.', section: SECTIONS.ASSEMBLE },

        { step: 'Serve over cooked noodles.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium heat, reheat in a pan until reheated through. Stir occasionally.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 15 to 20 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with microwave-safe lid or plastic wrap. Microwave at 50% power until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};