const smoothie = '../assets/Products/smoothie.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN, UNITS } = require('./constants');
const {
    ALMOND_MILK,
    BANANA,
    FROZEN_BERRIES,
    KALE,
    PLAIN_YOGURT,
    PEANUT_BUTTER,
} = require('./ingredients');

module.exports = {
    cardName: 'Smoothie',
    name: 'Smoothie',
    img: smoothie,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.SNACK, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PEANUT],
    yields: '40 oz',
    prepTime: '1 m',
    cookTime: '2 m',
    ingredients: [
        { ...ALMOND_MILK, amount: 2, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...BANANA, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...FROZEN_BERRIES, amount: 1, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...KALE, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...PLAIN_YOGURT, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...PEANUT_BUTTER, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'blender' },
    ],
    directions: [
        { step: 'Place bananas at the bottom on the blender.', type: SECTIONS.MAIN },
        { step: 'Add peanut butter and yogurt.', type: SECTIONS.MAIN },
        { step: 'Add mixed frozen fruits.', type: SECTIONS.MAIN },
        { step: 'Add almond milk.', type: SECTIONS.MAIN },
        { step: 'Blend until everything is well mixed.', type: SECTIONS.MAIN },
        { step: 'Slowly add each of the preferred ingredients and feel free to swap out fruits and vegetables.', type: SECTIONS.MAIN },
        { step: 'The thing to keep in mind is the liquid to solid food ratio. Too much liquid will leave a very liquidy smoothie while not enough liquid will make a terrible noise and can damage your blender blades.', type: SECTIONS.MAIN },
        { step: 'When you are satisfied with what you want inside the smoothie, begin to blend. I like to start on a blend setting with a low speed. Then as it begins to blend then I increase the speed.', type: SECTIONS.MAIN },
        { step: 'From my Jamba Juice years, if you can see a tornado inside the smoothie - it\'s perfect. I continue to follow that as I blend my smoothies.', type: SECTIONS.MAIN },
        { step: 'Enjoy the fresh, fruity sweetness and goodness!', type: SECTIONS.MAIN },
    ]
};