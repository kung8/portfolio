const beef = '../assets/Products/chili-beef.jpeg';
const cubes = '../assets/Products/chili-cubes.jpeg';
const diced = '../assets/Products/chili-diced-tomatoes.jpeg';
const fragrantPot = '../assets/Products/chili-fragrant-in-pot.jpeg';
const fragrant = '../assets/Products/chili-fragrant.jpeg';
const pot1 = '../assets/Products/chili-in-pot-1.jpeg';
const pot3 = '../assets/Products/chili-in-pot-3.jpeg';
const pot5 = '../assets/Products/chili-in-pot-5.jpeg';
const pot6 = '../assets/Products/chili-in-pot-6.jpeg';
const pot7 = '../assets/Products/chili-in-pot-7.jpeg';
const plated3 = '../assets/Products/chili-plated-3.jpeg';
const plated4 = '../assets/Products/chili-plated-4.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require("./constants");
const {
    GROUND_BEEF,
    YELLOW_ONION,
    JALAPENO_PEPPERS,
    GARLIC,
    CHILI_POWDER,
    CUMIN,
    RED_BELL_PEPPERS,
    CRUSHED_TOMATOES,
    KIDNEY_BEANS,
    DICED_TOMATO,
    BEEF_BROTH,
    TOMATO_PASTE,
    BROWN_SUGAR,
    SALT,
    BLACK_PEPPER,
    CHEDDAR_CHEESE,
    GREEN_ONIONS,
    SALTINES,
} = require('./ingredients');

const BEEF = 'Beef';
const VEGGIES = 'Veggies';

module.exports = {
    cardName: 'Chili',
    name: 'Chili',
    img: pot5,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SOUP],
    separated: true,
    websites: [
        { label: 'Chili', link: 'https://www.spendwithpennies.com/the-best-chili-recipe/' }
    ],
    yields: '6 servings',
    prepTime: '20 m',
    cookTime: '45 m',
    ingredients: [
        { ...GROUND_BEEF, amount: '2 lbs', unit: '', additionalDetails: '', section: BEEF },
        { ...YELLOW_ONION, amount: '1 large', unit: '', additionalDetails: 'diced', section: BEEF },
        { ...JALAPENO_PEPPERS, amount: '1 - 3', unit: '', additionalDetails: 'diced', section: BEEF },
        { ...GARLIC, amount: '4 cloves', unit: '', additionalDetails: 'minced', section: BEEF },
        { ...CHILI_POWDER, amount: '2 1/2 Tbsp', unit: '', additionalDetails: '', section: BEEF },
        { ...CUMIN, amount: '1 tsp', unit: '', additionalDetails: '', section: VEGGIES },
        { ...RED_BELL_PEPPERS, amount: '1', unit: '', additionalDetails: 'diced', section: VEGGIES },
        { ...CRUSHED_TOMATOES, amount: '14.5 oz can', unit: '', additionalDetails: '', section: VEGGIES },
        { ...KIDNEY_BEANS, amount: '20 oz', unit: '', additionalDetails: 'drained and rinsed', section: VEGGIES },
        { ...DICED_TOMATO, amount: '14.5 oz can', unit: '', additionalDetails: '', section: VEGGIES },
        { ...BEEF_BROTH, amount: '3 c', unit: '', additionalDetails: '', section: VEGGIES },
        { ...TOMATO_PASTE, amount: '1 Tbsp', unit: '', additionalDetails: '', section: VEGGIES },
        { ...BROWN_SUGAR, amount: '1 Tbsp', unit: '', additionalDetails: '', section: VEGGIES },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: VEGGIES },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: VEGGIES },
        { ...CHEDDAR_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONIONS, amount: '', unit: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...SALTINES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a large pot over medium-high heat, combine beef, chili powder, onion, jalapeno, and garlic.', type: BEEF, img: [beef, fragrant, fragrantPot] },
        { step: 'Brown the content, mix occasionally, and drain any fat.', type: BEEF, img: [pot1, pot3] },
        { step: 'Add the cumin, bell pepper, different tomato variations, beans, broth, brown sugar, salt and pepper.', type: VEGGIES, img: [cubes, diced] },
        { step: 'Bring to a boil.', type: VEGGIES, img: pot7 },
        { step: 'Lower heat and cook for 45 - 60 minutes or until it has become the desired thickness.', type: VEGGIES, img: pot6 },
        { step: 'Serve with your favorite toppings and feel free to add as much spice as you can handle or desire.', type: SECTIONS.TOPPINGS, img: [plated3, plated4] },
    ],
    notes: [
        { note: 'With one jalapeno pepper it is very mild and a great base for those who do not like spicy food.' },
        { note: 'I prefer a thicker chili, so I added more tomato paste (total of 6 oz) and let it simmer longer.' },
    ]
};