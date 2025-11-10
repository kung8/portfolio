// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BROWN_SUGAR, CINNAMON, CORNSTARCH, GRANNY_SMITH_APPLE, LARGE_SKILLET, LEMON_JUICE, MILK, MIXING_BOWL, OVEN, REFRIGERATED_PUFF_PASTRY, UNSALTED_BUTTER, VANILLA_EXTRACT, WATER, POWDERED_SUGAR, FRYING_PAN, PARCHMENT_PAPER, SMALL_BOWL, FORK, STOVE } = require('./ingredients');

const APPLE_PRESERVATION = 'Apple Preservation';
const SUGAR_SPICE = 'Sugar & Spice';
const CORNSTARCH_SLURRY = 'Cornstarch Slurry';
const PUFF_PASTRY_SECTION = 'Puff Pastry';

module.exports = {
    wip: true,
    cardName: 'Apple Turnovers',
    name: 'Apple Turnovers',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.PASTRY],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Apple Turnovers',
            link: 'https://www.allrecipes.com/recipe/59124/apple-turnovers/',
            authors: ["Maureen O'Leary"],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: APPLE_PRESERVATION },
        { ...WATER, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: APPLE_PRESERVATION },
        { ...GRANNY_SMITH_APPLE, amount: 4, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'peeled, cored and sliced', section: APPLE_PRESERVATION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SUGAR_SPICE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_SPICE },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUGAR_SPICE },

        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CORNSTARCH_SLURRY },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CORNSTARCH_SLURRY },

        { ...REFRIGERATED_PUFF_PASTRY, amount: 17.3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thawed', section: PUFF_PASTRY_SECTION },

        { ...POWDERED_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.GLAZE },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.GLAZE },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.GLAZE },
    ],
    appliances: [
        { ...STOVE },
        { ...OVEN },
    ],
    supplies: [
        { ...MIXING_BOWL },
        { ...FRYING_PAN },
        { ...SMALL_BOWL, amount: 2 },
        { ...FORK },
        { ...BAKING_SHEET },
        { ...PARCHMENT_PAPER },
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${APPLE_PRESERVATION}" section ingredients.`, section: SECTIONS.COOK_FILLING },
        { step: `Over medium heat, melt butter in a frying pan.`, section: SECTIONS.COOK_FILLING },
        { step: `Drain apples.`, section: SECTIONS.COOK_FILLING },
        { step: `Add apples to the pan. Cook and stir for 2 minutes.`, section: SECTIONS.COOK_FILLING },
        { step: `Add the "${SUGAR_SPICE}" section ingredients. Cook and stir for 2 minutes.`, section: SECTIONS.COOK_FILLING },
        { step: `In a small bowl, combine the "${CORNSTARCH_SLURRY}" section ingredients.`, section: SECTIONS.COOK_FILLING },
        { step: `Add the cornstarch slurry to the pan. Cook until sauce has thickened (about 1 minute).`, section: SECTIONS.COOK_FILLING },
        { step: `Remove from heat.`, section: SECTIONS.COOK_FILLING },
        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with parchment paper.`, section: SECTIONS.PREP_PAN },
        { step: `Unfold puff pastry sheets. Trim excess dough so it is a square. Cut the square into 4 squares.`, section: SECTIONS.ASSEMBLE },
        { step: `Add apple filling to the center of each square.`, section: SECTIONS.ASSEMBLE },
        { step: `Fold corner to opposite corner to form a triangle.`, section: SECTIONS.ASSEMBLE },
        { step: `Press to seal and crimp with a fork.`, section: SECTIONS.ASSEMBLE },
        { step: `Place each turnover on baking sheet (about 1 inch apart).`, section: SECTIONS.ASSEMBLE },
        { step: `Bake until puffed and lightly browned (about 25 minutes).`, section: SECTIONS.BAKE },
        { step: `Let it cool completely before glazing.`, section: SECTIONS.COOL },
        { step: `In a small bowl, combine the "${SECTIONS.GLAZE}" section ingredients.`, section: SECTIONS.MAKE_GLAZE },
        { step: `Enjoy these turnovers with the glaze.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through and crust is golden brown (about 5 to 10 minutes).',
        },
    ],
    mealPrep: true,
};