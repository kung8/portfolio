const broccoli = '../assets/Products/lo-mein-broccoli.jpeg';
const beef = '../assets/Products/lo-mein-beef.jpeg';
const drained = '../assets/Products/lo-mein-drained-noodles.jpeg';
const pan = '../assets/Products/lo-mein-in-pan.jpeg';
const marinated = '../assets/Products/lo-mein-marinated-beef.jpeg';
const plated = '../assets/Products/lo-mein-plated.jpeg';
const sauce = '../assets/Products/lo-mein-sauce.jpeg';
const steamed = '../assets/Products/lo-mein-steamed-broccoli.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");

const BEEF = 'Beef';

module.exports = {
    cardName: 'Lo Mein',
    name: 'Lo Mein Noodles',
    img: plated,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE],
    yields: '8 servings',
    prepTime: '1 m',
    cookTime: '10 m',
    separated: true,
    ingredients: [
        { name: 'flank steak', amount: '1/2 lb', additionalDetails: 'sliced', section: BEEF },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', section: BEEF },
        { name: 'sugar', amount: '1/4 tsp', additionalDetails: '', section: BEEF },
        { name: 'black pepper', amount: '1/8 tsp', additionalDetails: '', section: BEEF },
        { name: 'shaoxing wine', amount: '1/2 tsp', additionalDetails: '', section: BEEF },
        { name: 'light soy sauce', amount: '1/2 tsp', additionalDetails: '', section: BEEF },
        { name: 'cornstarch', amount: '1/2 tsp', additionalDetails: '', section: BEEF },

        { name: 'sesame oil', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'light soy sauce', amount: '2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'dark soy sauce', amount: '2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'oyster sauce', amount: '2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'sugar', amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'shaoxing wine', amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { name: 'water', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },

        { name: 'lo mein noodles', amount: '1 lb', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'vegetable oil', amount: '3 Tbsp', additionalDetails: 'divided', section: SECTIONS.MAIN },
        { name: 'broccoli', amount: '1/2 lb', additionalDetails: 'cut into florets', section: SECTIONS.MAIN },
        { name: 'garlic', amount: '3 cloves', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { name: 'salt', amount: '1/4 t', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'wok' },
        { name: 'large pot' },
        { name: 'large bowl' },
    ],
    directions: [
        { step: 'Combine beef, salt, sugar, pepper, shaoxing wine, light soy sauce, and cornstarch in a large bowl. Mix with hands until beef is well-coated. Let it marinate for at least 30 minutes.', type: BEEF, img: marinated },
        { step: 'Combine sauce ingredients in a medium bowl. Mix well and set aside.', type: SECTIONS.SAUCE, img: sauce },
        { step: 'Bring a large pot of water to a boil. Add the noodles and cook until al dente. Drain and set aside.', type: SECTIONS.MAIN, img: drained },
        { step: 'Over high heat, heat 1 Tbsp of vegetable oil in a wok. Add the beef and cook until about 80% and lightly browned (about 1 minute). Remove beef from wok and set aside.', type: SECTIONS.MAIN, img: beef },
        { step: 'Add 1 Tbsp of vegetable oil to the wok. Add the broccoli and salt, and cook until lightly browned (about 30 seconds).', type: SECTIONS.MAIN, img: broccoli },
        { step: 'Add water to the wok and continue cooking until it steams (about 2 minutes). Set broccoli aside.', type: SECTIONS.MAIN, img: steamed },
        { step: 'Heat 1 Tbsp vegetable oil in the wok. Add the noodles and stir noodles until coated with oil (about 30 seconds).', type: SECTIONS.MAIN },
        { step: 'Add the sauce and stir until noodles are evenly coated (about 1 minute).', type: SECTIONS.MAIN },
        { step: 'Add the garlic, beef and broccoli and continue to cook until everything is combined (about 1 minutes). I like to add these in one at a time and mix.', type: SECTIONS.MAIN, img: pan },
        { step: 'Serve and enjoy this delicious Chinese dish!', type: SECTIONS.MAIN },
    ]
};