const greenBeanWithBeef = '../assets/Products/green-bean-with-beef.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    GREEN_BEANS,
    BEEF_CHUNK,
    SALT,
    BLACK_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Green Bean Beef',
    name: 'Green Bean Beef',
    img: greenBeanWithBeef,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE, TYPES.VEGETABLE],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '20 m',
    ingredients: [
        { ...GREEN_BEANS, amount: '24 oz', additionalDetails: 'cut to 2" pieces', optional: false },
        { ...BEEF_CHUNK, amount: '1 lb', additionalDetails: 'lean', optional: false },
        { ...SALT, amount: '', additionalDetails: '', optional: false },
        { ...BLACK_PEPPER, amount: '', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'large frying pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Heat frying pan over medium-high heat, and add beef. Cook until browned.', type: SECTIONS.MAIN },
        { step: 'Add the green beans into pan and continue to cook until beans are softened. Stir occasionally.', type: SECTIONS.MAIN },
        { step: 'Add salt and pepper as desired.', type: SECTIONS.MAIN },
        { step: 'Serve over rice and enjoy this Chinese stir-fry.', type: SECTIONS.MAIN },
    ]
}