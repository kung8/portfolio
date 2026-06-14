// const example = '../assets/Products/example.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, CHICKEN_BREAST, COOLING_RACK, CURRY_POWDER, DEEP_FRYER_OR_STOVE, FORK, FRYING_PAN, LIGHT_SOY_SAUCE, MIXING_BOWL, PAPER_TOWELS, POTATO, ROLLING_PIN, SALT, SAUCEPAN, STOVE, SWEET_POTATO, VEGETABLE_OIL, WATER, WHITE_PEPPER, WHITE_SUGAR, YELLOW_ONION } = require('./ingredients');

const DRY_LARGE_PASTRY = 'Dry Large Pastry';
const WET_LARGE_PASTRY = 'Wet Large Pastry';
const SMALL_PASTRY = 'Small Pastry';
const ASSEMBLE_CURRY_PUFF = 'Assemble Curry Puff';

const PREP_LARGE_PASTRY = 'Prep Large Pastry';
const PREP_SMALL_PASTRY = 'Prep Small Pastry';

module.exports = {
    wip: true,
    cardName: 'Curry Puff',
    name: 'Curry Puff',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.ASIAN, GENRES.MALAYSIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PASTRY],
    yields: { amount: 20, unit: YIELD_UNITS.EACH },
    prepTime: { amount: 60, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Curry Puff',
            link: 'https://www.lionbrand.com.au/recipes/thai-curry-puff-recipe-karipap/',
            authors: ['Warattaya Smith'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...POTATO, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...SWEET_POTATO, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.FILLING },

        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'finely chopped', section: SECTIONS.FILLING },
        { ...CHICKEN_BREAST, amount: 9, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: SECTIONS.FILLING },
        
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CURRY_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },

        { ...ALL_PURPOSE_FLOUR, amount: 13 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_LARGE_PASTRY },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DRY_LARGE_PASTRY },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_LARGE_PASTRY },
        { ...VEGETABLE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: WET_LARGE_PASTRY },
        { ...WATER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: WET_LARGE_PASTRY },

        { ...ALL_PURPOSE_FLOUR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SMALL_PASTRY },
        { ...VEGETABLE_OIL, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SMALL_PASTRY },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for deep frying', section: SECTIONS.DEEP_FRY },
    ],
    appliances: [
        STOVE,
        DEEP_FRYER_OR_STOVE,
    ],
    supplies: [
        SAUCEPAN,
        FRYING_PAN,
        { ...MIXING_BOWL, amount: 2 },
        ROLLING_PIN,
        FORK,
        BAKING_SHEET,
        COOLING_RACK,
        PAPER_TOWELS,
    ],
    directions: [
        { step: `Over medium heat, boil the diced potatoes until soften but not too soft.`, section: SECTIONS.COOK_FILLING },
        { step: `Over medium heat, heat oil in a frying pan.`, section: SECTIONS.COOK_FILLING },
        { step: `Add onion. Cook until soft (about 3 to 4 minutes).`, section: SECTIONS.COOK_FILLING },
        { step: `Add chicken. Cook for 2 minutes.`, section: SECTIONS.COOK_FILLING },
        { step: `Add potato and sweet potato. Stir.`, section: SECTIONS.COOK_FILLING },
        { step: `Add the rest of the "${SECTIONS.FILLING}" section ingredients. Stir.`, section: SECTIONS.COOK_FILLING },
        { step: `Cook and stir until the filling is mostly dry.`, section: SECTIONS.COOK_FILLING },
        { step: `Let it completely cool.`, section: SECTIONS.COOK_FILLING },

        { step: `In a mixing bowl, combine the "${DRY_LARGE_PASTRY}" section ingredients.`, section: PREP_LARGE_PASTRY },
        { step: `Add "${WET_LARGE_PASTRY}" section ingredients.`, section: PREP_LARGE_PASTRY },
        { step: `Knead until dough is no longer sticky.`, section: PREP_LARGE_PASTRY },
        { step: `Wrap in plastic wrap and rest for 20 minutes.`, section: PREP_LARGE_PASTRY },

        { step: `In another mixing bowl, combine the "${SMALL_PASTRY}" ingredients.`, section: PREP_SMALL_PASTRY },
        { step: `Knead until smooth.`, section: PREP_SMALL_PASTRY },

        { step: `Roll out the large dough into a sheet.`, section: ASSEMBLE_CURRY_PUFF },
        { step: `Wrap the large dough around the small dough.`, section: ASSEMBLE_CURRY_PUFF },
        { step: `Roll into a long sheet. Roll it tight like a cinnamon roll.`, section: ASSEMBLE_CURRY_PUFF },
        { step: `Roll it out again and roll it tight like a cinnamon roll.`, section: ASSEMBLE_CURRY_PUFF },
        { step: `Cut into 3 sections. Covered dough while not working with it so they do not dry out.`, section: ASSEMBLE_CURRY_PUFF },
        { step: `Slice dough you are working with into desired size. Roll each piece into a disc.`, section: ASSEMBLE_CURRY_PUFF },
        { step: `Add 1 to 2 Tbsp of filling to each disc.`, section: ASSEMBLE_CURRY_PUFF },
        { step: `Fold in half. Crimp the edge to seal with a fork.`, section: ASSEMBLE_CURRY_PUFF },

        { step: `Line a baking sheet with paper towels and place a wire rack on top.`, section: SECTIONS.DEEP_FRY },
        { step: `Heat oil in either a deep fryer or in a pot over the stove until it reaches 350ºF.`, section: SECTIONS.DEEP_FRY },
        { step: `Deep fry in batches until golden brown.`, section: SECTIONS.DEEP_FRY },
        { step: `Transfer to the drip station.`, section: SECTIONS.DEEP_FRY },

        { step: `Serve warm and enjoy.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: `Line container with paper towels to help absorb moisture.`
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.LOOSELY_COVERED,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until hot and crispy (about 5 to 8 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until hot and crispy (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};