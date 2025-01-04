// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { VINE_TOMATOES, CORNSTARCH, GROUND_PORK, MEDIUM_YELLOW_ONION, GARLIC, FISH_SAUCE, SALT, WHITE_SUGAR, BLACK_PEPPER, VEGETABLE_OIL, LIGHT_SOY_SAUCE, COLD_WATER, GREEN_ONIONS } = require('./ingredients');

const FILLING_SECTION = 'Filling';
const TOMATOES_SECTION = 'Tomatoes';

module.exports = {
    wip: true,
    cardName: 'Stuffed Tomatoes',
    name: 'Vietnamese Stuffed Tomatoes',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.VIETNAMESE, GENRES.CAMBODIAN, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    yields: '3 servings',
    prepTime: '10 m',
    cookTime: '10 m',
    websites: [
        { label: 'Vietnamese Stuffed Tomatoes', link: 'https://scruffandsteph.com/2019/12/13/vietnamese-stuffed-tomatoes/' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_PORK, amount: '1/2 lb', additionalDetails: '', section: FILLING_SECTION },
        { ...MEDIUM_YELLOW_ONION, amount: '1/2', additionalDetails: 'diced', section: FILLING_SECTION },
        { ...GARLIC, amount: '2', additionalDetails: 'minced', section: FILLING_SECTION },
        { ...FISH_SAUCE, amount: '1 tsp', additionalDetails: '', section: FILLING_SECTION },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: FILLING_SECTION },
        { ...WHITE_SUGAR, amount: '1/4 tsp', additionalDetails: '', section: FILLING_SECTION },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: FILLING_SECTION },

        { ...FISH_SAUCE, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...COLD_WATER, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },

        { ...VINE_TOMATOES, amount: '6 medium', additionalDetails: 'halved', section: TOMATOES_SECTION },
        { ...CORNSTARCH, amount: '1 Tbsp', additionalDetails: '', section: TOMATOES_SECTION },

        { ...VEGETABLE_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COLD_WATER, amount: '2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },

        { ...GREEN_ONIONS, amount: '2', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'spoon' },
        { name: '2 medium bowls' },
        { name: 'frying pan' },
        { name: 'knife' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Filling" ingredients.', type: FILLING_SECTION },
        { step: 'With a spoon, cut out the tomato cores.', type: SECTIONS.SAUCE },
        { step: 'Place the cores and skins in two separate medium bowls.', type: SECTIONS.SAUCE },
        { step: 'In the medium bowl with the tomato cores, add the "Sauce" ingredients and combine. Set aside.', type: SECTIONS.SAUCE },
        { step: 'Sprinkle cornstarch in the middle of each tomato skin.', type: TOMATOES_SECTION },
        { step: 'Rub the cornstarch with your fingers.', type: TOMATOES_SECTION },
        { step: 'Tightly pack the filling into each tomato skin.', type: TOMATOES_SECTION },
        { step: 'Sprinkle a pinch of cornstarch on the top of each stuffed tomatoes.', type: TOMATOES_SECTION },
        { step: 'Over medium-high heat, heat up oil in a frying pan.', type: SECTIONS.MAIN },
        { step: 'Place the stuffed tomatoes, meat-side down, in the pan. Cook until the meat has browned but not burned (about 3 to 4 minutes).', type: SECTIONS.MAIN },
        { step: 'Flip the stuffed tomatoes. Let it cook for 2 minutes.', type: SECTIONS.MAIN },
        { step: 'Flip the stuffed tomatoes back over.', type: SECTIONS.MAIN },
        { step: 'Add the sauce. Make sure the meat is immersed in the sauce.', type: SECTIONS.MAIN },
        { step: 'Turn down the heat to medium-low heat. Let it simmer for 2 to 3 minutes.', type: SECTIONS.MAIN },
        { step: 'Take one of the stuffed tomatoes and cut into the meat to see if the meat is cooked. Continue cooking as needed.', type: SECTIONS.MAIN },
        { step: 'In a small bowl, combine the water and cornstarch.', type: SECTIONS.MAIN },
        { step: 'Add this thickening mixture to the sauce. Mix until it has incorporated into the sauce and the sauce has thickened.', type: SECTIONS.MAIN },
        { step: 'Pour sauce over the stuffed tomatoes and top with green onions. Enjoy this simple Southeast Asian cuisine with some jasmine rice.', type: SECTIONS.SERVE },
    ]
};