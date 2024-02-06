const beefStroganoff = '../assets/Products/beef-stroganoff.jpeg';
const { MAIN } = require('./constants');

module.exports = {
    cardName: 'Beef Stroganoff',
    name: 'Beef Stroganoff',
    img: beefStroganoff,
    available: true,
    type: 'Lunch / Dinner',
    yields: '7 servings',
    prepTime: '10 - 12 m',
    cookTime: '45 m',
    ingredients: [
        { name: 'beef', amount: '3 lbs', additionalDetails: 'sliced', optional: false },
        { name: 'medium onion', amount: '4', additionalDetails: 'sliced', optional: false },
        { name: 'mushroom', amount: '1 lb', additionalDetails: 'sliced', optional: false },
        { name: 'garlic', amount: '2 cloves', additionalDetails: 'minced', optional: false },
        { name: 'butter', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'beef broth', amount: '3 c', additionalDetails: '', optional: false },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'worchestershire sauce', amount: '2 tsp', additionalDetails: '', optional: false },
        { name: 'flour', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'sour cream', amount: '3 c', additionalDetails: '', optional: false },
        { name: 'noodles', amount: '6 c', additionalDetails: 'cooked', optional: false },
    ],
    supplies: [
        { name: 'cutting board + knife' },
        { name: 'stove' },
        { name: 'frying pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Heat pan over medium-high heat and add butter.', type: MAIN },
        { step: 'Cook mushroom, garlic, and onion until tender and set aside.', type: MAIN },
        { step: 'Brown beef.', type: MAIN },
        { step: 'Add 2 cup of broth, salt and worchestershire sauce until boiling.', type: MAIN },
        { step: 'Lower heat. Cover and simmer for 15 minutes.', type: MAIN },
        { step: 'Add remaining broth, flour and vegetables. Heat until boiling. Stir occasionally.', type: MAIN },
        { step: 'Add sour cream. Heat until hot and solid color.', type: MAIN },
        { step: 'Serve over noodles.', type: MAIN },
    ]
};