// const example1 = '../assets/Products/example-1.jpeg';

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
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BANANA, EGG_YOLK, OATMEAL, OVEN, PLASTIC_WRAP, RAISINS, SALT, SEMI_SWEET_CHOCOLATE_CHIPS, SILICONE_BAKING_MAT, STAND_MIXER, STRAWBERRY, UNSALTED_BUTTER, UNSALTED_PEANUT, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const BUTTER_MIXTURE = 'Butter Mixture';
const FLOUR_SECTION = 'Flour';
const MUFFY_SECTION_INGREDIENTS = 'Muffy\'s Special Ingredients';

const FORM_COOKIES = 'Form Cookies';

module.exports = {
    wip: true,
    cardName: 'Muffy\'s Cookies',
    name: 'Muffy\'s Scrumptious Smackeroodles',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE, TYPES.DESSERT],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Butter Cookies', link: 'https://preppykitchen.com/butter-cookies/', authors: ['John Kanell'], finder: 'Kevin Ung' },
        { label: 'Muffy\'s Scrumptious Smackeroodles', link: null, authors: ['Muffy and Friends'], finder: 'Kevin Ung' },
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUTTER_MIXTURE },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUTTER_MIXTURE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTER_MIXTURE },

        { ...EGG_YOLK, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },

        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_SECTION },

        { ...STRAWBERRY, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sliced', section: MUFFY_SECTION_INGREDIENTS },
        { ...BANANA, amount: 1, unit: '', additionalDetails: 'sliced', section: MUFFY_SECTION_INGREDIENTS },
        { ...UNSALTED_PEANUT, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MUFFY_SECTION_INGREDIENTS },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MUFFY_SECTION_INGREDIENTS },
        { ...OATMEAL, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MUFFY_SECTION_INGREDIENTS },
        { ...RAISINS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MUFFY_SECTION_INGREDIENTS },
    ],
    appliances: [
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        PLASTIC_WRAP,
        { ...BAKING_SHEET, amount: 2 },
        { ...SILICONE_BAKING_MAT, amount: 2 },
    ],
    directions: [
        { step: `In a stand mixer, cream the "${BUTTER_MIXTURE}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `Add "${SECTIONS.WET_INGREDIENTS}" section ingredients. Mix until combined.`, section: SECTIONS.PREP_BATTER },
        { step: `Add flour. Mix until incorporated.`, section: SECTIONS.PREP_BATTER },
        { step: `Add the "${MUFFY_SECTION_INGREDIENTS}" section ingredients. Mix until incorporated.`, section: SECTIONS.PREP_BATTER },
        { step: `Transfer to a counter and knead until dough comes together.`, section: SECTIONS.PREP_BATTER },
        { step: `Shape it to a long shape (12 inches long).`, section: SECTIONS.PREP_BATTER },
        { step: `Cover with plastic wrap and chill for at least 1 hour.`, section: SECTIONS.PREP_BATTER },

        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line baking sheets with silicone baking mats.`, section: SECTIONS.PREP_PAN },
        { step: `Cut chilled dough into slices (about 3/4 inch thick) and place on lined baking sheet about an inch apart.`, section: FORM_COOKIES },
        { step: `Bake until edges are just golden brown (about 10 to 12 minutes).`, section: SECTIONS.BAKE },
        { step: `Let cookies cool completely on the baking sheets.`, section: SECTIONS.COOL },
        { step: `Enjoy these cookies from one of my childhood show!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};