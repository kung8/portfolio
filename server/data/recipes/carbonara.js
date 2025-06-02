const carbonara2 = '../assets/Products/carbonara-2.jpeg';
const carbonara4 = '../assets/Products/carbonara-4.jpeg';
const carbonara6 = '../assets/Products/carbonara-6.jpeg';
const carbonara7 = '../assets/Products/carbonara-7.jpeg';
const carbonara8 = '../assets/Products/carbonara-8.jpeg';
const carbonara9 = '../assets/Products/carbonara-9.jpeg';
const carbonara10 = '../assets/Products/carbonara-10.jpeg';
const carbonara11 = '../assets/Products/carbonara-11.jpeg';
const carbonara12 = '../assets/Products/carbonara-12.jpeg';
const carbonara13 = '../assets/Products/carbonara-13.jpeg';
const carbonara14 = '../assets/Products/carbonara-14.jpeg';
const carbonara15 = '../assets/Products/carbonara-15.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { GUANCIALE, EGG, EGG_YOLK, BLACK_PEPPER, SALT, SPAGHETTI_NOODLES, GARLIC, PARSLEY, PARMIGIANO_REGGIANO } = require('./ingredients');

const GUANCIALE_SECTION = 'Guanciale';
const COOK_GUANCIALE = 'Cook Guanciale';

module.exports = {
    cardName: 'Carbonara',
    name: 'Carbonara',
    img: carbonara13,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Carbonara', link: 'https://www.recipetineats.com/carbonara/' }
    ],
    separated: true,
    ingredients: [
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...EGG_YOLK, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PARMIGIANO_REGGIANO, amount: 7 / 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'finely shredded', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...SPAGHETTI_NOODLES, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.PASTA },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.PASTA },

        { ...GUANCIALE, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'sliced then batons', section: GUANCIALE_SECTION },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: GUANCIALE_SECTION },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...PARMIGIANO_REGGIANO, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'large pot' },
        { name: 'large pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine eggs and yolk.', section: SECTIONS.PREP_SAUCE, img: carbonara2 },
        { step: 'Add parmesan and pepper. Mix.', section: SECTIONS.PREP_SAUCE, img: carbonara4 },

        { step: 'Over medium-high heat, bring a pot of water to a boil.', section: SECTIONS.COOK_PASTA },
        { step: 'Cook the pasta to al dente (follow the instructions on package).', section: SECTIONS.COOK_PASTA },
        { step: 'Reserve 1 cup of pasta water to use for the sauce later. Set aside.', section: SECTIONS.COOK_PASTA },
        { step: 'Drain pasta.', section: SECTIONS.COOK_PASTA },

        { step: 'Over medium-high heat, add the guanciale to a large pan.', section: COOK_GUANCIALE, img: carbonara6 },
        { step: 'Cook for 3 to 4 minutes.', section: COOK_GUANCIALE },
        { step: 'Add the minced garlic. Mix and cook until the guanciale becomes golden (about 1 to 2 minutes).', section: COOK_GUANCIALE, img: carbonara7 },

        { step: 'Add pasta to the large pan. Toss to coat the pasta with the fat.', section: SECTIONS.ASSEMBLE, img: carbonara8 },
        { step: 'Transfer the contents of the large pan into the mixing bowl.', section: SECTIONS.ASSEMBLE, img: carbonara9 },
        { step: 'Add 1/2 cup of pasta water and stir quickly for 1 minute. The sauce should become creamy and stick to the pasta.', section: SECTIONS.ASSEMBLE, img: [carbonara10, carbonara11, carbonara12] },

        { step: 'Enjoy this authentic Italian dish topped with parsley, parmesan and pepper.', section: SECTIONS.SERVE, img: carbonara14 },
    ],
    notes: [
        { note: 'If the sauce is too thick, add more pasta water.' },
        { note: 'Guanciale is a type of Italian cured meat made from pork jowl or cheeks. If you cannot find guanciale, pancetta is a good substitute.' },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.DOUBLE_BOIL,
            instruction: 'Reheat in a double boiler until heated through (about 5 to 10 minutes). Do not reheat in the microwave because of the raw eggs.',
        },
    ],
    mealPrep: true,
};