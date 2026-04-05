// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ASIAN_CHILI_GARLIC_SAUCE, CHICKEN_BROTH, CILANTRO, DRIED_RICE_NOODLES, GARLIC, GINGER, GREEN_ONION, GROUND_PORK, LARGE_POT, LIGHT_SOY_SAUCE, MIXING_BOWL, NAPA_CABBAGE, REFRIGERATOR, SALT, SESAME_OIL, SHAOXING_WINE, STOVE, WHITE_PEPPER } = require('./ingredients');

const MEATBALL_SECTION = 'Meatball';
const PREP_MEATBALLS = 'Prep Meatballs';

module.exports = {
    wip: true,
    cardName: 'Meatball Noodle Soup',
    name: 'Meatball Noodle Soup',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.PORK],
    type: [TYPES.SOUP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Meatball Noodle Soup',
            link: 'https://www.tastyeverafter.com/asian-meatball-noodle-soup/#wprm-recipe-container-59861',
            authors: ['Karrie'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...GROUND_PORK, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: MEATBALL_SECTION },
        { ...NAPA_CABBAGE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: MEATBALL_SECTION },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'minced', section: MEATBALL_SECTION },
        { ...GINGER, amount: 2, unit: '', additionalDetails: '', section: MEATBALL_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...SHAOXING_WINE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: MEATBALL_SECTION },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...WHITE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALL_SECTION },

        { ...CHICKEN_BROTH, amount: 8, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...NAPA_CABBAGE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.SOUP },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SOUP },

        { ...DRIED_RICE_NOODLES, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...SESAME_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...ASIAN_CHILI_GARLIC_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        REFRIGERATOR,
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        LARGE_POT,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${MEATBALL_SECTION}" section ingredients.`, section: PREP_MEATBALLS },
        { step: `Cover and chill for 30 minutes.`, section: PREP_MEATBALLS },

        { step: `Over medium heat, add broth to a large pot. Bring to a simmer.`, section: SECTIONS.COOK_SOUP },
        { step: `Reduce to low.`, section: SECTIONS.COOK_SOUP },
        { step: `Form 1.5 inch meatballs.`, section: SECTIONS.COOK_SOUP },
        { step: `Carefully drop meatballs into the broth. Cook for 3 to 4 minutes.`, section: SECTIONS.COOK_SOUP },
        { step: `Add cabbage. Cook until everything is cooked (about 10 to 15 minutes).`, section: SECTIONS.COOK_SOUP },
        { step: `Add soy sauce.`, section: SECTIONS.COOK_SOUP },

        { step: `Cook desired amount of noodles per packaging instructions.`, section: SECTIONS.COOK_NOODLES },

        { step: `Place cooked noodles in a bowl and ladle soup over.`, section: SECTIONS.SERVE },
        { step: `Enjoy topped with your favorite toppings.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store soup and noodles separately. Best to cook noodles right before eating.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium heat, bring soup to a simmer. Reheat noodles per packaging instructions. Combine and enjoy.',
        },
    ],
    mealPrep: true,
};