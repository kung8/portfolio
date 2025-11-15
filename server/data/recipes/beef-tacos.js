const tacos1 = '../assets/Products/beef-tacos-1.jpeg';
const tacos2 = '../assets/Products/beef-tacos-2.jpeg';
const tacos3 = '../assets/Products/beef-tacos-3.jpeg';
const tacos4 = '../assets/Products/beef-tacos-4.jpeg';
const tacos5 = '../assets/Products/beef-tacos-5.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CHILI_POWDER, CUMIN, FLOUR_TORTILLA, FRYING_PAN, GARLIC_POWDER, GROUND_BEEF, LETTUCE, MEXICAN_BLEND_CHEESE, MICROWAVE, OLIVE_OIL, OREGANO, PLATE, RED_ONION, ROMA_TOMATO, SALT, STOVE, TOMATO_PASTE, WATER } = require('./ingredients');

const TACO_SHELLS = 'Taco Shells';

module.exports = {
    cardName: 'Beef Tacos',
    name: 'Beef Tacos',
    img: tacos4,
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.TACO],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Beef Tacos', 
            link: 'https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/',
            authors: ['Yumna Jawad'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHILI_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CUMIN, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...OREGANO, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GARLIC_POWDER, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...TOMATO_PASTE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WATER, amount: 1/2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.FILLING },
        { ...FLOUR_TORTILLA, amount: 8, unit: '', additionalDetails: '', section: TACO_SHELLS },
        { ...LETTUCE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...MEXICAN_BLEND_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...RED_ONION, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,  
        MICROWAVE,
    ],
    supplies: [
        FRYING_PAN,
        PLATE,
    ],
    directions: [
        { step: `Over medium-high heat, heat oil in a frying pan.`, section: SECTIONS.PREP_FILLING },
        { step: `Add beef and cook until browned (about 5 to 7 minutes). Drain.`, section: SECTIONS.PREP_FILLING, img: tacos1 },
        { step: `Reduce the heat to medium-low.`, section: SECTIONS.PREP_FILLING },
        { step: `Add the rest of the filling ingredients. Mix.`, section: SECTIONS.PREP_FILLING, img: tacos2 },
        { step: `Cook until the sauce has thickened (about 3 to 5 minutes).`, section: SECTIONS.PREP_FILLING, img: tacos3 },
        { step: `Place tortillas on a plate and microwave for 30 seconds. Flip. Microwave for another 30 seconds.`, section: SECTIONS.ASSEMBLE },
        { step: `Fill the tortillas with the ground beef mixture and your favorite toppings.`, section: SECTIONS.ASSEMBLE, img: tacos5 },
        { step: `Serve and enjoy!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Keep each of the filling/toppings and shells separate to maintain freshness.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 5 too 10 minutes).',
        },
    ],
    mealPrep: true,
};