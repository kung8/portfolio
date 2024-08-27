const pepperSteak = '../assets/Products/pepper-steak.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");
const {
    BEEF,
    RED_BELL_PEPPERS,
    MEDIUM_YELLOW_ONION,
    GARLIC,
    LIGHT_SOY_SAUCE,
    WARM_WATER,
    SALT,
    BLACK_PEPPER,
    VEGETABLE_OIL,
} = require('./ingredients');

module.exports = {
    cardName: 'Pepper Steak',
    name: 'Pepper Steak',
    img: pepperSteak,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '25 m',
    ingredients: [
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', section: '' },
        { ...BEEF, amount: '1.5 lb', additionalDetails: 'sliced or 1" chunks', section: '' },
        { ...RED_BELL_PEPPERS, amount: '2', additionalDetails: 'sliced', section: '' },
        { ...MEDIUM_YELLOW_ONION, amount: '1', additionalDetails: 'sliced', section: '' },
        { ...GARLIC, amount: '2 tsp', additionalDetails: 'minced', section: '' },
        { ...LIGHT_SOY_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: '' },
        { ...WARM_WATER, amount: '1/2 c', additionalDetails: '', section: '' },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: '' },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: '' },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
    ],
    directions: [
        { step: 'Heat up a wok over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add vegetable oil and wait until oil is hot before placing beef inside wok.', type: SECTIONS.MAIN },
        { step: 'Brown the beef (does not have to be cooked all the way).', type: SECTIONS.MAIN },
        { step: 'Add salt and pepper to the beef.', type: SECTIONS.MAIN },
        { step: 'Turn up the heat to high.', type: SECTIONS.MAIN },
        { step: 'Add the sliced onions, peppers and minced garlic to the wok and continue to cook all together. Mix occasionally to prevent any burning.', type: SECTIONS.MAIN },
        { step: 'The meat will excrete juices which will serve as the base for the sauce.', type: SECTIONS.MAIN },
        { step: 'After the meat and vegetables brown a little more (about a few minutes), add the water and soy sauce.', type: SECTIONS.MAIN },
        { step: 'Continue to let cook for a few more minutes.', type: SECTIONS.MAIN },
        { step: 'Serve with rice and enjoy this simple home cooked meal.', type: SECTIONS.MAIN },
    ]
};