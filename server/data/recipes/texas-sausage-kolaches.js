const kolaches1 = '../assets/Products/texas-sausage-kolaches-1.jpeg';
const kolaches2 = '../assets/Products/texas-sausage-kolaches-2.jpeg';
const kolaches3 = '../assets/Products/texas-sausage-kolaches-3.jpeg';
const kolaches4 = '../assets/Products/texas-sausage-kolaches-4.jpeg';
const kolaches5 = '../assets/Products/texas-sausage-kolaches-5.jpeg';
const kolaches6 = '../assets/Products/texas-sausage-kolaches-6.jpeg';
const kolaches7 = '../assets/Products/texas-sausage-kolaches-7.jpeg';
const kolaches8 = '../assets/Products/texas-sausage-kolaches-8.jpeg';
const kolaches9 = '../assets/Products/texas-sausage-kolaches-9.jpeg';
const kolaches10 = '../assets/Products/texas-sausage-kolaches-10.jpeg';
const kolaches11 = '../assets/Products/texas-sausage-kolaches-11.jpeg';
const kolaches12 = '../assets/Products/texas-sausage-kolaches-12.jpeg';
const kolaches13 = '../assets/Products/texas-sausage-kolaches-13.jpeg';
const kolaches14 = '../assets/Products/texas-sausage-kolaches-14.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { MILK, WHITE_SUGAR, UNSALTED_BUTTER, SALT, WATER, YEAST, ALL_PURPOSE_FLOUR, EGG, CHEDDAR_CHEESE, SAUSAGE_LINK } = require('./ingredients');

const SUGAR_MIXTURE_SECTION = 'Sugar Mixture';
const YEAST_MIXTURE_SECTION = 'Yeast Mixture';
const DOUGH_SECTION = 'Dough';
const FILLING_SECTION = 'Filling';

const PREP_SUGAR_MIXTURE = 'Prep Sugar Mixture';
const PREP_YEAST_MIXTURE = 'Prep Yeast Mixture';
const MAKE_DOUGH = 'Make Dough';
const PREP_FILLING = 'Prep Filling';
const BAKE_KOLACHES = 'Bake Kolaches';

module.exports = {
    cardName: 'Texas Sausage Kolaches',
    name: 'Texas Sausage Kolaches',
    img: kolaches14,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CZECH],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.MAIN_COURSE, TYPES.FINGER_FOOD],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 70, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Texas Sausage Kolaches', link: 'https://www.allrecipes.com/recipe/268998/texas-sausage-kolaches-klobasneks/' }
    ],
    separated: true,
    ingredients: [
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },

        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: YEAST_MIXTURE_SECTION },
        { ...YEAST, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: YEAST_MIXTURE_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 9 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: DOUGH_SECTION },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...SAUSAGE_LINK, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: FILLING_SECTION },
        { ...CHEDDAR_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: FILLING_SECTION },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'stand mixer' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'dough knife' },
        { name: 'baking sheet' },
        { name: 'parchment paper' },
    ],
    directions: [
        { step: 'Over medium heat, heat milk in a saucepan until it bubbles. Remove from heat.', section: PREP_SUGAR_MIXTURE },
        { step: 'Add the remaining "Sugar Mixture" section ingredients. Stir until sugar is dissolved.', section: PREP_SUGAR_MIXTURE, img: kolaches1 },
        { step: 'Let the sugar mixture come to room temperature (about 10 minutes).', section: PREP_SUGAR_MIXTURE, img: kolaches2 },

        { step: 'In a stand mixer, combine "Yeast Mixture". Stir until dissolved.', section: PREP_YEAST_MIXTURE, img: kolaches3 },

        { step: 'Add 2 cups of flour, sugar mixture, and eggs. Beat with a dough hook attachment until smooth.', section: MAKE_DOUGH, img: [kolaches4, kolaches5] },
        { step: 'Slowly add remaining flour while mixing until dough just becomes elastic and a little firm (not dry).', section: MAKE_DOUGH, img: [kolaches6, kolaches7] },
        { step: 'Transfer dough to floured surface.', section: MAKE_DOUGH },
        { step: 'Knead until dough is smooth and very elastic (about 10 to 15 minutes).', section: MAKE_DOUGH },
        { step: 'Cover with plastic wrap. Place in a warm place until it double in size (about 1 hour).', section: MAKE_DOUGH },

        { step: 'Cut sausage in half and dry with a paper towel.', section: PREP_FILLING },
        { step: 'Cut the cheese thinly to match the length of the halved sausage.', section: PREP_FILLING, img: kolaches8 },

        { step: 'Preheat the oven to 350ºF.', section: BAKE_KOLACHES },
        { step: 'Line a baking sheet with parchment paper.', section: BAKE_KOLACHES },
        { step: 'Roll out the dough and cut into 20 pieces.', section: BAKE_KOLACHES },
        { step: 'Flatten into discs and fill each with sausage and cheese.', section: BAKE_KOLACHES, img: [kolaches9, kolaches10] },
        { step: 'Fold dough around filling and pinch edges.', section: BAKE_KOLACHES },
        { step: 'Place kolaches on the baking sheet with the seam-side down.', section: BAKE_KOLACHES, img: kolaches11 },
        { step: 'Brush tops with melted butter.', section: BAKE_KOLACHES, img: kolaches12 },
        { step: 'Bake until golden brown (about 12 to 15 minutes).', section: BAKE_KOLACHES, img: kolaches13 },
        { step: 'Enjoy these delicious balls of goodness.', section: SECTIONS.SERVE },
    ]
};