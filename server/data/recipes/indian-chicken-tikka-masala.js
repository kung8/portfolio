const chickenPan = '../assets/Products/chicken-tikka-masala-chicken-in-pan.jpeg';
const chickenSauce1 = '../assets/Products/chicken-tikka-masala-chicken-in-sauce-1.jpeg';
const chickenSauce2 = '../assets/Products/chicken-tikka-masala-chicken-in-sauce-2.jpeg';
const cream = '../assets/Products/chicken-tikka-masala-cream.jpeg';
const curryChicken = '../assets/Products/chicken-tikka-masala-curry-chicken.jpeg';
const curryPowder = '../assets/Products/chicken-tikka-masala-curry-powder.jpeg';
const garlic = '../assets/Products/chicken-tikka-masala-garlic.jpeg';
const ghee = '../assets/Products/chicken-tikka-masala-ghee.jpeg';
const mixedSpicesVeggies = '../assets/Products/chicken-tikka-masala-mixed-spices-and-veggies.jpeg';
const mixedSpices = '../assets/Products/chicken-tikka-masala-mixed-spices.jpeg';
const sugarAdded = '../assets/Products/chicken-tikka-masala-mixed-sugar-added.jpeg';
const mixedSugar = '../assets/Products/chicken-tikka-masala-mixed-sugar.jpeg';
const mixedVeggies = '../assets/Products/chicken-tikka-masala-mixed-veggies.jpeg';
const mixed = '../assets/Products/chicken-tikka-masala-mixed.jpeg';
const oil = '../assets/Products/chicken-tikka-masala-oil.jpeg';
const cookedChickenZoomed = '../assets/Products/chicken-tikka-masala-partially-cooked-chicken-zoomed.jpeg';
const cookedChicken = '../assets/Products/chicken-tikka-masala-partially-cooked-chicken.jpeg';
const plated1 = '../assets/Products/chicken-tikka-masala-plated-1.jpeg';
const plated2 = '../assets/Products/chicken-tikka-masala-plated-2.jpeg';
const plated3 = '../assets/Products/chicken-tikka-masala-plated-3.jpeg';
const plated4 = '../assets/Products/chicken-tikka-masala-plated-4.jpeg';
const raw = '../assets/Products/chicken-tikka-masala-raw-chicken.jpeg';
const onionPan = '../assets/Products/chicken-tikka-masala-raw-onion-in-pan.jpeg';
const sauce = '../assets/Products/chicken-tikka-masala-sauce.jpeg';
const seared = '../assets/Products/chicken-tikka-masala-seared-chicken.jpeg';
const spicesAdded = '../assets/Products/chicken-tikka-masala-spices-added.jpeg';
const spices = '../assets/Products/chicken-tikka-masala-spices.jpeg';
const sugar = '../assets/Products/chicken-tikka-masala-sugar.jpeg';
const tomato = '../assets/Products/chicken-tikka-masala-tomato-sauce.jpeg';
const translucent = '../assets/Products/chicken-tikka-masala-translucent-onion.jpeg';
const zoomed1 = '../assets/Products/chicken-tikka-masala-zoomed-1.jpeg';
const zoomed2 = '../assets/Products/chicken-tikka-masala-zoomed-2.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, SECTIONS } = require("./constants");
const { GHEE, MEDIUM_YELLOW_ONION, GARLIC, CUMIN, SALT, GINGER, CAYENNE_PEPPER, CINNAMON, TURMERIC, TOMATO_SAUCE, HEAVY_CREAM, WHITE_SUGAR, PAPRIKA, VEGETABLE_OIL, BONELESS_AND_SKINLESS_CHICKEN_BREAST, CURRY_POWDER, } = require('./ingredients');

module.exports = {
    cardName: 'Chicken Tikka Masala',
    name: 'Chicken Tikka Masala',
    img: chickenSauce2,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.INDIAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.CURRY, TYPES.RICE],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '1 hr 15 m',
    separated: true,
    websites: [
        { label: 'Chicken Tikka Masala', link: "https://www.allrecipes.com/recipe/228293/curry-stand-chicken-tikka-masala-sauce" }
    ],
    ingredients: [
        { ...GHEE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...MEDIUM_YELLOW_ONION, amount: '1', additionalDetails: 'diced', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: '4', additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...CUMIN, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GINGER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CAYENNE_PEPPER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CINNAMON, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TURMERIC, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_SAUCE, amount: '14 oz', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: '1 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PAPRIKA, amount: '2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '4', additionalDetails: '1 inch pieces', section: SECTIONS.CHICKEN },
        { ...CURRY_POWDER, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'large pan' },
    ],
    directions: [
        { step: 'Over medium heat, heat ghee in a large pot.', type: SECTIONS.SAUCE, img: ghee },
        { step: 'Add onions. Cook and stir until it becomes translucent (about 5 minutes).', type: SECTIONS.SAUCE, img: [onionPan, translucent] },
        { step: 'Add garlic. Cook and stir until fragrant (about 1 minute).', type: SECTIONS.SAUCE, img: [garlic, mixedVeggies] },
        { step: 'Add cumin, salt, ginger, cayenne pepper, cinnamon, and turmeric. Cook and stir until fragrant (about 2 minutes).', type: SECTIONS.SAUCE, img: [spices, mixedSpices, spicesAdded, mixedSpicesVeggies] },
        { step: 'Add tomato sauce. Bring to a boil and reduce to low heat.', type: SECTIONS.SAUCE, img: tomato },
        { step: 'Simmer sauce for 10 minutes.', type: SECTIONS.SAUCE },
        { step: 'Add cream, sugar and paprika.', type: SECTIONS.SAUCE, img: [sugar, mixedSugar, sugarAdded, cream] },
        { step: 'Bring to a simmer and cook until sauce has thickened (about 10 to 15 minutes).', type: SECTIONS.SAUCE, img: sauce },
        { step: 'Over medium heat, heat vegetable oil in a large pan.', type: SECTIONS.MAIN, img: oil },
        { step: 'Add chicken and curry powder.', type: SECTIONS.MAIN, img: [raw, curryPowder, curryChicken] },
        { step: 'Sear chicken until lightly browned (about 3 minutes). It is fine to not be cooked all the way through.', type: SECTIONS.MAIN, img: [chickenPan, seared, cookedChicken, cookedChickenZoomed] },
        { step: 'Transfer chicken to the sauce. Simmer until sauce is cooked through (about 30 minutes).', type: SECTIONS.MAIN, img: [chickenSauce1, zoomed1, zoomed2, mixed] },
        { step: 'Add salt and sugar to taste.', type: SECTIONS.MAIN },
        { step: 'Serve with rice and naan or roti.', type: SECTIONS.MAIN, img: [plated1, plated2, plated3, plated4] },
    ]
};