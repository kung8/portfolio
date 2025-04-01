const boilingNoodles = '../assets/Products/pad-thai-boiling-noodles.jpeg';
const butter = '../assets/Products/pad-thai-butter.jpeg';
const chickenPan = '../assets/Products/pad-thai-chicken-in-pan.jpeg';
const cookedEggs = '../assets/Products/pad-thai-cooked-eggs.jpeg';
const noodles = '../assets/Products/pad-thai-cooked-noodles.jpeg';
const veggiesChicken = '../assets/Products/pad-thai-cooked-veggies-and-chicken.jpeg';
const strips = '../assets/Products/pad-thai-egg-strips.jpeg';
const mixedEggs = '../assets/Products/pad-thai-mixed-eggs.jpeg';
const mixedNoSauce = '../assets/Products/pad-thai-mixed-with-no-sauce.jpeg';
const mixedSauce2 = '../assets/Products/pad-thai-mixed-with-sauce-2.jpeg';
const mixedSauce4 = '../assets/Products/pad-thai-mixed-with-sauce-4.jpeg';
const mixed = '../assets/Products/pad-thai-mixed.jpeg';
const partialChicken = '../assets/Products/pad-thai-partially-cooked-chicken.jpeg';
const partialEggs = '../assets/Products/pad-thai-partially-cooked-eggs.jpeg';
const peanuts = '../assets/Products/pad-thai-peanuts.jpeg';
const plated3 = '../assets/Products/pad-thai-plated-3.jpeg';
const rinsing = '../assets/Products/pad-thai-rinsing-noodles.jpeg';
const sauce = '../assets/Products/pad-thai-sauce.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    UNSALTED_BUTTER,
    GARLIC,
    CHICKEN_BREAST,
    EGG,
    BROWN_SUGAR,
    RICE_WINE_VINEGAR,
    LIME,
    // GREEN_ONION,
    CILANTRO,
    BROWN_RICE_NOODLES,
    RED_BELL_PEPPER,
    SRIRACHA_SAUCE,
    FISH_SAUCE,
    LIGHT_SOY_SAUCE,
    PEANUT_BUTTER,
    UNSALTED_PEANUTS,
    BEAN_SPROUT,
} = require('./ingredients');

const CHICKEN_AND_VEGGIES = 'Chicken and Veggies';
const PEANUTS = 'Peanuts';

module.exports = {
    cardName: 'Pad Thai',
    name: 'Thai Pad Thai',
    img: mixedSauce2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.ALTERNATIVE, PROTEIN.CHICKEN, PROTEIN.PEANUT],
    type: [TYPES.NOODLE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...BROWN_RICE_NOODLES, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 9, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...EGG, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPER, amount: 4, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...SRIRACHA_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: 9, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 15, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PEANUT_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...UNSALTED_PEANUTS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'wedged', section: SECTIONS.TOPPINGS },
        { ...BEAN_SPROUT, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
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
        { step: 'Cook the chicken.', type: CHICKEN_AND_VEGGIES, img: [chickenPan, partialChicken] },
        { step: 'Add garlic and bell peppers to the pan after the chicken cooks a little.', type: CHICKEN_AND_VEGGIES, img: veggiesChicken },

        { step: 'Cook rice noodles until tender (about 3 to 5 minutes) in strainer. Rinse noodles under cold water.', type: SECTIONS.NOODLES, img: boilingNoodles },
        { step: 'Rinse noodles under cold water.', type: SECTIONS.NOODLES, img: [rinsing, noodles] },

        { step: 'In a medium bowl, mix together the sauce ingredients.', type: SECTIONS.SAUCE, img: sauce },
        { step: 'Set aside sauce.', type: SECTIONS.SAUCE },

        { step: 'Over medium-high heat, add a little butter to the wok.', type: SECTIONS.EGGS },
        { step: 'In a medium bowl, beat eggs.', type: SECTIONS.EGG, img: mixedEggs },
        { step: 'Pour eggs in wok and cook. Spread the eggs and lift up the edges.', type: SECTIONS.EGG, img: partialEggs },
        { step: 'Flip and cook for 30 seconds before turning off heat. Continue to let eggs cook with the residual heat.', type: SECTIONS.EGG, img: cookedEggs },
        { step: 'Remove the eggs from wok and cut eggs into thin strips.', type: SECTIONS.EGG, img: strips },

        { step: 'In the wok, mix together noodles, chicken, and vegetables.', type: SECTIONS.MAIN, img: mixed },
        { step: 'Add eggs.', type: SECTIONS.MAIN, img: mixedNoSauce },
        { step: 'Add sauce.', type: SECTIONS.MAIN, img: mixedSauce4 },

        { step: 'Roast the peanuts in a pan and set aside to top.', type: PEANUTS, img: peanuts },
        { step: 'Serve and garnish with peanuts, bean sprouts, cilantro, and squeeze fresh lime juice. Enjoy this majestic Thai dish!', type: SECTIONS.SERVE, img: plated3 },
    ]
};