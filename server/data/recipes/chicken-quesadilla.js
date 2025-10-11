const quesadillas1 = '../assets/Products/chicken-quesadillas-1.jpeg';
const quesadillas3 = '../assets/Products/chicken-quesadillas-3.jpeg';
const quesadillas4 = '../assets/Products/chicken-quesadillas-4.jpeg';
const quesadillas5 = '../assets/Products/chicken-quesadillas-5.jpeg';
const quesadillas6 = '../assets/Products/chicken-quesadillas-6.jpeg';
const quesadillas7 = '../assets/Products/chicken-quesadillas-7.jpeg';
const quesadillas8 = '../assets/Products/chicken-quesadillas-8.jpeg';
const quesadillas9 = '../assets/Products/chicken-quesadillas-9.jpeg';
const quesadillas10 = '../assets/Products/chicken-quesadillas-10.jpeg';
const quesadillas11 = '../assets/Products/chicken-quesadillas-11.jpeg';
const quesadillas12 = '../assets/Products/chicken-quesadillas-12.jpeg';
const quesadillas13 = '../assets/Products/chicken-quesadillas-13.jpeg';
const quesadillas14 = '../assets/Products/chicken-quesadillas-14.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, CHILI_POWDER, CUTTING_BOARD, FRYING_PAN, GARLIC_POWDER, GREEN_BELL_PEPPER, GUACAMOLE, HOT_SAUCE, KNIFE, MIXING_BOWL, MONTEREY_JACK_CHEESE, OLIVE_OIL, PAPER_TOWELS, PLATE, RED_BELL_PEPPER, SALSA, SALT, SAUCEPAN, SHARP_CHEDDAR_CHEESE, SMALL_BOWL, SOUR_CREAM, STOVE, UNSALTED_BUTTER, WHEAT_TORTILLA, YELLOW_ONION } = require('./ingredients');

const QUESADILLA = 'Quesadilla';
const COOK_QUESADILLA = 'Cook Quesadilla';

module.exports = {
    cardName: 'Chicken Quesadilla',
    name: 'Chicken Quesadilla',
    img: quesadillas14,
    recipeAuthors: ['Erin Clarke'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.WRAP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chicken Quesadilla', link: 'https://www.wellplated.com/chicken-quesadilla/' }
    ],
    separated: true,
    ingredients: [
        { ...CHILI_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...HOT_SAUCE, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.VEGGIES },

        { ...MONTEREY_JACK_CHEESE, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: QUESADILLA },
        { ...SHARP_CHEDDAR_CHEESE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: QUESADILLA },
        { ...WHEAT_TORTILLA, amount: 4, unit: '', additionalDetails: '', section: QUESADILLA },
        { ...UNSALTED_BUTTER, amount: '', unit: '', additionalDetails: 'for cooking', section: QUESADILLA },

        { ...SALSA, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GUACAMOLE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        CUTTING_BOARD,
        MIXING_BOWL,
        SMALL_BOWL,
        FRYING_PAN,
        PLATE,
        PAPER_TOWELS,
        KNIFE,
    ],
    directions: [
        { step: 'In a small bowl, combine spices.', section: SECTIONS.PREP_SEASONINGS, img: quesadillas3 },

        { step: 'In a saucepan, add the chicken breast and fill the saucepan with water just enough to cover the chicken slightly.', section: SECTIONS.PREP_CHICKEN, img: quesadillas1 },
        { step: 'Bring to a boil.', section: SECTIONS.PREP_CHICKEN },
        { step: 'Reduce to a medium-low heat. Cook until chicken reaches 165ºF.', section: SECTIONS.PREP_CHICKEN },
        { step: 'Place the chicken on a cutting board and let it cool.', section: SECTIONS.PREP_CHICKEN },
        { step: 'Cut the chicken into small 1/2 inch slices.', section: SECTIONS.PREP_CHICKEN, img: quesadillas6 },
        { step: 'Place the cut up chicken into a mixing bowl.', section: SECTIONS.PREP_CHICKEN },
        { step: 'Mix in half of the spice mixture into the chicken. Coating it.', section: SECTIONS.PREP_CHICKEN },

        { step: 'Over medium heat, heat oil in a frying pan.', section: SECTIONS.PREP_VEGGIES },
        { step: 'Add veggies and remaining spice mixture.', section: SECTIONS.PREP_VEGGIES, img: quesadillas4 },
        { step: 'Saute the veggies (about 6 to 8 minutes). Onions should be browned and translucent. Peppers should be crisp but tender.', section: SECTIONS.PREP_VEGGIES, img: quesadillas5 },
        { step: 'Optionally add hot sauce. Mix.', section: SECTIONS.PREP_VEGGIES },
        { step: 'Transfer veggies to the bowl of chicken. Mix.', section: SECTIONS.PREP_VEGGIES, img: quesadillas7 },

        { step: 'Place tortilla on a plate. On one half of each, top them with 1/8 of both cheeses and 1/4 of the chicken-veggies mixture.', section: SECTIONS.ASSEMBLE, img: quesadillas8 },
        { step: 'Top with 1/8 of both cheeses (should be the last of the cheeses).', section: SECTIONS.ASSEMBLE, img: quesadillas9 },
        { step: 'Fold to seal the goodness. Gently press to create a slight crease.', section: SECTIONS.ASSEMBLE, img: quesadillas10 },
        { step: 'Repeat filling with the remaining tortillas.', section: SECTIONS.ASSEMBLE },

        { step: 'Wipe off the frying pan with paper towel.', section: COOK_QUESADILLA },
        { step: 'Over medium-low heat, add a little butter to make the tortillas crisper.', section: COOK_QUESADILLA },
        { step: 'Place 2 quesadillas in the pan with the folded edge in the center.', section: COOK_QUESADILLA, img: quesadillas11 },
        { step: 'Press tops gently with the back of the spatula. Cheese and other content may ooze out but that\'s okay.', section: COOK_QUESADILLA },
        { step: 'Cook until the bottom is golden and crisp (about 4 minutes).', section: COOK_QUESADILLA, img: quesadillas12 },
        { step: 'Flip. Cook until the other side is golden and crisp (about 2 minutes).', section: COOK_QUESADILLA },

        { step: 'Place cooked quesadilla on a cutting board. Cut the quesadillas into thirds.', section: SECTIONS.SERVE, img: quesadillas13 },
        { step: 'Serve hot with your favorite toppings.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium heat, heat a little oil and place the quesadilla in the pan. Cook until golden brown and crispy (about 2 to 3 minutes per side).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until cheese is melted and tortilla is crispy (about 5 to 8 minutes).',
        },
    ],
    mealPrep: true,
};