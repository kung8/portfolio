const macaroni = '../assets/Products/macaroni-salad.jpeg';
const { APPETIZER, MAIN, SIDE_DISH } = require('./constants');

module.exports = {
    cardName: 'Macaroni Salad',
    name: 'Macaroni Salad',
    img: macaroni,
    available: true,
    type: [APPETIZER, SIDE_DISH],
    yields: '10 servings',
    prepTime: '20 m',
    cookTime: '10 m',
    ingredients: [
        { name: 'elbow macaroni', amount: '4 c', additionalDetails: '', optional: false },
        { name: 'mayonnaise', amount: '1 c', additionalDetails: '', optional: false },
        { name: 'vinegar', amount: '1/4 c', additionalDetails: '', optional: false },
        { name: 'sugar', amount: '2/3 c', additionalDetails: '', optional: false },
        { name: 'yellow mustard', amount: '2 1/2 Tbsp', additionalDetails: '', optional: false },
        { name: 'salt (+ for boiling)', amount: '1 1/2 tsp', additionalDetails: '', optional: false },
        { name: 'pepper', amount: '1/2 tsp', additionalDetails: '', optional: false },
        { name: 'onion', amount: '1', additionalDetails: 'diced', optional: false },
        { name: 'celery', amount: '2 stalks', additionalDetails: 'sliced', optional: false },
        { name: 'green bell pepper', amount: '1', additionalDetails: 'diced', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'pot' },
        { name: 'large mixing bowl' },
        { name: 'rubber spatula' },
        { name: 'strainer' },
    ],
    directions: [
        { step: 'Over a high heat boil water and salt in a large pot.', type: MAIN },
        { step: 'Once the water boils, add the pasta and cook for about 8 - 10 minutes or until tender.', type: MAIN },
        { step: 'Rinse the pasta under cold water and drain in colander.', type: MAIN },
        { step: 'In the mixing bowl, combine the mayo, vinegar, sugar, mustard, salt, and pepper until well mixed.', type: MAIN },
        { step: 'Then combine the onions, celery, green pepper, and pasta.', type: MAIN },
        { step: 'Best to refrigerate at least 4 hours (or even overnight).', type: MAIN },
        { step: 'Enjoy this sweet, creamy, fresh appetizer while you relax with some relaxing Hawaiian music.', type: MAIN },
    ]
};