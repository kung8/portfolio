const dinner = '../assets/Products/hobo-dinner.jpeg';
const pan = '../assets/Products/hobo-dinner-pan.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Hobo Dinner',
    name: 'Hobo Dinner',
    img: pan,
    available: true,
    category: [CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.VEGETABLE, TYPES.PROTEIN],
    yields: '6 servings',
    prepTime: '5 m',
    cookTime: '40 m',
    ingredients: [
        { name: 'summer sausage', amount: '1', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'large carrots', amount: '3', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'medium potatoes', amount: '3', additionalDetails: 'chunked', optional: false, section: SECTIONS.MAIN },
        { name: 'large onion', amount: '1', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'olive oil', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Add your preferred sliced veggies and proteins into the baking pan. I love summer sausage with these simple hearty veggies.', type: SECTIONS.MAIN },
        { step: 'Drizzle a light amount of olive oil. If you choose to use other proteins, note that the amount of oil may need to be adjusted.', type: SECTIONS.MAIN },
        { step: 'Cover with aluminum foil.', type: SECTIONS.MAIN },
        { step: 'Bake for 40 minutes, or until the selected protein is cooked.', type: SECTIONS.MAIN, img: dinner },
    ], 
    notes: [
        'This was a favorite tradition of mine when camping. Simply wrapping whatever food in layers of tin foil and cooking over a campfire. And while it cooked, telling stories and enjoying the outdoors.',
    ],
};