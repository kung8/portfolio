const butter = '../assets/Products/no-bake-cookie-butter.jpeg';
const melted = '../assets/Products/no-bake-cookie-melted.jpeg';
const oat = '../assets/Products/no-bake-cookie-oat.jpeg';
const all = '../assets/Products/no-bake-cookie-all.jpeg';
const finished = '../assets/Products/no-bake-cookie-finished.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS } = require("./constants");
const {
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    MILK,
    VANILLA_EXTRACT,
    STEEL_OATS,
    PEANUT_BUTTER,
    COCOA_POWDER,
} = require('./ingredients');

module.exports = {
    cardName: 'No Bake Cookies',
    name: 'No Bake Cookies',
    img: finished,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.PEANUT],
    yields: '32 servings',
    prepTime: '5 m',
    cookTime: '10 m',
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '1 3/4 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COCOA_POWDER, amount: '1/3 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 tsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: '2/3 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...STEEL_OATS, amount: '3 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'plates' },
    ],
    directions: [
        { step: 'Add sugar, cocoa, butter and milk into a saucepan.', type: SECTIONS.MAIN, img: butter },
        { step: 'Over medium heat, melt down and stir frequently until it boils.', type: SECTIONS.MAIN, img: melted },
        { step: 'Let it boils for about 60 seconds.', type: SECTIONS.MAIN },
        { step: 'Remove from heat and add the vanilla, peanut butter and oats.', type: SECTIONS.MAIN, img: oat },
        { step: 'Mix well.', type: SECTIONS.MAIN },
        { step: 'Spoon and shape dough balls onto plates.', type: SECTIONS.MAIN, img: all },
        { step: 'Let it set for 20 to 30 minutes in the refrigerator.', type: SECTIONS.MAIN },
    ]
};