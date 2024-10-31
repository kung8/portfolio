const blended = '../assets/Products/mexican-cilantro-lime-chicken-blended.jpeg';
const blender = '../assets/Products/mexican-cilantro-lime-chicken-blender.jpeg';
const cilantro1 = '../assets/Products/mexican-cilantro-lime-chicken-cilantro-1.jpeg';
const cilantro2 = '../assets/Products/mexican-cilantro-lime-chicken-cilantro-2.jpeg';
const dressing = '../assets/Products/mexican-cilantro-lime-chicken-dressing.jpeg';
const marinade1 = '../assets/Products/mexican-cilantro-lime-chicken-marinade-1.jpeg';
const marinade2 = '../assets/Products/mexican-cilantro-lime-chicken-marinade-2.jpeg';
const marinade3 = '../assets/Products/mexican-cilantro-lime-chicken-marinade-3.jpeg';
const wings = '../assets/Products/mexican-cilantro-lime-chicken-wings.jpeg';
const baking = '../assets/Products/mexican-cilantro-lime-chicken-baking.jpeg';
const broiled1 = '../assets/Products/mexican-cilantro-lime-chicken-broiled-1.jpeg';
const broiled2 = '../assets/Products/mexican-cilantro-lime-chicken-broiled-2.jpeg';
const zoomed = '../assets/Products/mexican-cilantro-lime-chicken-raw-on-baking-rack-zoomed.jpeg';
const rack = '../assets/Products/mexican-cilantro-lime-chicken-raw-on-baking-rack.jpeg';
const chicken = '../assets/Products/mexican-cilantro-lime-chicken-plated-just-chicken.jpeg';
const set1 = '../assets/Products/mexican-cilantro-lime-chicken-plated-set-1.jpeg';
const set2 = '../assets/Products/mexican-cilantro-lime-chicken-plated-set-2.jpeg';
const rice = '../assets/Products/mexican-cilantro-lime-chicken-plated-with-rice.jpeg';

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
    cardName: 'Cilantro Lime Chicken',
    name: 'Mexican Cilantro Lime Chicken',
    img: set1,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.RICE],
    yields: '2 servings',
    prepTime: '15 m',
    cookTime: '40 m',
    websites: [
        { label: 'Cilantro Lime Chicken Wings', link: 'https://kaleforniakravings.com/easy-cilantro-lime-chicken-wings/' }
    ],
    ingredients: [
        { ...CHICKEN_WINGS, amount: '2 lbs', additionalDetails: '', section: SECTIONS.MEAT },
        { ...CILANTRO, amount: '1 bunch of', additionalDetails: 'chopped', section: SECTIONS.DRESSING },
        { ...LIME_JUICE, amount: '5 limes', additionalDetails: 'juiced', section: SECTIONS.DRESSING },
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
        { step: 'Combine all the dressing ingredients in a blender.', type: SECTIONS.DRESSING, img: [blender, cilantro1, cilantro2, blended, dressing] },
        { step: 'Pour 1/2 of the dressing into a ziploc bag and place the chicken wings and drum.', type: SECTIONS.MEAT, img: [wings, marinade1, marinade2, marinade3] },
        { step: 'Let the chicken marinate for 4 hours.', type: SECTIONS.MEAT },
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Place a wire rack on top of a baking pan.', type: SECTIONS.MAIN },
        { step: 'Use tongs to transfer chicken to wire rack in a single layer.', type: SECTIONS.MAIN, img: [rack, zoomed] },
        { step: 'Bake for 30 to 35 minutes. Feel free to broil the wings for 2 to 3 minutes in addition to make it crispier.', type: SECTIONS.MAIN, img: [baking, broiled1, broiled2] },
        { step: 'Dip this chicken in the dressing and serve it with a side of salad and cilantro rice.', type: SECTIONS.SERVE, img: [chicken, set2, rice] },
    ]
};