const cookedZoomed = '../assets/Products/oatmeal-raisin-cookies-zoomed.jpeg';
const cooled = '../assets/Products/oatmeal-raisin-cookies-cooled.jpeg';
const dry = '../assets/Products/oatmeal-raisin-cookies-dry-ingredients.jpeg';
const liquid = '../assets/Products/oatmeal-raisin-cookies-liquid-added.jpeg';
const oatmeal = '../assets/Products/oatmeal-raisin-cookies-oatmeal-added.jpeg';
const plated = '../assets/Products/oatmeal-raisin-cookies-plated.jpeg';
const raisin = '../assets/Products/oatmeal-raisin-cookies-raisins-added.jpeg';
const raw = '../assets/Products/oatmeal-raisin-cookies-raw-pan.jpeg';
const chocolate = '../assets/Products/oatmeal-raisin-cookies-with-chocolate-chip.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_SODA,
    BAKING_POWDER,
    SALT,
    WHITE_SUGAR,
    BROWN_SUGAR,
    UNSALTED_BUTTER,
    EGG,
    VANILLA_EXTRACT,
    STEEL_OATS,
    RAISINS,
    SEMI_SWEET_CHOCOLATE_CHIPS,
} = require('./ingredients');

module.exports = {
    cardName: 'Oatmeal Raisin Cookies',
    name: 'Oatmeal Raisin Cookies',
    img: cookedZoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 4, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 13, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Oatmeal Raisin Cookies', link: "https://www.food.com/recipe/oatmeal-raisin-cookies-35813" }
    ],
    separated: false,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: SECTIONS.MAIN },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...STEEL_OATS, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'non-instant', section: SECTIONS.MAIN },
        { ...RAISINS, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Optionally add chocolate chips.', type: SECTIONS.MAIN },
        { step: 'Shape the dough into 1 inch balls. Place them onto a baking sheet.', type: SECTIONS.MAIN, img: raw },
        { step: 'Bake until the cookies are golden brown (about 12 to 13 minutes).', type: SECTIONS.MAIN, img: chocolate },
        { step: 'Remove the cookies from the oven. Let the cookies sit on the baking sheet for at least 2 minutes before transferring to a cooling rack.', type: SECTIONS.MAIN, img: cooled },
        { step: 'Enjoy these crispy treats.', type: SECTIONS.MAIN, img: plated },
    ]
};