const kolaches1 = '../assets/Products/kolaches-1.jpeg';
const kolaches2 = '../assets/Products/kolaches-2.jpeg';
const kolaches3 = '../assets/Products/kolaches-3.jpeg';
const kolaches4 = '../assets/Products/kolaches-4.jpeg';
const kolaches5 = '../assets/Products/kolaches-5.jpeg';
const kolaches6 = '../assets/Products/kolaches-6.jpeg';
const kolaches7 = '../assets/Products/kolaches-7.jpeg';
const kolaches8 = '../assets/Products/kolaches-8.jpeg';
const kolaches9 = '../assets/Products/kolaches-9.jpeg';
const kolaches10 = '../assets/Products/kolaches-10.jpeg';
const kolaches11 = '../assets/Products/kolaches-11.jpeg';
const kolaches12 = '../assets/Products/kolaches-12.jpeg';
const kolaches13 = '../assets/Products/kolaches-13.jpeg';
const kolaches14 = '../assets/Products/kolaches-14.jpeg';
const kolaches15 = '../assets/Products/kolaches-15.jpeg';
const kolaches16 = '../assets/Products/kolaches-16.jpeg';
const kolaches17 = '../assets/Products/kolaches-17.jpeg';
const kolaches18 = '../assets/Products/kolaches-18.jpeg';
const kolaches19 = '../assets/Products/kolaches-19.jpeg';
const kolaches20 = '../assets/Products/kolaches-20.jpeg';
const kolaches21 = '../assets/Products/kolaches-21.jpeg';
const kolaches22 = '../assets/Products/kolaches-22.jpeg';
const kolaches23 = '../assets/Products/kolaches-23.jpeg';
const kolaches24 = '../assets/Products/kolaches-24.jpeg';
const kolaches25 = '../assets/Products/kolaches-25.jpeg';
const kolaches26 = '../assets/Products/kolaches-26.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, UNITS } = require('./constants');
const { YEAST, WHITE_SUGAR, ALL_PURPOSE_FLOUR, UNSALTED_BUTTER, EGG_YOLKS, SALT, CREAM_CHEESE, POWDERED_SUGAR, WHOLE_MILK, CHERRIES, COLD_WATER, LEMON_JUICE, LEMON_ZEST } = require('./ingredients');

const DOUGH_SECTION = 'Dough';
const CHERRY_FILLING_SECTION = 'Cherry Filling';
const CREAM_CHEESE_FILLING_SECTION = 'Cream Cheese Filling';
// const STREUSEL_SECTION = 'Streusel';
const EGG_WASH_SECTION = 'Egg Wash';

const MAKE_DOUGH = 'Make Dough';
const MAKE_CHERRY_FILLING = 'Make Cherry Filling';
const MAKE_CREAM_CHEESE_FILLING = 'Make Cream Cheese Filling';
const FORM_BALLS = 'Form Balls';
const MAKE_EGG_WASH = 'Make Egg Wash';
const ASSEMBLE_KOLACHES = 'Assemble Kolaches';
const BAKE_KOLACHES = 'Bake Kolaches';

