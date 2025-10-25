const chicken1 = '../assets/Products/malaysian-lemon-chicken-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_SHEET,
    BONELESS_CHICKEN_THIGH,
    COOLING_RACK,
    CORNSTARCH,
    LARGE_BOWL,
    LEMON_JUICE,
    LIGHT_SOY_SAUCE,
    MEDIUM_BOWL,
    PAPER_TOWELS,
    SALT,
    SAUCEPAN,
    SESAME_SEEDS,
    SHAOXING_WINE,
    STOVE,
    TALL_NARROW_POT,
    VEGETABLE_OIL,
    WATER,
    WHITE_SUGAR,
} = require('./ingredients');

const DREDGING_STATION_SECTION = 'Dredging Station';

module.exports = {
    cardName: 'Lemon Chicken',
    name: 'Malaysian Lemon Chicken',
    img: chicken1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY, METHODS.MARINADE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.SESAME, ALLERGIES.WHEAT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { 
            label: 'Lemon Chicken', 
            link: 'https://rasamalaysia.com/lemon-chicken/',
            authors: ['Bee Yinn Low'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BONELESS_CHICKEN_THIGH, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into small pieces', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SHAOXING_WINE, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CORNSTARCH, amount: 5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...LEMON_JUICE, amount: 15, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 25, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 5, unit: INGREDIENT_UNITS.PINCH, additionalDetails: 'to taste', section: SECTIONS.SAUCE },

        { ...CORNSTARCH, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION_SECTION },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for deep-frying', section: SECTIONS.DEEP_FRY },

        { ...SESAME_SEEDS, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'topping', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        TALL_NARROW_POT,
        LARGE_BOWL,
        SAUCEPAN,
        MEDIUM_BOWL,
        BAKING_SHEET,
        COOLING_RACK,
        PAPER_TOWELS,
    ],
    directions: [
        { step: `In a large bowl, combine the "${SECTIONS.MARINADE}" section ingredients. Let it marinate for at least 30 minutes.`, section: SECTIONS.MAIN },
        { step: `In a sauce pan, combine the "${SECTIONS.SAUCE}" section ingredients. Set aside.`, section: SECTIONS.MAIN },
        { step: `In a medium bowl, mix the "${DREDGING_STATION_SECTION}" section ingredients.`, section: SECTIONS.MAIN },
        { step: 'Heat up a deep pot with vegetable oil over medium-high heat.', section: SECTIONS.MAIN },
        { step: 'Line a baking sheet with paper towels and place a cooling rack on top.', section: SECTIONS.MAIN },
        { step: 'Once the oil is hot, dredge the chicken in the flour mixture and shake off any excess. Then fry the chicken in the oil until golden brown (about 7 to 10 minutes).', section: SECTIONS.MAIN },
        { step: 'Remove the chicken from the oil and place on the cooling rack.', section: SECTIONS.MAIN },
        { step: 'Continue until all of the chicken is cooked.', section: SECTIONS.MAIN },
        { step: 'Heat the sauce over medium heat until it thickens. Serve over the chicken with rice.', section: SECTIONS.MAIN },
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
    mealPrep: true,
};