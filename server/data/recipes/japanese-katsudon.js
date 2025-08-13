const katsudon = '../assets/Products/katsudon.jpeg';
const drying = '../assets/Products/chicken-katsudon-drying.jpeg';
const strip = '../assets/Products/chicken-katsudon-strips.jpeg';
const onion = '../assets/Products/chicken-katsudon-onion.jpeg';
const mirin = '../assets/Products/chicken-katsudon-onion-in-mirin.jpeg';
const layered = '../assets/Products/chicken-katsudon-layered.jpeg';
const finished = '../assets/Products/chicken-katsudon-finished.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    BONELESS_PORK_CHOPS,
    SALT,
    BLACK_PEPPER,
    ALL_PURPOSE_FLOUR,
    EGG,
    PANKO_BREADCRUMBS,
    VEGETABLE_OIL,
    CHICKEN_BROTH,
    WHITE_SUGAR,
    LIGHT_SOY_SAUCE,
    MIRIN,
    YELLOW_ONION,
    JASMINE_RICE,
    GREEN_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Japanese Pork Katsudon',
    name: 'Japanese Pork Katsudon',
    img: katsudon,
    recipeAuthors: ['Sarah Leung'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK, PROTEIN.ALTERNATIVE],
    type: [TYPES.RICE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Katsudon', link: 'https://thewoksoflife.com/katsudon/' }
    ],
    ingredients: [
        { ...BONELESS_PORK_CHOPS, amount: 10, unit: '', additionalDetails: 'pounded flat', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 15, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...PANKO_BREADCRUMBS, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 10, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: 5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MIRIN, amount: 10, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 5, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'thinly sliced', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'steamed', section: SECTIONS.MAIN },
        { ...GREEN_ONION, amount: 5, unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
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
        { step: 'Set up 3 bowls for the dredging stations. One with flour, one with 5 beaten eggs, and one with panko.', section: SECTIONS.MAIN },
        { step: 'Season the pork chops with salt and pepper.', section: SECTIONS.MAIN },
        { step: 'Dust the pork chops with light coat of flour, then dip in beaten eggs, and coat with panko.', section: SECTIONS.MAIN },
        { step: 'Heat oil in a pot over medium heat until it gets to about 350 ºF. You can use a cooking thermometer to gauge this.', section: SECTIONS.MAIN },
        { step: 'Be careful as the oil is very hot by this point, so be sure to wear oven mitts to help protect your hands from getting burned.', section: SECTIONS.MAIN },
        { step: 'Place the pork chop in the hot oil, and cook for 5 - 6 minutes per side. Then flip.', section: SECTIONS.MAIN },
        { step: 'Line a baking sheet with paper towels and place a cooling rack on top.', section: SECTIONS.MAIN },
        { step: 'Place the pork chops on the cooling rack to drain any excess oil.', section: SECTIONS.MAIN, img: drying },
        { step: 'While the pork is resting, make the egg mixture and the sauce.', section: SECTIONS.MAIN },
        { step: 'In one bowl, combine the broth, sugar, soy sauce, and mirin. In another bowl, beat 10 eggs.', section: SECTIONS.MAIN },
        { step: 'For the next steps cook in batches to avoid overcrowding the pan.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, add a tablespoon of oil to a pan', section: SECTIONS.MAIN },
        { step: 'Add the onions and cook until they are slightly caramelized. Split the onions evenly between the batches.', section: SECTIONS.MAIN, img: onion },
        { step: 'Add the portioned broth mixture over the onions.', section: SECTIONS.MAIN, img: mirin },
        { step: 'Slice the katsudon into strips.', section: SECTIONS.MAIN, img: strip },
        { step: 'Place the sliced katsudon on top of the onions.', section: SECTIONS.MAIN, img: layered },
        { step: 'Drizzle some egg over the katsudon and cook until the egg is set.', section: SECTIONS.MAIN, img: finished },
        { step: 'Serve over rice and garnish with green onions.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};