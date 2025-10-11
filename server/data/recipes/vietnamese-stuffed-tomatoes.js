const tomatoes1 = '../assets/Products/vietnamese-stuffed-tomatoes-1.jpeg';
const tomatoes2 = '../assets/Products/vietnamese-stuffed-tomatoes-2.jpeg';
const tomatoes3 = '../assets/Products/vietnamese-stuffed-tomatoes-3.jpeg';
const tomatoes4 = '../assets/Products/vietnamese-stuffed-tomatoes-4.jpeg';
const tomatoes5 = '../assets/Products/vietnamese-stuffed-tomatoes-5.jpeg';
const tomatoes6 = '../assets/Products/vietnamese-stuffed-tomatoes-6.jpeg';
const tomatoes7 = '../assets/Products/vietnamese-stuffed-tomatoes-7.jpeg';
const tomatoes8 = '../assets/Products/vietnamese-stuffed-tomatoes-8.jpeg';
const tomatoes9 = '../assets/Products/vietnamese-stuffed-tomatoes-9.jpeg';
const tomatoes10 = '../assets/Products/vietnamese-stuffed-tomatoes-10.jpeg';
const tomatoes11 = '../assets/Products/vietnamese-stuffed-tomatoes-11.jpeg';
const tomatoes12 = '../assets/Products/vietnamese-stuffed-tomatoes-12.jpeg';
const tomatoes13 = '../assets/Products/vietnamese-stuffed-tomatoes-13.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CORNSTARCH, FISH_SAUCE, FRYING_PAN, GARLIC, GREEN_ONION, GROUND_PORK, KNIFE, LIGHT_SOY_SAUCE, MEDIUM_BOWL, MIXING_BOWL, SALT, SMALL_BOWL, SPOON, STOVE, VEGETABLE_OIL, VINE_TOMATO, WATER, WHITE_SUGAR, YELLOW_ONION } = require('./ingredients');

const TOMATOES_SECTION = 'Tomatoes';

module.exports = {
    cardName: 'Stuffed Tomatoes',
    name: 'Vietnamese Stuffed Tomatoes',
    img: tomatoes13,
    recipeAuthors: ['Scruff', 'Steph'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.VIETNAMESE, GENRES.CAMBODIAN, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Vietnamese Stuffed Tomatoes', link: 'https://scruffandsteph.com/2019/12/13/vietnamese-stuffed-tomatoes/' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_PORK, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 2, unit: '', additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.FILLING },

        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold', section: SECTIONS.SAUCE },

        { ...VINE_TOMATO, amount: 6, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'halved', section: TOMATOES_SECTION },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TOMATOES_SECTION },

        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },

        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        SPOON,
        { ...MEDIUM_BOWL, amount: 2 },
        FRYING_PAN,
        KNIFE,
        SMALL_BOWL,
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Filling" ingredients.', section: SECTIONS.FILLING, img: tomatoes3 },
        { step: 'Halve the tomatoes. With a spoon, cut out the tomato cores.', section: SECTIONS.SAUCE, img: tomatoes1 },
        { step: 'Place the cores and skins in two separate medium bowls.', section: SECTIONS.SAUCE, img: tomatoes2 },
        { step: 'In the medium bowl with the tomato cores, add the "Sauce" ingredients and combine. Set aside.', section: SECTIONS.SAUCE },
        { step: 'Sprinkle cornstarch in the middle of each tomato skin.', section: TOMATOES_SECTION },
        { step: 'Rub the cornstarch with your fingers.', section: TOMATOES_SECTION, img: tomatoes4 },
        { step: 'Tightly pack the filling into each tomato skin.', section: TOMATOES_SECTION, img: tomatoes5 },
        { step: 'Sprinkle a pinch of cornstarch on the top of each stuffed tomatoes.', section: TOMATOES_SECTION },
        { step: 'Over medium-high heat, heat up oil in a frying pan.', section: SECTIONS.MAIN },
        { step: 'Place the stuffed tomatoes, meat-side down, in the pan. Cook until the meat has browned but not burned (about 3 to 4 minutes).', section: SECTIONS.MAIN, img: tomatoes6 },
        { step: 'Flip the stuffed tomatoes. Let it cook for 2 minutes.', section: SECTIONS.MAIN, img: tomatoes7 },
        { step: 'Flip the stuffed tomatoes back over.', section: SECTIONS.MAIN, img: tomatoes8 },
        { step: 'Add the sauce. Make sure the meat is submerged in the sauce.', section: SECTIONS.MAIN, img: tomatoes9 },
        { step: 'Turn down the heat to medium-low heat. Let it simmer for 2 to 3 minutes.', section: SECTIONS.MAIN },
        { step: 'Take one of the stuffed tomatoes and cut into the meat to see if the meat is cooked. Continue cooking as needed.', section: SECTIONS.MAIN },
        { step: 'In a small bowl, combine the water and cornstarch.', section: SECTIONS.MAIN, img: tomatoes10 },
        { step: 'Add this thickening mixture to the sauce. Mix until it has incorporated into the sauce and the sauce has thickened.', section: SECTIONS.MAIN, img: tomatoes11 },
        { step: 'Pour sauce over the stuffed tomatoes and top with green onions. Enjoy this simple Southeast Asian cuisine with some jasmine rice.', section: SECTIONS.SERVE, img: tomatoes12 },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 5 to 10 minutes).',
        },
    ],
    mealPrep: true,
};