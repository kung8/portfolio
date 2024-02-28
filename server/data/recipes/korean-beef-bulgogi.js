const beefBulgogi = '../assets/Products/beef-bulgogi.jpeg';
const { CATEGORIES, SECTIONS } = require('./constants');

module.exports = {
    cardName: 'Beef Bulgogi',
    name: 'Korean Beef Bulgogi',
    img: beefBulgogi,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '6 servings',
    prepTime: '8 h',
    cookTime: '25 m',
    separated: true,
    ingredients: [
        { name: 'beef', amount: '3 lbs', additionalDetails: 'cubed', optional: false, section: SECTIONS.MAIN },
        { name: 'pear', amount: '1', additionalDetails: 'finely diced', optional: false, section: SECTIONS.MAIN },
        { name: 'sesame oil', amount: '4 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'soy sauce', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'brown sugar', amount: '4 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic', amount: '6 cloves', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'ginger', amount: '2 Tbsp', additionalDetails: 'peeled and diced', optional: false, section: SECTIONS.MAIN },
        { name: 'gochujang', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'vegetable oil', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'rice', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'green onion', amount: '4', additionalDetails: 'sliced', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'sesame seeds', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
    ],
    supplies: [
        { name: 'ziploc' },
        { name: 'peeler' },
        { name: 'cutting board + knife' },
        { name: 'measuring spoons' },
        { name: 'stove' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Marinade the beef overnight with the pear, sesame oil, soy sauce, brown sugar, garlic, ginger, and gochujang sauce inside ziploc bag.', type: SECTIONS.MAIN },
        { step: 'Heat frying pan over medium heat and add 1 Tbsp vegetable and cook beef in batches.', type: SECTIONS.MAIN },
        { step: 'Flip beef over and cook. Repeat for additional batch.', type: SECTIONS.MAIN },
        { step: 'Serve over rice and top with green onion and sesame seeds.', type: SECTIONS.MAIN },
    ]
};