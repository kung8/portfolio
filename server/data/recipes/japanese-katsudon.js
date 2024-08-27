const katsudon = '../assets/Products/katsudon.jpeg';
const drying = '../assets/Products/chicken-katsudon-drying.jpeg';
const strip = '../assets/Products/chicken-katsudon-strips.jpeg';
const onion = '../assets/Products/chicken-katsudon-onion.jpeg';
const mirin = '../assets/Products/chicken-katsudon-onion-in-mirin.jpeg';
const layered = '../assets/Products/chicken-katsudon-layered.jpeg';
const finished = '../assets/Products/chicken-katsudon-finished.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    BONELESS_PORK_CHOPS,
    SALT,
    BLACK_PEPPER,
    ALL_PURPOSE_FLOUR,
    EGGS,
    PANKO_BREADCRUMBS,
    VEGETABLE_OIL,
    CHICKEN_BROTH,
    WHITE_SUGAR,
    LIGHT_SOY_SAUCE,
    MIRIN,
    MEDIUM_YELLOW_ONION,
    JASMINE_RICE,
    GREEN_ONIONS,
} = require('./ingredients');

module.exports = {
    cardName: 'Japanese Pork Katsudon',
    name: 'Japanese Pork Katsudon',
    img: katsudon,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK, PROTEIN.ALTERNATIVE],
    type: [TYPES.RICE],
    yields: '10 servings',
    prepTime: '20 m',
    cookTime: '20 m',
    separated: true,
    websites: [
        'https://thewoksoflife.com/katsudon/'
    ],
    ingredients: [
        { ...BONELESS_PORK_CHOPS, amount: '10', additionalDetails: 'pounded flat', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: '2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '15', additionalDetails: '', section: SECTIONS.MAIN },
        { ...PANKO_BREADCRUMBS, amount: '5 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: '', additionalDetails: 'for frying', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: '2 1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '10 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: '5 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MIRIN, amount: '10 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MEDIUM_YELLOW_ONION, amount: '5', additionalDetails: 'thinly sliced', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '5 c', additionalDetails: 'steamed', section: SECTIONS.MAIN },
        { ...GREEN_ONIONS, amount: '5', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'deep pot' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
        { name: 'baking sheet' },
        { name: '5 medium bowls' },
        { name: 'pan' },
    ],
    directions: [
        { step: 'Set up 3 bowls for the dredging stations. One with flour, one with 5 beaten eggs, and one with panko.', type: SECTIONS.MAIN },
        { step: 'Season the pork chops with salt and pepper.', type: SECTIONS.MAIN },
        { step: 'Dust the pork chops with light coat of flour, then dip in beaten eggs, and coat with panko.', type: SECTIONS.MAIN },
        { step: 'Heat oil in a pot over medium heat until it gets to about 350 ºF. You can use a cooking thermometer to gauge this.', type: SECTIONS.MAIN },
        { step: 'Be careful as the oil is very hot by this point, so be sure to wear oven mitts to help protect your hands from getting burned.', type: SECTIONS.MAIN },
        { step: 'Place the pork chop in the hot oil, and cook for 5 - 6 minutes per side. Then flip.', type: SECTIONS.MAIN },
        { step: 'Line a baking sheet with paper towels and place a cooling rack on top.', type: SECTIONS.MAIN },
        { step: 'Place the pork chops on the cooling rack to drain any excess oil.', type: SECTIONS.MAIN, img: drying },
        { step: 'While the pork is resting, make the egg mixture and the sauce.', type: SECTIONS.MAIN },
        { step: 'In one bowl, combine the broth, sugar, soy sauce, and mirin. In another bowl, beat 10 eggs.', type: SECTIONS.MAIN },
        { step: 'For the next steps cook in batches to avoid overcrowding the pan.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, add a tablespoon of oil to a pan', type: SECTIONS.MAIN },
        { step: 'Add the onions and cook until they are slightly caramelized. Split the onions evenly between the batches.', type: SECTIONS.MAIN, img: onion },
        { step: 'Add the portioned broth mixture over the onions.', type: SECTIONS.MAIN, img: mirin },
        { step: 'Slice the katsudon into strips.', type: SECTIONS.MAIN, img: strip },
        { step: 'Place the sliced katsudon on top of the onions.', type: SECTIONS.MAIN, img: layered },
        { step: 'Drizzle some egg over the katsudon and cook until the egg is set.', type: SECTIONS.MAIN, img: finished },
        { step: 'Serve over rice and garnish with green onions.', type: SECTIONS.MAIN },
    ]
};