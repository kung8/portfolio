const marinating = '../assets/Products/korean-fried-chicken-marinating.jpeg';
const dredging = '../assets/Products/korean-fried-chicken-dredging-station.jpeg';
const oil = '../assets/Products/korean-fried-chicken-frying-in-oil.jpeg';
const fullSet = '../assets/Products/korean-fried-chicken-full-set.jpeg';
const drip = '../assets/Products/korean-fried-chicken-oil-drip-station.jpeg';
const sauce = '../assets/Products/korean-fried-chicken-raw-sauce.jpeg';
const rice = '../assets/Products/korean-fried-chicken-with-rice.jpeg';
const chicken = '../assets/Products/korean-fried-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    BAKING_SHEET,
    ALL_PURPOSE_FLOUR,
    BAKING_POWDER,
    CHICKEN_THIGH,
    CORNSTARCH,
    GARLIC,
    GINGER,
    GOCHUJANG_SAUCE,
    HOISIN_SAUCE,
    HONEY,
    KETCHUP,
    LIGHT_SOY_SAUCE,
    MIRIN,
    RICE_WINE_VINEGAR,
    SALT,
    SESAME_OIL,
    STRAWBERRY_JAM,
    THAI_CHILI_PEPPER,
    VEGETABLE_OIL,
    WHITE_SUGAR,
    WATER,
    STOVE,
    LARGE_BOWL,
    MEDIUM_BOWL,
    LARGE_POT,
    COOLING_RACK,
    PAPER_TOWELS
} = require('./ingredients');

const SWEET_AND_TANGY_SAUCE = 'Sweet and Tangy Sauce';
const SWEET_AND_SPICY_SAUCE = 'Sweet and Spicy Sauce';

module.exports = {
    cardName: 'Korean Fried Chicken',
    name: 'Korean Fried Chicken',
    img: chicken,
    recipeAuthors: ['Hyosun'],
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.KOREAN, GENRES.ASIAN],
    method: [METHODS.MARINADE, METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Korean Fried Chicken', link: 'https://www.koreanbapsang.com/yangnyeom-chicken-korean-fried-chicken/' }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 2 - 2.5" pieces', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...GINGER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'grated', section: SECTIONS.MARINADE },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...MIRIN, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: SECTIONS.MAIN },

        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_RUB },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_RUB },

        { ...WATER, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.WET_RUB },
        { ...CORNSTARCH, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_RUB },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_RUB },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.WET_RUB },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_RUB },

        { ...HONEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SWEET_AND_TANGY_SAUCE },
        { ...GINGER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'grated', section: SWEET_AND_TANGY_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...HOISIN_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },

        { ...GOCHUJANG_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...STRAWBERRY_JAM, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'seedless', section: SWEET_AND_SPICY_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...WATER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SWEET_AND_SPICY_SAUCE },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SWEET_AND_SPICY_SAUCE },
        { ...GINGER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'grated', section: SWEET_AND_SPICY_SAUCE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...THAI_CHILI_PEPPER, amount: 2, unit: '', additionalDetails: 'optional and minced', section: SWEET_AND_SPICY_SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_BOWL,
        MEDIUM_BOWL,
        { ...LARGE_BOWL, additionalDetails: 'for wet rub' },
        LARGE_POT,
        BAKING_SHEET,
        COOLING_RACK,
        PAPER_TOWELS,
    ],
    directions: [
        { step: 'In a large bowl, combine the chicken thighs with the garlic, ginger, sea salt, and mirin.', section: SECTIONS.MARINADE, img: marinating },
        { step: 'Let it marinate for at least 1 hour.', section: SECTIONS.MARINADE },

        { step: 'In a medium bowl, mix the dry rub ingredients together then coat each chicken thigh.', section: SECTIONS.DRY_RUB },

        { step: 'In a large bowl, mix water, the 1 1/4 cup cornstarch, flour and baking powder.', section: SECTIONS.WET_RUB },
        { step: 'Fill a medium bowl with the 2 cups of cornstarch.', section: SECTIONS.WET_RUB },
        { step: 'Before you dip the chicken into the wet batter get the frying oil ready.', section: SECTIONS.WET_RUB },
        { step: 'Dip the chicken into the wet batter and then into the cornstarch station, then fry.', section: SECTIONS.WET_RUB, img: dredging },

        { step: 'Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels. Note the stacking order matters because placing the paper towels on top of the cooling rack creates steam beneath the fried chicken making it soggy and not crispy.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, heat a pot of about 2 inches of oil.', section: SECTIONS.MAIN },
        { step: 'Once the oil is hot, about 345ºF, add the chicken into the oil and fry for 3 - 4 minutes. Cook in batches and avoid crowding the pot.', section: SECTIONS.MAIN, img: oil },
        { step: 'Place the fried chicken on the cooling rack.', section: SECTIONS.MAIN, img: drip },
        { step: 'Continue cooking the rest of the chicken in batches.', section: SECTIONS.MAIN },
        { step: 'Increase the heat to medium-high, about 375ºF, and repeat the second fry. Chicken should be golden brown and crunchy.', section: SECTIONS.MAIN },
        { step: 'Enjoy by itself or coat with the hot sauce.', section: SECTIONS.SERVE, img: fullSet },

        { step: 'In a sauce pan over medium-high heat, add all the ingredients for the respective sauce and bring to a boil.', section: SECTIONS.SAUCE, img: sauce },
        { step: 'Once it boils, reduce the heat and cook for another 2 - 3 minutes.', section: SECTIONS.SAUCE },
        { step: 'If the sauce is too thick, add a teaspoon of water at a time to thin it out.', section: SECTIONS.SAUCE },

        { step: 'While sauce is hot, drizzle onto the chicken and serve with rice.', section: SECTIONS.SERVE, img: rice },
    ],
    notes: [
        { note: 'Be sure the oil is hot enough or else the chicken/batter will just soak in the oil and will not get browned.' }
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