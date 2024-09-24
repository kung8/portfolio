const greenBeanWithBeef = '../assets/Products/green-bean-with-beef.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    GREEN_BEANS,
    BEEF_CHUCK_ROAST,
    SALT,
    BLACK_PEPPER,
    OLIVE_OIL,
    GARLIC,
    COLD_WATER,
    LIGHT_SOY_SAUCE,
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
    websites: [
        "https://barefeetinthekitchen.com/thai-steak-and-green-bean-stir-fry/"
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: '', additionalDetails: '', optional: false },
        { ...BEEF_CHUCK_ROAST, amount: '1 lb', additionalDetails: 'thin strips', optional: false },
        { ...GREEN_BEANS, amount: '24 oz', additionalDetails: 'cut to 2" pieces', optional: false },
        { ...GARLIC, amount: '4 cloves', additionalDetails: 'minced', optional: false },
        { ...COLD_WATER, amount: '2 Tbsp', additionalDetails: '', optional: false },
        { ...LIGHT_SOY_SAUCE, amount: '2 Tbsp', additionalDetails: '', optional: false },
        { ...SALT, amount: '', additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'wok' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat oil in a wok.', type: SECTIONS.MAIN },
        { step: 'Add beef. Cook until browned (about 4 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove beef and set aside.', type: SECTIONS.MAIN },
        { step: 'Add the green beans and garlic to the leftover juice in the wok. Give it a good toss.', type: SECTIONS.MAIN },
        { step: 'Give the wok a good toss to help the vegetables combine.', type: SECTIONS.MAIN },
        { step: 'Add water and cover the wok. Let it cook for 5 minutes.', type: SECTIONS.MAIN },
        { step: 'Uncover and continue to toss the vegetables until green beans are crisp and tender (about 5 to 7 minutes).', type: SECTIONS.MAIN },
        { step: 'Re-add the beef and soy sauce to the wok.', type: SECTIONS.MAIN },
        { step: 'Toss everything together and cook for about a minute.', type: SECTIONS.MAIN },
        { step: 'Season with salt and pepper as desired.', type: SECTIONS.MAIN },
        { step: 'Serve over rice and enjoy this Chinese stir-fry.', type: SECTIONS.MAIN },
    ]
}