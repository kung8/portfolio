const eighty = '../assets/Products/broccoli-beef-80-percent.jpeg';
const addedBeef = '../assets/Products/broccoli-beef-added-beef-and-broccoli.jpeg';
const bath = '../assets/Products/broccoli-beef-broccoli-bath.jpeg';
const blanching = '../assets/Products/broccoli-beef-blanching-broccoli.jpeg';
const saucey = '../assets/Products/broccoli-beef-cooked-with-lots-of-sauce.jpeg';
const cookedZoomed = '../assets/Products/broccoli-beef-cooked-zoomed.jpeg';
const cookingBeef = '../assets/Products/broccoli-beef-cooking-beef.jpeg';
const garlic = '../assets/Products/broccoli-beef-garlic-ginger.jpeg';
const marinating = '../assets/Products/broccoli-beef-marinating-beef.jpeg';
const partialBeef = '../assets/Products/broccoli-beef-partial-cooked-beef.jpeg';
const plated = '../assets/Products/broccoli-beef-plated.jpeg';
const rawBroccoli = '../assets/Products/broccoli-beef-raw-broccoli.jpeg';
const thickened = '../assets/Products/broccoli-beef-sauce-thickened.jpeg';
const sauce = '../assets/Products/broccoli-beef-sauce.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const BEEF = 'Beef';
const BROCCOLI = 'Broccoli';

module.exports = {
    cardName: 'Broccoli Beef',
    name: 'Chinese Broccoli Beef',
    recipeCredit: 'Leah Cohen',
    img: cookedZoomed,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY, METHODS.BLANCH],
    protein: [PROTEIN.BEEF],
    type: [TYPES.STIR_FRY],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '30 m',
    websites: [],
    separated: true,
    ingredients: [
        { name: 'beef', amount: '1 lb', additionalDetails: 'sliced', optional: false, section: BEEF },
        { name: 'water', amount: '3 Tbsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'shaoxing', amount: '2 Tbsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'cornstarch', amount: '3 Tbsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'baking soda', amount: '1/2 tsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'vegetable oil', amount: '2 Tbsp', additionalDetails: '', optional: false, section: BEEF },
        { name: 'light soy sauce', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'water', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'sugar', amount: '3 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'cornstarch', amount: '1 1/2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'sesame oil', amount: '1 1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'broccoli', amount: '2 heads of', additionalDetails: 'cut into florets', optional: false, section: SECTIONS.MAIN },
        { name: 'ginger', amount: '1 1/2 Tbsp', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic', amount: '1 1/2 Tbsp', additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { name: 'vegetable oil', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'sesame seeds', amount: '', additionalDetails: 'optional', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'large pot' },
        { name: '2 large bowls' },
    ],
    directions: [
        { step: 'In a large bowl, combine the beef marinade ingredients. Let it marinate for 30 minutes.', type: BEEF, img: marinating },
        { step: 'In a medium bowl, combine the sauce ingredients and set aside.', type: SECTIONS.SAUCE, img: sauce },
        { step: 'In a large pot, boil water.', type: BROCCOLI, img: rawBroccoli },
        { step: 'Add broccoli to the boiling water.', type: BROCCOLI, img: blanching },
        { step: 'Transfer to ice bath after 3 or 4 minutes.', type: BROCCOLI, img: bath },
        { step: 'Over medium-high heat, heat up a wok and add beef.', type: SECTIONS.MAIN, img: cookingBeef },
        { step: 'Cook beef just until cooked about 80% of the way.', type: SECTIONS.MAIN, img: partialBeef },
        { step: 'Remove beef from the wok.', type: SECTIONS.MAIN, img: eighty },
        { step: 'Add oil.', type: SECTIONS.MAIN },
        { step: 'Add the garlic and ginger. Saute.', type: SECTIONS.MAIN, img: garlic },
        { step: 'Add sauce. Cook until it thickens.', type: SECTIONS.MAIN, img: thickened },
        { step: 'Add the beef and broccoli. Combine.', type: SECTIONS.MAIN, img: addedBeef },
        { step: 'Cook until beef is cooked through.', type: SECTIONS.MAIN, img: saucey },
        { step: 'Top with sesame seeds and serve with steamed rice.', type: SECTIONS.SERVE, img: plated },
    ]
};