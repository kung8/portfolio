const onigiri1 = '../assets/Products/tuna-onigiri-1.jpeg';
const onigiri2 = '../assets/Products/tuna-onigiri-2.jpeg';
const onigiri3 = '../assets/Products/tuna-onigiri-3.jpeg';
const onigiri4 = '../assets/Products/tuna-onigiri-4.jpeg';
const onigiri5 = '../assets/Products/tuna-onigiri-5.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { MIXING_BOWL, SEAWEED, SESAME_SEEDS, SHORT_GRAINED_RICE, SALT, CANNED_TUNA, KEWPIE_MAYONNAISE, WATER, CAN_OPENER, FORK, SMALL_BOWL } = require('./ingredients');

const TUNA_MAYO = 'Tuna Mayo';
const PREP_TUNA_MAYO = 'Prep Tuna Mayo';

module.exports = {
    cardName: 'Tuna Onigiri',
    name: 'Tuna Onigiri',
    img: onigiri5,
    recipeAuthors: ['Christie Lai'],
    recipeFinder: 'Samantha Pham',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.SIDE_DISH, CATEGORIES.SNACK],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.WRAP],
    protein: [PROTEIN.FISH],
    type: [TYPES.RICE, TYPES.WRAP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Tuna Onigiri', link: 'https://christieathome.com/blog/japanese-tuna-onigiri/' }
    ],
    separated: true,
    ingredients: [
        { ...SHORT_GRAINED_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', section: SECTIONS.RICE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.RICE },

        { ...CANNED_TUNA, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: TUNA_MAYO },
        { ...KEWPIE_MAYONNAISE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TUNA_MAYO },

        { ...SEAWEED, amount: 2, unit: INGREDIENT_UNITS.SHEET, additionalDetails: 'halved', section: SECTIONS.ASSEMBLY },

        { ...WATER, amount: '', unit: '', additionalDetails: 'for dipping', section: SECTIONS.ASSEMBLY },

        { ...SESAME_SEEDS, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    supplies: [
        MIXING_BOWL,
        CAN_OPENER,
        FORK,
        { ...SMALL_BOWL, amount: 2 },
    ],
    directions: [
        { step: 'In a mixing bowl, add hot cooked rice and salt.', section: SECTIONS.PREP_RICE },
        { step: 'Cover. Set aside.', section: SECTIONS.PREP_RICE },

        { step: 'Open the can of tuna.', section: PREP_TUNA_MAYO },
        { step: 'Press the tuna down with a fork and drain.', section: PREP_TUNA_MAYO },
        { step: 'Transfer tuna to a small bowl.', section: PREP_TUNA_MAYO },
        { step: 'Add mayo. Stir and set aside.', section: PREP_TUNA_MAYO, img: onigiri1 },

        { step: 'Prep a small bowl of water.', section: SECTIONS.ASSEMBLE },
        { step: 'Dip hands in water.', section: SECTIONS.ASSEMBLE },
        { step: 'Scoop 1/2 cup of cooked rice and form a ball.', section: SECTIONS.ASSEMBLE, img: onigiri2 },
        { step: 'Flatten into 1/2 inch thick discs.', section: SECTIONS.ASSEMBLE },
        { step: 'With your thumb, push the center down and place 2 tablespoon of tuna mayo.', section: SECTIONS.ASSEMBLE, img: onigiri3 },
        { step: 'Fold the rice around the filling.', section: SECTIONS.ASSEMBLE },
        { step: 'Pack into a ball and shape it into a triangle.', section: SECTIONS.ASSEMBLE, img: onigiri4 },
        { step: 'Wrap the base of the rice ball with the seaweed.', section: SECTIONS.ASSEMBLE },

        { step: 'Enjoy this easy rice balls with sesame seeds.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: '2/3 cup of uncooked rice yields about 2 cups of cooked rice.' },
        { note: 'Wet hands as you handle the rice as needed.' }
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store individually wrapped in plastic wrap in an airtight container. Note that the seaweed will become soggy and the fish might not taste fresh.',
        },
    ],
    mealPrep: false,
};