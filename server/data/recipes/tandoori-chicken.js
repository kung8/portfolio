const tandoori1 = '../assets/Products/tandoori-chicken-1.jpeg';
const tandoori2 = '../assets/Products/tandoori-chicken-2.jpeg';
const tandoori3 = '../assets/Products/tandoori-chicken-3.jpeg';
const tandoori4 = '../assets/Products/tandoori-chicken-4.jpeg';
const tandoori5 = '../assets/Products/tandoori-chicken-5.jpeg';
const tandoori6 = '../assets/Products/tandoori-chicken-6.jpeg';
const tandoori7 = '../assets/Products/tandoori-chicken-7.jpeg';
const tandoori8 = '../assets/Products/tandoori-chicken-8.jpeg';
const tandoori9 = '../assets/Products/tandoori-chicken-9.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { GREEK_YOGURT, GINGER_GARLIC_PASTE, GARAM_MASALA, CHILI_POWDER, BLACK_PEPPER, CORIANDER, SALT, TURMERIC, FENUGREEK_LEAVES, LEMON_JUICE, MUSTARD_OIL, CORIANDER_POWDER, BONELESS_AND_SKINLESS_CHICKEN_THIGH } = require('./ingredients');

const RED_CHILI_OIL = 'Red Chili Oil';
const PREP_RED_CHILI_OIL = 'Prep Red Chili Oil';

module.exports = {
    cardName: 'Tandoori Chicken',
    name: 'Tandoori Chicken',
    img: tandoori8,
    recipeAuthors: ['Swasthi'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 6, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Tandoori Chicken', link: 'https://www.indianhealthyrecipes.com/tandoori-chicken-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GREEK_YOGURT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GINGER_GARLIC_PASTE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARAM_MASALA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...TURMERIC, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...FENUGREEK_LEAVES, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CORIANDER_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...MUSTARD_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RED_CHILI_OIL },
        { ...MUSTARD_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RED_CHILI_OIL },
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
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Marinade" ingredients.', section: SECTIONS.PREP_CHICKEN, img: tandoori1 },
        { step: 'Taste and adjust based on your spice tolerance.', section: SECTIONS.PREP_CHICKEN },
        { step: 'Pat chicken with paper towels until dry.', section: SECTIONS.PREP_CHICKEN },
        { step: 'Use a knife to make deep 3 slits (4 slits for larger pieces).', section: SECTIONS.PREP_CHICKEN, img: tandoori2 },
        { step: 'Coat the chicken with the marinade. Cover and refrigerate for at least 6 hours or overnight. ', section: SECTIONS.PREP_CHICKEN, img: tandoori3 },

        { step: 'In a small bowl, combine the "Red Chili Oil" ingredients. Set aside.', section: PREP_RED_CHILI_OIL },

        { step: 'Preheat the oven to 470ºF.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Line a baking sheet with foil and place a wire rack on top.', section: SECTIONS.COOK_CHICKEN, img: tandoori4 },
        { step: 'Spray the wire rack with oil.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Place the chicken on the rack.', section: SECTIONS.COOK_CHICKEN, img: tandoori5 },
        { step: 'Roast the chicken for 12 to 15 minutes.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Baste the chicken with the red chili oil and flip the chicken over.', section: SECTIONS.COOK_CHICKEN, img: tandoori6 },
        { step: 'Roast for another 12 to 15 minutes.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Broil the chicken for 2 to 3 minutes. To char the chicken a little.', section: SECTIONS.COOK_CHICKEN, img: tandoori7 },
        { step: 'Check the internal temperature of the chicken is at least 165ºF.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Brush the chicken with its drippings.', section: SECTIONS.COOK_CHICKEN },

        { step: 'Enjoy this classic Indian dish topped with cilantro.', section: SECTIONS.SERVE, img: tandoori9 },
    ],
    notes: [
        { note: 'The flavor profile is made up of many elements: (1) Tangy from the yogurt, (2) Spicy from the chili powder, (3) Earthy from the blend of spices including garam masala and coriander, (4) Savory from the rest of the spices, and (5) Smoky from the oven.' },
        { note: 'For first timers it is difficult to know what to change in the marinade mixture. The end result is pretty close to whatever the marinade tastes like. If there are flavors you don\'t like, adjust the recipe to your liking based on the above.' },
        { note: 'I ended up using a little more yogurt since there was a little bit leftover but I did not care very much for the stronger tangy taste. Yogurt does cut the spice level dramatically.' },
        { note: 'I used chicken breast instead of chicken thigh accidentally, and it still turned out great. I was afraid it was going to be dry but it was still moist and flavorful.' },
        { note: 'I cooked it for almost the full recommended length of time, but honestly could have shaved off a few minutes for both rounds of baking if you want to enjoy it sooner. The chicken was still moist and full of flavor. Obviously it all depends on your oven for the length of time so experiment with it - and just make sure the chicken is at a safe internal temperature.' },
        { note: 'This dish is a versatile dish to be eaten by itself or paired with naan or basmati rice (or both).' },
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a little water. Cover with foil. Bake at 350ºF until heated through. Remove foil and bake for a few minutes to crisp up the skin.',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 380ºF for 3 to 4 minutes.',
        },
    ],
    mealPrep: true,
};