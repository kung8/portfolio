const gingerChicken = '../assets/Products/ginger-chicken.jpeg';
const stored = '../assets/Products/stored-ginger-chicken.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Ginger Chicken',
    name: 'Chinese Ginger Chicken',
    img: gingerChicken,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SIDE_DISH],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '20 m',
    ingredients: [
        { name: 'chicken thigh', amount: '3 lb', additionalDetails: 'cut into 2 inch pieces', optional: false, section: SECTIONS.MAIN },
        { name: 'fresh ginger', amount: '3 inch', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic', amount: '3 cloves', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'low-sodium soy sauce', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'black pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'cornstarch', amount: '', additionalDetails: 'to thicken', optional: false, section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'wok' },
        { name: 'spatula' },
        { name: '2 large bowls' },
    ],
    directions: [
        { step: 'Place wok on stove over medium heat, be careful there may be a moderate amount of splashing oil.', type: SECTIONS.MAIN },
        { step: 'Add half of the minced garlic into the wok and cook until fragrant, about 30 seconds.', type: SECTIONS.MAIN },
        { step: 'Cook the chicken in two batches. Add the chicken into the wok, and make sure it\'s a single layer.', type: SECTIONS.MAIN, img: stored },
        { step: 'Add salt and pepper as desired. If you are using low-sodium soy sauce, you can be a little more generous with the salt.', type: SECTIONS.MAIN },
        { step: 'Do not mix or stir too frequently. We want it to brown and smoke a little (about 3 to 5 minutes).', type: SECTIONS.MAIN },
        { step: 'Once the chicken begins to brown, flip the chicken and continue cooking until it begins to brown on that side.', type: SECTIONS.MAIN },
        { step: 'Add half of the ginger into the wok towards the bottom so it can get crispy.', type: SECTIONS.MAIN },
        { step: 'After it has browned, add the soy sauce to give it a nice sauce and a little cornstarch to thicken the sauce.', type: SECTIONS.MAIN },
        { step: 'Transfer the cooked chicken into a clean bowl. And cook the second batch.', type: SECTIONS.MAIN },
        { step: 'Eat one of my favorite childhood dishes with steamed rice and any other side dishes.', type: SECTIONS.MAIN },
    ]
};