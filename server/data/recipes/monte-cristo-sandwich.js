// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { HEAVY_CREAM, EGGS, LEMON_ZEST, SALT, CAYENNE_PEPPER, NUTMEG, BREAD, COOKED_HAM, UNSALTED_BUTTER, SWISS_CHEESE } = require('./ingredients');

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
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: '2 servings',
    prepTime: '10 m',
    cookTime: '10 m',
    websites: [
        { label: 'Monte Cristo Sandwich', link: 'https://www.allrecipes.com/recipe/264681/madame-cristo-grilled-ham-and-cheese/' }
    ],
    separated: true,
    ingredients: [
        { ...HEAVY_CREAM, amount: '1/2 c', additionalDetails: '', section: BATTER_SECTION },
        { ...EGGS, amount: '2', additionalDetails: '', section: BATTER_SECTION },
        { ...LEMON_ZEST, amount: '1 tsp', additionalDetails: '', section: BATTER_SECTION },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: BATTER_SECTION },
        { ...CAYENNE_PEPPER, amount: '1 pinch', additionalDetails: '', section: BATTER_SECTION },
        { ...NUTMEG, amount: '1 pinch', additionalDetails: '', section: BATTER_SECTION },

        { ...BREAD, amount: '4 slices', additionalDetails: '', section: SANDWICH_SECTION },
        { ...SWISS_CHEESE, amount: '8 slices', additionalDetails: '', section: SANDWICH_SECTION },
        { ...COOKED_HAM, amount: '4 oz', additionalDetails: 'sliced', section: SANDWICH_SECTION },
        { ...UNSALTED_BUTTER, amount: '2 Tbsp', additionalDetails: '', section: SANDWICH_SECTION },
        { ...CAYENNE_PEPPER, amount: '2 pinches', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'toaster' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'bowl' },
    ],
    directions: [
        { step: 'In a bowl, combine the "Batter" ingredients until the batter is thin and runny.', type: PREP_BATTER },
        { step: 'Toast bread and place each slice on a plate.', type: ASSEMBLE_SANDWICH },
        { step: 'Divide the cheese and ham between the two sandwiches. Assemble the sandwiches.', type: ASSEMBLE_SANDWICH },
        { step: 'Dip the sandwiches into the batter and flip. Repeat until the sandwiches are coated.', type: COAT_SANDWICH },
        { step: 'Place coated sandwiches back on the plate.', type: COAT_SANDWICH },
        { step: 'Over medium heat, melt butter in a frying pan.', type: COOK_SANDWICH },
        { step: 'Add sandwich.', type: COOK_SANDWICH },
        { step: 'Cook until each side is browned and the cheese has melted (about 4 minutes per side).', type: COOK_SANDWICH },
        { step: 'Serve this sandwich warm optionally topped with more cheese.', type: SECTIONS.SERVE },
    ]
};