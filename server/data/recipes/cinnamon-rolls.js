const rolls1 = '../assets/Products/cinnamon-rolls-1.jpeg';
const rolls2 = '../assets/Products/cinnamon-rolls-2.jpeg';
const rolls3 = '../assets/Products/cinnamon-rolls-3.jpeg';
const rolls4 = '../assets/Products/cinnamon-rolls-4.jpeg';
const rolls5 = '../assets/Products/cinnamon-rolls-5.jpeg';
const rolls6 = '../assets/Products/cinnamon-rolls-6.jpeg';
const rolls7 = '../assets/Products/cinnamon-rolls-7.jpeg';
const rolls8 = '../assets/Products/cinnamon-rolls-8.jpeg';
const rolls9 = '../assets/Products/cinnamon-rolls-9.jpeg';
const rolls10 = '../assets/Products/cinnamon-rolls-10.jpeg';
const rolls11 = '../assets/Products/cinnamon-rolls-11.jpeg';
const rolls12 = '../assets/Products/cinnamon-rolls-12.jpeg';
const rolls13 = '../assets/Products/cinnamon-rolls-13.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BREAD_FLOUR, BROWN_SUGAR, CINNAMON, CREAM_CHEESE, EGG, EGG_YOLK, MILK, POWDERED_SUGAR, SALT, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR, YEAST } = require('./ingredients');

module.exports = {
    cardName: 'Cinnamon Rolls',
    name: 'Cinnamon Rolls',
    img: rolls13,
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
        { 
            label: 'Cinnamon Rolls', 
            link: 'https://www.ambitiouskitchen.com/best-cinnamon-rolls/',
            authors: ['Monique'],
            finder: 'Kevin Ung', 
        }
    ],
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
        { step: 'Add milk to a microwavable bowl and microwave for 40 to 45 seconds. It should be about 110ºF (or like warm bath water).', section: SECTIONS.DOUGH },
        { step: 'Transfer milk to a bowl in a stand mixer.', section: SECTIONS.DOUGH },
        { step: 'Add yeast, egg, yolk, sugar, and melted butter. Mix.', section: SECTIONS.DOUGH },
        { step: 'Add flour and salt. Mix until it forms a dough.', section: SECTIONS.DOUGH, img: rolls1 },
        { step: 'Attach the dough hook and knead the dough on medium speed for 8 minutes. It should form a ball and be only slightly sticky. If it\'s too sticky (i.e. sticking to the bottom of the mixer), add up to 2 tablespoons of bread flour.', section: SECTIONS.DOUGH },
        { step: 'Oil a mixing bowl, transfer dough.', section: SECTIONS.DOUGH },
        { step: 'Cover with plastic wrap and warm towel.', section: SECTIONS.DOUGH, img: [rolls2, rolls3] },
        { step: 'Let the dough double in size (about 1 to 1 1/2 hours).', section: SECTIONS.DOUGH },
        { step: 'Line a baking sheet with a silicon baking mat.', section: SECTIONS.DOUGH },
        { step: 'Roll out the dough on a clean, well-floured surface to about 14x9 inches.', section: SECTIONS.DOUGH, img: rolls4 },
        { step: 'Spread softened butter on dough with a quarter inch from the border.', section: SECTIONS.FILLING, img: rolls5 },
        { step: 'In a small bowl, combine brown sugar and cinnamon.', section: SECTIONS.FILLING },
        { step: 'Sprinkle cinnamon sugar over buttered dough.', section: SECTIONS.FILLING },
        { step: 'Rub cinnamon sugar into the butter.', section: SECTIONS.FILLING, img: rolls6 },
        { step: 'Tightly roll the dough from the shorter side.', section: SECTIONS.FILLING, img: rolls7 },
        { step: 'Using a serrated knife, cut the rolls into 1 inch.', section: SECTIONS.FILLING, img: rolls8 },
        { step: 'Cover the rolls with plastic wrap and a warm towel. Let it rise again for 30 to 45 minutes.', section: SECTIONS.FILLING, img: rolls9 },
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.BAKE },
        { step: 'Remove the plastic wrap and the towel.', section: SECTIONS.BAKE },
        { step: 'Bake until the edges are slightly golden brown (about 20 to 25 minutes). Do not bake all the way through to prevent it from being dried out in the center.', section: SECTIONS.BAKE, img: rolls10 },
        { step: 'Let the rolls cooled for 5 to 10 minutes.', section: SECTIONS.BAKE },
        { step: 'In a mixing bowl, combine frosting ingredients.', section: SECTIONS.FROSTING, img: rolls11 },
        { step: 'Spread frosting over cinnamon rolls and enjoy warm!', section: SECTIONS.SERVE, img: rolls12 },
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