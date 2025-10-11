const karaage1 = '../assets/Products/karaage-1.jpeg';
const karaage2 = '../assets/Products/karaage-2.jpeg';
const karaage3 = '../assets/Products/karaage-3.jpeg';
const karaage4 = '../assets/Products/karaage-4.jpeg';
const karaage5 = '../assets/Products/karaage-5.jpeg';
const karaage6 = '../assets/Products/karaage-6.jpeg';
const karaage7 = '../assets/Products/karaage-7.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_THIGH, COOKING_THERMOMETER, COOLING_RACK, EGG, GARLIC, GINGER, KEWPIE_MAYONNAISE, LARGE_POT, LEMON, LIGHT_SOY_SAUCE, MIRIN, MIXING_BOWL, PAPER_TOWELS, POTATO_STARCH, SALT, STOVE, VEGETABLE_OIL, WATER } = require('./ingredients');

const ZAKU_ZAKU_BREADCRUMBS = 'Zaku Zaku Breadcrumbs';

const MAKE_ZAKU_ZAKU_BREADCRUMBS = 'Make Zaku Zaku Breadcrumbs';
const PREP_DEEP_FRY = 'Prep Deep Fry';
const DREDGE_CHICKEN = 'Dredge Chicken';
const FIRST_DEEP_FRY = 'First Deep Fry';
const SECOND_DEEP_FRY = 'Second Deep Fry';

module.exports = {
    cardName: 'Karaage',
    name: 'Karaage',
    img: karaage7,
    recipeAuthors: ['Kurashiru'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Karaage', link: 'https://www.youtube.com/watch?feature=shared&v=COAX5gkZZ74' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 2 inch pieces against the grain', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...MIRIN, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced with juice', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: SECTIONS.MARINADE },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...POTATO_STARCH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ZAKU_ZAKU_BREADCRUMBS },
        { ...WATER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: ZAKU_ZAKU_BREADCRUMBS },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: SECTIONS.DEEP_FRY },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...KEWPIE_MAYONNAISE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        { ...MIXING_BOWL, amount: 2 },
        COOLING_RACK,
        BAKING_SHEET,
        PAPER_TOWELS,
        LARGE_POT,
        COOKING_THERMOMETER,
    ],
    directions: [
        { step: `In a mixing bowl, combine the chicken pieces and the "${SECTIONS.MARINADE}" section ingredients. It should be wet.`, section: SECTIONS.MARINATE_CHICKEN, img: [karaage1, karaage2] },
        { step: 'Mix well and let it marinate for 2 hours.', section: SECTIONS.MARINATE_CHICKEN },

        { step: 'Over medium heat, fill a pot with 2 to 3 inches of oil.', section: PREP_DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire cooling rack on top.', section: PREP_DEEP_FRY },

        { step: 'In another mixing bowl, add the potato starch.', section: MAKE_ZAKU_ZAKU_BREADCRUMBS, img: karaage3 },
        { step: 'Slowly add the warm water while mixing until it creates some fine crumbly pieces.', section: MAKE_ZAKU_ZAKU_BREADCRUMBS, img: karaage4 },

        { step: 'Dip the chicken pieces in the Zaku Zaku breadcrumbs. It does not have to completely stick to the chicken.', section: DREDGE_CHICKEN, img: karaage5 },

        { step: 'Once the oil gets to 325ºF, you can begin the first deep fry.', section: FIRST_DEEP_FRY },
        { step: 'Carefully place 3 to 5 pieces of chicken at a time in the oil. Avoid overcrowding the pot since it will lower the temperature of the oil and cause the chicken to soak up too much oil.', section: FIRST_DEEP_FRY },
        { step: 'Deep fry until the chicken is light golden (about 2 to 3 minutes).', section: FIRST_DEEP_FRY },
        { step: 'Once cooked, place chicken on the wire cooling rack to drain. Let these rest until the second deep fry.', section: FIRST_DEEP_FRY },
        { step: 'Continue with the rest of the chicken. Use a strainer to pick out crumbs in between each batch.', section: FIRST_DEEP_FRY },

        { step: 'Let the oil get to 360ºF, for the second deep fry.', section: SECOND_DEEP_FRY },
        { step: 'Follow the same steps for the first deep fry but only cook for 1 to 2 minutes. It should be golden brown and crispy.', section: SECOND_DEEP_FRY, img: karaage6 },

        { step: 'Serve these delicious chicken hot with lemon wedges, Kewpie mayo and any other favorite toppings.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'If the chicken is burning too quickly, either lower the heat or add a few more pieces of chicken.' },
        { note: 'A few mistakes that I made in the previous version of the recipe: (1) cut with the grain making it stringy when eating and (2) overcooked it attempting to get it a darker golden brown (there is residual heat).' },
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
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 400ºF until heated through (about 5 to 6 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Place karaage on a wire rack on a baking sheet. Bake at 400ºF for 10 minutes. Then bake at 425ºF until the chicken has an internal temperature of at least 165ºF.',
        },
    ],
    mealPrep: true,
};