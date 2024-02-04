const kebabs = '../assets/Products/kebabs.jpeg';

module.exports = {
    cardName: 'Kebabs',
    name: 'Malaysian Kebabs',
    img: kebabs,
    available: true,
    type: 'Appetizer',
    yields: '6 servings',
    prepTime: '10 m',
    cookTime: '25 - 30 m',
    ingredients: [
        { name: 'soy sauce', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'teriyaki sauce', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'vegetable oil', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'garlic powder', amount: '1', additionalDetails: '', optional: false },
        { name: 'chicken', amount: '2 lbs', additionalDetails: '', optional: false },
        { name: 'bell pepper', amount: '2', additionalDetails: '', optional: false },
        { name: 'onion', amount: '1', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
    ],
    supplies: [
        { name: 'cutting board + knife' },
        { name: 'ziploc bag' },
        { name: 'bamboo skewer' },
        { name: 'oven' },
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
    ],
    directions: [
        'Make the marinade in a ziploc bag: adding soy sauce, sprite, oil, and garlic powder.',
        'Cut the chicken into 1-inch pieces and marinate for 1 to 3 hours.',
        'Cut the veggies into large pieces.',
        'Preheat oven to 450ºF (whenever you are ready to actually cook).',
        'Place aluminum foil on the baking sheet.',
        'Thread the skewers with chicken and veggies leaving enough space between to allow the pieces to get cooked thoroughly.',
        'Place the finished skewers on the baking sheet with space in between each other.',
        'Once the oven is 450ºF, cook the kebabs for 15 to 25 minutes (cook time will depend on the size of meat).'
    ]
};