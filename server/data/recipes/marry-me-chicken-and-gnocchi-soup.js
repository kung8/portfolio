const soup1 = '../assets/Products/marry-me-chicken-and-gnocci-soup-1.jpeg';
const soup2 = '../assets/Products/marry-me-chicken-and-gnocci-soup-2.jpeg';
const soup3 = '../assets/Products/marry-me-chicken-and-gnocci-soup-3.jpeg';
const soup4 = '../assets/Products/marry-me-chicken-and-gnocci-soup-4.jpeg';
const soup5 = '../assets/Products/marry-me-chicken-and-gnocci-soup-5.jpeg';
const soup6 = '../assets/Products/marry-me-chicken-and-gnocci-soup-6.jpeg';
const soup7 = '../assets/Products/marry-me-chicken-and-gnocci-soup-7.jpeg';
const soup8 = '../assets/Products/marry-me-chicken-and-gnocci-soup-8.jpeg';
const soup9 = '../assets/Products/marry-me-chicken-and-gnocci-soup-9.jpeg';
const soup10 = '../assets/Products/marry-me-chicken-and-gnocci-soup-10.jpeg';
const soup11 = '../assets/Products/marry-me-chicken-and-gnocci-soup-11.jpeg';
const soup12 = '../assets/Products/marry-me-chicken-and-gnocci-soup-12.jpeg';
const soup13 = '../assets/Products/marry-me-chicken-and-gnocci-soup-13.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BABY_SPINACH, BASIL, BLACK_PEPPER, CARROT, CELERY, CHICKEN_BOUILLON_CUBE, CREAM_CHEESE, GARLIC, GARLIC_AND_HERB, GNOCCHI, HEAVY_CREAM, ITALIAN_SEASONING, LARGE_POT, PARMESAN_CHEESE, RED_PEPPER_FLAKES, ROTISSERIE_CHICKEN, SALT, STOVE, SUN_DRIED_TOMATOES, TOMATO_PASTE, UNSALTED_BUTTER, WATER, YELLOW_ONION } = require('./ingredients');

const OIL_SECTION = 'Oil';
const SUN_DRIED_TOMATOES_SECTION = 'Sun-Dried Tomatoes';
const GNOCCHI_AND_CHICKEN_SECTION = 'Gnocchi and Chicken';
const CHEESE_SECTION = 'Cheese';
const HERB_SECTION = 'Herb';

module.exports = {
    cardName: 'Chicken + Gnocchi Soup',
    name: 'Marry Me Chicken and Gnocchi Soup',
    img: soup12,
    recipeAuthors: ['Carman Wilken'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
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
        STOVE,
    ],
    supplies: [
        LARGE_POT,
    ],
    directions: [
        { step: `Over medium heat, heat "${OIL_SECTION}" section ingredients in a large pot.`, section: SECTIONS.MAKE_SOUP, img: soup1 },
        { step: `Add "${SECTIONS.VEGGIES}" section ingredients. Cook for 5 minutes.`, section: SECTIONS.MAKE_SOUP, img: soup2 },
        { step: 'Add sun-dried tomatoes.', section: SECTIONS.MAKE_SOUP, img: [soup3, soup4] },
        { step: 'Make a well, add tomato paste. Cook for 3 minutes. Mix.', section: SECTIONS.MAKE_SOUP, img: [soup5, soup6] },
        { step: 'Add garlic. Cook for 1 minute.', section: SECTIONS.MAKE_SOUP, img: soup7 },
        { step: `Add "${SECTIONS.LIQUIDS}" section ingredients. Bring to a boil.`, section: SECTIONS.MAKE_SOUP, img: soup8 },
        { step: 'Add gnocchi and chicken. Boil until gnocchi float (about 3 to 4 minutes).', section: SECTIONS.MAKE_SOUP, img: soup9 },
        { step: 'Turn off heat.', section: SECTIONS.MAKE_SOUP },
        { step: 'Add cream cheese. Stir until melted.', section: SECTIONS.MAKE_SOUP },
        { step: 'Add parmesan.', section: SECTIONS.MAKE_SOUP, img: soup10 },
        { step: 'Add spinach and basil. Stir.', section: SECTIONS.MAKE_SOUP, img: soup11 },
        { step: 'Let it thicken (about 5 to 10 minutes).', section: SECTIONS.MAKE_SOUP },
        { step: 'Enjoy this great year round soup!', section: SECTIONS.SERVE, img: soup13 },
    ],
    notes: [
        { note: 'This definitely had a good flavor. Initially I did not think there was enough liquid, but over time it released liquid and was enough.' },
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