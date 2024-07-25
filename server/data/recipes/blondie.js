const batterPan = '../assets/Products/blondie-batter-pan.jpeg';
const batter = '../assets/Products/blondie-batter.jpeg';
const butter = '../assets/Products/blondie-butter.jpeg';
const dry = '../assets/Products/blondie-dry.jpeg';
const eggs = '../assets/Products/blondie-eggs.jpeg';
const flour = '../assets/Products/blondie-flour.jpeg';
const pan = '../assets/Products/blondie-pan.jpeg';
const plated = '../assets/Products/blondie-plated.jpeg';
const sugars = '../assets/Products/blondie-sugars.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Blondie',
    name: 'Blondie',
    img: plated,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.DESSERT],
    yields: '18 servings',
    prepTime: '10 m',
    cookTime: '30 m',
    websites: ["https://sugarspunrun.com/blondies-recipe/"],
    separated: false,
    ingredients: [
        { name: 'unsalted butter', amount: '1 c', additionalDetails: 'melted', section: SECTIONS.MAIN },
        { name: 'brown sugar', amount: '1 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'sugar', amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'eggs', amount: '2', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'egg yolk', amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'vanilla extract', amount: '2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'all-purpose flour', amount: '2 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'cornstarch', amount: '2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'baking powder', amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'chocolate chips', amount: '2/3 c', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'spatula' },
        { name: 'baking pan' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Melt butter.', type: SECTIONS.MAIN, img: butter },
        { step: 'In a mixing bowl, combine melted butter and both sugars until well mixed.', type: SECTIONS.MAIN, img: sugars },
        { step: 'Add eggs, yolk and vanilla. Combine.', type: SECTIONS.MAIN, img: eggs },
        { step: 'In a medium bowl, combine flour, cornstarch, baking powder and salt.', type: SECTIONS.MAIN, img: dry },
        { step: 'Slowly combine the dry ingredients into the wet ingredients.', type: SECTIONS.MAIN, img: flour },
        { step: 'Fold in chocolate chips or other desired fillings.', type: SECTIONS.MAIN, img: batter },
        { step: 'Pour in batter in a baking pan. Line with parchment paper if using a metal pan.', type: SECTIONS.MAIN, img: batterPan },
        { step: 'Bake for 25 to 30 minutes or until toothpick comes out clean when inserted.', type: SECTIONS.MAIN, img: pan },
        { step: 'Enjoy these tasty, simple and light desserts.', type: SECTIONS.MAIN },
    ],
    notes: [
        'The melted butter and the extra yolk are what give these blondies their chewy texture.',
    ]
};