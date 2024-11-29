const rolls1 = '../assets/Products/dinner-rolls-1.jpeg';
const rolls2 = '../assets/Products/dinner-rolls-2.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { YEAST, LUKEWARM_WATER, WHITE_SUGAR, VEGETABLE_OIL, EGGS, ALL_PURPOSE_FLOUR, SALT } = require('./ingredients');

const YEAST_MIXTURE = 'Yeast Mixture';
const SUGAR_MIXTURE = 'Sugar Mixture';
const EGGS_SECTION = 'Egg';

module.exports = {
    cardName: 'Dinner Rolls',
    name: 'Dinner Rolls',
    recipeCredit: 'Nanette Marx',
    img: rolls2,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: ' servings',
    prepTime: '20 m',
    cookTime: '15 m',
    separated: true,
    ingredients: [
        { ...YEAST, amount: '2 Tbsp', additionalDetails: '', section: YEAST_MIXTURE },
        { ...LUKEWARM_WATER, amount: '1/2 c', additionalDetails: '', section: YEAST_MIXTURE },
        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: SUGAR_MIXTURE },
        { ...VEGETABLE_OIL, amount: '1/2 c', additionalDetails: '', section: SUGAR_MIXTURE },
        { ...LUKEWARM_WATER, amount: '1 c', additionalDetails: '', section: SUGAR_MIXTURE },
        { ...EGGS, amount: '2', additionalDetails: '', section: EGGS_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: '4 1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'spatula' },
        { name: 'silicon baking mat' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'In a small bowl, combine the "Yeast Mixture" ingredients.', type: YEAST_MIXTURE },
        { step: 'Let sit while preparing the other ingredients.', type: YEAST_MIXTURE },
        { step: 'In a mixing bowl, combine the "Sugar Mixture" ingredients.', type: SUGAR_MIXTURE },
        { step: 'In another small bowl, beat eggs.', type: EGGS_SECTION },
        { step: 'In the mixing bowl (Sugar Mixture), add the yeast mixture and the beaten eggs.', type: SECTIONS.DOUGH },
        { step: 'Add salt. Mix.', type: SECTIONS.DOUGH },
        { step: 'Mix in 4 cups of flour. If it is still wet, add up to 1/2 cup more flour (1/4 cup at a time).', type: SECTIONS.DOUGH },
        { step: 'Let it double in size (about 1 hour).', type: SECTIONS.DOUGH },
        { step: 'Preheat the oven to 375ºF.', type: SECTIONS.DOUGH },
        { step: 'Line a baking sheet with a silicon baking mat.', type: SECTIONS.DOUGH },
        { step: 'Roll out the dough on a lightly floured surface.', type: SECTIONS.DOUGH },
        { step: 'Form into rolls and place them on the baking sheet.', type: SECTIONS.DOUGH, img: rolls1 },
        { step: 'Bake for until golden brown (about 12 to 15 minutes).', type: SECTIONS.DOUGH },
        { step: 'Let cool for a few minutes.', type: SECTIONS.DOUGH },
        { step: 'Enjoy these delicious homemade rolls with any meal and on any occasion.', type: SECTIONS.DOUGH },
    ]
};