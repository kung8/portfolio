const marinating = '../assets/Products/korean-fried-chicken-marinating.jpeg';
const dredging = '../assets/Products/korean-fried-chicken-dredging-station.jpeg';
const oil = '../assets/Products/korean-fried-chicken-frying-in-oil.jpeg';
const fullSet = '../assets/Products/korean-fried-chicken-full-set.jpeg';
const drip = '../assets/Products/korean-fried-chicken-oil-drip-station.jpeg';
const sauce = '../assets/Products/korean-fried-chicken-raw-sauce.jpeg';
const rice = '../assets/Products/korean-fried-chicken-with-rice.jpeg';
const chicken = '../assets/Products/korean-fried-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    BAKING_POWDER,
    CHICKEN_THIGH,
    CORNSTARCH,
    GARLIC,
    GINGER,
    GOCHUJANG_SAUCE,
    HOISIN_SAUCE,
    HONEY,
    KETCHUP,
    LIGHT_SOY_SAUCE,
    MIRIN,
    RICE_WINE_VINEGAR,
    SALT,
    SESAME_OIL,
    STRAWBERRY_JAM,
    THAI_CHILI_PEPPERS,
    VEGETABLE_OIL,
    WARM_WATER,
    WHITE_SUGAR
} = require('./ingredients');

const SWEET_AND_TANGY_SAUCE = 'Sweet and Tangy Sauce';
const SWEET_AND_SPICY_SAUCE = 'Sweet and Spicy Sauce';

module.exports = {
    cardName: 'Korean Fried Chicken',
    name: 'Korean Fried Chicken',
    img: chicken,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.KOREAN, GENRES.ASIAN],
    method: [METHODS.MARINADE, METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '5-6 servings',
    prepTime: '20 m',
    cookTime: '20 m',
    separated: true,
    websites: [
        { label: 'Korean Fried Chicken', link: 'https://www.koreanbapsang.com/yangnyeom-chicken-korean-fried-chicken/' }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: '3 lb', additionalDetails: 'cut into 2 - 2.5" pieces', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: '3 cloves', additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...GINGER, amount: '1/2 tsp', additionalDetails: 'grated', section: SECTIONS.MARINADE },
        { ...SALT, amount: '2 tsp', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...MIRIN, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MARINADE },

        { ...VEGETABLE_OIL, amount: '', additionalDetails: 'for frying', section: SECTIONS.MAIN },

        { ...ALL_PURPOSE_FLOUR, amount: '2 c', additionalDetails: '', section: SECTIONS.DRY_RUB },
        { ...BAKING_POWDER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.DRY_RUB },

        { ...WARM_WATER, amount: '2 1/2 c', additionalDetails: '', section: SECTIONS.WET_RUB },
        { ...CORNSTARCH, amount: '1 1/4 c', additionalDetails: '', section: SECTIONS.WET_RUB },
        { ...ALL_PURPOSE_FLOUR, amount: '1 1/4 c', additionalDetails: '', section: SECTIONS.WET_RUB },
        { ...BAKING_POWDER, amount: '1 tsp', additionalDetails: '', section: SECTIONS.WET_RUB },
        { ...CORNSTARCH, amount: '2 c', additionalDetails: '', section: SECTIONS.WET_RUB },

        { ...HONEY, amount: '1/4 c', additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '1/4 c', additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...GARLIC, amount: '3 cloves', additionalDetails: 'minced', section: SWEET_AND_TANGY_SAUCE },
        { ...GINGER, amount: '1/2 tsp', additionalDetails: 'grated', section: SWEET_AND_TANGY_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: '3 Tbsp', additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...HOISIN_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },
        { ...SESAME_OIL, amount: '1 Tbsp', additionalDetails: '', section: SWEET_AND_TANGY_SAUCE },

        { ...GOCHUJANG_SAUCE, amount: '1/4 c', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...WHITE_SUGAR, amount: '1/4 c', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...STRAWBERRY_JAM, amount: '3 Tbsp', additionalDetails: 'seedless', section: SWEET_AND_SPICY_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '2 1/2 Tbsp', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...RICE_WINE_VINEGAR, amount: '1 1/2 Tbsp', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...HONEY, amount: '1 Tbsp', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...KETCHUP, amount: '1 Tbsp', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...WARM_WATER, amount: '6 Tbsp', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...GARLIC, amount: '2 cloves', additionalDetails: 'minced', section: SWEET_AND_SPICY_SAUCE },
        { ...GINGER, amount: '1/2 tsp', additionalDetails: 'grated', section: SWEET_AND_SPICY_SAUCE },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SWEET_AND_SPICY_SAUCE },
        { ...THAI_CHILI_PEPPERS, amount: '2', additionalDetails: 'optional and minced', section: SWEET_AND_SPICY_SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large bowl' },
        { name: 'medium bowl' },
        { name: 'large bowl for wet rub' },
        { name: 'pot' },
        { name: 'baking sheet' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: 'In a large bowl, combine the chicken thighs with the garlic, ginger, sea salt, and mirin.', type: SECTIONS.MARINADE, img: marinating },
        { step: 'Let it marinate for at least 1 hour.', type: SECTIONS.MARINADE },

        { step: 'In a medium bowl, mix the dry rub ingredients together then coat each chicken thigh.', type: SECTIONS.DRY_RUB },

        { step: 'In a large bowl, mix water, the 1 1/4 cup cornstarch, flour and baking powder.', type: SECTIONS.WET_RUB },
        { step: 'Fill a medium bowl with the 2 cups of cornstarch.', type: SECTIONS.WET_RUB },
        { step: 'Before you dip the chicken into the wet batter get the frying oil ready.', type: SECTIONS.WET_RUB },
        { step: 'Dip the chicken into the wet batter and then into the cornstarch station, then fry.', type: SECTIONS.WET_RUB, img: dredging },

        { step: 'Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels. Note the stacking order matters because placing the paper towels on top of the cooling rack creates steam beneath the fried chicken making it soggy and not crispy.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, heat a pot of about 2 inches of oil.', type: SECTIONS.MAIN },
        { step: 'Once the oil is hot, about 345ºF, add the chicken into the oil and fry for 3 - 4 minutes. Cook in batches and avoid crowding the pot.', type: SECTIONS.MAIN, img: oil },
        { step: 'Place the fried chicken on the cooling rack.', type: SECTIONS.MAIN, img: drip },
        { step: 'Continue cooking the rest of the chicken in batches.', type: SECTIONS.MAIN },
        { step: 'Increase the heat to medium-high, about 375ºF, and repeat the second fry. Chicken should be golden brown and crunchy.', type: SECTIONS.MAIN },
        { step: 'Enjoy by itself or coat with the hot sauce.', type: SECTIONS.SERVE, img: fullSet },

        { step: 'In a sauce pan over medium-high heat, add all the ingredients for the respective sauce and bring to a boil.', type: SECTIONS.SAUCE, img: sauce },
        { step: 'Once it boils, reduce the heat and cook for another 2 - 3 minutes.', type: SECTIONS.SAUCE },
        { step: 'If the sauce is too thick, add a teaspoon of water at a time to thin it out.', type: SECTIONS.SAUCE },

        { step: 'While sauce is hot, drizzle onto the chicken and serve with rice.', type: SECTIONS.SERVE, img: rice },
    ],
    notes: [
        { note: 'Be sure the oil is hot enough or else the chicken/batter will just soak in the oil and will not get browned.' }
    ]
};