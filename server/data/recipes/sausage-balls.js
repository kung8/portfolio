// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { MIXING_BOWL, SAUSAGE, CHEDDAR_CHEESE, BISQUICK_BAKING_MIX, BAKING_PAN, OVEN } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Sausage Balls',
    name: 'Sausage Balls',
    img: '',
    recipeAuthors: ['Fauve'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
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
        { label: 'Sausage Balls', link: 'https://www.food.com/recipe/sausage-balls-46078' }
    ],
    separated: true,
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