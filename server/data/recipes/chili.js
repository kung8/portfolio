const chili = '../assets/Products/chili.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'Chili',
    name: 'Chili',
    img: chili,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.MEXICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SOUP],
    yields: '6 servings',
    prepTime: '20 m',
    cookTime: '45 m',
    ingredients: [
        { name: 'ground beef', amount: '2 lbs', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'onion', amount: '1 large', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { name: 'jalapeno peppers', amount: '1 - 3', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { name: 'garlic cloves', amount: '4', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { name: 'chili powder', amount: '2 1/2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'cumin', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'green bell pepper', amount: '1', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { name: 'crushed tomatoes', amount: '14.5 oz can', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'kidney beans', amount: '20 oz', additionalDetails: 'drained and rinsed', section: SECTIONS.MAIN },
        { name: 'diced tomatoes', amount: '14.5 oz can', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'beef broth', amount: '3 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'tomato paste', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'brown sugar', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { name: 'cheddar cheese', amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { name: 'green onion', amount: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { name: 'saltine crackers', amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a large pot over medium-high heat, combine beef, chili powder, onion, jalapeno, and garlic.', type: SECTIONS.MAIN },
        { step: 'Brown the content, mix occasionally, and drain any fat.', type: SECTIONS.MAIN },
        { step: 'Add the cumin, bell pepper, different tomato variations, beans, broth, brown sugar, salt and pepper.', type: SECTIONS.MAIN },
        { step: 'Bring to a boil.', type: SECTIONS.MAIN },
        { step: 'Lower heat and cook for 45 - 60 minutes or until it has become the desired thickness.', type: SECTIONS.MAIN },
        { step: 'Serve with your favorite toppings and feel free to add as much spice as you can handle or desire.', type: SECTIONS.TOPPINGS },
    ]
};