module.exports = {
    cardName: 'Cherry Kolaches',
    name: 'Cherry and Cream Cheese Kolaches',
    img: kolaches26,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT, CATEGORIES.BREAKFAST],
    genre: [GENRES.CZECH],
    method: [METHODS.BAKE],
    type: [TYPES.PASTRY],
    yields: '12 servings',
    prepTime: '50 m',
    cookTime: '20 m',
    websites: [
        { label: 'Cherry and Cream Cheese Kolaches', link: 'https://www.foodandwine.com/recipes/cherry-and-cream-cheese-kolaches' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 3, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...YEAST, amount: 3 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...WHOLE_MILK, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: 'melted', section: DOUGH_SECTION },
        { ...EGG_YOLKS, amount: 3, unit: '', additionalDetails: '', section: DOUGH_SECTION },
        { ...SALT, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },

        { ...CHERRIES, amount: 1, unit: UNITS.POUND, additionalDetails: 'pitted and chopped', section: CHERRY_FILLING_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', section: CHERRY_FILLING_SECTION },
        { ...COLD_WATER, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: CHERRY_FILLING_SECTION },
        { ...SALT, amount: 1 / 8, unit: UNITS.TEASPOON, additionalDetails: '', section: CHERRY_FILLING_SECTION },
        { ...LEMON_JUICE, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: CHERRY_FILLING_SECTION },

        { ...CREAM_CHEESE, amount: 8, unit: UNITS.OUNCE, additionalDetails: 'room temperature', section: CREAM_CHEESE_FILLING_SECTION },
        { ...POWDERED_SUGAR, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: CREAM_CHEESE_FILLING_SECTION },
        { ...EGG_YOLKS, amount: 1, unit: '', additionalDetails: '', section: CREAM_CHEESE_FILLING_SECTION },
        { ...LEMON_ZEST, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: CREAM_CHEESE_FILLING_SECTION },

        // { ...ALL_PURPOSE_FLOUR, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: STREUSEL_SECTION },
        // { ...WHITE_SUGAR, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: STREUSEL_SECTION },
        // { ...UNSALTED_BUTTER, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: 'melted', section: STREUSEL_SECTION },
        // { ...SALT, amount: 1/8, unit: UNITS.TEASPOON, additionalDetails: '', section: STREUSEL_SECTION },

        { ...EGG_YOLKS, amount: 1, unit: '', additionalDetails: '', section: EGG_WASH_SECTION },
        { ...WHOLE_MILK, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: EGG_WASH_SECTION },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
        { name: 'stand mixer or electric mixer' },
    ],
    supplies: [
        { name: 'microwavable bowl' },
        { name: 'mixing bowl' },
        { name: '2 small bowls' },
        { name: 'plastic wrap' },
        { name: 'saucepan' },
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
        { name: 'cooking brush' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine 1 cup of flour, sugar and yeast.', type: MAKE_DOUGH },
        { step: 'In a microwavable bowl, warm up milk in the microwave in 20 second intervals until it is between 100ºF to 115ºF. Stir between intervals.', type: MAKE_DOUGH },
        { step: 'Mix in the warm milk. This should activate the yeast.', type: MAKE_DOUGH, img: [kolaches1, kolaches2] },
        { step: 'Set aside until small bubbles appear at the surface (about 5 minutes).', type: MAKE_DOUGH },
        { step: 'In a small bowl, combine the butter, egg yolks and salt.', type: MAKE_DOUGH, img: kolaches3 },
        { step: 'Mix in the egg yolk mixture into the flour mixture.', type: MAKE_DOUGH, img: [kolaches4, kolaches5] },
        { step: 'While stirring, slowly add the remaining 2 cups of flour.', type: MAKE_DOUGH, img: [kolaches6, kolaches7] },
        { step: 'Lightly flour a clean surface, place the dough on it.', type: MAKE_DOUGH, img: kolaches8 },
        { step: 'Knead until it is smooth and springy and a little greasy (about 3 to 4 minutes). If it is sticky, add only a little flour.', type: MAKE_DOUGH },
        { step: 'Place dough in mixing bowl and cover with plastic wrap.', type: MAKE_DOUGH, img: kolaches9 },
        { step: 'Let it double in size in a warm place (about 1 hour to 1 1/2 hours).', type: MAKE_DOUGH },

        { step: 'In a saucepan, combine all the "Cherry Filling" ingredients except the lemon juice.', type: MAKE_CHERRY_FILLING, img: kolaches10 },
        { step: 'Place the saucepan over medium-high heat.', type: MAKE_CHERRY_FILLING },
        { step: 'Stir until the sugar has dissolved and boiled. Lower to medium-low heat.', type: MAKE_CHERRY_FILLING, img: kolaches11 },
        { step: 'Let it simmer until the liquid becomes a syrup consistency (about 25 minutes). Stir occasionally.', type: MAKE_CHERRY_FILLING, img: kolaches20 },
        { step: 'Remove from heat and let cool.', type: MAKE_CHERRY_FILLING },
        { step: 'Add lemon juice.', type: MAKE_CHERRY_FILLING },

        { step: 'In a stand mixer bowl or mixing bowl, add the "Cream Cheese Filling" ingredients.', type: MAKE_CREAM_CHEESE_FILLING, img: [kolaches12, kolaches13] },
        { step: 'Use an electric mixer or the stand mixer to beat the mixture until it is combined (about 1 minute).', type: MAKE_CREAM_CHEESE_FILLING, img: kolaches14 },

        { step: 'Line a baking sheet with a silicon baking mat.', type: FORM_BALLS },
        { step: 'Lightly punch the risen dough and divide into 12 parts.', type: FORM_BALLS, img: [kolaches17, kolaches18] },
        { step: 'On clean work surface, roll dough into balls.', type: FORM_BALLS },
        { step: 'Place balls on the baking sheet a few inches apart.', type: FORM_BALLS, img: kolaches19 },
        { step: 'Cover with a damp towel. Let them double in size (about 30 to 45 minutes).', type: FORM_BALLS },

        { step: 'In a small bowl, whisk together the "Egg Wash" ingredients.', type: MAKE_EGG_WASH, img: [kolaches15, kolaches16] },
        { step: 'Set aside.', type: MAKE_EGG_WASH },

        { step: 'Preheat the oven to 375ºF.', type: ASSEMBLE_KOLACHES },
        { step: 'Make a 2-inch well in the center of each kolaches with your fingertips (or with a spoon).', type: ASSEMBLE_KOLACHES },
        { step: 'Brush the sides and outer edge with the egg wash.', type: ASSEMBLE_KOLACHES, img: kolaches21 },
        { step: 'Spread 1 tablespoon of the cream cheese filling in each kolaches.', type: ASSEMBLE_KOLACHES, img: kolaches22 },
        { step: 'Make a smaller well in the center of the cream cheese filling.', type: ASSEMBLE_KOLACHES },
        { step: 'Add a spoonful of the cherry filling.', type: ASSEMBLE_KOLACHES, img: [kolaches23, kolaches24] },

        { step: 'Bake until it is light golden brown (about 20 minutes).', type: BAKE_KOLACHES, img: kolaches25 },
        { step: 'Enjoy these sweet delicacies warm.', type: SECTIONS.SERVE },
    ]
};