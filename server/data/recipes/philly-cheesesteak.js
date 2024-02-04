const phillyCheesesteak = '../assets/Products/philly-cheesesteak.jpeg';

module.exports = {
    cardName: 'Philly Cheesesteak',
    name: 'Philly Cheesesteak',
    img: phillyCheesesteak,
    available: true,
    type: 'Lunch / Dinner',
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '20 m',
    ingredients: [
        { name: 'beef', amount: '1 lb', additionalDetails: 'thinly sliced', optional: false },
        { name: 'olive oil', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'onion', amount: '1', additionalDetails: 'sliced', optional: false },
        { name: 'bell peppers', amount: '3', additionalDetails: 'sliced', optional: false },
        { name: 'mozzarella cheese', amount: '16 slices', additionalDetails: '', optional: false },
        { name: 'hoagie bread', amount: '8', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'minced', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'minced', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'pan' },
        { name: 'cutting board + knife' },
        { name: 'medium bowl' },
        { name: 'plate' },
    ],
    directions: [
        'Heat pan over medium-high heat and place slices of beef in pan. Cook until close to brown. Set aside.',
        'Add oil to pan over medium-high heat.',
        'Add onions and bell pepper slices into pan and caramelize.',
        'Open up hoagie bread and layer with meat, cheese and vegetables to your hearts content.',
        'Enjoy the taste of freedom!',
    ],
};