const hospitalityChicken = '../assets/Products/hospitality-chicken.jpeg';

module.exports = {
    cardName: 'Hospitality Chicken',
    name: 'Hospitality Chicken',
    img: hospitalityChicken,
    available: true,
    type: 'Lunch / Dinner',
    yields: '6 servings',
    prepTime: '5 m',
    cookTime: '25 - 40 m',
    ingredients: [
        { name: 'chicken thigh', amount: '5 lb', additionalDetails: '', optional: false },
        { name: 'McCormick seasoning packet', amount: '1', additionalDetails: '', optional: false },
        { name: 'snow peas', amount: '1 lb', additionalDetails: '', optional: false },
        { name: 'carrot chips', amount: '1 lb', additionalDetails: '', optional: false },
        { name: 'olive oil', amount: '1 tsp', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'air fryer' },
        { name: 'pot with steamer' },
        { name: 'frying pan' },
        { name: 'spatula' },
    ],
    directions: [
        'Pat dry the chicken, then marinade chicken with seasoning packet and let it sit for at least 30 minutes',
        'Add chicken to air fryer and bake at 400ºF for 25 min (or until cooked).',
        'While chicken is cooking, steam the peas and carrots over a medium-high heat for about 8 - 12 min (or until softened).',
        'Optional: If you like it a little crispy you can slightly grill the peas and carrots for that stir-fry taste. Heat frying pan over medium-high heat and add just a little oil. Add snow peas and carrot to pan and cook for a few minutes or until desired level of char.',
        'Serve with rice and enjoy this simple meal that can take you back to the South.'
    ]
};