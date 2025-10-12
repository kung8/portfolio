const batterPan = '../assets/Products/blondie-batter-pan.jpeg';
const batter = '../assets/Products/blondie-batter.jpeg';
const butter = '../assets/Products/blondie-butter.jpeg';
const dry = '../assets/Products/blondie-dry.jpeg';
const eggs = '../assets/Products/blondie-eggs.jpeg';
const flour = '../assets/Products/blondie-flour.jpeg';
const pan = '../assets/Products/blondie-pan.jpeg';
const plated = '../assets/Products/blondie-plated.jpeg';
const sugars = '../assets/Products/blondie-sugars.jpeg';
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

module.exports = {
    cardName: 'Blondie',
    name: 'Blondie',
    img: plated,
    recipeAuthors: ['Sam Merritt'],
    recipeFinder: 'Kevin Ung',
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
        { label: 'Blondies', link: "https://sugarspunrun.com/blondies-recipe/" }
    ],
    separated: false,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Melt butter.', section: SECTIONS.MAIN, img: butter },
        { step: 'In a mixing bowl, combine melted butter and both sugars until well mixed.', section: SECTIONS.MAIN, img: sugars },
        { step: 'Add eggs, yolk and vanilla. Combine.', section: SECTIONS.MAIN, img: eggs },
        { step: 'In a medium bowl, combine flour, cornstarch, baking powder and salt.', section: SECTIONS.MAIN, img: dry },
        { step: 'Slowly combine the dry ingredients into the wet ingredients.', section: SECTIONS.MAIN, img: flour },
        { step: 'Fold in chocolate chips or other desired fillings.', section: SECTIONS.MAIN, img: batter },
        { step: 'Pour in batter in a baking pan. Line with parchment paper if using a metal pan.', section: SECTIONS.MAIN, img: batterPan },
        { step: 'Bake for 25 to 30 minutes or until toothpick comes out clean when inserted.', section: SECTIONS.MAIN, img: pan },
        { step: 'Enjoy these tasty, simple and light desserts.', section: SECTIONS.MAIN },
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