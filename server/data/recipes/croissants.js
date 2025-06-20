// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { MILK, BROWN_SUGAR, YEAST, ALL_PURPOSE_FLOUR, SALT, UNSALTED_BUTTER, EGG } = require('./ingredients');

const DOUGH_SECTION = 'Dough';
const BUTTER_SECTION = 'Butter';
const EGG_WASH_SECTION = 'Egg Wash';

const MAKE_DOUGH = 'Make Dough';
const PREP_BUTTER = 'Prep Butter';
const FIRST_FOLD = 'First Fold';
const ADDITIONAL_FOLDS = 'Additional Folds';
const SHAPE_CROISSANTS = 'Shape Croissants';
const PREP_EGG_WASH = 'Prepare Egg Wash';
const BAKE_CROISSANTS = 'Bake Croissants';

module.exports = {
    wip: true,
    cardName: 'Croissants',
    name: 'Croissants',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 14, unit: TIME_UNITS.HOUR },
    cookTime: { amount: 24, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 11, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Croissants', link: 'https://www.jocooks.com/recipes/homemade-croissants/' }
    ],
    separated: true,
    ingredients: [
        { ...MILK, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'lukewarm', section: DOUGH_SECTION },
        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...YEAST, amount: 13 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 13 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUTTER_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: EGG_WASH_SECTION },
    ],
    appliances: [
        { name: 'stand mixer' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'rolling pin' },
        { name: 'plastic wrap' },
        { name: 'dough knife' },
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'In a stand mixer, combine warm milk, brown sugar and yeast.', section: MAKE_DOUGH },
        { step: 'Let it sit until it gets foamy and the yeast has dissolved (about 5 minutes).', section: MAKE_DOUGH },
        { step: 'Add 3 cups of flour and salt. Mix on low until smooth and soft (about 5 minutes). If it is too sticky you can add more flour about 1 tablespoon at a time until the dough is soft and slightly sticky.', section: MAKE_DOUGH },
        { step: 'Transfer the dough to a clean surface and knead for several minutes.', section: MAKE_DOUGH },
        { step: 'Place dough back in bowl and cover the bowl with plastic wrap. Chill for an hour.', section: MAKE_DOUGH },

        { step: 'On a clean surface, place a large piece of plastic wrap.', section: PREP_BUTTER },
        { step: 'Place the chilled sticks of butter on the plastic and cover with another piece of plastic wrap.', section: PREP_BUTTER },
        { step: 'With a rolling pin, pound and roll out the butter to an 8 x 5 inch rectangle.', section: PREP_BUTTER },
        { step: 'Wrap up the butter with the plastic wrap and chill in the refrigerator.', section: PREP_BUTTER },

        { step: 'Lightly flour a work surface and roll out the dough to a 16 x 10 inch rectangle.', section: FIRST_FOLD },
        { step: 'Place the butter in the center of the dough.', section: FIRST_FOLD },
        { step: 'From the long side, fold into thirds to cover the butter (like a letter).', section: FIRST_FOLD },
        { step: 'From the short side, fold into thirds again.', section: FIRST_FOLD },
        { step: 'Wrap up the dough in plastic wrap and chill for another hour.', section: FIRST_FOLD },

        { step: 'Roll out the dough into a 16 x 10 inch rectangle.', section: ADDITIONAL_FOLDS },
        { step: 'Repeat the thirds folding technique, wrap and chill for an hour.', section: ADDITIONAL_FOLDS },
        { step: 'Repeat this process three more times (a total of 5 folds).', section: ADDITIONAL_FOLDS },
        { step: 'For the last fold, refrigerate for at least 8 hours.', section: ADDITIONAL_FOLDS },

        { step: 'Place the silicon baking mat on the baking sheets.', section: SHAPE_CROISSANTS },
        { step: 'Cut the dough in half and roll out each dough portion into 1/4 inch thick rectangles.', section: SHAPE_CROISSANTS },
        { step: 'Cut the dough into 6 equal rectangular pieces.', section: SHAPE_CROISSANTS },
        { step: 'Cut each piece diagonally into triangles (or keep them as rectangles). If you choose to keep them as rectangular shapes, optionally place your favorite fillings inside and roll them up.', section: SHAPE_CROISSANTS },
        { step: 'Stretch the triangle from the smallest angle a little.', section: SHAPE_CROISSANTS },
        { step: 'From the opposite side, start rolling up the triangle (similar to a crescent roll). Optionally fill the triangle with a piece of chocolate or ham and cheese (or your favorite fillings).', section: SHAPE_CROISSANTS },
        { step: 'Place finished croissants on the baking mat about 1 to 2 inches apart.', section: SHAPE_CROISSANTS },
        { step: 'Let the croissants rise for an hour (or cover with plastic wrap and refrigerate them up to 18 hours before baking).', section: SHAPE_CROISSANTS },

        { step: 'Beat the eggs and brush the croissants with the egg wash.', section: PREP_EGG_WASH },

        { step: 'Preheat the oven to 400ºF.', section: BAKE_CROISSANTS },
        { step: 'Bake for 8 to 12 minutes.', section: BAKE_CROISSANTS },
        { step: 'Turn heat down to 375ºF and bake until golden brown for another 8 to 12 minutes.', section: BAKE_CROISSANTS },

        { step: 'Enjoy these warm delicious flaky pastries.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil. Bake at 350ºF until heated through (about 5 minutes).',
        },
    ],
    mealPrep: true,
};