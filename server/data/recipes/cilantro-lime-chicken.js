const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Cilantro Lime Chicken',
    name: 'Cilantro Lime Chicken',
    img: cilantroLimeChicken,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.PERUVIAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.RICE],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '40 m',
    websites: [
        'https://kaleforniakravings.com/easy-cilantro-lime-chicken-wings/'
    ],
    ingredients: [
        { name: 'chicken wings', amount: '2 lbs', additionalDetails: '', optional: false, section: SECTIONS.MEAT },
        { name: 'cilantro', amount: '1 bunch of', additionalDetails: 'chopped', optional: false, section: SECTIONS.DRESSING },
        { name: 'lime juice', amount: '1/2 c + 4 Tbsp', additionalDetails: 'about 6 limes', optional: false, section: SECTIONS.DRESSING },
        { name: 'garlic cloves', amount: '4', additionalDetails: '', optional: false, section: SECTIONS.DRESSING },
        { name: 'avocado oil', amount: '4 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.DRESSING },
        { name: 'chili powder', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.DRESSING },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.DRESSING },
        { name: 'pepper', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.DRESSING },
        { name: 'cayenne pepper', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.DRESSING },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'ziploc' },
        { name: 'wire rack' },
        { name: 'baking sheet' },
        { name: 'tongs' },
    ],
    directions: [
        { step: 'Combine all the dressing ingredients in a blender.', type: SECTIONS.DRESSING },
        { step: 'Pour 1/2 of the dressing into a ziploc bag and place the chicken wings and drum.', type: SECTIONS.MEAT },
        { step: 'Let the chicken marinate for 4 hours.', type: SECTIONS.MEAT },
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Place a wire rack on top of a baking pan.', type: SECTIONS.MAIN },
        { step: 'Use tongs to transfer chicken to wire rack in a single layer.', type: SECTIONS.MAIN },
        { step: 'Bake for 30 to 35 minutes. Feel free to broil the wings for 2 to 3 minutes in addition to make it crispier.', type: SECTIONS.MAIN },
        { step: 'Dip this chicken in the dressing and serve it with a side of salad and cilantro rice.', type: SECTIONS.SERVE },
    ]
};