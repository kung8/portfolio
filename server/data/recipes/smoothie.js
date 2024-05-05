const smoothie = '../assets/Products/smoothie.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Smoothie',
    name: 'Smoothie',
    img: smoothie,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.SNACK, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PEANUT],
    yields: '40 oz',
    prepTime: '1 m',
    cookTime: '2 m',
    ingredients: [
        { name: 'almond milk', amount: '2 c', additionalDetails: '', optional: false },
        { name: 'bananas', amount: '2', additionalDetails: '', optional: false },
        { name: 'frozen berries', amount: '1 c', additionalDetails: '', optional: false },
        { name: 'kale', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'plain yogurt', amount: '1 spoonful of', additionalDetails: '', optional: false },
        { name: 'peanut butter', amount: '2 spoonfuls of', additionalDetails: '', optional: false },
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