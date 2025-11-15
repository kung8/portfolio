const breadsticks1 = '../assets/Products/garlic-breadsticks-1.jpeg';
const pizza5 = '../assets/Products/pizza-5.jpeg';
const pizza6 = '../assets/Products/pizza-6.jpeg';
const pizza8 = '../assets/Products/pizza-8.MOV';
const pizza25 = '../assets/Products/pizza-25.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BAKING_SHEET,
    BREAD_FLOUR,
    GARLIC,
    HONEY,
    MARINARA_SAUCE,
    MIXING_BOWL,
    OLIVE_OIL,
    OVEN,
    PARSLEY,
    PLASTIC_WRAP,
    ROLLING_PIN,
    SALT,
    UNSALTED_BUTTER,
    WATER,
    YEAST,
} = require('./ingredients');

const GARLIC_BREADSTICK_SECTION = 'Garlic Breadstick';
const PREP_GARLIC_BREADSTICKS = 'Prep Garlic Breadsticks';

module.exports = {
    cardName: 'Garlic Breadsticks',
    name: 'Garlic Breadsticks',
    img: breadsticks1,
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 72.5, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Justin Ung', 'Kevin Ung'],
            finder: 'Justin Ung'
        }
    ],
    ingredients: [
        { ...BREAD_FLOUR, amount: 9 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...YEAST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room-temperature', section: SECTIONS.DOUGH },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },

        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: GARLIC_BREADSTICK_SECTION },
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: GARLIC_BREADSTICK_SECTION },
        { ...PARSLEY, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GARLIC_BREADSTICK_SECTION },

        { ...MARINARA_SAUCE, amount: '', unit: '', additionalDetails: 'warmed', section: SECTIONS.SERVE },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        ROLLING_PIN,
        PLASTIC_WRAP,
        BAKING_SHEET,
    ],
    directions: [
        { step: `On a clean counter, combine flour, salt, and yeast by hand. We are making focaccia bread.`, section: SECTIONS.PREP_DOUGH },
        { step: `Form a well in the center of the mixture and slowly add water and honey.`, section: SECTIONS.PREP_DOUGH },
        { step: `Continue to work the liquid into the entire mixture until the dough becomes only a little sticky.`, section: SECTIONS.PREP_DOUGH },
        { step: `Coat the inside of a large bowl with some oil.`, section: SECTIONS.PREP_DOUGH },
        { step: `Place the dough inside that oiled bowl and cover with plastic wrap or a cooking towel and refrigerate between 48 to 72 hours. This allows the dough to rise and adds flavor.`, section: SECTIONS.PREP_DOUGH, img: pizza6 },

        { step: `When you are ready to make the cheeseballs, preheat the oven to 450ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Grease a baking sheet with 1 Tablespoon olive oil.`, section: SECTIONS.FORM_DOUGH },
        { step: `This is the fun part where you will work the dough. Again on a clean counter sprinkle some flour (and you may need to add some more later so keep that flour handy).`, section: SECTIONS.FORM_DOUGH },
        { step: `Cut a portion of the dough (about a 4 inch ball). Freeze the remainder in the freezer. Note that the dough will rise slightly more as it returns to room temperature.`, section: SECTIONS.FORM_DOUGH, img: pizza25 },
        { step: `Place the dough ball on the floured counter. And begin kneading and pulling and stretching the dough. Continue until the dough has become less sticky. Add more flour conservatively. If you have added too much flour, you can add more water but try to avoid doing that.`, section: SECTIONS.FORM_DOUGH, img: pizza5 },
        { step: `Tossing the dough helps form the crust and gives the dough texture and flavor. Flatten the dough using a rolling pin until it's about 8 inches wide and you will place your closed fists beneath it (at about 10-and-2 steering wheel position). The tricky part is to avoid tearing the dough by making it too thin and accidentally ripping the dough with your fingers. So tuck those fingers in and use just your knuckles.`, section: SECTIONS.FORM_DOUGH },
        { step: `Pull your fists apart to pull the dough edges and try to get all around. Then with a quick flick of the wrists throw the dough directly up in the air and catch the dough with your closed fists.`, section: SECTIONS.FORM_DOUGH, video: pizza8 },
        { step: `Keep doing this until you are satisfied with the dough size and thickness.`, section: SECTIONS.FORM_DOUGH },

        { step: `Brush the dough with a generous amount of melted butter and sprinkle with minced garlic and parsley.`, section: PREP_GARLIC_BREADSTICKS },
        { step: `Place the breadsticks on the baking sheet.`, section: PREP_GARLIC_BREADSTICKS },

        { step: `Bake the breadsticks for 20 to 25 minutes or until a nice golden brown.`, section: SECTIONS.BAKE },

        { step: `Enjoy the breadsticks warm with warmed pizza sauce or with your pasta of your choice.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The focaccia bread recipe which was used for the pizza was the same dough that we used for this breadsticks recipe. Freeze the remainder of the dough to make future breadsticks, cheeseballs, or pizza.' }
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};