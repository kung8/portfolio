const carbonara1 = '../assets/Products/carbonara-1.jpeg';
const carbonara2 = '../assets/Products/carbonara-2.jpeg';
const carbonara3 = '../assets/Products/carbonara-3.jpeg';
const carbonara4 = '../assets/Products/carbonara-4.jpeg';
const carbonara5 = '../assets/Products/carbonara-5.jpeg';
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

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { GUANCIALE, EGGS, EGG_YOLKS, BLACK_PEPPER, SALT, SPAGHETTI_NOODLES, GARLIC, PARSLEY, PARMIGIANO_REGGIANO } = require('./ingredients');

const CARBONARA_SAUCE = 'Carbonara Sauce';
const PASTA = 'Pasta';
const GUANCIALE_SECTION = 'Guanciale';

const COOK_PASTA = 'Cook Pasta';
const COOK_GUANCIALE = 'Cook Guanciale';

module.exports = {
    cardName: 'Carbonara',
    name: 'Carbonara',
    img: carbonara13,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PASTA],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '15 m',
    websites: [
        { label: 'Carbonara', link: 'https://www.recipetineats.com/carbonara/' }
    ],
    separated: true,
    ingredients: [
        { ...EGGS, amount: '2', additionalDetails: '', section: CARBONARA_SAUCE },
        { ...EGG_YOLKS, amount: '2', additionalDetails: '', section: CARBONARA_SAUCE },
        { ...PARMIGIANO_REGGIANO, amount: '3.5 oz', additionalDetails: 'finely shredded', section: CARBONARA_SAUCE },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: CARBONARA_SAUCE },

        { ...SPAGHETTI_NOODLES, amount: '14 oz', additionalDetails: '', section: PASTA },
        { ...SALT, amount: '1 Tbsp', additionalDetails: '', section: PASTA },

        { ...GUANCIALE, amount: '6 oz', additionalDetails: 'sliced then batons', section: GUANCIALE_SECTION },
        { ...GARLIC, amount: '1 clove', additionalDetails: 'minced', section: GUANCIALE_SECTION },

        { ...PARSLEY, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...PARMIGIANO_REGGIANO, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
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
        { step: 'In a mixing bowl, combine eggs and yolk.', type: CARBONARA_SAUCE, img: [carbonara1, carbonara2] },
        { step: 'Add parmesan and pepper. Mix.', type: CARBONARA_SAUCE, img: [carbonara3, carbonara4] },

        { step: 'Over medium-high heat, bring a pot of water to a boil.', type: COOK_PASTA },
        { step: 'Cook the pasta to al dente (follow the instructions on package).', type: COOK_PASTA },
        { step: 'Reserve 1 cup of pasta water to use for the sauce later. Set aside.', type: COOK_PASTA },
        { step: 'Drain pasta.', type: COOK_PASTA },

        { step: 'Over medium-high heat, add the guanciale to a large pan.', type: COOK_GUANCIALE, img: [carbonara5, carbonara6] },
        { step: 'Cook for 3 to 4 minutes.', type: COOK_GUANCIALE },
        { step: 'Add the minced garlic. Mix and cook until the guanciale becomes golden (about 1 to 2 minutes).', type: COOK_GUANCIALE, img: carbonara7 },

        { step: 'Add pasta to the large pan. Toss to coat the pasta with the fat.', type: SECTIONS.ASSEMBLY, img: carbonara8 },
        { step: 'Transfer the contents of the large pan into the mixing bowl.', type: SECTIONS.ASSEMBLY, img: carbonara9 },
        { step: 'Add 1/2 cup of pasta water and stir quickly for 1 minute. The sauce should become creamy and stick to the pasta.', type: SECTIONS.ASSEMBLY, img: [carbonara10, carbonara11, carbonara12] },

        { step: 'Enjoy this authentic Italian dish topped with parsley, parmesan and pepper.', type: SECTIONS.SERVE, img: carbonara14 },
    ], 
    notes: [
        { note: 'If the sauce is too thick, add more pasta water.' },
        { note: 'Guanciale is a type of Italian cured meat made from pork jowl or cheeks. If you cannot find guanciale, pancetta is a good substitute.' },
        { note: 'To reheat, heat in a double boiler. It is not recommended to reheat in the microwave because of the raw eggs.', img: carbonara15 },
    ]
};