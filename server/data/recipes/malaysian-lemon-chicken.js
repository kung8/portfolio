const lemonChicken = '../assets/Products/lemon-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const {
    BONELESS_CHICKEN_THIGH,
    LIGHT_SOY_SAUCE,
    SHAOXING_WINE,
    CORNSTARCH,
    ALL_PURPOSE_FLOUR,
    VEGETABLE_OIL,
    LEMON_JUICE,
    WHITE_SUGAR,
    SALT,
    SESAME_SEEDS,
    WATER,
} = require('./ingredients');

const DREDGING_STATION_SECTION = 'Dredging Station';
const DEEP_FRYING_SECTION = 'Deep Frying';

module.exports = {
    cardName: 'Lemon Chicken',
    name: 'Malaysian Lemon Chicken',
    img: lemonChicken,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY, METHODS.MARINADE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Lemon Chicken', link: 'https://rasamalaysia.com/lemon-chicken/' }
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

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for deep-frying', section: DEEP_FRYING_SECTION },

        { ...SESAME_SEEDS, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'topping', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'deep pot' },
        { name: 'large bowl' },
        { name: 'sauce pan' },
        { name: 'medium bowl' },
        { name: 'baking sheet' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: 'In a large bowl, combine the "Marinade" section ingredients. Let it marinate for at least 30 minutes.', section: SECTIONS.MAIN },
        { step: 'In a sauce pan, combine the "Sauce" section ingredients. Set aside.', section: SECTIONS.MAIN },
        { step: 'In a medium bowl, mix the "Dredging Station" section ingredients.', section: SECTIONS.MAIN },
        { step: 'Heat up a deep pot with vegetable oil over medium-high heat.', section: SECTIONS.MAIN },
        { step: 'Line a baking sheet with paper towels and place a cooling rack on top.', section: SECTIONS.MAIN },
        { step: 'Once the oil is hot, dredge the chicken in the flour mixture and shake off any excess. Then fry the chicken in the oil until golden brown (about 7 to 10 minutes).', section: SECTIONS.MAIN },
        { step: 'Remove the chicken from the oil and place on the cooling rack.', section: SECTIONS.MAIN },
        { step: 'Continue until all of the chicken is cooked.', section: SECTIONS.MAIN },
        { step: 'Heat the sauce over medium heat until it thickens. Serve over the chicken with rice.', section: SECTIONS.MAIN },
    ]
};