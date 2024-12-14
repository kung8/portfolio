const curry = '../assets/Products/japanese-curry.jpeg';
// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { LARGE_YELLOW_ONION, CARROTS, YUKON_GOLD_POTATOES, GINGER, GARLIC, APPLES, BONELESS_AND_SKINLESS_CHICKEN_THIGH, BLACK_PEPPER, VEGETABLE_OIL, CHICKEN_BROTH, HONEY, LIGHT_SOY_SAUCE, KETCHUP, JAPANESE_CURRY_MIX } = require('./ingredients');

const PREP_CHICKEN = 'Prep Chicken';
const COOK_CURRY = 'Cook Curry';

module.exports = {
    wip: true,
    cardName: 'Japanese Curry',
    name: 'Japanese Curry',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: '8 servings',
    prepTime: '20 m',
    cookTime: '50 m',
    websites: [
        { label: 'Japanese Chicken Curry', link: 'https://www.justonecookbook.com/simple-chicken-curry/' }
    ],
    separated: true,
    ingredients: [
        { ...LARGE_YELLOW_ONION, amount: '2', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...CARROTS, amount: '2', additionalDetails: 'rolling wedges', section: SECTIONS.MAIN },
        { ...YUKON_GOLD_POTATOES, amount: '3', additionalDetails: 'quartered', section: SECTIONS.MAIN },
        { ...GINGER, amount: '1 tsp', additionalDetails: 'grated', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '2 cloves', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...APPLES, amount: '1/2', additionalDetails: 'peeled, cored, quartered, and grated', section: SECTIONS.MAIN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: '1 1/2 lb', additionalDetails: 'cut diagonally into bite size', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: '1 1/2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: '4 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HONEY, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...KETCHUP, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...JAPANESE_CURRY_MIX, amount: '1 package', additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'fine-mesh strainer' },
        { name: 'skewer' },
        { name: 'ladle' },
    ],
    directions: [
        { step: 'Season the sliced chicken with black pepper.', type: PREP_CHICKEN },
        { step: 'Over medium heat, add vegetable oil to a large pot.', type: COOK_CURRY },
        { step: 'Add onions. Saute and stir occasionally until translucent, golden and tender (about 5 minutes). Caramelizing the onions adds flavor.', type: COOK_CURRY },
        { step: 'Add garlic and ginger. Mix.', type: COOK_CURRY },
        { step: 'Add chicken. Cook and stir often until no longer pink. Reduce heat to medium-low temporarily if the onions are too brown.', type: COOK_CURRY },
        { step: 'Add chicken broth.', type: COOK_CURRY },
        { step: 'Add apple, honey, soy sauce and ketchup. Mix.', type: COOK_CURRY },
        { step: 'Add carrots and potatoes.', type: COOK_CURRY },
        { step: 'Smooth out the ingredients so the broth barely covers ingredients. More liquid will be released from the meat and vegetables.', type: COOK_CURRY },
        { step: 'Reduce heat to medium-low heat and cover with a lid. Let it simmer for 15 minutes.', type: COOK_CURRY },
        { step: 'Once boiling, skim the scum and foams off the surface using a fine-mesh strainer.', type: COOK_CURRY },
        { step: 'Cook covered until a skewer can go through the carrots and potatoes. Turn off heat.', type: COOK_CURRY },
        { step: 'In a ladle of broth, add 1 to 2 cubes of the Japanese curry mix. Stir within the ladle to help it dissolve then mix it into the pot.', type: COOK_CURRY },
        { step: 'Continue this process with the remaining cubes. It should be about 1 cube per person (so 8 in total for this recipe).', type: COOK_CURRY },
        { step: 'Over medium-low heat, simmer uncovered while stirring often until the curry becomes thick (about 5 to 10 minutes). Thin curry out with water if needed. When stirring, be sure to scrape the bottom to prevent burning.', type: COOK_CURRY },
        { step: 'Enjoy this curry over Japanese rice.', type: SECTIONS.SERVE },
    ]
};