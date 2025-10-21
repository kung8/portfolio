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
const mousse11 = '../assets/Products/chocolate-mousse-11.jpeg';
const mousse12 = '../assets/Products/chocolate-mousse-12.jpeg';
const mousse13 = '../assets/Products/chocolate-mousse-13.jpeg';
const mousse14 = '../assets/Products/chocolate-mousse-14.jpeg';
const mousse15 = '../assets/Products/chocolate-mousse-15.jpeg';
const mousse16 = '../assets/Products/chocolate-mousse-16.jpeg';
const mousse17 = '../assets/Products/chocolate-mousse-17.jpeg';
const mousse18 = '../assets/Products/chocolate-mousse-18.jpeg';
const mousse19 = '../assets/Products/chocolate-mousse-19.jpeg';
const mousse20 = '../assets/Products/chocolate-mousse-20.jpeg';
const mousse21 = '../assets/Products/chocolate-mousse-21.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    DARK_COOKING_CHOCOLATE,
    EGG,
    HEAVY_CREAM,
    RASPBERRY,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
} = require('./ingredients');

const CHOCOLATE = 'Chocolate';
const WHIPPED_CREAM = 'Whipped Cream';
const SWEETENER_SECTION = 'Sweetener';

module.exports = {
    cardName: 'Chocolate Mousse',
    name: 'Chocolate Mousse',
    img: mousse21,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.CHOCOLATE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chocolate Mousse', 
            link: "https://www.recipetineats.com/chocolate-mousse",
            author: ['Nagi Maehashi'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
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
        { step: 'Break up dark cooking chocolate bar into pieces and place in a microwavable bowl.', section: CHOCOLATE, img: mousse1 },
        { step: 'Add butter into the chocolate bar.', section: CHOCOLATE },
        { step: 'Microwave the chocolate for 30 second interval and stir in between. Continue this until the chocolate and butter have completely melted and become uniform. Set aside.', section: CHOCOLATE, img: mousse2 },
        { step: 'While the eggs are cold, separate the egg whites and yolk. Place the yolks in one bowl and whites in another.', section: SECTIONS.MAIN, img: [mousse3, mousse4] },
        { step: 'Whisk the yolks until combined.', section: SECTIONS.MAIN, img: mousse5 },
        { step: 'Beat the heavy cream and sugar in a mixing bowl until stiff peaks form. I did not have a mixer so I used the old-fashion manual whisk and arm muscles to mix this together. You will want a mixer if you do not want tired arms.', section: SECTIONS.MAIN, img: [mousse6, mousse7] },
        { step: 'Fold egg yolks into the cream (about 8 to 10 folds). Streaks will still exist.', section: SECTIONS.MAIN, img: [mousse8, mousse9, mousse10] },
        { step: 'Check the chocolate is still warm and runny. If it is not, microwave the chocolate for 5 second intervals and stir in between until chocolate is ready.', section: SECTIONS.MAIN },
        { step: 'Fold chocolate into the cream mixture (about 8 to 10 folds).', section: SECTIONS.MAIN, img: [mousse11, mousse12] },
        { step: 'Fold in 1/4 of the egg whites into the chocolate mixture (about 10 folds).', section: SECTIONS.MAIN, img: mousse13 },
        { step: 'Pour the remaining egg whites into the chocolate mixture and fold until no egg whites are visible. The egg whites might not look like it is going to combine but it will.', section: SECTIONS.MAIN, img: mousse14 },
        { step: `Add the "${SWEETENER_SECTION}" section ingredients to the mixture. This balances out the bitterness of the dark baking chocolate.`, section: SECTIONS.MAIN },
        { step: 'Divide the mousse into serving containers.', section: SECTIONS.MAIN, img: mousse15 },
        { step: 'Refrigerate for at least 6 hours.', section: SECTIONS.MAIN },
        { step: 'Combine heavy cream and sugar in a bowl.', section: WHIPPED_CREAM },
        { step: 'Whisk together until stiff peaks form. Set aside to top the mousse.', section: WHIPPED_CREAM, img: mousse16 },
        { step: 'Top the mousse with whipped cream, chopped chocolate shavings, raspberries, and sprig of mint. I used 100% cocoa dark chocolate so it was really bitter. You can use whatever preferred ratio and subsidize the amount of sweetness with the toppings.', section: SECTIONS.SERVE, img: [mousse17, mousse18, mousse19, mousse20] },
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