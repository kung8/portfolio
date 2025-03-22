const aromatics = '../assets/Products/singaporean-chicken-rice-aromatics.jpeg';
const broth = '../assets/Products/singaporean-chicken-rice-broth.jpeg';
const chicken = '../assets/Products/singaporean-chicken-rice-chicken-in-broth.jpeg';
const mixed = '../assets/Products/singaporean-chicken-rice-cooked-mixed.jpeg';
const mixed2 = '../assets/Products/singaporean-chicken-rice-cooked-mixed-2.jpeg';
const lid = '../assets/Products/singaporean-chicken-rice-lid.jpeg';
const chili = '../assets/Products/singaporean-chicken-rice-chili-sauce.jpeg';
const cooked = '../assets/Products/singaporean-chicken-rice-cooked.jpeg';
const plated = '../assets/Products/singaporean-chicken-rice-plated.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    CHICKEN_THIGH,
    SESAME_OIL,
    SALT,
    JASMINE_RICE,
    GARLIC,
    GINGER,
    GREEN_ONIONS,
    CHICKEN_BROTH,
    TURMERIC,
    SRIRACHA_SAUCE,
    LIME_JUICE,
    WHITE_SUGAR,
    CUCUMBER,
    ROMA_TOMATO,
} = require('./ingredients');

const CHILI_SAUCE = 'Chili Sauce';

module.exports = {
    cardName: 'Singaporean Chicken Rice',
    name: 'Singaporean Chicken Rice',
    img: plated,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SINGAPOREAN, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '40 m',
    // websites: [],
    separated: true,
    ingredients: [
        { ...CHICKEN_THIGH, amount: '1 lb', unit: '', additionalDetails: 'bone-in, skin on', section: SECTIONS.CHICKEN },
        { ...SESAME_OIL, amount: '2 tsp', unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '1/4 tsp', unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...JASMINE_RICE, amount: '2 c', unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...GARLIC, amount: '6 cloves', unit: '', additionalDetails: 'minced', section: SECTIONS.RICE },
        { ...GINGER, amount: '1/2 inch', unit: '', additionalDetails: 'minced', section: SECTIONS.RICE },
        { ...GREEN_ONIONS, amount: '2', unit: '', additionalDetails: 'chopped', section: SECTIONS.RICE },
        { ...CHICKEN_BROTH, amount: '2 c', unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...TURMERIC, amount: '1/2 tsp', unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...GARLIC, amount: '6 cloves', unit: '', additionalDetails: 'minced', section: CHILI_SAUCE },
        { ...GINGER, amount: '1/2 inch', unit: '', additionalDetails: 'minced', section: CHILI_SAUCE },
        { ...SRIRACHA_SAUCE, amount: '2 Tbsp', unit: '', additionalDetails: '', section: CHILI_SAUCE },
        { ...CHICKEN_BROTH, amount: '2 Tbsp', unit: '', additionalDetails: '', section: CHILI_SAUCE },
        { ...LIME_JUICE, amount: '1 Tbsp', unit: '', additionalDetails: '', section: CHILI_SAUCE },
        { ...WHITE_SUGAR, amount: '2 tsp', unit: '', additionalDetails: '', section: CHILI_SAUCE },
        { ...CUCUMBER, amount: '1', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '1', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
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
        { step: 'Marinade the chicken thigh with salt and sesame oil.', type: SECTIONS.CHICKEN },
        { step: 'Wash the rice.', type: SECTIONS.RICE },
        { step: 'Prep the garlic, ginger, and green onion.', type: SECTIONS.RICE, img: aromatics },
        { step: 'Place the washed rice, garlic, ginger, green onion, chicken broth, and turmeric in a pot.', type: SECTIONS.RICE, img: broth },
        { step: 'Place the chicken thigh on top and cover with a lid.', type: SECTIONS.RICE, img: [chicken, lid] },
        { step: 'Cook until the chicken and rice is cooked (about 15 to 25 minutes).', type: SECTIONS.RICE, img: [cooked, mixed, mixed2] },
        { step: 'Cut the chicken into slices. If the chicken is still pink/raw, I recommend placing the sliced chicken in a pan filled with a layer of water and cover with a lid. Cook the chicken for 5 or so minutes over medium-high heat.', type: SECTIONS.RICE },
        { step: 'Mix together garlic, ginger, sriracha, chicken stock, lime juice, and sugar in a bowl.', type: CHILI_SAUCE, img: chili },
        { step: 'Serve this dish with cucumbers and tomatoes. Top with chili sauce.', type: SECTIONS.SERVE },
    ]
};