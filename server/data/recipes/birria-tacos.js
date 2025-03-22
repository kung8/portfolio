// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , UNITS } = require('./constants');
const { BEEF_CHUCK_ROAST, AVOCADO_OIL, SALT, BLACK_PEPPER, RED_ONION, GARLIC, BEEF_BROTH, TOMATO_PASTE, APPLE_CIDER_VINEGAR, CUMIN, OREGANO, CINNAMON_STICK, BAY_LEAVES, SMOKED_PAPRIKA, GINGER, CORIANDER, GUAJILLO_CHILI_PEPPERS, CHIPOTLE_PEPPERS_IN_ADOBO, FIRE_ROASTED_DICED_TOMATOES, FLOUR_TORTILLA, LIME, CILANTRO, WHITE_ONION, OAXACAN_CHEESE } = require('./ingredients');

const BIRRIA_FILLING = 'Birria Filling';

const MAKE_BIRRIA_FILLING = 'Make Birria Filling';
const ASSEMBLE_TACOS = 'Assemble Tacos';

module.exports = {
    wip: true,
    cardName: 'Crockpot Birria Tacos',
    name: 'Crockpot Birria Tacos',
    img: '',
    recipeCredit: 'Lauren Maliwauki',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.BEEF],
    type: [TYPES.TACO],
    yields: '8 servings',
    prepTime: '30 m',
    cookTime: '8 h 10 m',
    websites: [
        { label: 'Birria Tacos', link: 'https://jawnsicooked.com/dinner/crock-pot-birria-tacos-recipe/?fbclid=IwY2xjawIfTnJleHRuA2FlbQIxMAABHXA6K0n-MSk87IxBNd9zEPRf_2juEzIvI4wMpHOQ3YQqCpdq9ead33OwKA_aem_yOMPv648tIKxgtoZ38M-6g' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_CHUCK_ROAST, amount: 3, unit: UNITS.POUND, additionalDetails: 'boneless', section: BIRRIA_FILLING },
        { ...AVOCADO_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: BIRRIA_FILLING },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: BIRRIA_FILLING },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: BIRRIA_FILLING },
        { ...GUAJILLO_CHILI_PEPPERS, amount: 4, unit: '', additionalDetails: '', section: BIRRIA_FILLING },
        { ...CHIPOTLE_PEPPERS_IN_ADOBO, amount: '5 - 6', unit: '', additionalDetails: '', section: BIRRIA_FILLING },
        { ...RED_ONION, amount: 1, unit: UNITS.SMALL, additionalDetails: 'thinly sliced', section: BIRRIA_FILLING },
        { ...GARLIC, amount: 8, unit: UNITS.CLOVE, additionalDetails: 'smashed', section: BIRRIA_FILLING },
        { ...BEEF_BROTH, amount: 32, unit: UNITS.OUNCE, additionalDetails: '', section: BIRRIA_FILLING },
        { ...TOMATO_PASTE, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: BIRRIA_FILLING },
        { ...FIRE_ROASTED_DICED_TOMATOES, amount: 14.5, unit: UNITS.OUNCE, additionalDetails: '', section: BIRRIA_FILLING },
        { ...APPLE_CIDER_VINEGAR, amount: 1/4, unit: UNITS.CUP, additionalDetails: '', section: BIRRIA_FILLING },
        { ...CUMIN, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: BIRRIA_FILLING },
        { ...OREGANO, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: BIRRIA_FILLING },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: BIRRIA_FILLING },
        { ...BAY_LEAVES, amount: 3, unit: '', additionalDetails: '', section: BIRRIA_FILLING },
        { ...SMOKED_PAPRIKA, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: BIRRIA_FILLING },
        { ...GINGER, amount: 1/2, unit: UNITS.TEASPOON, additionalDetails: '', section: BIRRIA_FILLING },
        { ...CORIANDER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: BIRRIA_FILLING },

        { ...FLOUR_TORTILLA, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'wedged', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...WHITE_ONION, amount: '', unit: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...OAXACAN_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'crockpot' },
        { name: 'blender/immersion blender' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
    ],
    directions: [
        { step: 'Over high heat, add avocado oil to a pan.', type: MAKE_BIRRIA_FILLING },
        { step: 'Generously season beef with salt and pepper.', type: MAKE_BIRRIA_FILLING },
        { step: 'Sear both sides of the beef (about 5 - 6 minutes per side).', type: MAKE_BIRRIA_FILLING },
        { step: 'Add beef and the rest of the ingredients to the crockpot.', type: MAKE_BIRRIA_FILLING },
        { step: 'Cover and cook on low for 8 hours.', type: MAKE_BIRRIA_FILLING },
        { step: 'Transfer beef to a mixing bowl and shred with 2 forks.', type: MAKE_BIRRIA_FILLING },
        { step: 'Remove bay leaves and cinnamon stick from crockpot.', type: MAKE_BIRRIA_FILLING },
        { step: 'Wait until the sauce cools before blending in a traditional blender. And be sure not to overfill.', type: MAKE_BIRRIA_FILLING },
        { step: 'Transfer blended sauce back to crockpot.', type: MAKE_BIRRIA_FILLING },
        { step: 'Add 2 cups of sauce to the shredded beef.', type: MAKE_BIRRIA_FILLING },

        { step: 'Add a little avocado oil to a pan.', type: ASSEMBLE_TACOS },
        { step: 'Dip two tortillas into the sauce and place the two stacked tortillas in pan.', type: ASSEMBLE_TACOS },
        { step: 'On one half of the tortilla, add filling and fold.', type: ASSEMBLE_TACOS },
        { step: 'Over medium heat, pan fry (2 to 3 minutes).', type: ASSEMBLE_TACOS },
        { step: 'Flip and pan fry (2 to 3 minutes).', type: ASSEMBLE_TACOS },
        { step: 'Add a ladleful of sauce to the tortilla.', type: ASSEMBLE_TACOS },

        { step: 'Enjoy these simple tacos.', type: SECTIONS.SERVE },
    ]
};