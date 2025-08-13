const oyakodon1 = '../assets/Products/oyakodon-1.jpeg';
const oyakodon2 = '../assets/Products/oyakodon-2.jpeg';
const oyakodon3 = '../assets/Products/oyakodon-3.jpeg';
const oyakodon4 = '../assets/Products/oyakodon-4.jpeg';
const oyakodon5 = '../assets/Products/oyakodon-5.jpeg';
const oyakodon6 = '../assets/Products/oyakodon-6.jpeg';
const oyakodon7 = '../assets/Products/oyakodon-7.jpeg';
const oyakodon8 = '../assets/Products/oyakodon-8.jpeg';
const oyakodon9 = '../assets/Products/oyakodon-9.jpeg';
const oyakodon10 = '../assets/Products/oyakodon-10.jpeg';
const oyakodon11 = '../assets/Products/oyakodon-11.jpeg';
const oyakodon12 = '../assets/Products/oyakodon-12.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { YELLOW_ONION, BONELESS_AND_SKINLESS_CHICKEN_THIGH, SHAOXING_WINE, EGG, DASHI, LIGHT_SOY_SAUCE, MIRIN, WHITE_SUGAR, SHORT_GRAINED_RICE, GREEN_ONION } = require('./ingredients');

const SEASONING = 'Seasoning';
const COOK_RICE = 'Cook Rice';
const PREP_SEASONINGS = 'Prep Seasonings';
const PREP_CHICKEN = 'Prep Chicken';
const CUT_EGGS = 'Cut Eggs';
const COOK_OYAKODON = 'Cook Oyakodon';

module.exports = {
    cardName: 'Oyakodon',
    name: 'Oyakodon',
    img: oyakodon9,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN, PROTEIN.EGG],
    type: [TYPES.RICE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Oyakodon', link: 'https://www.justonecookbook.com/oyakodon/' }
    ],
    separated: true,
    ingredients: [
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'thinly sliced', section: SECTIONS.MAIN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 10, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thin strips', section: SECTIONS.MAIN },
        { ...SHAOXING_WINE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.MAIN },

        { ...DASHI, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SEASONING },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASONING },
        { ...MIRIN, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASONING },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONING },

        { ...SHORT_GRAINED_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'rice cooker' },
    ],
    supplies: [
        { name: '2 medium bowls' },
        { name: 'mixing bowl' },
        { name: 'chopsticks' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Cook enough rice for the number of servings needed. One rice cooker cups will yield one serving.', section: COOK_RICE },
        { step: 'In a medium bowl, combine the "Seasoning" ingredients. Mix until everything is dissolved.', section: PREP_SEASONINGS, img: oyakodon1 },
        { step: 'In a mixing bowl, combine the sliced chicken and the shaoxing wine. Let it marinate for 5 minutes.', section: PREP_CHICKEN, img: oyakodon3 },
        { step: 'In a medium bowl, crack eggs. Do not beat.', section: CUT_EGGS },
        { step: 'Use a pair of chopsticks to break up the clumps of egg whites by lifting those parts up. If the yolks break it is fine, just avoid blending the yolk and whites together.', section: CUT_EGGS, img: oyakodon2 },
        { step: 'In a frying pan, add onions in a single layer.', section: COOK_OYAKODON },
        { step: 'Add the seasoning mixture to just cover the onions. If not, add more seasoning or use a smaller pan.', section: COOK_OYAKODON, img: oyakodon4 },
        { step: 'Turn on stove to medium heat and bring to a simmer.', section: COOK_OYAKODON },
        { step: 'Add the chicken evenly on top of the onions. Bring to a simmer.', section: COOK_OYAKODON, img: oyakodon5 },
        { step: 'Lower to medium-low heat. Cook until chicken is no longer pink and onions are tender (for about 5 minutes). Flip the chicken about halfway through.', section: COOK_OYAKODON, img: oyakodon7 },
        { step: 'Increase to medium heat.', section: COOK_OYAKODON },
        { step: 'While there are small bubbles around the edges, pour 2/3 of the eggs (ideally more whites) to the chicken-onion mixture in a circular pattern (avoid pouring in the edges).', section: COOK_OYAKODON },
        { step: 'If the eggs are moving to the edges, gather the eggs toward the center. Lower the heat if the eggs are crisping.', section: COOK_OYAKODON },
        { step: 'Once the eggs begins to set, pour the remaining egg to the center and around the edges.', section: COOK_OYAKODON, img: [oyakodon8, oyakodon12] },
        { step: 'Add the green onions to the top. Cook over medium-low heat until eggs are cooked to desired doneness.', section: COOK_OYAKODON, img: oyakodon10 },
        { step: 'Serve this over rice with the sauce. Enjoy the simple taste of Japanese cuisine.', section: SECTIONS.SERVE, img: oyakodon11 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};