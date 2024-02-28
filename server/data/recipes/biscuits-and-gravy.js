const biscuits = '../assets/Products/biscuits-and-gravy.jpeg';
const { CATEGORIES } = require("./constants");

const BISCUITS = 'Biscuits';
const GRAVY = 'Gravy';

module.exports = {
    cardName: 'Biscuits & Gravy',
    name: 'Southern Biscuits and Gravy',
    img: biscuits,
    available: true,
    type: [CATEGORIES.BREAKFAST],
    yields: '8 - 10 servings',
    prepTime: '20 m',
    cookTime: '15 m',
    separated: true,
    ingredients: [
        { name: 'flour', amount: '5 1/2 c', additionalDetails: '', optional: false, section: BISCUITS },
        { name: 'baking powder', amount: '2 Tbsp', additionalDetails: '', optional: false, section: BISCUITS },
        { name: 'baking soda', amount: '2 tsp', additionalDetails: '', optional: false, section: BISCUITS },
        { name: 'kosher salt', amount: '2 Tbsp', additionalDetails: '', optional: false, section: BISCUITS },
        { name: 'unsalted butter', amount: '1 1/2 c', additionalDetails: 'cut into 1/2" slices', optional: false, section: BISCUITS },
        { name: 'unsalted butter', amount: '', additionalDetails: 'melted', optional: false, section: BISCUITS },
        { name: 'buttermilk', amount: '3 c', additionalDetails: '', optional: false, section: BISCUITS },
        { name: 'ground pork', amount: '1 lb', additionalDetails: '', optional: false, section: GRAVY },
        { name: 'flour', amount: '1/2 c', additionalDetails: '', optional: false, section: GRAVY },
        { name: 'milk', amount: '5 c', additionalDetails: '', optional: false, section: GRAVY },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: GRAVY },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: GRAVY },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'clean counter' },
        { name: 'baking sheet' },
        { name: 'sauce pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Preheat the oven to 475ºF.', type: BISCUITS },
        { step: 'On a clean counter, add the flour, baking powder, baking soda, and salt. And combine.', type: BISCUITS },
        { step: 'Add cold butter to the mixture and with your hands combine, squeeze, and squish the butter into the dry ingredients. Keep doing this until the butter is the size of your pinky nail.', type: BISCUITS },
        { step: 'Make a well in the center of the mixture and pour in the buttermilk. Combine with your hands until everything is well mixed.', type: BISCUITS },
        { step: 'Knead the dough about 4 or 5 times until the dough is smooth.', type: BISCUITS },
        { step: 'Roll out the dough to a rectangle about 3/4 inch thick.', type: BISCUITS },
        { step: 'Cut into 2 1/2-inch squares.', type: BISCUITS },
        { step: 'Place biscuits on the baking sheet, about an inch apart.', type: BISCUITS },
        { step: 'Brush the biscuit tops with melted butter.', type: BISCUITS },
        { step: 'Place the biscuits in the oven and bake for about 14 minutes or until golden brown. Rotate the pan about halfway through the baking process (about 7 minutes in)', type: BISCUITS },
        { step: 'Remove the pan from the oven and let cool for a few minutes.', type: BISCUITS },
        { step: 'Eat these biscuits warm, by themselves or covered with gravy.', type: BISCUITS },
        { step: 'In a sauce pan over medium-heat, cook the ground pork until its browned.', type: GRAVY },
        { step: 'Add flour to the sauce pan and mix well.', type: GRAVY },
        { step: 'Slowly add the milk and stir until the gravy thickens and comes to a boil.', type: GRAVY },
        { step: 'Reduce to medium-low and let simmer, about 2 minutes.', type: GRAVY },
        { step: 'Season with salt and pepper.', type: GRAVY },
        { step: 'Serve over warm biscuits.', type: GRAVY },
    ],
    notes: [
        'Feel free to replace the ground pork with ground turkey.',
    ],
};