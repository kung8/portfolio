const scrambledEggs = '../assets/Products/scrambled-eggs.jpeg';
const { CATEGORIES, SECTIONS } = require('./constants');

module.exports = {
    cardName: 'Scrambled Eggs',
    name: 'Scrambled Eggs',
    img: scrambledEggs,
    available: true,
    type: [CATEGORIES.BREAKFAST],
    yields: '1 serving',
    prepTime: '5 m',
    cookTime: '12 - 15 m',
    ingredients: [
        { name: 'eggs', amount: '3', additionalDetails: '', optional: false },
        { name: 'milk', amount: '1/4 c', additionalDetails: '', optional: false },
        { name: 'sour cream', amount: '1 spoonful', additionalDetails: '', optional: false },
        { name: 'green pepper', amount: '1/8', additionalDetails: 'diced', optional: false },
        { name: 'onion', amount: '1/8', additionalDetails: 'diced', optional: false },
        { name: 'roma tomato', amount: '1/8', additionalDetails: 'diced', optional: false },
        { name: 'cooked ham', amount: '1 slice', additionalDetails: 'diced', optional: false },
        { name: 'butter (for pan)', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'basil', amount: '', additionalDetails: 'to taste', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'frying pan' },
        { name: 'cutting board and knife' },
        { name: 'spatula' },
        { name: 'measuring cups' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Mix together the eggs, milk, sour cream, salt, pepper, and basil. Allow the seasonings some time to enrich the flavor.', type: SECTIONS.MAIN },
        { step: 'While the seasonings are doing their thing, prep all the cutting of these ingredients (and any additional ingredients that you may want to add to your eggs). Be sure any meats are cooked or else you will need to add some additional time for those ingredients to cook.', type: SECTIONS.MAIN },
        { step: 'Once the ingredients are prepped, heat up a pan over medium-high heat. Add just a little butter when the pan is hot.', type: SECTIONS.MAIN },
        { step: 'Once butter has melted, add the vegetables and ham being sure they are spread around the pan to ensure proper browning.', type: SECTIONS.MAIN },
        { step: 'Cook for about 3 - 4 minutes being sure to stir occasionally to prevent burnt pieces.', type: SECTIONS.MAIN },
        { step: 'Now pour in the egg batter over the vegetables.', type: SECTIONS.MAIN },
        { step: 'While still keeping it over the heat, tilt and angle the pan so the runny egg on top can spread to more parts of the pan and you can even take the spatula and lift the edges of the cooking egg and let gravity do its job to have the runny egg batter fill underneath it. Allow to cook for just a few minutes.', type: SECTIONS.MAIN },
        { step: 'Start scrambling the eggs and continue to cook until the egg pieces are brownish-yellow (and you can cook them to your preferred egg state).', type: SECTIONS.MAIN },
        { step: 'Serve and enjoy this nice warm start to a beautiful day!', type: SECTIONS.MAIN },
    ]
}