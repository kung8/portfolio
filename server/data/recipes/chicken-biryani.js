const aromatics = '../assets/Products/chicken-biryani-aromatics.jpeg';
const boiled = '../assets/Products/chicken-biryani-boiled-rice.jpeg';
const cooking = '../assets/Products/chicken-biryani-cooking-chicken.jpeg';
const drained = '../assets/Products/chicken-biryani-drained-rice.jpeg';
const flipped = '../assets/Products/chicken-biryani-flipped-chicken.jpeg';
const layeredGhee = '../assets/Products/chicken-biryani-layered-ghee.jpeg';
const layeredRice = '../assets/Products/chicken-biryani-layered-rice.jpeg';
const layeredSaffron = '../assets/Products/chicken-biryani-layered-saffron.jpeg';
const layeredVeggies = '../assets/Products/chicken-biryani-layered-veggies.jpeg';
const marinade = '../assets/Products/chicken-biryani-marinade.jpeg';
const marinating = '../assets/Products/chicken-biryani-marinating-chicken.jpeg';
const partially = '../assets/Products/chicken-biryani-partially-cooked-chicken.jpeg';
const clean = '../assets/Products/chicken-biryani-plated-clean.jpeg';
const zoomed = '../assets/Products/chicken-biryani-plated-zoomed.jpeg';
const sauteed = '../assets/Products/chicken-biryani-sauteed-onions.jpeg';
const soakingAromatics = '../assets/Products/chicken-biryani-soaking-aromatics.jpeg';
const soakingSaffron = '../assets/Products/chicken-biryani-soaking-saffron.jpeg';
const spiceInPot = '../assets/Products/chicken-biryani-spice-marinade-in-pot.jpeg';
const workstation = '../assets/Products/chicken-biryani-workstation.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { CARDAMOM, CHICKEN_THIGH, YOGURT, VEGETABLE_OIL, GARLIC, GINGER, TURMERIC, CINNAMON, CAYENNE_PEPPER, GARAM_MASALA, CORIANDER, CUMIN, PAPRIKA, SALT, CLOVES, BAY_LEAF, STAR_ANISE, BASMATI_RICE, CARDAMOM_PODS, YELLOW_ONION, SAFFRON_THREADS, CILANTRO, GHEE, WATER } = require('./ingredients');

const CRISPY_ONION = 'Crispy Onion';
const SAFFRON_WATER = 'Saffron Water';

module.exports = {
    cardName: 'Chicken Biryani',
    name: 'Chicken Biryani',
    img: clean,
    recipeAuthors: ['Nagi Maehashi'],
    recipeFinder: 'Jon Browne',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BOIL, METHODS.SAUTE, METHODS.STEAM],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 90, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Biryani', link: "https://www.recipetineats.com/biryani/" }
    ],
    separated: true,
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'pot' },
        { name: 'small bowl' },
        { name: 'plate' },
        { name: 'paper towels' },
        { name: 'sauce pan' },
    ],
    directions: [
        { step: 'In a large pot, mix the marinade ingredients.', section: SECTIONS.CHICKEN, img: [spiceInPot, marinade] },
        { step: 'Add chicken to the marinade and coat the chicken. Marinade for at least 20 minutes to overnight.', section: SECTIONS.CHICKEN, img: marinating },
        { step: 'Over medium-high heat, bring 3 liters of water to boil.', section: SECTIONS.RICE },
        { step: 'Add salt and whole spices to the water.', section: SECTIONS.RICE, img: [aromatics, soakingAromatics] },
        { step: 'Add rice and bring to a boil.', section: SECTIONS.RICE, img: boiled },
        { step: 'Cook until rice is al dente (about 4 minutes).', section: SECTIONS.RICE },
        { step: 'Drain immediately and set aside. Note that the rice will be a little salty at this point but will balance out later on.', section: SECTIONS.RICE, img: drained },
        { step: 'Line a plate with paper towels.', section: CRISPY_ONION },
        { step: 'Over medium-high heat, heat oil in a saucepan.', section: CRISPY_ONION },
        { step: 'Add onion and cook until golden brown (don\'t burn or it will be bitter). Cook in batches as needed.', section: CRISPY_ONION, img: sauteed },
        { step: 'Place the onions on the paper towel lined plate to drain off some of the oil.', section: CRISPY_ONION },
        { step: 'In a bowl, soak the saffron threads in the warm water.', section: SAFFRON_WATER, img: soakingSaffron },
        { step: 'Over medium heat, cover with lid and cook the pot of marinading chicken for 5 minutes.', section: SECTIONS.MAIN, img: [cooking, workstation] },
        { step: 'Uncover and cook for 5 minutes, turning chicken twice.', section: SECTIONS.MAIN, img: partially },
        { step: 'Remove from heat.', section: SECTIONS.MAIN },
        { step: 'Arrange the chicken in the pot with the skin side down.', section: SECTIONS.MAIN, img: flipped },
        { step: 'Add half of the sauteed onions and half of the cilantro.', section: SECTIONS.MAIN, img: layeredVeggies },
        { step: 'Add the cooked rice and gently flatten.', section: SECTIONS.MAIN, img: layeredRice },
        { step: 'Top with saffron.', section: SECTIONS.MAIN, img: layeredSaffron },
        { step: 'Drizzle with ghee.', section: SECTIONS.MAIN, img: layeredGhee },
        { step: 'Cover and return to stove over medium heat.', section: SECTIONS.MAIN },
        { step: 'Once you see steam, turn down the heat to low and cook for 25 minutes.', section: SECTIONS.MAIN },
        { step: 'Remove from heat and let it rest for 10 minutes with the lid on.', section: SECTIONS.MAIN },
        { step: 'Serve this authentic chicken rice dish with cilantro, yogurt, and sauteed onions.', section: SECTIONS.SERVE, img: zoomed },
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
            instruction: 'Add a little water. Microwave until heated through (about 2-3 minutes).',
        },
    ],
    mealPrep: true,
};