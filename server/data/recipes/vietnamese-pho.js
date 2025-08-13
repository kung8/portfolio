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
const { CATEGORIES, GENRES, SECTIONS, TYPES, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    BEAN_SPROUT,
    BEEF_BROTH,
    BEEF_TENDERLOIN,
    BLACK_PEPPER,
    CILANTRO,
    GREEN_ONION,
    LIME_JUICE,
    LIGHT_SOY_SAUCE,
    MINT_LEAF,
    DRIED_RICE_NOODLES,
    SALT,
    SRIRACHA_SAUCE,
    YELLOW_ONION,
    GINGER,
    CORIANDER,
    CLOVES,
    FISH_SAUCE,
    HOISIN_SAUCE,
    RED_CHILI_PASTE,
    CINNAMON_STICK,
    WATER,
} = require('./ingredients');

module.exports = {
    cardName: 'Vietnamese Pho',
    name: 'Vietnamese Pho',
    img: plated6,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.VIETNAMESE, GENRES.ASIAN],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE, TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Pho', link: 'https://tastesbetterfromscratch.com/pho-noodle-soup/' }
    ],
    ingredients: [
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'quartered', section: SECTIONS.BROTH },
        { ...GINGER, amount: 4, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'peeled, halved, and halved-lengthwise', section: SECTIONS.BROTH },
        { ...BEEF_BROTH, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BROTH },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.BROTH },
        { ...CORIANDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...CLOVES, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...FISH_SAUCE, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...HOISIN_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...RED_CHILI_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.BROTH },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.BROTH },

        { ...DRIED_RICE_NOODLES, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...BEEF_TENDERLOIN, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thinly sliced', section: SECTIONS.BEEF },

        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...BEAN_SPROUT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...MINT_LEAF, amount: '', unit: '', additionalDetails: 'plucked', section: SECTIONS.TOPPINGS },
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
        { step: 'Over medium heat, add onion and ginger in a large pot.', section: SECTIONS.BROTH, img: veggiesPot },
        { step: 'Cook and stir occasionally (about 4 minutes).', section: SECTIONS.BROTH },
        { step: 'Add the rest of the broth ingredients. Bring to a slow boil.', section: SECTIONS.BROTH, img: [cinnamon, sauces, broth1] },
        { step: 'Reduce heat and simmer for 30 minutes.', section: SECTIONS.BROTH },
        { step: 'Discard ginger, clove, cinnamon stick and onion.', section: SECTIONS.BROTH, img: broth2 },
        { step: 'Add thin beef slices 5 or so minutes before the broth is finished. Cook until cooked to desired doneness.', section: SECTIONS.BROTH, img: [beef, broth3] },
        { step: 'Prepare the noodles per package instructions.', section: SECTIONS.NOODLES, img: noodles },
        { step: 'Divide the noodles into bowls and ladle soup over noodles.', section: SECTIONS.ASSEMBLE, img: [plated1, plated2] },
        { step: 'Serve with any additional toppings and enjoy this simple delicious Vietnamese cuisine. Also this dish is pronounced \'fuh\'.', section: SECTIONS.SERVE, img: [toppings, plated4, plated5] },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the broth separately. I\'d recommend cooking the noodles fresh each time you want to eat this dish.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'For smaller portions, microwave the broth until hot (about 3 to 4 minutes). Cook the noodles per package instructions and add to the bowl. Add the beef slices and any toppings you want. Enjoy!',
        },
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'For larger portions, over medium heat, reheat the broth until hot (about 7 to 10 minutes). Cook the noodles per package instructions and add to the bowl. Add the beef slices and any toppings you want. Enjoy!',
        },
    ],
    mealPrep: true,
};