const gravy1 = '../assets/Products/kfc-gravy-1.jpeg';
const gravy2 = '../assets/Products/kfc-gravy-2.jpeg';
const gravy3 = '../assets/Products/kfc-gravy-3.jpeg';
const gravy4 = '../assets/Products/kfc-gravy-4.jpeg';
const gravy5 = '../assets/Products/kfc-gravy-5.jpeg';
const gravy6 = '../assets/Products/mash-potatoes-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BEEF_BOUILLON_CUBE, BLACK_PEPPER, CHICKEN_BOUILLON_CUBE, ONION_POWDER, SALT, SAUCEPAN, STOVE, UNSALTED_BUTTER, WATER, WHISK } = require('./ingredients');

const ROUX_SECTION = 'Roux';

const PREP_BROTH = 'Prep Broth';
const PREP_ROUX = 'Prep Roux';
const COOK_GRAVY = 'Cook Gravy';

module.exports = {
    cardName: 'KFC Gravy',
    name: 'KFC Gravy',
    img: gravy5,
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.BEEF, PROTEIN.CHICKEN],
    type: [TYPES.SAUCE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'KFC Gravy',
            link: 'https://www.recipetineats.com/gravy/',
            authors: ['Nagi Maehashi'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...CHICKEN_BOUILLON_CUBE, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...BEEF_BOUILLON_CUBE, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...WATER, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'hot', section: SECTIONS.BROTH },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ROUX_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ROUX_SECTION },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ROUX_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ROUX_SECTION },

        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        WHISK,
    ],
    directions: [
        { step: `Dissolve the bouillon cubes in the hot water.`, section: PREP_BROTH },

        { step: `Over medium heat, melt butter in a saucepan.`, section: PREP_ROUX, img: gravy1 },
        { step: `Stir in flour, onion powder and black pepper. Whisk.`, section: PREP_ROUX, img: [gravy2, gravy3] },

        { step: `While stirring, add in half the broth. It should thicken and become more uniform.`, section: COOK_GRAVY, img: gravy4 },
        { step: `Stir in the remaining broth.`, section: COOK_GRAVY },
        { step: `Stir until it thickens to a gravy consistency (about 1 1/2 to 2 minutes).`, section: COOK_GRAVY },
        { step: `Taste and, if needed, add salt and pepper.`, section: COOK_GRAVY },

        { step: `Serve this warm over whatever you want.`, section: SECTIONS.SERVE, img: gravy6 },
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
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over low heat, stir occasionally until warmed through.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for 1 minute. Stir. Continue microwaving in 30 second intervals until warmed through.',
        },
    ],
    mealPrep: true,
};