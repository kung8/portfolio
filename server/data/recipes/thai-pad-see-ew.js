const broccoli = '../assets/Products/pad-see-ew-chinese-broccoli.jpeg';
const cookedChicken = '../assets/Products/pad-see-ew-cooked-chicken.jpeg';
const cookedEggs = '../assets/Products/pad-see-ew-cooked-eggs.jpeg';
const dry = '../assets/Products/pad-see-ew-dry-fry.jpeg';
const freshNoodles = '../assets/Products/pad-see-ew-fresh-noodles.jpeg';
const mixed = '../assets/Products/pad-see-ew-mixed.jpeg';
const noodlesWithSauce = '../assets/Products/pad-see-ew-noodles-with-sauce.jpeg';
const leaves = '../assets/Products/pad-see-ew-pan-fried-leaves.jpeg';
const fryVeggies = '../assets/Products/pad-see-ew-pan-fry-veggies.jpeg';
const partialChicken = '../assets/Products/pad-see-ew-partial-chicken.jpeg';
const paste = '../assets/Products/pad-see-ew-paste.jpeg';
const platedZoomed = '../assets/Products/pad-see-ew-plated-zoomed.jpeg';
const plated = '../assets/Products/pad-see-ew-plated.jpeg';
const thigh = '../assets/Products/pad-see-ew-raw-chicken-thigh.jpeg';
const sauce = '../assets/Products/pad-see-ew-sauce.jpeg';
const vinegar = '../assets/Products/pad-see-ew-thai-chili-vinegar.jpeg';
const veggies = '../assets/Products/pad-see-ew-veggies.jpeg';

const CHICKEN = 'Chicken';
const THAI_CHILI_PEPPER = 'Thai Chili Pepper';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Pad See Ew',
    name: 'Thai Pad See Ew',
    recipeCredit: 'Derek K Chen',
    img: platedZoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.THAI],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE],
    yields: '3 servings',
    prepTime: '10 m',
    cookTime: '30 m',
    websites: [
        "https://hot-thai-kitchen.com/chili-vinegar/"
    ],
    separated: true,
    ingredients: [
        { name: 'chicken thighs', amount: '1/2 lb', additionalDetails: 'cut into 2 inches', section: CHICKEN },
        { name: 'soy sauce', amount: '1 tsp', additionalDetails: '', section: CHICKEN },
        { name: 'oyster sauce', amount: '1 tsp', additionalDetails: '', section: CHICKEN },
        { name: 'oil', amount: '1 tsp', additionalDetails: '', section: CHICKEN },
        { name: 'cornstarch', amount: '1 tsp', additionalDetails: '', section: CHICKEN },

        { name: 'eggs', amount: '2', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'garlic', amount: '4 cloves', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { name: 'Chinese broccoli', amount: '5 pc', additionalDetails: 'leaves and stems separated', section: SECTIONS.MAIN },
        { name: 'bell pepper', amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { name: 'onion', amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { name: 'snow peas', amount: '4 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'oil', amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'fresh rice noodles', amount: '1 lb', additionalDetails: '', section: SECTIONS.MAIN },

        { name: 'light soy sauce', amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'dark soy sauce', amount: '1.5 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'oyster sauce', amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'brown sugar', amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'white pepper', amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },

        { name: 'garlic', amount: '1 clove', additionalDetails: '', section: THAI_CHILI_PEPPER },
        { name: 'thai chili pepper', amount: '2 - 3', additionalDetails: '', section: THAI_CHILI_PEPPER },
        { name: 'white vinegar', amount: '1/4 c', additionalDetails: '', section: THAI_CHILI_PEPPER },
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
        { step: 'Dry fry the Thai chili peppers and garlic.', type: THAI_CHILI_PEPPER, img: dry },
        { step: 'In a mortar and pestle, crush the peppers and garlic until it becomes a paste.', type: THAI_CHILI_PEPPER, img: paste },
        { step: 'Add vinegar to the paste.', type: THAI_CHILI_PEPPER, img: vinegar },

        { step: 'Marinate the chicken with all of the marinade ingredients.', type: SECTIONS.MAIN, img: thigh },
        { step: 'Combine all the sauce ingredients in a medium size bowl.', type: SECTIONS.MAIN, img: sauce },
        { step: 'Separate the chinese broccoli stems and leaves. Cut the stems about 2 inches.', type: SECTIONS.MAIN, img: broccoli },
        { step: 'Cut the onion and bell pepper into slices and mince the garlic.', type: SECTIONS.MAIN, img: veggies },
        { step: 'Sear chicken in a pan until it\'s about 80% cooked.', type: SECTIONS.MAIN, img: cookedChicken },
        { step: 'Remove from the pan.', type: SECTIONS.MAIN, img: partialChicken },
        { step: 'Add garlic, Chinese broccoli stems, sliced onion, snow peas and sliced pepper to the pan. Cook for 2 to 3 minutes.', type: SECTIONS.MAIN, img: fryVeggies },
        { step: 'Add the Chinese broccoli leaves. Cook until the leaves wilts.', type: SECTIONS.MAIN, img: leaves },
        { step: 'Remove the vegetables from the pan.', type: SECTIONS.MAIN },
        { step: 'Add eggs to the pan. Scramble for a few seconds and let it set. Remove the eggs from the pan.', type: SECTIONS.MAIN, img: cookedEggs },
        { step: 'Add a tablespoon of oil. Add rice noodles to the pan. Cook for a few minutes and let it char a little bit.', type: SECTIONS.MAIN, img: freshNoodles },
        { step: 'Add sauce over noodles and cook for 3 minutes on high.', type: SECTIONS.MAIN, img: noodlesWithSauce },
        { step: 'Re-add chicken. Cook the chicken the remainder of the way.', type: SECTIONS.MAIN },
        { step: 'Re-add the veggies and eggs. Toss everything together.', type: SECTIONS.MAIN, img: mixed },
        { step: 'Optionally top with the chili vinegar sauce.', type: SECTIONS.MAIN, img: plated },
    ]
};