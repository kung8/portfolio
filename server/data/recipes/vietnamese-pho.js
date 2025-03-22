const beef = '../assets/Products/pho-beef.jpeg';
const broth1 = '../assets/Products/pho-broth-1.jpeg';
const broth2 = '../assets/Products/pho-broth-2.jpeg';
const broth3 = '../assets/Products/pho-broth-3.jpeg';
const cinnamon = '../assets/Products/pho-cinnamon.jpeg';
const noodles = '../assets/Products/pho-noodles.jpeg';
const plated1 = '../assets/Products/pho-plated-1.jpeg';
const plated2 = '../assets/Products/pho-plated-2.jpeg';
const plated4 = '../assets/Products/pho-plated-4.jpeg';
const plated5 = '../assets/Products/pho-plated-5.jpeg';
const plated6 = '../assets/Products/pho-plated-6.jpeg';
const sauces = '../assets/Products/pho-sauces.jpeg';
const toppings = '../assets/Products/pho-toppings.jpeg';
const veggiesPot = '../assets/Products/pho-veggies-in-pot.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, PROTEIN } = require('./constants');
const {
    BEAN_SPROUTS,
    BEEF_BROTH,
    BEEF_TENDERLOIN,
    BLACK_PEPPER,
    CILANTRO,
    GREEN_ONIONS,
    LIME_JUICE,
    LIGHT_SOY_SAUCE,
    MINT_LEAVES,
    DRIED_RICE_NOODLES,
    SALT,
    SRIRACHA_SAUCE,
    YELLOW_ONION,
    GINGER,
    COLD_WATER,
    CORIANDER,
    CLOVES,
    FISH_SAUCE,
    HOISIN_SAUCE,
    RED_CHILI_PASTE,
    CINNAMON_STICK,
} = require('./ingredients');

module.exports = {
    cardName: 'Vietnamese Pho',
    name: 'Vietnamese Pho',
    img: plated6,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.VIETNAMESE, GENRES.ASIAN],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE, TYPES.SOUP],
    yields: '6 servings',
    prepTime: '20 m',
    cookTime: '40 m',
    separated: true,
    websites: [
        { label: 'Pho', link: 'https://tastesbetterfromscratch.com/pho-noodle-soup/' }
    ],
    ingredients: [
        { ...YELLOW_ONION, amount: '1 large', unit: '', additionalDetails: 'quartered', section: SECTIONS.BROTH },
        { ...GINGER, amount: '2 2-inch', unit: '', additionalDetails: 'peeled and halved-lengthwise', section: SECTIONS.BROTH },
        { ...BEEF_BROTH, amount: '6 c', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...COLD_WATER, amount: '2 c', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...CORIANDER, amount: '1/4 tsp', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...CLOVES, amount: '1', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...FISH_SAUCE, amount: '1 1/2 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...HOISIN_SAUCE, amount: '1/4 tsp', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...LIGHT_SOY_SAUCE, amount: '1/4 tsp', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...RED_CHILI_PASTE, amount: '1/4 tsp', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...CINNAMON_STICK, amount: '1', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...BLACK_PEPPER, amount: 'pinch', unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...SALT, amount: 'pinch', unit: '', additionalDetails: '', section: SECTIONS.BROTH },

        { ...DRIED_RICE_NOODLES, amount: '12 oz', unit: '', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...BEEF_TENDERLOIN, amount: '1/2 lb', unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.BEEF },

        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONIONS, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...BEAN_SPROUTS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...MINT_LEAVES, amount: '', unit: '', additionalDetails: 'plucked', section: SECTIONS.TOPPINGS },
        { ...LIME_JUICE, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...LIGHT_SOY_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'medium pot' },
    ],
    directions: [
        { step: 'Over medium heat, add onion and ginger in a large pot.', type: SECTIONS.BROTH, img: veggiesPot },
        { step: 'Cook and stir occasionally (about 4 minutes).', type: SECTIONS.BROTH },
        { step: 'Add the rest of the broth ingredients. Bring to a slow boil.', type: SECTIONS.BROTH, img: [cinnamon, sauces, broth1] },
        { step: 'Reduce heat and simmer for 30 minutes.', type: SECTIONS.BROTH },
        { step: 'Discard ginger, clove, cinnamon stick and onion.', type: SECTIONS.BROTH, img: broth2 },
        { step: 'Add thin beef slices 5 or so minutes before the broth is finished. Cook until cooked to desired doneness.', type: SECTIONS.BROTH, img: [beef, broth3] },
        { step: 'Prepare the noodles per package instructions.', type: SECTIONS.NOODLES, img: noodles },
        { step: 'Divide the noodles into bowls and ladle soup over noodles.', type: SECTIONS.ASSEMBLY, img: [plated1, plated2] },
        { step: 'Serve with any additional toppings and enjoy this simple delicious Vietnamese cuisine. Also this dish is pronounced \'fuh\'.', type: SECTIONS.SERVE, img: [toppings, plated4, plated5] },
    ]
};