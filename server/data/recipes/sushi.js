const sushi = '../assets/Products/sushi.jpeg';
const { MAIN } = require('./constants');

module.exports = {
    cardName: 'Sushi',
    name: 'Sushi',
    recipeCredit: 'Aldin Pope',
    img: sushi,
    available: true,
    type: 'Lunch / Dinner',
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'seaweed', amount: '8 sheets', additionalDetails: '', optional: false },
        { name: 'cooked short-grained rice', amount: '4 c', additionalDetails: 'room temperature', optional: false },
        { name: 'vinegar', amount: '7 Tbsp', additionalDetails: '', optional: false },
        { name: 'sugar', amount: '7 Tbsp', additionalDetails: '', optional: false },
        { name: 'salt', amount: '1 Tbsp + 1 tsp', additionalDetails: '', optional: false },
        { name: 'avocado', amount: '2', additionalDetails: 'sliced', optional: false },
        { name: 'cucumber', amount: '1', additionalDetails: 'sliced', optional: false },
        { name: 'imitation crab meat', amount: '8 oz', additionalDetails: 'sliced', optional: false },
        { name: 'wasabi (optional)', amount: '', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'cutting board and knife' },
        { name: 'sushi mat' },
        { name: 'plates' },
    ],
    directions: [
        { step: 'Mix in sugar, salt, and vinegar until sugar dissolves.', type: MAIN },
        { step: 'Mix this into the rice (make sure that the rice is close to room temperature to prevent the seaweed from shriveling up).', type: MAIN },
        { step: 'Slice the avocado, cucumber, and imitation crab and set aside to be placed inside the sushi rolls.', type: MAIN },
        { step: 'Place the shiny side of the seaweed on the bottom (so it will be on the outside when it\'s rolled up).', type: MAIN },
        { step: 'The seaweed lines should be perpendicular to the sushi mat\'s lines.', type: MAIN },
        { step: 'Place a light layer of rice on the seaweed covering the entire seaweed. Note: the more rice you add the less other ingredients you can fit.', type: MAIN },
        { step: 'Starting about 1/3 the way up, place a few strips of imitation crab, cucumber, and avocado, making sure to not pack it too much.', type: MAIN },
        { step: 'Fold the sushi mat over the newly placed interior ingredients to secure the roll. Then pull back the mat and roll up some of it so that it will not get caught inside the roll.', type: MAIN },
        { step: 'Continue rolling up the sushi roll, and pulling back the mat as needed.', type: MAIN },
        { step: 'Place the finished sushi rolls on a plate and repeat these steps until all the sushi rolls are completed.', type: MAIN },
        { step: 'Enjoy this American-adapted Japanese dish with some delicious, spicy wasabi. This type of sushi is called a California Roll.', type: MAIN },
    ]
};