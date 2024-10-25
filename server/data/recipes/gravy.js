// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BEEF_BOUILLON, CHICKEN_BOUILLON, COLD_WATER, UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, ONION_POWDER, BLACK_PEPPER, SALT } = require('./ingredients');

module.exports = {
    cardName: 'Gravy',
    name: 'Gravy',
    img: '',
    available: true,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.BEEF, PROTEIN.CHICKEN],
    type: [TYPES.SAUCE],
    yields: '6 servings',
    prepTime: '1 m',
    cookTime: '3 m',
    websites: [
        { label: 'Gravy', link: 'https://www.recipetineats.com/gravy/' }
    ],
    separated: false,
    ingredients: [
        { ...BEEF_BOUILLON, amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BOUILLON, amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COLD_WATER, amount: '2 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ONION_POWDER, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'bowl' },
        { name: 'whisk' },
    ],
    directions: [
        { step: 'Over medium-high heat, bring water to a boil in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Transfer to a bowl.', type: SECTIONS.MAIN },
        { step: 'Add crushed bouillon cubes.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, melt butter in the saucepan.', type: SECTIONS.MAIN },
        { step: 'Mix in flour, onion powder and black pepper. Combine.', type: SECTIONS.MAIN },
        { step: 'Pour in half of the liquid and stir until incorporated. It should thicken pretty quick.', type: SECTIONS.MAIN },
        { step: 'Pour in the remaining liquid.', type: SECTIONS.MAIN },
        { step: 'Continue to stir until it\'s the desired gravy consistency (about 1.5 to 2 minutes).', type: SECTIONS.MAIN },
        { step: 'Serve with your favorite proteins.', type: SECTIONS.MAIN },
    ]
};