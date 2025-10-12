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

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SHEET, BASTING_BRUSH, EGG, FORK, LEMON_JUICE, MILK, MIXING_BOWL, OVEN, SALT, SILICON_BAKING_MAT, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const PREP_BAKE = 'Prep Bake';
const DRY_MIXTURE = 'Dry Mixture';
const BUTTERMILK_MIXTURE = 'Buttermilk Mixture';
const EGG_WASH = 'Egg Wash';

module.exports = {
    cardName: 'English Scones',
    name: 'English Scones',
    img: scones16,
    recipeAuthors: ['Julia Foerster'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.BREAKFAST, CATEGORIES.SNACK],
    genre: [GENRES.BRITISH],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'English Scones', link: 'https://platedcravings.com/recipe-easy-scones-with-clotted-cream-and-jam/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_MIXTURE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_MIXTURE },
        { ...BAKING_POWDER, amount: 7 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_MIXTURE },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DRY_MIXTURE },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold and cubed', section: DRY_MIXTURE },
        { ...MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUTTERMILK_MIXTURE },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTERMILK_MIXTURE },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTERMILK_MIXTURE },
        { ...EGG, amount: 1, unit: '', additionalDetails: 'beaten', section: EGG_WASH },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        SILICON_BAKING_MAT,
        MIXING_BOWL,
        FORK,
        BASTING_BRUSH,
    ],
    directions: [
        { step: 'Preheat oven to 400ºF.', section: PREP_BAKE },
        { step: 'Line baking sheet with a silicon baking mat.', section: PREP_BAKE },
        { step: 'Place baking sheet in preheating oven.', section: PREP_BAKE, img: scones1 },
        { step: 'Beat egg. Set aside.', section: EGG_WASH },
        { step: 'In a mixing bowl, combine all the "Dry Ingredients" except the butter.', section: DRY_MIXTURE, img: [scones2, scones3] },
        { step: 'Add the butter. Work the mixture with your hands until it looks like fine crumbs.', section: DRY_MIXTURE, img: [scones4, scones5] },
        { step: 'Heat up the milk until it is warm (not hot).', section: BUTTERMILK_MIXTURE },
        { step: 'Add vanilla and lemon juice. And set it aside.', section: BUTTERMILK_MIXTURE, img: [scones6, scones7] },
        { step: 'Combine the buttermilk mixture and dry mixture. Mix quickly with a fork.', section: SECTIONS.MAIN, img: scones8 },
        { step: 'Flour a clean surface and place the dough on top.', section: SECTIONS.MAIN, img: [scones9, scones10] },
        { step: 'Sprinkle the dough with flour.', section: SECTIONS.MAIN },
        { step: 'Fold the dough a few times until smooth (do not overwork).', section: SECTIONS.MAIN },
        { step: 'Flatten the dough into a disc about 1.5 inches in thickness.', section: SECTIONS.MAIN },
        { step: 'Cut the dough into 2 inch biscuits using a biscuit cutter. And continue to use the scraps to form additional biscuits. You should be able to get 6 to 8.', section: SECTIONS.MAIN, img: [scones11, scones12] },
        { step: 'Place the scones on the hot baking sheet.', section: SECTIONS.MAIN },
        { step: 'Brush the scones with the egg wash.', section: SECTIONS.MAIN, img: scones13 },
        { step: 'Bake until the top is golden (about 10 to 15 minutes).', section: SECTIONS.MAIN, img: scones14 },
        { step: 'Serve warm with jam or favorite toppings.', section: SECTIONS.MAIN, img: [scones15, scones17] },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 5 to 10 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 390ºF until heated through (about 3 minutes).',
        },
    ],
    mealPrep: true,
};