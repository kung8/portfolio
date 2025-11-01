// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BISQUICK_BAKING_MIX, CHEDDAR_CHEESE, MIXING_BOWL, OVEN, SAUSAGE } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Sausage Balls',
    name: 'Sausage Balls',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.FINGER_FOOD],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
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
        { ...SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'bulk', section: '' },
        { ...CHEDDAR_CHEESE, amount: 10, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'shredded', section: '' },
        { ...BISQUICK_BAKING_MIX, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
    ],
    directions: [
        { step: 'Allow the cheese and sausage to get to room temperature.', section: '' },
        { step: 'Preheat the oven to 400ºF.', section: '' },
        { step: 'In a mixing bowl, combine all the ingredients. It will be dry.', section: '' },
        { step: 'Roll the sausage mixture into 1 inch balls.', section: '' },
        { step: 'Place the balls in a baking dish an inch apart.', section: '' },
        { step: 'Bake until golden brown (about 10 to 12 minutes).', section: '' },
        { step: 'Drain on paper towels.', section: '' },
        { step: 'Enjoy this simple breakfast dish.', section: '' },
    ],
    notes: [
        { note: 'You will not add any water or milk to this recipe.' },
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