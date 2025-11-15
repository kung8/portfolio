const bibimbap1 = '../assets/Products/bibimbap-1.jpeg';
const bibimbap2 = '../assets/Products/bibimbap-2.jpeg';
const bibimbap3 = '../assets/Products/bibimbap-3.jpeg';
const bibimbap4 = '../assets/Products/bibimbap-4.jpeg';
const bibimbap5 = '../assets/Products/bibimbap-5.jpeg';
const bibimbap6 = '../assets/Products/bibimbap-6.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BROWN_SUGAR,
    CARROT,
    CORN,
    EGG,
    FRYING_PAN,
    GARLIC,
    GOCHUJANG_SAUCE,
    GROUND_BEEF,
    JASMINE_RICE,
    LIGHT_SOY_SAUCE,
    MEDIUM_BOWL,
    POT,
    SERVING_BOWL,
    SESAME_OIL,
    SESAME_SEEDS,
    SPINACH,
    STOVE,
    WATER,
    WHITE_SUGAR,
    WHITE_VINEGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Bibimbap',
    name: 'Korean Bibimbap',
    img: bibimbap5,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.KOREAN, GENRES.ASIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Bibimbap', 
            link: "https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/",
            authors: ['Sue'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.BEEF },
        { ...CARROT, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'matchsticks', section: SECTIONS.VEGGIES },
        { ...SPINACH, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CORN, amount: '', unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.EGGS },

        { ...GOCHUJANG_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.SAUCE },
        { ...SESAME_SEEDS, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },

        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,  
    ],
    supplies: [
        POT,
        FRYING_PAN,
        MEDIUM_BOWL,
        SERVING_BOWL,
    ],
    directions: [
        { step: `Mix the "${SECTIONS.BEEF}" section ingredients.`, section: SECTIONS.MARINATE_BEEF },
        { step: `Marinate the beef for at least 30 minutes. You can replace this with pork, chicken, or any other protein alternative.`, section: SECTIONS.MARINATE_BEEF, img: bibimbap1 },
        { step: `Over medium-high heat, cook the beef until browned then remove.`, section: SECTIONS.COOK_BEEF, img: bibimbap2 },
        { step: `To prepare the vegetable toppings, boil each of the vegetables separately until they soften/wilt.`, section: SECTIONS.COOK_VEGGIES, img: bibimbap3 },
        { step: `Set the vegetables aside until ready to top.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Over medium-high heat, add oil.`, section: SECTIONS.COOK_EGGS },
        { step: `Fry the eggs over-easy, or as preferred.`, section: SECTIONS.COOK_EGGS, img: bibimbap4 },
        { step: `In a medium bowl, mix the "${SECTIONS.SAUCE}" ingredients.`, section: SECTIONS.PREP_SAUCE },
        { step: `In a serving bowl, scoop some rice and top the rice with the beef, veggies, and eggs.`, section: SECTIONS.SERVE },
        { step: `Top with the sauce.`, section: SECTIONS.SERVE, img: bibimbap6 },
        { step: `Mix the toppings in the bowl when you ready to eat.`, section: SECTIONS.SERVE },
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
            instruction: 'Reheat in the microwave until warmed (about 40 to 60 seconds).',
        },
    ],
    mealPrep: false,
};