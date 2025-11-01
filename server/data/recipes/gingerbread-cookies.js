const cookies1 = '../assets/Products/gingerbread-cookies-1.jpeg';
const cookies2 = '../assets/Products/gingerbread-cookies-2.jpeg';
const cookies3 = '../assets/Products/gingerbread-cookies-3.jpeg';
const cookies4 = '../assets/Products/gingerbread-cookies-4.jpeg';
const cookies5 = '../assets/Products/gingerbread-cookies-5.jpeg';
const cookies6 = '../assets/Products/gingerbread-cookies-6.jpeg';
const cookies7 = '../assets/Products/gingerbread-cookies-7.jpeg';
const cookies8 = '../assets/Products/gingerbread-cookies-8.jpeg';
const cookies9 = '../assets/Products/gingerbread-cookies-9.jpeg';
const cookies10 = '../assets/Products/gingerbread-cookies-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BAKING_SODA, BROWN_SUGAR, CINNAMON, COOLING_RACK, GROUND_CLOVES, GROUND_GINGER, MILK, MIXING_BOWL, MOLASSES, OVEN, PASTRY_BLENDER_ATTACHMENT, POWDERED_SUGAR, ROLLING_PIN, SALT, SILICON_BAKING_MAT, STAND_MIXER, UNSALTED_BUTTER } = require('./ingredients');

const GINGERBREAD_DRY_INGREDIENTS = 'Gingerbread Dry Ingredients';
const GINGERBREAD_BATTER = 'Gingerbread Batter';
const BAKING = 'Baking';
const FROSTING = 'Frosting';

module.exports = {
    cardName: 'Gingerbread Cookies',
    name: 'Gingerbread Cookies',
    img: cookies8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKING],
    type: [TYPES.COOKIE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Gingerbread Cookie', 
            link: 'https://tastesbetterfromscratch.com/gingerbread-cookies/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...BROWN_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...BAKING_SODA, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...GROUND_GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...GROUND_CLOVES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },

        { ...UNSALTED_BUTTER, amount: 12, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'room temperature, divided into 12 pieces', section: GINGERBREAD_BATTER },
        { ...MOLASSES, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GINGERBREAD_BATTER },
        { ...MILK, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GINGERBREAD_BATTER },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FROSTING },
        { ...MILK, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FROSTING },
        { ...POWDERED_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FROSTING },
    ],
    appliances: [
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        PASTRY_BLENDER_ATTACHMENT,
        { ...BAKING_SHEET, amount: 2 },
        { ...SILICON_BAKING_MAT, amount: 2 },
        ROLLING_PIN,
        COOLING_RACK,
        MIXING_BOWL,
    ],
    directions: [
        { step: `In a stand mixer, combine all the the "Gingerbread Dry Ingredients".`, section: GINGERBREAD_DRY_INGREDIENTS },
        { step: `Add the divided butter to the dry ingredients.`, section: GINGERBREAD_BATTER, img: cookies1 },
        { step: `Cut the butter using a pastry blender until it becomes very fine.`, section: GINGERBREAD_BATTER, img: cookies2 },
        { step: `Add the molasses and milk to the bowl. Mix on low for about 30 seconds.`, section: GINGERBREAD_BATTER, img: cookies3 },
        { step: `Divide the dough into two. Form them into balls.`, section: GINGERBREAD_BATTER, img: cookies4 },
        { step: `Wrap the balls with plastic wrap and refrigerate for 2 hours or overnight. This is to help the dough be less sticky.`, section: GINGERBREAD_BATTER, img: cookies5 },

        { step: `Preheat the oven to 350ºF.`, section: BAKING },
        { step: `Place silicon baking mats on baking sheets.`, section: BAKING },
        { step: `Flour a clean surface and place one ball of dough on top.`, section: BAKING },
        { step: `Lightly flatten the dough so there is more surface area for the flour. Lightly top the dough and rolling pin with flour.`, section: BAKING },
        { step: `Roll out the dough to about 1/4 inch thick.`, section: BAKING, img: cookies6 },
        { step: `Use a cookie cutter to cut out gingerbread men or whatever design you want.`, section: BAKING },
        { step: `Place these cookies on a baking sheet and refrigerate while you prepare the second dough ball.`, section: BAKING },
        { step: `Bake until the center is set and does not give much when lightly pressed (about 8 to 11 minutes). Avoid overbaking.`, section: BAKING },
        { step: `Transfer to a cooling rack and let cool completely before frosting.`, section: BAKING },

        { step: `In a mixing bowl, combine butter, milk and half of the powdered sugar. Mix until uniform.`, section: FROSTING, img: cookies9 },
        { step: `Add remaining powdered sugar. Mix until uniform.`, section: FROSTING, img: cookies10 },

        { step: `Optionally frost the gingerbread men and enjoy these simple childhood treats.`, section: SECTIONS.SERVE, img: cookies7 },
    ],
    notes: [
        { note: 'I personally prefer this without the frosting.' }
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};