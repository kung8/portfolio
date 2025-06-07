const zoomed = '../assets/Products/coleslaw-zoomed.jpeg';
const coleslaw = '../assets/Products/coleslaw.jpeg';
const plated = '../assets/Products/coleslaw-full-plate.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { CABBAGE, CARROT, MAYONNAISE, WHITE_SUGAR, APPLE_CIDER_VINEGAR, LEMON_JUICE, SALT, BLACK_PEPPER } = require('./ingredients');

module.exports = {
    cardName: 'Coleslaw',
    name: 'Coleslaw',
    img: coleslaw,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.SALAD],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Coleslaw', link: 'https://www.askchefdennis.com/best-cole-slaw-coleslaw/' }
    ],
    separated: true,
    ingredients: [
        { ...CABBAGE, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped and shredded', section: SECTIONS.MAIN },
        { ...CARROT, amount: 1, unit: '', additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...WHITE_SUGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...APPLE_CIDER_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...LEMON_JUICE, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'or to taste', section: SECTIONS.DRESSING },
        { ...BLACK_PEPPER, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'or to taste', section: SECTIONS.DRESSING },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Chop and shred the cabbage.', section: SECTIONS.MAIN },
        { step: 'Place the shredded cabbage in a mixing bowl.', section: SECTIONS.MAIN },
        { step: 'Shred the carrots and add to the mixing bowl.', section: SECTIONS.MAIN },
        { step: 'Mix together cabbage and carrots.', section: SECTIONS.MAIN },
        { step: 'In a medium bowl, combine together the dressing ingredients.', section: SECTIONS.DRESSING },
        { step: 'Pour the dressing over the vegetable mixture.', section: SECTIONS.ASSEMBLE, img: zoomed },
        { step: 'Place the coleslaw in the fridge for at least a day. Mix the coleslaw several times while it is in the fridge.', section: SECTIONS.ASSEMBLE },
        { step: 'Serve this cold and enjoy.', section: SECTIONS.SERVE, img: plated },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};