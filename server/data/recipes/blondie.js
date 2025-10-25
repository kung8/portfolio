const blondie1 = '../assets/Products/blondie-1.jpeg';
const blondie2 = '../assets/Products/blondie-2.jpeg';
const blondie3 = '../assets/Products/blondie-3.jpeg';
const blondie4 = '../assets/Products/blondie-4.jpeg';
const blondie5 = '../assets/Products/blondie-5.jpeg';
const blondie6 = '../assets/Products/blondie-6.jpeg';
const blondie7 = '../assets/Products/blondie-7.jpeg';
const blondie8 = '../assets/Products/blondie-8.jpeg';
const blondie9 = '../assets/Products/blondie-9.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_PAN,
    BAKING_POWDER,
    BROWN_SUGAR,
    CORNSTARCH,
    EGG,
    EGG_YOLK,
    MEDIUM_BOWL,
    MIXING_BOWL,
    OVEN,
    SALT,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    SPATULA,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

const SUGARS_SECTION = 'Sugars';
const WET_INGREDIENTS = 'Wet Ingredients';
const DRY_INGREDIENTS = 'Dry Ingredients';
const CHOCOLATE_CHIP_SECTION = 'Chocolate Chips';

const CREAM_SUGARS = 'Cream Sugars and Butter';
const ADD_WET_INGREDIENTS = 'Add Wet Ingredients';
const MIX_DRY_INGREDIENTS = 'Mix Dry Ingredients';

module.exports = {
    cardName: 'Blondie',
    name: 'Blondie',
    img: blondie9,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 18, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Blondies', 
            link: "https://sugarspunrun.com/blondies-recipe/",
            authors: ['Sam Merritt'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SUGARS_SECTION },
        { ...BROWN_SUGAR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGARS_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGARS_SECTION },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_INGREDIENTS },
        { ...ALL_PURPOSE_FLOUR, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_CHIP_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        SPATULA,
        BAKING_PAN,
        MEDIUM_BOWL,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: CREAM_SUGARS },
        { step: 'Melt butter.', section: CREAM_SUGARS, img: blondie1 },
        { step: `In a mixing bowl, combine "${SUGARS_SECTION}" section ingredients until well mixed.`, section: CREAM_SUGARS, img: blondie2 },
        { step: `Add "${WET_INGREDIENTS}" section ingredients. Combine.`, section: ADD_WET_INGREDIENTS, img: blondie3 },
        { step: `In a medium bowl, combine "${DRY_INGREDIENTS}" section ingredients.`, section: MIX_DRY_INGREDIENTS, img: blondie4 },
        { step: 'Slowly combine the dry ingredients into the wet ingredients.', section: SECTIONS.ASSEMBLE, img: blondie5 },
        { step: 'Fold in chocolate chips or other desired fillings.', section: SECTIONS.ASSEMBLE, img: blondie6 },
        { step: 'Pour in batter in a baking pan. Line with parchment paper if using a metal pan.', section: SECTIONS.ASSEMBLE, img: blondie7 },
        { step: 'Bake for 25 to 30 minutes or until toothpick comes out clean when inserted.', section: SECTIONS.BAKE, img: blondie8 },
        { step: 'Enjoy these tasty, simple and light desserts.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The melted butter and the extra yolk are what give these blondies their chewy texture.' },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};