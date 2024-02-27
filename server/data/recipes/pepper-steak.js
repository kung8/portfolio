const pepperSteak = '../assets/Products/pepper-steak.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Pepper Steak',
    name: 'Pepper Steak',
    img: pepperSteak,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '25 m',
    ingredients: [
        { name: 'vegetable oil', amount: '1 T', additionalDetails: '', optional: false, section: '' },
        { name: 'beef', amount: '1.5 lb', additionalDetails: 'sliced or 1" chunks', optional: false, section: '' },
        { name: 'bell pepper', amount: '2', additionalDetails: 'sliced', optional: false, section: '' },
        { name: 'onion', amount: '1', additionalDetails: 'sliced', optional: false, section: '' },
        { name: 'garlic', amount: '2 t', additionalDetails: 'minced', optional: false, section: '' },
        { name: 'soy sauce', amount: '3 T', additionalDetails: '', optional: false, section: '' },
        { name: 'water', amount: '1/2 c', additionalDetails: '', optional: false, section: '' },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: '' },
        { name: 'black pepper', amount: '', additionalDetails: 'to taste', optional: false, section: '' },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'Heat up a wok over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add vegetable oil and wait until oil is hot before placing beef inside wok.', type: SECTIONS.MAIN },
        { step: 'Brown the beef (does not have to be cooked all the way).', type: SECTIONS.MAIN },
        { step: 'Add salt and pepper to the beef.', type: SECTIONS.MAIN },
        { step: 'Turn up the heat to high.', type: SECTIONS.MAIN },
        { step: 'Add the sliced onions, peppers and minced garlic to the wok and continue to cook all together. Mix occasionally to prevent any burning.', type: SECTIONS.MAIN },
        { step: 'The meat will excrete juices which will serve as the base for the sauce.', type: SECTIONS.MAIN },
        { step: 'After the meat and vegetables brown a little more (about a few minutes), add the water and soy sauce.', type: SECTIONS.MAIN },
        { step: 'Continue to let cook for a few more minutes.', type: SECTIONS.MAIN },
        { step: 'Serve with rice and enjoy this simple home cooked meal.', type: SECTIONS.MAIN },
    ]
};