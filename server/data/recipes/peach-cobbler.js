const cobbler1 = '../assets/Products/peach-cobbler-1.jpeg';
const cobbler2 = '../assets/Products/peach-cobbler-2.jpeg';
const cobbler3 = '../assets/Products/peach-cobbler-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_PAN,
    BAKING_POWDER,
    CANNED_PEACH,
    CINNAMON,
    MILK,
    MIXING_BOWL,
    OVEN,
    RUBBER_SPATULA,
    SALT,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
} = require('./ingredients');

const BUTTER_SECTION = 'Butter';
const PEACHES_SECTION = 'Peaches';
const PREP_COBBLER = 'Prep Cobbler';
const CINNAMON_SECTION = 'Cinnamon';

module.exports = {
    cardName: 'Peach Cobbler',
    name: 'Peach Cobbler',
    img: cobbler3,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Peach Cobbler',
            link: 'https://tastesbetterfromscratch.com/peach-cobbler/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BUTTER_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

        { ...MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },

        { ...CANNED_PEACH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sliced', section: PEACHES_SECTION },
        
        { ...CINNAMON, amount: '', unit: '', additionalDetails: 'to taste', section: CINNAMON_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        MIXING_BOWL,
        RUBBER_SPATULA,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.PREHEAT_OVEN },

        { step: 'Add butter into the baking pan and place pan in the oven while it preheats.', section: SECTIONS.PREP_PAN },
        { step: 'Remove the pan from the oven once the butter has melted.', section: SECTIONS.PREP_PAN },

        { step: `In a mixing bowl, combine "${SECTIONS.DRY_INGREDIENTS}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: 'Add milk.', section: SECTIONS.PREP_BATTER },
        { step: 'Pour batter into the baking pan. Smooth to an even layer.', section: SECTIONS.PREP_BATTER },

        { step: 'Add canned peaches and its juices.', section: PREP_COBBLER },
        { step: 'Generously drizzle cinnamon on top.', section: PREP_COBBLER, img: cobbler1 },

        { step: 'Bake for 35 to 40 minutes.', section: SECTIONS.BAKE },
        
        { step: 'Serve warm with ice cream.', section: SECTIONS.SERVE, img: cobbler2 },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Let it come to room temperature. Cover with foil and bake at 350ºF until heated through (about 20 minutes).',
        },
    ],
    mealPrep: true,
};