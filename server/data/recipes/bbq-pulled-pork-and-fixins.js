const bbq = '../assets/Products/bbq-pulled-pork.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'BBQ Pulled Pork',
    name: 'BBQ Pulled Pork',
    img: bbq,
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
        { name: 'pork roast', amount: '4 lb', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'vegetable oil', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'preferred BBQ sauce', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'apple cider vinegar', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'chicken broth', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'brown sugar', amount: '1/4 c', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'yellow mustard', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'Worcestershire sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'chili powder', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'large onion', amount: '1', additionalDetails: 'chopped', optional: false, section: SECTIONS.FILLING },
        { name: 'garlic cloves', amount: '2', additionalDetails: 'diced', optional: false, section: SECTIONS.FILLING },
        { name: 'thyme', amount: '1 1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'brioche buns', amount: '8', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'slow cooker' },
    ],
    supplies: [
        { name: 'slow cooker liner' },
        { name: '2 forks' },
    ],
    directions: [
        { step: 'Line a slow cooker with a liner to make cleaning quick.', type: SECTIONS.FILLING },
        { step: 'Pour the vegetable oil into the slow cooker.', type: SECTIONS.FILLING },
        { step: 'Place roast in the slow cooker and massage the pork with the dry ingredient.', type: SECTIONS.FILLING },
        { step: 'Pour the wet ingredients into the slow cooker.', type: SECTIONS.FILLING },
        { step: 'Cover and cook on high for 5 - 6 hours (or on low for 10 - 12 hours).', type: SECTIONS.FILLING },
        { step: 'Shred the pork with two forks.', type: SECTIONS.FILLING },
        { step: 'Return shredded pork to soak in more of the sauce.', type: SECTIONS.FILLING },
        { step: 'Fill the brioche buns with pulled pork.', type: SECTIONS.MAIN },
        { step: 'Serve with coleslaw, baked beans, homemade macaroni and cheese, and any other favorite fixins\'.', type: SECTIONS.MAIN },
    ]
};