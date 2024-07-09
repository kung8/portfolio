const eighty = '../assets/Products/cashew-chicken-80.jpeg';
const oneHundred = '../assets/Products/cashew-chicken-100.jpeg';
const raw = '../assets/Products/cashew-chicken-coated-raw-chicken.jpeg';
const cooked = '../assets/Products/cashew-chicken-cooked.jpeg';
const cooking = '../assets/Products/cashew-chicken-cooking-chicken.jpeg';
const oils = '../assets/Products/cashew-chicken-oils.jpeg';
const plated = '../assets/Products/cashew-chicken-plated.jpeg';
const withSauce = '../assets/Products/cashew-chicken-sauce.jpeg';
const cashews = '../assets/Products/cashew-chicken-veggies-with-cashew.jpeg';
const veggies = '../assets/Products/cashew-chicken-veggies.jpeg';
const sauce = '../assets/Products/cashew-chicken-with-sauce.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const CHICKEN = 'Chicken';

module.exports = {
    cardName: 'Cashew Chicken',
    name: 'Chinese Cashew Chicken',
    img: plated,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN, PROTEIN.EDAMAME],
    type: [TYPES.RICE],
    yields: '6 servings',
    prepTime: '10 m',
    cookTime: '20 m',
    websites: [
        "https://www.averiecooks.com/better-than-takeout-cashew-chicken"
    ],
    separated: true,
    ingredients: [
        { name: 'light soy sauce', amount: '3 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'honey', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'rice wine vinegar', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'Asian chili garlic sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'ground ginger', amount: '3/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'boneless and skinless chicken breasts', amount: '1.5 lb', additionalDetails: '1 inch cubes', optional: false, section: CHICKEN },
        { name: 'cornstarch', amount: '3 Tbsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'pepper', amount: '1/2 tsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'sesame oil', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'olive oil', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'broccoli', amount: '1', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'bell pepper', amount: '1', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'edamame', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'whole cashews', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'green onions', amount: '4', additionalDetails: 'chopped diagonally', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'sesame seeds', amount: '', additionalDetails: 'optional', optional: false, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'medium bowl' },
        { name: '2 large bowls' },
    ],
    directions: [
        { step: 'In a medium bowl, combine the sauce ingredients. Mix well.', type: SECTIONS.SAUCE, img: sauce },
        { step: 'In a large bowl, combine diced chicken, salt, pepper and cornstarch. Mix well until chicken is well coated.', type: CHICKEN, img: raw },
        { step: 'Over medium-high heat, add the combination of oils in a wok.', type: CHICKEN, img: oils },
        { step: 'Add the chicken and cook until the chicken is about 80% cooked through (about 3 to 4 minutes on each side).', type: CHICKEN, img: cooking },
        { step: 'Remove chicken from the wok and transfer to a clean large bowl.', type: CHICKEN, img: eighty },
        { step: 'Add the broccoli, bell peppers, frozen edamame, and garlic to the wok. Cook until the vegetables are tender (about 3 to 4 minutes).', type: SECTIONS.MAIN, img: veggies },
        { step: 'Add the cashews. Stir until mixed.', type: SECTIONS.MAIN, img: cashews },
        { step: 'Re-add the chicken. Stir until mixed and chicken is cooked through.', type: SECTIONS.MAIN, img: oneHundred },
        { step: 'Add the sauce and mix until well coated. Cook for a minute or two.', type: SECTIONS.MAIN, img: withSauce },
        { step: 'Turn off the stove and remove from heat.', type: SECTIONS.MAIN, img: cooked },
        { step: 'Top this dish with green onions and sesame seeds and serve wth steamed rice.', type: SECTIONS.SERVE },
    ]
};