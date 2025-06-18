const pie1 = '../assets/Products/biscoff-cookie-pie-1.jpeg';
const pie2 = '../assets/Products/biscoff-cookie-pie-2.jpeg';
const pie3 = '../assets/Products/biscoff-cookie-pie-3.jpeg';
const pie4 = '../assets/Products/biscoff-cookie-pie-4.jpeg';
const pie5 = '../assets/Products/biscoff-cookie-pie-5.jpeg';
const pie6 = '../assets/Products/biscoff-cookie-pie-6.jpeg';
const pie7 = '../assets/Products/biscoff-cookie-pie-7.jpeg'; // TODO: get a photo of the plated pie
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { BISCOFF_COOKIES, UNSALTED_BUTTER, BISCOFF_BUTTER, WHIPPED_CREAM, SEMI_SWEET_CHOCOLATE_CHIPS, VANILLA_EXTRACT, WHITE_SUGAR, CREAM_CHEESE, SALT, COOKIE_BUTTER } = require('./ingredients');

const CHOCOLATE_GANACHE = 'Chocolate Ganache';
const COOKIE_BUTTER_DRIZZLE = 'Cookie Butter Drizzle';
const WHIPPED_CREAM_SECTION = 'Whipped Cream';

module.exports = {
    cardName: 'Biscoff Cookie Pie',
    name: 'Biscoff Cookie Pie',
    img: pie6,
    recipeAuthor: '',
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    // protein: [],
    type: [TYPES.PIE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Biscoff Pie', link: 'https://wildwildwhisk.com/cookie-butter-pie-pops' },
        // { label: 'Biscoff Pie', link: 'https://www.crazyforcrust.com/frozen-biscoff-pie/' }
    ],
    separated: true,
    ingredients: [
        { ...BISCOFF_COOKIES, amount: 30, unit: '', additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.CRUST },

        { ...WHIPPED_CREAM, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.SPLASH, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'room temperature', section: SECTIONS.FILLING },
        { ...BISCOFF_BUTTER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },

        { ...WHIPPED_CREAM, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_GANACHE },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_GANACHE },

        { ...COOKIE_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COOKIE_BUTTER_DRIZZLE },

        { ...WHIPPED_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'crushed', optional: true, section: WHIPPED_CREAM_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.SPLASH, additionalDetails: '', optional: true, section: WHIPPED_CREAM_SECTION },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: true, section: WHIPPED_CREAM_SECTION },

        { ...BISCOFF_COOKIES, amount: '', unit: '', additionalDetails: 'crushed', optional: true, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'refrigerator' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'gallon-size ziploc bag' },
        { name: 'rolling pin' },
        { name: 'pie pan' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Place Biscoff cookies in a gallon size ziploc bag.', section: SECTIONS.CRUST },
        { step: 'Crush the cookies with a rolling pin.', section: SECTIONS.CRUST },
        { step: 'Combine the cookie crumbs with melted butter and salt.', section: SECTIONS.CRUST, img: pie1 },
        { step: 'Press the mixture into a 9-inch pie pan.', section: SECTIONS.CRUST, img: pie2 },
        { step: 'Bake the crust for 10 minutes at 375ºF optionally to make the pie crust crispy.', section: SECTIONS.CRUST },
        { step: 'Chill in the freezer.', section: SECTIONS.CRUST },

        { step: 'In a stand mixer, whisk together whipped cream, vanilla and sugar until soft peaks form.', section: SECTIONS.FILLING },
        { step: 'Transfer whipped cream mixture into a mixing bowl.', section: SECTIONS.FILLING },
        { step: 'In the stand mixer bowl, add the cream cheese and cookie butter. Beat.', section: SECTIONS.FILLING, img: pie3 },
        { step: 'Fold in the whipped cream mixture into the cookie butter mixture.', section: SECTIONS.FILLING },
        { step: 'Pour into the crust.', section: SECTIONS.FILLING, img: pie4 },
        { step: 'Smooth the top.', section: SECTIONS.FILLING },
        { step: 'Chill in the freezer.', section: SECTIONS.FILLING },

        { step: 'In a bowl, heat the cream in the microwave (about 1 minute).', section: CHOCOLATE_GANACHE },
        { step: 'Add the chocolate. Let it melt (for about 1 to 2 minutes). Mix.', section: CHOCOLATE_GANACHE },
        { step: 'Spread it on top of the pie.', section: CHOCOLATE_GANACHE, img: pie5 },
        { step: 'Chill in the freezer.', section: CHOCOLATE_GANACHE },

        { step: 'In a bowl, microwave cookie butter until melted (about 10 to 15 seconds).', section: COOKIE_BUTTER_DRIZZLE },
        { step: 'Drizzle melted cookie butter over the pie using a piping bag.', section: COOKIE_BUTTER_DRIZZLE },
        { step: 'Chill in the freezer.', section: COOKIE_BUTTER_DRIZZLE },

        { step: 'In a stand mixer, combine the "Whipped Cream" ingredients until stiff peaks form.', section: WHIPPED_CREAM_SECTION },
        { step: 'Pipe whipped cream around the border of the pie.', section: WHIPPED_CREAM_SECTION },
        { step: 'Freeze for at least 8 hours and keep frozen until ready to serve.', section: WHIPPED_CREAM_SECTION },

        { step: 'Enjoy this sweet dessert!', section: SECTIONS.SERVE, img: pie7 },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Thaw it enough to cut through the crust.',
        },
    ],
    reheat: null,
    mealPrep: true,
};