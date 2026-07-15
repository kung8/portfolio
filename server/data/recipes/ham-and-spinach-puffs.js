// const puffs1 = '../assets/Products/ham-and-spinach-puffs-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, BABY_SPINACH, BLACK_FOREST_HAM, BLACK_PEPPER, COOKING_SPRAY, DIJON_MUSTARD, GRUYERE_CHEESE, MIXING_BOWL, MUFFIN_TIN, OLIVE_OIL, OVEN, REFRIGERATED_PUFF_PASTRY, SALT } = require('./ingredients');

const PUFF_PASTRY_SECTION = 'Puff Pastry';
const SPINACH_FILLING_SECTION = 'Spinach Filling';
const WORKSTATION_SECTION = 'Workstation';
const OTHER_FILLING_SECTION = 'Other Filling';

const PREP_SPINACH_FILLING = 'Prep Spinach Filling';
const PREP_PASTRY_DOUGH = 'Prep Pastry Dough';

module.exports = {
    wip: true,
    cardName: 'Ham and Spinach Puffs',
    name: 'Ham and Spinach Puffs',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-07-14 21:33:40',
    modifiedAt: '2026-07-14 21:33:40',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.PASTRY, TYPES.PIE],
    yields: { amount: 18, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Magnolia Table, Volume 2: A Collection of Recipes for Gathering',
            label: 'Ham and Spinach Puffs',
            link: null,
            authors: ['Joanna Gaines'],
            finder: 'Hannah Barnes',
        }
    ],
    ingredients: [
        { ...REFRIGERATED_PUFF_PASTRY, amount: 17.3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PUFF_PASTRY_SECTION },

        { ...BABY_SPINACH, amount: 3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SPINACH_FILLING_SECTION },
        { ...OLIVE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPINACH_FILLING_SECTION },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPINACH_FILLING_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPINACH_FILLING_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: '', unit: '', additionalDetails: 'for work surface', section: WORKSTATION_SECTION },

        { ...DIJON_MUSTARD, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OTHER_FILLING_SECTION },
        { ...BLACK_FOREST_HAM, amount: 18, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: OTHER_FILLING_SECTION },
        { ...GRUYERE_CHEESE, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: OTHER_FILLING_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        COOKING_SPRAY,
        MIXING_BOWL,
        MUFFIN_TIN,
    ],
    directions: [
        { step: `Thaw puff pastry at room temperature for about 20 to 30 minutes. It should unfold easily.`, section: SECTIONS.THAW },

        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `In a mixing bowl, combine the "${SPINACH_FILLING_SECTION}" section ingredients. Toss to coat.`, section: PREP_SPINACH_FILLING },
        { step: `Set aside.`, section: PREP_SPINACH_FILLING },

        { step: `On a lightly floured surface, lay the puff pastry sheets flat.`, section: PREP_PASTRY_DOUGH },
        { step: `Cut each puff pastry sheet into 9 squares.`, section: PREP_PASTRY_DOUGH },

        { step: `Spread a thin layer of mustard on each square.`, section: SECTIONS.ASSEMBLE },
        { step: `Top with a slice of ham (fold slices as needed to fit).`, section: SECTIONS.ASSEMBLE },
        { step: `Lightly spray the pockets of a muffin tin with cooking spray.`, section: SECTIONS.ASSEMBLE },
        { step: `Set dough squares in each pocket of the muffin tin.`, section: SECTIONS.ASSEMBLE },
        { step: `Fill each dough square with 2 tablespoon of spinach filling and 1 tablespoon of gruyere.`, section: SECTIONS.ASSEMBLE },

        { step: `Bake until golden brown (about 15 minutes).`, section: SECTIONS.BAKE },

        { step: `Remove from pan and let cool for about 5 minutes before serving.`, section: SECTIONS.COOL },

        { step: `Enjoy these Kronk-inspired spinach puffs.`, section: SECTIONS.SERVE },
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
            instruction: 'Bake at 400ºF for about 15 minutes until golden brown.',
        },
    ],
    mealPrep: true,
};