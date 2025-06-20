const sushi = '../assets/Products/sushi.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    SEAWEED,
    SUSHI_RICE,
    WHITE_VINEGAR,
    WHITE_SUGAR,
    SALT,
    AVOCADO,
    CUCUMBER,
    IMITATION_CRAB,
    TEMPURA_SHRIMP,
    CREAM_CHEESE,
    SALMON_FISH,
    LEMON,
    SESAME_SEEDS,
    WASABI,
    PONZU_SAUCE,
    LIGHT_SOY_SAUCE,
} = require('./ingredients');

module.exports = {
    cardName: 'Sushi',
    name: 'Sushi',
    recipeAuthor: '',
    recipeFinder: 'Aldin Pope',
    img: sushi,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.RAW],
    protein: [PROTEIN.FISH, PROTEIN.SEAFOOD],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...SEAWEED, amount: 8, unit: INGREDIENT_UNITS.SHEET, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SUSHI_RICE, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooled to room temperature', section: SECTIONS.RICE },
        { ...WHITE_VINEGAR, amount: 7, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...WHITE_SUGAR, amount: 7, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...AVOCADO, amount: 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.FILLING },
        { ...CUCUMBER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.FILLING },
        { ...IMITATION_CRAB, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'sliced', section: SECTIONS.FILLING },
        { ...TEMPURA_SHRIMP, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cooked', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALMON_FISH, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'sliced', section: SECTIONS.FILLING },
        { ...LEMON, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.FILLING },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...WASABI, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PONZU_SAUCE, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'sushi mat' },
        { name: 'plates' },
    ],
    directions: [
        { step: 'Mix in sugar, salt, and vinegar until sugar dissolves.', section: SECTIONS.RICE },
        { step: 'Mix this into the rice (make sure that the rice is close to room temperature to prevent the seaweed from shriveling up).', section: SECTIONS.RICE },
        { step: 'Prepare all the ingredients you want to use to fill the sushi rolls with.', section: SECTIONS.MAIN },
        { step: 'Place the shiny side of the seaweed on the bottom (so it will be on the outside when it\'s rolled up).', section: SECTIONS.MAIN },
        { step: 'The seaweed lines should be perpendicular to the sushi mat\'s lines.', section: SECTIONS.MAIN },
        { step: 'Place a light layer of rice on the seaweed covering the entire seaweed. Note: the more rice you add the less other ingredients you can fit.', section: SECTIONS.MAIN },
        { step: 'Starting about 1/3 the way up, place filling items, making sure to not pack it too much.', section: SECTIONS.MAIN },
        { step: 'Fold the sushi mat over the newly placed interior ingredients to secure the roll. Then pull back the mat and roll up some of it so that it will not get caught inside the roll.', section: SECTIONS.MAIN },
        { step: 'Continue rolling up the sushi roll, and pulling back the mat as needed.', section: SECTIONS.MAIN },
        { step: 'Place the finished sushi rolls on a plate and repeat these steps until all the sushi rolls are completed.', section: SECTIONS.MAIN },
        { step: 'Enjoy this American-adapted Japanese dish with some delicious, spicy wasabi. This type of sushi is called a California Roll.', section: SECTIONS.MAIN },
    ],
    store: null,
    reheat: null,
    mealPrep: false,
};