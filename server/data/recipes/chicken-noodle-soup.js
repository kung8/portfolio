const soup1 = '../assets/Products/chicken-noodle-soup-1.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    CARROT,
    CELERY,
    CHICKEN_BREAST,
    CHICKEN_BROTH,
    EGG_NOODLES,
    LARGE_PAN,
    LARGE_POT,
    OLIVE_OIL,
    OREGANO,
    ROSEMARY,
    SALT,
    STOVE,
    THYME,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Soup',
    name: 'Chicken Noodle Soup',
    img: soup1,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE, TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_BREAST, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cubed', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...OREGANO, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 2, unit: '', additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },

        { ...CHICKEN_BROTH, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...ROSEMARY, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },
        { ...THYME, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },

        { ...EGG_NOODLES, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_PAN,
        LARGE_POT,
    ],
    directions: [
        { step: `Over medium-high heat, heat oil in a hot pan.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add the "${SECTIONS.CHICKEN}" section ingredients.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Brown both sides. Set aside.`, section: SECTIONS.COOK_CHICKEN },

        { step: `In a large pot, combine the "${SECTIONS.SOUP}" and "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_SOUP },
        { step: `Over medium-high heat, cook for 8 to 10 minutes.`, section: SECTIONS.COOK_SOUP },

        { step: `Add raw noodles. Bring to a boil (about 6 to 8 minutes).`, section: SECTIONS.COOK_NOODLES },
        { step: `Reduce to low heat.`, section: SECTIONS.COOK_NOODLES },

        { step: `Add chicken.`, section: SECTIONS.SIMMER },
        { step: `Let it simmer for 10 minutes.`, section: SECTIONS.SIMMER },


        { step: `Serve and enjoy!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'I typically make this when I or somebody I know is sick, so get better if you too are sick!' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 1-minute intervals until heated through. Stirring in between each interval.',
        },
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium heat, heat in a pot until heated through. Stirring occasionally.',
        },
    ],
    mealPrep: true,
};