const pepper1 = '../assets/Products/black-pepper-chicken-1.jpeg';
const pepper2 = '../assets/Products/black-pepper-chicken-2.jpeg';
const pepper3 = '../assets/Products/black-pepper-chicken-3.jpeg';
const pepper4 = '../assets/Products/black-pepper-chicken-4.jpeg';
const pepper5 = '../assets/Products/black-pepper-chicken-5.jpeg';
const pepper6 = '../assets/Products/black-pepper-chicken-6.jpeg';
const pepper7 = '../assets/Products/black-pepper-chicken-7.jpeg';
const pepper8 = '../assets/Products/black-pepper-chicken-8.jpeg';
const pepper9 = '../assets/Products/black-pepper-chicken-9.jpeg';
const pepper10 = '../assets/Products/black-pepper-chicken-10.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    CHICKEN_BREAST,
    CILANTRO,
    CORNSTARCH,
    GARLIC,
    GINGER,
    JASMINE_RICE,
    MEDIUM_BOWL,
    MIXING_BOWL,
    OYSTER_SAUCE,
    SHALLOT,
    SPATULA,
    STOVE,
    SWEET_SOY_SAUCE,
    VEGETABLE_OIL,
    WATER,
    WHITE_SUGAR,
    WOK,
} = require('./ingredients');

module.exports = {
    cardName: 'Black Pepper Chicken',
    name: 'Malaysian Black Pepper Chicken',
    img: pepper10,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Ayam Black Pepper', 
            link: "https://dapurmalaysia.com/resepi-ayam-black-pepper/",
            authors: [''],
            finder: 'Marco Crosland', 
        }
    ],
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
        STOVE,
    ],
    supplies: [
        WOK,
        SPATULA,
        MIXING_BOWL,
        MEDIUM_BOWL,
    ],
    directions: [
        { step: `Cut the chicken into 1" cubes.`, section: SECTIONS.MARINADE },
        { step: `In a mixing bowl, combine the marinade ingredients.`, section: SECTIONS.MARINADE, img: pepper1 },
        { step: `Add chicken. Marinate the chicken for 30 minutes.`, section: SECTIONS.MARINADE, img: pepper2 },
        { step: `Over medium-high heat, heat 1 Tbsp of oil in a wok.`, section: SECTIONS.MAIN },
        { step: `Cook the chicken in batches if needed. Cook until chicken is cooked through. Remove chicken and set aside.`, section: SECTIONS.MAIN, img: [pepper3, pepper4] },
        { step: `Add the shallots, garlic, ginger and black pepper to the wok. Cook and stir until fragrant.`, section: SECTIONS.MAIN, img: pepper5 },
        { step: `Add the sauces and water. Mix until combined.`, section: SECTIONS.MAIN, img: pepper6 },
        { step: `In a small bowl, combine cornstarch and a little warm water. Mix then add to the wok.`, section: SECTIONS.MAIN, img: pepper7 },
        { step: `Re-add the chicken and mix until combined.`, section: SECTIONS.MAIN, img: pepper8 },
        { step: `Add sugar as desired.`, section: SECTIONS.MAIN },
        { step: `Serve over rice, garnish with a few sprigs of cilantro, and enjoy a small taste of Malaysian cuisine.`, section: SECTIONS.MAIN, img: pepper9 },
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