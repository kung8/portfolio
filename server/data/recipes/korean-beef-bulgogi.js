const cooking = '../assets/Products/beef-bulgogi-cooking.jpeg';
const bowl = '../assets/Products/beef-bulgogi-in-bowl.jpeg';
const marinade = '../assets/Products/beef-bulgogi-marinade.jpeg';
// const ziploc = '../assets/Products/beef-bulgogi-marinating-in-ziploc.jpeg';
const marinating = '../assets/Products/beef-bulgogi-marinating.jpeg';
const plated = '../assets/Products/beef-bulgogi-plated.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    BEEF,
    PEAR,
    SESAME_OIL,
    LIGHT_SOY_SAUCE,
    BROWN_SUGAR,
    GARLIC,
    GINGER,
    GOCHUJANG_SAUCE,
    VEGETABLE_OIL,
    JASMINE_RICE,
    GREEN_ONIONS,
    SESAME_SEEDS,
} = require('./ingredients');

const BEEF_SECTION = 'Beef';

module.exports = {
    cardName: 'Korean Beef Bulgogi',
    name: 'Korean Beef Bulgogi',
    img: plated,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.KOREAN, GENRES.ASIAN],
    method: [METHODS.MARINADE, METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE],
    yields: '6 servings',
    prepTime: '8 h',
    cookTime: '25 m',
    separated: true,
    ingredients: [
        { ...BEEF, amount: '3 lbs', additionalDetails: 'cubed', section: BEEF_SECTION },
        { ...PEAR, amount: '1', additionalDetails: 'finely diced', section: BEEF_SECTION },
        { ...SESAME_OIL, amount: '4 Tbsp', additionalDetails: '', section: BEEF_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: '1/2 c', additionalDetails: '', section: BEEF_SECTION },
        { ...BROWN_SUGAR, amount: '4 Tbsp', additionalDetails: '', section: BEEF_SECTION },
        { ...GARLIC, amount: '6 cloves', additionalDetails: 'minced', section: BEEF_SECTION },
        { ...GINGER, amount: '2 Tbsp', additionalDetails: 'peeled and diced', section: BEEF_SECTION },
        { ...GOCHUJANG_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: BEEF_SECTION },
        { ...VEGETABLE_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '', additionalDetails: '', section: SECTIONS.SERVE },
        { ...GREEN_ONIONS, amount: '4', additionalDetails: 'sliced', section: SECTIONS.SERVE },
        { ...SESAME_SEEDS, amount: '2 tsp', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'ziploc' },
        { name: 'peeler' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'measuring spoons' },
        { name: 'stove' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Combine the marinade sauce ingredients either in a bowl or ziploc bag.', type: BEEF_SECTION, img: marinade },
        { step: 'Add the beef to the sauce and let it marinate overnight.', type: BEEF_SECTION, img: marinating },
        { step: 'Heat frying pan over medium heat and add 1 Tbsp vegetable and cook beef in batches.', type: SECTIONS.MAIN, img: cooking },
        { step: 'Flip beef over and cook. Repeat for additional batch.', type: SECTIONS.MAIN },
        { step: 'Serve over rice and top with green onion and sesame seeds.', type: SECTIONS.SERVE, img: bowl },
    ]
};