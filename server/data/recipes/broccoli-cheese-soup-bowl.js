const soupBowl = '../assets/Products/broccoli-cheddar-soup-bowl.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');

module.exports = {
    cardName: 'Broccoli Cheese Soup Bowl',
    name: 'Broccoli Cheese Soup Bowl',
    img: soupBowl,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    type: [TYPES.BREAD, TYPES.SOUP],
    yields: '6 servings',
    prepTime: '10 m',
    cookTime: '25 m',
    separated: true,
    websites: [
        'https://www.the-girl-who-ate-everything.com/panera-broccoli-cheese-soup/'
    ],
    ingredients: [
        { name: 'butter', amount: '1/4 c', additionalDetails: '', section: SECTIONS.SOUP },
        { name: 'medium onion', amount: '1/2', additionalDetails: 'diced', section: SECTIONS.SOUP },
        { name: 'flour', amount: '1/4 c', additionalDetails: '', section: SECTIONS.SOUP },
        { name: 'half and half cream', amount: '2 c', additionalDetails: '', section: SECTIONS.SOUP },
        { name: 'chicken broth', amount: '2 c', additionalDetails: '', section: SECTIONS.SOUP },
        { name: 'broccoli', amount: '2 heads of', additionalDetails: 'chopped', section: SECTIONS.SOUP },
        { name: 'carrot matchsticks', amount: '1 c', additionalDetails: '', section: SECTIONS.SOUP },
        { name: 'nutmeg', amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.SOUP },
        { name: 'cheddar cheese', amount: '8 oz', additionalDetails: '', section: SECTIONS.SOUP },
        { name: 'salt', amount: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },
        { name: 'bread bowls', amount: '6', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'sour cream', amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { name: 'green onion', amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { name: 'cheddar', amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { name: 'bacon bits', amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium heat, melt butter.', type: SECTIONS.SOUP },
        { step: 'Sauté onions in butter until soft.', type: SECTIONS.SOUP },
        { step: 'Sprinkle flour over mixture.', type: SECTIONS.SOUP },
        { step: 'Stir for 1 to 2 minutes.', type: SECTIONS.SOUP },
        { step: 'Stir in half and half and broth.', type: SECTIONS.SOUP },
        { step: 'Bring to a boil and reduce to a low heat.', type: SECTIONS.SOUP },
        { step: 'Add broccoli and carrots and cook for 20 to 25 minutes.', type: SECTIONS.SOUP },
        { step: 'Add salt, pepper, and nutmeg as desired', type: SECTIONS.SOUP },
        { step: 'Cut the tops off the bread bowls and remove some of the insides so it can be filled with soup. Be sure not to take too much of the bread out or poke a hole in the bread so the soup doesn\'t leak out.', type: SECTIONS.MAIN },
        { step: 'Enjoy these soup bowls on a cold day. Serve  warm soup inside the bread bowls and top with your favorite toppings.', type: SECTIONS.SERVE },
    ]
};