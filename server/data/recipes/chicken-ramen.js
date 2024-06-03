const boiled = '../assets/Products/chicken-ramen-boiled-eggs.jpeg';
const bowl = '../assets/Products/chicken-ramen-bowl.jpeg';
const zoomed = '../assets/Products/chicken-ramen-bowl-zoomed.jpeg';
const broth = '../assets/Products/chicken-ramen-broth.jpeg';
const butter = '../assets/Products/chicken-ramen-butter.jpeg';
const cookingChicken = '../assets/Products/chicken-ramen-cooking-chicken.jpeg';
const cookingGarlic = '../assets/Products/chicken-ramen-garlic-ginger.jpeg';
const ice = '../assets/Products/chicken-ramen-ice-bath.jpeg';
const noodles = '../assets/Products/chicken-ramen-noodles.jpeg';
const rawChicken = '../assets/Products/chicken-ramen-raw-chicken.jpeg';
const sliced = '../assets/Products/chicken-ramen-sliced.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const CHICKEN = 'Chicken';
const BROTH = 'Broth';
const EGGS = 'Eggs';
const NOODLES = 'Noodles';

module.exports = {
    cardName: 'Chicken Ramen',
    name: 'Homemade Chicken Ramen',
    img: zoomed,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.PAN_FRY, METHODS.ROAST, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.EGGS],
    type: [TYPES.SOUP, TYPES.NOODLE],
    yields: '2 servings',
    prepTime: '5 m',
    cookTime: '30 m',
    websites: [
        "https://www.forkknifeswoon.com/simple-homemade-chicken-ramen"
    ],
    separated: true,
    ingredients: [
        { name: 'chicken breast', amount: '2', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'unsalted butter', amount: '1 Tbsp', additionalDetails: '', optional: false, section: CHICKEN },
        { name: 'black pepper', amount: '', additionalDetails: 'to season', optional: false, section: CHICKEN },
        { name: 'salt', amount: '', additionalDetails: 'to season', optional: false, section: CHICKEN },
        { name: 'sesame oil', amount: '2 tsp', additionalDetails: '', optional: false, section: BROTH },
        { name: 'ginger', amount: '2 tsp', additionalDetails: '', optional: false, section: BROTH },
        { name: 'garlic', amount: '1 Tbsp', additionalDetails: '', optional: false, section: BROTH },
        { name: 'low-sodium soy sauce', amount: '3 Tbsp', additionalDetails: '', optional: false, section: BROTH },
        { name: 'mirin', amount: '2 Tbsp', additionalDetails: '', optional: false, section: BROTH },
        { name: 'chicken broth', amount: '4 c', additionalDetails: '', optional: false, section: BROTH },
        { name: 'mushrooms', amount: '1/2 c', additionalDetails: '', optional: false, section: BROTH },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', optional: false, section: BROTH },
        { name: 'eggs', amount: '2', additionalDetails: '', optional: false, section: EGGS },
        { name: 'dried ramen noodles', amount: '2 - 3 oz', additionalDetails: '', optional: false, section: NOODLES },
        { name: 'green onions', amount: '3', additionalDetails: 'chopped', optional: false, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'oven-safe pot/pan' },
        { name: 'large pot' },
        { name: 'small pot' },
        { name: 'spider strainer' },
        { name: 'cutting board' },
        { name: 'tin-foil' },
        { name: 'bowls' },
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF.', type: CHICKEN },
        { step: 'Generously season the chicken breast with salt and pepper.', type: CHICKEN, img: rawChicken },
        { step: 'Over medium heat, melt butter in an oven-safe pan or pot.', type: CHICKEN, img: butter },
        { step: 'Add the chicken and cook until each side is golden brown (about 4 to 6 minutes each side)', type: CHICKEN, img: cookingChicken },
        { step: 'Place the pot with chicken in the oven and roast until the chicken is cooked all the way through (about 15 to 25 minutes, depending on the chicken thickness and the oven).', type: CHICKEN },
        { step: 'Remove from the oven and transfer the chicken to a cutting board. Cut the chicken into slices and cover with tin-foil to keep warm.', type: CHICKEN },
        { step: 'Over medium heat, heat oil in a large pot.', type: BROTH },
        { step: 'Add garlic and ginger and cook until softened (about a few minutes).', type: BROTH, img: cookingGarlic },
        { step: 'Add soy sauce and mirin and stir until combined (about a minute).', type: BROTH },
        { step: 'Add chicken broth and cover. Cook until it boils.', type: BROTH },
        { step: 'Remove the lid, turn down the heat, and let simmer for 5 minutes.', type: BROTH },
        { step: 'Add mushrooms and salt to taste and cook for another 10 minutes.', type: BROTH, img: broth },
        { step: 'Over medium-high heat, bring a pot of water to a boil.', type: EGGS },
        { step: 'Gently lower cold eggs into the pot and let cook for 7 to 8 minutes.', type: EGGS, img: boiled },
        { step: 'Prepare an ice water bath, and transfer the eggs into it once it is cooked. Leave in the bath for 5 minutes.', type: EGGS, img: ice },
        { step: 'Slice the eggs in half length-wise.', type: EGGS, img: sliced },
        { step: 'After the eggs are removed from the pot, place the dried noodles in the boiling water.', type: NOODLES, img: noodles },
        { step: 'Cook for 2 to 3 minutes and divide into bowls.', type: NOODLES },
        { step: 'Pour broth over ramen, chicken, and eggs. Top with green onions. Enjoy this upgraded ramen!', type: SECTIONS.SERVE, img: bowl },
    ]
};