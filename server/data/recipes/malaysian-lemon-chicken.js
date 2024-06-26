const lemonChicken = '../assets/Products/lemon-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Lemon Chicken',
    name: 'Malaysian Lemon Chicken',
    img: lemonChicken,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.MALAYSIAN],
    method: [METHODS.DEEP_FRY, METHODS.MARINADE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '10 servings',
    prepTime: '10 m',
    cookTime: '10 m',
    separated: true,
    websites: [
        'https://rasamalaysia.com/lemon-chicken/'
    ],
    ingredients: [
        { name: 'boneless chicken thigh', amount: '3 lbs', additionalDetails: 'cut into small pieces', optional: false, section: SECTIONS.MARINADE },
        { name: 'soy sauce', amount: '2 1/2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'shaoxing wine', amount: '2 1/2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'cornstarch', amount: '5 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MARINADE },
        { name: 'cornstarch', amount: '1 1/4 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'flour', amount: '1 1/4 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'vegetable oil', amount: '', additionalDetails: 'for deep-frying', optional: false, section: SECTIONS.MAIN },
        { name: 'lemon juice', amount: '15 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'sugar', amount: '5 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'water', amount: '25 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'cornstarch', amount: '5 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'salt', amount: '5 pinches', additionalDetails: 'to taste', optional: false, section: SECTIONS.SAUCE },
        { name: 'white sesame', amount: '2 1/2 tsp', additionalDetails: 'to top', optional: false, section: SECTIONS.TOPPINGS },
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