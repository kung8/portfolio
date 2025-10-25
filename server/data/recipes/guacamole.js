const guacamole1 = '../assets/Products/guacamole-1.jpeg';
const guacamole2 = '../assets/Products/guacamole-2.jpeg';
const guacamole3 = '../assets/Products/guacamole-3.jpeg';
const guacamole4 = '../assets/Products/guacamole-4.jpeg';
const guacamole5 = '../assets/Products/guacamole-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { AVOCADO, CAYENNE_PEPPER, CILANTRO, GARLIC, LIME, ROMA_TOMATO, SALT, YELLOW_ONION } = require('./ingredients');

module.exports = {
    cardName: 'Guacamole',
    name: 'Guacamole',
    img: guacamole5,
    available: true,
    recommended: true,
    category: [CATEGORIES.DIP],
    genre: [GENRES.MEXICAN],
    method: [METHODS.MIX],
    type: [TYPES.DIP],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Guacamole', 
            link: 'https://www.allrecipes.com/recipe/14231/guacamole/',
            authors: ['Maryellen'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...AVOCADO, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'juiced', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 2, unit: '', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Slice the avocados in half and remove the pit.', section: SECTIONS.MAIN, img: guacamole1 },
        { step: 'In a medium bowl, mash avocado.', section: SECTIONS.MAIN, img: guacamole2 },
        { step: 'Add the lime juice and salt. Mix.', section: SECTIONS.MAIN, img: guacamole3 },
        { step: 'Add the garlic, tomatoes, onion, and cilantro. Mix.', section: SECTIONS.MAIN, img: guacamole4 },
        { step: 'Add the cayenne. Mix.', section: SECTIONS.MAIN },
        { step: 'Cover and chill for 1 hour.', section: SECTIONS.MAIN },
        { step: 'Serve with your favorite chips.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'It might turn brown, but it is still safe to eat. You can try to add some lime juice to prevent browning.'
        },
    ],
    reheat: null,
    mealPrep: false,
};