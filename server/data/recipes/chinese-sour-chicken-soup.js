const sourChicken = '../assets/Products/sour-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, PROTEIN , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    CHICKEN_THIGH,
    KNORR_TAMARIND_SOUP_BASE,
    LIME_JUICE,
} = require('./ingredients');

module.exports = {
    cardName: 'Sour Chicken Soup',
    name: 'Chinese Sour Chicken Soup',
    img: sourChicken,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.SOUP],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    ingredients: [
        { ...CHICKEN_THIGH, amount: 6, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', optional: false },
        { ...KNORR_TAMARIND_SOUP_BASE, amount: 1, unit: INGREDIENT_UNITS.PACKET, additionalDetails: '', optional: false },
        { ...LIME_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'cleaver' },
        { name: 'large pot' },
        { name: 'small bowl' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Cut up chicken using cleaver knife into about 1" thick pieces.', type: SECTIONS.MAIN },
        { step: 'Place chicken into pot and fill with water.', type: SECTIONS.MAIN },
        { step: 'Let the chicken boil for about 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Skim off the froth that develops on the top using a shallow spatula.', type: SECTIONS.MAIN },
        { step: 'Ladle out about 1.5 cup of the soup for the sour mix. Pour in tamarind powder and lime juice and mix together.', type: SECTIONS.MAIN },
        { step: 'When ready to eat, add sour mixture to the soup (as desired).', type: SECTIONS.MAIN },
        { step: 'Serve soup over rice and enjoy this nostalgic piece of home for me.', type: SECTIONS.MAIN },
    ]
}