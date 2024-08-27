const sourChicken = '../assets/Products/sour-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, PROTEIN } = require('./constants');
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
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.SOUP],
    yields: '10 servings',
    prepTime: '10 m',
    cookTime: '1 h',
    ingredients: [
        { ...CHICKEN_THIGH, amount: '6 lb', additionalDetails: '', optional: false },
        { ...KNORR_TAMARIND_SOUP_BASE, amount: '1 packet', additionalDetails: '', optional: false },
        { ...LIME_JUICE, amount: '2 Tbsp', additionalDetails: '', optional: false },
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