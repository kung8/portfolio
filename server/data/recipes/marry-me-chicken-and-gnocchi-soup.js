// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { UNSALTED_BUTTER, SUN_DRIED_TOMATOES, YELLOW_ONION, CARROT, CELERY, SALT, BLACK_PEPPER, ITALIAN_SEASONING, RED_PEPPER_FLAKES, TOMATO_PASTE, GARLIC, HEAVY_CREAM, ROTISSERIE_CHICKEN, CREAM_CHEESE, PARMESAN_CHEESE, BABY_SPINACH, BASIL, GARLIC_AND_HERB, GNOCCHI, CHICKEN_BOUILLON_CUBE, WATER } = require('./ingredients');

const OIL_SECTION = 'Oil';
const SUN_DRIED_TOMATOES_SECTION = 'Sun-Dried Tomatoes';
const GNOCCHI_AND_CHICKEN_SECTION = 'Gnocchi and Chicken';
const CHEESE_SECTION = 'Cheese';
const HERB_SECTION = 'Herb';

module.exports = {
    wip: true,
    cardName: 'Chicken + Gnocchi Soup',
    name: 'Marry Me Chicken and Gnocchi Soup',
    img: '',
    recipeAuthors: ['Carman Wilken'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Marry Me Chicken and Gnocchi Soup', link: 'https://whatsmomcookin.com/marry-me-chicken-and-gnocchi-soup/?fbclid=IwY2xjawMrOnFleHRuA2FlbQIxMQABHqEYNkMxNOFVuKTvKl5VRevaP60dee6OI2GWMJi3TrReL-WZKvD6Y549Ybuy_aem_H9ltC9bHXxWdmsaKrSFhIA' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OIL_SECTION },
        { name: 'sun-dried tomato oil', amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OIL_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 2, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...GARLIC_AND_HERB, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...RED_PEPPER_FLAKES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },

        { ...SUN_DRIED_TOMATOES, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SUN_DRIED_TOMATOES_SECTION },
        { ...TOMATO_PASTE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SUN_DRIED_TOMATOES_SECTION },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SUN_DRIED_TOMATOES_SECTION },

        { ...CHICKEN_BOUILLON_CUBE, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.LIQUIDS },
        { ...WATER, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.LIQUIDS },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.LIQUIDS },

        { ...GNOCCHI, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: GNOCCHI_AND_CHICKEN_SECTION },
        { ...ROTISSERIE_CHICKEN, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: GNOCCHI_AND_CHICKEN_SECTION },
        { ...CREAM_CHEESE, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: CHEESE_SECTION },
        { ...PARMESAN_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: CHEESE_SECTION },
        { ...BABY_SPINACH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: HERB_SECTION },
        { ...BASIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: HERB_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
    ],
    directions: [
        { step: `Over medium heat, heat "${OIL_SECTION}" section ingredients in a large pot.`, section: SECTIONS.MAKE_SOUP },
        { step: `Add "${SECTIONS.VEGGIES}" section ingredients. Cook for 5 minutes.`, section: SECTIONS.MAKE_SOUP },
        { step: 'Add sun-dried tomatoes.', section: SECTIONS.MAKE_SOUP },
        { step: 'Make a well, add tomato paste. Cook for 3 minutes.', section: SECTIONS.MAKE_SOUP },
        { step: 'Add garlic. Cook for 1 minute.', section: SECTIONS.MAKE_SOUP },
        { step: `Add "${SECTIONS.LIQUIDS}" section ingredients. Bring to a boil.`, section: SECTIONS.MAKE_SOUP },
        { step: 'Add gnocchi and chicken. Boil until gnocchi float (about 3 to 4 minutes).', section: SECTIONS.MAKE_SOUP },
        { step: 'Turn off heat.', section: SECTIONS.MAKE_SOUP },
        { step: 'Add cream cheese. Stir until melted.', section: SECTIONS.MAKE_SOUP },
        { step: 'Add parmesan.', section: SECTIONS.MAKE_SOUP },
        { step: 'Add spinach and basil. Stir.', section: SECTIONS.MAKE_SOUP },
        { step: 'Let it thicken (about 5 to 10 minutes).', section: SECTIONS.MAKE_SOUP },
        { step: 'Enjoy this great year round soup!', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Reheat on stove over low heat. Add a splash of chicken broth to loosen.',
        },
    ],
    mealPrep: true,
};