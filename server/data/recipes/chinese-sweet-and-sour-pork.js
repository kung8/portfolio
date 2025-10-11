const pork1 = '../assets/Products/sweet-and-sour-pork-1.jpeg';
const pork2 = '../assets/Products/sweet-and-sour-pork-2.jpeg';
const pork3 = '../assets/Products/sweet-and-sour-pork-3.jpeg';
const pork4 = '../assets/Products/sweet-and-sour-pork-4.jpeg';
const pork5 = '../assets/Products/sweet-and-sour-pork-5.jpeg';
const pork6 = '../assets/Products/sweet-and-sour-pork-6.jpeg';
const pork7 = '../assets/Products/sweet-and-sour-pork-7.jpeg';
const pork8 = '../assets/Products/sweet-and-sour-pork-8.jpeg';
const pork9 = '../assets/Products/sweet-and-sour-pork-9.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { MIXING_BOWL, LIGHT_SOY_SAUCE, EGG, ALL_PURPOSE_FLOUR, CORNSTARCH, PORK_SHOULDER, GARLIC_SALT, KETCHUP, BROWN_SUGAR, WHITE_VINEGAR, SALT, RED_BELL_PEPPER, YELLOW_BELL_PEPPER, GREEN_BELL_PEPPER, RED_ONION, YELLOW_ONION, PINEAPPLE, VEGETABLE_OIL, WATER, STOVE, LARGE_POT, COOLING_RACK, PAPER_TOWELS, BAKING_PAN, SPIDER_STRAINER, WOK } = require('./ingredients');

const PORK_MARINADE = 'Pork Marinade';
const SWEET_AND_SOUR_SAUCE = 'Sweet and Sour Sauce';
const FRUIT_AND_VEGGIES = 'Fruit and Veggies';
const DEEP_FRY = 'Deep Fry';
const STIR_FRY = 'Stir Fry';

module.exports = {
    cardName: 'Sweet and Sour Pork',
    name: 'Chinese Sweet and Sour Pork',
    img: pork9,
    recipeAuthors: ['Chef Lau'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sweet and Sour Pork', link: 'https://www.madewithlau.com/recipes/sweet-sour-pork' }
    ],
    separated: true,
    ingredients: [
        { ...GARLIC_SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PORK_MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PORK_MARINADE },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: PORK_MARINADE },
        { ...ALL_PURPOSE_FLOUR, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PORK_MARINADE },
        { ...CORNSTARCH, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PORK_MARINADE },
        { ...PORK_SHOULDER, amount: 5 / 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1/2 inch pieces', section: PORK_MARINADE },

        { ...KETCHUP, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE },
        { ...WHITE_VINEGAR, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE },
        { ...WATER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold', section: SWEET_AND_SOUR_SAUCE },

        { ...RED_BELL_PEPPER, amount: 1 / 4, unit: '', additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...YELLOW_BELL_PEPPER, amount: 1 / 4, unit: '', additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1 / 4, unit: '', additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...RED_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...PINEAPPLE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chunk sized', section: FRUIT_AND_VEGGIES },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: DEEP_FRY },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        LARGE_POT,
        COOLING_RACK,
        PAPER_TOWELS,
        BAKING_PAN,
        SPIDER_STRAINER,
        WOK,
    ],
    directions: [
        { step: 'In a mixing bowl, combine garlic salt, soy sauce and pork. Mix for about 1 minute.', section: PORK_MARINADE, img: [pork1, pork2] },
        { step: 'Add an egg and mix for 30 seconds.', section: PORK_MARINADE, img: [pork3, pork4] },
        { step: 'Add flour and mix until evenly coated (about 1 to 2 minutes).', section: PORK_MARINADE, img: pork5 },
        { step: 'Add cornstarch. Coat each piece and massage to ensure it is completely covered.', section: PORK_MARINADE, img: pork6 },

        { step: 'In a medium bowl, combine the "Sweet and Sour Sauce" ingredients. Set aside.', section: SWEET_AND_SOUR_SAUCE },

        { step: 'Over medium-high heat, add oil to a large pot.', section: DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire rack on top.', section: DEEP_FRY },
        { step: 'Once the oil is between 300ºF and 350ºF, you can begin frying the pork in batches.', section: DEEP_FRY },
        { step: 'Carefully add the pork into the hot oil and fry until pork starts to brown and gets crispier (about 7 to 8 minutes). Once in the oil, avoid disrupting the pieces to prevent coating to come off.', section: DEEP_FRY },
        { step: 'Transfer these pork pieces to the wire rack to drain.', section: DEEP_FRY },
        { step: 'Once all the pork pieces are cooked, you will raise the heat slightly until it get to 400ºF.', section: DEEP_FRY },
        { step: 'Again in batches, fry the pork for 1 to 2 minutes for this second fry.', section: DEEP_FRY },
        { step: 'Transfer back to drain on the wire rack.', section: DEEP_FRY },

        { step: 'Over medium-high heat, heat a little oil.', section: STIR_FRY },
        { step: 'Add the chopped peppers and onions. Cook for about 30 seconds.', section: STIR_FRY, img: pork7 },
        { step: 'Add pineapples. Cook for about 30 seconds.', section: STIR_FRY },
        { step: 'Transfer the pineapples and veggies to a bowl. Set aside.', section: STIR_FRY },

        { step: 'Over medium-high heat, add the sauce to the wok and bring to a boil (about 1 to 2 minutes).', section: SECTIONS.ASSEMBLE, img: pork8 },
        { step: 'Add the pork, veggies and pineapple. Mix until everything is combined and coated with the sauce (about 1 to 2 minutes).', section: SECTIONS.ASSEMBLE },

        { step: 'Enjoy this immediately with jasmine rice', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Do not try to fry too early or it will take longer to cook and will just soak oil.' },
        { note: 'Avoid overcrowding the pork by working in batches.' }
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
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Over medium-high heat, add a little oil to a wok. Add the sweet and sour pork and stir-fry until heated through (about 5 to 7 minutes).',
        },
    ],
    mealPrep: false,
};