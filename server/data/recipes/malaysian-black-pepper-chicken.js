const zoomed = '../assets/Products/black-pepper-chicken-combined-in-pan-zoomed.jpeg';
const combined = '../assets/Products/black-pepper-chicken-combined-in-pan.jpeg';
const cooked = '../assets/Products/black-pepper-chicken-cooked-chicken.jpeg';
const cornstarch = '../assets/Products/black-pepper-chicken-cornstarch.jpeg';
const marinade = '../assets/Products/black-pepper-chicken-marinade.jpeg';
const marinaded = '../assets/Products/black-pepper-chicken-marinaded-chicken.jpeg';
const rice2 = '../assets/Products/black-pepper-chicken-plated-with-rice-2.jpeg';
const raw = '../assets/Products/black-pepper-chicken-raw-chicken-in-pan.jpeg';
const sauce = '../assets/Products/black-pepper-chicken-sauce.jpeg';
const sauted = '../assets/Products/black-pepper-chicken-sauted-fragrant.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const {
    CHICKEN_BREAST,
    SHALLOT,
    GARLIC,
    GINGER,
    BLACK_PEPPER,
    OYSTER_SAUCE,
    SWEET_SOY_SAUCE,
    CORNSTARCH,
    VEGETABLE_OIL,
    JASMINE_RICE,
    CILANTRO,
    WHITE_SUGAR,
    WATER,
} = require('./ingredients');

module.exports = {
    cardName: 'Black Pepper Chicken',
    name: 'Malaysian Black Pepper Chicken',
    img: zoomed,
    recipeAuthor: '',
    recipeFinder: 'Marco Crosland',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Ayam Black Pepper', link: "https://dapurmalaysia.com/resepi-ayam-black-pepper/" }
    ],
    separated: true,
    ingredients: [
        { ...SWEET_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CHICKEN_BREAST, amount: 5, unit: '', additionalDetails: 'cubed', section: SECTIONS.MARINADE },
        { ...VEGETABLE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...SHALLOT, amount: 6, unit: '', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SWEET_SOY_SAUCE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'spatula' },
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Cut the chicken into 1" cubes.', section: SECTIONS.MARINADE },
        { step: 'In a mixing bowl, combine the marinade ingredients.', section: SECTIONS.MARINADE, img: marinade },
        { step: 'Add chicken. Marinate the chicken for 30 minutes.', section: SECTIONS.MARINADE, img: marinaded },
        { step: 'Over medium-high heat, heat 1 Tbsp of oil in a wok.', section: SECTIONS.MAIN },
        { step: 'Cook the chicken in batches if needed. Cook until chicken is cooked through. Remove chicken and set aside.', section: SECTIONS.MAIN, img: [raw, cooked] },
        { step: 'Add the shallots, garlic, ginger and black pepper to the wok. Cook and stir until fragrant.', section: SECTIONS.MAIN, img: sauted },
        { step: 'Add the sauces and water. Mix until combined.', section: SECTIONS.MAIN, img: sauce },
        { step: 'In a small bowl, combine cornstarch and a little warm water. Mix then add to the wok.', section: SECTIONS.MAIN, img: cornstarch },
        { step: 'Re-add the chicken and mix until combined.', section: SECTIONS.MAIN, img: combined },
        { step: 'Add sugar as desired.', section: SECTIONS.MAIN },
        { step: 'Serve over rice, garnish with a few sprigs of cilantro, and enjoy a small taste of Malaysian cuisine.', section: SECTIONS.MAIN, img: rice2 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};