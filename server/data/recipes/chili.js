const chili1 = '../assets/Products/chili-1.jpeg';
const chili2 = '../assets/Products/chili-2.jpeg';
const chili3 = '../assets/Products/chili-3.jpeg';
const chili4 = '../assets/Products/chili-4.jpeg';
const chili5 = '../assets/Products/chili-5.jpeg';
const chili6 = '../assets/Products/chili-6.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BEEF_BROTH,
    BLACK_PEPPER,
    BROWN_SUGAR,
    CHEDDAR_CHEESE,
    CHILI_POWDER,
    CRUSHED_TOMATOES,
    CUMIN,
    DICED_TOMATO,
    GARLIC,
    GREEN_ONION,
    GROUND_BEEF,
    JALAPENO_PEPPER,
    KIDNEY_BEANS,
    LARGE_POT,
    RED_BELL_PEPPER,
    SALT,
    SALTINES,
    SPATULA,
    STOVE,
    TOMATO_PASTE,
    YELLOW_ONION,
} = require('./ingredients');

const BEEF = 'Beef';
const VEGGIES = 'Veggies';

module.exports = {
    cardName: 'Chili',
    name: 'Chili',
    img: chili4,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SOUP],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    separated: true,
    websites: [
        { 
            label: 'Chili', 
            link: 'https://www.spendwithpennies.com/the-best-chili-recipe/',
            authors: ['Holly Nilsson'],
            finder: 'Kevin Ung', 
        }
    ],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...GROUND_BEEF, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BEEF },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'diced', section: BEEF },
        { ...JALAPENO_PEPPER, amount: 3, unit: '', additionalDetails: 'diced', section: BEEF },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: BEEF },
        { ...CHILI_POWDER, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: VEGGIES },
        { ...CRUSHED_TOMATOES, amount: 14.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: VEGGIES },
        { ...KIDNEY_BEANS, amount: 20, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'drained and rinsed', section: VEGGIES },
        { ...DICED_TOMATO, amount: 14.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: VEGGIES },
        { ...BEEF_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: VEGGIES },
        { ...TOMATO_PASTE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: VEGGIES },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: VEGGIES },
        { ...CHEDDAR_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...SALTINES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        SPATULA,
    ],
    directions: [
        { step: 'In a large pot over medium-high heat, combine beef, chili powder, onion, jalapeno, and garlic.', section: BEEF, img: chili1 },
        { step: 'Brown the content, mix occasionally, and drain any fat.', section: BEEF, img: chili2 },
        { step: 'Add the cumin, bell pepper, different tomato variations, beans, broth, brown sugar, salt and pepper.', section: VEGGIES, img: chili3 },
        { step: 'Bring to a boil.', section: VEGGIES },
        { step: 'Lower heat and cook for 45 - 60 minutes or until it has become the desired thickness.', section: VEGGIES },
        { step: 'Serve with your favorite toppings and feel free to add as much spice as you can handle or desire.', section: SECTIONS.TOPPINGS, img: [chili5, chili6] },
    ],
    notes: [
        { note: 'With one jalapeno pepper it is very mild and a great base for those who do not like spicy food.' },
        { note: 'I prefer a thicker chili, so I added more tomato paste (total of 6 oz) and let it simmer longer.' },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'For reheating smaller portions. Microwave until heated through (about 4 to 5 minutes). Stirring occasionally.',
        },
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'For reheating larger amounts. Over low heat, reheat in a pot until heated through (about 10 to 20 minutes). Stirring occasionally.',
        },
    ],
    mealPrep: true,
};