const turnover1 = '../assets/Products/apple-turnover-1.jpeg';
const turnover2 = '../assets/Products/apple-turnover-2.jpeg';
const turnover3 = '../assets/Products/apple-turnover-3.jpeg';
const turnover4 = '../assets/Products/apple-turnover-4.jpeg';
const turnover5 = '../assets/Products/apple-turnover-5.jpeg';
const turnover6 = '../assets/Products/apple-turnover-6.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BROWN_SUGAR, CINNAMON, CORNSTARCH, FORK, FRYING_PAN, GRANNY_SMITH_APPLE, LEMON_JUICE, MILK, MIXING_BOWL, OVEN, PARCHMENT_PAPER, POWDERED_SUGAR, REFRIGERATED_PUFF_PASTRY, SMALL_BOWL, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT, WATER } = require('./ingredients');

const APPLE_PRESERVATION = 'Apple Preservation';
const SUGAR_SPICE = 'Sugar & Spice';
const CORNSTARCH_SLURRY = 'Cornstarch Slurry';
const PUFF_PASTRY_SECTION = 'Puff Pastry';

const THAW_PUFF_PASTRY = 'Thaw Puff Pastry';

module.exports = {
    cardName: 'Apple Turnovers',
    name: 'Apple Turnovers',
    img: turnover6,
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.PASTRY],
    yields: { amount: 16, unit: YIELD_UNITS.SERVING },
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
        { ...GRANNY_SMITH_APPLE, amount: 4, unit: '', additionalDetails: 'peeled, cored and sliced', section: APPLE_PRESERVATION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SUGAR_SPICE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_SPICE },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUGAR_SPICE },

        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CORNSTARCH_SLURRY },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CORNSTARCH_SLURRY },

        { ...REFRIGERATED_PUFF_PASTRY, amount: 34.6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thawed', section: PUFF_PASTRY_SECTION },

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
        { step: `Take out the puff pastry from to freezer to thaw at room temperature.`, section: THAW_PUFF_PASTRY },

        { step: `In a mixing bowl, combine the "${APPLE_PRESERVATION}" section ingredients.`, section: SECTIONS.COOK_FILLING, img: turnover1 },
        { step: `Over medium heat, melt butter in a frying pan.`, section: SECTIONS.COOK_FILLING },
        { step: `Drain apples.`, section: SECTIONS.COOK_FILLING },
        { step: `Add apples to the pan. Cook and stir for 2 minutes.`, section: SECTIONS.COOK_FILLING },
        { step: `Add the "${SUGAR_SPICE}" section ingredients. Cook and stir for 2 minutes.`, section: SECTIONS.COOK_FILLING },
        { step: `In a small bowl, combine the "${CORNSTARCH_SLURRY}" section ingredients.`, section: SECTIONS.COOK_FILLING },
        { step: `Add the cornstarch slurry to the pan. Cook until sauce has thickened (about 1 minute).`, section: SECTIONS.COOK_FILLING, img: turnover2 },
        { step: `Remove from heat.`, section: SECTIONS.COOK_FILLING },

        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Line a baking sheet with parchment paper.`, section: SECTIONS.PREP_PAN },

        { step: `Unfold puff pastry sheets on baking sheet. Cut each into 4 squares.`, section: SECTIONS.ASSEMBLE },
        { step: `Add apple filling in the center of each square.`, section: SECTIONS.ASSEMBLE, img: turnover3 },
        { step: `Fold corner to opposite corner to form a triangle.`, section: SECTIONS.ASSEMBLE },
        { step: `Press to seal and crimp with a fork.`, section: SECTIONS.ASSEMBLE },
        { step: `Arrange turnovers about 1 inch apart.`, section: SECTIONS.ASSEMBLE, img: turnover4 },

        { step: `Bake until puffed and lightly browned (about 25 minutes).`, section: SECTIONS.BAKE, img: turnover5 },

        { step: `Let it cool completely before glazing.`, section: SECTIONS.COOL },

        { step: `In a small bowl, combine the "${SECTIONS.GLAZE}" section ingredients.`, section: SECTIONS.MAKE_GLAZE },

        { step: `Enjoy these turnovers with the glaze.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `The original recipe says it yields 8 but the filling was actually enough to make 16 since I didn't want to overfill the apple turnovers.` },
        { note: `Thawing the puff pastry properly is important to prevent cracking when folding and allowing for it to stick better. Let it sit at room temperature for about 15-20 minutes after taking it out of the freezer.` },
        { note: `I found using a fork to drizzle the glaze over the turnovers worked perfectly.` },
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