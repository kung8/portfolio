// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SHEET, BLACK_PEPPER, BOWL, BUTTERMILK, CAYENNE_PEPPER, CHICKEN_DRUMSTICKS, CHICKEN_THIGH, COOLING_RACK, DEEP_FRYER, GARLIC, LEMON, LEMON_ZEST, MIXING_BOWL, PAPER_TOWELS, PAPRIKA, ROSEMARY, SALT, SAUCEPAN, SEA_SALT, STOVE, VEGETABLE_OIL, WATER, YELLOW_ONION, ZIPLOC_BAG } = require('./ingredients');

const DREDGING_STATION_1 = 'Dredging Station 1';
const DREDGING_STATION_2 = 'Dredging Station 2';

const PREP_BRINE = 'Prep Brine';
const BRINE_CHICKEN = 'Brine Chicken';
const PREP_DREDGING_STATION = 'Prep Dredging Station';

module.exports = {
    wip: true,
    cardName: 'Buttermilk Fried Chicken',
    name: 'Rosemary Brined Buttermilk Fried Chicken',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.SOUTHERN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.MAIN_COURSE, TYPES.PROTEIN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 49, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Rosemary-Brined Buttermilk Fried Chicken',
            link: null,
            bookTitle: 'Genius Recipes',
            authors: ['Michael Ruhlman'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BRINE },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'thinly sliced', section: SECTIONS.BRINE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'smashed', section: SECTIONS.BRINE },
        { ...SALT, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BRINE },
        { ...ROSEMARY, amount: 6, unit: INGREDIENT_UNITS.BRANCH, additionalDetails: 'each about 4 to 5 inches long', section: SECTIONS.BRINE },
        { ...WATER, amount: 4.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BRINE },
        { ...LEMON, amount: 1, unit: '', additionalDetails: 'halved and seeded', section: SECTIONS.BRINE },

        { ...CHICKEN_DRUMSTICKS, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_THIGH, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION_1 },
        { ...BLACK_PEPPER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DREDGING_STATION_1 },
        { ...PAPRIKA, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DREDGING_STATION_1 },
        { ...SEA_SALT, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DREDGING_STATION_1 },
        { ...CAYENNE_PEPPER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DREDGING_STATION_1 },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DREDGING_STATION_1 },

        { ...BUTTERMILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION_2 },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.DEEP_FRY },

        { ...ROSEMARY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
        { ...LEMON_ZEST, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
        DEEP_FRYER,
    ],
    supplies: [
        SAUCEPAN,
        ZIPLOC_BAG,
        { ...MIXING_BOWL, amount: 2 },
        { ...BOWL, amount: 3 },
        { ...BAKING_SHEET, amount: 3 },
        PAPER_TOWELS,
        { ...COOLING_RACK, amount: 3 },
    ],
    directions: [
        // PREP BRINE for about 7 to 8 minutes (cook). CHILL for about 30 to 45 minutes (wait).
        { step: `Over medium-high heat, heat oil in a saucepan.`, section: PREP_BRINE },
        { step: `Add onion and garlic. Stir and cook for 30 seconds.`, section: PREP_BRINE },
        { step: `Add salt.`, section: PREP_BRINE },
        { step: `Saute until translucent (about 3 to 3 1/2 minutes).`, section: PREP_BRINE },
        { step: `Add rosemary. Cook until warmed (about 30 seconds).`, section: PREP_BRINE },
        { step: `Squeeze lemon juice into water. Add mixture and halved lemons.`, section: PREP_BRINE },
        { step: `Bring to a simmer.`, section: PREP_BRINE },
        { step: `Remove from heat and let cool.`, section: PREP_BRINE },
        { step: `Refrigerate until chilled.`, section: PREP_BRINE },

        // BRINE CHICKEN for about 24 hours (wait) and 5 minutes (prep)
        { step: `Place chicken in ziploc bag.`, section: BRINE_CHICKEN },
        { step: `Place ziploc bag inside a large mixing bowl.`, section: BRINE_CHICKEN },
        { step: `Carefully pour the chilled brine into the bag.`, section: BRINE_CHICKEN },
        { step: `Remove as much air from the bag and seal.`, section: BRINE_CHICKEN },
        { step: `Refrigerate for at least 8 hours (up to 24 hours). Occasionally agitate the bag.`, section: BRINE_CHICKEN },

        // PREP CHICKEN for about 1 day (wait) and 12 minutes (prep)
        { step: `Place some paper towels on a baking sheet and place a wire rack on top.`, section: SECTIONS.PREP_CHICKEN },
        { step: `In the sink, transfer the chicken from the ziploc bag into the mixing bowl without the brine.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Rinse the chicken under cold water.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Pat dry.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Place chicken on rack.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Refrigerate uncovered for a day if possible (up to 3 days) to dry out skin.`, section: SECTIONS.PREP_CHICKEN },

        // PREP DREDGING STATION for about 5 minutes (prep)
        { step: `In a bowl, combine the "${DREDGING_STATION_1}" section ingredients.`, section: PREP_DREDGING_STATION },
        { step: `Divide the mixture evenly between two bowls.`, section: PREP_DREDGING_STATION },
        { step: `In a third bowl, pour buttermilk.`, section: PREP_DREDGING_STATION },

        // DREDGE and DEEP FRY CHICKEN for about 30 minutes (prep) and 12 to 15 minutes per batch (cook)
        { step: `Place some paper towels on a baking sheet and place a wire rack on top.`, section: SECTIONS.DREDGE },
        { step: `Dredge chicken in seasoning. Shake off excess and place on rack.`, section: SECTIONS.DREDGE },
        { step: `Dredge in buttermilk and then in the second bowl of seasoning. Return to rack.`, section: SECTIONS.DREDGE },

        { step: `Prepare a dripping station by placing paper towels on another clean baking sheet and place a wire rack on top.`, section: SECTIONS.DEEP_FRY },
        { step: `Heat oil to 350ºF in a deep fryer or pot over a stove.`, section: SECTIONS.DEEP_FRY },
        { step: `Cook chicken in batches, occasionally flipping, until golden brown and cooked through (about 12 to 15 minutes).`, section: SECTIONS.DEEP_FRY },
        { step: `Transfer the cooked chicken to the dripping station.`, section: SECTIONS.DEEP_FRY },

        // SERVE for about 5 to 10 minutes (wait) and 2 minutes (prep)
        { step: `Let them rest for 5 to 10 minutes before serving.`, section: SECTIONS.COOL },
        { step: `Enjoy this topped with lemon zest and toasted sprigs of rosemary.`, section: SECTIONS.SERVE },
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
            instruction: 'Bake at 350ºF until warmed through (about 15 to 20 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until warmed through (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};