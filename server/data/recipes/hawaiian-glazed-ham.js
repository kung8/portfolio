const ham1 = '../assets/Products/hawaiian-glazed-ham-1.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BONE_IN_HAM, YELLOW_MUSTARD, BROWN_SUGAR, CANNED_PINEAPPLE_SLICES, MARASCHINO_CHERRIES } = require('./ingredients');

const PREP_OVEN = 'Prep Oven';
const PREP_HAM = 'Prep Ham';
const BAKE_HAM = 'Bake Ham';

module.exports = {
    cardName: 'Hawaiian Glazed Ham',
    name: 'Hawaiian Glazed Ham',
    img: ham1,
    recipeCredit: 'Hoku\'s Grammy',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.HAWAIIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    yields: '20 servings',
    prepTime: '15 m',
    cookTime: '2 h',
    separated: true,
    ingredients: [
        { ...BONE_IN_HAM, amount: '15 lb', unit: '', additionalDetails: '', section: '' },
        { ...YELLOW_MUSTARD, amount: '10 oz', unit: '', additionalDetails: '', section: '' },
        { ...BROWN_SUGAR, amount: '1/4 c', unit: '', additionalDetails: '', section: '' },
        { ...CANNED_PINEAPPLE_SLICES, amount: '2 - 20 oz', unit: '', additionalDetails: '', section: '' },
        { ...MARASCHINO_CHERRIES, amount: '10 oz', unit: '', additionalDetails: 'pitted and stemless', section: '' },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'roasting pan' },
        { name: 'toothpicks' },
        { name: 'baster' },
    ],
    directions: [
        { step: 'Preheat the oven to 325ºF.', type: PREP_OVEN },
        { step: 'If the bone-in ham is not already pre-sliced, slice the ham until it is about an inch from the bone and about 1/2 inch thick. You are keeping the ham on the bone.', type: PREP_HAM },
        { step: 'Place the bone-in ham within a roasting pan.', type: PREP_HAM },
        { step: 'Lather the ham with mustard and make sure to get in between the slices.', type: PREP_HAM },
        { step: 'Add brown sugar to the ham and massage all over and in between the slices.', type: PREP_HAM },
        { step: 'Cover the ham with pineapple slices and pin them in with toothpicks.', type: PREP_HAM },
        { step: 'Place the cherries in center of each pineapple slices and pin them with toothpicks.', type: PREP_HAM },
        { step: 'Pour the pineapple and maraschino cherry juices over the ham.', type: PREP_HAM },
        { step: 'Cover the ham with tin foil.', type: PREP_HAM },
        { step: 'Place the ham in the oven and bake until heated (for about 45 minutes to an hour).', type: BAKE_HAM },
        { step: 'Increase the oven to 400ºF and remove the foil.', type: BAKE_HAM },
        { step: 'Baste the ham with its juices regularly and bake until it browns (for about 20 to 45 minutes).', type: BAKE_HAM },
        { step: 'Enjoy this delicious while it is still warm.', type: SECTIONS.SERVE },
    ]
};