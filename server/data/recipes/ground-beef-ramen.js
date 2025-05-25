const ramen1 = '../assets/Products/ground-beef-ramen-1.jpeg';
const ramen2 = '../assets/Products/ground-beef-ramen-2.jpeg';
const ramen3 = '../assets/Products/ground-beef-ramen-3.jpeg';
const ramen4 = '../assets/Products/ground-beef-ramen-4.jpeg';
const ramen5 = '../assets/Products/ground-beef-ramen-5.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { GROUND_BEEF, INSTANT_RAMEN, FROZEN_PEAS, FROZEN_CARROTS, LIGHT_SOY_SAUCE, HOISIN_SAUCE, GARLIC, VEGETABLE_OIL, GREEN_ONION, RED_PEPPER_FLAKES } = require('./ingredients');

const BEEF_AND_GARLIC_SECTION = 'Beef and Garlic';
const SAUCES_SECTION = 'Sauces';
const FROZEN_SECTION = 'Frozen';
const NOODLES_SECTION = 'Noodles';

const SAUTE_ADDITIONS = 'Sauté Additions';
const COOK_NOODLES = 'Cook Noodles';
const ASSEMBLE = 'Assemble';

module.exports = {
    cardName: 'Ground Beef Ramen',
    name: 'Ground Beef Ramen',
    img: ramen5,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Ground Beef Ramen', link: 'https://recipesfiber.com/ground-beef-ramen-skillet/' }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_AND_GARLIC_SECTION },
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BEEF_AND_GARLIC_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: BEEF_AND_GARLIC_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCES_SECTION },
        { ...HOISIN_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCES_SECTION },
        { ...FROZEN_PEAS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FROZEN_SECTION },
        { ...FROZEN_CARROTS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FROZEN_SECTION },

        { ...INSTANT_RAMEN, amount: 3, unit: INGREDIENT_UNITS.PACKET, additionalDetails: '', section: NOODLES_SECTION },

        { ...RED_PEPPER_FLAKES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'pot' },
    ],
    directions: [
        { step: 'Over medium heat, heat oil in a large pan.', section: SAUTE_ADDITIONS },
        { step: 'Add ground beef. Brown and break apart (about 5 to 7 minutes).', section: SAUTE_ADDITIONS },
        { step: 'Drain.', section: SAUTE_ADDITIONS },
        { step: 'Add garlic. Cook until fragrant (about 30 seconds).', section: SAUTE_ADDITIONS, img: ramen1 },
        { step: 'Add "Sauces" section ingredients. Mix until meat is coated.', section: SAUTE_ADDITIONS, img: ramen2 },
        { step: 'Add "Frozen" section ingredients. Cook until heated through (about 2 to 3 minutes).', section: SAUTE_ADDITIONS, img: ramen3 },
        { step: 'Remove from heat. Set aside until noodles are cooked.', section: SAUTE_ADDITIONS },

        { step: 'Oven high heat, bring a pot of water to a boil.', section: COOK_NOODLES },
        { step: 'Add ramen noodles. Cook until just tender (about 3 minutes).', section: COOK_NOODLES },
        { step: 'Drain. Set aside.', section: COOK_NOODLES },

        { step: 'Add noodles to the large pan. Mix well.', section: ASSEMBLE, img: ramen4 },
        { step: 'Optionally add red pepper flakes. Mix.', section: ASSEMBLE },
        { step: 'Remove from heat. Add green onions. Mix.', section: ASSEMBLE },

        { step: 'Enjoy this easy college student ramen upgrade.', section: SECTIONS.SERVE },
    ]
};