// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { SHALLOT, BLACK_PEPPER, WHITE_VINEGAR, WHITE_WINE, WATER, UNSALTED_BUTTER, EGG_YOLKS, CAYENNE_PEPPER, TARRAGON, CAPER } = require('./ingredients');

const REDUCTION_SECTION = 'Reduction';
const BUTTER_SECTION = 'Butter';
const HOLLANDAISE_SAUCE_SECTION = 'Hollandaise Sauce';

const PREP_REDUCTION = 'Prep Reduction';
const PREP_BUTTER = 'Prep Butter';
const PREP_HOLLANDAISE_SAUCE = 'Prep Hollandaise Sauce';

module.exports = {
    wip: true,
    cardName: 'Béarnaise Sauce',
    name: 'Béarnaise Sauce',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.FRENCH],
    method: [METHODS.SIMMER],
    type: [TYPES.SAUCE],
    yields: { amount: 1, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Béarnaise Sauce', link: 'https://www.allrecipes.com/recipe/256569/chef-johns-bearnaise-sauce/' }
    ],
    separated: true,
    ingredients: [
        { ...TARRAGON, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'coarsely chopped', section: REDUCTION_SECTION },
        { ...SHALLOT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thinly sliced', section: REDUCTION_SECTION },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: REDUCTION_SECTION },
        { ...WHITE_VINEGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: REDUCTION_SECTION },
        { ...WHITE_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: REDUCTION_SECTION },
        { ...WATER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: REDUCTION_SECTION },

        { ...TARRAGON, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'coarsely chopped', section: BUTTER_SECTION },
        { ...CAPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTER_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold', section: BUTTER_SECTION },

        { ...EGG_YOLKS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HOLLANDAISE_SAUCE_SECTION },
        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold and cubed', section: HOLLANDAISE_SAUCE_SECTION },
        { ...CAYENNE_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: HOLLANDAISE_SAUCE_SECTION },
        { ...CAYENNE_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: HOLLANDAISE_SAUCE_SECTION },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: HOLLANDAISE_SAUCE_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'strainer' },
        { name: 'bowl' },
        { name: 'mortar and pestle' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'In a saucepan, combine the "Reduction" section ingredients.', type: PREP_REDUCTION },
        { step: 'Over medium-high heat, bring to a simmer. Stir.', type: PREP_REDUCTION },
        { step: 'Reduce to medium-low heat. Continue to gently simmer until it reduces to about 3 tablespoon of liquid (about 20 to 30 minutes).', type: PREP_REDUCTION },
        { step: 'Remove from heat.', type: PREP_REDUCTION },
        { step: 'Run the liquid through a strainer into a bowl. Set aside.', type: PREP_REDUCTION },

        { step: 'In a mortar, mash the tarragon and capers with a pestle (about 1 minute).', type: PREP_BUTTER },
        { step: 'Add cold butter. Mash until combined.', type: PREP_BUTTER },
        { step: 'Transfer to some plastic wrap. Chill.', type: PREP_BUTTER },

        { step: 'In a wok, add egg yolks.', type: PREP_HOLLANDAISE_SAUCE },
        { step: 'Add 3 tablespoons of the Reduction liquid section. Whisk.', type: PREP_HOLLANDAISE_SAUCE },
        { step: 'Add cold butter.', type: PREP_HOLLANDAISE_SAUCE },
        { step: 'Over medium heat, whisk the contents of the wok constantly until it thickens.', type: PREP_HOLLANDAISE_SAUCE },
        { step: 'As the butter melts the sauce should become a lighter yellow color (about 8 to 10 minutes).', type: PREP_HOLLANDAISE_SAUCE },
        { step: 'Once the sauce is thick, reduce to low heat and add in the chilled butter mixture.', type: PREP_HOLLANDAISE_SAUCE },
        { step: 'Remove from heat. Taste and add salt and cayenne pepper as needed.', type: PREP_HOLLANDAISE_SAUCE },
        
        { step: 'Serve this sauce over your favorite protein and roasted vegetables.', type: SECTIONS.SERVE },
    ]
};