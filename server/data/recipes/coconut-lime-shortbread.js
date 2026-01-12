const shortbread1 = '../assets/Products/coconut-lime-shortbread-1.jpeg';
const shortbread2 = '../assets/Products/coconut-lime-shortbread-2.jpeg';
const shortbread3 = '../assets/Products/coconut-lime-shortbread-3.jpeg';
const shortbread4 = '../assets/Products/coconut-lime-shortbread-4.jpeg';
const shortbread5 = '../assets/Products/coconut-lime-shortbread-5.jpeg';
const shortbread6 = '../assets/Products/coconut-lime-shortbread-6.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, COCONUT_EXTRACT, COOKIE_CUTTERS, COOLING_RACK, LIME_ZEST, MIXING_BOWL, OVEN, POWDERED_SUGAR, ROLLING_PIN, SALT, SAUCEPAN, SHREDDED_COCONUT, SILICONE_BAKING_MAT, STAND_MIXER, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT, WATER, WHITE_CHOCOLATE_CHIPS } = require('./ingredients');

const SUGAR_AND_EXTRACTS = 'Sugar and Extracts';
const FLOUR_SECTION = 'Flour';
const FLAVORINGS = 'Flavorings';

const PREP_COOKIES = 'Prep Cookies';

module.exports = {
    cardName: 'Coconut Lime Shortbread',
    name: 'Coconut Lime Shortbread',
    img: shortbread6,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 4, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 14, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: "Sally's Cookie Addiction",
            label: "Coconut Lime Shortbread",
            link: null,
            authors: ["Sally McKenney"],
            finder: "Hannah",
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: SECTIONS.BUTTER },

        { ...POWDERED_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_AND_EXTRACTS },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUGAR_AND_EXTRACTS },
        { ...COCONUT_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUGAR_AND_EXTRACTS },

        { ...ALL_PURPOSE_FLOUR, amount: 11 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_SECTION },

        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLAVORINGS },
        { ...LIME_ZEST, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLAVORINGS },
        { ...SHREDDED_COCONUT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLAVORINGS },

        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: '' },
        { ...WHITE_CHOCOLATE_CHIPS, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: '' },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
        STOVE,
    ],
    supplies: [
        { ...BAKING_SHEET, amount: 2 },
        { ...SILICONE_BAKING_MAT, amount: 2 },
        ROLLING_PIN,
        COOKIE_CUTTERS,
        COOLING_RACK,
        MIXING_BOWL,
        SAUCEPAN,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Line baking sheets with silicone baking mats.`, section: SECTIONS.PREP_PAN },

        { step: `In a stand mixer, beat butter on medium-high until smooth (about 1 minute).`, section: SECTIONS.PREP_BATTER },
        { step: `Add the "${SUGAR_AND_EXTRACTS}" section ingredients. Beat on medium-high until combined and creamy (about 2 minutes). Scrape down as needed.`, section: SECTIONS.PREP_BATTER },
        { step: `Slowly add flour, 1/4 cup at a time, while beating on low. Beat until incorporated.`, section: SECTIONS.PREP_BATTER },
        { step: `Add "${FLAVORINGS}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `Beat on high until dough comes together and becomes smooth. Add water if it is not smooth after 2 minutes of beating.`, section: SECTIONS.PREP_BATTER, img: shortbread1 },

        { step: `Lightly flour a flat surface.`, section: PREP_COOKIES },
        { step: `Transfer the dough to the floured surface.`, section: PREP_COOKIES },
        { step: `Roll out dough until it is 1/4 inch thick.`, section: PREP_COOKIES, img: shortbread2 },
        { step: `Use a cookie cutter to cut dough into shapes. Reroll remainder and cut them into shapes.`, section: PREP_COOKIES },
        { step: `Place each cookie 3 inch apart on the baking sheets.`, section: PREP_COOKIES, img: shortbread3 },

        { step: `Bake until the edges are lightly browned (about 12 to 14 minutes).`, section: SECTIONS.BAKE, img: shortbread4 },

        { step: `Let them cool on the baking sheet for 5 minutes before transferring them to a cooling rack to cool completely.`, section: SECTIONS.COOL, img: shortbread5 },

        { step: `Set up a double boiler on the stove and melt white chocolate chips until smooth.`, section: SECTIONS.DECORATE },
        { step: `Dip cookies halfway or spread melted chocolate over the top.`, section: SECTIONS.DECORATE },
        { step: `Let them completely set (about 30 minutes).`, section: SECTIONS.DECORATE },

        { step: `Enjoy these sweet treats!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};