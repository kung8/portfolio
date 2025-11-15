const rolls1 = '../assets/Products/fresh-spring-rolls-1.jpeg';
const rolls2 = '../assets/Products/fresh-spring-rolls-2.jpeg';
const rolls3 = '../assets/Products/fresh-spring-rolls-3.jpeg';
const rolls4 = '../assets/Products/fresh-spring-rolls-4.jpeg';
const rolls5 = '../assets/Products/fresh-spring-rolls-5.jpeg';
const rolls6 = '../assets/Products/fresh-spring-rolls-6.jpeg';
const rolls7 = '../assets/Products/fresh-spring-rolls-7.jpeg';
const rolls8 = '../assets/Products/fresh-spring-rolls-8.jpeg';
const rolls9 = '../assets/Products/fresh-spring-rolls-9.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASIL_LEAF, BLENDER, CARROT, CILANTRO, CUCUMBER, CUTTING_BOARD, HOISIN_SAUCE, KNIFE, LIGHT_SOY_SAUCE, MINT_LEAF, PEANUT_BUTTER, PIE_PAN, PLATE, PORK, POT, SHRIMP, SPRING_ROLL_RICE_WRAPPERS, STOVE, SWEET_CHILI_SAUCE, VEGETABLE_OIL, VERMICELLI_RICE_NOODLES } = require('./ingredients');

const VERMICELLI_RICE_NOODLES_SECTION = 'Vermicelli Rice Noodles';
const WRAP_SECTION = 'Wrap';
const VEGETABLES_AND_HERBS_FILLING = 'Vegetables and Herbs Filling';
const PEANUT_SAUCE = 'Peanut Sauce';
const PORK_SECTION = 'Pork';
const SHRIMP_SECTION = 'Shrimp';

module.exports = {
    cardName: 'Fresh Spring Rolls',
    name: 'Vietnamese Fresh Spring Rolls',
    img: rolls9,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.VIETNAMESE, GENRES.ASIAN],
    method: [METHODS.WRAP, METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.WRAP],
    yields: { amount: 15, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Fresh Spring Rolls', 
            link: 'https://tastesbetterfromscratch.com/fresh-spring-rolls/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Shrimp and Pork Filling', 
            link: 'https://whiteonricecouple.com/vietnamese-fresh-spring-rolls/',
            authors: ['Todd Porter', 'Diane Porter'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...VERMICELLI_RICE_NOODLES, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: '', section: VERMICELLI_RICE_NOODLES_SECTION },

        { ...CARROT, amount: 1, unit: '', additionalDetails: 'peeled and thinly sliced', section: VEGETABLES_AND_HERBS_FILLING },
        { ...CUCUMBER, amount: 1, unit: '', additionalDetails: 'peeled and thinly sliced', section: VEGETABLES_AND_HERBS_FILLING },
        { ...MINT_LEAF, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },
        { ...BASIL_LEAF, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },

        { ...PORK, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: PORK_SECTION },

        { ...SHRIMP, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SHRIMP_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SHRIMP_SECTION },

        { ...SPRING_ROLL_RICE_WRAPPERS, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: '', section: WRAP_SECTION },

        { ...SWEET_CHILI_SAUCE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PEANUT_SAUCE },
        { ...PEANUT_BUTTER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PEANUT_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEANUT_SAUCE },
        { ...HOISIN_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEANUT_SAUCE },
    ],
    appliances: [
        BLENDER,
        STOVE,
    ],
    supplies: [
        POT,
        PIE_PAN,
        PLATE,
        CUTTING_BOARD,
        KNIFE,
    ],
    directions: [
        { step: `Over medium-high heat, cook the vermicelli noodles for a few minutes or according to package instructions.`, section: VERMICELLI_RICE_NOODLES_SECTION },
        { step: `Drain and rinse in cold water.`, section: VERMICELLI_RICE_NOODLES_SECTION, img: rolls1 },

        { step: `Over medium heat, bring a pot of water to a boil.`, section: PORK_SECTION },
        { step: `Add the pork and boil until the pork is cooked through (about 15 to 25 minutes). If the pork is not submerged completely, be sure to turn to get all part of it.`, section: PORK_SECTION, img: rolls2 },
        { step: `Slice the pork into thin strips and set aside.`, section: PORK_SECTION, img: rolls3 },

        { step: `Over medium-high heat, heat up vegetable oil in a large pan.`, section: SHRIMP_SECTION },
        { step: `Add the shrimp in the pan in a single layer.`, section: SHRIMP_SECTION },
        { step: `Sear both sides until the shrimp is pink and cooked.`, section: SHRIMP_SECTION },
        { step: `Remove from heat and let cool.`, section: SHRIMP_SECTION },
        { step: `Slice in half lengthwise.`, section: SHRIMP_SECTION, img: rolls4 },

        { step: `In a blender, blend the "Peanut Sauce" ingredients until smooth.`, section: PEANUT_SAUCE, img: rolls5 },

        { step: `Gather all the "Wrap" ingredients: chopped vegetables/herbs, cooked sliced protein, and cooked rice noodles.`, section: SECTIONS.ASSEMBLE },
        { step: `In a pie pan, fill with 1 inch of warm water.`, section: SECTIONS.ASSEMBLE },
        { step: `Place one rice wrapper in the water. Let it soak for about 10 seconds.`, section: SECTIONS.ASSEMBLE, img: rolls6 },
        { step: `Place the softened rice wrapper on a plate.`, section: SECTIONS.ASSEMBLE, img: rolls7 },
        { step: `About 1/3 up from the bottom of the softened rice wrapper, start layering a few of your favorite fillings at that point.`, section: SECTIONS.ASSEMBLE, img: rolls8 },
        { step: `Fold the sides of the wrapper over the filling and begin rolling the wrapper away from you (e.g. like a burrito).`, section: SECTIONS.ASSEMBLE },
        { step: `Set each of these finished rolls on a plate.`, section: SECTIONS.ASSEMBLE },
        { step: `Enjoy these freshly made Vietnamese appetizers with the peanut sauce.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Soaking the wrappers in warm water for too long will make them too soft and can tear more easily.' },
        { note: 'The wrappers will continue to soften as you add ingredients.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};