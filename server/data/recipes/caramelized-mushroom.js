// const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Caramelized Mushroom',
    name: 'Caramelized Mushroom',
    // img: cilantroLimeChicken,
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.SAUTE],
    yields: '6 servings',
    prepTime: '2 m',
    cookTime: '20 m',
    ingredients: [
        { name: 'mushroom', amount: '8 oz', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'butter', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'brown sugar', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'balsamic vinegar', amount: '3 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'soy sauce', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.TOPPING },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.TOPPING },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, melt butter in a pan.', type: SECTIONS.TOPPING },
        { step: 'Add the mushroom and let it brown.', type: SECTIONS.TOPPING },
        { step: 'Add the brown sugar, balsamic vinegar, and soy sauce when the mushroom begins to brown.', type: SECTIONS.TOPPING },
        { step: 'Stir and cook for about 3 minutes.', type: SECTIONS.TOPPING },
        { step: 'Season with salt and pepper and cook until mushrooms are browned and soft.', type: SECTIONS.TOPPING },
        { step: 'Serve as a topping for pizza, burgers, or meat.', type: SECTIONS.TOPPING },
    ]
};