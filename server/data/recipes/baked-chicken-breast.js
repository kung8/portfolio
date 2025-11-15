const breast1 = '../assets/Products/baked-chicken-breast-1.jpeg';
const breast2 = '../assets/Products/baked-chicken-breast-2.jpeg';
const breast3 = '../assets/Products/baked-chicken-breast-3.jpeg';
const breast4 = '../assets/Products/baked-chicken-breast-4.jpeg';
const breast5 = '../assets/Products/baked-chicken-breast-5.jpeg';
const breast6 = '../assets/Products/baked-chicken-breast-6.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BLACK_PEPPER, BROWN_SUGAR, CHICKEN_BREAST, GARLIC_POWDER, MEAT_MALLET, OLIVE_OIL, OREGANO, OVEN, PAPER_TOWELS, PAPRIKA, SALT } = require('./ingredients');

module.exports = {
    cardName: 'Baked Chicken Breast',
    name: 'Baked Chicken Breast',
    img: breast6,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 18, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Baked Chicken Breast', 
            link: 'https://www.recipetineats.com/oven-baked-chicken-breast/#recipe',
            authors: ['Nagi Maehashi'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BROWN_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        MEAT_MALLET,
        PAPER_TOWELS,
        BAKING_PAN,
    ],
    directions: [
        { step: `Preheat the oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Combine the "${SECTIONS.SEASONINGS}" section ingredients in a small bowl.`, section: SECTIONS.PREP_CHICKEN, img: breast2 },
        { step: `Cut the chicken breast in half horizontally.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Pound the chicken to 1/2 inch with the meat mallet.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Dry the chicken with paper towels.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Place chicken inside the baking pan.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Drizzle half of the olive oil. Sprinkle the seasoning over the chicken.`, section: SECTIONS.PREP_CHICKEN, img: breast1 },
        { step: `Flip. Repeat the olive oil and seasoning on the other side.`, section: SECTIONS.PREP_CHICKEN, img: breast3 },

        { step: `Bake until chicken is golden brown (about 18 minutes).`, section: SECTIONS.BAKE },
        
        { step: `Remove from the oven and transfer to serving plates immediately.`, section: SECTIONS.COOL, img: breast4 },
        { step: `Let the chicken rest for 3 to 5 minutes before serving.`, section: SECTIONS.COOL, img: breast5 },

        { step: `Enjoy these juicy chicken slices.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Wrap in a damp paper towel and microwave in 30-second intervals on 70% power until heated through. Flipping in between intervals.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a splash of water. Cover with foil and bake at 350ºF until heated through.',
        },
    ],
    mealPrep: true,
};