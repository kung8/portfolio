const garlic = '../assets/Products/bbq-pulled-pork-garlic.jpeg';
const beforePulled = '../assets/Products/bbq-pulled-pork-finished-before-pulled.jpeg';
const finished = '../assets/Products/bbq-pulled-pork-finished.jpeg';
const pulled = '../assets/Products/bbq-pulled-pork-pulled.jpeg';
const covered = '../assets/Products/bbq-pulled-pork-covered.jpeg';
const dryWithPork = '../assets/Products/bbq-pulled-pork-dry-mixed-with-pork.jpeg';
const mixed = '../assets/Products/bbq-pulled-pork-dry-mixed.jpeg';
const dry = '../assets/Products/bbq-pulled-pork-dry.jpeg';
const liner = '../assets/Products/bbq-pulled-pork-liner.jpeg';
const raw = '../assets/Products/bbq-pulled-pork-raw-pork.jpeg';
const wet = '../assets/Products/bbq-pulled-pork-wet.jpeg';
const plate1 = '../assets/Products/bbq-pulled-pork-full-plate-1.jpeg';
const plate2 = '../assets/Products/bbq-pulled-pork-full-plate-2.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");
const {
    PORK_ROAST,
    VEGETABLE_OIL,
    BBQ_SAUCE,
    APPLE_CIDER_VINEGAR,
    CHICKEN_BROTH,
    BROWN_SUGAR,
    YELLOW_MUSTARD,
    WORCESTERSHIRE_SAUCE,
    CHILI_POWDER,
    LARGE_YELLOW_ONION,
    GARLIC,
    THYME,
    BRIOCHE_BUNS,
} = require('./ingredients');

module.exports = {
    cardName: 'BBQ Pulled Pork',
    name: 'BBQ Pulled Pork',
    img: finished,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.SOUTHERN, GENRES.BBQ],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: '8 servings',
    prepTime: '30 m',
    cookTime: '6 h',
    ingredients: [
        { ...PORK_ROAST, amount: '4 lb', additionalDetails: '', section: SECTIONS.FILLING },
        { ...VEGETABLE_OIL, amount: '1 tsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...BROWN_SUGAR, amount: '1/4 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHILI_POWDER, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...LARGE_YELLOW_ONION, amount: '1', additionalDetails: 'chopped', section: SECTIONS.FILLING },
        { ...GARLIC, amount: '2', additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...THYME, amount: '1 1/2 tsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...BBQ_SAUCE, amount: '1 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...APPLE_CIDER_VINEGAR, amount: '1/2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHICKEN_BROTH, amount: '1/2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...YELLOW_MUSTARD, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...WORCESTERSHIRE_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...BRIOCHE_BUNS, amount: '8', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'slow cooker' },
    ],
    supplies: [
        { name: 'slow cooker liner' },
        { name: '2 forks' },
    ],
    directions: [
        { step: 'Line a slow cooker with a liner to make cleaning quick.', type: SECTIONS.FILLING, img: liner },
        { step: 'Pour the vegetable oil into the slow cooker.', type: SECTIONS.FILLING },
        { step: 'Place roast in the slow cooker and massage the pork with the dry ingredient.', type: SECTIONS.FILLING, img: [garlic, raw, dry, mixed, dryWithPork] },
        { step: 'Pour the wet ingredients into the slow cooker.', type: SECTIONS.FILLING, img: wet },
        { step: 'Cover and cook on high for 5 - 6 hours (or on low for 10 - 12 hours).', type: SECTIONS.FILLING, img: covered },
        { step: 'Shred the pork with two forks.', type: SECTIONS.FILLING, img: [beforePulled, pulled] },
        { step: 'Return shredded pork to soak in more of the sauce.', type: SECTIONS.FILLING },
        { step: 'Fill the brioche buns with pulled pork.', type: SECTIONS.MAIN },
        { step: 'Serve with coleslaw, baked beans, homemade macaroni and cheese, and any other favorite fixins\'.', type: SECTIONS.MAIN, img: [plate1, plate2] },
    ]
};