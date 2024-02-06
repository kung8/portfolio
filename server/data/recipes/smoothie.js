const smoothie = '../assets/Products/smoothie.jpeg';
const { BREAKFAST, DINNER, LUNCH, MAIN, SNACK } = require('./constants');

module.exports = {
    cardName: 'Smoothie',
    name: 'Smoothie',
    img: smoothie,
    available: true,
    type: [BREAKFAST, LUNCH, SNACK, DINNER],
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
    supplies: [
        { name: 'blender' },
    ],
    directions: [
        { step: 'Place bananas at the bottom on the blender.', type: MAIN },
        { step: 'Add peanut butter and yogurt.', type: MAIN },
        { step: 'Add mixed frozen fruits.', type: MAIN },
        { step: 'Add almond milk.', type: MAIN },
        { step: 'Blend until everything is well mixed.', type: MAIN },
        { step: 'Slowly add each of the preferred ingredients and feel free to swap out fruits and vegetables.', type: MAIN },
        { step: 'The thing to keep in mind is the liquid to solid food ratio. Too much liquid will leave a very liquidy smoothie while not enough liquid will make a terrible noise and can damage your blender blades.', type: MAIN },
        { step: 'When you are satisfied with what you want inside the smoothie, begin to blend. I like to start on a blend setting with a low speed. Then as it begins to blend then I increase the speed.', type: MAIN },
        { step: 'From my Jamba Juice years, if you can see a tornado inside the smoothie - it\'s perfect. I continue to follow that as I blend my smoothies.', type: MAIN },
        { step: 'Enjoy the fresh, fruity sweetness and goodness!', type: MAIN },
    ]
};