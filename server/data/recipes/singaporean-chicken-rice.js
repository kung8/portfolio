const aromatics = '../assets/Products/singaporean-chicken-rice-aromatics.jpeg';
const broth = '../assets/Products/singaporean-chicken-rice-broth.jpeg';
const chili = '../assets/Products/singaporean-chicken-rice-chili-sauce.jpeg';
const cooked = '../assets/Products/singaporean-chicken-rice-cooked.jpeg';
const plated = '../assets/Products/singaporean-chicken-rice-plated.jpeg';
const raw = '../assets/Products/singaporean-chicken-rice-raw-pot.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const CHICKEN = 'Chicken';
const CHILI_SAUCE = 'Chili Sauce';

module.exports = {
    cardName: 'Chicken Rice',
    name: 'Singaporean Chicken Rice',
    img: plated,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.SINGAPOREAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '40 m',
    websites: [],
    separated: true,
    ingredients: [
        { name: 'chicken thigh', amount: '1 lb', additionalDetails: 'bone-in, skin on', optional: false, section: CHICKEN },
        { name: 'sesame oil', amount: '2 tsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'jasmine rice', amount: '2 c', additionalDetails: '', optional: false, section: SECTIONS.RICE },
        { name: 'garlic cloves', amount: '6', additionalDetails: 'minced', optional: false, section: SECTIONS.RICE },
        { name: 'ginger', amount: '1/2 inch', additionalDetails: 'minced', optional: false, section: SECTIONS.RICE },
        { name: 'green onion', amount: '2', additionalDetails: 'chopped', optional: false, section: SECTIONS.RICE },
        { name: 'chicken broth', amount: '2 c', additionalDetails: '', optional: false, section: SECTIONS.RICE },
        { name: 'turmeric', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.RICE },
        { name: 'garlic cloves', amount: '6', additionalDetails: 'minced', optional: false, section: CHILI_SAUCE },
        { name: 'ginger', amount: '1/2 inch', additionalDetails: 'minced', optional: false, section: CHILI_SAUCE },
        { name: 'sriracha', amount: '2 Tbsp', additionalDetails: '', optional: false, section: CHILI_SAUCE },
        { name: 'chicken stock', amount: '2 Tbsp', additionalDetails: '', optional: false, section: CHILI_SAUCE },
        { name: 'lime juice', amount: '1 Tbsp', additionalDetails: '', optional: false, section: CHILI_SAUCE },
        { name: 'sugar', amount: '2 tsp', additionalDetails: '', optional: false, section: CHILI_SAUCE },
        { name: 'cucumber', amount: '1', additionalDetails: 'sliced', optional: false, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot with lid' },
        { name: 'bowl' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Marinade the chicken thigh with salt and sesame oil.', type: CHICKEN },
        { step: 'Wash the rice.', type: SECTIONS.RICE },
        { step: 'Prep the garlic, ginger, and green onion.', type: SECTIONS.RICE, img: aromatics },
        { step: 'Place the washed rice, garlic, ginger, green onion, chicken broth, and turmeric in a pot.', type: SECTIONS.RICE, img: broth },
        { step: 'Place the chicken thigh on top and cover with a lid.', type: SECTIONS.RICE, img: raw },
        { step: 'Cook until the chicken and rice is cooked (about 15 to 25 minutes).', type: SECTIONS.RICE, img: cooked },
        { step: 'Mix together garlic, ginger, sriracha, chicken stock, lime juice, and sugar in a bowl.', type: CHILI_SAUCE, img: chili },
        { step: 'Cut the chicken into slices.', type: SECTIONS.SERVE },
        { step: 'Serve the sliced chicken with rice and sliced cucumbers. Top with chili sauce.', type: SECTIONS.SERVE },
    ]
};