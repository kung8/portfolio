// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { GUANCIALE, EGGS, EGG_YOLKS, BLACK_PEPPER, SALT, SPAGHETTI_NOODLES, GARLIC, PARSLEY, PARMIGIANO_REGGIANO } = require('./ingredients');

const CARBONARA_SAUCE = 'Carbonara Sauce';
const PASTA = 'Pasta';
const GUANCIALE_SECTION = 'Guanciale';

const COOK_PASTA = 'Cook Pasta';
const COOK_GUANCIALE = 'Cook Guanciale';

module.exports = {
    wip: true,
    cardName: 'Carbonara',
    name: 'Carbonara',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
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
        { step: 'In a mixing bowl, combine eggs and yolk.', type: CARBONARA_SAUCE },
        { step: 'Add parmesan and pepper. Mix.', type: CARBONARA_SAUCE },

        { step: 'Over medium-high heat, bring a pot of water to a boil.', type: COOK_PASTA },
        { step: 'Cook the pasta to al dente (follow the instructions on package).', type: COOK_PASTA },
        { step: 'Reserve 1 cup of pasta water to use for the sauce later. Set aside.', type: COOK_PASTA },
        { step: 'Drain pasta.', type: COOK_PASTA },

        { step: 'Over medium-high heat, add the guanciale to a large pan.', type: COOK_GUANCIALE },
        { step: 'Cook for 3 to 4 minutes.', type: COOK_GUANCIALE },
        { step: 'Add the minced garlic. Mix and cook until the guanciale becomes golden (about 1 to 2 minutes).', type: COOK_GUANCIALE },
        
        { step: 'Add pasta to the large pan. Toss to coat the pasta with the fat.', type: SECTIONS.ASSEMBLY },
        { step: 'Transfer the contents of the large pan into the mixing bowl.', type: SECTIONS.ASSEMBLY },
        { step: 'Add 1/2 cup of pasta water and stir quickly for 1 minute. The sauce should become creamy and stick to the pasta.', type: SECTIONS.ASSEMBLY },

        { step: 'Enjoy this authentic Italian dish topped with parsley, parmesan and pepper.', type: SECTIONS.SERVE },
    ]
};