// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { ALL_PURPOSE_FLOUR, SALT, BAKING_POWDER, WHITE_SUGAR, UNSALTED_BUTTER, MILK, LEMON_JUICE, VANILLA_EXTRACT, EGGS } = require('./ingredients');

const PREP_BAKE = 'Prep Bake';
const DRY_MIXTURE = 'Dry Mixture';
const BUTTERMILK_MIXTURE = 'Buttermilk Mixture';
const EGG_WASH = 'Egg Wash';

module.exports = {
    wip: true,
    cardName: 'English Scones',
    name: 'English Scones',
    img: '',
    available: true,
    recommended: false,
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
        { step: 'Place baking sheet in preheating oven.', type: PREP_BAKE },
        { step: 'Beat egg. Set aside.', type: EGG_WASH },
        { step: 'In a mixing bowl, combine all the "Dry Ingredients" except the butter.', type: DRY_MIXTURE },
        { step: 'Add the butter. Work the mixture with your hands until it looks like fine crumbs.', type: DRY_MIXTURE },
        { step: 'Heat up the milk until it is warm (not hot).', type: BUTTERMILK_MIXTURE },
        { step: 'Add vanilla and lemon juice. And set it aside.', type: BUTTERMILK_MIXTURE },
        { step: 'Combine the buttermilk mixture and dry mixture. Mix quickly with a fork.', type: SECTIONS.MAIN },
        { step: 'Flour a clean surface and place the dough on top.', type: SECTIONS.MAIN },
        { step: 'Sprinkle the dough with flour.', type: SECTIONS.MAIN },
        { step: 'Fold the dough a few times until smooth (do not overwork).', type: SECTIONS.MAIN },
        { step: 'Flatten the dough into a disc about 1.5 inches in thickness.', type: SECTIONS.MAIN },
        { step: 'Cut the dough into 2-inch biscuits using a biscuit cutter. And continue to use the scraps to form additional biscuits. You should be able to get 6 to 8.', type: SECTIONS.MAIN },
        { step: 'Brush the scones with the egg wash.', type: SECTIONS.MAIN },
        { step: 'Place the scones on the hot baking sheet.', type: SECTIONS.MAIN },
        { step: 'Bake until the top is golden (about 10 to 15 minutes).', type: SECTIONS.MAIN },
        { step: 'Serve warm with jam or favorite toppings.', type: SECTIONS.MAIN },
    ]
};