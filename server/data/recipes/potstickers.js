const boiled = '../assets/Products/potstickers-boiled.jpeg';
const covered = '../assets/Products/potstickers-covered.jpeg';
const cut = '../assets/Products/potstickers-cut-dough.jpeg';
const dough = '../assets/Products/potstickers-dough.jpeg';
const filling = '../assets/Products/potstickers-filling.jpeg';
const raw = '../assets/Products/potstickers-raw.jpeg';
const zoomed = '../assets/Products/potstickers-zoomed.jpeg';
const potstickers = '../assets/Products/potstickers.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    GROUND_PORK,
    GARLIC,
    GREEN_ONIONS,
    GINGER,
    LIGHT_SOY_SAUCE,
    SESAME_OIL,
    CAYENNE_PEPPER,
    CABBAGE,
    ALL_PURPOSE_FLOUR,
    HOT_WATER,
    SALT,
    RICE_WINE_VINEGAR,
    VEGETABLE_OIL,
    WARM_WATER,
} = require('./ingredients');

const DIPPING_SAUCE = 'Dipping Sauce';
const ASSEMBLY = 'Assembly';

module.exports = {
    cardName: 'Potstickers',
    name: 'Potstickers',
    img: potstickers,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.STEAM],
    protein: [PROTEIN.PORK],
    types: [TYPES.FINGER_FOOD],
    yields: '2 dozen',
    prepTime: '30 m',
    cookTime: '12 m',
    websites: [
        { label: 'Potstickers', link: "https://www.allrecipes.com/recipe/261153/perfect-pot-stickers/" }
    ],
    separated: false,
    ingredients: [
        { ...GROUND_PORK, amount: '1 lb', additionalDetails: '', section: SECTIONS.FILLING },
        { ...GARLIC, amount: '4 cloves', additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...GREEN_ONIONS, amount: '½ c', additionalDetails: 'finely diced', section: SECTIONS.FILLING },
        { ...GINGER, amount: '3 Tbsp', additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: '2 Tbsp + 1 tsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...SESAME_OIL, amount: '1 tsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CAYENNE_PEPPER, amount: '1 pinch', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CABBAGE, amount: '1 ½ c', additionalDetails: 'finely chopped', section: SECTIONS.FILLING },
        { ...ALL_PURPOSE_FLOUR, amount: '2 ½ c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HOT_WATER, amount: '1 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: '¾ tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...RICE_WINE_VINEGAR, amount: '¼ c', additionalDetails: '', section: DIPPING_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '¼ c', additionalDetails: '', section: DIPPING_SAUCE },
        { ...VEGETABLE_OIL, amount: '6 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WARM_WATER, amount: '8 Tbsp', additionalDetails: 'for steaming', section: SECTIONS.MAIN },
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