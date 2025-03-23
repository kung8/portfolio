const lemonChicken = '../assets/Products/lemon-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, UNITS, YIELD_UNITS } = require('./constants');
const {
    BONELESS_CHICKEN_THIGH,
    LIGHT_SOY_SAUCE,
    SHAOXING_WINE,
    CORNSTARCH,
    ALL_PURPOSE_FLOUR,
    VEGETABLE_OIL,
    LEMON_JUICE,
    WHITE_SUGAR,
    WARM_WATER,
    SALT,
    SESAME_SEEDS,
} = require('./ingredients');

module.exports = {
    cardName: 'Lemon Chicken',
    name: 'Malaysian Lemon Chicken',
    img: lemonChicken,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY, METHODS.MARINADE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    cookTime: '10 m',
    separated: true,
    websites: [
        { label: 'Lemon Chicken', link: 'https://rasamalaysia.com/lemon-chicken/' }
    ],
    ingredients: [
        { ...BONELESS_CHICKEN_THIGH, amount: 3, unit: UNITS.POUND, additionalDetails: 'cut into small pieces', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 5 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SHAOXING_WINE, amount: 5 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CORNSTARCH, amount: 5, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CORNSTARCH, amount: 5 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for deep-frying', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 15, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 5, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WARM_WATER, amount: 25, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 5, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 5, unit: UNITS.PINCH, additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...SESAME_SEEDS, amount: 5 / 2, unit: UNITS.TEASPOON, additionalDetails: 'topping', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'deep pot' },
        { name: 'large bowl' },
        { name: 'sauce pan' },
        { name: 'medium bowl' },
        { name: 'baking sheet' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: 'In a large bowl, marinate the chicken with the soy sauce, shaoxing wine, and cornstarch (5 Tbsp) for at least 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Mix the sugar, cornstarch (5 t), salt, water,lemon juice, and white sesame in a sauce pan. Set aside. This is the sauce.', type: SECTIONS.MAIN },
        { step: 'In a medium bowl, mix the flour and cornstarch (1 1/4 c) for the dredging station.', type: SECTIONS.MAIN },
        { step: 'Heat up a deep pot with vegetable oil over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Line a baking sheet with paper towels and place a cooling rack on top.', type: SECTIONS.MAIN },
        { step: 'Once the oil is hot, dredge the chicken in the flour mixture and shake off any excess. Then fry the chicken in the oil until golden brown (about 7 to 10 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove the chicken from the oil and place on the cooling rack.', type: SECTIONS.MAIN },
        { step: 'Continue until all of the chicken is cooked.', type: SECTIONS.MAIN },
        { step: 'Heat the sauce over medium heat until it thickens. Serve over the chicken with rice.', type: SECTIONS.MAIN },
    ]
};