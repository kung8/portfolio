const cup1 = '../assets/Products/peanut-butter-cup-1.jpeg';
const cup2 = '../assets/Products/peanut-butter-cup-2.jpeg';
const cup3 = '../assets/Products/peanut-butter-cup-3.jpeg';
const cup4 = '../assets/Products/peanut-butter-cup-4.jpeg';
const cup5 = '../assets/Products/peanut-butter-cup-5.jpeg';
const cup6 = '../assets/Products/peanut-butter-cup-6.jpeg';
const cup7 = '../assets/Products/peanut-butter-cup-7.jpeg';
const cup8 = '../assets/Products/peanut-butter-cup-8.jpeg';
const cup9 = '../assets/Products/peanut-butter-cup-9.jpeg';
const cup10 = '../assets/Products/peanut-butter-cup-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CUPCAKE_LINER, MILK_CHOCOLATE_CHIPS, MIXING_BOWL, MUFFIN_TIN, PEANUT_BUTTER, POWDERED_SUGAR, REFRIGERATOR, SALT } = require('./ingredients');

const CHOCOLATE_SECTION = 'Chocolate';
const FIRST_CHILL = 'First Chill';
const SECOND_CHILL = 'Second Chill';

module.exports = {
    cardName: 'Peanut Butter Cup',
    name: 'Peanut Butter Cup',
    img: cup9,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.CHILLED, METHODS.MIX, METHODS.MELT],
    type: [TYPES.DESSERT, TYPES.CHOCOLATE],
    allergies: [ALLERGIES.PEANUT],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 6, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 4, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Peanut Butter Cup', 
            link: 'https://www.allrecipes.com/recipe/44715/chocolate-peanut-butter-cups/',
            authors: ['Shaunnsmom'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...MILK_CHOCOLATE_CHIPS, amount: 23, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CHOCOLATE_SECTION },
        { ...PEANUT_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...POWDERED_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
    ],
    appliances: [
        REFRIGERATOR,
    ],
    supplies: [
        MIXING_BOWL,
        MUFFIN_TIN,
        CUPCAKE_LINER,
    ],
    directions: [
        { step: 'Fill the muffin tin with cupcake liners.', section: FIRST_CHILL },
        { step: 'In a microwavable bowl, add half of the chocolate chips.', section: FIRST_CHILL },
        { step: 'Microwave until melted (about 2 or 2 1/2 minutes).', section: FIRST_CHILL, img: cup1 },
        { step: 'Spoon chocolate into cupcake liners about halfway. Carefully bring up the chocolate slightly up the side.', section: FIRST_CHILL, img: cup2 },
        { step: 'Chill the chocolate in the fridge (about 1 hour).', section: FIRST_CHILL, img: cup5 },
        { step: 'In a mixing bowl, combine the peanut butter, powdered sugar and salt.', section: SECOND_CHILL, img: [cup3, cup4] },
        { step: 'Place peanut butter mixture in the center of the chocolate.', section: SECOND_CHILL, img: cup6 },
        { step: 'Melt the rest of the chocolate.', section: SECOND_CHILL },
        { step: 'Pour chocolate over the peanut butter mixture. Smooth as much as you can.', section: SECOND_CHILL, img: cup7 },
        { step: 'Chill the chocolate until firm (about 1 hour).', section: SECOND_CHILL, img: cup8 },
        { step: 'Enjoy these Reese\'s Cup copycat!', section: SECTIONS.SERVE, img: cup10 },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Take out of the fridge and let it sit at room temperature for 10 minutes before serving. This will help soften the chocolate and peanut butter.',
        },
    ],
    reheat: null,
    mealPrep: true,
};