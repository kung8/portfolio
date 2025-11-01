const biryani1 = '../assets/Products/chicken-biryani-1.jpeg';
const biryani2 = '../assets/Products/chicken-biryani-2.jpeg';
const biryani3 = '../assets/Products/chicken-biryani-3.jpeg';
const biryani4 = '../assets/Products/chicken-biryani-4.jpeg';
const biryani5 = '../assets/Products/chicken-biryani-5.jpeg';
const biryani6 = '../assets/Products/chicken-biryani-6.jpeg';
const biryani7 = '../assets/Products/chicken-biryani-7.jpeg';
const biryani8 = '../assets/Products/chicken-biryani-8.jpeg';
const biryani9 = '../assets/Products/chicken-biryani-9.jpeg';
const biryani10 = '../assets/Products/chicken-biryani-10.jpeg';
const biryani11 = '../assets/Products/chicken-biryani-11.jpeg';
const biryani12 = '../assets/Products/chicken-biryani-12.jpeg';
const biryani13 = '../assets/Products/chicken-biryani-13.jpeg';
const biryani14 = '../assets/Products/chicken-biryani-14.jpeg';
const biryani15 = '../assets/Products/chicken-biryani-15.jpeg';
const biryani16 = '../assets/Products/chicken-biryani-16.jpeg';
const biryani17 = '../assets/Products/chicken-biryani-17.jpeg';
const biryani18 = '../assets/Products/chicken-biryani-18.jpeg';
const biryani19 = '../assets/Products/chicken-biryani-19.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASMATI_RICE, BAY_LEAF, CARDAMOM, CARDAMOM_PODS, CAYENNE_PEPPER, CHICKEN_THIGH, CILANTRO, CINNAMON, CLOVES, CORIANDER, CUMIN, GARAM_MASALA, GARLIC, GHEE, GINGER, LARGE_POT, PAPER_TOWELS, PAPRIKA, PLATE, POT, SAFFRON_THREADS, SALT, SAUCEPAN, SMALL_BOWL, STAR_ANISE, STOVE, TURMERIC, VEGETABLE_OIL, WATER, YELLOW_ONION, YOGURT } = require('./ingredients');

const CRISPY_ONION = 'Crispy Onion';
const SAFFRON_WATER = 'Saffron Water';

module.exports = {
    cardName: 'Chicken Biryani',
    name: 'Chicken Biryani',
    img: biryani19,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BOIL, METHODS.SAUTE, METHODS.STEAM],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 90, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Biryani', 
            link: "https://www.recipetineats.com/biryani/",
            authors: ['Nagi Maehashi'],
            finder: 'Jon Browne', 
        }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'halved', section: SECTIONS.CHICKEN },
        { ...YOGURT, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.CHICKEN },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...TURMERIC, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CINNAMON, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CAYENNE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CARDAMOM, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARAM_MASALA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CORIANDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...PAPRIKA, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 7 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...CLOVES, amount: 10, unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...BAY_LEAF, amount: 5, unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...STAR_ANISE, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...CARDAMOM_PODS, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...BASMATI_RICE, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },

        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: CRISPY_ONION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'for frying', section: CRISPY_ONION },

        { ...SAFFRON_THREADS, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAFFRON_WATER },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SAFFRON_WATER },

        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...GHEE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },

        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'topping', section: SECTIONS.TOPPINGS },
        { ...YOGURT, amount: '', unit: '', additionalDetails: 'topping', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        POT,
        SMALL_BOWL,
        PLATE,
        PAPER_TOWELS,
        SAUCEPAN,
    ],
    directions: [
        { step: `In a large pot, mix the marinade ingredients.`, section: SECTIONS.CHICKEN, img: [biryani1, biryani2] },
        { step: `Add chicken to the marinade and coat the chicken. Marinade for at least 20 minutes to overnight.`, section: SECTIONS.CHICKEN, img: biryani3 },
        { step: `Over medium-high heat, bring 3 liters of water to boil.`, section: SECTIONS.RICE },
        { step: `Add salt and whole spices to the water.`, section: SECTIONS.RICE, img: [biryani4, biryani5] },
        { step: `Add rice and bring to a boil.`, section: SECTIONS.RICE, img: biryani6 },
        { step: `Cook until rice is al dente (about 4 minutes).`, section: SECTIONS.RICE },
        { step: `Drain immediately and set aside. Note that the rice will be a little salty at this point but will balance out later on.`, section: SECTIONS.RICE, img: biryani7 },
        { step: `Line a plate with paper towels.`, section: CRISPY_ONION },
        { step: `Over medium-high heat, heat oil in a saucepan.`, section: CRISPY_ONION },
        { step: `Add onion and cook until golden brown (don't burn or it will be bitter). Cook in batches as needed.`, section: CRISPY_ONION, img: biryani8 },
        { step: `Place the onions on the paper towel lined plate to drain off some of the oil.`, section: CRISPY_ONION },
        { step: `In a bowl, soak the saffron threads in the warm water.`, section: SAFFRON_WATER, img: biryani9 },
        { step: `Over medium heat, cover with lid and cook the pot of marinading chicken for 5 minutes.`, section: SECTIONS.MAIN, img: [biryani10, biryani11] },
        { step: `Uncover and cook for 5 minutes, turning chicken twice.`, section: SECTIONS.MAIN, img: biryani12 },
        { step: `Remove from heat.`, section: SECTIONS.MAIN },
        { step: `Arrange the chicken in the pot with the skin side down.`, section: SECTIONS.MAIN, img: biryani13 },
        { step: `Add half of the sauteed onions and half of the cilantro.`, section: SECTIONS.MAIN, img: biryani14 },
        { step: `Add the cooked rice and gently flatten.`, section: SECTIONS.MAIN, img: biryani15 },
        { step: `Top with saffron.`, section: SECTIONS.MAIN, img: biryani16 },
        { step: `Drizzle with ghee.`, section: SECTIONS.MAIN, img: biryani17 },
        { step: `Cover and return to stove over medium heat.`, section: SECTIONS.MAIN },
        { step: `Once you see steam, turn down the heat to low and cook for 25 minutes.`, section: SECTIONS.MAIN },
        { step: `Remove from heat and let it rest for 10 minutes with the lid on.`, section: SECTIONS.MAIN },
        { step: `Serve this authentic chicken rice dish with cilantro, yogurt, and sauteed onions.`, section: SECTIONS.SERVE, img: biryani18 },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a little water. Microwave until heated through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};