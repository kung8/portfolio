const scrambledEggs = '../assets/Products/scrambled-eggs.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, PROTEIN, UNITS, YIELD_UNITS } = require('./constants');
const {
    EGG,
    MILK,
    SOUR_CREAM,
    GREEN_BELL_PEPPERS,
    YELLOW_ONION,
    ROMA_TOMATO,
    COOKED_HAM,
    UNSALTED_BUTTER,
    SALT,
    BLACK_PEPPER,
    BASIL,
} = require('./ingredients');

module.exports = {
    cardName: 'Scrambled Eggs',
    name: 'Scrambled Eggs',
    img: scrambledEggs,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: '5 m',
    cookTime: '12 - 15 m',
    ingredients: [
        { ...EGG, amount: 3, unit: '', additionalDetails: '', optional: false },
        { ...MILK, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...SOUR_CREAM, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...GREEN_BELL_PEPPERS, amount: 1 / 8, unit: '', additionalDetails: 'diced', optional: false },
        { ...YELLOW_ONION, amount: 1 / 8, unit: UNITS.MEDIUM, additionalDetails: 'diced', optional: false },
        { ...ROMA_TOMATO, amount: 1 / 8, unit: '', additionalDetails: 'diced', optional: false },
        { ...COOKED_HAM, amount: 1, unit: UNITS.SLICE, additionalDetails: 'diced', optional: false },
        { ...UNSALTED_BUTTER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...BASIL, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'spatula' },
        { name: 'measuring cups' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Mix together the eggs, milk, sour cream, salt, pepper, and basil. Allow the seasonings some time to enrich the flavor.', type: SECTIONS.MAIN },
        { step: 'While the seasonings are doing their thing, prep all the cutting of these ingredients (and any additional ingredients that you may want to add to your eggs). Be sure any meats are cooked or else you will need to add some additional time for those ingredients to cook.', type: SECTIONS.MAIN },
        { step: 'Once the ingredients are prepped, heat up a pan over medium-high heat. Add just a little butter when the pan is hot.', type: SECTIONS.MAIN },
        { step: 'Once butter has melted, add the vegetables and ham being sure they are spread around the pan to ensure proper browning.', type: SECTIONS.MAIN },
        { step: 'Cook for about 3 - 4 minutes being sure to stir occasionally to prevent burnt pieces.', type: SECTIONS.MAIN },
        { step: 'Now pour in the egg batter over the vegetables.', type: SECTIONS.MAIN },
        { step: 'While still keeping it over the heat, tilt and angle the pan so the runny egg on top can spread to more parts of the pan and you can even take the spatula and lift the edges of the cooking egg and let gravity do its job to have the runny egg batter fill underneath it. Allow to cook for just a few minutes.', type: SECTIONS.MAIN },
        { step: 'Start scrambling the eggs and continue to cook until the egg pieces are brownish-yellow (and you can cook them to your preferred egg state).', type: SECTIONS.MAIN },
        { step: 'Serve and enjoy this nice warm start to a beautiful day!', type: SECTIONS.MAIN },
    ]
}