// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { AIR_FRYER, CILANTRO, COOKING_SPRAY, CUTTING_BOARD, GARLIC, GINGER, GREEN_ONION, GROUND_CHICKEN, HONEY, KNIFE, LIGHT_SOY_SAUCE, MIXING_BOWL, PLATE, RICE_WINE_VINEGAR, SALT, SCISSORS, SESAME_SEEDS, SMALL_BOWL, SPRING_ROLL_RICE_WRAPPERS, TONGS, WATER } = require('./ingredients');

const PAPER_SECTION = 'Rice Paper';

const PREP_RICE_PAPER = 'Prep Rice Paper';

module.exports = {
    wip: false,
    cardName: 'Rice Paper Bites',
    name: 'Crispy Chicken Rice Paper Bites',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-10-31 15:54:04',
    modifiedAt: '2026-10-31 15:54:04',
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.AIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 16, unit: YIELD_UNITS.EACH },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Every Last Bite',
            link: 'https://everylastbite.com',
            authors: ['Carmen Sturdy'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...GROUND_CHICKEN, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...GREEN_ONION, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },

        { ...WATER, amount: '', unit: '', additionalDetails: 'warm, for soaking rice paper', section: PAPER_SECTION },
        { ...SPRING_ROLL_RICE_WRAPPERS, amount: 4, unit: INGREDIENT_UNITS.SHEET, additionalDetails: '', section: PAPER_SECTION },
        { ...WATER, amount: 4, unit: INGREDIENT_UNITS.SHEET, additionalDetails: '', section: SECTIONS.FILLING },

        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.OIL },

        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DIPPING_SAUCE },
        { name: 'chili crisp', amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DIPPING_SAUCE },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DIPPING_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DIPPING_SAUCE },

        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS }
    ],
    appliances: [AIR_FRYER],
    supplies: [
        MIXING_BOWL,
        PLATE,
        CUTTING_BOARD,
        KNIFE,
        SCISSORS,
        SMALL_BOWL,
        TONGS,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING },

        { step: `Fill a plate with warm water for soaking the rice paper sheets.`, section: PREP_RICE_PAPER },
        { step: `Soak one rice paper at a time in the warm water for about 5 seconds.`, section: PREP_RICE_PAPER },
        { step: `Transfer the soaked rice paper to a cutting board.`, section: PREP_RICE_PAPER },

        { step: `Place 1/4 of the ground chicken mixture onto the center of the soaked rice paper.`, section: SECTIONS.ASSEMBLE },
        { step: `Fold like a burrito by folding the bottom edges and roll it up tightly.`, section: SECTIONS.ASSEMBLE },
        { step: `Use scissors to cut each of the rolls into 4 pieces (approximately 1 inch wide).`, section: SECTIONS.ASSEMBLE },
        { step: `Repeat the process with the remaining rice paper sheets and chicken mixture.`, section: SECTIONS.ASSEMBLE },
        { step: `Spray the bites with cooking spray.`, section: SECTIONS.ASSEMBLE },

        { step: `Air fry at 380ºF until golden brown and crispy (about 12 minutes).`, section: SECTIONS.AIR_FRY },

        { step: `Turn the air fryer on to 380 degrees fahrenheit and leave to preheat for 5 minutes.`, section: SECTIONS.AIR_FRY },

        { step: `In a small bowl, combine the "${SECTIONS.DIPPING_SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },

        { step: `Enjoy these crispy chicken rice paper bites with the dipping sauce and toppings.`, section: SECTIONS.SERVE }
    ],
    store: [
        {
            duration: { amount: 24, unit: STORAGE_DURATION_UNIT.HOUR },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            details: 'Store separate from the sauce. Rice paper can become sticky/chewy the longer it sits.'
        }
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Reheat in a toaster oven or the air fryer for best texture.',
        }
    ],
    mealPrep: true,
};
