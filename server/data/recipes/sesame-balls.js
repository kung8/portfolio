// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, COLANDER, COOLING_RACK, DEEP_FRYER_OR_STOVE, GLUTINOUS_RICE_FLOUR, LARGE_BOWL, LARGE_POT, MIXING_BOWL, PAPER_TOWELS, PLASTIC_WRAP, RED_BEAN_PASTE, SALT, SESAME_SEEDS, SHREDDED_COCONUT, SLOTTED_SPOON, SMALL_BOWL, SPIDER_STRAINER, SPLIT_MUNG_BEAN, VANILLA_EXTRACT, VEGETABLE_OIL, WATER, WHITE_SUGAR } = require('./ingredients');

const MUNG_BEAN_FILLING = 'Mung Bean Filling';
const RED_BEAN_FILLING = 'Red Bean Filling';
const PREP_MUNG_BEAN_FILLING = 'Prep Mung Bean Filling';
const FORM_FILLING_INTO_BALLS = 'Form Filling into Balls';
const FORM_BALLS = 'Form Balls';

module.exports = {
    wip: true,
    cardName: 'Sesame Balls',
    name: 'Sesame Balls (Jian Dui or Banh Cam)',
    img: '',
    recipeAuthors: ['Megan', 'Jeannette'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.ASIAN, GENRES.CHINESE, GENRES.VIETNAMESE],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.BEAN],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
    yields: { amount: 10, unit: YIELD_UNITS.BALL },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sesame Balls (Jian Dui)', link: 'https://takestwoeggs.com/sesame-balls-with-red-bean-paste/' },
        { label: 'Banh Cam', link: 'https://www.wokandkin.com/banh-cam/' }
    ],
    separated: true,
    ingredients: [
        { ...GLUTINOUS_RICE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'boiling', section: SECTIONS.DOUGH },

        { ...RED_BEAN_PASTE, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chilled', section: RED_BEAN_FILLING },

        { ...SPLIT_MUNG_BEAN, amount: 5.3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: MUNG_BEAN_FILLING },
        { ...WATER, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'for boiling', section: MUNG_BEAN_FILLING },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'for mixture', section: MUNG_BEAN_FILLING },
        { ...WHITE_SUGAR, amount: 9.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MUNG_BEAN_FILLING },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MUNG_BEAN_FILLING },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MUNG_BEAN_FILLING },
        { ...SHREDDED_COCONUT, amount: 7, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MUNG_BEAN_FILLING },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MUNG_BEAN_FILLING },

        { ...SESAME_SEEDS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.COATING_STATION },
        { ...WATER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.COATING_STATION },

        { ...VEGETABLE_OIL, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DEEP_FRY },
    ],
    appliances: [
        DEEP_FRYER_OR_STOVE,
    ],
    supplies: [
        // dough
        MIXING_BOWL,
        PLASTIC_WRAP,
        // mung bean filling
        COLANDER,
        LARGE_POT,
        LARGE_BOWL,
        // dipping stations
        { ...SMALL_BOWL, amount: 2 },
        // frying
        LARGE_POT,
        SLOTTED_SPOON,
        SPIDER_STRAINER,
        COOLING_RACK,
        PAPER_TOWELS,
        BAKING_SHEET,
    ],
    directions: [
        { step: 'In a mixing bowl, combine the rice flour, sugar and salt.', section: SECTIONS.PREP_DOUGH },
        { step: 'Make a well.', section: SECTIONS.PREP_DOUGH },
        { step: 'Slowly pour in boiling water. Mix until the flour is all incorporated.', section: SECTIONS.PREP_DOUGH },
        { step: 'On a flat surface, knead until it forms into a ball.', section: SECTIONS.PREP_DOUGH },
        { step: 'Place back in the mixing bowl and cover with plastic wrap. Let it rest for 30 minutes.', section: SECTIONS.PREP_DOUGH },

        { step: 'In a colander, rinse the mung beans in cool water until the water runs clear.', section: PREP_MUNG_BEAN_FILLING },
        { step: 'Transfer to a pot. Add the water for boiling.', section: PREP_MUNG_BEAN_FILLING },
        { step: 'Over medium-high heat, bring the water to a boil.', section: PREP_MUNG_BEAN_FILLING },
        { step: 'Cover and simmer over low-medium heat until water has evaporated (about 15 minutes).', section: PREP_MUNG_BEAN_FILLING },
        { step: 'Decrease to low heat. Add the water for mixture.', section: PREP_MUNG_BEAN_FILLING },
        { step: 'Mix until it becomes a lumpy paste.', section: PREP_MUNG_BEAN_FILLING },
        { step: `Add the remaining "${MUNG_BEAN_FILLING}" section ingredients except the oil. Stir.`, section: PREP_MUNG_BEAN_FILLING },
        { step: 'Add oil. Mix.', section: PREP_MUNG_BEAN_FILLING },
        { step: 'Increase to medium-low heat. Cook until the paste is smooth (about 5 to 10 minutes). Stir constantly.', section: PREP_MUNG_BEAN_FILLING },
        { step: 'In a large bowl, transfer mung bean filling and cover with plastic wrap. Let cool.', section: PREP_MUNG_BEAN_FILLING },

        { step: 'When ready, form equal sized balls with either of the preferred fillings.', section: FORM_FILLING_INTO_BALLS },

        { step: 'Prepare two bowls: water and sesame seeds.', section: SECTIONS.PREP_DIPPING_STATIONS },

        { step: 'Divide the dough into equal parts.', section: FORM_BALLS },
        { step: 'Flatten dough to about 2 to 3 inches discs.', section: FORM_BALLS },
        { step: 'Place the red bean filling in the center.', section: FORM_BALLS },
        { step: 'Bring up the sides and pinch the dough to hide the filling.', section: FORM_BALLS },
        { step: 'Lightly roll the balls between your hands to smooth the balls and get rid of any seams.', section: FORM_BALLS },

        { step: 'Dip each ball in the water then the sesame seeds.', section: SECTIONS.DIP },
        { step: 'Gently roll the ball in your hands to press the sesame seeds into the dough.', section: SECTIONS.DIP },

        { step: 'Heat enough oil to cover the height of about 3 sesame ball since they will expand and grow.', section: SECTIONS.DEEP_FRY },
        { step: 'Line paper towels on a baking sheet and place the wire rack on top.', section: SECTIONS.DEEP_FRY },
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