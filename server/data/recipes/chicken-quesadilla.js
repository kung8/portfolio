// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { CHILI_POWDER, SALT, GARLIC_POWDER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, OLIVE_OIL, SMALL_YELLOW_ONION, RED_BELL_PEPPERS, GREEN_BELL_PEPPERS, HOT_SAUCE, MONTEREY_JACK_CHEESE, UNSALTED_BUTTER, SALSA, GUACAMOLE, SOUR_CREAM, SHARP_CHEDDAR_CHEESE, WHEAT_TORTILLA } = require('./ingredients');

const SPICES = 'Spices';
const CHICKEN = 'Chicken';
const VEGGIES = 'Veggies';
const QUESADILLA = 'Quesadilla';
const PREP_CHICKEN = 'Prep Chicken';
const PREP_VEGGIES = 'Prep Veggies';
const ASSEMBLE_QUESADILLA = 'Assemble Quesadilla';
const COOK_QUESADILLA = 'Cook Quesadilla';

module.exports = {
    wip: true,
    cardName: 'Chicken Quesadilla',
    name: 'Chicken Quesadilla',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.WRAP],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '20 m',
    websites: [
        { label: 'Chicken Quesadilla', link: 'https://www.wellplated.com/chicken-quesadilla/' }
    ],
    separated: true,
    ingredients: [
        { ...CHILI_POWDER, amount: '2 tsp', additionalDetails: '', section: SPICES },
        { ...SALT, amount: '3/4 tsp', additionalDetails: '', section: SPICES },
        { ...GARLIC_POWDER, amount: '1/2 tsp', additionalDetails: '', section: SPICES },

        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '2 medium', additionalDetails: '', section: CHICKEN },

        { ...OLIVE_OIL, amount: '1 Tbsp', additionalDetails: '', section: VEGGIES },
        { ...SMALL_YELLOW_ONION, amount: '1/2', additionalDetails: 'diced', section: VEGGIES },
        { ...RED_BELL_PEPPERS, amount: '1', additionalDetails: 'diced', section: VEGGIES },
        { ...GREEN_BELL_PEPPERS, amount: '1', additionalDetails: 'diced', section: VEGGIES },
        { ...HOT_SAUCE, amount: '', additionalDetails: 'to taste', section: VEGGIES },

        { ...MONTEREY_JACK_CHEESE, amount: '1 1/4 c', additionalDetails: '', section: QUESADILLA },
        { ...SHARP_CHEDDAR_CHEESE, amount: '3/4 c', additionalDetails: '', section: QUESADILLA },
        { ...WHEAT_TORTILLA, amount: '4', additionalDetails: '', section: QUESADILLA },
        { ...UNSALTED_BUTTER, amount: '', additionalDetails: 'for cooking', section: QUESADILLA },

        { ...SALSA, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GUACAMOLE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'cutting board' },
        { name: 'mixing bowl' },
        { name: 'small bowl' },
        { name: 'frying pan' },
        { name: 'plates' },
        { name: 'paper towel' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'In a small bowl, combine spices.', type: SPICES },
        
        { step: 'In a saucepan, add the chicken breast and fill the saucepan with water just enough to cover the chicken slightly.', type: PREP_CHICKEN },
        { step: 'Bring to a boil.', type: PREP_CHICKEN },
        { step: 'Reduce to a medium-low heat. Cook until chicken reaches 165ºF.', type: PREP_CHICKEN },
        { step: 'Place the chicken on a cutting board and let it cool.', type: PREP_CHICKEN },
        { step: 'Cut the chicken into small 1 inch pieces.', type: PREP_CHICKEN },
        { step: 'Place the cut up chicken into a mixing bowl.', type: PREP_CHICKEN },
        { step: 'Mix in half of the spice mixture into the chicken. Coating it.', type: PREP_CHICKEN },

        { step: 'Over medium heat, heat oil in a frying pan.', type: PREP_VEGGIES },
        { step: 'Add veggies and remaining spice mixture.', type: PREP_VEGGIES },
        { step: 'Saute the veggies (about 6 to 8 minutes). Onions should be browned and translucent. Peppers should be crisp but tender.', type: PREP_VEGGIES },
        { step: 'Optionally add hot sauce. Mix.', type: PREP_VEGGIES },
        { step: 'Transfer veggies to the bowl of chicken. Mix.', type: PREP_VEGGIES },

        { step: 'Place tortilla on a plate. On one half of each, top them with 1/8 of both cheeses and 1/4 of the chicken-veggies mixture.', type: ASSEMBLE_QUESADILLA },
        { step: 'Top with 1/8 of both cheeses (should be the last of the cheeses).', type: ASSEMBLE_QUESADILLA },
        { step: 'Fold to seal the goodness. Gently press to create a slight crease.', type: ASSEMBLE_QUESADILLA },
        { step: 'Repeat filling with the remaining tortillas.', type: ASSEMBLE_QUESADILLA },
        
        { step: 'Wipe off the frying pan with paper towel.', type: COOK_QUESADILLA },
        { step: 'Over medium-low heat, add a little butter to make the tortillas crisper.', type: COOK_QUESADILLA },
        { step: 'Place 2 quesadillas in the pan with the folded edge in the center.', type: COOK_QUESADILLA },
        { step: 'Press tops gently with the back of the spatula. Cheese and other content may ooze out but that\'s okay.', type: COOK_QUESADILLA },
        { step: 'Cook until the bottom is golden and crisp (about 4 minutes).', type: COOK_QUESADILLA },
        { step: 'Flip. Cook until the other side is golden and crisp (about 2 minutes).', type: COOK_QUESADILLA },
        { step: 'Place cooked quesadilla on a cutting board.', type: COOK_QUESADILLA },
        
        { step: 'Cut the quesadillas into thirds.', type: SECTIONS.SERVE },
        { step: 'Serve hot with your favorite toppings.', type: SECTIONS.SERVE },
    ]
};