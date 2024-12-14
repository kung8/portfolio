// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_THIGH, SALT, BLACK_PEPPER, GINGER, GARLIC, LIGHT_SOY_SAUCE, SHAOXING_WINE, SESAME_OIL, VEGETABLE_OIL, POTATO_STARCH, ALL_PURPOSE_FLOUR, LEMON, KEWPIE_MAYONNAISE } = require('./ingredients');

const DEEP_FRY = 'Deep Fry';
const PREP_CHICKEN = 'Prep Chicken';
const PREP_DEEP_FRY = 'Prep Deep Fry';

module.exports = {
    wip: true,
    cardName: 'Karaage',
    name: 'Karaage',
    img: '',
    recipeCredit: '',
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
        { label: 'Karaage', link: 'https://www.justonecookbook.com/karaage/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: '1 1/2 lb', additionalDetails: 'cut into 2-inch pieces', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },

        { ...GINGER, amount: '1/2 tsp', additionalDetails: 'minced with juice', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: '1 clove', additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: '1/2 Tbsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SHAOXING_WINE, amount: '1/2 Tbsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SESAME_OIL, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MARINADE },

        { ...VEGETABLE_OIL, amount: '', additionalDetails: 'for frying', section: DEEP_FRY },
        { ...POTATO_STARCH, amount: '2 Tbsp', additionalDetails: '', section: DEEP_FRY },
        { ...ALL_PURPOSE_FLOUR, amount: '2 Tbsp', additionalDetails: '', section: DEEP_FRY },

        { ...LEMON, amount: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...KEWPIE_MAYONNAISE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: '2 shallow dishes' },
        { name: 'wire cooling rack' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'pot' },
        { name: 'cooking thermometer' },
    ],
    directions: [
        { step: 'Season the chicken pieces with salt and pepper.', type: PREP_CHICKEN },
        { step: 'In a large bowl, combine the ginger and garlic.', type: PREP_CHICKEN },
        { step: 'Add the ret of the marinade ingredients.', type: PREP_CHICKEN },
        { step: 'Add the chicken and mix. Let it marinate for 30 minutes.', type: PREP_CHICKEN },

        { step: 'Over medium heat, fill a pot with 2 to 3 inches of oil.', type: PREP_DEEP_FRY },
        { step: 'Line a baking sheet with paper towels and place a wire cooling rack on top.', type: PREP_DEEP_FRY },
        { step: 'Prep two different shallow dishes: one with flour and one with potato starch.', type: '' },
        { step: 'Dip chicken pieces in flour and shake off excess flour.', type: PREP_DEEP_FRY },
        { step: 'Dip chicken pieces in potato starch and shake off excess potato starch.', type: PREP_DEEP_FRY },

        { step: 'Once the oil gets to 325ºF, you can begin the first deep fry.', type: DEEP_FRY },
        { step: 'Carefully place 3 to 5 pieces of chicken at a time in the oil. Avoid overcrowding the pot since it will lower the temperature of the oil and cause the chicken to soak up too much oil.', type: DEEP_FRY },
        { step: 'Deep fry until the chicken is light golden (about 90 seconds).', type: DEEP_FRY },
        { step: 'Once cooked, place chicken on the wire cooling rack to drain. Let these rest until the second deep fry.', type: DEEP_FRY },
        { step: 'Continue with the rest of the chicken. Use a strainer to pick out crumbs in between each batch.', type: DEEP_FRY },

        { step: 'Let the oil get to 350ºF, for the second deep fry.', type: DEEP_FRY },
        { step: 'Follow the same steps for the first deep fry but only cook for 45 seconds. It should be golden brown and crispy.', type: DEEP_FRY },

        { step: 'Serve these delicious chicken hot with lemon wedges, Kewpie mayo and ', type: DEEP_FRY },
    ],
    notes: [
        { note: 'If the chicken is burning too quickly, either lower the heat or add a few more pieces of chicken.' }
    ]
};