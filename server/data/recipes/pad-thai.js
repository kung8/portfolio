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

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const {
    UNSALTED_BUTTER,
    GARLIC,
    CHICKEN_BREAST,
    EGG,
    BROWN_SUGAR,
    RICE_WINE_VINEGAR,
    LIME,
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

const CHICKEN_AND_VEGGIES_SECTION = 'Chicken and Veggies';
const EGG_SECTION = 'Eggs';
const NOODLES_SECTION = 'Noodles';
const SAUCE_SECTION = 'Sauce';

const COOK_CHICKEN_AND_VEGGIES = 'Cook Chicken and Veggies';
const COOK_NOODLES = 'Cook Noodles';
const PREP_SAUCE = 'Prep Sauce';
const COOK_EGGS = 'Cook Eggs';
const ASSEMBLE = 'Assemble';
const ROAST_PEANUTS = 'Roast Peanuts';

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
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_AND_VEGGIES_SECTION },
        { ...CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: CHICKEN_AND_VEGGIES_SECTION },
        { ...GARLIC, amount: 9, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: CHICKEN_AND_VEGGIES_SECTION },
        { ...RED_BELL_PEPPER, amount: 4, unit: '', additionalDetails: 'sliced', section: CHICKEN_AND_VEGGIES_SECTION },

        { ...BROWN_RICE_NOODLES, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: NOODLES_SECTION },

        { ...EGG, amount: 6, unit: '', additionalDetails: '', section: EGG_SECTION },

        { ...SRIRACHA_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...FISH_SAUCE, amount: 9, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...BROWN_SUGAR, amount: 15, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...RICE_WINE_VINEGAR, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...PEANUT_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },

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
        { step: 'Over medium-high heat, melt butter in a wok.', type: COOK_CHICKEN_AND_VEGGIES, img: butter },
        { step: 'Add chicken. Brown the chicken for a few minutes.', type: COOK_CHICKEN_AND_VEGGIES, img: [chickenPan, partialChicken] },
        { step: 'Add garlic and bell peppers. Cook for a few minutes.', type: COOK_CHICKEN_AND_VEGGIES, img: veggiesChicken },
        { step: 'Set aside.', type: COOK_CHICKEN_AND_VEGGIES },

        { step: 'Cook rice noodles until tender (about 3 to 5 minutes) in strainer.', type: COOK_NOODLES, img: boilingNoodles },
        { step: 'Rinse noodles under cold water.', type: COOK_NOODLES, img: [rinsing, noodles] },

        { step: 'In a medium bowl, mix together the sauce ingredients.', type: PREP_SAUCE, img: sauce },
        { step: 'Set aside sauce.', type: PREP_SAUCE },

        { step: 'Over medium-high heat, add a little butter to the wok.', type: COOK_EGGS },
        { step: 'In a medium bowl, beat eggs.', type: COOK_EGGS, img: mixedEggs },
        { step: 'Pour eggs in wok and cook. Spread the eggs and lift up the edges.', type: COOK_EGGS, img: partialEggs },
        { step: 'Flip and cook for 30 seconds before turning off heat. Continue to let eggs cook with the residual heat.', type: COOK_EGGS, img: cookedEggs },
        { step: 'Remove the eggs from wok and cut eggs into thin strips.', type: COOK_EGGS, img: strips },

        { step: 'In the wok, mix together noodles, chicken, and vegetables.', type: ASSEMBLE, img: mixed },
        { step: 'Add eggs. Carefully mix.', type: ASSEMBLE, img: mixedNoSauce },
        { step: 'Add sauce. Mix together.', type: ASSEMBLE, img: mixedSauce4 },

        { step: 'Roast the peanuts in a pan.', type: ROAST_PEANUTS, img: peanuts },
        { step: 'Set aside.', type: ROAST_PEANUTS, img: peanuts },

        { step: 'Serve and garnish with peanuts, bean sprouts, cilantro, and squeeze fresh lime juice. Enjoy this majestic Thai dish!', type: SECTIONS.SERVE, img: plated3 },
    ]
};