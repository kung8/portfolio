// Add image imports here if available

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BEEF_SIRLOIN, BLACK_PEPPER, BREAD_KNIFE, FRYING_PAN, GARLIC, GARLIC_SALT, GREEN_BELL_PEPPER, HAWAIIAN_ROLLS, MAYONNAISE, OVEN, PARSLEY, PLATE, PROVOLONE_CHEESE, RED_BELL_PEPPER, SALT, SEASONING_SALT, SLOTTED_SPOON, SMALL_BOWL, STOVE, UNSALTED_BUTTER, VEGETABLE_OIL, WORCESTERSHIRE_SAUCE, YELLOW_ONION } = require('./ingredients');

const GARLIC_MAYO_SPREAD = 'Garlic Mayo Spread';
const MAKE_GARLIC_MAYO_SPREAD = 'Make Garlic Mayo Spread';
const SLIDER_SECTION = 'Slider';

module.exports = {
    wip: true,
    cardName: 'Philly Cheesesteak Sliders',
    name: 'Philly Cheesesteak Sliders',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH, CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.MAIN_COURSE, TYPES.SANDWICH],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Philly Cheesesteak Sliders',
            link: 'https://krollskorner.com/recipes/appetizers-snacks/philly-cheesesteak-sliders/',
            authors: ['Krolls Korner'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...BEEF_SIRLOIN, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.BEEF },
        { ...SEASONING_SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.BEEF },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.VEGGIES },

        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GARLIC_MAYO_SPREAD },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: GARLIC_MAYO_SPREAD },

        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.COATING },
        { ...GARLIC_SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.COATING },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.DASH, additionalDetails: '', section: SECTIONS.COATING },

        { ...HAWAIIAN_ROLLS, amount: 12, unit: INGREDIENT_UNITS.EACH, additionalDetails: '', section: SLIDER_SECTION },
        { ...PROVOLONE_CHEESE, amount: 12, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SLIDER_SECTION },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS }
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        FRYING_PAN,
        PLATE,
        SLOTTED_SPOON,
        { ...SMALL_BOWL, amount: 2 },
        BREAD_KNIFE,
        BAKING_PAN,
    ],
    directions: [
        { step: `Freeze for about 30 minutes to make it easier to thinly slice.`, section: SECTIONS.PREP_BEEF },
        { step: `Season the beef with the salt and pepper.`, section: SECTIONS.PREP_BEEF },

        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Over medium-high heat, heat oil in a pan.`, section: SECTIONS.COOK_BEEF },
        { step: `Cook beef in batches. Brown it without stirring (about 2 minutes per side).`, section: SECTIONS.COOK_BEEF },
        { step: `Transfer with a slotted spoon to a plate. Add oil as needed.`, section: SECTIONS.COOK_BEEF },

        { step: `Over medium heat, add the "${SECTIONS.VEGGIES}" section ingredients to the same pan.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Cook veggies until fragrant and softened (about 7 minutes). Stir occasionally.`, section: SECTIONS.COOK_VEGGIES },

        { step: `In a small bowl, combine the "${GARLIC_MAYO_SPREAD}" section ingredients.`, section: MAKE_GARLIC_MAYO_SPREAD },

        { step: `In another small bowl, combine the "${SECTIONS.COATING}" section ingredients.`, section: SECTIONS.PREP_COATING },

        { step: `Cut the rolls in half horizontally with the bread knife while keeping the rolls together.`, section: SECTIONS.ASSEMBLE },
        { step: `Place the bottom half in a baking pan.`, section: SECTIONS.ASSEMBLE },
        { step: `Spread the garlic mayo spread on the cut side of both the bottom and top sides.`, section: SECTIONS.ASSEMBLE },
        { step: `Evenly layer: half the cheese, meat, veggies, last half of cheese, and top half of rolls.`, section: SECTIONS.ASSEMBLE },
        { step: `Brush the tops of the rolls with the butter mixture. Reserve some butter mixture for later.`, section: SECTIONS.ASSEMBLE },
        { step: `Cover with foil.`, section: SECTIONS.ASSEMBLE },

        { step: `Bake for 10 minutes.`, section: SECTIONS.BAKE },
        { step: `Remove foil. Bake until hot and melty (about 10 minutes).`, section: SECTIONS.BAKE },

        { step: `Brush with remaining butter mixture and optionally sprinkle with parsley.`, section: SECTIONS.TOP },

        { step: `Enjoy these sliders while warm.`, section: SECTIONS.SERVE },
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
            instruction: 'Bake at 350ºF until heated through (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};