const scones1 = '../assets/Products/english-scones-1.jpeg';
const scones2 = '../assets/Products/english-scones-2.jpeg';
const scones3 = '../assets/Products/english-scones-3.jpeg';
const scones4 = '../assets/Products/english-scones-4.jpeg';
const scones5 = '../assets/Products/english-scones-5.jpeg';
const scones6 = '../assets/Products/english-scones-6.jpeg';
const scones7 = '../assets/Products/english-scones-7.jpeg';
const scones8 = '../assets/Products/english-scones-8.jpeg';
const scones9 = '../assets/Products/english-scones-9.jpeg';
const scones10 = '../assets/Products/english-scones-10.jpeg';
const scones11 = '../assets/Products/english-scones-11.jpeg';
const scones12 = '../assets/Products/english-scones-12.jpeg';
const scones13 = '../assets/Products/english-scones-13.jpeg';
const scones14 = '../assets/Products/english-scones-14.jpeg';
const scones15 = '../assets/Products/english-scones-15.jpeg';
const scones16 = '../assets/Products/english-scones-16.jpeg';
const scones17 = '../assets/Products/english-scones-17.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { ALL_PURPOSE_FLOUR, SALT, BAKING_POWDER, WHITE_SUGAR, UNSALTED_BUTTER, MILK, LEMON_JUICE, VANILLA_EXTRACT, EGGS } = require('./ingredients');

const PREP_BAKE = 'Prep Bake';
const DRY_MIXTURE = 'Dry Mixture';
const BUTTERMILK_MIXTURE = 'Buttermilk Mixture';
const EGG_WASH = 'Egg Wash';

module.exports = {
    cardName: 'English Scones',
    name: 'English Scones',
    img: scones16,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.BREAKFAST, CATEGORIES.SNACK],
    genre: [GENRES.BRITISH],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '15 m',
    websites: [
        { label: 'English Scones', link: 'https://platedcravings.com/recipe-easy-scones-with-clotted-cream-and-jam/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '2 1/2 c', additionalDetails: '', section: DRY_MIXTURE },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: DRY_MIXTURE },
        { ...BAKING_POWDER, amount: '3 1/2 tsp', additionalDetails: '', section: DRY_MIXTURE },
        { ...WHITE_SUGAR, amount: '3 Tbsp', additionalDetails: '', section: DRY_MIXTURE },
        { ...UNSALTED_BUTTER, amount: '6 Tbsp', additionalDetails: 'cold and cubed', section: DRY_MIXTURE },
        { ...MILK, amount: '3/4 c', additionalDetails: '', section: BUTTERMILK_MIXTURE },
        { ...LEMON_JUICE, amount: '1 tsp', additionalDetails: '', section: BUTTERMILK_MIXTURE },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: BUTTERMILK_MIXTURE },
        { ...EGGS, amount: '1', additionalDetails: 'beaten', section: EGG_WASH },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
        { name: 'mixing bowl' },
        { name: 'fork' },
        { name: 'brush' },
    ],
    directions: [
        { step: 'Preheat oven to 400ºF.', type: PREP_BAKE },
        { step: 'Line baking sheet with a silicon baking mat.', type: PREP_BAKE },
        { step: 'Place baking sheet in preheating oven.', type: PREP_BAKE, img: scones1 },
        { step: 'Beat egg. Set aside.', type: EGG_WASH },
        { step: 'In a mixing bowl, combine all the "Dry Ingredients" except the butter.', type: DRY_MIXTURE, img: [scones2, scones3] },
        { step: 'Add the butter. Work the mixture with your hands until it looks like fine crumbs.', type: DRY_MIXTURE, img: [scones4, scones5] },
        { step: 'Heat up the milk until it is warm (not hot).', type: BUTTERMILK_MIXTURE },
        { step: 'Add vanilla and lemon juice. And set it aside.', type: BUTTERMILK_MIXTURE, img: [scones6, scones7] },
        { step: 'Combine the buttermilk mixture and dry mixture. Mix quickly with a fork.', type: SECTIONS.MAIN, img: scones8 },
        { step: 'Flour a clean surface and place the dough on top.', type: SECTIONS.MAIN, img: [scones9, scones10] },
        { step: 'Sprinkle the dough with flour.', type: SECTIONS.MAIN },
        { step: 'Fold the dough a few times until smooth (do not overwork).', type: SECTIONS.MAIN },
        { step: 'Flatten the dough into a disc about 1.5 inches in thickness.', type: SECTIONS.MAIN },
        { step: 'Cut the dough into 2-inch biscuits using a biscuit cutter. And continue to use the scraps to form additional biscuits. You should be able to get 6 to 8.', type: SECTIONS.MAIN, img: [scones11, scones12] },
        { step: 'Place the scones on the hot baking sheet.', type: SECTIONS.MAIN },
        { step: 'Brush the scones with the egg wash.', type: SECTIONS.MAIN, img: scones13 },
        { step: 'Bake until the top is golden (about 10 to 15 minutes).', type: SECTIONS.MAIN, img: scones14 },
        { step: 'Serve warm with jam or favorite toppings.', type: SECTIONS.MAIN, img: [scones15, scones17] },
    ]
};