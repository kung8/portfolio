const noodles1 = '../assets/Products/lo-mein-1.jpeg';
const noodles2 = '../assets/Products/lo-mein-2.jpeg';
const noodles3 = '../assets/Products/lo-mein-3.jpeg';
const noodles4 = '../assets/Products/lo-mein-4.jpeg';
const noodles5 = '../assets/Products/lo-mein-5.jpeg';
const noodles6 = '../assets/Products/lo-mein-6.jpeg';
const noodles7 = '../assets/Products/lo-mein-7.jpeg';

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
    img: noodles7,
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
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
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
        { step: `Combine beef, salt, sugar, pepper, shaoxing wine, light soy sauce, and cornstarch in a large bowl. Mix with hands until beef is well-coated. Let it marinate for at least 30 minutes.`, section: BEEF, img: noodles1 },
        { step: `Combine sauce ingredients in a medium bowl. Mix well and set aside.`, section: SECTIONS.SAUCE, img: noodles2 },
        { step: `Bring a large pot of water to a boil. Add the noodles and cook until al dente. Drain and set aside.`, section: SECTIONS.MAIN, img: noodles3 },
        { step: `Over high heat, heat 1 Tbsp of vegetable oil in a wok. Add the beef and cook until about 80% and lightly browned (about 1 minute). Remove beef from wok and set aside.`, section: SECTIONS.MAIN, img: noodles4 },
        { step: `Add 1 Tbsp of vegetable oil to the wok. Add the broccoli and salt, and cook until lightly browned (about 30 seconds).`, section: SECTIONS.MAIN },
        { step: `Add water to the wok and continue cooking until it steams (about 2 minutes). Set broccoli aside.`, section: SECTIONS.MAIN, img: noodles5 },
        { step: `Heat 1 Tbsp vegetable oil in the wok. Add the noodles and stir noodles until coated with oil (about 30 seconds).`, section: SECTIONS.MAIN },
        { step: `Add the sauce and stir until noodles are evenly coated (about 1 minute).`, section: SECTIONS.MAIN },
        { step: `Add the garlic, beef and broccoli and continue to cook until everything is combined (about 1 minutes). I like to add these in one at a time and mix.`, section: SECTIONS.MAIN, img: noodles6 },
        { step: `Serve and enjoy this delicious Chinese dish!`, section: SECTIONS.MAIN },
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