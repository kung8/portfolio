const cup1 = '../assets/Products/peanut-butter-cup-1.jpeg';
const cup2 = '../assets/Products/peanut-butter-cup-2.jpeg';
const cup3 = '../assets/Products/peanut-butter-cup-3.jpeg';
const cup4 = '../assets/Products/peanut-butter-cup-4.jpeg';
const cup5 = '../assets/Products/peanut-butter-cup-5.jpeg';
const cup6 = '../assets/Products/peanut-butter-cup-6.jpeg';
const cup7 = '../assets/Products/peanut-butter-cup-7.jpeg';
const cup8 = '../assets/Products/peanut-butter-cup-8.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { MILK_CHOCOLATE_CHIPS, PEANUT_BUTTER, SALT, POWDERED_SUGAR } = require('./ingredients');

const CHOCOLATE_SECTION = 'Chocolate';
const FILLING_SECTION = 'Filling';
const FIRST_CHILL = 'First Chill';
const SECOND_CHILL = 'Second Chill';

module.exports = {
    cardName: 'Peanut Butter Cup',
    name: 'Peanut Butter Cup',
    img: cup8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.CHILLED, METHODS.MIX, METHODS.MELT],
    type: [TYPES.DESSERT, TYPES.CHOCOLATE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 6, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 4, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Peanut Butter Cup', link: 'https://www.allrecipes.com/recipe/44715/chocolate-peanut-butter-cups/' }
    ],
    separated: true,
    ingredients: [
        { ...MILK_CHOCOLATE_CHIPS, amount: 23, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CHOCOLATE_SECTION },
        { ...PEANUT_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FILLING_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FILLING_SECTION },
        { ...POWDERED_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FILLING_SECTION },
    ],
    appliances: [
        { name: 'refrigerator' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'muffin tin' },
        { name: 'cupcake liners' },
    ],
    directions: [
        { step: 'Fill the muffin tin with cupcake liners.', type: FIRST_CHILL },
        { step: 'In a microwavable bowl, add half of the chocolate chips.', type: FIRST_CHILL },
        { step: 'Microwave until melted (about 2 or 2 1/2 minutes).', type: FIRST_CHILL, img: cup1 },
        { step: 'Spoon chocolate into cupcake liners about halfway. Carefully bring up the chocolate slightly up the side.', type: FIRST_CHILL, img: cup2 },
        { step: 'Chill the chocolate in the fridge (about 1 hour).', type: FIRST_CHILL, img: cup5 },
        { step: 'In a mixing bowl, combine the peanut butter, powdered sugar and salt.', type: SECOND_CHILL, img: [cup3, cup4] },
        { step: 'Place peanut butter mixture in the center of the chocolate.', type: SECOND_CHILL, img: cup6 },
        { step: 'Melt the rest of the chocolate.', type: SECOND_CHILL },
        { step: 'Pour chocolate over the peanut butter mixture. Smooth as much as you can.', type: SECOND_CHILL, img: cup7 },
        { step: 'Chill the chocolate until firm (about 1 hour).', type: SECOND_CHILL },
        { step: 'Enjoy these Reese\'s Cup copycat!', type: SECTIONS.SERVE },
    ]
};