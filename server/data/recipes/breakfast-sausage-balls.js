const balls1 = '../assets/Products/breakfast-sausage-balls-1.jpeg';
const balls2 = '../assets/Products/breakfast-sausage-balls-2.jpeg';
const balls3 = '../assets/Products/breakfast-sausage-balls-3.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BREAKFAST_SAUSAGE, CHEDDAR_CHEESE, KODIAK_CAKE_MIX, MILK, MIXING_BOWL, OVEN, PARCHMENT_PAPER } = require('./ingredients');

const SAUSAGE_BALL_SECTION = 'Sausage Balls';
const PREP_SAUSAGE_BALLS = 'Prep Sausage Balls';
const BAKE_SAUSAGE_BALLS = 'Bake Sausage Balls';

module.exports = {
    cardName: 'Breakfast Sausage Balls',
    name: 'Breakfast Sausage Balls',
    img: balls3,
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE, TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 27, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Breakfast Sausage Balls', 
            link: 'https://www.simplyrecipes.com/breakfast-sausage-balls-recipe-11701329',
            authors: ['Meghan Splawn'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BREAKFAST_SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SAUSAGE_BALL_SECTION },
        { ...KODIAK_CAKE_MIX, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUSAGE_BALL_SECTION },
        { ...CHEDDAR_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SAUSAGE_BALL_SECTION },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or as needed', section: SAUSAGE_BALL_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        PARCHMENT_PAPER,
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREP_SAUSAGE_BALLS },
        { step: 'Line a baking sheet with parchment paper.', section: PREP_SAUSAGE_BALLS },
        { step: 'In a mixing bowl, combine together all the ingredients besides the milk.', section: PREP_SAUSAGE_BALLS },
        { step: 'Add milk 1/4 cup at a time. Mix until incorporated and everything is sticking together.', section: PREP_SAUSAGE_BALLS },
        { step: 'Form 3 inch balls.', section: PREP_SAUSAGE_BALLS },
        { step: 'Place each ball one inch apart on the baking sheet.', section: BAKE_SAUSAGE_BALLS, img: balls1 },
        { step: 'Bake until the bottoms are browned and cooked through (about 24 to 27 minutes).', section: BAKE_SAUSAGE_BALLS, img: balls2 },
        { step: 'Enjoy these sausage balls warm!', section: SECTIONS.SERVE },
        { step: 'Air fry at 350ºF for 3 to 4 minutes.', section: SECTIONS.REHEAT },
    ],
    notes: [
        { note: 'I ended up needing about 1 cup of milk to get the mixture to stick together.' },
        { note: 'I grated the cheese to a slightly larger size than I normally do so it would melt better and will not stick as much too itself.' },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'In an air fryer, reheat at 350ºF until heated through (about 3 to 4 minutes). Flip halfway through.',
        },
    ],
    mealPrep: true,
};