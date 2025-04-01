const butter = '../assets/Products/biscuits-and-gravy-butter.jpeg';
const buttermilk = '../assets/Products/biscuits-and-gravy-buttermilk.jpeg';
const dry = '../assets/Products/biscuits-and-gravy-dry.jpeg';
const meat = '../assets/Products/biscuits-and-gravy-flour-meat.jpeg';
const mixed = '../assets/Products/biscuits-and-gravy-mixed.jpeg';
const biscuits1 = '../assets/Products/biscuits-and-gravy-1.jpeg';
const biscuits2 = '../assets/Products/biscuits-and-gravy-2.jpeg';
const biscuits3 = '../assets/Products/biscuits-and-gravy-3.jpeg';
const biscuits4 = '../assets/Products/biscuits-and-gravy-4.jpeg';
const biscuits5 = '../assets/Products/biscuits-and-gravy-5.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    BAKING_POWDER,
    BAKING_SODA,
    SALT,
    UNSALTED_BUTTER,
    BUTTERMILK,
    GROUND_PORK,
    MILK,
    BLACK_PEPPER,
    GARLIC_POWDER,
} = require('./ingredients');

const BISCUITS = 'Biscuits';
const BRUSHING = 'Brushing';
const GRAVY = 'Gravy';

module.exports = {
    cardName: 'Biscuits & Gravy',
    name: 'Southern Biscuits and Gravy',
    img: biscuits5,
    recipeAuthor: '',
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY, METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.BREAD],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Sausage Gravy', link: 'https://www.soulfullymade.com/best-sausage-gravy-recipe/' }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 11 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BISCUITS },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BISCUITS },
        { ...BAKING_SODA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BISCUITS },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BISCUITS },
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cut into 1/2" slices', section: BISCUITS },
        { ...BUTTERMILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BISCUITS },
        { ...ALL_PURPOSE_FLOUR, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'dusting or as needed', section: BISCUITS },
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: BRUSHING },

        { ...GROUND_PORK, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: GRAVY },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GRAVY },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GRAVY },
        { ...GARLIC_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GRAVY },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: GRAVY },
        { ...MILK, amount: 7 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GRAVY },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: GRAVY },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'clean counter' },
        { name: 'dough knife' },
        { name: 'plate' },
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'sauce pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Preheat the oven to 475ºF.', type: BISCUITS },
        { step: 'In a mixing bowl, add the flour, baking powder, baking soda, and salt. And combine.', type: BISCUITS, img: dry },
        { step: 'Add cold butter pieces to the mixture. Use your hands to coat the butter with the flour mixture then squeeze and squish the butter until they are the size of a pea.', type: BISCUITS, img: butter },
        { step: 'Make a well in the center of the mixture and pour in the buttermilk slowly. Combine with your hands until everything is well mixed. Do not overmix. It will look like it is too wet but that is okay. We are adding some flour later to help thicken and make it less sticky.', type: BISCUITS, img: buttermilk },
        { step: 'On a clean counter, add about 3/4 cup of flour and keep about another 1/2 cup to 3/4 cup of flour in reserve.', type: BISCUITS },
        { step: 'Dump the dough onto the flour.', type: BISCUITS },
        { step: 'Knead the dough about 4 or 5 times until the dough is smooth. Avoid squishing the pea size butter chunks as much as possible. Add some of the reserved flour as needed.', type: BISCUITS, img: mixed },
        { step: 'Cut the dough into equal sized pieces and roll into discs. With about 2 inch in diameter discs, I got a little less than two dozen.', type: BISCUITS },
        { step: 'Place the balls on a plate and place in the freezer for about 15 to 20 minutes. This will help the butter harden and make the biscuits flaky as the butter pockets melt.', type: BISCUITS, img: biscuits5 },
        { step: 'Line a baking sheet with parchment paper. This will help the bottom of the biscuits from burning. Alternatively, you can place another baking pan underneath.', type: BISCUITS },
        { step: 'Place biscuits on the parchment paper about an inch apart.', type: BISCUITS },
        { step: 'Brush the biscuit tops with melted butter.', type: BISCUITS, img: biscuits1 },
        { step: 'Place the biscuits in the oven and bake until golden brown (about 14 minutes). Rotate the pan about halfway through the baking process (about 7 minutes in). When rotating the pan, you can check the bottom of the biscuits to see if they are browning too quickly.', type: BISCUITS },
        { step: 'Remove the pan from the oven and let cool for a few minutes.', type: BISCUITS, img: biscuits2 },
        { step: 'Eat these biscuits warm, by themselves or covered with gravy.', type: BISCUITS },

        { step: 'In a sauce pan over medium-heat, add ground pork and break into smaller pieces using the spatula. Cook until browned.', type: GRAVY, img: biscuits3 },
        { step: 'Add butter. Stir until melted.', type: GRAVY },
        { step: 'Add flour, garlic powder and black pepper. Stir until pork is coated and flour is fully cooked (about 2 minutes).', type: GRAVY, img: meat },
        { step: 'Slowly add 3 cups of milk and stir until the gravy thickens (about 3 to 5 minutes).', type: GRAVY, img: biscuits4 },
        { step: 'If the gravy is too thick, add the last 1/2 cup of milk and mix.', type: GRAVY },
        { step: 'Serve over warm biscuits.', type: GRAVY },
    ],
    notes: [
        { note: 'Feel free to replace the ground pork with ground turkey.' },
    ],
};