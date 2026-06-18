// const wraps1 = '../assets/Products/chile-beef-lettuce-wraps-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { BLACK_PEPPER, BROWN_SUGAR, BUTTER_LETTUCE, CILANTRO, FISH_SAUCE, GARLIC, GINGER, GREEN_ONION, GROUND_BEEF, GROUND_PORK, LIGHT_SOY_SAUCE, LIME, MIXING_BOWL, OLIVE_OIL, SALT, SEA_SALT, SESAME_OIL, STOVE, STRAINER, THAI_CHILI_PEPPER, WOK } = require('./ingredients');

const BEEF_AND_PORK = 'Beef and Pork';
const LAST_TOUCHES = 'Last Touches';

const COOK_BEEF_AND_PORK = 'Cook Beef and Pork';

module.exports = {
    wip: true,
    cardName: 'Chile Beef Lettuce Wraps',
    name: 'Chile Beef Lettuce Wraps',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.FINGER_FOOD, TYPES.MAIN_COURSE, TYPES.WRAP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: "Gordon Ramsay's Home Cooking",
            label: 'Chile Beef Lettuce Wraps',
            link: null,
            authors: ['Gordon Ramsay'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_AND_PORK },
        { ...GROUND_BEEF, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BEEF_AND_PORK },
        { ...GROUND_PORK, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BEEF_AND_PORK },
        { ...SEA_SALT, amount: '', unit: '', additionalDetails: 'to taste', section: BEEF_AND_PORK },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: BEEF_AND_PORK },

        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.AROMATICS },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.AROMATICS },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'minced', section: SECTIONS.AROMATICS },
        { ...THAI_CHILI_PEPPER, amount: 1, unit: '', additionalDetails: 'seeded and chopped', section: SECTIONS.AROMATICS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.AROMATICS },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.AROMATICS },

        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LAST_TOUCHES },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'zested and juiced', section: LAST_TOUCHES },
        { ...GREEN_ONION, amount: 3, unit: '', additionalDetails: 'chopped', section: LAST_TOUCHES },
        
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...LIME, amount: 1 / 2, unit: '', additionalDetails: 'juiced', section: SECTIONS.DRESSING },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...THAI_CHILI_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.DRESSING },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'chopped', section: SECTIONS.DRESSING },
        { ...FISH_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        
        { ...BUTTER_LETTUCE, amount: 2, unit: '', additionalDetails: 'separated', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        STRAINER,
        MIXING_BOWL,
    ],
    directions: [
        { step: `Over medium-high heat, heat olive oil in a wok.`, section: COOK_BEEF_AND_PORK },
        { step: `Add the "${BEEF_AND_PORK}" section ingredients. Mix and break up.`, section: COOK_BEEF_AND_PORK },
        { step: `Cook until browned and crisp (about 5 to 7 minutes).`, section: COOK_BEEF_AND_PORK },
        { step: `Drain in strainer. Set aside.`, section: COOK_BEEF_AND_PORK },

        { step: `Wipe pan. Add sesame oil.`, section: SECTIONS.COOK_FILLING },
        { step: `Add the "${SECTIONS.AROMATICS}" section ingredients. Cook for 2 minutes.`, section: SECTIONS.COOK_FILLING },
        { step: `Add meat. Stir.`, section: SECTIONS.COOK_FILLING },
        { step: `Add fish sauce. Cook until heated through.`, section: SECTIONS.COOK_FILLING },
        { step: `Add the lime zest and juice. Mix.`, section: SECTIONS.COOK_FILLING },
        { step: `Add green onions. Cook for 30 seconds.`, section: SECTIONS.COOK_FILLING },
        { step: `Turn off heat.`, section: SECTIONS.COOK_FILLING },

        { step: `In a mixing bowl, combine the "${SECTIONS.DRESSING}" section ingredients. Taste and adjust.`, section: SECTIONS.PREP_DRESSING },
        { step: `In lettuce leaves, spoon meat mixture. Top with dressing.`, section: SECTIONS.ASSEMBLE },
        { step: `Enjoy these Asian flavorful wraps!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store filling and lettuce separately.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium heat, reheat the filling until heated through (about 2 to 3 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave filing until heated through (about 30 seconds to 1 minute).',
        },
    ],
    mealPrep: true,
};