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
const GRAVY = 'Gravy';

module.exports = {
    cardName: 'Biscuits & Gravy',
    name: 'Southern Biscuits and Gravy',
    img: biscuits5,
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
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: BISCUITS },
        { ...BUTTERMILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BISCUITS },

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
        { name: 'clean counter' },
        { name: 'baking sheet' },
        { name: 'sauce pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Preheat the oven to 475ºF.', type: BISCUITS },
        { step: 'On a clean counter, add the flour, baking powder, baking soda, and salt. And combine.', type: BISCUITS, img: dry },
        { step: 'Add cold butter to the mixture and with your hands combine, squeeze, and squish the butter into the dry ingredients. Keep doing this until the butter is the size of your pinky nail.', type: BISCUITS, img: butter },
        { step: 'Make a well in the center of the mixture and pour in the buttermilk. Combine with your hands until everything is well mixed. Do not overmix.', type: BISCUITS, img: buttermilk },
        { step: 'Knead the dough about 4 or 5 times until the dough is smooth.', type: BISCUITS, img: mixed },
        { step: 'Roll out the dough to a rectangle about 3/4 inch thick.', type: BISCUITS },
        { step: 'Cut into 2 1/2-inch squares.', type: BISCUITS },
        { step: 'Place biscuits on the baking sheet, about an inch apart.', type: BISCUITS },
        { step: 'Brush the biscuit tops with melted butter.', type: BISCUITS, img: biscuits1 },
        { step: 'Place the biscuits in the oven and bake for about 14 minutes or until golden brown. Rotate the pan about halfway through the baking process (about 7 minutes in)', type: BISCUITS },
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