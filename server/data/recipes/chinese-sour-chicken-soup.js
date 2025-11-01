const soup1 = '../assets/Products/sour-chicken-soup-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
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
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
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
    separated: false,
    ingredients: [
        { ...CHICKEN_THIGH, amount: 6, unit: INGREDIENT_UNITS.POUND, additionalDetails: '' },
        { ...KNORR_TAMARIND_SOUP_BASE, amount: 1, unit: INGREDIENT_UNITS.PACKET, additionalDetails: '' },
        { ...LIME_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '' },
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
        { step: 'Cut up chicken using cleaver knife into about 1" thick pieces.', section: SECTIONS.MAIN },
        { step: 'Place chicken into pot and fill with water.', section: SECTIONS.MAIN },
        { step: 'Let the chicken boil for about 30 minutes.', section: SECTIONS.MAIN },
        { step: 'Skim off the froth that develops on the top using a shallow spatula.', section: SECTIONS.MAIN },
        { step: 'Ladle out about 1.5 cup of the soup for the sour mix. Pour in tamarind powder and lime juice and mix together.', section: SECTIONS.MAIN },
        { step: 'When ready to eat, add sour mixture to the soup (as desired).', section: SECTIONS.MAIN },
        { step: 'Serve soup over rice and enjoy this nostalgic piece of home for me.', section: SECTIONS.MAIN },
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