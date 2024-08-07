const banhTieu = '../assets/Products/banh-tieu.jpeg';
const flat = '../assets/Products/banh-tieu-flat.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS } = require('./constants');

module.exports = {
    cardName: 'Banh Tieu',
    name: 'Vietnamese Banh Tieu',
    img: banhTieu,
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.ASIAN, GENRES.VIETNAMESE],
    method: [METHODS.DEEP_FRY],
    yields: '10 servings',
    prepTime: '10 m',
    cookTime: '7 m',
    separated: true,
    ingredients: [
        { name: 'bread flour', amount: '2 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { name: 'water', amount: '2/3 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { name: 'sugar', amount: '1/2 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { name: 'instant yeast', amount: '2 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { name: 'baking powder', amount: '2 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { name: 'sesame seed', amount: '', additionalDetails: '', section: SECTIONS.DOUGH },
        { name: 'vegetable oil', amount: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large bowl' },
        { name: 'pot' },
        { name: 'tongs' },
        { name: 'paper towels' },
        { name: 'cooling rack' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'Heat about a third of the water in the microwave for about 20 seconds until the water is warm.', type: SECTIONS.DOUGH },
        { step: 'Add 1 tablespoon of sugar and the yeast to the warm water. Let the yeast activate (bubble up), about a couple of minutes.', type: SECTIONS.DOUGH },
        { step: 'Mix the rest of the sugar with rest of the water until the sugar dissolves.', type: SECTIONS.DOUGH },
        { step: 'Mix the baking powder, flour, and salt.', type: SECTIONS.DOUGH },
        { step: 'Add the sugar water to the flour mixture. Then add the yeast mixture.', type: SECTIONS.DOUGH },
        { step: 'Knead the dough. Add a little bit of water if the dough is too dry.', type: SECTIONS.DOUGH },
        { step: 'Cover the dough and let it rise for a couple of hours, about 3 to 4 or overnight.', type: SECTIONS.DOUGH },
        { step: 'Take the dough and knead for one minute.', type: SECTIONS.DOUGH },
        { step: 'Divide to form balls about 3 inches wide.', type: SECTIONS.DOUGH },
        { step: 'Dip the balls in the sesame seeds and coat with flour.', type: SECTIONS.MAIN },
        { step: 'Flatten the ball, about 1/2 inch thick.', type: SECTIONS.MAIN },
        { step: 'Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels. Note the stacking order matters because placing the paper towels on top of the cooling rack creates steam beneath the fried dough making it soggy and not crispy.', type: SECTIONS.MAIN },
        { step: 'Heat oil over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Once the oil is hot, add the dough and it will float. Use the tongs to push down the dough.', type: SECTIONS.MAIN },
        { step: 'The dough should start to puff up, then flip.', type: SECTIONS.MAIN },
        { step: 'Fry until golden brown. The frying process doesn\'t take too long so keep an eye on it.', type: SECTIONS.MAIN },
        { step: 'Place fried bread on the cooling rack to drain the excess oil.', type: SECTIONS.MAIN, img: flat },
    ]
};