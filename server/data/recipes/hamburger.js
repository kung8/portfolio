const hamburger = '../assets/Products/hamburger.jpeg';

module.exports = {
    id: 'hamburger',
    cardName: 'Hamburger',
    name: 'Hamburger',
    img: hamburger,
    available: true,
    type: 'Lunch / Dinner',
    yields: '8 servings',
    prepTime: '5 m',
    cookTime: '50 m',
    ingredients: [
        { name: 'ground turkey', amount: '3 lbs', additionalDetails: '', optional: false },
        { name: 'egg', amount: '1', additionalDetails: '', optional: false },
        { name: 'bread crumb', amount: '', additionalDetails: '', optional: false },
        { name: 'onion', amount: '1/4', additionalDetails: 'diced', optional: false },
        { name: 'red onion', amount: '1', additionalDetails: '', optional: false },
        { name: 'pickle', amount: '', additionalDetails: '', optional: false },
        { name: 'tomato', amount: '', additionalDetails: '', optional: false },
        { name: 'spinach', amount: '', additionalDetails: '', optional: false },
        { name: 'cheese slices', amount: '8', additionalDetails: '', optional: false },
        { name: 'mushroom', amount: '', additionalDetails: '', optional: false },
        { name: 'hamburger bun', amount: '8', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'aluminum foil' },
        { name: 'large mixing bowl' },
    ],
    directions: [
        'Preheat oven to 425ºF.',
        'Mix together turkey, egg, bread crumb, and onion inside mixing bowl.',
        'Ball up meat mixture and flatten into patties.',
        'Place aluminum foil on baking sheet.',
        'Place patties on baking sheet and bake for 30 minutes.',
        'Broil for 5 minutes.',
        'Serve on hamburger bun with preferred toppings and condiments (and fries or preferred side optional).',
    ]
};