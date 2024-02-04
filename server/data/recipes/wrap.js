const wraps = '../assets/Products/wraps.jpeg';

module.exports = {
    id: 'wraps',
    cardName: 'Wraps',
    name: 'Wraps',
    img: wraps,
    available: true,
    type: 'Lunch / Dinner',
    yields: '1 serving',
    prepTime: '1 m',
    cookTime: '2 m',
    ingredients: [
        { name: 'tortilla', amount: '1', additionalDetails: '', optional: false },
        { name: 'lunch meat slices', amount: '4', additionalDetails: 'preferred', optional: false },
        { name: 'spinach', amount: '', additionalDetails: '', optional: false },
        { name: 'cheese slices', amount: '3', additionalDetails: '', optional: false },
        { name: 'tomato', amount: '1/2', additionalDetails: 'sliced', optional: false },
        { name: 'honey mustard', amount: '', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'plate' },
    ],
    directions: [
        'Place tortilla on a plate and lay on toppings in the center of tortilla as desired.',
        'Roll the edge towards the center of the tortilla and continue to completely roll wrap.'
    ]
}