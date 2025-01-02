// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
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
    wip: true,
    cardName: 'Cherry Kolaches',
    name: 'Cherry and Cream Cheese Kolaches',
    img: '',
    available: true,
    recommended: false,
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
        { ...ALL_PURPOSE_FLOUR, amount: '1 c', additionalDetails: '', section: DOUGH_SECTION },
        { ...WHITE_SUGAR, amount: '1/3 c', additionalDetails: '', section: DOUGH_SECTION },
        { ...YEAST, amount: '1.5 tsp', additionalDetails: '', section: DOUGH_SECTION },
        { ...WHOLE_MILK, amount: '1 c', additionalDetails: '', section: DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: 'melted', section: DOUGH_SECTION },
        { ...EGG_YOLKS, amount: '3', additionalDetails: '', section: DOUGH_SECTION },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: DOUGH_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: '2 c', additionalDetails: '', section: DOUGH_SECTION },

        { ...CHERRIES, amount: '1 lb', additionalDetails: 'pitted and chopped', section: CHERRY_FILLING_SECTION },
        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: CHERRY_FILLING_SECTION },
        { ...COLD_WATER, amount: '1/4 c', additionalDetails: '', section: CHERRY_FILLING_SECTION },
        { ...SALT, amount: '1/8 tsp', additionalDetails: '', section: CHERRY_FILLING_SECTION },
        { ...LEMON_JUICE, amount: '1 Tbsp', additionalDetails: '', section: CHERRY_FILLING_SECTION },

        { ...CREAM_CHEESE, amount: '8 oz', additionalDetails: 'room temperature', section: CREAM_CHEESE_FILLING_SECTION },
        { ...POWDERED_SUGAR, amount: '2 Tbsp', additionalDetails: '', section: CREAM_CHEESE_FILLING_SECTION },
        { ...EGG_YOLKS, amount: '1', additionalDetails: '', section: CREAM_CHEESE_FILLING_SECTION },
        { ...LEMON_ZEST, amount: '1 tsp', additionalDetails: '', section: CREAM_CHEESE_FILLING_SECTION },

        // { ...ALL_PURPOSE_FLOUR, amount: '2 Tbsp', additionalDetails: '', section: STREUSEL_SECTION },
        // { ...WHITE_SUGAR, amount: '2 Tbsp', additionalDetails: '', section: STREUSEL_SECTION },
        // { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: 'melted', section: STREUSEL_SECTION },
        // { ...SALT, amount: '1/8 tsp', additionalDetails: '', section: STREUSEL_SECTION },

        { ...EGG_YOLKS, amount: '1', additionalDetails: '', section: EGG_WASH_SECTION },
        { ...WHOLE_MILK, amount: '1 Tbsp', additionalDetails: '', section: EGG_WASH_SECTION },
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
        { step: 'In a microwavable bowl, warm up milk in the microwave in 20 second intervals until it is between 100ºF to 115ºF. Stir between intervals.', type: MAKE_DOUGH },
        { step: 'In a mixing bowl, combine 1 cup of flour, sugar and yeast.', type: MAKE_DOUGH },
        { step: 'Mix in the warm milk. This should activate the yeast.', type: MAKE_DOUGH },
        { step: 'Set aside until small bubbles appear at the surface (about 5 minutes).', type: MAKE_DOUGH },
        { step: 'In a small bowl, combine the butter, egg yolks and salt.', type: MAKE_DOUGH },
        { step: 'Mix in the egg yolk mixture into the flour mixture.', type: MAKE_DOUGH },
        { step: 'While stirring, slowly add the remaining 2 cups of flour.', type: MAKE_DOUGH },
        { step: 'Lightly flour a clean surface, place the dough on it.', type: MAKE_DOUGH },
        { step: 'Knead until it is smooth and springy and a little greasy (about 3 to 4 minutes). If it is sticky, add only a little flour.', type: MAKE_DOUGH },
        { step: 'Place dough in mixing bowl and cover with plastic wrap.', type: MAKE_DOUGH },
        { step: 'Let it double in size in a warm place (about 1 hour to 1 1/2 hours).', type: MAKE_DOUGH },

        { step: 'In a saucepan, combine all the "Cherry Filling" ingredients except the lemon juice.', type: MAKE_CHERRY_FILLING },
        { step: 'Place the saucepan over medium-high heat.', type: MAKE_CHERRY_FILLING },
        { step: 'Stir until the sugar has dissolved. Lower to medium-low heat.', type: MAKE_CHERRY_FILLING },
        { step: 'Let it simmer until the liquid becomes a syrup consistency (about 25 minutes). Stir occasionally.', type: MAKE_CHERRY_FILLING },
        { step: 'Remove from heat and let cool.', type: MAKE_CHERRY_FILLING },
        { step: 'Add lemon juice.', type: MAKE_CHERRY_FILLING },

        { step: 'In a stand mixer bowl or mixing bowl, add the "Cream Cheese Filling" ingredients.', type: MAKE_CREAM_CHEESE_FILLING },
        { step: 'Use an electric mixer or the stand mixer to beat the mixture until it is combined (about 1 minute).', type: MAKE_CREAM_CHEESE_FILLING },

        { step: 'Line a baking sheet with a silicon baking mat.', type: FORM_BALLS },
        { step: 'Lightly punch the risen dough and divide into 12 parts.', type: FORM_BALLS },
        { step: 'On clean work surface, roll dough into balls.', type: FORM_BALLS },
        { step: 'Place balls on the baking sheet a few inches apart.', type: FORM_BALLS },
        { step: 'Cover with a damp towel. Let them double in size (about 30 to 45 minutes).', type: FORM_BALLS },

        { step: 'In a small bowl, whisk together the "Egg Wash" ingredients.', type: MAKE_EGG_WASH },
        { step: 'Set aside.', type: MAKE_EGG_WASH },

        { step: 'Preheat the oven to 375ºF.', type: ASSEMBLE_KOLACHES },
        { step: 'Make a 2-inch well in the center of each kolaches with your fingertips.', type: ASSEMBLE_KOLACHES },
        { step: 'Brush the sides and outer edge with the egg wash.', type: ASSEMBLE_KOLACHES },
        { step: 'Spread 1 tablespoon of the cream cheese filling in each kolaches.', type: ASSEMBLE_KOLACHES },
        { step: 'Make a smaller well in the center of the cream cheese filling.', type: ASSEMBLE_KOLACHES },
        { step: 'Add a spoonful of the cherry filling.', type: ASSEMBLE_KOLACHES },

        { step: 'Bake until it is light golden brown (about 20 minutes).', type: BAKE_KOLACHES },
        { step: 'Enjoy these sweet delicacies warm.', type: SECTIONS.SERVE },
    ]
};