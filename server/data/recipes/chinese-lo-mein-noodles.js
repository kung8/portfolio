const loMein = '../assets/Products/lo-mein-noodles.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'Lo Mein',
    name: 'Lo Mein Noodles',
    img: loMein,
    available: true,
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
        { name: 'flank steak', amount: '1/2 lb', additionalDetails: 'sliced', optional: false, section: SECTIONS.MARINADE },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'sugar', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'black pepper', amount: '1/8 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'shaoxing wine', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'light soy sauce', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'cornstarch', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },

        { name: 'sesame oil', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'light soy sauce', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'dark soy sauce', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'oyster sauce', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'sugar', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'shaoxing wine', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'water', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },

        { name: 'lo mein noodles', amount: '1 lb', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'vegetable oil', amount: '4 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'broccoli', amount: '1/2 lb', additionalDetails: 'cut into florets', optional: false, section: SECTIONS.MAIN },
        { name: 'garlic', amount: '3 medium cloves', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
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
        { step: 'Combine beef, salt, sugar, pepper, shaoxing wine (1/2 t), light soy sauce (1/2 t), and cornstarch in a medium bowl. Mix with hands until beef is well-coated. Let it marinate for at least 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Combine sesame oil, light soy sauce (2 t), dark soy sauce, oyster sauce, salt, sugar, shaoxing wine (1 t), and water in a small bowl. Mix well and set aside. This is the sauce.', type: SECTIONS.MAIN },
        { step: 'Bring a large pot of water to a boil. Add the noodles and cook until al dente. Drain and set aside.', type: SECTIONS.MAIN },
        { step: 'Over high heat, heat 2 Tbsp of vegetable oil in a wok. Add the beef and cook until lightly browned (about 1 minute). Remove beef from wok and set aside.', type: SECTIONS.MAIN },
        { step: 'Add 2 Tbsp of vegetable oil to the wok. Add the broccoli and a couple of pinches of salt, and cook until lightly browned (about 30 seconds).', type: SECTIONS.MAIN },
        { step: 'Add water to the wok and continue cooking until it steams (about 2 minutes). Transfer broccoli to bowl with beef.', type: SECTIONS.MAIN },
        { step: 'Heat the last Tbsp of vegetable oil in the wok. Add the noodles and stir noodles until coated with oil (about 30 seconds).', type: SECTIONS.MAIN },
        { step: 'Add the sauce and stir until noodles are evenly coated (about 1 minute).', type: SECTIONS.MAIN },
        { step: 'Add the garlic, beef and broccoli and continue to cook until everything is combined (about 1 minutes).', type: SECTIONS.MAIN },
        { step: 'Serve and enjoy this delicious Chinese dish!', type: SECTIONS.MAIN },
    ]
};