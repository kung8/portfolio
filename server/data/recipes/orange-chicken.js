// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, EGG, CORNSTARCH, ALL_PURPOSE_FLOUR, SALT, VEGETABLE_OIL, ORANGE_JUICE, WHITE_SUGAR, RICE_WINE_VINEGAR, LIGHT_SOY_SAUCE, GARLIC_POWDER, RED_PEPPER_FLAKES, ORANGE_ZEST, GROUND_GINGER, GREEN_ONION, COLD_WATER } = require('./ingredients');

const ORANGE_SAUCE = 'Orange Sauce';
const FLOUR_DREDGE = 'Flour Dredge';
const EGG_DREDGE = 'Egg Dredge';
const DEEP_FRY = 'Deep Fry';

module.exports = {
    wip: true,
    cardName: 'Orange Chicken',
    name: 'Orange Chicken',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Orange Chicken', link: 'https://www.modernhoney.com/chinese-orange-chicken/#wprm-recipe-container-12601' }
    ],
    separated: true,
    ingredients: [
        { ...ORANGE_JUICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ORANGE_SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ORANGE_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ORANGE_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ORANGE_SAUCE },
        { ...GROUND_GINGER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ORANGE_SAUCE },
        { ...GARLIC_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ORANGE_SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ORANGE_SAUCE },
        { ...ORANGE_ZEST, amount: '', unit: '', additionalDetails: 'from 1 orange', section: ORANGE_SAUCE },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ORANGE_SAUCE },
        { ...COLD_WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ORANGE_SAUCE },

        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: 'cut into 1 inch pieces', section: SECTIONS.CHICKEN },

        { ...CORNSTARCH, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGE },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGE },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: FLOUR_DREDGE },

        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: SECTIONS.CHICKEN },

        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...ORANGE_ZEST, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium sauce pan' },
        { name: 'small bowl' },
        { name: '2 shallow dishes' },
        { name: 'plate' },
        { name: 'wire cooling rack' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'pot' },
        { name: 'cooking thermometer' },
    ],
    directions: [
        { step: 'Over medium heat, combine all the "Sauce" ingredients except the orange zest, cornstarch and water in a medium saucepan.', type: ORANGE_SAUCE },
        { step: 'Cook for 3 minutes.', type: ORANGE_SAUCE },
        { step: 'In a small bowl, combine the cornstarch and the water until it becomes a paste.', type: ORANGE_SAUCE },
        { step: 'Add the cornstarch mixture to the sauce. Mix.', type: ORANGE_SAUCE },
        { step: 'Cook until the sauce thickens (about 5 minutes).', type: ORANGE_SAUCE },
        { step: 'Remove from heat. Add the orange zest.', type: ORANGE_SAUCE },

        { step: 'In a shallow dish, combine the "Flour Dredge" ingredients.', type: FLOUR_DREDGE },

        { step: 'In another shallow dish, whisk eggs.', type: EGG_DREDGE },

        { step: 'Over medium-high heat, fill a pot with 2 to 3 inches of oil.', type: DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire cooling rack on top.', type: DEEP_FRY },
        { step: 'Dip the chicken pieces in the dredging stations: eggs then flour mixture.', type: DEEP_FRY },
        { step: 'Place the coated chicken pieces on a plate.', type: DEEP_FRY },
        { step: 'Once the oil gets to 350ºF, you can begin deep frying the chicken.', type: DEEP_FRY },
        { step: 'Carefully add chicken into the oil.', type: DEEP_FRY },
        { step: 'Cook until golden brown (about 2 to 3 minutes). Be sure to flip the chicken pieces regularly.', type: DEEP_FRY },
        { step: 'Once cooked, place chicken on the wire cooling rack to drain.', type: DEEP_FRY },
        { step: 'Continue until all the chicken is cooked.', type: DEEP_FRY },

        { step: 'Reserve some of the sauce for the rice.', type: SECTIONS.SERVE },
        { step: 'Toss the chicken with the sauce.', type: SECTIONS.SERVE },
        { step: 'Top this delicious Chinese dish with green onions and more orange zest and serve with rice.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Do not try to fry too early or it will take longer to cook and will just soak oil.' },
        { note: 'Avoid overcrowding the chicken by working in batches.' }
    ]
};