// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { GREEK_YOGURT, GINGER_GARLIC_PASTE, GARAM_MASALA, CHILI_POWDER, BLACK_PEPPER, CORIANDER, SALT, TURMERIC, FENUGREEK_LEAVES, LEMON_JUICE, MUSTARD_OIL, CORIANDER_POWDER, BONELESS_AND_SKINLESS_CHICKEN_THIGH } = require('./ingredients');

const CHICKEN_MARINADE = 'Chicken Marinade';
const RED_CHILI_OIL = 'Red Chili Oil';

const PREP_CHICKEN = 'Prep Chicken';
const COOK_CHICKEN = 'Cook Chicken';
const PREP_RED_CHILI_OIL = 'Prep Red Chili Oil';

module.exports = {
    wip: true,
    cardName: 'Tandoori Chicken',
    name: 'Tandoori Chicken',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '40 m',
    websites: [
        { label: 'Tandoori Chicken', link: 'https://www.indianhealthyrecipes.com/tandoori-chicken-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: '1.5 lb', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GREEK_YOGURT, amount: '1/2 c', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...GINGER_GARLIC_PASTE, amount: '1 Tbsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...GARAM_MASALA, amount: '1 tsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...CHILI_POWDER, amount: '1 tsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...TURMERIC, amount: '1/4 tsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...FENUGREEK_LEAVES, amount: '1 tsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...CORIANDER_POWDER, amount: '1 tsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...MUSTARD_OIL, amount: '1 1/2 Tbsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...LEMON_JUICE, amount: '1 Tbsp', additionalDetails: '', section: CHICKEN_MARINADE },
        { ...CORIANDER, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHILI_POWDER, amount: '1 tsp', additionalDetails: '', section: RED_CHILI_OIL },
        { ...MUSTARD_OIL, amount: '2 Tbsp', additionalDetails: '', section: RED_CHILI_OIL },
    ],
    appliances: [
        { name: 'refrigerator' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'paper towel' },
        { name: 'knife' },
        { name: 'foil' },
        { name: 'small bowl' },
        { name: 'baking sheet' },
        { name: 'wire rack' },
        { name: 'baster' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Chicken Marinade" ingredients.', type: PREP_CHICKEN },
        { step: 'Taste and adjust based on your spice tolerance.', type: PREP_CHICKEN },
        { step: 'Pat chicken with paper towels until dry.', type: PREP_CHICKEN },
        { step: 'Use a knife to make deep 3 slits (4 slits for larger pieces).', type: PREP_CHICKEN },
        { step: 'Coat the chicken with the marinade. Cover and refrigerate for at least 6 hours or overnight. ', type: PREP_CHICKEN },
        
        { step: 'In a small bowl, combine the "Red Chili Oil" ingredients. Set aside.', type: PREP_RED_CHILI_OIL },
        
        { step: 'Preheat the oven to 470ºF.', type: COOK_CHICKEN },
        { step: 'Line a baking sheet with foil and place a wire rack on top.', type: COOK_CHICKEN },
        { step: 'Spray the wire rack with oil.', type: COOK_CHICKEN },
        { step: 'Place the chicken on the rack.', type: COOK_CHICKEN },
        { step: 'Roast the chicken for 12 to 15 minutes.', type: COOK_CHICKEN },
        { step: 'Baste the chicken with the red chili oil and flip the chicken over.', type: COOK_CHICKEN },
        { step: 'Roast for another 12 to 15 minutes.', type: COOK_CHICKEN },
        { step: 'Broil the chicken for 2 to 3 minutes. To char the chicken a little.', type: COOK_CHICKEN },
        { step: 'Check the internal temperature of the chicken is at least 165ºF.', type: COOK_CHICKEN },
        { step: 'Brush the chicken with its drippings.', type: COOK_CHICKEN },

        { step: 'Enjoy this classic Indian dish topped with cilantro.', type: SECTIONS.SERVE },
    ]
};