const cookieDough = '../assets/Products/cookie-dough.jpeg';
const cookies = '../assets/Products/chocolate-chip-cookies.jpeg';
const { MAIN } = require("./constants");

module.exports = {
    cardName: 'Chocolate Chip Cookies',
    name: 'Chocolate Chip Cookies',
    img: cookies,
    available: true,
    type: 'Dessert',
    yields: '3-4 dozens',
    prepTime: '10 m',
    cookTime: '10 m',
    ingredients: [
        { name: 'butter', amount: '1 cup', additionalDetails: 'softened', optional: false },
        { name: 'white sugar', amount: '1 cup', additionalDetails: '', optional: false },
        { name: 'packed brown sugar', amount: '1 cup', additionalDetails: '', optional: false },
        { name: 'eggs', amount: '2', additionalDetails: '', optional: false },
        { name: 'vanilla extract', amount: '2 tsp', additionalDetails: '', optional: false },
        { name: 'baking soda', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'hot water', amount: '2 tsp', additionalDetails: '', optional: false },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false },
        { name: 'flour', amount: '3 cups', additionalDetails: '', optional: false },
        { name: 'semisweet chocolate chips', amount: '2 cups', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'baking sheets' },
        { name: 'aluminum foil' },
        { name: 'large mixing bowl' },
        { name: 'small bowl' },
        { name: 'rubber spatula' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'spoon' },
    ],
    directions: [
        { step: 'Preheat oven to 350 degrees F and lay aluminum foil on baking sheets.', type: MAIN },
        { step: 'To soften butter: (1) leave in room temperature, or (2) warm in microwave for 20 - 30 seconds on 50% power (but times will vary based on the original softness of butter and microwave model).', type: MAIN },
        { step: 'Cream together the softened butter, white sugar, and brown sugar in a large mixing bowl.', type: MAIN },
        { step: 'Beat in eggs one at a time and mix in vanilla.', type: MAIN },
        { step: 'Separately combine baking soda, salt, and hot water. Wait a few seconds for the baking soda to dissolve before adding to the batter.', type: MAIN },
        { step: 'Mix flour one cup at a time into the batter.', type: MAIN },
        { step: 'Add chocolate chips.', type: MAIN },
        { step: 'Take a spoonful of batter, ball it up about an inch in diameter, and place on baking sheets (Refer to Figure 1 under Additional Resources).', type: MAIN },
        { step: 'Bake for 10 minutes.', type: MAIN },
    ],
    supplemental: [
        { title: 'Cookie Dough', content: 'I ball up the cookie dough into balls similar to this about an inch round.' }
    ]
};