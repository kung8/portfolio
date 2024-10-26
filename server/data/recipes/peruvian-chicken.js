const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    CHICKEN_WINGS,
    CILANTRO,
    LIME_JUICE,
    GARLIC,
    AVOCADO_OIL,
    CHILI_POWDER,
    SALT,
    BLACK_PEPPER,
    CAYENNE_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Peruvian Chicken',
    name: 'Peruvian Chicken',
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
        { label: 'Cilantro Lime Chicken Wings', link: 'https://kaleforniakravings.com/easy-cilantro-lime-chicken-wings/' }
    ],
    ingredients: [
        { ...CHICKEN_WINGS, amount: '2 lbs', additionalDetails: '', section: SECTIONS.MEAT },
        { ...CILANTRO, amount: '1 bunch of', additionalDetails: 'chopped', section: SECTIONS.DRESSING },
        { ...LIME_JUICE, amount: '1/2 c + 4 Tbsp', additionalDetails: 'about 6 limes', section: SECTIONS.DRESSING },
        { ...GARLIC, amount: '4', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...AVOCADO_OIL, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...CHILI_POWDER, amount: '2 tsp', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...BLACK_PEPPER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...CAYENNE_PEPPER, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.DRESSING },
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