const sesame1 = '../assets/Products/honey-sesame-chicken-1.jpeg';
const sesame2 = '../assets/Products/honey-sesame-chicken-2.jpeg';
const sesame3 = '../assets/Products/honey-sesame-chicken-3.jpeg';
const sesame4 = '../assets/Products/honey-sesame-chicken-4.jpeg';
const sesame5 = '../assets/Products/honey-sesame-chicken-5.jpeg';
const sesame6 = '../assets/Products/honey-sesame-chicken-6.jpeg';
const sesame7 = '../assets/Products/honey-sesame-chicken-7.jpeg';
const sesame8 = '../assets/Products/honey-sesame-chicken-8.jpeg';
const sesame9 = '../assets/Products/honey-sesame-chicken-9.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, BROWN_SUGAR, COOKING_THERMOMETER, COOLING_RACK, CORNSTARCH, EGG, GARLIC, GREEN_ONION, HONEY, KETCHUP, LIGHT_SOY_SAUCE, MEDIUM_BOWL, PAPER_TOWELS, PLATE, RICE_WINE_VINEGAR, SALT, SAUCEPAN, SESAME_OIL, SESAME_SEEDS, SPIDER_STRAINER, STOVE, TALL_NARROW_POT, VEGETABLE_OIL } = require('./ingredients');

const DEEP_FRY = 'Deep Fry';
const EGG_DREDGE = 'Egg Dredge';
const FLOUR_DREDGE = 'Flour Dredge';
const HONEY_SESAME_SAUCE = 'Honey Sesame Sauce';

module.exports = {
    cardName: 'Honey Sesame Chicken',
    name: 'Honey Sesame Chicken',
    img: sesame8,
    recipeAuthors: ['Sara Welch'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SIDE_DISH, TYPES.MAIN_COURSE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Honey Sesame Chicken', link: 'https://www.dinneratthezoo.com/lighter-honey-sesame-chicken/' }
    ],
    separated: true,
    ingredients: [
        { ...EGG, amount: 2, unit: '', additionalDetails: 'beaten', section: EGG_DREDGE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: EGG_DREDGE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: EGG_DREDGE },

        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGE },
        { ...CORNSTARCH, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGE },

        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1 inch pieces', section: DEEP_FRY },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: DEEP_FRY },

        { ...HONEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...KETCHUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...BROWN_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: HONEY_SESAME_SAUCE },

        { ...SESAME_SEEDS, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        { ...MEDIUM_BOWL, amount: 2 },
        PLATE,
        TALL_NARROW_POT,
        COOLING_RACK,
        BAKING_SHEET,
        PAPER_TOWELS,
        COOKING_THERMOMETER,
        SPIDER_STRAINER,
        SAUCEPAN,
    ],
    directions: [
        { step: 'In a medium bowl, combine the "Egg Dredge" ingredients.', section: EGG_DREDGE },
        { step: 'In another medium bowl, combine the "Flour Dredge" ingredients.', section: FLOUR_DREDGE },
        { step: 'Over medium-high heat, fill a pot with 3 inches of oil.', section: DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire cooling rack on top.', section: DEEP_FRY },
        { step: 'Dip the chicken into the egg dredge and then into the flour.', section: DEEP_FRY, img: sesame2 },
        { step: 'Place these coated chicken pieces onto a plate.', section: DEEP_FRY, img: sesame3 },
        { step: 'Once the oil has reached 350ºF, you can begin to deep dry the chicken.', section: DEEP_FRY },
        { step: 'Carefully add the chicken in small batches to the oil. Cook until the chicken gets crispy and golden brown (about 5 minutes).', section: DEEP_FRY },
        { step: 'Using a spider strainer, remove the cooked chicken and set them on the wire rack to drain.', section: DEEP_FRY },
        { step: 'Repeat until all the chicken is cooked.', section: DEEP_FRY },
        { step: 'In a medium bowl, combine all the "Honey Sesame Sauce" ingredients (except the vegetable oil and garlic).', section: HONEY_SESAME_SAUCE, img: sesame1 },
        { step: 'Over medium-high heat, heat the oil in a saucepan.', section: HONEY_SESAME_SAUCE },
        { step: 'Add the garlic and cook until fragrant (about 30 seconds).', section: HONEY_SESAME_SAUCE, img: sesame4 },
        { step: 'Add the sauce mixture and bring to a simmer.', section: HONEY_SESAME_SAUCE },
        { step: 'Cook until it starts to thicken (about 3 to 4 minutes).', section: HONEY_SESAME_SAUCE, img: sesame5 },
        { step: 'Add the crispy chicken and stir until everything is coated in the sauce.', section: HONEY_SESAME_SAUCE, img: [sesame6, sesame7] },
        { step: 'Serve this dish with jasmine rice and top with your favorite toppings.', section: SECTIONS.SERVE, img: sesame9 },
    ],
    notes: [
        { note: 'Do not try to fry too early or it will take longer to cook and will just soak oil.' },
        { note: 'Avoid overcrowding the chicken by working in batches.' }
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