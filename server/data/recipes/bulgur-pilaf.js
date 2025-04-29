// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { OLIVE_OIL, YELLOW_ONION, TOMATO_PASTE, VINE_TOMATO, GREEN_BELL_PEPPER, CUMIN, SALT, BLACK_PEPPER, CHICKEN_BROTH, PARSLEY, OREGANO, BULGUR_WHEAT, CHICKPEA, BROWN_SUGAR, PAPRIKA, GARLIC_POWDER, BONELESS_AND_SKINLESS_CHICKEN_BREAST } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const CHICKEN_SEASONING_SECTION = 'Chicken Seasoning';
const BULGUR_PILAF_SECTION = 'Bulgur Pilaf';
const COOK_CHICKEN = 'Cook Chicken';
const COOK_BULGUR_PILAF = 'Cook Bulgur Pilaf';

module.exports = {
    wip: true,
    cardName: 'Bulgur Pilaf',
    name: 'Bulgur Pilaf',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
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
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 6, unit: '', additionalDetails: '', section: CHICKEN_SECTION },
        { ...OLIVE_OIL, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...BROWN_SUGAR, amount: 9 / 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_SEASONING_SECTION },
        { ...PAPRIKA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SEASONING_SECTION },
        { ...OREGANO, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SEASONING_SECTION },
        { ...GARLIC_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SEASONING_SECTION },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SEASONING_SECTION },
        { ...BLACK_PEPPER, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SEASONING_SECTION },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'finely chopped', section: BULGUR_PILAF_SECTION },
        { ...TOMATO_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...VINE_TOMATO, amount: 1, unit: '', additionalDetails: 'finely chopped', section: BULGUR_PILAF_SECTION },
        { ...GREEN_BELL_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: BULGUR_PILAF_SECTION },
        { ...BULGUR_WHEAT, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BULGUR_PILAF_SECTION },
        { ...CHICKPEA, amount: 1, unit: '', additionalDetails: 'rinsed and drained', section: BULGUR_PILAF_SECTION },
        { ...CHICKEN_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BULGUR_PILAF_SECTION },

        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'plastic wrap' },
        { name: 'meat mallet' },
        { name: 'medium bowl' },
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Preheat the oven to 425ºF.', type: COOK_CHICKEN },
        { step: 'Place chicken breast between two pieces of plastic wrap.', type: COOK_CHICKEN },
        { step: 'Pound chicken with a meat mallet.', type: COOK_CHICKEN },
        { step: 'In a medium bowl, combine together the "Chicken Seasoning" section ingredients.', type: COOK_CHICKEN },
        { step: 'Line a baking sheet with aluminum foil.', type: COOK_CHICKEN },
        { step: 'Place chicken on baking sheet. Drizzle half of the olive oil and rub into the chicken.', type: COOK_CHICKEN },
        { step: 'Sprinkle with half of the seasoning.', type: COOK_CHICKEN },
        { step: 'Flip chicken. Repeat with the rest of the olive oil and seasoning.', type: COOK_CHICKEN },
        { step: 'Bake until golden brown (about 18 minutes).', type: COOK_CHICKEN },
        { step: 'Transfer to serving plates.', type: COOK_CHICKEN },

        { step: 'Over medium heat, heat oil in a l5targe pot.', type: COOK_BULGUR_PILAF },
        { step: 'Add onions. Cook until softened and translucent (about 5 to 7 minutes).', type: COOK_BULGUR_PILAF },
        { step: 'Add tomato paste, tomatoes, and green bell peppers. Cook until fragrant (about 2 to 3 minutes).', type: COOK_BULGUR_PILAF },
        { step: 'Add bulgur wheat, cumin, salt and pepper. Mix until the bulgur wheat is coated in tomato paste (about 2 to 3 minutes).', type: COOK_BULGUR_PILAF },
        { step: 'Add chickpeas and chicken broth. Mix.', type: COOK_BULGUR_PILAF },
        { step: 'Remove from heat and cover with a lid.', type: COOK_BULGUR_PILAF },
        { step: 'Let the bulgur wheat absorb the broth (about 10 minutes).', type: COOK_BULGUR_PILAF },
        { step: 'Fluff with a fork.', type: COOK_BULGUR_PILAF },

        { step: 'Serve the bulgur pilaf with the chicken topped with ', type: SECTIONS.SERVE },
    ]
};