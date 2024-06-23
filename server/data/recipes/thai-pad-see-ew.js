const chickenAdded = '../assets/Products/pad-see-ew-chicken-added.jpeg';
const chickenInPan = '../assets/Products/pad-see-ew-chicken-in-pan.jpeg';
const rawChicken = '../assets/Products/pad-see-ew-raw-chicken.jpeg';
const broccoli = '../assets/Products/pad-see-ew-chinese-broccoli.jpeg';
const eggs = '../assets/Products/pad-see-ew-eggs.jpeg';
const noodles = '../assets/Products/pad-see-ew-noodles.jpeg';
const partialChicken = '../assets/Products/pad-see-ew-partial-chicken.jpeg';
const sauce = '../assets/Products/pad-see-ew-sauce.jpeg';
const padSeeEw = '../assets/Products/pad-see-ew.jpeg';

const CHICKEN = 'Chicken';
const THAI_CHILI_PEPPER = 'Thai Chili Pepper';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Pad See Ew',
    name: 'Thai Pad See Ew',
    recipeCredit: 'Leah Cohen',
    img: padSeeEw,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.THAI],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE],
    yields: '2 servings',
    prepTime: '10 m',
    cookTime: '30 m',
    websites: [
        "https://hot-thai-kitchen.com/chili-vinegar/"
    ],
    separated: true,
    ingredients: [
        { name: 'chicken thighs', amount: '6 oz', additionalDetails: 'cut into 2 inches', optional: false, section: CHICKEN },
        { name: 'soy sauce', amount: '1.5 Tbsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'eggs', amount: '2', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic', amount: '3 cloves', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'Chinese broccoli', amount: '5 pc', additionalDetails: 'leaves and stems separated', optional: false, section: SECTIONS.MAIN },
        { name: 'oil', amount: '4 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'fresh rice noodles', amount: '1 lb', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'oyster sauce', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'soy sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'fish sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'golden mountain sauce', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'sugar', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'white pepper', amount: '', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'garlic', amount: '1 clove', additionalDetails: '', optional: true, section: THAI_CHILI_PEPPER },
        { name: 'thai chili pepper', amount: '2 - 3', additionalDetails: '', optional: true, section: THAI_CHILI_PEPPER },
        { name: 'white vinegar', amount: '1/4 c', additionalDetails: '', optional: true, section: THAI_CHILI_PEPPER },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'bowl' },
        { name: 'wok' },
        { name: 'small bowl' },
        { name: 'mortar and pestle' },
    ],
    directions: [
        { step: 'Dry fry the Thai chili peppers and garlic.', type: THAI_CHILI_PEPPER },
        { step: 'In a mortar and pestle, crush the peppers and garlic until it becomes a paste.', type: THAI_CHILI_PEPPER },
        { step: 'Add vinegar to the paste.', type: THAI_CHILI_PEPPER },
        { step: 'Marinate the chicken in soy sauce for a minimum of 30 minutes.', type: SECTIONS.MAIN, img: rawChicken },
        { step: 'Separate the chinese broccoli stems and leaves. Cut the stems about 2 inches.', type: SECTIONS.MAIN, img: broccoli },
        { step: 'Sear chicken in a pan until it’s browned on one side and not cooked through.', type: SECTIONS.MAIN, img: chickenInPan },
        { step: 'Remove from the pan.', type: SECTIONS.MAIN, img: partialChicken },
        { step: 'Add garlic and eggs. Break yolks a little and let them set.', type: SECTIONS.MAIN, img: eggs },
        { step: 'Add Chinese broccoli steam and rice noodles.', type: SECTIONS.MAIN, img: noodles },
        { step: 'Char the noodles a little.', type: SECTIONS.MAIN },
        { step: 'Add sauce over noodles and cook for 3 minutes on high.', type: SECTIONS.MAIN, img: sauce },
        { step: 'Re-add chicken.', type: SECTIONS.MAIN, img: chickenAdded },
        { step: 'Add chinese broccoli leaves.', type: SECTIONS.MAIN, img: padSeeEw },
        { step: 'Optionally top with the chili vinegar sauce.', type: SECTIONS.MAIN },
    ]
};