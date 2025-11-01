const onigiri1 = '../assets/Products/tuna-onigiri-1.jpeg';
const onigiri2 = '../assets/Products/tuna-onigiri-2.jpeg';
const onigiri3 = '../assets/Products/tuna-onigiri-3.jpeg';
const onigiri4 = '../assets/Products/tuna-onigiri-4.jpeg';
const onigiri5 = '../assets/Products/tuna-onigiri-5.jpeg';
const onigiri6 = '../assets/Products/tuna-onigiri-6.jpeg';
const onigiri7 = '../assets/Products/tuna-onigiri-7.jpeg';
const onigiri8 = '../assets/Products/tuna-onigiri-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CANNED_TUNA, CAN_OPENER, FORK, KEWPIE_MAYONNAISE, MIXING_BOWL, ONIGIRI_MOLD, SALT, SEAWEED, SESAME_SEEDS, SHORT_GRAINED_RICE, SMALL_BOWL, WATER } = require('./ingredients');

const TUNA_MAYO = 'Tuna Mayo';
const PREP_TUNA_MAYO = 'Prep Tuna Mayo';

const ASSEMBLE_WITHOUT_MOLD = 'Assemble Without Mold';
const ASSEMBLE_WITH_MOLD = 'Assemble With Mold';

module.exports = {
    cardName: 'Tuna Onigiri',
    name: 'Tuna Onigiri',
    img: onigiri6,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.SIDE_DISH, CATEGORIES.SNACK],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.WRAP],
    protein: [PROTEIN.FISH],
    type: [TYPES.RICE, TYPES.WRAP],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PESCATARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Tuna Onigiri', 
            link: 'https://christieathome.com/blog/japanese-tuna-onigiri/',
            authors: ['Christie Lai'],
            finder: 'Samantha Pham', 
        }
    ],
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
        { ...ONIGIRI_MOLD, additionalDetails: 'preferred type' },
    ],
    directions: [
        { step: `In a mixing bowl, add hot cooked rice and salt.`, section: SECTIONS.PREP_RICE },
        { step: `Cover. Set aside.`, section: SECTIONS.PREP_RICE },

        { step: `Open the can of tuna.`, section: PREP_TUNA_MAYO },
        { step: `Press the tuna down with a fork and drain.`, section: PREP_TUNA_MAYO },
        { step: `Transfer tuna to a small bowl.`, section: PREP_TUNA_MAYO },
        { step: `Add mayo. Stir and set aside.`, section: PREP_TUNA_MAYO, img: onigiri1 },

        { step: `Prep a small bowl of water.`, section: ASSEMBLE_WITHOUT_MOLD },
        { step: `Dip hands in water.`, section: ASSEMBLE_WITHOUT_MOLD },
        { step: `Scoop 1/2 cup of cooked rice and form a ball.`, section: ASSEMBLE_WITHOUT_MOLD, img: onigiri2 },
        { step: `Flatten into 1/2 inch thick discs.`, section: ASSEMBLE_WITHOUT_MOLD },
        { step: `With your thumb, push the center down and place 2 tablespoon of tuna mayo.`, section: ASSEMBLE_WITHOUT_MOLD, img: onigiri3 },
        { step: `Fold the rice around the filling.`, section: ASSEMBLE_WITHOUT_MOLD },
        { step: `Pack into a ball and shape it into a triangle.`, section: ASSEMBLE_WITHOUT_MOLD, img: onigiri4 },
        { step: `Wrap the base of the rice ball with the seaweed.`, section: ASSEMBLE_WITHOUT_MOLD, img: onigiri5 },

        { step: `Place the seaweed partially in the mold so that the rice when laid on top will be equally distributed.`, section: ASSEMBLE_WITH_MOLD },
        { step: `Fill the mold about halfway.`, section: ASSEMBLE_WITH_MOLD },
        { step: `Add tuna in the center of the rice.`, section: ASSEMBLE_WITH_MOLD },
        { step: `Cover the tuna with rice and push the mold lid to secure the rice ball into desired shape.`, section: ASSEMBLE_WITH_MOLD },
        { step: `Carefully remove the rice ball from the mold.`, section: ASSEMBLE_WITH_MOLD },

        { step: `Optionally brush each rice ball with teriyaki sauce and pan fry until golden brown on both sides.`, section: SECTIONS.PAN_FRY, img: [onigiri7, onigiri8] },

        { step: `Enjoy this easy rice balls with sesame seeds.`, section: SECTIONS.SERVE },
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