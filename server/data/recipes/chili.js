// const chili = '../assets/Products/chili-placeholder.png';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Chili',
    name: 'Chili',
    // img: chili,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '6 servings',
    prepTime: '20 m',
    cookTime: '45 m',
    ingredients: [
        { name: 'ground beef', amount: '2 lbs', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'onion', amount: '1 large', additionalDetails: 'diced', optional: false, section: SECTIONS.MAIN },
        { name: 'jalapeno peppers', amount: '1 - 3', additionalDetails: 'diced', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic cloves', amount: '4', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'chili powder', amount: '2 1/2 T', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'cumin', amount: '1 t', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'green bell pepper', amount: '1', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'crushed tomatoes', amount: '14.5 oz can', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'kidney beans', amount: '20 oz', additionalDetails: 'drained and rinsed', optional: false, section: SECTIONS.MAIN },
        { name: 'diced tomatoes', amount: '14.5 oz can', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'beef broth', amount: '3 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'tomato paste', amount: '1 T', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'brown sugar', amount: '1 T', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'cheddar cheese', amount: '', additionalDetails: 'shredded', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'green onion', amount: '', additionalDetails: 'diced', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'saltine crackers', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
    ],
    supplies: [
        { name: 'stove' },
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