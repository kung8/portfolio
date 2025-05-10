const sub1 = '../assets/Products/meatball-sub-1.jpeg';
const sub2 = '../assets/Products/meatball-sub-2.jpeg';
const sub3 = '../assets/Products/meatball-sub-3.jpeg';
const sub4 = '../assets/Products/meatball-sub-4.jpeg';
const sub5 = '../assets/Products/meatball-sub-5.jpeg';
const sub6 = '../assets/Products/meatball-sub-6.jpeg';
const sub7 = '../assets/Products/meatball-sub-7.jpeg';
const sub8 = '../assets/Products/meatball-sub-8.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { TOMATO_SAUCE, HOAGIE_BREAD, MOZZARELLA_CHEESE, GROUND_BEEF, EGG, BREADCRUMBS, ITALIAN_SEASONING, ONION_POWDER, SALT, BLACK_PEPPER } = require('./ingredients');
const { DAIRY } = require('./ingredient-categories');

const GARLIC_BUTTER = { name: 'garlic butter', category: DAIRY };
const MEATBALL_SECTION = 'Meatball';
const SUB_SECTION = 'Sub';

const PREP_MEATBALLS = 'Prep Meatballs';
const PREP_SAUCE = 'Prep Sauce';
const PREP_ROLLS = 'Prep Rolls';
const ASSEMBLE_SUBS = 'Assemble Subs';

module.exports = {
    cardName: 'Meatball Sub',
    name: 'Meatball Sub',
    img: sub8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.ITALIAN],
    method: [METHODS.BAKE, METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Meatball Sub', link: 'https://www.spendwithpennies.com/meatball-sub/' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: MEATBALL_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: MEATBALL_SECTION },
        { ...BREADCRUMBS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MEATBALL_SECTION },
        { ...ITALIAN_SEASONING, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: MEATBALL_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: MEATBALL_SECTION },

        { ...TOMATO_SAUCE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUB_SECTION },
        { ...GARLIC_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SUB_SECTION, link: { id: 'garlic-butter', url: 'recipes/garlic-butter' } },
        { ...HOAGIE_BREAD, amount: 4, unit: '', additionalDetails: '', section: SUB_SECTION },
        { ...MOZZARELLA_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUB_SECTION },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'saucepan' },
        { name: 'baking pan' },
    ],
    directions: [
        { step: 'Preheat oven to 350ºF.', section: PREP_MEATBALLS },
        { step: 'In a mixing bowl, combine the "Meatball" section ingredients.', section: PREP_MEATBALLS },
        { step: 'Line a baking sheet with parchment paper.', section: PREP_MEATBALLS },
        { step: 'Form 1 inch balls and place on sheet.', section: PREP_MEATBALLS, img: sub1 },
        { step: 'Bake until cooked through (about 20 minutes).', section: PREP_MEATBALLS, img: sub3 },
        { step: 'Over medium-low heat, add meatball and pasta sauce in a saucepan.', section: PREP_SAUCE, img: sub4 },
        { step: 'Cover and simmer for 10 minutes.', section: PREP_SAUCE },
        { step: 'Spread garlic butter inside roll.', section: PREP_ROLLS, img: sub2 },
        { step: 'Place rolls in a baking pan and broil until golden (about 2 minutes).', section: PREP_ROLLS, img: sub5 },
        { step: 'Add 3 meatballs in each roll with a little sauce and cheese.', section: ASSEMBLE_SUBS, img: sub6 },
        { step: 'Broil until cheese is melted (about 2 minutes).', section: ASSEMBLE_SUBS, img: sub7 },
        { step: 'Serve with more sauce and cheese.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original recipe says to broil for 3 minutes, but it burned the bread pretty badly. I recommend starting it at 2 minutes.' },
    ]
};