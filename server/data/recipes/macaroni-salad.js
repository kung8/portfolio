const macaroni = '../assets/Products/macaroni-salad.jpeg';

module.exports = {
    id: 'macaroni-salad',
    cardName: 'Macaroni Salad',
    name: 'Macaroni Salad',
    img: macaroni,
    available: true,
    type: 'Appetizer',
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
        'Over a high heat boil water and salt in a large pot.',
        'Once the water boils, add the pasta and cook for about 8 - 10 minutes or until tender.',
        'Rinse the pasta under cold water and drain in colander.',
        'In the mixing bowl, combine the mayo, vinegar, sugar, mustard, salt, and pepper until well mixed.',
        'Then combine the onions, celery, green pepper, and pasta.',
        'Best to refrigerate at least 4 hours (or even overnight).',
        'Enjoy this sweet, creamy, fresh appetizer while you relax with some relaxing Hawaiian music.'
    ]
};