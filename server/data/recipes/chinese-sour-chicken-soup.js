const sourChicken = '../assets/Products/sour-chicken.jpeg';

module.exports = {
    id: 'sour-chicken',
    cardName: 'Sour Chicken Soup',
    name: 'Chinese Sour Chicken Soup',
    img: sourChicken,
    available: true,
    type: 'Lunch / Dinner',
    yields: '10 servings',
    prepTime: '10 m',
    cookTime: '1 h',
    ingredients: [
        { name: 'chicken thigh (with bone and skin)', amount: '6 lb', additionalDetails: '', optional: false },
        { name: 'Knorr tamarind soup mix', amount: '1 packet', additionalDetails: '', optional: false },
        { name: 'lime juice', amount: '2 Tbsp', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'cutting board and cleaver' },
        { name: 'pressure cooker' },
        { name: 'small bowl' },
        { name: 'spatula' },
    ],
    directions: [
        'Cut up chicken using cleaver knife into about 1" thick pieces.',
        'Place chicken into pressure cooker pot and fill with water.',
        'Set pressure cooker on "soup" mode (which may differ between pressure cooker brand but it\'s so the chicken isn\'t too soft).',
        'Ladle out about 1.5 cup of the soup for the sour mix. Pour in tamarind powder and lime juice and mix together.',
        'When ready to eat, add sour mixture to the soup (as desired).',
        'Serve soup over rice and enjoy this nostalgic piece of home for me.',
    ]
}