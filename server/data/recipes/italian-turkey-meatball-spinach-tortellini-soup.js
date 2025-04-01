const bowl = '../assets/Products/turkey-meatball-spinach-tortellini-soup-bowl.jpeg';
const boilingBroth = '../assets/Products/turkey-meatball-spinach-tortellini-soup-boiling-broth.jpeg';
const boilingTortellini = '../assets/Products/turkey-meatball-spinach-tortellini-soup-boiling-tortellini.jpeg';
const breading = '../assets/Products/turkey-meatball-spinach-tortellini-soup-breading.jpeg';
const butter = '../assets/Products/turkey-meatball-spinach-tortellini-soup-butter.jpeg';
const cookedMeatballs = '../assets/Products/turkey-meatball-spinach-tortellini-soup-cooked-meatballs.jpeg';
const turkey = '../assets/Products/turkey-meatball-spinach-tortellini-soup-ground-turkey.jpeg';
const meatballs = '../assets/Products/turkey-meatball-spinach-tortellini-soup-meatballs.jpeg';
const melted = '../assets/Products/turkey-meatball-spinach-tortellini-soup-melted-butter.jpeg';
const mixedBreading = '../assets/Products/turkey-meatball-spinach-tortellini-soup-mixed-breading.jpeg';
const softened = '../assets/Products/turkey-meatball-spinach-tortellini-soup-softened-veggies.jpeg';
const spinach = '../assets/Products/turkey-meatball-spinach-tortellini-soup-spinach.jpeg';
const ladle = '../assets/Products/turkey-meatball-spinach-tortellini-soup-zoomed-ladle.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    GROUND_TURKEY,
    BREADCRUMBS,
    PARMESAN_CHEESE,
    PARSLEY,
    EGG,
    GARLIC,
    SALT,
    UNSALTED_BUTTER,
    CELERY,
    YELLOW_ONION,
    CARROT,
    CHICKEN_BROTH,
    BLACK_PEPPER,
    SPINACH_CHEESE_TORTELLINI,
    BABY_SPINACH,
} = require('./ingredients');

const MEATBALLS = 'Meatballs';

module.exports = {
    cardName: 'Tortellini Soup',
    name: 'Turkey Meatball Spinach Tortellini Soup',
    img: ladle,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.TURKEY],
    type: [TYPES.NOODLE, TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...GROUND_TURKEY, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false, section: MEATBALLS },
        { ...BREADCRUMBS, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: MEATBALLS },
        { ...PARMESAN_CHEESE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: MEATBALLS },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: MEATBALLS },
        { ...EGG, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', optional: false, section: MEATBALLS },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false, section: MEATBALLS },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false, section: MEATBALLS },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'chopped', optional: false, section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', optional: false, section: SECTIONS.MAIN },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'peeled and chopped', optional: false, section: SECTIONS.MAIN },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 10, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { ...SPINACH_CHEESE_TORTELLINI, amount: 18, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { ...BABY_SPINACH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large bowl' },
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Combine the ground turkey, breadcrumbs, parmesan cheese, parsley, egg, garlic, and salt in a large bowl.', type: MEATBALLS, img: [breading, mixedBreading, turkey] },
        { step: 'Make small meatballs (about 1 Tbsp each).', type: MEATBALLS, img: meatballs },
        { step: 'Melt butter in a large pot over medium heat.', type: SECTIONS.MAIN, img: [butter, melted] },
        { step: 'Once melted, add the celery, onion, carrot, and garlic. Cover and reduce heat to low. Cook until vegetables begin to soften (about 8 to 10 minutes).', type: SECTIONS.MAIN, img: softened },
        { step: 'Remove lid. Add the chicken broth and increase heat to medium-high. Bring to a boil.', type: SECTIONS.MAIN, img: boilingBroth },
        { step: 'Add black pepper to taste.', type: SECTIONS.MAIN },
        { step: 'Reduce heat to medium and drop in the meatballs. Cook for about 4 minutes.', type: SECTIONS.MAIN, img: cookedMeatballs },
        { step: 'Add tortellini and simmer until cooked (about 7 minutes).', type: SECTIONS.MAIN, img: boilingTortellini },
        { step: 'Once cooked, add the baby spinach and stir to combine.', type: SECTIONS.MAIN, img: spinach },
        { step: 'Serve warm.', type: SECTIONS.SERVE, img: [bowl] },
    ]
}