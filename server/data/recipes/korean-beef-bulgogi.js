const cooking = '../assets/Products/beef-bulgogi-cooking.jpeg';
const bowl = '../assets/Products/beef-bulgogi-in-bowl.jpeg';
const marinade = '../assets/Products/beef-bulgogi-marinade.jpeg';
// const ziploc = '../assets/Products/beef-bulgogi-marinating-in-ziploc.jpeg';
const marinating = '../assets/Products/beef-bulgogi-marinating.jpeg';
const plated = '../assets/Products/beef-bulgogi-plated.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');

const BEEF = 'Beef';

module.exports = {
    cardName: 'Korean Beef Bulgogi',
    name: 'Korean Beef Bulgogi',
    img: plated,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.KOREAN],
    method: [METHODS.MARINADE, METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE],
    yields: '6 servings',
    prepTime: '8 h',
    cookTime: '25 m',
    separated: true,
    ingredients: [
        { name: 'beef', amount: '3 lbs', additionalDetails: 'cubed', optional: false, section: BEEF },
        { name: 'pear', amount: '1', additionalDetails: 'finely diced', optional: false, section: BEEF },
        { name: 'sesame oil', amount: '4 Tbsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'soy sauce', amount: '1/2 c', additionalDetails: '', optional: false, section: BEEF },
        { name: 'brown sugar', amount: '4 Tbsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'garlic', amount: '6 cloves', additionalDetails: 'minced', optional: false, section: BEEF },
        { name: 'ginger', amount: '2 Tbsp', additionalDetails: 'peeled and diced', optional: false, section: BEEF },
        { name: 'gochujang', amount: '2 Tbsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'vegetable oil', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'rice', amount: '', additionalDetails: '', optional: false, section: SECTIONS.SERVE },
        { name: 'green onion', amount: '4', additionalDetails: 'sliced', optional: false, section: SECTIONS.SERVE },
        { name: 'sesame seeds', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.SERVE },
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
        { step: 'Combine the marinade sauce ingredients either in a bowl or ziploc bag.', type: BEEF, img: marinade },
        { step: 'Add the beef to the sauce and let it marinate overnight.', type: BEEF, img: marinating },
        { step: 'Heat frying pan over medium heat and add 1 Tbsp vegetable and cook beef in batches.', type: SECTIONS.MAIN, img: cooking },
        { step: 'Flip beef over and cook. Repeat for additional batch.', type: SECTIONS.MAIN },
        { step: 'Serve over rice and top with green onion and sesame seeds.', type: SECTIONS.SERVE, img: bowl },
    ]
};