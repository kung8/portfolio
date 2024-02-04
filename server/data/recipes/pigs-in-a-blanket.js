const pigsInABlanket = '../assets/Products/pigs-in-a-blanket.jpeg';

module.exports = {
    cardName: 'Pigs In A Blanket',
    name: 'Pigs In A Blanket',
    img: pigsInABlanket,
    available: true,
    type: 'Appetizer',
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'croissant dough', amount: '2 can of', additionalDetails: '', optional: false },
        { name: 'egg', amount: '2', additionalDetails: '', optional: false },
        { name: 'mini hot dogs', amount: '14 oz', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'cutting board + knife' },
        { name: 'basting brush' },
        { name: 'plate' },
    ],
    directions: [
        'Preheat oven to 375ºF and line baking sheet with aluminum foil.',
        'Tubs of croissant dough usually make about 8 croissants. Cut each croissant dough triangle into thirds.',
        'Place hot dog on one end of the croissant piece and roll until it is snugly wrapped inside its blanket.',
        'Separate the egg white and the yolk. Lightly brush some of the yolk over the blanket to create a seal.',
        'Bake for about 12 - 15 min or until golden brown.',
        'Serve with your favorite condiment, and enjoy this easy tailgate hors d\'oeuvre!',
    ],
};