const cookedZoomed = '../assets/Products/oatmeal-raisin-cookies-cooked-zoomed.jpeg';
// const cooked = '../assets/Products/oatmeal-raisin-cookies-cooked.jpeg';
// const cooledContainer = '../assets/Products/oatmeal-raisin-cookies-cooled-container.jpeg';
const cooled = '../assets/Products/oatmeal-raisin-cookies-cooled.jpeg';
const dry = '../assets/Products/oatmeal-raisin-cookies-dry-ingredients.jpeg';
const liquid = '../assets/Products/oatmeal-raisin-cookies-liquid-added.jpeg';
const oatmeal = '../assets/Products/oatmeal-raisin-cookies-oatmeal-added.jpeg';
const plated = '../assets/Products/oatmeal-raisin-cookies-plated.jpeg';
const raisin = '../assets/Products/oatmeal-raisin-cookies-raisins-added.jpeg';
const raw = '../assets/Products/oatmeal-raisin-cookies-raw-pan.jpeg';
const zoomed = '../assets/Products/oatmeal-raisin-cookies-zoomed.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Oatmeal Raisin Cookies',
    name: 'Oatmeal Raisin Cookies',
    img: cookedZoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '4 dozens',
    prepTime: '12 m',
    cookTime: '13 m',
    websites: [
        "https://www.food.com/recipe/oatmeal-raisin-cookies-35813"
    ],
    separated: false,
    ingredients: [
        { name: 'all-purpose flour', amount: '2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'baking soda', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'baking powder', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'sugar', amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'brown sugar', amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'unsalted butter', amount: '1 c', additionalDetails: 'softened', section: SECTIONS.MAIN },
        { name: 'large eggs', amount: '2', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'vanilla extract', amount: '2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'oats', amount: '3 c', additionalDetails: 'non-instant', section: SECTIONS.MAIN },
        { name: 'raisins', amount: '1 1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'spatula' },
        { name: 'silicon mat' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'In a mixing bowl, add flour, baking soda, baking powder, salt, and sugars until well combined.', type: SECTIONS.MAIN, img: dry },
        { step: 'Slowly add the softened butter, eggs, and vanilla. Mix as each component is added.', type: SECTIONS.MAIN, img: liquid },
        { step: 'Mix as you slowly add the oats.', type: SECTIONS.MAIN, img: oatmeal },
        { step: 'Mix as you slowly add the raisins.', type: SECTIONS.MAIN, img: raisin },
        { step: 'Shape the dough into 1 inch balls. Place them onto a baking sheet.', type: SECTIONS.MAIN, img: raw },
        { step: 'Bake until the cookies are golden brown (about 12 to 13 minutes).', type: SECTIONS.MAIN, img: zoomed },
        { step: 'Remove the cookies from the oven. Let the cookies sit on the baking sheet for at least 2 minutes before transferring to a cooling rack.', type: SECTIONS.MAIN, img: cooled },
        { step: 'Enjoy these crispy treats.', type: SECTIONS.MAIN, img: plated },
    ]
};