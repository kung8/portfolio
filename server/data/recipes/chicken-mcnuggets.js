const mcnuggets1 = '../assets/Products/chicken-mcnuggets-1.jpeg';
const mcnuggets2 = '../assets/Products/chicken-mcnuggets-2.jpeg';
const mcnuggets3 = '../assets/Products/chicken-mcnuggets-3.jpeg';
const mcnuggets4 = '../assets/Products/chicken-mcnuggets-4.jpeg';
const mcnuggets5 = '../assets/Products/chicken-mcnuggets-5.jpeg';
const mcnuggets6 = '../assets/Products/chicken-mcnuggets-6.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { GROUND_CHICKEN, SALT, WHITE_SUGAR, ALL_PURPOSE_FLOUR, WHITE_PEPPER, CELERY_POWDER, CORNSTARCH, BAKING_POWDER, BAKING_SODA, EGG, ROOM_TEMPERATURE_WATER, VEGETABLE_OIL, WATER } = require('./ingredients');

const FLOUR_DREDGING_STATION = 'Flour Dredging Station';
const WET_BATTER_STATION = 'Wet Batter Station';
const TEMPURA_BATTER_STATION = 'Tempura Batter Station';

module.exports = {
    wip: true,
    cardName: 'Chicken McNuggets',
    name: 'Chicken McNuggets',
    img: mcnuggets6,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chicken McNuggets', link: 'https://www.joshuaweissman.com/post/mcdonald-s-mcnuggets-but-better' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_CHICKEN, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...ROOM_TEMPERATURE_WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_BATTER_STATION },
        { ...CORNSTARCH, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_BATTER_STATION },

        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGING_STATION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FLOUR_DREDGING_STATION },
        { ...WHITE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_DREDGING_STATION },
        { ...CELERY_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_DREDGING_STATION },

        { ...CORNSTARCH, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: TEMPURA_BATTER_STATION },
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: TEMPURA_BATTER_STATION },
        { ...BAKING_POWDER, amount: 5 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: TEMPURA_BATTER_STATION },
        { ...BAKING_SODA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: TEMPURA_BATTER_STATION },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: TEMPURA_BATTER_STATION },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: TEMPURA_BATTER_STATION },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: SECTIONS.DEEP_FRY },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: '3 shallow bowls' },
        { name: 'pot' },
        { name: 'wire cooling rack' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'spider strainer' },
    ],
    directions: [
        { step: 'Chop up the chicken breast until the chicken is grounded (or you can use ground chicken).', section: SECTIONS.CHICKEN },
        { step: `In a mixing bowl, combine the "${SECTIONS.CHICKEN}" section ingredients.`, section: SECTIONS.CHICKEN },
        { step: 'Form the ground chicken into McNugget shapes.', section: SECTIONS.CHICKEN, img: mcnuggets1 },
        { step: 'Over medium-high heat, heat up 2 to 3 inches of oil in a pot.', section: SECTIONS.DEEP_FRY },
        { step: 'Prepare the 3 dredging stations in shallow bowls. Set up the station in order: "Wet", "Flour", and "Tempura".', section: SECTIONS.DEEP_FRY, img: [mcnuggets2, mcnuggets3, mcnuggets4] },
        { step: 'The frying oil should be between 350ºF and 375ºF before frying. This allows for the chicken to crisp up without burning before the inside is cooked through. If the oil is not hot enough, it will take longer for the chicken to cook through and would soak up more oil instead.', section: SECTIONS.DEEP_FRY },
        { step: 'Line some paper towels on a large baking sheet and place a wire cooling rack on top.', section: SECTIONS.DEEP_FRY },
        { step: 'Once the oil is in the correct temperature range, begin dredging the chicken McNuggets. Shake off excess flour before adding it to the tempura station.', section: SECTIONS.DEEP_FRY },
        { step: 'Carefully place the chicken McNuggets into the oil and let batter covered fingers fall on the McNuggets to create the flakes. Avoid crowding the pot.', section: SECTIONS.DEEP_FRY },
        { step: 'Fry for 5 to 7 minutes.', section: SECTIONS.DEEP_FRY, img: mcnuggets5 },
        { step: 'Remove the cooked McNugget using a spider strainer.', section: SECTIONS.DEEP_FRY },
        { step: 'Place the cooked chicken McNuggets on the prepared cooling rack to drain.', section: SECTIONS.DEEP_FRY },
        { step: 'Enjoy these McNuggets with your favorite sauces.', section: SECTIONS.SERVE },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};