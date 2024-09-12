const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { CARDAMOM, CHICKEN_THIGH, YOGURT, COLD_WATER, VEGETABLE_OIL, GARLIC, GINGER, TURMERIC, CINNAMON, CAYENNE_PEPPER, GARAM_MASALA, CORIANDER, CUMIN, PAPRIKA, SALT, CLOVES, BAY_LEAVES, STAR_ANISE, BASMATI_RICE, CARDAMOM_PODS, MEDIUM_YELLOW_ONION, SAFFRON_THREADS, WARM_WATER, CILANTRO, GHEE } = require('./ingredients');

const CRISPY_ONION = 'Crispy Onion';
const SAFFRON_WATER = 'Saffron Water';

module.exports = {
    cardName: 'Chicken Biryani',
    name: 'Chicken Biryani',
    // img: '',
    recipeCredit: 'Jon Browne',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BOIL, METHODS.SAUTE, METHODS.STEAM],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: ' servings',
    prepTime: '20 m',
    cookTime: '1 hr 30 m',
    websites: [
        "https://www.recipetineats.com/biryani/"
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_THIGH, amount: '1.5 lb', additionalDetails: 'halved', section: SECTIONS.CHICKEN },
        { ...YOGURT, amount: '2/3 c', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...COLD_WATER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...VEGETABLE_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC, amount: '6', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GINGER, amount: '2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...TURMERIC, amount: '1/8 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CINNAMON, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CAYENNE_PEPPER, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CARDAMOM, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARAM_MASALA, amount: '2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CORIANDER, amount: '2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CUMIN, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...PAPRIKA, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '1 3/4 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        
        { ...SALT, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.RICE },
        { ...CLOVES, amount: '10', additionalDetails: '', section: SECTIONS.RICE },
        { ...BAY_LEAVES, amount: '5', additionalDetails: '', section: SECTIONS.RICE },
        { ...STAR_ANISE, amount: '1', additionalDetails: '', section: SECTIONS.RICE },
        { ...CARDAMOM_PODS, amount: '6', additionalDetails: '', section: SECTIONS.RICE },
        { ...BASMATI_RICE, amount: '2 1/4 c', additionalDetails: '', section: SECTIONS.RICE },
        
        { ...MEDIUM_YELLOW_ONION, amount: '2', additionalDetails: 'sliced', section: CRISPY_ONION },
        { ...VEGETABLE_OIL, amount: '1 c', additionalDetails: 'for frying', section: CRISPY_ONION },
        
        { ...SAFFRON_THREADS, amount: '1 tsp', additionalDetails: '', section: SAFFRON_WATER  },
        { ...WARM_WATER, amount: '2 Tbsp', additionalDetails: '', section: SAFFRON_WATER },
        
        { ...CILANTRO, amount: '1 c', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...GHEE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        
        { ...CILANTRO, amount: '', additionalDetails: 'topping', section: SECTIONS.TOPPINGS },
        { ...YOGURT, amount: '', additionalDetails: 'topping', section: SECTIONS.TOPPINGS },
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
        { step: 'In a large pot, mix the marinade ingredients.', type: SECTIONS.CHICKEN },
        { step: 'Add chicken to the marinade and coat the chicken. Marinade for at least 20 minutes to overnight.', type: SECTIONS.CHICKEN },
        { step: 'Over medium-high heat, bring 3 liters of water to boil.', type: SECTIONS.RICE },
        { step: 'Add salt and whole spices to the water.', type: SECTIONS.RICE },
        { step: 'Add rice and bring to a boil.', type: SECTIONS.RICE },
        { step: 'Cook until rice is al dente (about 4 minutes).', type: SECTIONS.RICE },
        { step: 'Drain immediately and set aside. Note that the rice will be a little salty at this point but will balance out later on.', type: SECTIONS.RICE },
        { step: 'Line a plate with paper towels.', type: CRISPY_ONION },
        { step: 'Over medium-high heat, heat oil in a saucepan.', type: CRISPY_ONION },
        { step: 'Add onion and cook until golden brown (don\'t burn or it will be bitter). Cook in batches as needed.', type: CRISPY_ONION },
        { step: 'Place the onions on the paper towel lined plate to drain off some of the oil.', type: CRISPY_ONION },
        { step: 'In a bowl, soak the saffron threads in the warm water.', type: SAFFRON_WATER },
        { step: 'Over medium heat, cover with lid and cook the pot of marinading chicken for 5 minutes.', type: SECTIONS.MAIN },
        { step: 'Uncover and cook for 5 minutes, turning chicken twice.', type: SECTIONS.MAIN },
        { step: 'Remove from heat.', type: SECTIONS.MAIN },
        { step: 'Arrange the chicken in the pot with the skin side down.', type: SECTIONS.MAIN },
        { step: 'Add half of the sauteed onions and half of the cilantro.', type: SECTIONS.MAIN },
        { step: 'Add the cooked rice and gently flatten.', type: SECTIONS.MAIN },
        { step: 'Top with saffron.', type: SECTIONS.MAIN },
        { step: 'Drizzle with ghee.', type: SECTIONS.MAIN },
        { step: 'Cover and return to stove over medium heat.', type: SECTIONS.MAIN },
        { step: 'Once you see steam, turn down the heat to low and cook for 25 minutes.', type: SECTIONS.MAIN },
        { step: 'Remove from heat and let it rest for 10 minutes with the lid on.', type: SECTIONS.MAIN },
        { step: 'Serve this authentic chicken rice dish with cilantro, yogurt, and sauteed onions.', type: SECTIONS.SERVE },
    ]
};