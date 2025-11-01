const potstickers1 = '../assets/Products/potstickers-1.jpeg';
const potstickers2 = '../assets/Products/potstickers-2.jpeg';
const potstickers3 = '../assets/Products/potstickers-3.jpeg';
const potstickers4 = '../assets/Products/potstickers-4.jpeg';
const potstickers5 = '../assets/Products/potstickers-5.jpeg';
const potstickers6 = '../assets/Products/potstickers-6.jpeg';
const potstickers7 = '../assets/Products/potstickers-7.jpeg';
const potstickers8 = '../assets/Products/potstickers-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    CABBAGE,
    CAYENNE_PEPPER,
    FRYING_PAN,
    GARLIC,
    GINGER,
    GREEN_ONION,
    GROUND_PORK,
    HOT_WATER,
    LIGHT_SOY_SAUCE,
    RICE_WINE_VINEGAR,
    SALT,
    SESAME_OIL,
    STOVE,
    VEGETABLE_OIL,
    WATER,
} = require('./ingredients');

const FOR_STEAMING_SECTION = 'For Steaming';
const FOR_FRYING_SECTION = 'For Frying';

module.exports = {
    wip: true,
    cardName: 'Potstickers',
    name: 'Potstickers',
    img: potstickers7,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.STEAM],
    protein: [PROTEIN.PORK],
    type: [TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.SESAME, ALLERGIES.WHEAT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Potstickers',
            link: "https://www.allrecipes.com/recipe/261153/perfect-pot-stickers/",
            authors: ['John Mitzewich'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...GROUND_PORK, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...GREEN_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely diced', section: SECTIONS.FILLING },
        { ...GINGER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CABBAGE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: SECTIONS.FILLING },

        { ...ALL_PURPOSE_FLOUR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HOT_WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },

        { ...RICE_WINE_VINEGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DIPPING_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DIPPING_SAUCE },

        { ...WATER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'for steaming', section: FOR_STEAMING_SECTION },
        { ...VEGETABLE_OIL, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FOR_FRYING_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
    ],
    directions: [
        { step: `Mix together all the ingredients for the filling in a mixing bowl.`, section: SECTIONS.PREP_FILLING, img: potstickers1 },
        { step: `Cover and chill for 1 hour.`, section: SECTIONS.PREP_FILLING },

        { step: `In a bowl mix together salt and flour.`, section: SECTIONS.PREP_DOUGH },
        { step: `Pour in hot water slowly.`, section: SECTIONS.PREP_DOUGH },
        { step: `Stir until dough forms.`, section: SECTIONS.PREP_DOUGH },
        { step: `Flour hands and move dough to work surface.`, section: SECTIONS.PREP_DOUGH },
        { step: `Knead until dough becomes smooth (about 3 to 5 minutes). Add up to ½ c flour as needed. `, section: SECTIONS.PREP_DOUGH },
        { step: `Wrap dough in plastic and let it rest for 30 minutes.`, section: SECTIONS.PREP_DOUGH, img: potstickers2 },
        { step: `Use a 1/2 c measuring cup to cut the dough pieces.`, section: SECTIONS.PREP_DOUGH, img: potstickers3 },
        { step: `Flatten the dough to about 3 ½ inch discs on a lightly floured surface.`, section: SECTIONS.PREP_DOUGH },
        { step: `Repeat for the rest of the dough.`, section: SECTIONS.PREP_DOUGH },

        { step: `Lightly moisten edges with wet finger.`, section: SECTIONS.ASSEMBLE },
        { step: `Add a scoop of filling in the center of the wrapper.`, section: SECTIONS.ASSEMBLE },
        { step: `Fold 2 sides up and pinch together.`, section: SECTIONS.ASSEMBLE },
        { step: `Pinch the edges to “pleat”.`, section: SECTIONS.ASSEMBLE, img: potstickers4 },
        { step: `Lightly tap the potstickers on the surface to flatten the bottom.`, section: SECTIONS.ASSEMBLE },
        { step: `Repeat for the remaining potstickers.`, section: SECTIONS.ASSEMBLE },

        { step: `Mix together sauce ingredients.`, section: SECTIONS.PREP_SAUCE },

        { step: `Over medium-high heat, in a pan add potstickers and water.`, section: SECTIONS.STEAM, img: potstickers5 },
        { step: `Cover pan with a lid. Steam (about 3 minutes).`, section: SECTIONS.STEAM, img: potstickers6 },

        { step: `Uncover. Reduce heat to medium.`, section: SECTIONS.PAN_FRY },
        { step: `Add oil and cook until bottom is golden brown (about 2 minutes).`, section: SECTIONS.PAN_FRY },
        { step: `Remove and set somewhere to keep warm.`, section: SECTIONS.PAN_FRY, img: potstickers8 },

        { step: `Serve with dipping sauce.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until warm. Then over medium heat, pan fry with a little oil until crispy on both sides.',
        },
    ],
    mealPrep: true,
};