const boiled = '../assets/Products/potstickers-boiled.jpeg';
const covered = '../assets/Products/potstickers-covered.jpeg';
const cut = '../assets/Products/potstickers-cut-dough.jpeg';
const dough = '../assets/Products/potstickers-dough.jpeg';
const filling = '../assets/Products/potstickers-filling.jpeg';
const raw = '../assets/Products/potstickers-raw.jpeg';
const zoomed = '../assets/Products/potstickers-zoomed.jpeg';
const potstickers = '../assets/Products/potstickers.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const DIPPING_SAUCE = 'Dipping Sauce';
const ASSEMBLY = 'Assembly';

module.exports = {
    cardName: 'Potstickers',
    name: 'Potstickers',
    img: potstickers,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.PAN_FRY, METHODS.STEAM],
    protein: [PROTEIN.PORK],
    types: [TYPES.FINGER_FOOD],
    yields: '2 dozen',
    prepTime: '30 m',
    cookTime: '12 m',
    websites: [
        "https://www.allrecipes.com/recipe/261153/perfect-pot-stickers/"
    ],
    separated: false,
    ingredients: [
        { name: 'ground pork', amount: '1 lb', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'garlic', amount: '4 cloves', additionalDetails: 'minced', optional: false, section: SECTIONS.FILLING },
        { name: 'green onion', amount: '½ c', additionalDetails: 'finely diced', optional: false, section: SECTIONS.FILLING },
        { name: 'ginger', amount: '3 Tbsp', additionalDetails: 'minced', optional: false, section: SECTIONS.FILLING },
        { name: 'soy sauce', amount: '2 Tbsp + 1 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'sesame oil', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'cayenne pepper', amount: '1 pinch', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'cabbage', amount: '1 ½ c', additionalDetails: 'finely chopped', optional: false, section: SECTIONS.FILLING },
        { name: 'all-purpose flour', amount: '2 ½ c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'hot water', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'salt', amount: '¾ tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'rice vinegar', amount: '¼ c', additionalDetails: '', optional: false, section: DIPPING_SAUCE },
        { name: 'soy sauce', amount: '¼ c', additionalDetails: '', optional: false, section: DIPPING_SAUCE },
        { name: 'vegetable oil', amount: '6 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'water', amount: '8 Tbsp', additionalDetails: 'for steaming', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
    ],
    directions: [
        { step: 'Mix together all the ingredients for the filling in a mixing bowl.', type: SECTIONS.FILLING, img: filling },
        { step: 'Cover and chill for 1 hour.', type: SECTIONS.FILLING },
        { step: 'In a bowl mix together salt and flour.', type: SECTIONS.DOUGH },
        { step: 'Pour in hot water slowly.', type: SECTIONS.DOUGH },
        { step: 'Stir until dough forms.', type: SECTIONS.DOUGH },
        { step: 'Flour hands and move dough to work surface.', type: SECTIONS.DOUGH },
        { step: 'Knead until dough becomes smooth (about 3 to 5 minutes). Add up to ½ c flour as needed. ', type: SECTIONS.DOUGH },
        { step: 'Wrap dough in plastic and let it rest for 30 minutes.', type: SECTIONS.DOUGH, img: dough },
        { step: 'Use a 1/2 c measuring cup to cut the dough pieces.', type: SECTIONS.DOUGH, img: cut },
        { step: 'Flatten the dough to about 3 ½ inch discs on a lightly floured surface.', type: SECTIONS.DOUGH },
        { step: 'Repeat for the rest of the dough.', type: SECTIONS.DOUGH },
        { step: 'Lightly moisten edges with wet finger.', type: ASSEMBLY },
        { step: 'Add a scoop of filling in the center of the wrapper.', type: ASSEMBLY },
        { step: 'Fold 2 sides up and pinch together.', type: ASSEMBLY },
        { step: 'Pinch the edges to “pleat”.', type: ASSEMBLY, img: raw },
        { step: 'Lightly tap the potstickers on the surface to flatten the bottom.', type: ASSEMBLY },
        { step: 'Repeat for the remaining potstickers.', type: ASSEMBLY },
        { step: 'Mix together sauce ingredients.', type: DIPPING_SAUCE },
        { step: 'Over medium-high heat, in a pan add potstickers and water.', type: SECTIONS.MAIN, img: boiled },
        { step: 'Cover pan with a lid. Steam (about 3 minutes).', type: SECTIONS.MAIN, img: covered },
        { step: 'Uncover. Reduce heat to medium.', type: SECTIONS.MAIN },
        { step: 'Add oil and cook until bottom is golden brown (about 2 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove and set somewhere to keep warm.', type: SECTIONS.MAIN, img: zoomed },
        { step: 'Serve with dipping sauce.', type: SECTIONS.MAIN },
    ]
};