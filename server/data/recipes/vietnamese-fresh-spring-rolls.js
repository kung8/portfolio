// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { CARROTS, CUCUMBER, MINT_LEAVES, BASIL_LEAVES, CILANTRO, PORK, PEANUT_BUTTER, LIGHT_SOY_SAUCE, HOISIN_SAUCE, SWEET_CHILI_SAUCE, VERMICELLI_RICE_NOODLES, SPRING_ROLL_RICE_WRAPPERS, SHRIMP, VEGETABLE_OIL } = require('./ingredients');

const VERMICELLI_RICE_NOODLES_SECTION = 'Vermicelli Rice Noodles';
const WRAP_SECTION = 'Wrap';
const VEGETABLES_AND_HERBS_FILLING = 'Vegetables and Herbs Filling';
const PEANUT_SAUCE = 'Peanut Sauce';
const PORK_SECTION = 'Pork';
const SHRIMP_SECTION = 'Shrimp';

module.exports = {
    wip: true,
    cardName: 'Fresh Spring Rolls',
    name: 'Vietnamese Fresh Spring Rolls',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.VIETNAMESE, GENRES.ASIAN],
    method: [METHODS.WRAP, METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.WRAP],
    yields: ' servings',
    prepTime: '15 m',
    cookTime: '25 m',
    websites: [
        { label: 'Fresh Spring Rolls', link: 'https://tastesbetterfromscratch.com/fresh-spring-rolls/' },
        { label: 'Shrimp and Pork Filling', link: 'https://whiteonricecouple.com/vietnamese-fresh-spring-rolls/' }
    ],
    separated: true,
    ingredients: [
        { ...VERMICELLI_RICE_NOODLES, amount: '1 package', additionalDetails: '', section: VERMICELLI_RICE_NOODLES_SECTION },

        { ...CARROTS, amount: '1', additionalDetails: 'peeled and thinly sliced', section: VEGETABLES_AND_HERBS_FILLING },
        { ...CUCUMBER, amount: '1', additionalDetails: 'peeled and thinly sliced', section: VEGETABLES_AND_HERBS_FILLING },
        { ...MINT_LEAVES, amount: '1 bunch', additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },
        { ...BASIL_LEAVES, amount: '1 bunch', additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },
        { ...CILANTRO, amount: '1 bunch', additionalDetails: '', section: VEGETABLES_AND_HERBS_FILLING },

        { ...PORK, amount: '1/2 lb', additionalDetails: '', section: PORK_SECTION },

        { ...SHRIMP, amount: '1/2 lb', additionalDetails: 'peeled and deveined', section: SHRIMP_SECTION },
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', section: SHRIMP_SECTION },

        { ...SPRING_ROLL_RICE_WRAPPERS, amount: '1 package', additionalDetails: '', section: WRAP_SECTION },

        { ...SWEET_CHILI_SAUCE, amount: '3/4 c', additionalDetails: '', section: PEANUT_SAUCE },
        { ...PEANUT_BUTTER, amount: '1/3 c', additionalDetails: '', section: PEANUT_SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: '1/2 tsp', additionalDetails: '', section: PEANUT_SAUCE },
        { ...HOISIN_SAUCE, amount: '1/2 tsp', additionalDetails: '', section: PEANUT_SAUCE },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'pie pan' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Over medium-high heat, cook the vermicelli noodles for a few minutes or according to package instructions.', type: VERMICELLI_RICE_NOODLES_SECTION },
        { step: 'Drain and rinse in cold water.', type: VERMICELLI_RICE_NOODLES_SECTION },

        { step: 'Over medium heat, bring a pot of water to a boil.', type: PORK_SECTION },
        { step: 'Add the pork and boil until the pork is cooked through (about 15 to 25 minutes).', type: PORK_SECTION },
        { step: 'Slice the pork into thin strips and set aside.', type: PORK_SECTION },

        { step: 'Over medium-high heat, heat up vegetable oil in a large pan.', type: SHRIMP_SECTION },
        { step: 'Add the shrimp in the pan in a single layer.', type: SHRIMP_SECTION },
        { step: 'Sear both sides until the shrimp is pink and cooked.', type: SHRIMP_SECTION },
        { step: 'Remove from heat and let cool.', type: SHRIMP_SECTION },
        { step: 'Slice in half lengthwise.', type: SHRIMP_SECTION },

        { step: 'Gather all the "Wrap" ingredients: chopped vegetables/herbs, cooked sliced protein, and cooked rice noodles.', type: SECTIONS.ASSEMBLY },
        { step: 'In a pie pan, fill with 1 inch of warm water.', type: SECTIONS.ASSEMBLY },
        { step: 'Place one rice wrapper in the water. Let it soak for 10 to 15 seconds.', type: SECTIONS.ASSEMBLY },
        { step: 'Place the softened rice wrapper on a plate.', type: SECTIONS.ASSEMBLY },
        { step: 'About 1/3 up from the bottom of the softened rice wrapper, start layering a few of your favorite fillings at that point.', type: SECTIONS.ASSEMBLY },
        { step: 'Fold the sides of the wrapper over the filling and begin rolling the wrapper away from you (e.g. like a burrito).', type: SECTIONS.ASSEMBLY },
        { step: 'Set each of these finished rolls on a plate.', type: SECTIONS.ASSEMBLY },
        { step: 'In a blender, blend the "Peanut Sauce" ingredients until smooth.', type: PEANUT_SAUCE },
        { step: 'Enjoy these freshly made Vietnamese appetizers with the peanut sauce.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Soaking the wrappers in warm water for too long will make them too soft and can tear more easily.' },
        { note: 'The wrappers will continue to soften as you add ingredients.' },
    ]
};