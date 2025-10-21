// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, BOWL, CAPER, CAYENNE_PEPPER, EGG_YOLK, MORTAR_AND_PESTLE, SAUCEPAN, SHALLOT, STOVE, STRAINER, TARRAGON, UNSALTED_BUTTER, WATER, WHITE_VINEGAR, WHITE_WINE, WOK } = require('./ingredients');

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
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.FRENCH],
    method: [METHODS.SIMMER],
    type: [TYPES.SAUCE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 1, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Béarnaise Sauce', 
            link: 'https://www.allrecipes.com/recipe/256569/chef-johns-bearnaise-sauce/',
            author: ['John Mitzewich'],
            finder: 'Kevin Ung', 
        }
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

        { ...EGG_YOLK, amount: 2, unit: '', additionalDetails: '', section: HOLLANDAISE_SAUCE_SECTION },
        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold and cubed', section: HOLLANDAISE_SAUCE_SECTION },
        { ...CAYENNE_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: HOLLANDAISE_SAUCE_SECTION },
        { ...CAYENNE_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: HOLLANDAISE_SAUCE_SECTION },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: HOLLANDAISE_SAUCE_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        STRAINER,
        BOWL,
        MORTAR_AND_PESTLE,
        WOK
    ],
    directions: [
        { step: `In a saucepan, combine the "${REDUCTION_SECTION}" section ingredients.`, section: PREP_REDUCTION },
        { step: 'Over medium-high heat, bring to a simmer. Stir.', section: PREP_REDUCTION },
        { step: 'Reduce to medium-low heat. Continue to gently simmer until it reduces to about 3 tablespoon of liquid (about 20 to 30 minutes).', section: PREP_REDUCTION },
        { step: 'Remove from heat.', section: PREP_REDUCTION },
        { step: 'Run the liquid through a strainer into a bowl. Set aside.', section: PREP_REDUCTION },

        { step: 'In a mortar, mash the tarragon and capers with a pestle (about 1 minute).', section: PREP_BUTTER },
        { step: 'Add cold butter. Mash until combined.', section: PREP_BUTTER },
        { step: 'Transfer to some plastic wrap. Chill.', section: PREP_BUTTER },

        { step: 'In a wok, add egg yolks.', section: PREP_HOLLANDAISE_SAUCE },
        { step: 'Add 3 tablespoons of the Reduction liquid section. Whisk.', section: PREP_HOLLANDAISE_SAUCE },
        { step: 'Add cold butter.', section: PREP_HOLLANDAISE_SAUCE },
        { step: 'Over medium heat, whisk the contents of the wok constantly until it thickens.', section: PREP_HOLLANDAISE_SAUCE },
        { step: 'As the butter melts the sauce should become a lighter yellow color (about 8 to 10 minutes).', section: PREP_HOLLANDAISE_SAUCE },
        { step: 'Once the sauce is thick, reduce to low heat and add in the chilled butter mixture.', section: PREP_HOLLANDAISE_SAUCE },
        { step: 'Remove from heat. Taste and add salt and cayenne pepper as needed.', section: PREP_HOLLANDAISE_SAUCE },
        
        { step: 'Serve this sauce over your favorite protein and roasted vegetables.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.DOUBLE_BOIL,
            instruction: 'In a double boiler, gently reheat the sauce over low heat, stirring constantly until warmed through. Be careful not to let it boil or overcook it -- the sauce may separate.',
        },
    ],
    mealPrep: false,
};