const cheesecake1 = '../assets/Products/basque-cheesecake-1.jpeg';
const cheesecake2 = '../assets/Products/basque-cheesecake-2.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { CREAM_CHEESE, HEAVY_CREAM, WHITE_SUGAR, ALL_PURPOSE_FLOUR, EGG, EGG_YOLK, VANILLA_EXTRACT } = require('./ingredients');

const CREAM_CHEESE_MIXTURE = 'Cream Cheese Mixture';
const FLOUR_MIXTURE = 'Flour Mixture';
const VANILLA_SECTION = 'Vanilla Extract';

const PREP_BAKE = 'Prep Bake';
const CREAM_CHEESE_SECTION = 'Cream Cheese';
const PREP_FLOUR_MIXTURE = 'Prep Flour Mixture';
const ADD_EGGS = 'Add Eggs';
const ADD_VANILLA = 'Add Vanilla';

module.exports = {
    cardName: 'Basque Cheesecake',
    name: 'Basque Cheesecake',
    img: cheesecake2,
    recipeAuthors: ['Tavel Bristol-Joseph'],
    recipeFinder: 'Sam Giraud-Carrier',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.SPANISH],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 7, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Basque Cheesecake', link: 'https://www.foodandwine.com/recipes/basque-cheesecake' }
    ],
    separated: true,
    ingredients: [
        { ...CREAM_CHEESE, amount: 36, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'room temperature', section: CREAM_CHEESE_MIXTURE },
        { ...WHITE_SUGAR, amount: 5 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_CHEESE_MIXTURE },
        { ...HEAVY_CREAM, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_MIXTURE },
        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FLOUR_MIXTURE },
        { ...EGG, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_SECTION },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: '10-inch springform pan' },
        { name: 'parchment paper' },
        { name: 'mixing bowl' },
        { name: 'wire rack' },
    ],
    directions: [
        { step: 'Preheat oven to 450ºF.', section: PREP_BAKE },
        { step: 'Line a springform pan with two intersecting parchment paper so that it hangs about 2 inches over the edge.', section: PREP_BAKE },
        { step: `In a stand mixer, combine the "${CREAM_CHEESE_MIXTURE}" section ingredients. Beat until smooth and creamy. Scrape down sides as needed.`, section: CREAM_CHEESE_SECTION },
        { step: `In a mixing bowl, whisk together "${FLOUR_MIXTURE}" section ingredients.`, section: PREP_FLOUR_MIXTURE },
        { step: `Add "${FLOUR_MIXTURE}" to the "${CREAM_CHEESE_MIXTURE}". Mix.`, section: PREP_FLOUR_MIXTURE },
        { step: `Add "${SECTIONS.EGGS}" section ingredients, one at a time. Mix.`, section: ADD_EGGS },
        { step: `Add vanilla. Mix.`, section: ADD_VANILLA },
        { step: 'Pour into pan.', section: SECTIONS.BAKE },
        { step: 'Bake until the top is dark brown and center is still jiggly (about 30 minutes).', section: SECTIONS.BAKE },
        { step: 'Transfer to a wire rack. Let cool to room temperature (about 3 hours).', section: SECTIONS.COOL },
        { step: 'Chill uncovered (at least 4 hours to 3 days).', section: SECTIONS.CHILL },
        { step: 'Let the cheesecake come to room temperature for 30 minutes before serving.', section: SECTIONS.SERVE, img: cheesecake1 },
    ],
    notes: [
        { note: 'This is much lighter than regular cheesecake. It has a caramelized top and is not as thick and rich as regular cheesecake. It does not take as long to cook and does not require a water bath.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};