const pie1 = '../assets/Products/biscoff-cookie-pie-1.jpeg';
const pie2 = '../assets/Products/biscoff-cookie-pie-2.jpeg';
// const pie3 = '../assets/Products/biscoff-cookie-pie-3.jpeg'; // TODO: get a photo of the filling ingredients
const pie4 = '../assets/Products/biscoff-cookie-pie-4.jpeg';
const pie5 = '../assets/Products/biscoff-cookie-pie-5.jpeg'; // TODO: not sure if adding a layer of chocolate is necessary
const pie6 = '../assets/Products/biscoff-cookie-pie-6.jpeg'; // TODO: get a photo of the finished pie
const pie7 = '../assets/Products/biscoff-cookie-pie-7.jpeg'; // TODO: get a photo of the plated pie
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BISCOFF_COOKIES, UNSALTED_BUTTER, BISCOFF_BUTTER, WHIPPED_CREAM, SEMI_SWEET_CHOCOLATE_CHIPS, VANILLA_EXTRACT, WHITE_SUGAR, CREAM_CHEESE, SALT, COOKIE_BUTTER } = require('./ingredients');

const CHOCOLATE_GANACHE = 'Chocolate Ganache';
const COOKIE_BUTTER_DRIZZLE = 'Cookie Butter Drizzle';
const WHIPPED_CREAM_SECTION = 'Whipped Cream';

module.exports = {
    cardName: 'Biscoff Cookie Pie',
    name: 'Biscoff Cookie Pie',
    img: pie6,
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    // protein: [],
    type: [TYPES.PIE],
    yields: '10 servings',
    prepTime: '30 m',
    cookTime: '0 m',
    websites: [
        { label: 'Biscoff Pie', link: 'https://wildwildwhisk.com/cookie-butter-pie-pops' },
        // { label: 'Biscoff Pie', link: 'https://www.crazyforcrust.com/frozen-biscoff-pie/' }
    ],
    separated: true,
    ingredients: [
        { ...BISCOFF_COOKIES, amount: '30', additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 'pinch', additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: '6 Tbsp', additionalDetails: 'melted', section: SECTIONS.CRUST },

        { ...WHIPPED_CREAM, amount: '3/4 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...VANILLA_EXTRACT, amount: 'splash of', additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: '6 oz', additionalDetails: 'room temperature', section: SECTIONS.FILLING },
        { ...BISCOFF_BUTTER, amount: '3/4 c', additionalDetails: '', section: SECTIONS.FILLING },

        { ...WHIPPED_CREAM, amount: '1/4 c', additionalDetails: '', section: CHOCOLATE_GANACHE },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: '2/3 c', additionalDetails: '', section: CHOCOLATE_GANACHE },

        { ...COOKIE_BUTTER, amount: '3 Tbsp', additionalDetails: '', section: COOKIE_BUTTER_DRIZZLE },

        { ...WHIPPED_CREAM, amount: '1/2 c', additionalDetails: 'crushed', optional: true, section: WHIPPED_CREAM },
        { ...VANILLA_EXTRACT, amount: 'splash of', additionalDetails: '', optional: true, section: WHIPPED_CREAM },
        { ...WHITE_SUGAR, amount: '1 Tbsp', additionalDetails: '', optional: true, section: WHIPPED_CREAM },

        { ...BISCOFF_COOKIES, amount: '', additionalDetails: 'crushed', optional: true, section: SECTIONS.TOPPINGS },
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
        { step: 'Place Biscoff cookies in a gallon size ziploc bag.', type: SECTIONS.CRUST },
        { step: 'Crush the cookies with a rolling pin.', type: SECTIONS.CRUST },
        { step: 'Combine the cookie crumbs with melted butter and salt.', type: SECTIONS.CRUST, img: pie1 },
        { step: 'Press the mixture into a 9-inch pie pan.', type: SECTIONS.CRUST, img: pie2 },
        { step: 'Bake the crust for 10 minutes at 375ºF optionally to make the pie crust crispy.', type: SECTIONS.CRUST, img: pie2 },
        { step: 'Chill in the freezer.', type: SECTIONS.CRUST },

        { step: 'In a stand mixer, whisk together whipped cream, vanilla and sugar until soft peaks form.', type: SECTIONS.FILLING },
        { step: 'Transfer whipped cream mixture into a mixing bowl.', type: SECTIONS.FILLING },
        { step: 'In the stand mixer bowl, add the cream cheese and cookie butter. Beat.', type: SECTIONS.FILLING },
        { step: 'Fold in the whipped cream mixture into the cookie butter mixture.', type: SECTIONS.FILLING },
        { step: 'Pour into the crust.', type: SECTIONS.FILLING, img: pie4 },
        { step: 'Smooth the top.', type: SECTIONS.FILLING },
        { step: 'Chill in the freezer.', type: SECTIONS.FILLING },

        { step: 'In a bowl, heat the cream in the microwave (about 1 minute).', type: CHOCOLATE_GANACHE, img: pie5 },
        { step: 'Add the chocolate. Let it melt (for about 1 to 2 minutes). Mix.', type: CHOCOLATE_GANACHE, img: pie5 },
        { step: 'Spread it on top of the pie.', type: CHOCOLATE_GANACHE, img: pie5 },
        { step: 'Chill in the freezer.', type: CHOCOLATE_GANACHE, img: pie5 },

        { step: 'In a bowl, microwave cookie butter until melted (about 10 to 15 seconds).', type: COOKIE_BUTTER_DRIZZLE },
        { step: 'Drizzle melted cookie butter over the pie using a piping bag.', type: COOKIE_BUTTER_DRIZZLE },
        { step: 'Chill in the freezer.', type: COOKIE_BUTTER_DRIZZLE },

        { step: 'In a stand mixer, combine the "Whipped Cream" ingredients until stiff peaks form.', type: WHIPPED_CREAM_SECTION },
        { step: 'Pipe whipped cream around the border of the pie.', type: WHIPPED_CREAM_SECTION },
        { step: 'Freeze for at least 8 hours and keep frozen until ready to serve.', type: WHIPPED_CREAM_SECTION },

        { step: 'Enjoy this sweet dessert!', type: SECTIONS.SERVE, img: pie7 },
    ]
};