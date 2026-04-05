// const example1 = '../assets/Products/example-1.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { PRODUCE } = require('./ingredient-categories');
const { AMERICAN_CHEESE, BAKING_SHEET, COLANDER, COOLING_RACK, EMPANADA_DOUGH_DISCS, FRYING_PAN, GROUND_BEEF, KOSHER_SALT, MIXING_BOWL, PAPER_TOWELS, SAZON_SEASONING_WITH_ANNATTO, STOVE, VEGETABLE_OIL } = require('./ingredients');
const sofrito = require('./sofrito');

module.exports = {
    wip: true,
    cardName: 'Ground Beef Pastelitos',
    name: 'Ground Beef Pastelitos',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.PUERTO_RICAN],
    method: [METHODS.PAN_FRY, METHODS.FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Ground Beef Pastelitos',
            link: 'https://www.thekitchn.com/pastelitos-recipe-2-23770800',
            authors: ['Andrea Rivera Wawrzyn'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'sofrito', category: PRODUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN, link: { id: sofrito.name, url: `recipes/${sofrito.name}` } },
        { ...SAZON_SEASONING_WITH_ANNATTO, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },

        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...KOSHER_SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...AMERICAN_CHEESE, amount: 5, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'halved', section: SECTIONS.MAIN },

        { ...EMPANADA_DOUGH_DISCS, amount: 10, unit: '', additionalDetails: 'thawed', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'for frying', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        COLANDER,
        MIXING_BOWL,
        PAPER_TOWELS,
        COOLING_RACK,
        BAKING_SHEET,
    ],
    directions: [
        { step: `Over medium heat, heat oil in a pan.`, section: SECTIONS.COOK_FILLING },
        { step: `Add sofrito and sazón seasoning. Cook until fragrant (about 1 minute).`, section: SECTIONS.COOK_FILLING },
        { step: `Add ground beef and salt. Cook and break into pieces until cooked through and browned (about 5 to 7 minutes).`, section: SECTIONS.COOK_FILLING },
        { step: `Drain in a colander.`, section: SECTIONS.COOK_FILLING },
        { step: `Transfer filling to a mixing bowl.`, section: SECTIONS.COOK_FILLING },
        { step: `Taste and add salt as needed.`, section: SECTIONS.COOK_FILLING },

        { step: `Wipe the pan with a paper towel.`, section: SECTIONS.ASSEMBLE },
        { step: `Place an empanada dough disc on the counter.`, section: SECTIONS.ASSEMBLE },
        { step: `Place half a slice of cheese and 2 tablespoons of filling on the same side of the disc.`, section: SECTIONS.ASSEMBLE },
        { step: `Fold the dough over to make a semicircle and pinch closed. Add a little water to the edge to help seal if it is not sticking.`, section: SECTIONS.ASSEMBLE },
        { step: `Use a fork to crimp the edges and avoid poking holes in the dough.`, section: SECTIONS.ASSEMBLE },
        { step: `Repeat.`, section: SECTIONS.ASSEMBLE },

        { step: `Over medium heat, heat the frying oil in the pan until 350ºF.`, section: SECTIONS.FRY },
        { step: `Line a baking sheet with paper towels and place the cooling rack on top.`, section: SECTIONS.FRY },
        { step: `Fry at most 3 at a time. Fry until golden brown (about 2 to 3 minutes per side). Decrease the heat if there is too much splattering.`, section: SECTIONS.FRY },
        { step: `Transfer to drip station.`, section: SECTIONS.FRY },

        { step: `Enjoy this latin/Puerto Rican dish (close cousin of empanadas).`, section: SECTIONS.SERVE },
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
            instruction: 'Bake at 300ºF until heated through (about 5 to 10 minutes).',
        },
    ],
    mealPrep: true,
};