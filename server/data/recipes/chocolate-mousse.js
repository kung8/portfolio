const mousse1 = '../assets/Products/chocolate-mousse-1.jpeg';
const mousse2 = '../assets/Products/chocolate-mousse-2.jpeg';
const mousse3 = '../assets/Products/chocolate-mousse-3.jpeg';
const mousse4 = '../assets/Products/chocolate-mousse-4.jpeg';
const mousse5 = '../assets/Products/chocolate-mousse-5.jpeg';
const mousse6 = '../assets/Products/chocolate-mousse-6.jpeg';
const mousse7 = '../assets/Products/chocolate-mousse-7.jpeg';
const mousse8 = '../assets/Products/chocolate-mousse-8.jpeg';
const mousse9 = '../assets/Products/chocolate-mousse-9.jpeg';
const mousse10 = '../assets/Products/chocolate-mousse-10.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    DARK_COOKING_CHOCOLATE,
    EGG,
    HEAVY_CREAM,
    MICROWAVE,
    MIXER,
    MIXING_BOWL,
    RASPBERRY,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    SERVING_BOWL,
    SMALL_BOWL,
    SPATULA,
    UNSALTED_BUTTER,
    WHISK,
    WHITE_SUGAR,
} = require('./ingredients');

const CHOCOLATE = 'Chocolate';
const WHIPPED_CREAM = 'Whipped Cream';
const SWEETENER_SECTION = 'Sweetener';

module.exports = {
    cardName: 'Chocolate Mousse',
    name: 'Chocolate Mousse',
    img: mousse10,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.CHOCOLATE],
    type: [TYPES.DESSERT],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chocolate Mousse', 
            link: "https://www.recipetineats.com/chocolate-mousse",
            authors: ['Nagi Maehashi'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...DARK_COOKING_CHOCOLATE, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CHOCOLATE },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHOCOLATE },
        
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEETENER_SECTION },

        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WHIPPED_CREAM },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: WHIPPED_CREAM },

        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: '', unit: '', additionalDetails: 'finely chopped', section: SECTIONS.TOPPINGS },
        { ...RASPBERRY, amount: '', unit: '', additionalDetails: 'washed', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        MICROWAVE,
        MIXER,
    ],
    supplies: [
        {...MIXING_BOWL, amount: 2 },
        { ...SMALL_BOWL, amount: 2 },
        SPATULA,
        WHISK,
        SERVING_BOWL,
    ],
    directions: [
        { step: `Break up dark cooking chocolate bar into pieces and place in a microwavable bowl.`, section: CHOCOLATE },
        { step: `Add butter into the chocolate bar.`, section: CHOCOLATE },
        { step: `Microwave the chocolate for 30 second interval and stir in between. Continue this until the chocolate and butter have completely melted and become uniform. Set aside.`, section: CHOCOLATE },
        { step: `While the eggs are cold, separate the egg whites and yolk. Place the yolks in one bowl and whites in another.`, section: SECTIONS.MAIN },
        { step: `Whisk the yolks until combined.`, section: SECTIONS.MAIN },
        { step: `Beat the heavy cream and sugar in a mixing bowl until stiff peaks form. I did not have a mixer so I used the old-fashion manual whisk and arm muscles to mix this together. You will want a mixer if you do not want tired arms.`, section: SECTIONS.MAIN, img: mousse1 },
        { step: `Fold egg yolks into the cream (about 8 to 10 folds). Streaks will still exist.`, section: SECTIONS.MAIN, img: [mousse2, mousse3, mousse4] },
        { step: `Check the chocolate is still warm and runny. If it is not, microwave the chocolate for 5 second intervals and stir in between until chocolate is ready.`, section: SECTIONS.MAIN },
        { step: `Fold chocolate into the cream mixture (about 8 to 10 folds).`, section: SECTIONS.MAIN, img: [mousse5, mousse6] },
        { step: `Fold in 1/4 of the egg whites into the chocolate mixture (about 10 folds).`, section: SECTIONS.MAIN, img: mousse7 },
        { step: `Pour the remaining egg whites into the chocolate mixture and fold until no egg whites are visible. The egg whites might not look like it is going to combine but it will.`, section: SECTIONS.MAIN, img: mousse8 },
        { step: `Add the "${SWEETENER_SECTION}" section ingredients to the mixture. This balances out the bitterness of the dark baking chocolate.`, section: SECTIONS.MAIN },
        { step: `Divide the mousse into serving containers.`, section: SECTIONS.MAIN },
        { step: `Refrigerate for at least 6 hours.`, section: SECTIONS.MAIN },
        { step: `Combine heavy cream and sugar in a bowl.`, section: WHIPPED_CREAM },
        { step: `Whisk together until stiff peaks form. Set aside to top the mousse.`, section: WHIPPED_CREAM },
        { step: `Top the mousse with whipped cream, chopped chocolate shavings, raspberries, and sprig of mint. I used 100% cocoa dark chocolate so it was really bitter. You can use whatever preferred ratio and subsidize the amount of sweetness with the toppings.`, section: SECTIONS.SERVE, img: mousse9 },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};