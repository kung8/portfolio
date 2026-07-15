const schiacciata0 = '../assets/Products/schiacciata-0.jpeg';
const schiacciata1 = '../assets/Products/schiacciata-1.jpeg';
const schiacciata2 = '../assets/Products/schiacciata-2.jpeg';
const schiacciata3 = '../assets/Products/schiacciata-3.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    PROTEIN,
    SECTIONS,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { MAYONNAISE, PARMIGIANO_REGGIANO, PORCHETTA } = require('./ingredients');
const focacciaBread = require('./focaccia-bread.js');
const peperoniGrigliati = require('./peperoni-grigliati');

const FOCACCIA_BREAD = 'Focaccia Bread';
const SANDWICH_FILLING = 'Sandwich Filling';

module.exports = {
    cardName: 'Schiacciata',
    name: 'Schiacciata',
    img: schiacciata2,
    available: true,
    recommended: true,
    createdAt: '06/07/2026 23:25:41',
    modifiedAt: '07/04/2026 20:22:57',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.ASSEMBLE, METHODS.AIR_FRY, METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { name: focacciaBread.name.toLowerCase(), amount: '', unit: '', additionalDetails: '', section: FOCACCIA_BREAD, link: { id: focacciaBread.name, url: `recipes/${focacciaBread.name}` } },
        { ...PORCHETTA, amount: 4, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SANDWICH_FILLING },
        { ...MAYONNAISE, amount: '', unit: '', additionalDetails: '', section: SANDWICH_FILLING },
        { ...PARMIGIANO_REGGIANO, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SANDWICH_FILLING },
        { name: peperoniGrigliati.name.toLowerCase(), amount: '', unit: '', additionalDetails: '', section: SANDWICH_FILLING, link: { id: peperoniGrigliati.name, url: `recipes/${peperoniGrigliati.name}` } },
    ],
    directions: [
        {
            step: `Follow the reheat instructions for the `,
            section: SECTIONS.REHEAT,
            link: {
                text: 'Peperoni Grigliati',
                link: `https://kevinung8.com/#/recipes/${peperoniGrigliati.name}`,
                additionalText: '.',
            },
        },
        { step: `Optionally heat the porchetta in the oven if you want it warmed up.`, section: SECTIONS.REHEAT },
        { step: `Assemble the sandwich with your favorite ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: `Enjoy this delicious slice of Italy!`, section: SECTIONS.SERVE, img: [schiacciata1, schiacciata3] },
    ],
    notes: [
        { note: `The best schiacciata I had was in Manarola at a sandwich shop called "Il Salumaio". I constructed it from the "Make your 'Schiacciata'" menu: Hot porchetta, di parmigiano cream, pecorinio semistagionato, and peperoni grigliati.`, img: schiacciata0 },
        { note: `It might be difficult to find hot fresh porchetta so a cold cut from the deli section might be the closest you can get.` },
    ],
    mealPrep: false,
};