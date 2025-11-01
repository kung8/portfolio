const ginger1 = '../assets/Products/ginger-chicken-1.jpeg';
const ginger2 = '../assets/Products/ginger-chicken-2.jpeg';
const ginger3 = '../assets/Products/ginger-chicken-3.jpeg';
const ginger4 = '../assets/Products/ginger-chicken-4.jpeg';
const ginger5 = '../assets/Products/ginger-chicken-5.jpeg';
const ginger6 = '../assets/Products/ginger-chicken-6.jpeg';
const ginger7 = '../assets/Products/ginger-chicken-7.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BLACK_PEPPER,
    CHICKEN_THIGH,
    CORNSTARCH,
    GINGER,
    LARGE_BOWL,
    LIGHT_SOY_SAUCE,
    SALT,
    SPATULA,
    STOVE,
    WOK,
    SERVING_BOWL,
} = require('./ingredients');

const GINGER_SECTION = 'Ginger';
const PREP_GINGER = 'Prep Ginger';
const COOK_GINGER = 'Cook Ginger';

module.exports = {
    cardName: 'Ginger Chicken',
    name: 'Chinese Ginger Chicken',
    img: ginger7,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Grandma'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...GINGER, amount: 4, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'peeled and cut into long thin strips', section: GINGER_SECTION },

        { ...CHICKEN_THIGH, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 2 inch pieces', section: SECTIONS.CHICKEN },

        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },

        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to thicken', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        SPATULA,
        LARGE_BOWL,
        SERVING_BOWL,
    ],
    directions: [
        { step: 'Peel the ginger.', section: PREP_GINGER },
        { step: 'Cut the ginger into long, thin strips. Do not worry they will cook down.', section: PREP_GINGER, img: ginger1 },

        { step: 'Chop the chicken thighs into roughly 2 inch pieces. Place them in a large bowl.', section: SECTIONS.PREP_CHICKEN },

        { step: 'Over medium-high heat, place wok on stove.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add half the chicken in a single layer.', section: SECTIONS.COOK_CHICKEN, img: ginger2 },
        { step: 'Season with salt and pepper as desired.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Let it brown without stirring (about 3 to 5 minutes).', section: SECTIONS.COOK_CHICKEN },
        { step: 'Flip chicken. Brown other side (about 3 to 5 minutes).', section: SECTIONS.COOK_CHICKEN },

        { step: 'Add half of the ginger towards the bottom of the wok. Let it crisp (about 3 to 5 minutes).', section: COOK_GINGER, img: ginger3 },

        { step: 'Add the soy sauce and cornstarch. Cook for a few minutes.', section: SECTIONS.COOK_SAUCE, img: ginger4 },

        { step: 'Transfer the cooked chicken to a serving bowl. And cook the second batch.', section: SECTIONS.TRANSFER, img: ginger5 },

        { step: 'Eat one of my favorite childhood dishes with steamed rice.', section: SECTIONS.SERVE, img: ginger6 },
    ],
    notes: [
        { note: 'If you are using low-sodium soy sauce, you can be a little more generous with the salt.' },
        { note: 'Chicken will not be completely cooked before ginger gets added.' }, 
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
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Add a splash of water. Stir fry until heated through (about 8 to 10 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a splash of water. Microwave until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};