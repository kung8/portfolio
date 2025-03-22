const tetrazzini1 = '../assets/Products/chicken-tetrazzini-1.jpeg';
const tetrazzini2 = '../assets/Products/chicken-tetrazzini-2.jpeg';
const tetrazzini3 = '../assets/Products/chicken-tetrazzini-3.jpeg';
const tetrazzini4 = '../assets/Products/chicken-tetrazzini-4.jpeg';
const tetrazzini5 = '../assets/Products/chicken-tetrazzini-5.jpeg';
const tetrazzini6 = '../assets/Products/chicken-tetrazzini-6.jpeg';
const tetrazzini7 = '../assets/Products/chicken-tetrazzini-7.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { SPAGHETTI_NOODLES, ROTISSERIE_CHICKEN, CREAM_OF_MUSHROOM, SOUR_CREAM, CHICKEN_BROTH, UNSALTED_BUTTER, PARMESAN_CHEESE, SALT, BLACK_PEPPER, ONION_POWDER, GARLIC_POWDER, CAYENNE_PEPPER, MOZZARELLA_CHEESE, PARSLEY } = require('./ingredients');

const PREP_CASSEROLE = 'Prep Casserole';
const COOK_CASSEROLE = 'Cook Casserole';

module.exports = {
    cardName: 'Chicken Tetrazzini',
    name: 'Chicken Tetrazzini',
    img: tetrazzini7,
    recipeCredit: 'Lauren Maliwauki',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN], 
    type: [TYPES.CASSEROLE],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '1 h',
    websites: [
        { label: 'Chicken Tetrazzini', link: 'https://iamhomesteader.com/chicken-tetrazzini/?fbclid=IwY2xjawIfTm5leHRuA2FlbQIxMAABHfXmOdry4vTwvMnKkRabiPQIiNOv0HuUB_Teh0AZvPevluR9OzdZdBDsLA_aem_wBmdVLkajaS_oARCwQaCcg' }
    ],
    separated: true,
    ingredients: [
        { ...SPAGHETTI_NOODLES, amount: '15 oz', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...ROTISSERIE_CHICKEN, amount: '3 c', additionalDetails: 'shredded', section: SECTIONS.SAUCE },
        { ...CREAM_OF_MUSHROOM, amount: '43 oz', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SOUR_CREAM, amount: '2 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: '1/2 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PARMESAN_CHEESE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ONION_POWDER, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC_POWDER, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CAYENNE_PEPPER, amount: '1/8 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...MOZZARELLA_CHEESE, amount: '2 c', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: '1 Tbsp', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'mixing bowl' },
        { name: 'casserole dish' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Cook spaghetti noodles al dente.', type: PREP_CASSEROLE },
        { step: 'Preheat the oven to 325ºF.', type: PREP_CASSEROLE },
        { step: 'In a mixing bowl, combine all the "Sauce" section ingredients.', type: PREP_CASSEROLE, img: tetrazzini1 },
        { step: 'Add noodles and toss.', type: PREP_CASSEROLE, img: [tetrazzini2, tetrazzini3] },
        { step: 'In a casserole dish, transfer noodle mixture.', type: PREP_CASSEROLE, img: tetrazzini4 },
        { step: 'Top with shredded cheese.', type: PREP_CASSEROLE, img: tetrazzini5 },
        { step: 'Cover with foil.', type: COOK_CASSEROLE },
        { step: 'Bake for 45 minutes.', type: COOK_CASSEROLE },
        { step: 'Remove foil and bake until cheese is hot and bubbly (about 10 to 15 minutes).', type: COOK_CASSEROLE, img: tetrazzini6 },
        { step: 'Serve with parsley.', type: SECTIONS.SERVE },
    ]
};