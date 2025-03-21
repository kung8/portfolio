// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { GROUND_BEEF, YELLOW_ONION, GREEN_BELL_PEPPERS, CORN, CHILI_POWDER, GARLIC_SALT, CUMIN, MONTEREY_JACK_CHEESE, UNSALTED_BUTTER, FLOUR_TORTILLA, LETTUCE, ROMA_TOMATO, REFRIED_BEANS, TACO_SAUCE } = require('./ingredients');

const BEEF = 'Beef';
const VEGGIES = 'Veggies';
const SPICES = 'Spices';
const TORTILLA_AND_OTHER = 'Tortilla and Other';

const PREP_OVEN = 'Prep Oven';
const COOK_BEEF = 'Cook Beef';
const COOK_VEGGIES = 'Cook Veggies';
const ADD_SPICES = 'Add Spices';
const ASSEMBLE_CHIMICHANGAS = 'Assemble Chimichangas';
const BAKE_CHIMICHANGAS = 'Bake Chimichangas';

module.exports = {
    wip: true,
    cardName: 'Beef + Bean Chimichangas',
    name: 'Beef and Bean Chimichangas',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.SAUTE, METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.CASSEROLE],
    yields: '8 servings',
    prepTime: '15 m',
    cookTime: '30 m',
    websites: [
        { label: 'Beef and Bean Chimichangas', link: 'https://www.allrecipes.com/recipe/36766/beef-and-bean-chimichangas/' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_BEEF, amount: '1 lb', additionalDetails: '', section: BEEF },

        { ...YELLOW_ONION, amount: '3/4 c', additionalDetails: 'chopped', section: VEGGIES },
        { ...GREEN_BELL_PEPPERS, amount: '3/4 c', additionalDetails: 'diced', section: VEGGIES },
        { ...CORN, amount: '1 1/2 c', additionalDetails: '', section: VEGGIES },

        { ...TACO_SAUCE, amount: '2 c', additionalDetails: '', section: SPICES },
        { ...CHILI_POWDER, amount: '2 tsp', additionalDetails: '', section: SPICES },
        { ...GARLIC_SALT, amount: '1 tsp', additionalDetails: '', section: SPICES },
        { ...CUMIN, amount: '1 tsp', additionalDetails: '', section: SPICES },

        { ...FLOUR_TORTILLA, amount: '8', additionalDetails: '', section: TORTILLA_AND_OTHER },
        { ...REFRIED_BEANS, amount: '16 oz', additionalDetails: '', section: TORTILLA_AND_OTHER },
        { ...MONTEREY_JACK_CHEESE, amount: '16 oz', additionalDetails: 'shredded', section: TORTILLA_AND_OTHER },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: TORTILLA_AND_OTHER },

        { ...LETTUCE, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '1', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'baking dish' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: PREP_OVEN },
        { step: 'Over medium-high heat, brown beef in a frying pan.', type: COOK_BEEF },
        { step: 'Drain the excess grease.', type: COOK_BEEF },
        { step: 'Add the "Veggies" ingredients. Mix and cook until tender (about 5 minutes).', type: COOK_VEGGIES },
        { step: 'Add "Seasoning" ingredients and mix. Cook until everything is heated through.', type: ADD_SPICES },
        { step: 'On each tortilla, add a thin layer of beans, beef mixture, and cheese.', type: ASSEMBLE_CHIMICHANGAS },
        { step: 'Roll tortillas. Place them with the seam-side down in a baking dish.', type: ASSEMBLE_CHIMICHANGAS },
        { step: 'Brush the top with melted butter.', type: ASSEMBLE_CHIMICHANGAS },
        { step: 'Bake until golden brown (about 30 to 35 minutes).', type: BAKE_CHIMICHANGAS },
        { step: 'Enjoy this simple mexican dish topped with your favorite toppings.', type: SECTIONS.SERVE },
    ]
};