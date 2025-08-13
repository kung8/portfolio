const pie1 = '../assets/Products/chicken-pot-pie-1.jpeg';
const pie2 = '../assets/Products/chicken-pot-pie-2.jpeg';
const pie3 = '../assets/Products/chicken-pot-pie-3.jpeg';
const pie4 = '../assets/Products/chicken-pot-pie-4.jpeg';
const pie5 = '../assets/Products/chicken-pot-pie-5.jpeg';
const pie6 = '../assets/Products/chicken-pot-pie-6.jpeg';
const pie7 = '../assets/Products/chicken-pot-pie-7.jpeg';
const pie8 = '../assets/Products/chicken-pot-pie-8.jpeg';
const pie9 = '../assets/Products/chicken-pot-pie-9.jpeg';

const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const {
    UNSALTED_BUTTER,
    ALL_PURPOSE_FLOUR,
    YELLOW_ONION,
    SALT,
    BLACK_PEPPER,
    CHICKEN_BROTH,
    MILK,
    FROZEN_PEAS,
    FROZEN_CARROTS,
    CHICKEN_BREAST,
    REFRIGERATED_PIE_CRUST,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Pot Pie',
    name: 'Chicken Pot Pie',
    img: pie8,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.BRITISH, GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PIE, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    separated: true,
    ingredients: [
        { ...CHICKEN_BREAST, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'boiled and cut into 1/2 inch pieces', optional: false, section: SECTIONS.CHICKEN },
        
        { ...UNSALTED_BUTTER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { ...YELLOW_ONION, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false, section: SECTIONS.FILLING },

        { ...CHICKEN_BROTH, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.LIQUIDS },
        { ...MILK, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.LIQUIDS },

        { ...FROZEN_PEAS, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false, section: SECTIONS.FROZEN },
        { ...FROZEN_CARROTS, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false, section: SECTIONS.FROZEN },

        { ...REFRIGERATED_PIE_CRUST, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false, section: SECTIONS.CRUST },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'large pan' },
        { name: 'pie pan / baking pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, boil water in a large pot.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add chicken breast. Boil until chicken is cooked through (about 15 minutes).', section: SECTIONS.COOK_CHICKEN, img: pie1 },
        { step: 'Transfer chicken carefully to a cutting board. Cut into 1/2 inch pieces.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Set aside.', section: SECTIONS.COOK_CHICKEN },
        
        { step: 'Over medium heat, add butter to a large pan.', section: SECTIONS.COOK_FILLING },
        { step: 'Add flour, onion, salt, and pepper. Cook until bubbling.', section: SECTIONS.COOK_FILLING, img: pie2 },
        { step: 'Add milk and broth. Stir constantly until boils for 1 minute.', section: SECTIONS.COOK_FILLING, img: pie3 },
        { step: `Add chicken and the "${SECTIONS.FROZEN}" section ingredients. Cook until hot.`, section: SECTIONS.COOK_FILLING, img: pie4 },

        { step: 'Preheat the oven to 425ºF.', section: SECTIONS.ASSEMBLE },
        { step: 'Roll out the pie crust and place inside the pan. Be sure to get the crust up the sides too.', section: SECTIONS.ASSEMBLE, img: pie5 },
        { step: 'Pour filling inside the pie crust.', section: SECTIONS.ASSEMBLE, img: pie6 },
        { step: 'Roll the remaining dough on top of the mixture and turn edges over pie pan.', section: SECTIONS.ASSEMBLE },
        { step: 'Poke holes through the top to allow for steam to be released.', section: SECTIONS.ASSEMBLE, img: pie7 },
        { step: 'Bake the pie until golden brown (about 30 to 35 minutes).', section: SECTIONS.MAIN },
        { step: 'Enjoy this comfort food in the comforts of your own home.', section: SECTIONS.MAIN, img: pie9 },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 15 to 20 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Cover with foil and air fry at 400ºF until heated through (about 3 to 5 minutes).',
        },
    ],
    mealPrep: true,
};