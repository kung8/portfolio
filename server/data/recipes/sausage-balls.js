const balls1 = '../assets/Products/sausage-balls-1.jpeg';
const balls2 = '../assets/Products/sausage-balls-2.jpeg';
const balls3 = '../assets/Products/sausage-balls-3.jpeg';
const balls4 = '../assets/Products/sausage-balls-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BISQUICK_BAKING_MIX, CHEDDAR_CHEESE, MIXING_BOWL, OVEN, SAUSAGE, WATER } = require('./ingredients');

const SAUSAGE_BALL_SECTION = 'Sausage Balls';

const PREP_INGREDIENTS = 'Prep Ingredients';

module.exports = {
    cardName: 'Sausage Balls',
    name: 'Sausage Balls',
    img: balls4,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.FINGER_FOOD],
    yields: { amount: 40, unit: YIELD_UNITS.BALL },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Sausage Balls',
            link: 'https://www.food.com/recipe/sausage-balls-46078',
            authors: ['Fauve'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'bulk', section: SAUSAGE_BALL_SECTION },
        { ...CHEDDAR_CHEESE, amount: 10, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'shredded', section: SAUSAGE_BALL_SECTION },
        { ...BISQUICK_BAKING_MIX, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUSAGE_BALL_SECTION },
        { ...WATER, amount: '', unit: '', additionalDetails: '', section: SAUSAGE_BALL_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
    ],
    directions: [
        { step: `Allow the cheese and sausage to get to room temperature.`, section: PREP_INGREDIENTS },
        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `In a mixing bowl, combine all the ingredients except the water. It will be dry.`, section: SECTIONS.PREP_BATTER, img: balls1 },
        { step: `Add the water, a tablespoon at a time, mixing well after each addition. You do not need the mixture to be completely stuck together.`, section: SECTIONS.PREP_BATTER },
        { step: `Form 1 inch balls and place them in a baking dish an inch apart.`, section: SECTIONS.FORM_BALLS, img: balls2 },
        { step: `Bake until golden brown (about 14 to 16 minutes).`, section: SECTIONS.BAKE },
        { step: `Broil for 2 minutes to brown the tops, if the balls are not browned enough.`, section: SECTIONS.BROIL, img: balls3 },
        { step: `Drain on paper towels.`, section: SECTIONS.DRAIN },
        { step: `Enjoy this simple breakfast dish.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original recipe does not add any water but I found it difficult for the balls to stick together. So I recommend adding a little bit as needed.' },
        { note: 'The original recipe suggests baking at 400ºF for 10 to 12 minutes. It was not browning at 12 to 16 minutes, so I added the step to broil.' },
        { note: 'There was not much oil so the draining on paper towels might not be needed.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};