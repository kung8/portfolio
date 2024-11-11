const butter = '../assets/Products/crescent-rolls-butter.jpeg';
const balls = '../assets/Products/crescent-rolls-dough-balls.jpeg';
const rolled = '../assets/Products/crescent-rolls-dough-rolled-out.jpeg';
const dough = '../assets/Products/crescent-rolls-dough.jpeg';
const salt = '../assets/Products/crescent-rolls-salt.jpeg';
const sugar = '../assets/Products/crescent-rolls-sugar.jpeg';
const uniformed = '../assets/Products/crescent-rolls-uniformed-yeast-mixture.jpeg';
const mixed = '../assets/Products/crescent-rolls-yeast-mixture-mixed.jpeg';
const yeast = '../assets/Products/crescent-rolls-yeast-mixture.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { LUKEWARM_WATER, YEAST, WHITE_SUGAR, EVAPORATED_MILK, COLD_WATER, SALT, UNSALTED_BUTTER, EGGS, ALL_PURPOSE_FLOUR } = require('./ingredients');

const YEAST_MIXTURE = 'Yeast Mixture';
const LIQUID_MIXTURE = 'Liquid Mixture';

module.exports = {
    cardName: 'Crescent Rolls',
    name: 'Crescent Rolls',
    img: '',
    available: true,
    recipeCredit: 'Grandma Ward',
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: '10 servings',
    prepTime: '15 m',
    cookTime: '20 m',
    separated: true,
    ingredients: [
        { ...LUKEWARM_WATER, amount: '3/8 c', additionalDetails: '', section: YEAST_MIXTURE },
        { ...YEAST, amount: '3 Tbsp', additionalDetails: '', section: YEAST_MIXTURE },
        { ...WHITE_SUGAR, amount: '7 tsp', additionalDetails: '', section: YEAST_MIXTURE },
        { ...EVAPORATED_MILK, amount: '1 can of', additionalDetails: '', section: LIQUID_MIXTURE },
        { ...COLD_WATER, amount: '1 1/2 c', additionalDetails: '', section: LIQUID_MIXTURE },
        { ...SALT, amount: '2 1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '3', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: '8 c', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'mixing bowl' },
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'Combine ingredients in medium bowl.', type: YEAST_MIXTURE, img: [yeast, mixed, uniformed] },
        { step: 'Let mixture sit for 3 to 5 minutes.', type: YEAST_MIXTURE },
        { step: 'Combine ingredients in mixing bowl.', type: LIQUID_MIXTURE, img: [butter, sugar, salt] },
        { step: 'Add yeast mixture into liquid mixture. Mix.', type: LIQUID_MIXTURE },
        { step: 'Preheat the oven to 325ºF.', type: SECTIONS.MAIN },
        { step: 'Place silicon baking mat on baking sheet.', type: SECTIONS.MAIN },
        { step: 'Add main ingredients to the mixing bowl and combine.', type: SECTIONS.MAIN, img: dough },
        { step: 'Split the dough into four equal parts.', type: SECTIONS.MAIN, img: balls },
        { step: 'Roll out dough into large circles (like pizza dough shape).', type: SECTIONS.MAIN, img: rolled },
        { step: 'Cut the dough into eighths.', type: SECTIONS.MAIN },
        { step: 'Separate. Roll each wedge from the outside to the center.', type: SECTIONS.MAIN },
        { step: 'Place rolls on prepared baking sheet and let them rise.', type: SECTIONS.MAIN },
        { step: 'Bake for 20 minutes.', type: SECTIONS.MAIN },
    ]
};