const broccoli = '../assets/Products/lo-mein-broccoli.jpeg';
const beef = '../assets/Products/lo-mein-beef.jpeg';
const drained = '../assets/Products/lo-mein-drained-noodles.jpeg';
const pan = '../assets/Products/lo-mein-in-pan.jpeg';
const marinated = '../assets/Products/lo-mein-marinated-beef.jpeg';
const plated1 = '../assets/Products/lo-mein-plated-1.jpeg';
const plated2 = '../assets/Products/lo-mein-plated-2.jpeg';
const plated3 = '../assets/Products/lo-mein-plated-3.jpeg';
const sauce = '../assets/Products/lo-mein-sauce.jpeg';
const steamed = '../assets/Products/lo-mein-steamed-broccoli.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    FLANK_STEAK,
    SALT,
    WHITE_SUGAR,
    BLACK_PEPPER,
    SHAOXING_WINE,
    LIGHT_SOY_SAUCE,
    CORNSTARCH,
    SESAME_OIL,
    DARK_SOY_SAUCE,
    OYSTER_SAUCE,
    WARM_WATER,
    LO_MEIN_NOODLES,
    VEGETABLE_OIL,
    BROCCOLI,
    GARLIC,
} = require('./ingredients');

const BEEF = 'Beef';

module.exports = {
    cardName: 'Lo Mein Noodles',
    name: 'Lo Mein Noodles',
    img: plated2,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...FLANK_STEAK, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: BEEF },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF },
        { ...BLACK_PEPPER, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF },
        { ...SHAOXING_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF },
        { ...CORNSTARCH, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF },

        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DARK_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SHAOXING_WINE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WARM_WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...LO_MEIN_NOODLES, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...BROCCOLI, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into florets', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Serve and enjoy this delicious Chinese dish!', type: SECTIONS.MAIN, img: [plated1, plated3] },
    ]
};