// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLENDER, ICE, LIME, PITCHER, SWEETENED_CONDENSED_MILK, WATER, WHITE_SUGAR } = require('./ingredients');

const BLENDED_SECTION = 'Blended';
const SWEETENER_SECTION = 'Sweetener';
const PREP_LIMES = 'Prep Limes';
const MAKE_LIMEADE = 'Make Limeade';

module.exports = {
    wip: true,
    cardName: 'Brazilian Lemonade',
    name: 'Brazilian Lemonade',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DRINK],
    genre: [GENRES.BRAZILIAN],
    method: [METHODS.BLEND],
    type: [TYPES.DRINK],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Brazilian Lemonade', 
            link: 'https://houseofnasheats.com/brazilian-lemonade-limeade/#wprm-recipe-container-15254',
            authors: ['Amy Nash'],
            finder: 'Montana Hiltbrand', 
        }
    ],
    ingredients: [
        { ...LIME, amount: 4, unit: '', additionalDetails: '', section: BLENDED_SECTION },
        { ...WATER, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BLENDED_SECTION },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BLENDED_SECTION },
        { ...SWEETENED_CONDENSED_MILK, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEETENER_SECTION },
        { ...LIME, amount: 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.SERVE },
        { ...ICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        BLENDER,
    ],
    supplies: [
        PITCHER,
    ],
    directions: [
        { step: `Wash limes thoroughly.`, section: PREP_LIMES },
        { step: `Slice the ends off and cut them into 1/8 wedges.`, section: PREP_LIMES },

        { step: `In a blender, combine the "${BLENDED_SECTION}" section ingredients in two batches.`, section: MAKE_LIMEADE },
        { step: `Strain the pulp and skin.`, section: MAKE_LIMEADE },
        { step: `Transfer to a pitcher.`, section: MAKE_LIMEADE },
        { step: `Add sweetened condensed milk. Mix.`, section: MAKE_LIMEADE },

        { step: `Serve with ice and additional lime slices. Add more sugar or sweetened condensed milk if it is bitter.`, section: SECTIONS.SERVE },
    ],
    mealPrep: true,
};