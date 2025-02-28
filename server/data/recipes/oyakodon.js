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

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { SMALL_YELLOW_ONION, BONELESS_AND_SKINLESS_CHICKEN_THIGH, SHAOXING_WINE, EGGS, DASHI, LIGHT_SOY_SAUCE, MIRIN, WHITE_SUGAR, SHORT_GRAINED_RICE, GREEN_ONIONS } = require('./ingredients');

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
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN, PROTEIN.EGG],
    type: [TYPES.RICE],
    yields: '2 servings',
    prepTime: '15 m',
    cookTime: '10 m',
    websites: [
        { label: 'Oyakodon', link: 'https://www.justonecookbook.com/oyakodon/' }
    ],
    separated: true,
    ingredients: [
        { ...SMALL_YELLOW_ONION, amount: '1', additionalDetails: 'thinly sliced', section: SECTIONS.MAIN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: '10 oz', additionalDetails: 'thin strips', section: SECTIONS.MAIN },
        { ...SHAOXING_WINE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '4', additionalDetails: '', section: SECTIONS.MAIN },
        { ...GREEN_ONIONS, amount: '', additionalDetails: 'chopped', section: SECTIONS.MAIN },

        { ...DASHI, amount: '1/2 c', additionalDetails: '', section: SEASONING },
        { ...LIGHT_SOY_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SEASONING },
        { ...MIRIN, amount: '2 Tbsp', additionalDetails: '', section: SEASONING },
        { ...WHITE_SUGAR, amount: '2 tsp', additionalDetails: '', section: SEASONING },

        { ...SHORT_GRAINED_RICE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
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
        { step: 'Cook enough rice for the number of servings needed. One rice cooker cups will yield one serving.', type: COOK_RICE },
        { step: 'In a medium bowl, combine the "Seasoning" ingredients. Mix until everything is dissolved.', type: PREP_SEASONINGS, img: oyakodon1 },
        { step: 'In a mixing bowl, combine the sliced chicken and the shaoxing wine. Let it marinate for 5 minutes.', type: PREP_CHICKEN, img: oyakodon3 },
        { step: 'In a medium bowl, crack eggs. Do not beat.', type: CUT_EGGS },
        { step: 'Use a pair of chopsticks to break up the clumps of egg whites by lifting those parts up. If the yolks break it is fine, just avoid blending the yolk and whites together.', type: CUT_EGGS, img: oyakodon2 },
        { step: 'In a frying pan, add onions in a single layer.', type: COOK_OYAKODON },
        { step: 'Add the seasoning mixture to just cover the onions. If not, add more seasoning or use a smaller pan.', type: COOK_OYAKODON, img: oyakodon4 },
        { step: 'Turn on stove to medium heat and bring to a simmer.', type: COOK_OYAKODON },
        { step: 'Add the chicken evenly on top of the onions. Bring to a simmer.', type: COOK_OYAKODON, img: oyakodon5 },
        { step: 'Lower to medium-low heat. Cook until chicken is no longer pink and onions are tender (for about 5 minutes). Flip the chicken about halfway through.', type: COOK_OYAKODON, img: oyakodon7 },
        { step: 'Increase to medium heat.', type: COOK_OYAKODON },
        { step: 'While there are small bubbles around the edges, pour 2/3 of the eggs (ideally more whites) to the chicken-onion mixture in a circular pattern (avoid pouring in the edges).', type: COOK_OYAKODON },
        { step: 'If the eggs are moving to the edges, gather the eggs toward the center. Lower the heat if the eggs are crisping.', type: COOK_OYAKODON },
        { step: 'Once the eggs begins to set, pour the remaining egg to the center and around the edges.', type: COOK_OYAKODON, img: [oyakodon8, oyakodon12] },
        { step: 'Add the green onions to the top. Cook over medium-low heat until eggs are cooked to desired doneness.', type: COOK_OYAKODON, img: oyakodon10 },
        { step: 'Serve this over rice with the sauce. Enjoy the simple taste of Japanese cuisine.', type: SECTIONS.SERVE, img: oyakodon11 },
    ]
};