const beefBulgogi = '../assets/Products/beef-bulgogi.jpeg';

module.exports = {
    id: 'beef-bulgogi',
    cardName: 'Beef Bulgogi',
    name: 'Korean Beef Bulgogi',
    img: beefBulgogi,
    available: true,
    type: 'Lunch / Dinner',
    yields: '6 servings',
    prepTime: '8 h',
    cookTime: '25 m',
    ingredients: [
        { name: 'beef', amount: '3 lbs', additionalDetails: 'cubed', optional: false },
        { name: 'pear', amount: '1', additionalDetails: 'finely diced', optional: false },
        { name: 'sesame oil', amount: '4 Tbsp', additionalDetails: '', optional: false },
        { name: 'soy sauce', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'brown sugar', amount: '4 Tbsp', additionalDetails: '', optional: false },
        { name: 'garlic', amount: '6 cloves', additionalDetails: 'minced', optional: false },
        { name: 'ginger', amount: '2 Tbsp', additionalDetails: 'peeled and diced', optional: false },
        { name: 'gochujang', amount: '2 Tbsp', additionalDetails: '', optional: false },
        { name: 'vegetable oil', amount: '2 Tbsp', additionalDetails: '', optional: false },
        { name: 'green onion', amount: '4', additionalDetails: 'sliced', optional: false },
        { name: 'sesame seeds', amount: '2 tsp', additionalDetails: '', optional: false },
        { name: 'rice', amount: '', additionalDetails: '', optional: false },
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
        'Marinade the beef overnight with the pear, sesame oil, soy sauce, brown sugar, garlic, ginger, and gochujang sauce inside ziploc bag.',
        'Heat frying pan over medium heat and add 1 Tbsp vegetable and cook beef in batches.',
        'Flip beef over and cook. Repeat for additional batch.',
        'Serve over rice and top with green onion and sesame seeds.'
    ]
};