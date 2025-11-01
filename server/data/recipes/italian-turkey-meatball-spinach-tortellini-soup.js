const soup1 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-1.jpeg';
const soup2 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-2.jpeg';
const soup3 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-3.jpeg';
const soup4 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-4.jpeg';
const soup5 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-5.jpeg';
const soup6 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-6.jpeg';
const soup7 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-7.jpeg';
const soup8 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-8.jpeg';
const soup9 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-9.jpeg';
const soup10 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-10.jpeg';
const soup11 = '../assets/Products/turkey-meatball-spinach-tortellini-soup-11.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BABY_SPINACH,
    BLACK_PEPPER,
    BREADCRUMBS,
    CARROT,
    CELERY,
    CHICKEN_BROTH,
    EGG,
    GARLIC,
    GROUND_TURKEY,
    LARGE_BOWL,
    LARGE_POT,
    PARMESAN_CHEESE,
    PARSLEY,
    SALT,
    SPINACH_CHEESE_TORTELLINI,
    STOVE,
    UNSALTED_BUTTER,
    YELLOW_ONION,
} = require('./ingredients');

const MEATBALLS = 'Meatballs';

module.exports = {
    cardName: 'Tortellini Soup',
    name: 'Turkey Meatball Spinach Tortellini Soup',
    img: soup11,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.TURKEY],
    type: [TYPES.NOODLE, TYPES.SOUP],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Turkey Meatball Spinach Tortellini Soup',
            link: 'https://www.skinnytaste.com/turkey-meatball-spinach-tortellini-soup/',
            authors: ['Gina Homolka'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...GROUND_TURKEY, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: MEATBALLS },
        { ...BREADCRUMBS, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEATBALLS },
        { ...PARMESAN_CHEESE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEATBALLS },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEATBALLS },
        { ...EGG, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: MEATBALLS },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: MEATBALLS },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALLS },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'peeled and chopped', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 10, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...SPINACH_CHEESE_TORTELLINI, amount: 18, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BABY_SPINACH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_BOWL,
        LARGE_POT,
    ],
    directions: [
        { step: 'Combine the ground turkey, breadcrumbs, parmesan cheese, parsley, egg, garlic, and salt in a large bowl.', section: MEATBALLS, img: [soup1, soup2, soup3] },
        { step: 'Make small meatballs (about 1 Tbsp each).', section: MEATBALLS, img: soup4 },
        { step: 'Melt butter in a large pot over medium heat.', section: SECTIONS.MAIN },
        { step: 'Once melted, add the celery, onion, carrot, and garlic. Cover and reduce heat to low. Cook until vegetables begin to soften (about 8 to 10 minutes).', section: SECTIONS.MAIN, img: soup5 },
        { step: 'Remove lid. Add the chicken broth and increase heat to medium-high. Bring to a boil.', section: SECTIONS.MAIN, img: soup6 },
        { step: 'Add black pepper to taste.', section: SECTIONS.MAIN },
        { step: 'Reduce heat to medium and drop in the meatballs. Cook for about 4 minutes.', section: SECTIONS.MAIN, img: soup7 },
        { step: 'Add tortellini and simmer until cooked (about 7 minutes).', section: SECTIONS.MAIN, img: soup8 },
        { step: 'Once cooked, add the baby spinach and stir to combine.', section: SECTIONS.MAIN, img: soup9 },
        { step: 'Serve warm.', section: SECTIONS.SERVE, img: [soup10] },
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
}