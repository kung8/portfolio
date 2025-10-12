const cooked3 = '../assets/Products/cinnamon-rolls-cooked-3.jpeg';
const dough1 = '../assets/Products/cinnamon-rolls-dough-1.jpeg';
const dough2 = '../assets/Products/cinnamon-rolls-dough-2.jpeg';
const dough3 = '../assets/Products/cinnamon-rolls-dough-3.jpeg';
const dough4 = '../assets/Products/cinnamon-rolls-dough-4.jpeg';
const dough5 = '../assets/Products/cinnamon-rolls-dough-5.jpeg';
const dough7 = '../assets/Products/cinnamon-rolls-dough-7.jpeg';
const dough8 = '../assets/Products/cinnamon-rolls-dough-8.jpeg';
const dough9 = '../assets/Products/cinnamon-rolls-dough-9.jpeg';
const dough10 = '../assets/Products/cinnamon-rolls-dough-10.jpeg';
const filling3 = '../assets/Products/cinnamon-rolls-filling-3.jpeg';
const filling4 = '../assets/Products/cinnamon-rolls-filling-4.jpeg';
const filling5 = '../assets/Products/cinnamon-rolls-filling-5.jpeg';
const filling6 = '../assets/Products/cinnamon-rolls-filling-6.jpeg';
const filling7 = '../assets/Products/cinnamon-rolls-filling-7.jpeg';
const filling9 = '../assets/Products/cinnamon-rolls-filling-9.jpeg';
const filling10 = '../assets/Products/cinnamon-rolls-filling-10.jpeg';
const filling11 = '../assets/Products/cinnamon-rolls-filling-11.jpeg';
const frosting1 = '../assets/Products/cinnamon-rolls-frosting-1.jpeg';
const frosting2 = '../assets/Products/cinnamon-rolls-frosting-2.jpeg';
const frosting3 = '../assets/Products/cinnamon-rolls-frosting-3.jpeg';
const frosting4 = '../assets/Products/cinnamon-rolls-frosting-4.jpeg';
const plated3 = '../assets/Products/cinnamon-rolls-plated-3.jpeg';
const plated5 = '../assets/Products/cinnamon-rolls-plated-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BREAD_FLOUR, BROWN_SUGAR, CINNAMON, CREAM_CHEESE, EGG, EGG_YOLK, MILK, POWDERED_SUGAR, SALT, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR, YEAST } = require('./ingredients');

module.exports = {
    cardName: 'Cinnamon Rolls',
    name: 'Cinnamon Rolls',
    img: plated3,
    recipeAuthors: ['Monique'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 9, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 2, unit: TIME_UNITS.HOUR },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 145, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cinnamon Rolls', link: 'https://www.ambitiouskitchen.com/best-cinnamon-rolls/' }
    ],
    separated: true,
    ingredients: [
        { ...MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...YEAST, amount: 9 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.DOUGH },
        { ...BREAD_FLOUR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: SECTIONS.FILLING },
        { ...BROWN_SUGAR, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CINNAMON, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.FROSTING },
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'softened', section: SECTIONS.FROSTING },
        { ...POWDERED_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FROSTING },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FROSTING },
    ],
    appliances: [
        { name: 'microwave' },
        { name: 'stand mixer' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'microwavable bowl' },
        { name: '2 mixing bowls' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Add milk to a microwavable bowl and microwave for 40 to 45 seconds. It should be about 110ºF (or like warm bath water).', section: SECTIONS.DOUGH, img: dough1 },
        { step: 'Transfer milk to a bowl in a stand mixer.', section: SECTIONS.DOUGH, img: dough2 },
        { step: 'Add yeast, egg, yolk, sugar, and melted butter. Mix.', section: SECTIONS.DOUGH, img: dough3 },
        { step: 'Add flour and salt. Mix until it forms a dough.', section: SECTIONS.DOUGH, img: [dough4, dough5] },
        { step: 'Attach the dough hook and knead the dough on medium speed for 8 minutes. It should form a ball and be only slightly sticky. If it\'s too sticky (i.e. sticking to the bottom of the mixer), add up to 2 tablespoons of bread flour.', section: SECTIONS.DOUGH },
        { step: 'Oil a mixing bowl, transfer dough.', section: SECTIONS.DOUGH, img: [dough7, dough8] },
        { step: 'Cover with plastic wrap and warm towel.', section: SECTIONS.DOUGH, img: [dough9, dough10] },
        { step: 'Let the dough double in size (about 1 to 1 1/2 hours).', section: SECTIONS.DOUGH },
        { step: 'Line a baking sheet with a silicon baking mat.', section: SECTIONS.DOUGH },
        { step: 'Roll out the dough on a clean, well-floured surface to about 14x9 inches.', section: SECTIONS.DOUGH, img: filling4 },
        { step: 'Spread softened butter on dough with a quarter inch from the border.', section: SECTIONS.FILLING, img: filling5 },
        { step: 'In a small bowl, combine brown sugar and cinnamon.', section: SECTIONS.FILLING, img: filling3 },
        { step: 'Sprinkle cinnamon sugar over buttered dough.', section: SECTIONS.FILLING, img: filling6 },
        { step: 'Rub cinnamon sugar into the butter.', section: SECTIONS.FILLING, img: filling7 },
        { step: 'Tightly roll the dough from the shorter side.', section: SECTIONS.FILLING, img: filling9 },
        { step: 'Using a serrated knife, cut the rolls into 1 inch.', section: SECTIONS.FILLING, img: filling10 },
        { step: 'Cover the rolls with plastic wrap and a warm towel. Let it rise again for 30 to 45 minutes.', section: SECTIONS.FILLING, img: filling11 },
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.BAKE },
        { step: 'Remove the plastic wrap and the towel.', section: SECTIONS.BAKE },
        { step: 'Bake until the edges are slightly golden brown (about 20 to 25 minutes). Do not bake all the way through to prevent it from being dried out in the center.', section: SECTIONS.BAKE, img: cooked3 },
        { step: 'Let the rolls cooled for 5 to 10 minutes.', section: SECTIONS.BAKE },
        { step: 'In a mixing bowl, combine frosting ingredients.', section: SECTIONS.FROSTING, img: [frosting1, frosting2, frosting3, frosting4] },
        { step: 'Spread frosting over cinnamon rolls and enjoy warm!', section: SECTIONS.SERVE, img: plated5 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a little bit of water and microwave for 20 to 30 seconds until heated through.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 15 to 20 minutes).',
        },
    ],
    mealPrep: true,
};