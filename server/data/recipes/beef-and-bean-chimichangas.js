// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { GROUND_BEEF, YELLOW_ONION, GREEN_BELL_PEPPER, CORN, CHILI_POWDER, GARLIC_SALT, CUMIN, MONTEREY_JACK_CHEESE, UNSALTED_BUTTER, FLOUR_TORTILLA, LETTUCE, ROMA_TOMATO, REFRIED_BEANS, TACO_SAUCE } = require('./ingredients');

const TORTILLA_AND_OTHER = 'Tortilla and Other';
const PREP_OVEN = 'Prep Oven';
const ADD_SPICES = 'Add Spices';

module.exports = {
    wip: true,
    cardName: 'Beef + Bean Chimichangas',
    name: 'Beef and Bean Chimichangas',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.SAUTE, METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.CASSEROLE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Beef and Bean Chimichangas', link: 'https://www.allrecipes.com/recipe/36766/beef-and-bean-chimichangas/' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },

        { ...YELLOW_ONION, amount: 3/4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 3/4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...CORN, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.VEGGIES },

        { ...TACO_SAUCE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CHILI_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...FLOUR_TORTILLA, amount: 8, unit: '', additionalDetails: '', section: TORTILLA_AND_OTHER },
        { ...REFRIED_BEANS, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: TORTILLA_AND_OTHER },
        { ...MONTEREY_JACK_CHEESE, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'shredded', section: TORTILLA_AND_OTHER },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TORTILLA_AND_OTHER },

        { ...LETTUCE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
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
        { step: 'Preheat the oven to 350ºF.', section: PREP_OVEN },
        { step: 'Over medium-high heat, brown beef in a frying pan.', section: SECTIONS.COOK_BEEF },
        { step: 'Drain the excess grease.', section: SECTIONS.COOK_BEEF },
        { step: 'Add the "Veggies" ingredients. Mix and cook until tender (about 5 minutes).', section: SECTIONS.COOK_VEGGIES },
        { step: 'Add "Seasoning" ingredients and mix. Cook until everything is heated through.', section: ADD_SPICES },
        { step: 'On each tortilla, add a thin layer of beans, beef mixture, and cheese.', section: SECTIONS.ASSEMBLE },
        { step: 'Roll tortillas. Place them with the seam-side down in a baking dish.', section: SECTIONS.ASSEMBLE },
        { step: 'Brush the top with melted butter.', section: SECTIONS.ASSEMBLE },
        { step: 'Bake until golden brown (about 30 to 35 minutes).', section: SECTIONS.BAKE },
        { step: 'Enjoy this simple mexican dish topped with your favorite toppings.', section: SECTIONS.SERVE },
    ]
};