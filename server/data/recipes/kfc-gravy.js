const gravy1 = '../assets/Products/kfc-gravy-1.jpeg';
const gravy2 = '../assets/Products/kfc-gravy-2.jpeg';
const gravy3 = '../assets/Products/kfc-gravy-3.jpeg';
const gravy4 = '../assets/Products/kfc-gravy-4.jpeg';
const gravy5 = '../assets/Products/kfc-gravy-5.jpeg';
const gravy6 = '../assets/Products/mash-potatoes-10.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS } = require('./constants');
const { HOT_WATER, UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, ONION_POWDER, BLACK_PEPPER, SALT, CHICKEN_BOUILLON_CUBE, BEEF_BOUILLON_CUBE } = require('./ingredients');

const GRAVY_SECTION = 'Gravy';

module.exports = {
    cardName: 'KFC Gravy',
    name: 'KFC Gravy',
    img: gravy5,
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.BEEF, PROTEIN.CHICKEN],
    type: [TYPES.SAUCE],
    yields: '6 servings',
    prepTime: '1 m',
    cookTime: '5 m',
    websites: [
        { label: 'KFC Gravy', link: 'https://www.recipetineats.com/gravy/' }
    ],
    separated: false,
    ingredients: [
        { ...CHICKEN_BOUILLON_CUBE, amount: 1, unit: '', additionalDetails: '', section: GRAVY_SECTION },
        { ...BEEF_BOUILLON_CUBE, amount: 1, unit: '', additionalDetails: '', section: GRAVY_SECTION },
        { ...HOT_WATER, amount: 9 / 4, unit: UNITS.CUP, additionalDetails: '', section: GRAVY_SECTION },
        { ...UNSALTED_BUTTER, amount: 4, unit: UNITS.TABLESPOON, additionalDetails: '', section: GRAVY_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 4, unit: UNITS.TABLESPOON, additionalDetails: '', section: GRAVY_SECTION },
        { ...ONION_POWDER, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: GRAVY_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: UNITS.TEASPOON, additionalDetails: '', section: GRAVY_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: GRAVY_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'whisk' },
    ],
    directions: [
        { step: 'Dissolve the bouillon cubes in the hot water.', type: GRAVY_SECTION },
        { step: 'Over medium heat, melt butter in a saucepan.', type: GRAVY_SECTION, img: gravy1 },
        { step: 'Stir in flour, onion powder and black pepper. Whisk.', type: GRAVY_SECTION, img: [gravy2, gravy3] },
        { step: 'While stirring, add in half the broth. It should thicken and become more uniform.', type: GRAVY_SECTION, img: gravy4 },
        { step: 'Stir in the remaining broth.', type: GRAVY_SECTION },
        { step: 'Stir until it thickens to a gravy consistency (about 1 1/2 to 2 minutes).', type: GRAVY_SECTION },
        { step: 'Taste and, if needed, add salt and pepper.', type: GRAVY_SECTION },
        { step: 'Serve this warm over whatever you want.', type: SECTIONS.SERVE, img: gravy6 },
    ]
};