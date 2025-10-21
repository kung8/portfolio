// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, ALUMINUM_FOIL, BAKING_PAN, BAKING_SHEET, BLENDER, BROWN_SUGAR, CARDAMOM, CINNAMON, CORNSTARCH, GRANNY_SMITH_APPLE, HONEY_CRISP_APPLE, LEMON_JUICE, MAPLE_SYRUP, NUTMEG, OVEN, PEPITAS, ROLLED_OATS, SALT, UNSALTED_BUTTER, VANILLA_EXTRACT, VANILLA_ICE_CREAM, WHITE_SUGAR } = require('./ingredients');

const APPLE_FILLING_SECTION = 'Apple Filling';
const OAT_TOPPING_SECTION_PART_1 = 'Oat Topping Part 1';
const OAT_TOPPING_SECTION_PART_2 = 'Oat Topping Part 2';
const OAT_TOPPING_SECTION_PART_3 = 'Oat Topping Part 3';

const PREP_APPLE_FILLING = 'Prep Apple Filling';
const COOK_OAT_TOPPING = 'Cook Oat Topping';
const BAKE_APPLE_FILLING = 'Bake Apple Filling';

module.exports = {
    wip: true,
    cardName: 'Deconstructed Apple Crisp',
    name: 'Deconstructed Apple Crisp',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 80, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Deconstructed Apple Crisp', 
            link: 'https://zestfulkitchen.com/deconstructed-apple-crisp/',
            author: ['Lauren Grant'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...HONEY_CRISP_APPLE, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...GRANNY_SMITH_APPLE, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...BROWN_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...MAPLE_SYRUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...NUTMEG, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...CARDAMOM, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: APPLE_FILLING_SECTION },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: APPLE_FILLING_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...ROLLED_OATS, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...BROWN_SUGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...NUTMEG, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...CARDAMOM, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_1 },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_2 },
        { ...PEPITAS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_2 },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_2 },
        { ...PEPITAS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: OAT_TOPPING_SECTION_PART_3 },

        { ...VANILLA_ICE_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        OVEN,
        BLENDER,
    ],
    supplies: [
        BAKING_PAN,
        ALUMINUM_FOIL,
        BAKING_SHEET,
    ],
    directions: [
        { step: 'Set oven racks to the lowest and the middle positions.', section: PREP_APPLE_FILLING },
        { step: 'Preheat the oven to 350ºF.', section: PREP_APPLE_FILLING },
        { step: 'In a baking dish, combine cornstarch and lemon juice.', section: PREP_APPLE_FILLING },
        { step: `Add the rest of the "${APPLE_FILLING_SECTION}" section ingredients.`, section: PREP_APPLE_FILLING },
        { step: 'Cover with foil.', section: PREP_APPLE_FILLING },
        { step: 'Set aside.', section: PREP_APPLE_FILLING },

        { step: 'Line a baking sheet with aluminum foil.', section: COOK_OAT_TOPPING },
        { step: `In a blender, combine the "${OAT_TOPPING_SECTION_PART_1}" section ingredients. Blend until the oats are partially chopped.`, section: COOK_OAT_TOPPING },
        { step: `Add "${OAT_TOPPING_SECTION_PART_2}" section ingredients.`, section: COOK_OAT_TOPPING },
        { step: 'Pulse until clumps form (about 30 seconds). Scrape down sides as needed.', section: COOK_OAT_TOPPING },
        { step: `Add the "${OAT_TOPPING_SECTION_PART_3}" section ingredients. Pulse until combined.`, section: COOK_OAT_TOPPING },
        { step: 'Pack into a ball.', section: COOK_OAT_TOPPING },
        { step: 'Break into 1/2 inch chunks and place on baking sheet in a single layer.', section: COOK_OAT_TOPPING },
        { step: 'Place baking sheet on middle rack.', section: COOK_OAT_TOPPING },
        { step: 'Bake about 12 to 15 minutes. Rotate pan. Bake until browned and crispy (another 12 to 15 minutes).', section: COOK_OAT_TOPPING },

        { step: 'Place the apple filling on lower rack.', section: BAKE_APPLE_FILLING },
        { step: 'Bake apple filling with foil for 40 minutes.', section: BAKE_APPLE_FILLING },
        { step: 'Remove foil. Stir apples.', section: BAKE_APPLE_FILLING },
        { step: 'Increase heat to 375ºF. Bake until juices are bubbly and thick and apples are tender (about 40 minutes).', section: BAKE_APPLE_FILLING },

        { step: 'Serve filling and topping either together or separately. Enjoy this a la mode, if you want to experience happiness, or just as is.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through, about 10 to 15 minutes.',
        },
    ],
    mealPrep: true,
};