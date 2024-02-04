const taco = '../assets/Products/taco-in-a-bag.jpeg';

module.exports = {
    id: 'taco-in-a-bag',
    cardName: 'Taco in a Bag',
    name: 'Taco in a Bag',
    img: taco,
    available: true,
    type: 'Lunch / Dinner',
    yields: '3 - 4 servings',
    prepTime: '5 - 10 m',
    cookTime: '10 m',
    ingredients: [
        { name: 'ground beef', amount: '1 lb', additionalDetails: '', optional: false },
        { name: 'medium-sized frito chips', amount: '1 bag', additionalDetails: '', optional: false },
        { name: 'lettuce (topping)', amount: '', additionalDetails: 'shredded', optional: false },
        { name: 'tomato (topping)', amount: '', additionalDetails: 'diced', optional: false },
        { name: 'green bell peppers (topping)', amount: '', additionalDetails: 'diced', optional: false },
        { name: 'sour cream (topping)', amount: '', additionalDetails: '', optional: false },
        { name: 'shredded cheese (topping)', amount: '', additionalDetails: '', optional: false },
        { name: 'taco seasoning', amount: '', additionalDetails: '', optional: false },
        { name: 'black bean', amount: '8 oz', additionalDetails: '', optional: false },
        { name: 'corn', amount: '8 oz', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'pan' },
        { name: 'pot' },
        { name: 'spatula' },
        { name: 'cutting board and knife' },
        { name: 'small bowls for toppings' },
        { name: 'serving spoons' },

    ],
    directions: [
        'Heat up a pan over medium-high heat, and once it is hot add in the ground beef.',
        'Follow the directions of the taco seasoning, typically it is adding water and the taco seasoning to the browned ground beef.',
        'While the meat is cooking, you can heat up the black beans and corn in a pot with some salt over medium-high heat.',
        'Once the meat is cooked and the corn and beans are hot, serve over bowls of frito chips (you could also do actual small bags of fritos, however I think that a large bag is more economical).',
        'Layer your taco in a bag (or bowl) with whatever toppings you want and enjoy this simple, fun party in a bag.'
    ]
};