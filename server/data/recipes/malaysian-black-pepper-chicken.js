const zoomed = '../assets/Products/black-pepper-chicken-combined-in-pan-zoomed.jpeg';
const combined = '../assets/Products/black-pepper-chicken-combined-in-pan.jpeg';
const cooked = '../assets/Products/black-pepper-chicken-cooked-chicken.jpeg';
const cornstarch = '../assets/Products/black-pepper-chicken-cornstarch.jpeg';
const marinade = '../assets/Products/black-pepper-chicken-marinade.jpeg';
const marinaded = '../assets/Products/black-pepper-chicken-marinaded-chicken.jpeg';
const partial = '../assets/Products/black-pepper-chicken-partial-chicken-in-pan.jpeg';
const rice1 = '../assets/Products/black-pepper-chicken-plated-with-rice-1.jpeg';
const rice2 = '../assets/Products/black-pepper-chicken-plated-with-rice-2.jpeg';
const plated = '../assets/Products/black-pepper-chicken-plated.jpeg';
const raw = '../assets/Products/black-pepper-chicken-raw-chicken-in-pan.jpeg';
const withPeppers = '../assets/Products/black-pepper-chicken-raw-fragrant-with-peppers.jpeg';
const fragrant = '../assets/Products/black-pepper-chicken-raw-fragrant.jpeg';
const sauce = '../assets/Products/black-pepper-chicken-sauce.jpeg';
const sauted = '../assets/Products/black-pepper-chicken-sauted-fragrant.jpeg';
const cilantro = '../assets/Products/black-pepper-chicken-with-cilantro.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    CHICKEN_BREAST,
    SHALLOTS,
    GARLIC,
    GINGER,
    BLACK_PEPPER,
    OYSTER_SAUCE,
    SWEET_SOY_SAUCE,
    COLD_WATER,
    CORNSTARCH,
    VEGETABLE_OIL,
    JASMINE_RICE,
    CILANTRO,
    WHITE_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Black Pepper Chicken',
    name: 'Malaysian Black Pepper Chicken',
    img: zoomed,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 - 5 servings',
    prepTime: '45 m',
    cookTime: '20 m',
    websites: [
        { label: 'Ayam Black Pepper', link: "https://dapurmalaysia.com/resepi-ayam-black-pepper/" }
    ],
    separated: true,
    ingredients: [
        { ...SWEET_SOY_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OYSTER_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CHICKEN_BREAST, amount: '5', additionalDetails: 'cubed', section: SECTIONS.MARINADE },
        { ...VEGETABLE_OIL, amount: '3 Tbsp', additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...SHALLOTS, amount: '6', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '2 cloves', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GINGER, amount: '1 inch', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...OYSTER_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SWEET_SOY_SAUCE, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COLD_WATER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'spatula' },
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Cut the chicken into 1" cubes.', type: SECTIONS.MARINADE },
        { step: 'In a mixing bowl, combine the marinade ingredients.', type: SECTIONS.MARINADE, img: marinade },
        { step: 'Add chicken. Marinate the chicken for 30 minutes.', type: SECTIONS.MARINADE, img: marinaded },
        { step: 'Over medium-high heat, heat 1 Tbsp of oil in a wok.', type: SECTIONS.MAIN },
        { step: 'Cook the chicken in batches if needed. Cook until chicken is cooked through. Remove chicken and set aside.', type: SECTIONS.MAIN, img: [raw, partial, cooked] },
        { step: 'Add the shallots, garlic, ginger and black pepper to the wok. Cook and stir until fragrant.', type: SECTIONS.MAIN, img: [fragrant, withPeppers, sauted] },
        { step: 'Add the sauces and water. Mix until combined.', type: SECTIONS.MAIN, img: sauce },
        { step: 'In a small bowl, combine cornstarch and a little warm water. Mix then add to the wok.', type: SECTIONS.MAIN, img: cornstarch },
        { step: 'Re-add the chicken and mix until combined.', type: SECTIONS.MAIN, img: [combined] },
        { step: 'Add sugar as desired.', type: SECTIONS.MAIN },
        { step: 'Serve over rice, garnish with a few sprigs of cilantro, and enjoy a small taste of Malaysian cuisine.', type: SECTIONS.MAIN, img: [plated, rice1, rice2, cilantro] },
    ]
};