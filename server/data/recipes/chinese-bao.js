// const bao = '../assets/Products/bao.jpeg';
const sausage = '../assets/Products/bao-chinese-sausage.jpeg';
const zoomed = '../assets/Products/bao-close-up.jpeg';
const cooked = '../assets/Products/bao-cooked.jpeg';
const dough = '../assets/Products/bao-dough.jpeg';
const balls = '../assets/Products/bao-dough-balls.jpeg';
const filling = '../assets/Products/bao-filling.jpeg';
const pork = '../assets/Products/bao-ground-pork.jpeg';
const boiled = '../assets/Products/bao-hard-boiled-eggs.jpeg';
const container = '../assets/Products/bao-in-container.jpeg';
const raw = '../assets/Products/bao-in-steamer-raw.jpeg';
// const ingredients = '../assets/Products/bao-ingredients.jpeg';
const quartered = '../assets/Products/bao-quartered-eggs.jpeg';
const pot = '../assets/Products/bao-steamer-over-pot.jpeg';
// const steamer = '../assets/Products/bao-steamer.jpeg';
const water = '../assets/Products/bao-water.jpeg';
const withFilling = '../assets/Products/bao-with-filling.jpeg';
const { CATEGORIES, GENRES, METHODS, TYPES, SECTIONS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_LOCATION, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, REHEAT_METHODS } = require("./constants");
const {
    MIXING_BOWL,
    YEAST,
    WHITE_SUGAR,
    BREAD_FLOUR,
    CORNSTARCH,
    VEGETABLE_OIL,
    BAKING_POWDER,
    GROUND_PORK,
    CHINESE_SAUSAGE,
    EGG,
    MUSHROOM,
    OYSTER_SAUCE,
    GARLIC,
    WATER,
    STOVE,
    SMALL_BOWL,
    SAUCEPAN,
    FRYING_PAN,
    STEAMER,
    LARGE_POT,
} = require('./ingredients');

module.exports = {
    cardName: 'Bao',
    name: 'Chinese Bao',
    img: cooked,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STEAM],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
    yields: { amount: 16, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 130, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...YEAST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },

        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...BREAD_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...VEGETABLE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...BAKING_POWDER, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },

        { ...GROUND_PORK, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cooked', section: SECTIONS.FILLING },
        { ...CHINESE_SAUSAGE, amount: 2, unit: INGREDIENT_UNITS.STICK, additionalDetails: 'sliced', section: SECTIONS.FILLING },
        { ...EGG, amount: 5, unit: '', additionalDetails: 'hard-boiled', section: SECTIONS.FILLING },
        { ...MUSHROOM, amount: 1, unit: INGREDIENT_UNITS.HANDFUL, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.FILLING },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SMALL_BOWL,
        MIXING_BOWL,
        SAUCEPAN,
        FRYING_PAN,
        STEAMER,
        LARGE_POT,
    ],
    directions: [
        { step: 'In a small bowl, mix together yeast, the 1/4 c warm water, and the 1 Tbsp sugar. Set aside for 10 minutes.', section: SECTIONS.DOUGH },
        { step: 'In a mixing bowl (or stand mixer), combine bread flour, cornstarch and sugar.', section: SECTIONS.DOUGH },
        { step: 'Add the yeast mixture, oil and water to the mixing bowl.', section: SECTIONS.DOUGH },
        { step: 'Combine until the dough is not as sticky. As needed, add a little bit of flour or water incrementally to help with wetness or dryness, respectively.', section: SECTIONS.DOUGH },
        { step: 'Cover bowl, set it in a warm place, and let sit for 2 hours. It should double in size.', section: SECTIONS.DOUGH },
        { step: 'Remove cover, add baking powder and combine.', section: SECTIONS.DOUGH },

        { step: 'Boil the eggs in a small pot. De-shell.', section: SECTIONS.FILLING, img: boiled },
        { step: 'Cut the eggs into quarters.', section: SECTIONS.FILLING, img: quartered },
        { step: 'Brown the ground pork in a small pan and remove from heat.', section: SECTIONS.FILLING, img: pork },
        { step: 'Combine the minced mushrooms, garlic, oyster sauce to the pan until well mixed.', section: SECTIONS.FILLING, img: filling },
        { step: 'Slice the chinese sausage at an angle.', section: SECTIONS.FILLING, img: sausage },

        { step: 'On a clean counter, dust some flour and lightly knead the dough.', section: SECTIONS.MAIN },
        { step: 'Cut dough into 12 equal parts.', section: SECTIONS.MAIN, img: balls },
        { step: 'Roll out each dough piece into flat circles about 3 to 4 inches in diameter.', section: SECTIONS.MAIN, img: dough },
        { step: 'Add filling in the center of circles (honestly you can add whatever ingredients you want inside the baos as long as they are cooked enough).', section: SECTIONS.MAIN, img: withFilling },
        { step: 'Bring up the sides of the dough to enclose the filling.', section: SECTIONS.MAIN },
        { step: 'Adjust the amount of filling as needed for future baos.', section: SECTIONS.MAIN },
        { step: 'Pinch the top to twist.', section: SECTIONS.MAIN },
        { step: 'Fill a large pot with water and add 1 Tbsp of vinegar. The vinegar helps the baos to remain white as it cooks.', section: SECTIONS.MAIN, img: water },
        { step: 'Over medium-high heat, boil the water.', section: SECTIONS.MAIN },
        { step: 'Place the baos in the steamer tiers. Be careful not to crowd them. I recommend placing baos on individual parchment papers to prevent sticking to the steamer while still allowing for the ventilation for the steam to come through.', section: SECTIONS.MAIN, img: raw },
        { step: 'Let the baos cook for 15 to 20 minutes. Check on the amount of water occasionally to ensure that the pot doesn\'t burn.', section: SECTIONS.MAIN, img: pot },
        { step: 'Once the baos cooked, let them cool for a little bit before serving.', section: SECTIONS.MAIN, img: zoomed },
        { step: 'Enjoy these delicious Chinese filled goodness. In China and other Asian countries, these could be eaten for breakfast too.', section: SECTIONS.MAIN, img: container },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with a damp paper towel and microwave until heated through (about 30 to 60 seconds).',
        },
    ],
    mealPrep: true,
};