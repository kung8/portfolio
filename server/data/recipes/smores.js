const smores1 = '../assets/Products/smores-1.jpeg';
const { CATEGORIES, DIET, GENRES, METHODS, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALUMINUM_FOIL,
    BAKING_SHEET,
    GRAHAM_CRACKER,
    HERSHEY_CHOCOLATE_BAR,
    MARSHMALLOW,
    OVEN,
} = require('./ingredients');

const SMORES_SECTION = 'S\'mores';
const BROIL_FIRST_SIDE = 'Broil First Side';
const BROIL_SECOND_SIDE = 'Broil Second Side';

module.exports = {
    cardName: 'S\'mores',
    name: 'S\'mores',
    img: smores1,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...GRAHAM_CRACKER, amount: 2, unit: '', additionalDetails: '', section: SMORES_SECTION },
        { ...MARSHMALLOW, amount: 2, unit: '', additionalDetails: '', section: SMORES_SECTION },
        { ...HERSHEY_CHOCOLATE_BAR, amount: 1, unit: '', additionalDetails: '', section: SMORES_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        ALUMINUM_FOIL,
        BAKING_SHEET,
    ],
    directions: [
        { step: 'Lay aluminum foil on baking sheet.', section: SECTIONS.PREP_PAN },

        { step: 'Turn oven to broil.', section: SECTIONS.PREHEAT_OVEN },

        { step: 'Place graham cracker halves on baking sheet.', section: BROIL_FIRST_SIDE },
        { step: 'Stack marshmallows on each cracker.', section: BROIL_FIRST_SIDE },
        { step: 'Broil until browned (about 3 to 5 minutes).', section: BROIL_FIRST_SIDE },
        { step: 'Take pan out.', section: BROIL_FIRST_SIDE },

        { step: 'Flip marshmallows.', section: BROIL_SECOND_SIDE },
        { step: 'Lay the other graham cracker halves on pan.', section: BROIL_SECOND_SIDE },
        { step: 'Top with chocolate.', section: BROIL_SECOND_SIDE },
        { step: 'Broil until the other side of the marshmallow is browned (about 3 minutes).', section: BROIL_SECOND_SIDE },
        { step: 'Take pan out.', section: BROIL_SECOND_SIDE },

        { step: 'Assemble the s\'more by placing the top graham cracker on the marshmallow and pressing down slightly.', section: SECTIONS.ASSEMBLE },

        { step: 'Enjoy the sweet tastes of a campfire indoors.', section: SECTIONS.MAIN },
    ],
    store: null,
    reheat: null,
    mealPrep: false,
};