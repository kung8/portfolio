const gravy1 = '../assets/Products/gravy-1.jpeg';
const gravy2 = '../assets/Products/gravy-2.jpeg';
const gravy3 = '../assets/Products/gravy-3.jpeg';
const cube1 = '../assets/Products/gravy-bouillon-cubes-1.jpeg';
const cube2 = '../assets/Products/gravy-bouillon-cubes-2.jpeg';
const cube3 = '../assets/Products/gravy-bouillon-cubes-3.jpeg';
const butter = '../assets/Products/gravy-butter.jpeg';
const flour = '../assets/Products/gravy-flour.jpeg';
const seasoning = '../assets/Products/gravy-seasoning.jpeg';
const water = '../assets/Products/gravy-water.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BEEF_BOUILLON, CHICKEN_BOUILLON, COLD_WATER, UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, ONION_POWDER, BLACK_PEPPER, SALT } = require('./ingredients');

module.exports = {
    cardName: 'Gravy',
    name: 'Gravy',
    img: gravy3,
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
        { step: 'Over medium-high heat, bring water to a boil in a saucepan.', type: SECTIONS.MAIN, img: water },
        { step: 'Transfer to a bowl.', type: SECTIONS.MAIN },
        { step: 'Add crushed bouillon cubes.', type: SECTIONS.MAIN, img: [cube1, cube2, cube3] },
        { step: 'Over medium heat, melt butter in the saucepan.', type: SECTIONS.MAIN, img: butter },
        { step: 'Mix in flour, onion powder and black pepper. Combine.', type: SECTIONS.MAIN, img: [flour, seasoning] },
        { step: 'Pour in half of the liquid and stir until incorporated. It should thicken pretty quick.', type: SECTIONS.MAIN, img: gravy1 },
        { step: 'Pour in the remaining liquid.', type: SECTIONS.MAIN, img: gravy2 },
        { step: 'Continue to stir until it\'s the desired gravy consistency (about 1.5 to 2 minutes).', type: SECTIONS.MAIN },
        { step: 'Serve over your favorite proteins, mash potatoes or holiday dishes.', type: SECTIONS.MAIN },
    ]
};