const plate = '../assets/Products/baked-lemon-chicken-plate.jpeg';
const full = '../assets/Products/baked-lemon-chicken-full-plate.jpeg';
const pan = '../assets/Products/baked-lemon-chicken-pan.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'Baked Lemon Chicken',
    name: 'Baked Lemon Chicken',
    img: full,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '5 servings',
    prepTime: '5 m',
    cookTime: '50 m',
    ingredients: [
        { name: 'chicken wings', amount: '4', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'butter', amount: '3 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'chicken broth', amount: '1/3 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'lemon juice', amount: '4 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'honey', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic cloves', amount: '2 tsp', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'italian seasoning', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'rosemary', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'lemon', amount: '', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'frying pan' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Over medium-high heat, melt butter.', type: SECTIONS.MAIN },
        { step: 'Add chicken wings to the pan and cook for 2 to 3 minutes on each side until browned.', type: SECTIONS.MAIN },
        { step: 'Transfer chicken to baking pan.', type: SECTIONS.MAIN },
        { step: 'In a small bowl, mix together chicken broth, lemon juice, honey, garlic, italian seasoning, salt and pepper.', type: SECTIONS.MAIN },
        { step: 'Pour the sauce over the chicken and add lemon slices.', type: SECTIONS.MAIN },
        { step: 'Bake for 20 to 30 minutes.', type: SECTIONS.MAIN, img: pan },
        { step: 'Serve with rice and garnish with fresh rosemary.', type: SECTIONS.SERVE, img: plate },
    ]
};