const shrimp1 = '../assets/Products/bang-bang-shrimp-1.jpeg';
const shrimp2 = '../assets/Products/bang-bang-shrimp-2.jpeg';
const shrimp3 = '../assets/Products/bang-bang-shrimp-3.jpeg';
const shrimp4 = '../assets/Products/bang-bang-shrimp-4.jpeg';
const shrimp5 = '../assets/Products/bang-bang-shrimp-5.jpeg';
const shrimp6 = '../assets/Products/bang-bang-shrimp-6.jpeg';
const shrimp7 = '../assets/Products/bang-bang-shrimp-7.jpeg';
const shrimp8 = '../assets/Products/bang-bang-shrimp-8.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { SHRIMP, EGG_WHITES, CORNSTARCH, SALT, WHITE_PEPPER, VEGETABLE_OIL, GREEN_ONION, MAYONNAISE, SWEET_CHILI_SAUCE, SRIRACHA_SAUCE, HONEY, SESAME_SEEDS } = require('./ingredients');

const COAT_SHRIMP = 'Coat Shrimp';

module.exports = {
    cardName: 'Bang Bang Shrimp',
    name: 'Bang Bang Shrimp',
    img: shrimp7,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.SEAFOOD],
    type: [TYPES.PROTEIN, TYPES.SIDE_DISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Bang Bang Shrimp', link: 'https://thestayathomechef.com/bang-bang-shrimp' }
    ],
    separated: true,
    ingredients: [
        { ...EGG_WHITES, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...WHITE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...SHRIMP, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SECTIONS.SHRIMP },

        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SWEET_CHILI_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DEEP_FRY },

        { ...GREEN_ONION, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'deep fryer or stove' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: 'deep fryer or tall narrow pot' },
        { name: 'baking sheet' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_SHRIMP, img: shrimp2 },
        { step: 'Pat shrimp dry with a paper towel.', section: SECTIONS.PREP_SHRIMP, img: shrimp1 },
        { step: 'Add shrimp to bowl. Coat shrimp.', section: SECTIONS.PREP_SHRIMP, img: shrimp3 },

        { step: `In another mixing bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE, img: shrimp4 },

        { step: 'Heat oil to 350ºF.', section: SECTIONS.DEEP_FRY },
        { step: 'Lined a baking sheet with paper towel and place a cooling rack.', section: SECTIONS.DEEP_FRY },
        { step: 'Add shrimp. Cook until golden brown (2 to 3 minutes). Do not overcrowd and do not overcook.', section: SECTIONS.DEEP_FRY, img: shrimp5 },
        { step: 'Set them on the cooling rack to drain.', section: SECTIONS.DEEP_FRY, img: shrimp6 },

        { step: 'Toss the fried shrimp in the sauce.', section: COAT_SHRIMP },

        { step: 'Serve this hot topped with green onions.', section: SECTIONS.SERVE, img: shrimp8 },
    ],
    notes: [
        { note: 'The original recipe says browning the shrimp frying for 2 to 3 minutes. I tried a few things like smaller batches and double frying it. The smaller batches got it a little darker but not browned. Double frying kind of dried out the shrimp. It was still delicious but dried out in the center. I would recommend either lessening the time for the first fry and then increase the heat to 375ºF for the second fry.' },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 5 to 10 minutes).',
        },
    ],
    mealPrep: false,
};