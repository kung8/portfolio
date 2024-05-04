const spices = '../assets/Products/chicken-stuffed-crescent-rolls-baked-with-spices.jpeg';
const baked = '../assets/Products/chicken-stuffed-crescent-rolls-baked.jpeg';
const fill = '../assets/Products/chicken-stuffed-crescent-rolls-fill-on-wrap.jpeg';
const filling = '../assets/Products/chicken-stuffed-crescent-rolls-filling.jpeg';
const melted = '../assets/Products/chicken-stuffed-crescent-rolls-melted-butter.jpeg';
const opened = '../assets/Products/chicken-stuffed-crescent-rolls-opened.jpeg';
const wrap = '../assets/Products/chicken-stuffed-crescent-rolls-wrap.jpeg';
const wrapped = '../assets/Products/chicken-stuffed-crescent-rolls-wrapped.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');

module.exports = {
    cardName: 'Chicken Crescent Rolls',
    name: 'Chicken Stuffed Crescent Rolls',
    img: opened,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '12 m',
    ingredients: [
        { name: 'crescent rolls', amount: '1 can', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'cooked chicken', amount: '1 c', additionalDetails: 'shredded', optional: false, section: SECTIONS.FILLING },
        { name: 'mozzarella cheese', amount: '1/2 c', additionalDetails: 'shredded', optional: false, section: SECTIONS.FILLING },
        { name: 'cream cheese', amount: '1/4 c', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'bell peppers', amount: '1', additionalDetails: 'diced', optional: false, section: SECTIONS.FILLING },
        { name: 'medium onion', amount: '3/4', additionalDetails: 'diced', optional: false, section: SECTIONS.FILLING },
        { name: 'garlic powder', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'dried parsley', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.FILLING },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.FILLING },
        { name: 'chili powder', amount: '', additionalDetails: 'too taste', optional: false, section: SECTIONS.FILLING },
        { name: 'butter', amount: '2 Tbsp', additionalDetails: 'melted', optional: false, section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat oven to 375ºF.', type: SECTIONS.MAIN },
        { step: 'Combine shredded chicken, shredded cheese, cream cheese, bell peppers, onion, garlic powder, parsley, salt, pepper, and chili powder in a mixing bowl.', type: SECTIONS.MAIN, img: filling },
        { step: 'Unroll the crescent roll triangles and lay on the baking sheet.', type: SECTIONS.MAIN, img: wrap },
        { step: 'Place a ball of chicken filling on the wide end of the crescent roll.', type: SECTIONS.MAIN, img: fill },
        { step: 'Roll the dough to enclose as much of the filling.', type: SECTIONS.MAIN, img: wrapped },
        { step: 'Brush rolls with melted butter and optionally sprinkle with cheese.', type: SECTIONS.MAIN, img: melted },
        { step: 'Bake in oven for 10 to 12 minutes, or until golden brown.', type: SECTIONS.MAIN, img: spices },
        { step: 'Serve warm and enjoy this light appetizer.', type: SECTIONS.MAIN, img: baked },
    ],
    notes: [
        'Be sure to cook the dough completely.'
    ]
};