const zoomed = '../assets/Products/coleslaw-zoomed.jpeg';
const coleslaw = '../assets/Products/coleslaw.jpeg';
const plated = '../assets/Products/coleslaw-full-plate.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { CABBAGE, CARROTS, MAYONNAISE, WHITE_SUGAR, APPLE_CIDER_VINEGAR, LEMON_JUICE, SALT, BLACK_PEPPER } = require('./ingredients');

module.exports = {
    cardName: 'Coleslaw',
    name: 'Coleslaw',
    img: coleslaw,
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.SALAD],
    yields: '8 servings',
    prepTime: '15 m',
    websites: [
        { label: 'Coleslaw', link: 'https://www.askchefdennis.com/best-cole-slaw-coleslaw/' }
    ],
    separated: true,
    ingredients: [
        { ...CABBAGE, amount: '1 small', additionalDetails: 'chopped and shredded', section: SECTIONS.MAIN },
        { ...CARROTS, amount: '1', additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: '1 c', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...WHITE_SUGAR, amount: '1/3 c', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...APPLE_CIDER_VINEGAR, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...LEMON_JUICE, amount: '1 1/2 tsp', additionalDetails: '', section: SECTIONS.DRESSING },
        { ...SALT, amount: '1 tsp', additionalDetails: 'or to taste', section: SECTIONS.DRESSING },
        { ...BLACK_PEPPER, amount: '1/8 tsp', additionalDetails: 'or to taste', section: SECTIONS.DRESSING },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Chop and shred the cabbage.', type: SECTIONS.MAIN },
        { step: 'Place the shredded cabbage in a mixing bowl.', type: SECTIONS.MAIN },
        { step: 'Shred the carrots and add to the mixing bowl.', type: SECTIONS.MAIN },
        { step: 'Mix together cabbage and carrots.', type: SECTIONS.MAIN },
        { step: 'In a medium bowl, combine together the dressing ingredients.', type: SECTIONS.DRESSING },
        { step: 'Pour the dressing over the vegetable mixture.', type: SECTIONS.ASSEMBLY, img: zoomed },
        { step: 'Place the coleslaw in the fridge for at least a day. Mix the coleslaw several times while it is in the fridge.', type: SECTIONS.ASSEMBLY },
        { step: 'Serve this cold and enjoy.', type: SECTIONS.SERVE, img: plated },
    ]
};