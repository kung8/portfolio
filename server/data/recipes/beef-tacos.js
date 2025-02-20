// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { OLIVE_OIL, GROUND_BEEF, CHILI_POWDER, CUMIN, OREGANO, GARLIC_POWDER, SALT, BLACK_PEPPER, TOMATO_PASTE, WARM_WATER, FLOUR_TORTILLA, LETTUCE, MEXICAN_BLEND_CHEESE, ROMA_TOMATO, RED_ONION } = require('./ingredients');

const TACO_FILLING = 'Taco Filling';
const TACO_SHELLS = 'Taco Shells';
const PREP_TACO_FILLING = 'Prep Taco Filling';
const ASSEMBLE_TACOS = 'Assemble Tacos';

module.exports = {
    wip: true,
    cardName: 'Beef Tacos',
    name: 'Beef Tacos',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.TACO],
    yields: '8 servings',
    prepTime: '15 m',
    cookTime: '10 m',
    websites: [
        { label: 'Beef Tacos', link: 'https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: '1 Tbsp', additionalDetails: '', section: TACO_FILLING },
        { ...GROUND_BEEF, amount: '1 lb', additionalDetails: '', section: TACO_FILLING },
        { ...CHILI_POWDER, amount: '2 tsp', additionalDetails: '', section: TACO_FILLING },
        { ...CUMIN, amount: '2 tsp', additionalDetails: '', section: TACO_FILLING },
        { ...OREGANO, amount: '1/2 tsp', additionalDetails: '', section: TACO_FILLING },
        { ...GARLIC_POWDER, amount: '1/2 tsp', additionalDetails: '', section: TACO_FILLING },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: TACO_FILLING },
        { ...BLACK_PEPPER, amount: '1/2 tsp', additionalDetails: '', section: TACO_FILLING },
        { ...TOMATO_PASTE, amount: '2 Tbsp', additionalDetails: '', section: TACO_FILLING },
        { ...WARM_WATER, amount: '1/2 c', additionalDetails: '', section: TACO_FILLING },
        { ...FLOUR_TORTILLA, amount: '8', additionalDetails: '', section: TACO_SHELLS },
        { ...LETTUCE, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...MEXICAN_BLEND_CHEESE, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...RED_ONION, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
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
        { step: 'Over medium high heat, heat oil in a frying pan.', type: PREP_TACO_FILLING },
        { step: 'Add beef and cook until browned (about 5 to 7 minutes). Drain.', type: PREP_TACO_FILLING },
        { step: 'Reduce the heat to medium-low.', type: PREP_TACO_FILLING },
        { step: 'Add the rest of the filling ingredients. Mix.', type: PREP_TACO_FILLING },
        { step: 'Cook until the sauce has thickened (about 3 to 5 minutes).', type: PREP_TACO_FILLING },
        { step: 'Place tortillas on a plate and microwave for 30 seconds. Flip. Microwave for another 30 seconds.', type: ASSEMBLE_TACOS },
        { step: 'Fill the tortillas with the ground beef mixture and your favorite toppings.', type: ASSEMBLE_TACOS },
        { step: 'Serve and enjoy!', type: SECTIONS.SERVE },
    ]
};