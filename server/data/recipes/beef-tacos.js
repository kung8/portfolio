// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { OLIVE_OIL, GROUND_BEEF, CHILI_POWDER, CUMIN, OREGANO, GARLIC_POWDER, SALT, BLACK_PEPPER, TOMATO_PASTE, FLOUR_TORTILLA, LETTUCE, MEXICAN_BLEND_CHEESE, ROMA_TOMATO, RED_ONION, WATER } = require('./ingredients');

const TACO_SHELLS = 'Taco Shells';

module.exports = {
    wip: true,
    cardName: 'Beef Tacos',
    name: 'Beef Tacos',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.TACO],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Beef Tacos', link: 'https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHILI_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CUMIN, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...OREGANO, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GARLIC_POWDER, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...TOMATO_PASTE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WATER, amount: 1/2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.FILLING },
        { ...FLOUR_TORTILLA, amount: 8, unit: '', additionalDetails: '', section: TACO_SHELLS },
        { ...LETTUCE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...MEXICAN_BLEND_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...RED_ONION, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'microwave' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Over medium high heat, heat oil in a frying pan.', section: SECTIONS.PREP_FILLING },
        { step: 'Add beef and cook until browned (about 5 to 7 minutes). Drain.', section: SECTIONS.PREP_FILLING },
        { step: 'Reduce the heat to medium-low.', section: SECTIONS.PREP_FILLING },
        { step: 'Add the rest of the filling ingredients. Mix.', section: SECTIONS.PREP_FILLING },
        { step: 'Cook until the sauce has thickened (about 3 to 5 minutes).', section: SECTIONS.PREP_FILLING },
        { step: 'Place tortillas on a plate and microwave for 30 seconds. Flip. Microwave for another 30 seconds.', section: SECTIONS.ASSEMBLE },
        { step: 'Fill the tortillas with the ground beef mixture and your favorite toppings.', section: SECTIONS.ASSEMBLE },
        { step: 'Serve and enjoy!', section: SECTIONS.SERVE },
    ]
};