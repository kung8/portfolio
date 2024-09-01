const completely = '../assets/Products/rice-krispy-treat-completely-melted-marshmallows.jpeg';
const corner = '../assets/Products/rice-krispy-treat-in-pan-corner.jpeg';
const pan = '../assets/Products/rice-krispy-treat-in-pan.jpeg';
const marshmallowsZoomed = '../assets/Products/rice-krispy-treat-marshmallows-zoomed.jpeg';
const marshmallows = '../assets/Products/rice-krispy-treat-marshmallows.jpeg';
const melted = '../assets/Products/rice-krispy-treat-melted-marshmallows.jpeg';
const melting = '../assets/Products/rice-krispy-treat-melting-marshmallows.jpeg';
const riceKrispy = '../assets/Products/rice-krispy-treat-rice-krispy.jpeg';
const vanilla = '../assets/Products/rice-krispy-treat-vanilla.jpeg';
const zoomed1 = '../assets/Products/rice-krispy-treat-zoomed-center-1.jpeg';
const zoomed2 = '../assets/Products/rice-krispy-treat-zoomed-center-2.jpeg';
const zoomed3 = '../assets/Products/rice-krispy-treat-zoomed-center-3.jpeg';
const lengthwise = '../assets/Products/rice-krispy-treat-zoomed-lengthwise.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS } = require("./constants");
const { MINI_MARSHMALLOWS, UNSALTED_BUTTER, VANILLA_EXTRACT, RICE_KRISPIES_CEREAL } = require('./ingredients');

module.exports = {
    cardName: 'Rice Krispy Treats',
    name: 'Rice Krispy Treats',
    img: zoomed3,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    yields: '12 servings',
    prepTime: '1 m',
    cookTime: '20 m',
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
        { step: 'Over low heat, melt butter and marshmallows in a saucepan. Stir to prevent it from burning and help it be consistent. My suggestion is to mix until the marshmallows are coated with the butter.', type: SECTIONS.MAIN, img: [marshmallows, marshmallowsZoomed, melting, melted, completely] },
        { step: 'Remove the saucepan from heat and mix in vanilla.', type: SECTIONS.MAIN, img: vanilla },
        { step: 'Stir while adding in the Rice Krispies cereal. Mix until the cereal is evenly coated.', type: SECTIONS.MAIN, img: riceKrispy },
        { step: 'Press into a greased 9x13 pan. But do not press them too hard if you want the treats to be a little softer.', type: SECTIONS.MAIN, img: [pan, corner, zoomed1, zoomed2, lengthwise] },
        { step: 'Let cool and enjoy.', type: SECTIONS.MAIN },
    ]
};