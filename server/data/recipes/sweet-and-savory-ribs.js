const ribs1 = '../assets/Products/sweet-and-savory-ribs-1.jpeg';
const ribs2 = '../assets/Products/sweet-and-savory-ribs-2.jpeg';
const ribs3 = '../assets/Products/sweet-and-savory-ribs-3.jpeg';
const ribs4 = '../assets/Products/sweet-and-savory-ribs-4.jpeg';
const ribs5 = '../assets/Products/sweet-and-savory-ribs-5.jpeg';
const ribs6 = '../assets/Products/sweet-and-savory-ribs-6.jpeg';
const ribs7 = '../assets/Products/sweet-and-savory-ribs-7.jpeg';
const ribs8 = '../assets/Products/sweet-and-savory-ribs-8.jpeg';
const ribs9 = '../assets/Products/sweet-and-savory-ribs-9.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { BEEF_RIBS, GREEN_ONION, CILANTRO, GARLIC, ORANGE_JUICE, FISH_SAUCE, OYSTER_SAUCE, HONEY, CHICKEN_BOUILLON, GARLIC_POWDER, ONION_POWDER, BLACK_PEPPER, RED_PEPPER_FLAKES } = require('./ingredients');

const RIBS_SECTIONS = 'Ribs';

const PREP_RIBS = 'Prep Ribs';
const COOK_RIBS = 'Cook Ribs';

module.exports = {
    cardName: 'Sweet and Savory Ribs',
    name: 'Sweet and Savory Ribs',
    img: ribs9,
    recipeAuthors: ['Stephvnietea'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.VIETNAMESE, GENRES.ASIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.PROTEIN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 75, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 8, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Sweet and Savory Beef Ribs', link: 'https://www.instagram.com/reel/DLnzlZGh9-s/' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_RIBS, amount: 8, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'or pork ribs', section: RIBS_SECTIONS },

        { ...GREEN_ONION, amount: 2, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'thinly sliced', section: SECTIONS.MARINADE },
        { ...CILANTRO, amount: 2, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 3 / 2, unit: INGREDIENT_UNITS.HEAD, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...ORANGE_JUICE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...FISH_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OYSTER_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...HONEY, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CHICKEN_BOUILLON, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'aluminum foil' },
        { name: 'baking dish' },
    ],
    directions: [
        { step: 'Clean ribs and cut into individual ribs.', section: PREP_RIBS, img: ribs1 },
        { step: `In a mixing bowl, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: PREP_RIBS },
        { step: 'Combine the ribs in the marinade.', section: PREP_RIBS, img: [ribs2, ribs3, ribs4] },
        { step: 'Cover and marinate the ribs overnight.', section: PREP_RIBS },

        { step: 'Preheat the oven to 350ºF.', section: COOK_RIBS },
        { step: 'Place ribs in a baking dish in a single layer.', section: COOK_RIBS, img: [ribs5, ribs6] },
        { step: 'Tent the aluminum foil.', section: COOK_RIBS },
        { step: 'Bake until the ribs are about 70% cooked (about 45 minutes to 1 hour depending on the rib thickness).', section: COOK_RIBS, img: ribs7 },
        { step: 'Uncover and broil ribs on both sides (about 13 to 15 minutes per side).', section: COOK_RIBS, img: ribs8 },
        { step: 'Remove from the oven and let it rest before serving (about 15 minutes).', section: COOK_RIBS },

        { step: 'Enjoy this Vietnamese flavor-popping ribs.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Typically this recipe is made with beef ribs, but you can also use pork ribs.' }
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with aluminum foil and bake at 350ºF until heated through (about 20 to 30 minutes).',
        },
    ],
    mealPrep: true,
};