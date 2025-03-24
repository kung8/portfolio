// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { LIGHT_SOY_SAUCE, EGG, ALL_PURPOSE_FLOUR, CORNSTARCH, PORK_SHOULDER, GARLIC_SALT, KETCHUP, BROWN_SUGAR, WHITE_VINEGAR, SALT, COLD_WATER, RED_BELL_PEPPERS, YELLOW_BELL_PEPPERS, GREEN_BELL_PEPPERS, RED_ONION, YELLOW_ONION, PINEAPPLE, VEGETABLE_OIL } = require('./ingredients');

const PORK_MARINADE = 'Pork Marinade';
const SWEET_AND_SOUR_SAUCE = 'Sweet and Sour Sauce';
const FRUIT_AND_VEGGIES = 'Fruit and Veggies';
const DEEP_FRY = 'Deep Fry';
const STIR_FRY = 'Stir Fry';

module.exports = {
    wip: true,
    cardName: 'Sweet and Sour Pork',
    name: 'Chinese Sweet and Sour Pork',
    img: '',
    available: true,
    recommended: false,
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
        { ...COLD_WATER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE },

        { ...RED_BELL_PEPPERS, amount: 1 / 4, unit: '', additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...YELLOW_BELL_PEPPERS, amount: 1 / 4, unit: '', additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...GREEN_BELL_PEPPERS, amount: 1 / 4, unit: '', additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...RED_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: FRUIT_AND_VEGGIES },
        { ...PINEAPPLE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chunk sized', section: FRUIT_AND_VEGGIES },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: DEEP_FRY },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'large pot' },
        { name: 'wire rack' },
        { name: 'paper towel' },
        { name: 'baking pan' },
        { name: 'spider strainer' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine garlic salt, soy sauce and pork. Mix for about 1 minute.', type: PORK_MARINADE },
        { step: 'Add an egg and mix for 30 seconds.', type: PORK_MARINADE },
        { step: 'Add flour and mix until evenly coated (about 1 to 2 minutes).', type: PORK_MARINADE },
        { step: 'On a plate, add cornstarch.', type: PORK_MARINADE },
        { step: 'Coat each piece with cornstarch and massage to ensure it is completely covered.', type: PORK_MARINADE },

        { step: 'In a medium bowl, combine the "Sweet and Sour Sauce" ingredients. Set aside.', type: SWEET_AND_SOUR_SAUCE },

        { step: 'Over medium-high heat, add oil to a large pot.', type: DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire rack on top.', type: DEEP_FRY },
        { step: 'Once the oil is between 300ºF and 350ºF, you can begin frying the pork in batches.', type: DEEP_FRY },
        { step: 'Carefully add the pork into the hot oil and fry until pork starts to brown and gets crispier (about 7 to 8 minutes). Once in the oil, avoid disrupting the pieces to prevent coating to come off.', type: DEEP_FRY },
        { step: 'Transfer these pork pieces to the wire rack to drain.', type: DEEP_FRY },
        { step: 'Once all the pork pieces are cooked, you will raise the heat slightly until it get to 400ºF.', type: DEEP_FRY },
        { step: 'Again in batches, fry the pork for 1 to 2 minutes for this second fry.', type: DEEP_FRY },
        { step: 'Transfer back to drain on the wire rack.', type: DEEP_FRY },
        { step: 'Over medium-high heat, heat a little oil.', type: STIR_FRY },
        { step: 'Add the chopped peppers and onions. Cook for about 30 seconds.', type: STIR_FRY },
        { step: 'Add pineapples. Cook for about 30 seconds.', type: STIR_FRY },
        { step: 'Transfer the pineapples and veggies to a bowl. Set aside.', type: STIR_FRY },

        { step: 'Over medium-high heat, add the sauce to the wok and bring to a boil (about 1 to 2 minutes).', type: SECTIONS.ASSEMBLE },
        { step: 'Add the pork, veggies and pineapple. Mix until everything is combined and coated with the sauce (about 1 to 2 minutes).', type: SECTIONS.ASSEMBLE },

        { step: 'Enjoy this immediately with jasmine rice', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Do not try to fry too early or it will take longer to cook and will just soak oil.' },
        { note: 'Avoid overcrowding the pork by working in batches.' }
    ]
};