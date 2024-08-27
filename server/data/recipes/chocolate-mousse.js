const pieces = '../assets/Products/chocolate-mousse-chocolate-pieces.jpeg';
const raspberries = '../assets/Products/chocolate-mousse-clear-raspberries.jpeg';
const cream = '../assets/Products/chocolate-mousse-cream.jpeg';
const cups = '../assets/Products/chocolate-mousse-cups.jpeg';
const whites = '../assets/Products/chocolate-mousse-egg-whites.jpeg';
const yolksMixed = '../assets/Products/chocolate-mousse-egg-yolks-mixed.jpeg';
const yolks = '../assets/Products/chocolate-mousse-egg-yolks.jpeg';
const chocolate = '../assets/Products/chocolate-mousse-folded-chocolate.jpeg';
const foldedWhites = '../assets/Products/chocolate-mousse-folded-whites.jpeg';
const foldedYolk = '../assets/Products/chocolate-mousse-folded-yolk.jpeg';
const foldedYolk2 = '../assets/Products/chocolate-mousse-folded-yolk-2.jpeg';
const melted = '../assets/Products/chocolate-mousse-melted-chocolate.jpeg';
const melting = '../assets/Products/chocolate-mousse-melting-chocolate.jpeg';
const mixedChocolate = '../assets/Products/chocolate-mousse-mixed-chocolate.jpeg';
const mousse = '../assets/Products/chocolate-mousse-mixed-mousse.jpeg';
const plated = '../assets/Products/chocolate-mousse-plated.jpeg';
const shaved = '../assets/Products/chocolate-mousse-shaved-chocolate.jpeg';
const peaks = '../assets/Products/chocolate-mousse-stiff-peaks.jpeg';
const topped = '../assets/Products/chocolate-mousse-topped.jpeg';
const whipped = '../assets/Products/chocolate-mousse-whipped-cream.jpeg';
const yolkInCream = '../assets/Products/chocolate-mousse-yolk-in-cream.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    EGGS,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    HEAVY_CREAM,
    DARK_COOKING_CHOCOLATE,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    RASPBERRIES,
} = require('./ingredients');

const CHOCOLATE = 'Chocolate';
const WHIPPED_CREAM = 'Whipped Cream';

module.exports = {
    cardName: 'Chocolate Mousse',
    name: 'Chocolate Mousse',
    img: topped,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.CHOCOLATE],
    type: [TYPES.DESSERT],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '0 m',
    websites: [
        "https://www.recipetineats.com/chocolate-mousse"
    ],
    separated: true,
    ingredients: [
        { ...EGGS, amount: '3', additionalDetails: '', section: SECTIONS.MAIN },
        { ...HEAVY_CREAM, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...DARK_COOKING_CHOCOLATE, amount: '4 oz', additionalDetails: '', section: CHOCOLATE },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: CHOCOLATE },
        { ...HEAVY_CREAM, amount: '1/2 c', additionalDetails: '', section: WHIPPED_CREAM },
        { ...WHITE_SUGAR, amount: '3 Tbsp', additionalDetails: '', section: WHIPPED_CREAM },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: '', additionalDetails: 'finely chopped', section: SECTIONS.TOPPINGS },
        { ...RASPBERRIES, amount: '', additionalDetails: 'washed', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'microwave' },
        { name: 'mixer' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: '2 small bowls' },
        { name: 'spatula' },
        { name: 'whisk' },
        { name: 'serving bowls or cups' },
    ],
    directions: [
        { step: 'Break up dark cooking chocolate bar into pieces and place in a microwavable bowl.', type: CHOCOLATE, img: pieces },
        { step: 'Add butter into the chocolate bar.', type: CHOCOLATE },
        { step: 'Microwave the chocolate for 30 second interval and stir in between. Continue this until the chocolate and butter have completely melted and become uniform. Set aside.', type: CHOCOLATE, img: [melted, melting] },
        { step: 'While the eggs are cold, separate the egg whites and yolk. Place the yolks in one bowl and whites in another.', type: SECTIONS.MAIN, img: [whites, yolks] },
        { step: 'Whisk the yolks until combined.', type: SECTIONS.MAIN, img: yolksMixed },
        { step: 'Beat the heavy cream and sugar in a mixing bowl until stiff peaks form. I did not have a mixer so I used the old-fashion manual whisk and arm muscles to mix this together. You will want a mixer if you do not want tired arms.', type: SECTIONS.MAIN, img: [cream, peaks] },
        { step: 'Fold egg yolks into the cream (about 8 to 10 folds). Streaks will still exist.', type: SECTIONS.MAIN, img: [yolkInCream, foldedYolk, foldedYolk2] },
        { step: 'Check the chocolate is still warm and runny. If it is not, microwave the chocolate for 5 second intervals and stir in between until chocolate is ready.', type: SECTIONS.MAIN },
        { step: 'Fold chocolate into the cream mixture (about 8 to 10 folds).', type: SECTIONS.MAIN, img: [chocolate, mixedChocolate] },
        { step: 'Fold in 1/4 of the egg whites into the chocolate mixture (about 10 folds).', type: SECTIONS.MAIN, img: foldedWhites },
        { step: 'Pour the remaining egg whites into the chocolate mixture and fold until no egg whites are visible. The egg whites might not look like it is going to combine but it will.', type: SECTIONS.MAIN, img: mousse },
        { step: 'Divide the mousse into serving containers.', type: SECTIONS.MAIN, img: cups },
        { step: 'Refrigerate for at least 6 hours.', type: SECTIONS.MAIN },
        { step: 'Combine heavy cream and sugar in a bowl.', type: WHIPPED_CREAM },
        { step: 'Whisk together until stiff peaks form. Set aside to top the mousse.', type: WHIPPED_CREAM, whipped },
        { step: 'Top the mousse with whipped cream, chopped chocolate shavings, raspberries, and sprig of mint. I used 100% cocoa dark chocolate so it was really bitter. You can use whatever preferred ratio and subsidize the amount of sweetness with the toppings.', type: SECTIONS.SERVE, img: [shaved, raspberries, plated] },
    ]
};