const spices = '../assets/Products/chicken-stuffed-crescent-rolls-baked-with-spices.jpeg';
const baked = '../assets/Products/chicken-stuffed-crescent-rolls-baked.jpeg';
const fill = '../assets/Products/chicken-stuffed-crescent-rolls-fill-on-wrap.jpeg';
const filling = '../assets/Products/chicken-stuffed-crescent-rolls-filling.jpeg';
const melted = '../assets/Products/chicken-stuffed-crescent-rolls-melted-butter.jpeg';
const opened = '../assets/Products/chicken-stuffed-crescent-rolls-opened.jpeg';
const wrap = '../assets/Products/chicken-stuffed-crescent-rolls-wrap.jpeg';
const wrapped = '../assets/Products/chicken-stuffed-crescent-rolls-wrapped.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');
const {
    MOZZARELLA_CHEESE,
    CREAM_CHEESE,
    RED_BELL_PEPPERS,
    MEDIUM_YELLOW_ONION,
    GARLIC_POWDER,
    SALT,
    BLACK_PEPPER,
    CHILI_POWDER,
    UNSALTED_BUTTER,
    CRESCENT_ROLLS,
    CHICKEN_BREAST,
    PARSLEY,
} = require('./ingredients');

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
        { ...CRESCENT_ROLLS, amount: '1 can', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BREAST, amount: '1 c', additionalDetails: 'cooked and shredded', section: SECTIONS.FILLING },
        { ...MOZZARELLA_CHEESE, amount: '1/2 c', additionalDetails: 'shredded', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...RED_BELL_PEPPERS, amount: '1', additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...MEDIUM_YELLOW_ONION, amount: '3/4', additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...GARLIC_POWDER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...PARSLEY, amount: '1 tsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.FILLING },
        { ...CHILI_POWDER, amount: '', additionalDetails: 'too taste', section: SECTIONS.FILLING },
        { ...UNSALTED_BUTTER, amount: '2 Tbsp', additionalDetails: 'melted', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
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
        { note: 'Be sure to cook the dough completely.' }
    ]
};