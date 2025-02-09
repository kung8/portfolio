// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_THIGH, SALT, BLACK_PEPPER, GINGER, GARLIC, LIGHT_SOY_SAUCE, SHAOXING_WINE, SESAME_OIL, VEGETABLE_OIL, POTATO_STARCH, ALL_PURPOSE_FLOUR, LEMON, KEWPIE_MAYONNAISE, MIRIN, EGGS, WARM_WATER } = require('./ingredients');

const ZAKU_ZAKU_BREADCRUMBS = 'Zaku Zaku Breadcrumbs';

const DEEP_FRY = 'Deep Fry';
const MARINATE_CHICKEN = 'Marinate Chicken';
const MAKE_ZAKU_ZAKU_BREADCRUMBS = 'Make Zaku Zaku Breadcrumbs';
const PREP_DEEP_FRY = 'Prep Deep Fry';
const FIRST_DEEP_FRY = 'First Deep Fry';
const SECOND_DEEP_FRY = 'Second Deep Fry';

module.exports = {
    wip: true,
    cardName: 'Karaage',
    name: 'Karaage',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '15 m',
    websites: [
        { label: 'Karaage', link: 'https://www.youtube.com/watch?feature=shared&v=COAX5gkZZ74' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: '2 lb', additionalDetails: 'cut into 2-inch pieces against the grain', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...MIRIN, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GINGER, amount: '1 tsp', additionalDetails: 'minced with juice', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: '1 tsp', additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: '1 tsp', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...EGGS, amount: '2', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...ALL_PURPOSE_FLOUR, amount: '1/3 c', additionalDetails: '', section: SECTIONS.MARINADE },

        { ...POTATO_STARCH, amount: '1 c', additionalDetails: '', section: ZAKU_ZAKU_BREADCRUMBS },
        { ...WARM_WATER, amount: '1/2 c', additionalDetails: '', section: ZAKU_ZAKU_BREADCRUMBS },

        { ...VEGETABLE_OIL, amount: '', additionalDetails: 'for frying', section: DEEP_FRY },
        { ...LEMON, amount: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...KEWPIE_MAYONNAISE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: 'wire cooling rack' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'pot' },
        { name: 'cooking thermometer' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the chicken pieces and the "Marinade" section ingredients. It should be wet.', type: MARINATE_CHICKEN },
        { step: 'Mix well and let it marinate for 2 hours.', type: MARINATE_CHICKEN },

        { step: 'Over medium heat, fill a pot with 2 to 3 inches of oil.', type: PREP_DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire cooling rack on top.', type: PREP_DEEP_FRY },

        { step: 'In another mixing bowl, add the potato starch.', type: MAKE_ZAKU_ZAKU_BREADCRUMBS },
        { step: 'Slowly add the warm water while mixing until it creates some fine crumbly pieces.', type: MAKE_ZAKU_ZAKU_BREADCRUMBS },

        { step: 'Dip the chicken pieces in the Zaku Zaku breadcrumbs. It does not have to completely stick to the chicken.', type: PREP_DEEP_FRY },

        { step: 'Once the oil gets to 325ºF, you can begin the first deep fry.', type: FIRST_DEEP_FRY },
        { step: 'Carefully place 3 to 5 pieces of chicken at a time in the oil. Avoid overcrowding the pot since it will lower the temperature of the oil and cause the chicken to soak up too much oil.', type: FIRST_DEEP_FRY },
        { step: 'Deep fry until the chicken is light golden (about 2 to 3 minutes).', type: FIRST_DEEP_FRY },
        { step: 'Once cooked, place chicken on the wire cooling rack to drain. Let these rest until the second deep fry.', type: FIRST_DEEP_FRY },
        { step: 'Continue with the rest of the chicken. Use a strainer to pick out crumbs in between each batch.', type: FIRST_DEEP_FRY },

        { step: 'Let the oil get to 360ºF, for the second deep fry.', type: SECOND_DEEP_FRY },
        { step: 'Follow the same steps for the first deep fry but only cook for 1 to 2 minutes. It should be golden brown and crispy.', type: SECOND_DEEP_FRY },

        { step: 'Serve these delicious chicken hot with lemon wedges, Kewpie mayo and any other favorite toppings.', type: SECOND_DEEP_FRY },
    ],
    notes: [
        { note: 'If the chicken is burning too quickly, either lower the heat or add a few more pieces of chicken.' },
        { note: 'A few mistakes that I made in the previous version of the recipe: (1) cut with the grain making it stringy when eating and (2) overcooked it attempting to get it a darker golden brown (there is residual heat).' },
    ]
};