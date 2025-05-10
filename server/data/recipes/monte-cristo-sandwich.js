// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { HEAVY_CREAM, EGG, LEMON_ZEST, SALT, CAYENNE_PEPPER, NUTMEG, BREAD, COOKED_HAM, UNSALTED_BUTTER, PROVOLONE_CHEESE } = require('./ingredients');

const BATTER_SECTION = 'Batter';
const SANDWICH_SECTION = 'Sandwich';

const PREP_BATTER = 'Prep Batter';
const ASSEMBLE_SANDWICH = 'Assemble Sandwich';
const COAT_SANDWICH = 'Coat Sandwich';
const COOK_SANDWICH = 'Cook Sandwich';

module.exports = {
    wip: true,
    cardName: 'Monte Cristo Sandwich',
    name: 'Monte Cristo Sandwich',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Monte Cristo Sandwich', link: 'https://www.allrecipes.com/recipe/264681/madame-cristo-grilled-ham-and-cheese/' }
    ],
    separated: true,
    ingredients: [
        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BATTER_SECTION },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: BATTER_SECTION },
        { ...LEMON_ZEST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BATTER_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BATTER_SECTION },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: BATTER_SECTION },
        { ...NUTMEG, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: BATTER_SECTION },

        { ...BREAD, amount: 4, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SANDWICH_SECTION },
        { ...PROVOLONE_CHEESE, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SANDWICH_SECTION },
        { ...COOKED_HAM, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'sliced', section: SANDWICH_SECTION },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SANDWICH_SECTION },
        { ...CAYENNE_PEPPER, amount: 2, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'toaster' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'bowl' },
    ],
    directions: [
        { step: 'In a bowl, combine the "Batter" ingredients until the batter is thin and runny.', section: PREP_BATTER },
        { step: 'Toast bread and place each slice on a plate.', section: ASSEMBLE_SANDWICH },
        { step: 'Divide the cheese and ham between the two sandwiches. Assemble the sandwiches.', section: ASSEMBLE_SANDWICH },
        { step: 'Dip the sandwiches into the batter and flip. Repeat until the sandwiches are coated.', section: COAT_SANDWICH },
        { step: 'Place coated sandwiches back on the plate.', section: COAT_SANDWICH },
        { step: 'Over medium heat, melt butter in a frying pan.', section: COOK_SANDWICH },
        { step: 'Add sandwich.', section: COOK_SANDWICH },
        { step: 'Cook until each side is browned and the cheese has melted (about 4 minutes per side).', section: COOK_SANDWICH },
        { step: 'Serve this sandwich warm optionally topped with more cheese.', section: SECTIONS.SERVE },
    ]
};