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
const {
    CHICKEN_BREAST,
    UNSALTED_BUTTER,
    BLACK_PEPPER,
    SALT,
    SESAME_OIL,
    GINGER,
    GARLIC,
    LIGHT_SOY_SAUCE,
    MIRIN,
    CHICKEN_BROTH,
    MUSHROOMS,
    EGGS,
    DRIED_RAMEN_NOODLES,
    GREEN_ONIONS,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Ramen',
    name: 'Homemade Chicken Ramen',
    img: zoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.ROAST, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.EGGS],
    type: [TYPES.SOUP, TYPES.NOODLE],
    yields: '2 servings',
    prepTime: '5 m',
    cookTime: '30 m',
    websites: [
        { label: 'Homemade Chicken Ramen', link: "https://www.forkknifeswoon.com/simple-homemade-chicken-ramen" }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_BREAST, amount: '2', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to season', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', additionalDetails: 'to season', section: SECTIONS.CHICKEN },
        { ...SESAME_OIL, amount: '2 tsp', additionalDetails: '', section: SECTIONS.BROTH },
        { ...GINGER, amount: '2 tsp', additionalDetails: '', section: SECTIONS.BROTH },
        { ...GARLIC, amount: '3 cloves', additionalDetails: '', section: SECTIONS.BROTH },
        { ...LIGHT_SOY_SAUCE, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.BROTH },
        { ...MIRIN, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.BROTH },
        { ...CHICKEN_BROTH, amount: '4 c', additionalDetails: '', section: SECTIONS.BROTH },
        { ...MUSHROOMS, amount: '1/2 c', additionalDetails: '', section: SECTIONS.BROTH },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.BROTH },
        { ...EGGS, amount: '2', additionalDetails: '', section: SECTIONS.EGGS },
        { ...DRIED_RAMEN_NOODLES, amount: '2 - 3 oz', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...GREEN_ONIONS, amount: '3', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
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
        { step: 'Preheat the oven to 375ºF.', type: SECTIONS.CHICKEN },
        { step: 'Generously season the chicken breast with salt and pepper.', type: SECTIONS.CHICKEN, img: rawChicken },
        { step: 'Over medium heat, melt butter in an oven-safe pan or pot.', type: SECTIONS.CHICKEN, img: butter },
        { step: 'Add the chicken and cook until each side is golden brown (about 4 to 6 minutes each side)', type: SECTIONS.CHICKEN, img: cookingChicken },
        { step: 'Place the pot with chicken in the oven and roast until the chicken is cooked all the way through (about 15 to 25 minutes, depending on the chicken thickness and the oven).', type: SECTIONS.CHICKEN },
        { step: 'Remove from the oven and transfer the chicken to a cutting board. Cut the chicken into slices and cover with tin-foil to keep warm.', type: SECTIONS.CHICKEN },
        { step: 'Over medium heat, heat oil in a large pot.', type: SECTIONS.BROTH },
        { step: 'Add garlic and ginger and cook until softened (about a few minutes).', type: SECTIONS.BROTH, img: cookingGarlic },
        { step: 'Add soy sauce and mirin and stir until combined (about a minute).', type: SECTIONS.BROTH },
        { step: 'Add chicken broth and cover. Cook until it boils.', type: SECTIONS.BROTH },
        { step: 'Remove the lid, turn down the heat, and let simmer for 5 minutes.', type: SECTIONS.BROTH },
        { step: 'Add mushrooms and salt to taste and cook for another 10 minutes.', type: SECTIONS.BROTH, img: broth },
        { step: 'Over medium-high heat, bring a pot of water to a boil.', type: SECTIONS.EGGS },
        { step: 'Gently lower cold eggs into the pot and let cook for 7 to 8 minutes.', type: SECTIONS.EGGS, img: boiled },
        { step: 'Prepare an ice water bath, and transfer the eggs into it once it is cooked. Leave in the bath for 5 minutes.', type: SECTIONS.EGGS, img: ice },
        { step: 'Slice the eggs in half length-wise.', type: SECTIONS.EGGS, img: sliced },
        { step: 'After the eggs are removed from the pot, place the dried noodles in the boiling water.', type: SECTIONS.NOODLES, img: noodles },
        { step: 'Cook for 2 to 3 minutes and divide into bowls.', type: SECTIONS.NOODLES },
        { step: 'Pour broth over ramen, chicken, and eggs. Top with green onions. Enjoy this upgraded ramen!', type: SECTIONS.SERVE, img: bowl },
    ]
};