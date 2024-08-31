const riceCrispyBall = '../assets/Products/rice-crispy-ball.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS } = require("./constants");
const { MINI_MARSHMALLOWS, UNSALTED_BUTTER, VANILLA_EXTRACT, RICE_KRISPIES_CEREAL } = require('./ingredients');

module.exports = {
    cardName: 'Rice Krispy Ball',
    name: 'Rice Krispy Ball',
    img: riceCrispyBall,
    available: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    websites: [
        "https://www.spendwithpennies.com/extra-chewy-rice-krispie-treats/"
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MINI_MARSHMALLOWS, amount: '6 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...RICE_KRISPIES_CEREAL, amount: '6 c', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'serving plate or bowl' },
    ],
    directions: [
        { step: 'Over low heat, melt butter and marshmallows in a saucepan. Stir to prevent it from burning and help it be consistent.', type: SECTIONS.MAIN },
        { step: 'Remove the saucepan from heat and mix in vanilla.', type: SECTIONS.MAIN },
        { step: 'Stir while adding in the Rice Krispies cereal.', type: SECTIONS.MAIN },
        { step: 'Ball the dessert into individual balls. To keep it soft, do not squeeze the treats too much.', type: SECTIONS.MAIN },
        { step: 'Let cool and enjoy.', type: SECTIONS.MAIN },
    ]
};