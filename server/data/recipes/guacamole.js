// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { AVOCADO, LIME, SALT, ROMA_TOMATO, SMALL_YELLOW_ONION, CILANTRO, GARLIC, CAYENNE_PEPPER } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Guacamole',
    name: 'Guacamole',
    img: '',
    available: true,
    category: [CATEGORIES.DIP],
    genre: [GENRES.MEXICAN],
    method: [METHODS.MIX],
    protein: [PROTEIN.AVOCADO], // this has a little protein (not a ton)
    type: [TYPES.DIP],
    yields: '4 servings',
    prepTime: '10 m',
    websites: [
        { label: 'Guacamole', link: 'https://www.allrecipes.com/recipe/14231/guacamole/' }
    ],
    separated: true,
    ingredients: [
        { ...AVOCADO, amount: '3', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIME, amount: '1', additionalDetails: 'juiced', section: SECTIONS.MAIN },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: '2', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...SMALL_YELLOW_ONION, amount: '1/2 c', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: '3 Tbsp', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '1 clove', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CAYENNE_PEPPER, amount: '1 pinch', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Slice the avocados in half and remove the pit.', type: SECTIONS.MAIN },
        { step: 'In a medium bowl, mash avocado.', type: SECTIONS.MAIN },
        { step: 'Add the lime juice and salt. Mix.', type: SECTIONS.MAIN },
        { step: 'Add the garlic, tomatoes, onion, and cilantro. Mix.', type: SECTIONS.MAIN },
        { step: 'Add the cayenne. Mix.', type: SECTIONS.MAIN },
        { step: 'Cover and chill for 1 hour.', type: SECTIONS.MAIN },
        { step: 'Serve with your favorite chips.', type: SECTIONS.SERVE },
    ]
};