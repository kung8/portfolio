const lasagna = '../assets/Products/lasagna.jpeg';
const pan = '../assets/Products/lasagna-pan.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    ITALIAN_SAUSAGE,
    GROUND_BEEF,
    MEDIUM_YELLOW_ONION,
    GARLIC,
    CRUSHED_TOMATOES,
    TOMATO_PASTE,
    TOMATO_SAUCE,
    WARM_WATER,
    WHITE_SUGAR,
    BASIL,
    FENNEL_SEEDS,
    SALT,
    BLACK_PEPPER,
    PARSLEY,
    LASAGNA_NOODLES,
    RICOTTA_CHEESE,
    EGGS,
    MOZZARELLA_CHEESE,
    PARMESAN_CHEESE,
} = require('./ingredients');

module.exports = {
    cardName: 'Lasagna',
    name: 'Italian Lasagna',
    img: lasagna,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF, PROTEIN.PORK],
    type: [TYPES.NOODLE],
    yields: '12 servings',
    prepTime: '15 m',
    cookTime: '3 h',
    websites: [
        { label: 'Lasagna', link: 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/' }
    ],
    ingredients: [
        { ...ITALIAN_SAUSAGE, amount: '1 lb', additionalDetails: '', optional: false },
        { ...GROUND_BEEF, amount: '3/4 lb', additionalDetails: '', optional: false },
        { ...MEDIUM_YELLOW_ONION, amount: '1/2 c', additionalDetails: 'minced', optional: false },
        { ...GARLIC, amount: '2 cloves', additionalDetails: 'crushed', optional: false },
        { ...CRUSHED_TOMATOES, amount: '1-28 oz can', additionalDetails: '', optional: false },
        { ...TOMATO_PASTE, amount: '', additionalDetails: '', optional: false },
        { ...TOMATO_SAUCE, amount: '2-6.5 oz can', additionalDetails: '', optional: false },
        { ...WARM_WATER, amount: '1/2 c', additionalDetails: '', optional: false },
        { ...WHITE_SUGAR, amount: '2 Tbsp', additionalDetails: '', optional: false },
        { ...BASIL, amount: '1.5 tsp', additionalDetails: '', optional: false },
        { ...FENNEL_SEEDS, amount: '1/2 tsp', additionalDetails: '', optional: false },
        { ...SALT, amount: '1.5 tsp', additionalDetails: '', optional: false },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', optional: false },
        { ...PARSLEY, amount: '4 Tbsp', additionalDetails: '', optional: false },
        { ...LASAGNA_NOODLES, amount: '12 noodles', additionalDetails: '', optional: false },
        { ...RICOTTA_CHEESE, amount: '16 oz', additionalDetails: '', optional: false },
        { ...EGGS, amount: '1', additionalDetails: '', optional: false },
        { ...MOZZARELLA_CHEESE, amount: '3/4 lb', additionalDetails: 'sliced', optional: false },
        { ...PARMESAN_CHEESE, amount: '3/4 c', additionalDetails: 'grated', optional: false },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'spatula' },
        { name: 'pot' },
        { name: 'baking pan' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'colander' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Prep Italian sausage by peeling the casing then cut into small pieces.', type: SECTIONS.MAIN },
        { step: 'Heat the large pan over medium-high heat and place sausage inside the pan once hot (no oil needed).', type: SECTIONS.MAIN },
        { step: 'After the sausage cooks a little, add the ground beef, onions, and garlic and cook until browned.', type: SECTIONS.MAIN },
        { step: 'Mix into the pan: the crushed tomatoes, tomato sauce, tomato paste and water.', type: SECTIONS.MAIN },
        { step: 'Add the seasonings: sugar, fennel seeds, basil, 1 tsp salt, pepper, 2 Tbsp parsley.', type: SECTIONS.MAIN },
        { step: 'Let the meat sauce simmer on low heat and cover for 1.5 hours.', type: SECTIONS.MAIN },
        { step: 'While the meat sauce is simmering, mix together the ricotta cheese, egg, and remaining parsley and salt in a mixing bowl and set to the side.', type: SECTIONS.MAIN },
        { step: 'About 20 minutes before the simmering stops (or depending on how many lasagna noodles you can fit inside the pot give enough time for the number of iterations about 10 minutes per batch and an initial few minutes for the water to boil), start a pot of water and lightly salt to cook the lasagna noodles until boil.', type: SECTIONS.MAIN },
        { step: 'Add the noodles to the pot and cook for about 8 - 10 minutes (make sure the noodles are submerged).', type: SECTIONS.MAIN },
        { step: 'Drain and rinse noodles with cold water. Repeat this process per batch if needed. Note: you may reuse the same boiling water but you may need to add some more water.', type: SECTIONS.MAIN },
        { step: 'Preheat oven to 375ºF.', type: SECTIONS.MAIN },
        { step: 'Once the meat sauce and noodles are ready, it\'s time to layer the lasagna in a baking pan.', type: SECTIONS.MAIN },
        { step: 'Using a 1/2 cup measuring cup, spread 1 1/2 cup of meat sauce in baking pan.', type: SECTIONS.MAIN },
        { step: 'Layer with 6 noodles length-wise over the meat sauce.', type: SECTIONS.MAIN },
        { step: 'Add half of the ricotta cheese mix over the noodles.', type: SECTIONS.MAIN },
        { step: 'Layer with a few slices of mozzarella.', type: SECTIONS.MAIN },
        { step: 'Add again 1 1/2 cup of meat sauce.', type: SECTIONS.MAIN },
        { step: 'Add 1/4 cup of Parmesan cheese.', type: SECTIONS.MAIN },
        { step: 'Layer with remaining noodles, mozzarella, and Parmesan cheese (in that order).', type: SECTIONS.MAIN },
        { step: 'Cover this with tin foil (trying not to let the cheese touch the cheese).', type: SECTIONS.MAIN },
        { step: 'Bake for 25 minutes.', type: SECTIONS.MAIN },
        { step: 'Remove the foil, and bake for another 25 minutes.', type: SECTIONS.MAIN },
        { step: 'Let cool for at least 15 minutes.', type: SECTIONS.MAIN },
        { step: 'Serve and enjoy this splash of Italian goodness.', type: SECTIONS.MAIN, img: pan },
    ]
};