const carbonara1 = '../assets/Products/carbonara-1.jpeg';
const carbonara2 = '../assets/Products/carbonara-2.jpeg';
const carbonara3 = '../assets/Products/carbonara-3.jpeg';
const carbonara4 = '../assets/Products/carbonara-4.jpeg';
const carbonara5 = '../assets/Products/carbonara-5.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, EGG, EGG_YOLK, GARLIC, GUANCIALE, LARGE_PAN, LARGE_POT, MIXING_BOWL, PARMIGIANO_REGGIANO, PARSLEY, SALT, SPAGHETTI_NOODLES, SPATULA, STOVE } = require('./ingredients');

const GUANCIALE_SECTION = 'Guanciale';
const COOK_GUANCIALE = 'Cook Guanciale';

module.exports = {
    cardName: 'Carbonara',
    name: 'Carbonara',
    img: carbonara4,
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
        {
            label: 'Carbonara',
            link: 'https://www.recipetineats.com/carbonara/',
            authors: ['Nagi Maehashi'],
            finder: 'Kevin Ung',
        }
    ],
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
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        LARGE_POT,
        LARGE_PAN,
        SPATULA,
    ],
    directions: [
        { step: `In a mixing bowl, combine eggs and yolk.`, section: SECTIONS.PREP_SAUCE },
        { step: `Add parmesan and pepper. Mix.`, section: SECTIONS.PREP_SAUCE },

        { step: `Over medium-high heat, bring a pot of water to a boil.`, section: SECTIONS.COOK_PASTA },
        { step: `Cook the pasta to al dente (follow the instructions on package).`, section: SECTIONS.COOK_PASTA },
        { step: `Reserve 1 cup of pasta water to use for the sauce later. Set aside.`, section: SECTIONS.COOK_PASTA },
        { step: `Drain pasta.`, section: SECTIONS.COOK_PASTA },

        { step: `Over medium-high heat, add the guanciale to a large pan.`, section: COOK_GUANCIALE },
        { step: `Cook for 3 to 4 minutes.`, section: COOK_GUANCIALE },
        { step: `Add the minced garlic. Mix and cook until the guanciale becomes golden (about 1 to 2 minutes).`, section: COOK_GUANCIALE, img: carbonara1 },

        { step: `Add pasta to the large pan. Toss to coat the pasta with the fat.`, section: SECTIONS.ASSEMBLE },
        { step: `Transfer the contents of the large pan into the mixing bowl.`, section: SECTIONS.ASSEMBLE, img: carbonara2 },
        { step: `Add 1/2 cup of pasta water and stir quickly for 1 minute. The sauce should become creamy and stick to the pasta.`, section: SECTIONS.ASSEMBLE, img: carbonara3 },

        { step: `Enjoy this authentic Italian dish topped with parsley, parmesan and pepper.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'If the sauce is too thick, add more pasta water.' },
        { note: 'Guanciale is a type of Italian cured meat made from pork jowl or cheeks. If you cannot find guanciale, pancetta is a good substitute.' },
        { note: `I keep forgetting that the closest thing that I can find is called cured salted pork at Macey's.` }
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
            img: carbonara5,
        },
    ],
    mealPrep: true,
};