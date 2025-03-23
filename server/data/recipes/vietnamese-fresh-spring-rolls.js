// const rolls1 = '../assets/Products/fresh-spring-rolls-1.jpeg';
// const rolls2 = '../assets/Products/fresh-spring-rolls-2.jpeg';
// const rolls3 = '../assets/Products/fresh-spring-rolls-3.jpeg';
// const rolls4 = '../assets/Products/fresh-spring-rolls-4.jpeg';
// const rolls5 = '../assets/Products/fresh-spring-rolls-5.jpeg';
const rolls6 = '../assets/Products/fresh-spring-rolls-6.jpeg';
const rolls9 = '../assets/Products/fresh-spring-rolls-9.jpeg';
const rolls10 = '../assets/Products/fresh-spring-rolls-10.jpeg';
const fillings1 = '../assets/Products/fresh-spring-rolls-fillings-1.jpeg';
const fillings2 = '../assets/Products/fresh-spring-rolls-fillings-2.jpeg';
const fillings3 = '../assets/Products/fresh-spring-rolls-fillings-3.jpeg';
const fillings6 = '../assets/Products/fresh-spring-rolls-fillings-6.jpeg';
const fillings7 = '../assets/Products/fresh-spring-rolls-fillings-7.jpeg';
const fillings8 = '../assets/Products/fresh-spring-rolls-fillings-8.jpeg';
const fillings9 = '../assets/Products/fresh-spring-rolls-fillings-9.jpeg';
const fillings10 = '../assets/Products/fresh-spring-rolls-fillings-10.jpeg';
const fillings11 = '../assets/Products/fresh-spring-rolls-fillings-11.jpeg';
const fillings12 = '../assets/Products/fresh-spring-rolls-fillings-12.jpeg';
const fillings14 = '../assets/Products/fresh-spring-rolls-fillings-14.jpeg';
const sauce2 = '../assets/Products/fresh-spring-rolls-sauce-2.jpeg';
const sauce3 = '../assets/Products/fresh-spring-rolls-sauce-3.jpeg';
const wrap1 = '../assets/Products/fresh-spring-rolls-wrap-1.jpeg';
const wrap2 = '../assets/Products/fresh-spring-rolls-wrap-2.jpeg';
const wrap3 = '../assets/Products/fresh-spring-rolls-wrap-3.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const { CARROTS, CUCUMBER, MINT_LEAVES, BASIL_LEAVES, CILANTRO, PORK, PEANUT_BUTTER, LIGHT_SOY_SAUCE, HOISIN_SAUCE, SWEET_CHILI_SAUCE, VERMICELLI_RICE_NOODLES, SPRING_ROLL_RICE_WRAPPERS, SHRIMP, VEGETABLE_OIL } = require('./ingredients');

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
    prepTime: '15 m',
    cookTime: '25 m',
    websites: [
        { label: 'Fresh Spring Rolls', link: 'https://tastesbetterfromscratch.com/fresh-spring-rolls/' },
        { label: 'Shrimp and Pork Filling', link: 'https://whiteonricecouple.com/vietnamese-fresh-spring-rolls/' }
    ],
    separated: true,
    ingredients: [
        { ...VERMICELLI_RICE_NOODLES, amount: 1, unit: UNITS.PACKAGE, additionalDetails: '', section: VERMICELLI_RICE_NOODLES_SECTION },

        { ...CARROTS, amount: 1, unit: '', additionalDetails: 'peeled and thinly sliced', section: VEGETABLES_AND_HERBS_FILLING },
        { ...CUCUMBER, amount: 1, unit: '', additionalDetails: 'peeled and thinly sliced', section: VEGETABLES_AND_HERBS_FILLING },
        { ...MINT_LEAVES, amount: 1, unit: UNITS.BUNCH, additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },
        { ...BASIL_LEAVES, amount: 1, unit: UNITS.BUNCH, additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },
        { ...CILANTRO, amount: 1, unit: UNITS.BUNCH, additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },

        { ...PORK, amount: 1 / 2, unit: UNITS.POUND, additionalDetails: '', section: PORK_SECTION },

        { ...SHRIMP, amount: 1 / 2, unit: UNITS.POUND, additionalDetails: 'peeled and deveined', section: SHRIMP_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: SHRIMP_SECTION },

        { ...SPRING_ROLL_RICE_WRAPPERS, amount: 1, unit: UNITS.PACKAGE, additionalDetails: '', section: WRAP_SECTION },

        { ...SWEET_CHILI_SAUCE, amount: 3 / 4, unit: UNITS.CUP, additionalDetails: '', section: PEANUT_SAUCE },
        { ...PEANUT_BUTTER, amount: 1 / 3, unit: UNITS.CUP, additionalDetails: '', section: PEANUT_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: PEANUT_SAUCE },
        { ...HOISIN_SAUCE, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: PEANUT_SAUCE },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'pie pan' },
        { name: 'plate' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Over medium-high heat, cook the vermicelli noodles for a few minutes or according to package instructions.', type: VERMICELLI_RICE_NOODLES_SECTION, img: fillings12 },
        { step: 'Drain and rinse in cold water.', type: VERMICELLI_RICE_NOODLES_SECTION, img: fillings14 },

        { step: 'Over medium heat, bring a pot of water to a boil.', type: PORK_SECTION, img: fillings1 },
        { step: 'Add the pork and boil until the pork is cooked through (about 15 to 25 minutes). If the pork is not submerged completely, be sure to turn to get all part of it.', type: PORK_SECTION, img: [fillings2, fillings3] },
        { step: 'Slice the pork into thin strips and set aside.', type: PORK_SECTION, img: [fillings10, fillings11] },

        { step: 'Over medium-high heat, heat up vegetable oil in a large pan.', type: SHRIMP_SECTION, img: fillings6 },
        { step: 'Add the shrimp in the pan in a single layer.', type: SHRIMP_SECTION, img: fillings7 },
        { step: 'Sear both sides until the shrimp is pink and cooked.', type: SHRIMP_SECTION, img: fillings8 },
        { step: 'Remove from heat and let cool.', type: SHRIMP_SECTION },
        { step: 'Slice in half lengthwise.', type: SHRIMP_SECTION, img: fillings9 },

        { step: 'In a blender, blend the "Peanut Sauce" ingredients until smooth.', type: PEANUT_SAUCE, img: [sauce2, sauce3] },

        { step: 'Gather all the "Wrap" ingredients: chopped vegetables/herbs, cooked sliced protein, and cooked rice noodles.', type: SECTIONS.ASSEMBLY },
        { step: 'In a pie pan, fill with 1 inch of warm water.', type: SECTIONS.ASSEMBLY, img: wrap1 },
        { step: 'Place one rice wrapper in the water. Let it soak for about 10 seconds.', type: SECTIONS.ASSEMBLY, img: wrap2 },
        { step: 'Place the softened rice wrapper on a plate.', type: SECTIONS.ASSEMBLY, img: wrap3 },
        { step: 'About 1/3 up from the bottom of the softened rice wrapper, start layering a few of your favorite fillings at that point.', type: SECTIONS.ASSEMBLY, img: rolls6 },
        { step: 'Fold the sides of the wrapper over the filling and begin rolling the wrapper away from you (e.g. like a burrito).', type: SECTIONS.ASSEMBLY },
        { step: 'Set each of these finished rolls on a plate.', type: SECTIONS.ASSEMBLY, img: rolls10 },
        { step: 'Enjoy these freshly made Vietnamese appetizers with the peanut sauce.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Soaking the wrappers in warm water for too long will make them too soft and can tear more easily.' },
        { note: 'The wrappers will continue to soften as you add ingredients.' },
    ]
};