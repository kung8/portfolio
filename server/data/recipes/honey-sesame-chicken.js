const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, EGGS, SALT, BLACK_PEPPER, ALL_PURPOSE_FLOUR, CORNSTARCH, VEGETABLE_OIL, GARLIC, HONEY, LIGHT_SOY_SAUCE, KETCHUP, BROWN_SUGAR, RICE_WINE_VINEGAR, SESAME_OIL, GREEN_ONIONS, SESAME_SEEDS } = require('./ingredients');

const DEEP_FRY = 'Deep Fry';
const EGG_DREDGE = 'Egg Dredge';
const FLOUR_DREDGE = 'Flour Dredge';
const HONEY_SESAME_SAUCE = 'Honey Sesame Sauce';

module.exports = {
    wip: true,
    cardName: 'Honey Sesame Chicken',
    name: 'Honey Sesame Chicken',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SIDE_DISH, TYPES.MAIN_COURSE],
    yields: '6 servings',
    prepTime: '20 m',
    cookTime: '20 m',
    websites: [
        { label: 'Honey Sesame Chicken', link: 'https://www.dinneratthezoo.com/lighter-honey-sesame-chicken/' }
    ],
    separated: true,
    ingredients: [
        { ...EGGS, amount: '2', additionalDetails: 'beaten', section: EGG_DREDGE },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: EGG_DREDGE },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: EGG_DREDGE },
        
        { ...ALL_PURPOSE_FLOUR, amount: '1/2 c', additionalDetails: '', section: FLOUR_DREDGE },
        { ...CORNSTARCH, amount: '1/2 c', additionalDetails: '', section: FLOUR_DREDGE },

        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '1 1/2 lb', additionalDetails: 'cut into 1 inch pieces', section: DEEP_FRY },
        { ...VEGETABLE_OIL, amount: '', additionalDetails: 'for frying', section: DEEP_FRY },
        
        { ...HONEY, amount: '1/4 c', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '1/4 c', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...KETCHUP, amount: '2 Tbsp', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...BROWN_SUGAR, amount: '3 Tbsp', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: '2 Tbsp', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...SESAME_OIL, amount: '1 Tbsp', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...CORNSTARCH, amount: '2 tsp', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...VEGETABLE_OIL, amount: '1 tsp', additionalDetails: '', section: HONEY_SESAME_SAUCE },
        { ...GARLIC, amount: '1 tsp', additionalDetails: '', section: HONEY_SESAME_SAUCE },

        { ...SESAME_SEEDS, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONIONS, amount: '2 Tbsp', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'shallow dish' },
        { name: 'plate' },
        { name: 'narrow pot' },
        { name: 'wire rack' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'cooking thermometer' },
        { name: 'spider strainer' },
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'In a medium bowl, combine the "Egg Dredge" ingredients.', type: EGG_DREDGE },
        { step: 'In a shallow dish, combine the "Flour Dredge" ingredients.', type: FLOUR_DREDGE },
        { step: 'Over medium-high heat, fill a pot with 3 inches of oil.', type: DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire cooling rack on top.', type: DEEP_FRY },
        { step: 'Dip the chicken into the egg dredge and then into the flour.', type: DEEP_FRY },
        { step: 'Place these coated chicken pieces onto a plate.', type: DEEP_FRY },
        { step: 'Once the oil has reached 350ºF, you can begin to deep dry the chicken.', type: DEEP_FRY },
        { step: 'Carefully add the chicken in small batches to the oil. Cook until the chicken gets crispy and golden brown (about 5 minutes).', type: DEEP_FRY },
        { step: 'Using a spider strainer, remove the cooked chicken and set them on the wire rack to drain.', type: DEEP_FRY },
        { step: 'Repeat until all the chicken is cooked.', type: DEEP_FRY },
        { step: 'In a medium bowl, combine all the "Honey Sesame Sauce" ingredients (except the vegetable oil and garlic).', type: HONEY_SESAME_SAUCE },
        { step: 'Over medium-high heat, heat the oil in a saucepan.', type: HONEY_SESAME_SAUCE },
        { step: 'Add the garlic and cook until fragrant (about 30 seconds).', type: HONEY_SESAME_SAUCE },
        { step: 'Add the sauce mixture and bring to a simmer.', type: HONEY_SESAME_SAUCE },
        { step: 'Cook until it starts to thicken (about 3 to 4 minutes).', type: HONEY_SESAME_SAUCE },
        { step: 'Add the crispy chicken and stir until everything is coated in the sauce.', type: HONEY_SESAME_SAUCE },
        { step: 'Serve this dish with jasmine rice and top with your favorite toppings.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Do not try to fry too early or it will take longer to cook and will just soak oil.' },
        { note: 'Avoid overcrowding the chicken by working in batches.' }
    ]
};