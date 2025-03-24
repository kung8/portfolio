// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { CREAM_CHEESE, FLOUR_TORTILLA, ROMAINE_LETTUCE, TURKEY, SWISS_CHEESE, SLICER_TOMATO, CRANBERRY_SAUCE } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Turkey Roll Ups',
    name: 'Turkey Roll Ups',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    protein: [PROTEIN.TURKEY],
    type: [TYPES.WRAP],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Turkey Roll Up (Costco Copycat)', link: 'https://www.culinaryhill.com/turkey-rollups-with-cranberry-cream-cheese/' }
    ],
    separated: true,
    ingredients: [
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.ASSEMBLE },
        { ...CRANBERRY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...FLOUR_TORTILLA, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...ROMAINE_LETTUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.HEAD, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...TURKEY, amount: 16, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...SWISS_CHEESE, amount: 16, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'halved', section: SECTIONS.ASSEMBLE },
        { ...SLICER_TOMATO, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'halved and sliced', section: SECTIONS.ASSEMBLE },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'In a medium bowl, combine cream cheese and cranberry sauce.', type: SECTIONS.ASSEMBLE },
        { step: 'On a cutting board, lay a tortilla.', type: SECTIONS.ASSEMBLE },
        { step: 'Smear the sauce on the tortilla.', type: SECTIONS.ASSEMBLE },
        { step: 'Layer 1/4 of the ingredients in the center of the tortilla.', type: SECTIONS.ASSEMBLE },
        { step: 'Roll the tortilla tightly.', type: SECTIONS.ASSEMBLE },
        { step: 'Wrap in plastic wrap and chill in the fridge until serving.', type: SECTIONS.CHILL },
        { step: 'Cut each into 8 equal pieces and enjoy.', type: SECTIONS.SERVE },
    ]
};