const basil1 = '../assets/Products/thai-basil-1.jpeg';
const basil2 = '../assets/Products/thai-basil-2.jpeg';
const basil3 = '../assets/Products/thai-basil-3.jpeg';
const basil4 = '../assets/Products/thai-basil-4.jpeg';
const basil5 = '../assets/Products/thai-basil-5.jpeg';
const basil6 = '../assets/Products/thai-basil-6.jpeg';
const basil7 = '../assets/Products/thai-basil-7.jpeg';
const basil8 = '../assets/Products/thai-basil-8.jpeg';
const basil9 = '../assets/Products/thai-basil-9.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { CHICKEN_BROTH, OYSTER_SAUCE, LIGHT_SOY_SAUCE, FISH_SAUCE, WHITE_SUGAR, BROWN_SUGAR, VEGETABLE_OIL, BONELESS_AND_SKINLESS_CHICKEN_THIGH, SHALLOTS, GARLIC, THAI_CHILI_PEPPERS, BASIL_LEAVES, JASMINE_RICE } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Spicy Thai Basil',
    name: 'Spicy Thai Basil (Pad Krapow Gai)',
    img: basil8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.THAI],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.MAIN_COURSE],
    yields: '2 servings',
    prepTime: '15 m',
    cookTime: '10 m',
    websites: [
        { label: 'Thai Basil Chicken', link: 'https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/' }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_BROTH, amount: '1/3 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: '2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: '1 lb', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...SHALLOTS, amount: '1/4 c', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '4 cloves', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...THAI_CHILI_PEPPERS, amount: '2 Tbsp', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...BASIL_LEAVES, amount: '1 c', additionalDetails: 'thinly sliced', section: SECTIONS.MAIN },

        { ...JASMINE_RICE, amount: '2 c cooked', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'pan' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Sauce" ingredients.', type: SECTIONS.SAUCE, img: basil3 },
        { step: 'Over high heat, add oil to a pan.', type: SECTIONS.MAIN },
        { step: 'Add chicken (or preferred protein) and stir fry until the protein has lost its raw color (about 2 to 3 minutes).', type: SECTIONS.MAIN, img: [basil1, basil4] },
        { step: 'Add the remaining ingredients except the basil. Mix and cook until the liquid begins caramelize on the bottom of the pan (about 2 or 3 minutes).', type: SECTIONS.MAIN, img: [basil2, basil5] },
        { step: 'Add 1 tablespoon of the sauce. Cook and mix until the sauce caramelizes (about 1 minutes).', type: SECTIONS.MAIN },
        { step: 'Add the rest of the sauce. Cook and mix until the sauce has deglazed the pan.', type: SECTIONS.MAIN, img: basil6 },
        { step: 'Let the sauce glaze the meat (about 1 or 2 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove from heat and add in the basil. Mix and let it wilt (about 20 seconds).', type: SECTIONS.MAIN, img: basil7 },
        { step: 'Enjoy this easy thai dish with rice.', type: SECTIONS.SERVE, img: basil9 },
    ],
    notes: [
        { note: 'The spice of the Thai chilies can be adjusted per your spice level preference. If you make multiple batches, it does not necessarily need to be multiplied too.' },
    ]
};