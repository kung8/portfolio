const gingerChicken = '../assets/Products/ginger-chicken.jpeg';
const raw = '../assets/Products/ginger-chicken-raw.jpeg';
const ginger = '../assets/Products/ginger-chicken-ginger.jpeg';
const mixed = '../assets/Products/ginger-chicken-cooking-mixed.jpeg';
const placed = '../assets/Products/ginger-chicken-placed-ginger.jpeg';
const plated = '../assets/Products/ginger-chicken-plated.jpeg';
const sauce = '../assets/Products/ginger-chicken-soy-sauce.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_LOCATION, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, REHEAT_METHODS } = require("./constants");
const {
    CHICKEN_THIGH,
    GINGER,
    GARLIC,
    LIGHT_SOY_SAUCE,
    SALT,
    BLACK_PEPPER,
    CORNSTARCH,
} = require('./ingredients');

module.exports = {
    cardName: 'Ginger Chicken',
    name: 'Chinese Ginger Chicken',
    img: plated,
    recipeAuthor: 'Grandma',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...CHICKEN_THIGH, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 2 inch pieces', section: SECTIONS.MAIN },
        { ...GINGER, amount: 4, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'peeled and cut into long thin strips', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to thicken', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'spatula' },
        { name: '2 large bowls' },
    ],
    directions: [
        { step: 'Peel the ginger and cut the ginger into long, thin strips. Do not worry they will cook down.', section: SECTIONS.MAIN, img: ginger },
        { step: 'Place wok on stove over medium-high heat. Work in batches as needed.', section: SECTIONS.MAIN },
        { step: 'Add half of the minced garlic. Cook until fragrant (about 30 seconds).', section: SECTIONS.MAIN },
        { step: 'Add half the chicken. Make sure it\'s in a single layer.', section: SECTIONS.MAIN, img: raw },
        { step: 'Add salt and pepper as desired. If you are using low-sodium soy sauce, you can be a little more generous with the salt.', section: SECTIONS.MAIN },
        { step: 'Do not mix or stir too frequently. We want it to brown and smoke a little (about 3 to 5 minutes).', section: SECTIONS.MAIN },
        { step: 'Once the chicken begins to brown, flip the chicken and continue cooking until it begins to brown on that side.', section: SECTIONS.MAIN },
        { step: 'Add half of the ginger. Place it either to the side or towards the bottom of the wok, so it can cook better (and crisp up if you prefer it crispier).', section: SECTIONS.MAIN, img: mixed },
        { step: 'After it has browned, add the soy sauce to give it a nice sauce and a little cornstarch to thicken the sauce.', section: SECTIONS.MAIN, img: sauce },
        { step: 'Transfer the cooked chicken into a clean bowl. And cook the second batch.', section: SECTIONS.MAIN, img: placed },
        { step: 'Eat one of my favorite childhood dishes with steamed rice and any other side dishes.', section: SECTIONS.MAIN, img: gingerChicken },
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
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Add a splash of water. Stir fry until heated through (about 8 to 10 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a splash of water. Microwave until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};