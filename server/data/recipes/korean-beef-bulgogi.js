const bulgogi1 = '../assets/Products/beef-bulgogi-1.jpeg';
const bulgogi2 = '../assets/Products/beef-bulgogi-2.jpeg';
const bulgogi3 = '../assets/Products/beef-bulgogi-3.jpeg';
const bulgogi4 = '../assets/Products/beef-bulgogi-4.jpeg';
const bulgogi5 = '../assets/Products/beef-bulgogi-5.jpeg';
const bulgogi6 = '../assets/Products/beef-bulgogi-6.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BEEF,
    BROWN_SUGAR,
    CUTTING_BOARD,
    FRYING_PAN,
    GARLIC,
    GINGER,
    GOCHUJANG_SAUCE,
    GREEN_ONION,
    JASMINE_RICE,
    KNIFE,
    LIGHT_SOY_SAUCE,
    MEASURING_SPOONS,
    PEAR,
    PEELER,
    SESAME_OIL,
    SESAME_SEEDS,
    STOVE,
    VEGETABLE_OIL,
    ZIPLOC_BAG,
} = require('./ingredients');

const BEEF_SECTION = 'Beef';

module.exports = {
    cardName: 'Korean Beef Bulgogi',
    name: 'Korean Beef Bulgogi',
    img: bulgogi5,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.KOREAN, GENRES.ASIAN],
    method: [METHODS.MARINADE, METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 8, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Korean Beef Bulgogi',
            link: 'https://damndelicious.net/2019/04/21/korean-beef-bulgogi/',
            authors: ['Cindy'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...BEEF, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cubed', section: BEEF_SECTION },
        { ...PEAR, amount: 1, unit: '', additionalDetails: 'finely diced', section: BEEF_SECTION },
        { ...SESAME_OIL, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BEEF_SECTION },
        { ...BROWN_SUGAR, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: BEEF_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'peeled and diced', section: BEEF_SECTION },
        { ...GOCHUJANG_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: 'cooked', section: SECTIONS.SERVE },
        { ...GREEN_ONION, amount: 4, unit: '', additionalDetails: 'sliced', section: SECTIONS.SERVE },
        { ...SESAME_SEEDS, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        { ...ZIPLOC_BAG, additionalDetails: 'gallon-size' },
        PEELER,
        CUTTING_BOARD,
        KNIFE,
        MEASURING_SPOONS,
        FRYING_PAN,
    ],
    directions: [
        { step: 'Combine the marinade sauce ingredients either in a bowl or ziploc bag.', section: BEEF_SECTION, img: bulgogi1 },
        { step: 'Add the beef to the sauce and let it marinate overnight.', section: BEEF_SECTION, img: bulgogi2 },
        { step: 'Heat frying pan over medium heat and add 1 Tbsp vegetable and cook beef in batches.', section: SECTIONS.MAIN, img: bulgogi3 },
        { step: 'Flip beef over and cook. Repeat for additional batch.', section: SECTIONS.MAIN },
        { step: 'Serve over rice and top with green onion and sesame seeds.', section: SECTIONS.SERVE, img: bulgogi4 },
    ],
    notes: [
        { note: 'Traditionally bulgogi beef uses thinly sliced ribeye or top sirloin (against the grain), but you can really use any beef cuts.', img: bulgogi6 },
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
    mealPrep: true,
};