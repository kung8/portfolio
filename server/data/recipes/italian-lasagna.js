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

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const {
    ITALIAN_SAUSAGE,
    GROUND_BEEF,
    YELLOW_ONION,
    GARLIC,
    CRUSHED_TOMATOES,
    TOMATO_PASTE,
    TOMATO_SAUCE,
    WHITE_SUGAR,
    BASIL,
    FENNEL_SEEDS,
    SALT,
    BLACK_PEPPER,
    PARSLEY,
    LASAGNA_NOODLES,
    RICOTTA_CHEESE,
    EGG,
    MOZZARELLA_CHEESE,
    PARMESAN_CHEESE,
    WATER,
} = require('./ingredients');

const ITALIAN_SAUSAGE_SECTION = 'Italian Sausage';
const BEEF_AND_VEGGIES_SECTION = 'Beef and Veggies';
const SAUCE_SECTION = 'Sauce';
const SEASONINGS_SECTION = 'Seasonings';
const RICOTTA_MIXTURE = 'Ricotta Mixture';
const NOODLES_SECTION = 'Noodles';
const CHEESE_TOPPING_SECTION = 'Cheese Topping';

const COOK_SAUSAGE = 'Cook Sausage';
const COOK_MEAT_SAUCE = 'Cook Meat Sauce';
const COOK_NOODLES = 'Cook Noodles';
const ASSEMBLE_LASAGNA = 'Assemble Lasagna';
const BAKE_LASAGNA = 'Bake Lasagna';
const PREP_RICOTTA_MIXTURE = 'Prep Ricotta Mixture';

module.exports = {
    cardName: 'Lasagna',
    name: 'Italian Lasagna',
    img: lasagna17,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
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
        { label: 'Lasagna', link: 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/' }
    ],
    ingredients: [
        { ...ITALIAN_SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: ITALIAN_SAUSAGE_SECTION },

        { ...GROUND_BEEF, amount: 3 / 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BEEF_AND_VEGGIES_SECTION },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'minced', section: BEEF_AND_VEGGIES_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'crushed', section: BEEF_AND_VEGGIES_SECTION },

        { ...CRUSHED_TOMATOES, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SAUCE_SECTION },
        { ...TOMATO_SAUCE, amount: 13, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SAUCE_SECTION },
        { ...TOMATO_PASTE, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SAUCE_SECTION },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SAUCE_SECTION },

        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASONINGS_SECTION },
        { ...BASIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONINGS_SECTION },
        { ...FENNEL_SEEDS, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONINGS_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONINGS_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONINGS_SECTION },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASONINGS_SECTION },

        { ...RICOTTA_CHEESE, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: RICOTTA_MIXTURE },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: RICOTTA_MIXTURE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICOTTA_MIXTURE },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICOTTA_MIXTURE },

        { ...LASAGNA_NOODLES, amount: 12, unit: '', additionalDetails: '', section: NOODLES_SECTION },

        { ...MOZZARELLA_CHEESE, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'sliced', section: CHEESE_TOPPING_SECTION },
        { ...PARMESAN_CHEESE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: CHEESE_TOPPING_SECTION },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'spatula' },
        { name: 'pot' },
        { name: 'baking pan' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'colander' },
        { name: 'mixing bowl' },
    ],
    separated: true,
    directions: [
        { step: 'Remove the Italian sausage casing and cut the sausage into small pieces.', type: COOK_SAUSAGE, img: lasagna1 },
        { step: 'Over medium-high heat, heat a large pan.', type: COOK_SAUSAGE },
        { step: 'Add the sausage. Cook for a few minutes.', type: COOK_SAUSAGE, img: [lasagna2, lasagna3] },

        { step: 'Add the "Beef and Veggies" section ingredients. Cook until browned.', type: COOK_MEAT_SAUCE, img: lasagna4 },
        { step: 'Add the "Sauce" section ingredients.', type: COOK_MEAT_SAUCE, img: lasagna5 },
        { step: 'Add the "Seasonings" section ingredients.', type: COOK_MEAT_SAUCE, img: lasagna6 },
        { step: 'Cover. Simmer for 90 minutes.', type: COOK_MEAT_SAUCE },

        { step: 'In a mixing bowl, combine together the "Ricotta Mixture" section ingredients. Set aside.', type: PREP_RICOTTA_MIXTURE, img: lasagna7 },

        { step: 'Over medium-high heat, bring a pot of salted water to a boil.', type: COOK_NOODLES },
        { step: 'Add the noodles and make sure its submerged. Cook until just cooked (about 8 to 10 minutes).', type: COOK_NOODLES, img: lasagna8 },
        { step: 'Drain. Rinse noodles with cold water.', type: COOK_NOODLES },

        { step: 'Preheat oven to 375ºF.', type: ASSEMBLE_LASAGNA },
        { step: 'In a baking pan, pour 1 1/2 cup of the meat sauce.', type: ASSEMBLE_LASAGNA, img: lasagna9 },
        { step: 'Layer 6 noodles length-wise over the meat sauce, overlapping a little.', type: ASSEMBLE_LASAGNA, img: lasagna10 },
        { step: 'Add half of the ricotta mixture evenly over the noodles.', type: ASSEMBLE_LASAGNA, img: lasagna11 },
        { step: 'Layer with a few slices of mozzarella.', type: ASSEMBLE_LASAGNA, img: lasagna12 },
        { step: 'Add 1 1/2 cup of meat sauce.', type: ASSEMBLE_LASAGNA, img: lasagna13 },
        { step: 'Add the last half of the ricotta cheese.', type: ASSEMBLE_LASAGNA },
        { step: 'Add 1/4 cup of parmesan cheese.', type: ASSEMBLE_LASAGNA, img: lasagna14 },
        { step: 'Layer with remaining noodles, mozzarella, and Parmesan cheese.', type: ASSEMBLE_LASAGNA, img: [lasagna15, lasagna16] },
        { step: 'Cover this with tin foil. Avoid letting the cheese touch the foil.', type: ASSEMBLE_LASAGNA },

        { step: 'Bake for 25 minutes.', type: BAKE_LASAGNA },
        { step: 'Remove the foil. Bake for another 25 minutes.', type: BAKE_LASAGNA },
        { step: 'Let cool for at least 15 minutes.', type: BAKE_LASAGNA },

        { step: 'Serve and enjoy this splash of Italian goodness.', type: SECTIONS.SERVE },
    ]
};