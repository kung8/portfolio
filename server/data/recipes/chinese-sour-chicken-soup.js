const soup1 = '../assets/Products/sour-chicken-soup-1.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    CHICKEN_THIGH,
    CLEAVER,
    CUTTING_BOARD,
    KNORR_TAMARIND_SOUP_BASE,
    LARGE_POT,
    LIME_JUICE,
    SMALL_BOWL,
    SPATULA,
    STOVE,
} = require('./ingredients');

const SOUR_MIX = 'Sour Mix';
const PREP_SOUR_MIX = 'Prep Sour Mix';

module.exports = {
    cardName: 'Sour Chicken Soup',
    name: 'Chinese Sour Chicken Soup',
    img: soup1,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.SOUP],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Grandma'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 6, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...KNORR_TAMARIND_SOUP_BASE, amount: 1, unit: INGREDIENT_UNITS.PACKET, additionalDetails: '', section: SOUR_MIX },
        { ...LIME_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SOUR_MIX },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        CUTTING_BOARD,
        CLEAVER,
        LARGE_POT,
        SMALL_BOWL,
        SPATULA,
    ],
    directions: [
        { step: `Cut up chicken using cleaver knife into about 1" thick pieces.`, section: SECTIONS.PREP_CHICKEN },

        { step: `Fill a large pot with chicken and cover with water.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Bring to a boil for 15 to 20 minutes.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Skim off the froth that develops on the top using a shallow spatula.`, section: SECTIONS.COOK_CHICKEN },

        { step: `In a medium bowl, ladle about 1.5 cup of the soup for the sour mix.`, section: PREP_SOUR_MIX },
        { step: `Add tamarind powder and lime juice. Mix.`, section: PREP_SOUR_MIX },

        { step: `Serve soup over rice with as many scoops of the sour mix.`, section: SECTIONS.SERVE },
        { step: `Enjoy this nostalgic piece of home for me.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store soup and rice separately.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave the soup and rice separately. Add a little water to the rice and microwave rice until heated through (about 2 to 3 minutes). Microwave the soup until heated through (about 3 to 4 minutes).',
        },
    ],
    mealPrep: true,
}