const pan = '../assets/Products/lasagna-pan.jpeg';
const lasagna1 = '../assets/Products/lasagna-1.jpeg';
const lasagna2 = '../assets/Products/lasagna-2.jpeg';
const lasagna3 = '../assets/Products/lasagna-3.jpeg';
const lasagna4 = '../assets/Products/lasagna-4.jpeg';
const lasagna5 = '../assets/Products/lasagna-5.jpeg';
const lasagna6 = '../assets/Products/lasagna-6.jpeg';
const lasagna7 = '../assets/Products/lasagna-7.jpeg';
const lasagna8 = '../assets/Products/lasagna-8.jpeg';
const lasagna9 = '../assets/Products/lasagna-9.jpeg';
const lasagna10 = '../assets/Products/lasagna-10.jpeg';
const lasagna11 = '../assets/Products/lasagna-11.jpeg';
const lasagna12 = '../assets/Products/lasagna-12.jpeg';
const lasagna13 = '../assets/Products/lasagna-13.jpeg';
const lasagna14 = '../assets/Products/lasagna-14.jpeg';
const lasagna15 = '../assets/Products/lasagna-15.jpeg';
const lasagna16 = '../assets/Products/lasagna-16.jpeg';
const lasagna17 = '../assets/Products/lasagna-17.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BAKING_PAN,
    BASIL,
    BLACK_PEPPER,
    COLANDER,
    CRUSHED_TOMATOES,
    CUTTING_BOARD,
    EGG,
    FENNEL_SEEDS,
    GARLIC,
    GROUND_BEEF,
    ITALIAN_SAUSAGE,
    KNIFE,
    LARGE_PAN,
    LASAGNA_NOODLES,
    MEASURING_CUPS,
    MEASURING_SPOONS,
    MIXING_BOWL,
    MOZZARELLA_CHEESE,
    OVEN,
    PARMESAN_CHEESE,
    PARSLEY,
    POT,
    RICOTTA_CHEESE,
    SALT,
    SPATULA,
    STOVE,
    TOMATO_PASTE,
    TOMATO_SAUCE,
    WATER,
    WHITE_SUGAR,
    YELLOW_ONION,
} = require('./ingredients');

const ITALIAN_SAUSAGE_SECTION = 'Italian Sausage';
const BEEF_AND_VEGGIES_SECTION = 'Beef and Veggies';
const RICOTTA_MIXTURE = 'Ricotta Mixture';
const CHEESE_TOPPING_SECTION = 'Cheese Topping';

const COOK_SAUSAGE = 'Cook Sausage';
const PREP_RICOTTA_MIXTURE = 'Prep Ricotta Mixture';

module.exports = {
    cardName: 'Lasagna',
    name: 'Italian Lasagna',
    img: lasagna17,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF, PROTEIN.PORK],
    type: [TYPES.NOODLE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 3, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Lasagna', 
            link: 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/',
            authors: ['John Chandler'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...ITALIAN_SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: ITALIAN_SAUSAGE_SECTION },

        { ...GROUND_BEEF, amount: 3 / 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BEEF_AND_VEGGIES_SECTION },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'minced', section: BEEF_AND_VEGGIES_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'crushed', section: BEEF_AND_VEGGIES_SECTION },

        { ...CRUSHED_TOMATOES, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_SAUCE, amount: 13, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_PASTE, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.SAUCE },

        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BASIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...FENNEL_SEEDS, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...RICOTTA_CHEESE, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: RICOTTA_MIXTURE },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: RICOTTA_MIXTURE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICOTTA_MIXTURE },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICOTTA_MIXTURE },

        { ...LASAGNA_NOODLES, amount: 12, unit: '', additionalDetails: '', section: SECTIONS.NOODLES },

        { ...MOZZARELLA_CHEESE, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'sliced', section: CHEESE_TOPPING_SECTION },
        { ...PARMESAN_CHEESE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: CHEESE_TOPPING_SECTION },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        LARGE_PAN,
        SPATULA,
        POT,
        BAKING_PAN,
        MEASURING_CUPS,
        MEASURING_SPOONS,
        CUTTING_BOARD,
        KNIFE,
        COLANDER,
        MIXING_BOWL,
    ],
    directions: [
        { step: `Remove the Italian sausage casing and cut the sausage into small pieces.`, section: COOK_SAUSAGE, img: lasagna1 },
        { step: `Over medium-high heat, heat a large pan.`, section: COOK_SAUSAGE },
        { step: `Add the sausage. Cook for a few minutes.`, section: COOK_SAUSAGE, img: [lasagna2, lasagna3] },

        { step: `Add the "${BEEF_AND_VEGGIES_SECTION}" section ingredients. Cook until browned.`, section: SECTIONS.COOK_SAUCE, img: lasagna4 },
        { step: `Add the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE, img: lasagna5 },
        { step: `Add the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.COOK_SAUCE, img: lasagna6 },
        { step: `Cover. Simmer for 90 minutes.`, section: SECTIONS.COOK_SAUCE },

        { step: `In a mixing bowl, combine together the "${RICOTTA_MIXTURE}" section ingredients. Set aside.`, section: PREP_RICOTTA_MIXTURE, img: lasagna7 },

        { step: `Over medium-high heat, bring a pot of salted water to a boil.`, section: SECTIONS.COOK_NOODLES },
        { step: `Add the noodles and make sure its submerged. Cook until just cooked (about 8 to 10 minutes).`, section: SECTIONS.COOK_NOODLES, img: lasagna8 },
        { step: `Drain. Rinse noodles with cold water.`, section: SECTIONS.COOK_NOODLES },

        { step: `Preheat oven to 375ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `In a baking pan, pour 1 1/2 cup of the meat sauce.`, section: SECTIONS.ASSEMBLE, img: lasagna9 },
        { step: `Layer 6 noodles length-wise over the meat sauce, overlapping a little.`, section: SECTIONS.ASSEMBLE, img: lasagna10 },
        { step: `Add half of the ricotta mixture evenly over the noodles.`, section: SECTIONS.ASSEMBLE, img: lasagna11 },
        { step: `Layer with a few slices of mozzarella.`, section: SECTIONS.ASSEMBLE, img: lasagna12 },
        { step: `Add 1 1/2 cup of meat sauce.`, section: SECTIONS.ASSEMBLE, img: lasagna13 },
        { step: `Add the last half of the ricotta cheese.`, section: SECTIONS.ASSEMBLE },
        { step: `Add 1/4 cup of parmesan cheese.`, section: SECTIONS.ASSEMBLE, img: lasagna14 },
        { step: `Layer with remaining noodles, mozzarella, and Parmesan cheese.`, section: SECTIONS.ASSEMBLE, img: [lasagna15, lasagna16] },
        { step: `Cover this with tin foil. Avoid letting the cheese touch the foil.`, section: SECTIONS.ASSEMBLE },

        { step: `Bake for 25 minutes.`, section: SECTIONS.BAKE },
        { step: `Remove the foil. Bake for another 25 minutes.`, section: SECTIONS.BAKE },
        { step: `Let cool for at least 15 minutes.`, section: SECTIONS.BAKE },

        { step: `Serve and enjoy this splash of Italian goodness.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};