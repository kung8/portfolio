const crisp1 = '../assets/Products/deconstructed-apple-crisp-1.jpeg';
const crisp2 = '../assets/Products/deconstructed-apple-crisp-2.jpeg';
const crisp3 = '../assets/Products/deconstructed-apple-crisp-3.jpeg';
const crisp4 = '../assets/Products/deconstructed-apple-crisp-4.jpeg';
const crisp5 = '../assets/Products/deconstructed-apple-crisp-5.jpeg';
const crisp6 = '../assets/Products/deconstructed-apple-crisp-6.jpeg';
const crisp7 = '../assets/Products/deconstructed-apple-crisp-7.jpeg';
const crisp8 = '../assets/Products/deconstructed-apple-crisp-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, ALUMINUM_FOIL, BAKING_PAN, BAKING_SHEET, BLENDER, BROWN_SUGAR, CARDAMOM, CINNAMON, CORNSTARCH, GRANNY_SMITH_APPLE, HONEY_CRISP_APPLE, LEMON_JUICE, MAPLE_SYRUP, NUTMEG, OVEN, PEPITAS, ROLLED_OATS, SALT, UNSALTED_BUTTER, VANILLA_EXTRACT, VANILLA_ICE_CREAM, WHITE_SUGAR } = require('./ingredients');

const OAT_TOPPING_SECTION_PART_1 = 'Oat Topping Part 1';
const OAT_TOPPING_SECTION_PART_2 = 'Oat Topping Part 2';
const OAT_TOPPING_SECTION_PART_3 = 'Oat Topping Part 3';
const COOK_OAT_TOPPING = 'Cook Oat Topping';

module.exports = {
    cardName: 'Deconstructed Apple Crisp',
    name: 'Deconstructed Apple Crisp',
    img: crisp8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 80, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Deconstructed Apple Crisp',
            link: 'https://zestfulkitchen.com/deconstructed-apple-crisp/',
            authors: ['Lauren Grant'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...HONEY_CRISP_APPLE, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled, cored and 1/2 inch slices', section: SECTIONS.FILLING },
        { ...GRANNY_SMITH_APPLE, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled, cored and 1/2 inch slices', section: SECTIONS.FILLING },
        { ...BROWN_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...MAPLE_SYRUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...NUTMEG, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CARDAMOM, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },

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
        { step: `Set oven racks to the lowest and the middle positions.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `In a baking dish, combine cornstarch and lemon juice.`, section: SECTIONS.PREP_FILLING },
        { step: `Add the rest of the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING, img: crisp1 },
        { step: `Cover with foil.`, section: SECTIONS.PREP_FILLING },
        { step: `Set aside.`, section: SECTIONS.PREP_FILLING },

        { step: `Line a baking sheet with aluminum foil.`, section: COOK_OAT_TOPPING },
        { step: `In a blender, combine the "${OAT_TOPPING_SECTION_PART_1}" section ingredients. Blend until the oats are partially chopped.`, section: COOK_OAT_TOPPING, img: crisp2 },
        { step: `Add "${OAT_TOPPING_SECTION_PART_2}" section ingredients.`, section: COOK_OAT_TOPPING, img: crisp3 },
        { step: `Pulse until clumps form (about 30 seconds). Scrape down sides as needed.`, section: COOK_OAT_TOPPING },
        { step: `Add the "${OAT_TOPPING_SECTION_PART_3}" section ingredients. Pulse until combined.`, section: COOK_OAT_TOPPING, img: crisp4 },
        { step: `Break into 1/2 inch chunks and place on baking sheet in a single layer.`, section: COOK_OAT_TOPPING, img: crisp5 },
        { step: `Place baking sheet on middle rack.`, section: COOK_OAT_TOPPING },
        { step: `Bake about 12 to 15 minutes. Rotate pan. Bake until browned and crispy (another 12 to 15 minutes).`, section: COOK_OAT_TOPPING, img: crisp6 },

        { step: `Place the apple filling on lower rack.`, section: SECTIONS.BAKE },
        { step: `Bake apple filling with foil for 40 minutes.`, section: SECTIONS.BAKE },
        { step: `Remove foil. Stir apples.`, section: SECTIONS.BAKE },
        { step: `Increase heat to 375ºF. Bake until juices are bubbly and thick and apples are tender (about 40 minutes).`, section: SECTIONS.BAKE, img: crisp7 },

        { step: `Serve filling and topping either together or separately. Enjoy this a la mode, if you want to experience happiness, or just as is.`, section: SECTIONS.SERVE },
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