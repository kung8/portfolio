// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { CHICKEN_BREAST, ALL_PURPOSE_FLOUR, OLIVE_OIL, GARLIC, SALT, BLACK_PEPPER, PAPRIKA, OREGANO, RED_PEPPER_FLAKES, CHICKEN_BROTH, LEMON, LIGHT_CREAM, FRESH_RAMEN_NOODLES, CILANTRO, GREEN_ONIONS, SESAME_SEEDS, SNOW_PEAS } = require('./ingredients');

module.exports = {
    cardName: 'Lemon Chicken Ramen',
    name: 'Lemon Chicken Ramen',
    // img: '',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP, TYPES.NOODLE],
    yields: '2 servings',
    prepTime: '5 m',
    cookTime: '15 m',
    websites: [
        "https://myriadrecipes.com/lemon-chicken-ramen/"
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_BREAST, amount: '2', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...ALL_PURPOSE_FLOUR, amount: '1/3 c', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC, amount: '3', additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...PAPRIKA, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OREGANO, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: '2 1/2 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON, amount: '1/2', additionalDetails: 'juiced', section: SECTIONS.SAUCE },
        { ...LIGHT_CREAM, amount: '1 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_RAMEN_NOODLES, amount: '6 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONIONS, amount: '', additionalDetails: 'sliced diagonally', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: '1/2', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...SNOW_PEAS, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Mix together flour, salt and black pepper.', type: SECTIONS.CHICKEN },
        { step: 'Coat the chicken in the flour mixture.', type: SECTIONS.CHICKEN },
        { step: 'Over medium heat, heat up olive oil in a large pot.', type: SECTIONS.CHICKEN },
        { step: 'Add chicken breast to pot and cook until each side is golden brown (about 3 minutes each side).', type: SECTIONS.CHICKEN },
        { step: 'Transfer chicken to a cutting board and set aside. It will be cut later.', type: SECTIONS.CHICKEN },
        { step: 'Over medium heat, add garlic, paprika, oregano, and red pepper flakes to the large pot (could be the one that was used for the chicken).', type: SECTIONS.SAUCE },
        { step: 'Stir and cook until fragrant (about 1 minute).', type: SECTIONS.SAUCE },
        { step: 'Stir in chicken broth, lemon juice and light cream.', type: SECTIONS.SAUCE },
        { step: 'Place the chicken in the broth and cover the pot. Cook for 5 to 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Transfer the chicken back to the cutting board.', type: SECTIONS.MAIN },
        { step: 'Add the noodles into the broth and cook for 2 to 3 minutes.', type: SECTIONS.MAIN },
        { step: 'Slice up the chicken to be topped on the ramen.', type: SECTIONS.MAIN },
        { step: 'Divide the noodles into two bowls, pour over broth and top the bowls with the chicken, lemon slice, vegetables and sesame seeds.', type: SECTIONS.SERVE },
    ]
};