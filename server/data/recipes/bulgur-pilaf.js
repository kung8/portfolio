const pilaf1 = '../assets/Products/bulgur-pilaf-1.jpeg';
const pilaf2 = '../assets/Products/bulgur-pilaf-2.jpeg';
const pilaf3 = '../assets/Products/bulgur-pilaf-3.jpeg';
const pilaf4 = '../assets/Products/bulgur-pilaf-4.jpeg';
const pilaf5 = '../assets/Products/bulgur-pilaf-5.jpeg';
const pilaf6 = '../assets/Products/bulgur-pilaf-6.jpeg';
const pilaf7 = '../assets/Products/bulgur-pilaf-7.jpeg';
const pilaf8 = '../assets/Products/bulgur-pilaf-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, BROWN_SUGAR, BULGUR_WHEAT, CHICKEN_BROTH, CHICKPEA, CUMIN, GARLIC_POWDER, GREEN_BELL_PEPPER, LARGE_POT, MEAT_MALLET, MEDIUM_BOWL, OLIVE_OIL, OREGANO, OVEN, PAPRIKA, PARSLEY, PLASTIC_WRAP, SALT, STOVE, TOMATO_PASTE, VINE_TOMATO, YELLOW_ONION } = require('./ingredients');

const BULGUR_PILAF_SECTION = 'Bulgur Pilaf';
const COOK_BULGUR_PILAF = 'Cook Bulgur Pilaf';

module.exports = {
    cardName: 'Bulgur Pilaf',
    name: 'Bulgur Pilaf',
    img: pilaf8,
    recipeAuthors: ['Yumna Jawad and Nagi Maehashi'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.LEBANESE, GENRES.MEDITERRANEAN, GENRES.MIDDLE_EASTERN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Bulgur Pilaf', link: 'https://feelgoodfoodie.net/recipe/bulgur-pilaf/' },
        { label: 'Baked Chicken Breast', link: 'https://www.recipetineats.com/oven-baked-chicken-breast/#h-the-chicken-nbsp-breast-seasoning' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BROWN_SUGAR, amount: 9 / 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...PAPRIKA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...OREGANO, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'finely chopped', section: BULGUR_PILAF_SECTION },
        { ...TOMATO_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...VINE_TOMATO, amount: 1, unit: '', additionalDetails: 'finely chopped', section: BULGUR_PILAF_SECTION },
        { ...GREEN_BELL_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: BULGUR_PILAF_SECTION },
        { ...BULGUR_WHEAT, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...CHICKPEA, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'rinsed and drained', section: BULGUR_PILAF_SECTION },
        { ...CHICKEN_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BULGUR_PILAF_SECTION },

        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        PLASTIC_WRAP,
        MEAT_MALLET,
        MEDIUM_BOWL,
        BAKING_SHEET,
        ALUMINUM_FOIL,
        LARGE_POT,
    ],
    directions: [
        { step: 'Preheat the oven to 425ºF.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Place chicken breast between two pieces of plastic wrap.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Pound chicken with a meat mallet.', section: SECTIONS.COOK_CHICKEN },
        { step: `In a medium bowl, combine together the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.COOK_CHICKEN },
        { step: 'Line a baking sheet with aluminum foil.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Place chicken on baking sheet. Drizzle half of the olive oil and rub into the chicken.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Sprinkle with half of the seasoning.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Flip chicken. Repeat with the rest of the olive oil and seasoning.', section: SECTIONS.COOK_CHICKEN, img: pilaf1 },
        { step: 'Bake until golden brown (about 18 minutes).', section: SECTIONS.COOK_CHICKEN, img: pilaf2 },
        { step: 'Transfer to serving plates.', section: SECTIONS.COOK_CHICKEN },

        { step: 'Over medium heat, heat oil in a large pot.', section: COOK_BULGUR_PILAF },
        { step: 'Add onions. Cook until softened and translucent (about 5 to 7 minutes).', section: COOK_BULGUR_PILAF, img: pilaf3 },
        { step: 'Add tomato paste, tomatoes, and green bell peppers. Cook until fragrant (about 2 to 3 minutes).', section: COOK_BULGUR_PILAF, img: pilaf4 },
        { step: 'Add bulgur wheat, cumin, salt and pepper. Mix until the bulgur wheat is coated in tomato paste (about 2 to 3 minutes).', section: COOK_BULGUR_PILAF, img: pilaf5 },
        { step: 'Add chickpeas and chicken broth. Mix.', section: COOK_BULGUR_PILAF, img: pilaf6 },
        { step: 'Remove from heat and cover with a lid.', section: COOK_BULGUR_PILAF, img: pilaf7 },
        { step: 'Let the bulgur wheat absorb the broth (about 10 minutes).', section: COOK_BULGUR_PILAF },
        { step: 'Fluff with a fork.', section: COOK_BULGUR_PILAF },

        { step: 'Serve the bulgur pilaf with the chicken topped with parsley.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in a microwave-safe bowl until heated through (about 2 to 3 minutes). Stir halfway through.',
        },
    ],
    mealPrep: true,
};