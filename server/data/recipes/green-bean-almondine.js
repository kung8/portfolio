const bean1 = '../assets/Products/green-bean-almondine-1.jpeg';
const bean2 = '../assets/Products/green-bean-almondine-2.jpeg';
const bean3 = '../assets/Products/green-bean-almondine-3.jpeg';
const bean4 = '../assets/Products/green-bean-almondine-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    FRENCH_GREEN_BEAN,
    ICE,
    LEMON_JUICE,
    LEMON_ZEST,
    MIXING_BOWL,
    SALT,
    SAUCEPAN,
    SHALLOT,
    SLICED_ALMONDS,
    STOVE,
    UNSALTED_BUTTER,
    GARLIC,
} = require('./ingredients');

const BLANCHED_GREEN_BEANS = 'Blanched Green Beans';
const SAUTEED_GREEN_BEANS = 'Sauteed Green Beans';

const TOSSED_INGREDIENTS = 'Tossed Ingredients';

module.exports = {
    cardName: 'Green Bean Almondine',
    name: 'Green Bean Almondine',
    img: bean4,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BOIL, METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Green Bean Almondine',
            link: 'https://www.abeautifulplate.com/green-beans-almondine/',
            authors: [''],
            finder: 'Kevin Ung',
        }
    ],
    separated: true,
    ingredients: [
        { ...FRENCH_GREEN_BEAN, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BLANCHED_GREEN_BEANS },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'for boiling', section: BLANCHED_GREEN_BEANS },
        { ...ICE, amount: '', unit: '', additionalDetails: '', section: BLANCHED_GREEN_BEANS },

        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUTEED_GREEN_BEANS },
        { ...SLICED_ALMONDS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUTEED_GREEN_BEANS },
        { ...SHALLOT, amount: 2, unit: '', additionalDetails: 'diced', section: SAUTEED_GREEN_BEANS },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SAUTEED_GREEN_BEANS },

        { ...LEMON_ZEST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: TOSSED_INGREDIENTS },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: TOSSED_INGREDIENTS },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'or to taste', section: TOSSED_INGREDIENTS },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'or to taste', section: TOSSED_INGREDIENTS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Over medium-high heat, boil water and salt in a saucepan.', section: SECTIONS.BLANCH },
        { step: 'Add beans. Cook until bright green (about 3 to 4 minutes).', section: SECTIONS.BLANCH, img: bean1 },
        { step: 'Fill a mixing bowl with ice and water.', section: SECTIONS.BLANCH },
        { step: 'Transfer green beans to ice water.', section: SECTIONS.BLANCH, img: bean2 },
        { step: 'Chill for 3 to 4 minutes.', section: SECTIONS.BLANCH },
        { step: 'Drain.', section: SECTIONS.BLANCH },

        { step: 'Brown butter in pan.', section: SECTIONS.SAUTE },
        { step: 'Add "${}". Cook for 2 minutes.', section: SECTIONS.SAUTE },
        { step: 'Add green beans. Cook for a few minutes.', section: SECTIONS.SAUTE, img: bean3 },

        { step: `Add the "${TOSSED_INGREDIENTS}" section ingredients. Toss to combine.`, section: SECTIONS.SAUTE },

        { step: 'Serve warm.', section: SECTIONS.SERVE },
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