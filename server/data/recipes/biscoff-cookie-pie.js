const pie1 = '../assets/Products/biscoff-cookie-pie-1.jpeg';
const pie2 = '../assets/Products/biscoff-cookie-pie-2.jpeg';
// const pie3 = '../assets/Products/biscoff-cookie-pie-3.jpeg'; // TODO: get a photo of the filling ingredients
const pie4 = '../assets/Products/biscoff-cookie-pie-4.jpeg';
const pie5 = '../assets/Products/biscoff-cookie-pie-5.jpeg'; // TODO: not sure if adding a layer of chocolate is necessary
const pie6 = '../assets/Products/biscoff-cookie-pie-6.jpeg'; // TODO: get a photo of the finished pie
const pie7 = '../assets/Products/biscoff-cookie-pie-7.jpeg'; // TODO: get a photo of the plated pie
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BISCOFF_COOKIES, UNSALTED_BUTTER, BISCOFF_BUTTER, SWEETENED_CONDENSED_MILK, WHIPPED_CREAM } = require('./ingredients');

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
    yields: '8 servings',
    prepTime: '30 m',
    cookTime: '0 m',
    websites: [
        { label: 'Biscoff Pie', link: 'https://www.crazyforcrust.com/frozen-biscoff-pie/' }
    ],
    separated: true,
    ingredients: [
        { ...BISCOFF_COOKIES, amount: '30', additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: '6 Tbsp', additionalDetails: 'melted', section: SECTIONS.CRUST },
        { ...BISCOFF_BUTTER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...SWEETENED_CONDENSED_MILK, amount: '1/2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHIPPED_CREAM, amount: '8 oz', additionalDetails: '', section: SECTIONS.FILLING },
        { ...BISCOFF_COOKIES, amount: '', additionalDetails: 'crushed, for garnish', section: SECTIONS.FILLING },
    ],
    appliances: [
        { name: 'refrigerator' },
    ],
    supplies: [
        { name: 'gallon-size ziploc bag' },
        { name: 'rolling pin' },
        { name: 'pie pan' },
    ],
    directions: [
        { step: 'Place Biscoff cookies in a gallon size ziploc bag.', type: SECTIONS.CRUST },
        { step: 'Crush the cookies with a rolling pin.', type: SECTIONS.CRUST },
        { step: 'Combine the cookie crumbs with melted butter.', type: SECTIONS.CRUST, img: pie1 },
        { step: 'Press the mixture into a 9-inch pie pan.', type: SECTIONS.CRUST, img: pie2 },
        { step: 'Chill.', type: SECTIONS.CRUST },

        { step: 'In a mixing bowl, whisk together the Biscoff butter and sweetened condensed milk.', type: SECTIONS.FILLING },
        { step: 'Fold whipped cream into the Biscoff mixture.', type: SECTIONS.FILLING },
        { step: 'Pour into the crust.', type: SECTIONS.FILLING, img: pie4 },
        { step: 'Smooth the top.', type: SECTIONS.FILLING },
        { step: 'Optionally add a layer of chocolate cream.', type: SECTIONS.FILLING, img: pie5 },
        { step: 'Optionally sprinkle cookie crumbs over the pie.', type: SECTIONS.FILLING },
        { step: 'Freeze for at least 8 hours and keep frozen until ready to serve.', type: SECTIONS.FILLING },

        { step: 'Enjoy this sweet dessert!', type: SECTIONS.SERVE, img: pie7 },
    ]
};