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
const { ALLERGIES, CATEGORIES, DIET, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require("./constants");
const {
    BLACK_PEPPER,
    BROCCOLI,
    CORNSTARCH,
    DARK_SOY_SAUCE,
    FLANK_STEAK,
    GARLIC,
    LARGE_BOWL,
    LARGE_POT,
    LIGHT_SOY_SAUCE,
    LO_MEIN_NOODLES,
    MEDIUM_BOWL,
    OYSTER_SAUCE,
    SALT,
    SESAME_OIL,
    SHAOXING_WINE,
    STOVE,
    VEGETABLE_OIL,
    WATER,
    WHITE_SUGAR,
    WOK,
} = require('./ingredients');

const BEEF = 'Beef';

module.exports = {
    cardName: 'Lo Mein Noodles',
    name: 'Lo Mein Noodles',
    img: plated2,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
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
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.SAUCE },

        { ...LO_MEIN_NOODLES, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...BROCCOLI, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into florets', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MEDIUM_BOWL,
        WOK,
        LARGE_POT,
        LARGE_BOWL,
    ],
    directions: [
        { step: 'Combine beef, salt, sugar, pepper, shaoxing wine, light soy sauce, and cornstarch in a large bowl. Mix with hands until beef is well-coated. Let it marinate for at least 30 minutes.', section: BEEF, img: marinated },
        { step: 'Combine sauce ingredients in a medium bowl. Mix well and set aside.', section: SECTIONS.SAUCE, img: sauce },
        { step: 'Bring a large pot of water to a boil. Add the noodles and cook until al dente. Drain and set aside.', section: SECTIONS.MAIN, img: drained },
        { step: 'Over high heat, heat 1 Tbsp of vegetable oil in a wok. Add the beef and cook until about 80% and lightly browned (about 1 minute). Remove beef from wok and set aside.', section: SECTIONS.MAIN, img: beef },
        { step: 'Add 1 Tbsp of vegetable oil to the wok. Add the broccoli and salt, and cook until lightly browned (about 30 seconds).', section: SECTIONS.MAIN, img: broccoli },
        { step: 'Add water to the wok and continue cooking until it steams (about 2 minutes). Set broccoli aside.', section: SECTIONS.MAIN, img: steamed },
        { step: 'Heat 1 Tbsp vegetable oil in the wok. Add the noodles and stir noodles until coated with oil (about 30 seconds).', section: SECTIONS.MAIN },
        { step: 'Add the sauce and stir until noodles are evenly coated (about 1 minute).', section: SECTIONS.MAIN },
        { step: 'Add the garlic, beef and broccoli and continue to cook until everything is combined (about 1 minutes). I like to add these in one at a time and mix.', section: SECTIONS.MAIN, img: pan },
        { step: 'Serve and enjoy this delicious Chinese dish!', section: SECTIONS.MAIN, img: [plated1, plated3] },
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
    mealPrep: true,
};