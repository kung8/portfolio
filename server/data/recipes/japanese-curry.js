const curry = '../assets/Products/japanese-curry.jpeg';
// const cubes = '../assets/Products/japanese-curry-cubes.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {} = require('./ingredients');

module.exports = {
    cardName: 'Japanese Curry',
    name: 'Japanese Curry',
    img: curry,
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.ALTERNATIVE, PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    // yields: '4 servings',
    // prepTime: '15 m',
    // cookTime: '15 - 20 m',
    separated: true,
    ingredients: [
        // { name: 'chicken breast (or pork loins)', amount: '4', additionalDetails: '', section: SECTIONS.MAIN },
        // { ...VEGETABLE_OIL, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        // { ...EGGS, amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        // { ...PANKO, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        // { ...ALL_PURPOSE_FLOUR, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        // { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        // { ...JASMINE_RICE, amount: '', additionalDetails: '', section: SECTIONS.MAIN },
        // { name: 'cabbage (optional)', amount: '1/4', additionalDetails: 'julienned', section: SECTIONS.TOPPINGS },
        // { name: 'tomato (optional)', amount: '2', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        // { name: 'lemon (optional)', amount: '', additionalDetails: 'wedges', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        // { name: 'small-based pot' },
        // { name: 'measuring cups' },
        // { name: 'measuring spoons' },
        // { name: 'cutting board(s) and knife(ves)' },
        // { name: 'small bowls (for dredging)' },
        // { name: 'long-handled tongs' },
        // { name: 'cooking thermometer' },
        // { name: 'cooling rack' },
        // { name: 'large plate' },
        // { name: 'oven mitts' },
        // { name: 'paper towels' },
    ],
    directions: [
        // { step: 'Season the chicken with salt.', type: SECTIONS.MAIN },
        // { step: 'Set up the three dredging stations in separate small bowls: (1) flour, (2) egg, and (3) panko bread crumbs.', type: SECTIONS.MAIN },
        // { step: 'First dredge the chicken in flour and shake off any excess. A good way to do this is playing pat-a-cake with it between each hand. Be sure to keep it over the flour station.', type: SECTIONS.MAIN },
        // { step: 'Dip it inside the egg bowl.', type: SECTIONS.MAIN },
        // { step: 'Finally put it inside the panko bread crumbs bowl and make sure that it is well coated.', type: SECTIONS.MAIN },
        // { step: 'Place the finished chicken on a plate that will be fried soon. Repeat the dredging process for each of the chicken breasts.', type: SECTIONS.MAIN },
        // { step: 'Heat oil in a pot over medium heat until it gets to about 350 ºF. You can use a cooking thermometer to gauge this.', type: SECTIONS.MAIN },
        // { step: 'Be careful as the oil is very hot by this point, so be sure to wear oven mitts to help protect your hands from getting burned.', type: SECTIONS.MAIN },
        // { step: 'Place the chicken breast in the hot oil, and cook for 3 - 4 minutes per side.', type: SECTIONS.MAIN },
        // { step: 'Place the finished chicken breast on a cooling rack lined with about 2 paper towel layers', type: SECTIONS.MAIN },
        // { step: 'Repeat this for each chicken breast.', type: SECTIONS.MAIN },
        // { step: 'Serve with rice and optionally with tomato, cabbage, and lemon slices (squeezed over chicken, or cabbage, or both) and enjoy this Japanese goodness!', type: SECTIONS.MAIN },
    ]
}