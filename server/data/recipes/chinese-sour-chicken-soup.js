const sourChicken = '../assets/Products/sour-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Sour Chicken Soup',
    name: 'Chinese Sour Chicken Soup',
    img: sourChicken,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.SOUP],
    yields: '10 servings',
    prepTime: '10 m',
    cookTime: '1 h',
    ingredients: [
        { name: 'chicken thigh (with bone and skin)', amount: '6 lb', additionalDetails: '', optional: false },
        { name: 'Knorr tamarind soup mix', amount: '1 packet', additionalDetails: '', optional: false },
        { name: 'lime juice', amount: '2 Tbsp', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'cutting board and cleaver' },
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