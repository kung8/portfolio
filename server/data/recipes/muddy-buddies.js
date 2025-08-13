const muddy1 = '../assets/Products/muddy-buddies-1.jpeg';
const muddy2 = '../assets/Products/muddy-buddies-2.jpeg';
const muddy3 = '../assets/Products/muddy-buddies-3.jpeg';
const muddy4 = '../assets/Products/muddy-buddies-4.jpeg';
const muddy5 = '../assets/Products/muddy-buddies-5.jpeg';
const muddy6 = '../assets/Products/muddy-buddies-6.jpeg';
const muddy7 = '../assets/Products/muddy-buddies-7.jpeg';
const muddy8 = '../assets/Products/muddy-buddies-8.jpeg';
const muddy9 = '../assets/Products/muddy-buddies-9.jpeg';
const muddy11 = '../assets/Products/muddy-buddies-11.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_LOCATION, STORAGE_CONTAINER, STORAGE_DURATION_UNIT } = require('./constants');
const { SEMI_SWEET_CHOCOLATE_CHIPS, PEANUT_BUTTER, CHEX_CEREAL, POWDERED_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Muddy Buddies',
    name: 'Muddy Buddies',
    img: muddy11,
    recipeAuthors: ['Laura'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MIX],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.DESSERT],
    yields: { amount: 15, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Muddy Buddies', link: 'https://joyfoodsunshine.com/puppy-chow-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHEX_CEREAL, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...POWDERED_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'fridge' },
        { name: 'microwave or stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'microwavable bowl or saucepan' },
    ],
    directions: [
        { step: 'Either over the stove or in a microwavable bowl, melt the peanut butter and chocolate chips.', section: SECTIONS.MAIN, img: [muddy1, muddy2] },
        { step: 'In a mixing bowl, add 3 cups of cereal.', section: SECTIONS.MAIN, img: muddy3 },
        { step: 'Pour half the chocolate mixture over the cereal. Mix until evenly coated.', section: SECTIONS.MAIN, img: [muddy4, muddy5] },
        { step: 'Repeat this process with adding 3 more cups of cereal and the remaining chocolate mixture. Mix until evenly coated.', section: SECTIONS.MAIN, img: muddy6 },
        { step: 'If there are pools of the chocolate mixture, add 1/4 cup of cereal at a time until all the chocolate mixture is used.', section: SECTIONS.MAIN },
        { step: 'Place this in the fridge for maybe 15 minutes. You do not want it to harden because it makes the powdered sugar more difficult to stick.', section: SECTIONS.MAIN },
        { step: 'Let the mixture come to room temperature.', section: SECTIONS.MAIN },
        { step: 'Add 1 cup of powdered sugar and mix.', section: SECTIONS.MAIN, img: [muddy7, muddy8] },
        { step: 'Chill in the fridge again for 15 minutes.', section: SECTIONS.MAIN },
        { step: 'Add 1/4 cup of powdered sugar and mix. Repeat with the remaining powdered sugar.', section: SECTIONS.MAIN, img: muddy9 },
        { step: 'Enjoy these sweet goodies while watching a movie or reading a book.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};