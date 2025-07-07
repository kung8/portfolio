// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { BEEF_RIBS, GREEN_ONION, CILANTRO, GARLIC, ORANGE_JUICE, FISH_SAUCE, OYSTER_SAUCE, HONEY, CHICKEN_BOUILLON, GARLIC_POWDER, ONION_POWDER, BLACK_PEPPER, RED_PEPPER_FLAKES } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Sweet and Savory Beef Ribs',
    name: 'Sweet and Savory Beef Ribs',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
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
        { ...BEEF_RIBS, amount: 8, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },

        { ...GREEN_ONION, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thinly sliced', section: SECTIONS.MARINADE },
        { ...CILANTRO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'minced', section: SECTIONS.MARINADE },
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
        { step: 'Clean ribs and cut into individual ribs.', section: SECTIONS.PREP_BEEF },
        { step: `In a mixing bowl, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.PREP_BEEF },
        { step: 'Combine the ribs in the marinade.', section: SECTIONS.PREP_BEEF },
        { step: 'Cover and marinate the ribs overnight.', section: SECTIONS.PREP_BEEF },

        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.COOK_BEEF },
        { step: 'Place ribs in a baking dish in a single layer.', section: SECTIONS.COOK_BEEF },
        { step: 'Tent the aluminum foil.', section: SECTIONS.COOK_BEEF },
        { step: 'Bake until the ribs are about 70% cooked (about 45 minutes to 1 hour depending on the rib thickness).', section: SECTIONS.COOK_BEEF },
        { step: 'Uncover and broil ribs on both sides (about 13 to 15 minutes per side).', section: SECTIONS.COOK_BEEF },
        { step: 'Remove from the oven and let it rest before serving (about 15 minutes).', section: SECTIONS.COOK_BEEF },

        { step: 'Enjoy this Vietnamese flavor-popping ribs.', section: SECTIONS.SERVE },
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