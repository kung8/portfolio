const tacos1 = '../assets/Products/birria-tacos-1.jpeg';
const tacos2 = '../assets/Products/birria-tacos-2.jpeg';
const tacos3 = '../assets/Products/birria-tacos-3.jpeg';
const tacos4 = '../assets/Products/birria-tacos-4.jpeg';
const tacos5 = '../assets/Products/birria-tacos-5.jpeg';
const tacos6 = '../assets/Products/birria-tacos-6.jpeg';
const tacos7 = '../assets/Products/birria-tacos-7.jpeg';
const tacos8 = '../assets/Products/birria-tacos-8.jpeg';
const tacos9 = '../assets/Products/birria-tacos-9.jpeg';
const tacos10 = '../assets/Products/birria-tacos-10.jpeg';
const tacos11 = '../assets/Products/birria-tacos-11.jpeg';
const tacos12 = '../assets/Products/birria-tacos-12.jpeg';
const tacos13 = '../assets/Products/birria-tacos-13.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_CONTAINER, STORAGE_LOCATION, STORAGE_DURATION_UNIT } = require('./constants');
const { BEEF_CHUCK_ROAST, AVOCADO_OIL, SALT, BLACK_PEPPER, RED_ONION, GARLIC, BEEF_BROTH, TOMATO_PASTE, APPLE_CIDER_VINEGAR, CUMIN, OREGANO, CINNAMON_STICK, BAY_LEAF, SMOKED_PAPRIKA, GINGER, CORIANDER, GUAJILLO_CHILI_PEPPER, CHIPOTLE_PEPPERS_IN_ADOBO, FIRE_ROASTED_DICED_TOMATOES, FLOUR_TORTILLA, LIME, CILANTRO, WHITE_ONION, OAXACAN_CHEESE } = require('./ingredients');

module.exports = {
    cardName: 'Crockpot Birria Tacos',
    name: 'Crockpot Birria Tacos',
    img: tacos12,
    recipeAuthor: '',
    recipeFinder: 'Lauren Maliwauki',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.BEEF],
    type: [TYPES.TACO],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 490, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Birria Tacos', link: 'https://jawnsicooked.com/dinner/crock-pot-birria-tacos-recipe/?fbclid=IwY2xjawIfTnJleHRuA2FlbQIxMAABHXA6K0n-MSk87IxBNd9zEPRf_2juEzIvI4wMpHOQ3YQqCpdq9ead33OwKA_aem_yOMPv648tIKxgtoZ38M-6g' }
    ],
    separated: true,
    ingredients: [
        { ...AVOCADO_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BEEF_CHUCK_ROAST, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'boneless', section: SECTIONS.BEEF },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.BEEF },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.BEEF },

        { ...GUAJILLO_CHILI_PEPPER, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHIPOTLE_PEPPERS_IN_ADOBO, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...RED_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'thinly sliced', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 8, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'smashed', section: SECTIONS.FILLING },
        { ...BEEF_BROTH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...TOMATO_PASTE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...FIRE_ROASTED_DICED_TOMATOES, amount: 14.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...APPLE_CIDER_VINEGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...BAY_LEAF, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...SMOKED_PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GINGER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },

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
        { step: 'Over high heat, add avocado oil to a pan.', section: SECTIONS.COOK_BEEF },
        { step: 'Generously season beef with salt and pepper.', section: SECTIONS.COOK_BEEF },
        { step: 'Sear both sides of the beef (about 5 - 6 minutes per side).', section: SECTIONS.COOK_BEEF, img: tacos2 },

        { step: `Transfer beef and the "${SECTIONS.FILLING}" section ingredients to the crockpot.`, section: SECTIONS.PREP_FILLING, img: [tacos1, tacos3] },
        { step: 'Cover and cook on low for 8 hours.', section: SECTIONS.PREP_FILLING },
        { step: 'Transfer beef to a mixing bowl and shred with 2 forks.', section: SECTIONS.PREP_FILLING, img: tacos4 },
        { step: 'Remove bay leaves and cinnamon stick from crockpot.', section: SECTIONS.PREP_FILLING },
        { step: 'Wait until the sauce cools before blending in a traditional blender. And be sure not to overfill.', section: SECTIONS.PREP_FILLING, img: tacos5 },
        { step: 'Transfer blended sauce back to crockpot.', section: SECTIONS.PREP_FILLING, img: tacos6 },
        { step: 'Add 2 cups of sauce to the shredded beef.', section: SECTIONS.PREP_FILLING, img: tacos7 },

        { step: 'Add a little avocado oil to a pan.', section: SECTIONS.ASSEMBLE },
        { step: 'Dip two tortillas into the sauce and place the two stacked tortillas in pan.', section: SECTIONS.ASSEMBLE, img: [tacos8, tacos9] },
        { step: 'On one half of the tortilla, add filling and fold.', section: SECTIONS.ASSEMBLE, img: tacos10 },
        { step: 'Over medium heat, pan fry (2 to 3 minutes).', section: SECTIONS.ASSEMBLE },
        { step: 'Flip and pan fry (2 to 3 minutes).', section: SECTIONS.ASSEMBLE, img: tacos11 },

        { step: 'Enjoy these simple tacos topped with your favorite toppings and a ladleful of sauce.', section: SECTIONS.SERVE, img: tacos13 },
    ],
    notes: [
        { note: 'I think it came out too salty, because of the extra beef bouillon cubes I innocently added (I added a couple more).' }
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the sauce, beef, toppings and tortillas separately.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium-low heat, reheat the birria in a pan until heated through (about 5 to 10 minutes). Assemble/cook the tacos as you normally would.',
        },
    ],
    mealPrep: true,
};