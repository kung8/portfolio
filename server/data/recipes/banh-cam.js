// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { GLUTINOUS_RICE_FLOUR, WHITE_SUGAR, SALT, WATER, SESAME_SEEDS, VEGETABLE_OIL, RED_BEAN_PASTE } = require('./ingredients');

const FORM_BALLS = 'Form Balls';

module.exports = {
    wip: true,
    cardName: 'Banh Cam',
    name: 'Banh Cam',
    img: '',
    recipeAuthors: ['Megan'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ASIAN, GENRES.CHINESE, GENRES.VIETNAMESE],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.BEAN],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
    yields: { amount: 10, unit: YIELD_UNITS.BALL },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sesame Balls (Banh Cam)', link: 'https://takestwoeggs.com/sesame-balls-with-red-bean-paste/' }
    ],
    separated: true,
    ingredients: [
        { ...GLUTINOUS_RICE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'boiling', section: SECTIONS.DOUGH },

        { ...RED_BEAN_PASTE, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chilled', section: SECTIONS.FILLING },

        { ...SESAME_SEEDS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.COATING_STATION },
        { ...WATER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.COATING_STATION },

        { ...VEGETABLE_OIL, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DEEP_FRY },
    ],
    appliances: [
        { name: 'deep fryer or stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'plastic wrap' },
        { name: '2 small bowls' },
        { name: 'large pot' },
        { name: 'slotted spoon' },
        { name: 'spider strainer' },
        { name: 'wire rack' },
        { name: 'paper towels' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the rice flour, sugar and salt.', section: SECTIONS.PREP_DOUGH },
        { step: 'Make a well.', section: SECTIONS.PREP_DOUGH },
        { step: 'Slowly pour in boiling water. Mix until the flour is all incorporated.', section: SECTIONS.PREP_DOUGH },
        { step: 'On a flat surface, knead until it forms into a ball.', section: SECTIONS.PREP_DOUGH },
        { step: 'Place back in the mixing bowl and cover with plastic wrap. Let it rest for 30 minutes.', section: SECTIONS.PREP_DOUGH },

        { step: 'Form equal sized balls.', section: SECTIONS.PREP_FILLING },

        { step: 'Prepare two bowls: water and sesame seeds.', section: SECTIONS.PREP_DIPPING_STATIONS },

        { step: 'Divide the dough into equal parts.', section: FORM_BALLS },
        { step: 'Flatten dough to about 2 to 3 inches discs.', section: FORM_BALLS },
        { step: 'Place the red bean filling in the center.', section: FORM_BALLS },
        { step: 'Bring up the sides and pinch the dough to hide the filling.', section: FORM_BALLS },
        { step: 'Lightly roll the balls between your hands to smooth the balls and get rid of any seams.', section: FORM_BALLS },

        { step: 'Dip each ball in the water then the sesame seeds.', section: SECTIONS.DIP },
        { step: 'Gently roll the ball in your hands to press the sesame seeds into the dough.', section: SECTIONS.DIP },

        { step: 'Heat enough oil to cover the height of about 3 sesame ball since they will expand and grow.', section: SECTIONS.DEEP_FRY },
        { step: 'Line paper towels on a baking sheet and place the wire rack on top.', section: '' },
        { step: 'Once the oil gets to 290ºF to 300ºF, carefully add a few sesame balls (up to 5 at a time).', section: SECTIONS.DEEP_FRY },
        { step: 'Fry for 5 minutes. Flip. Fry another 5 minutes. They should float to the top.', section: SECTIONS.DEEP_FRY },
        { step: 'Increase the heat to 350ºF.', section: SECTIONS.DEEP_FRY },
        { step: 'Fry until golden brown and crispy (about 5 minutes). Make sure to flip throughout this time for even cooking.', section: SECTIONS.DEEP_FRY },

        { step: 'Remove the sesame balls from the oil with a spider strainer and place on the cooling rack.', section: SECTIONS.COOL },
        { step: 'Let it cool for about 10 minutes.', section: SECTIONS.COOL },

        { step: 'Enjoy these delicious Asian desserts.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'While making the dough, if it is too wet, add in more rice flour a tablespoon at a time. If it is too dry, add in warm water a tablespoon at a time.' },
        { note: 'Work with chilled red bean paste or preferred filling.' },
        { note: 'If the filling bursts out while frying, remove the exploded balls immediately to avoid contaminating the oil.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until crisp (about 5 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until crisp (about 5 minutes).',
        },
    ],
    mealPrep: true,
};