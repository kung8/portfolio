const aerial = '../assets/Products/pad-thai-aerial.jpeg';
const boilingNoodles = '../assets/Products/pad-thai-boiling-noodles.jpeg';
const boilingWater = '../assets/Products/pad-thai-boiling-water.jpeg';
const butter = '../assets/Products/pad-thai-butter.jpeg';
const chickenPan = '../assets/Products/pad-thai-chicken-in-pan.jpeg';
const chicken = '../assets/Products/pad-thai-chicken.jpeg';
const cookedEggs = '../assets/Products/pad-thai-cooked-eggs.jpeg';
const noodles = '../assets/Products/pad-thai-cooked-noodles.jpeg';
const veggiesChicken = '../assets/Products/pad-thai-cooked-veggies-and-chicken.jpeg';
const strips = '../assets/Products/pad-thai-egg-strips.jpeg';
const eggsPan = '../assets/Products/pad-thai-eggs-in-pan.jpeg';
const eggs = '../assets/Products/pad-thai-eggs.jpeg';
const garlicPepper = '../assets/Products/pad-thai-garlic-and-pepper.jpeg';
const garlic = '../assets/Products/pad-thai-garlic.jpeg';
const mixedEggs = '../assets/Products/pad-thai-mixed-eggs.jpeg';
const mixedNoSauce = '../assets/Products/pad-thai-mixed-with-no-sauce.jpeg';
const mixedSauce1 = '../assets/Products/pad-thai-mixed-with-sauce-1.jpeg';
const mixedSauce2 = '../assets/Products/pad-thai-mixed-with-sauce-2.jpeg';
const mixedSauce3 = '../assets/Products/pad-thai-mixed-with-sauce-3.jpeg';
const mixedSauce4 = '../assets/Products/pad-thai-mixed-with-sauce-4.jpeg';
const mixed = '../assets/Products/pad-thai-mixed.jpeg';
const partialChicken = '../assets/Products/pad-thai-partially-cooked-chicken.jpeg';
const partialEggs = '../assets/Products/pad-thai-partially-cooked-eggs.jpeg';
const peanuts = '../assets/Products/pad-thai-peanuts.jpeg';
const peppers = '../assets/Products/pad-thai-peppers.jpeg';
// const plated1 = '../assets/Products/pad-thai-plated-1.jpeg';
const plated2 = '../assets/Products/pad-thai-plated-2.jpeg';
const plated3 = '../assets/Products/pad-thai-plated-3.jpeg';
const plated4 = '../assets/Products/pad-thai-plated-4.jpeg';
const rinsing = '../assets/Products/pad-thai-rinsing-noodles.jpeg';
const sauce = '../assets/Products/pad-thai-sauce.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    UNSALTED_BUTTER,
    GARLIC,
    CHICKEN_BREAST,
    EGGS,
    BROWN_SUGAR,
    RICE_WINE_VINEGAR,
    LIME,
    // GREEN_ONIONS,
    CILANTRO,
    BROWN_RICE_NOODLES,
    RED_BELL_PEPPERS,
    SRIRACHA_SAUCE,
    FISH_SAUCE,
    LIGHT_SOY_SAUCE,
    PEANUT_BUTTER,
    UNSALTED_PEANUTS,
    BEAN_SPROUTS,
} = require('./ingredients');

const CHICKEN_AND_VEGGIES = 'Chicken and Veggies';
const PEANUTS = 'Peanuts';

module.exports = {
    cardName: 'Pad Thai',
    name: 'Thai Pad Thai',
    img: mixedSauce2,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.THAI],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.ALTERNATIVE, PROTEIN.CHICKEN, PROTEIN.PEANUT],
    type: [TYPES.NOODLE],
    yields: '6 serving',
    prepTime: '15 m',
    cookTime: '50 m',
    separated: true,
    ingredients: [
        { ...BROWN_RICE_NOODLES, amount: '16 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '9', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CHICKEN_BREAST, amount: '1 lb', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...EGGS, amount: '6', additionalDetails: '', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPERS, amount: '4', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...SRIRACHA_SAUCE, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: '9 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: '15 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: '6 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PEANUT_BUTTER, amount: '6 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...UNSALTED_PEANUTS, amount: '2 c', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIME, amount: '1', additionalDetails: '', section: SECTIONS.TOPPINGS },
        // { ...GREEN_ONIONS, amount: '4', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...BEAN_SPROUTS, amount: '6 Tbsp', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '1 bunch', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'large mixing bowl' },
        { name: 'strainer' },
        { name: 'medium bowl' },
        { name: 'spatula' },
        { name: 'measuring spoons' },
    ],
    directions: [
        { step: 'Melt 1 Tbsp of butter in a large cooking pan on medium-high heat.', type: CHICKEN_AND_VEGGIES, img: butter },
        { step: 'Cook the chicken.', type: CHICKEN_AND_VEGGIES, img: [chicken, chickenPan, partialChicken] },
        { step: 'Add garlic and bell peppers to the pan after the chicken cooks a little.', type: CHICKEN_AND_VEGGIES, img: [garlic, peppers, garlicPepper, veggiesChicken] },

        { step: 'Cook rice noodles until tender (about 3 to 5 minutes) in strainer. Rinse noodles under cold water.', type: SECTIONS.NOODLES, img: [boilingWater, boilingNoodles] },
        { step: 'Rinse noodles under cold water.', type: SECTIONS.NOODLES, img: [rinsing, noodles] },

        { step: 'In a medium bowl, mix together the sauce ingredients.', type: SECTIONS.SAUCE, img: sauce },
        { step: 'Set aside sauce.', type: SECTIONS.SAUCE },

        { step: 'Over medium-high heat, add a little butter to the wok.', type: SECTIONS.EGGS },
        { step: 'In a medium bowl, beat eggs.', type: SECTIONS.EGGS, img: [eggs, mixedEggs] },
        { step: 'Pour eggs in wok and cook. Spread the eggs and lift up the edges.', type: SECTIONS.EGGS, img: [eggsPan, partialEggs] },
        { step: 'Flip and cook for 30 seconds before turning off heat. Continue to let eggs cook with the residual heat.', type: SECTIONS.EGGS, img: cookedEggs },
        { step: 'Remove the eggs from wok and cut eggs into thin strips.', type: SECTIONS.EGGS, img: strips },

        { step: 'In the wok, mix together noodles, chicken, and vegetables.', type: SECTIONS.MAIN, img: mixed },
        { step: 'Add eggs.', type: SECTIONS.MAIN, img: mixedNoSauce },
        { step: 'Add sauce.', type: SECTIONS.MAIN, img: [mixedSauce1, mixedSauce3, mixedSauce4] },

        { step: 'Roast the peanuts in a pan and set aside to top.', type: PEANUTS, img: peanuts },
        { step: 'Serve and garnish with peanuts, bean sprouts, cilantro, and squeeze fresh lime juice. Enjoy this majestic Thai dish!', type: SECTIONS.SERVE, img: [plated2, plated3, plated4, aerial] },
    ]
};