// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, HEAVY_CREAM, KITCHEN_TOWEL, MIXING_BOWL, SALT, STOVE } = require('./ingredients');

const COOK_TORTILLA = 'Cook Tortilla';

module.exports = {
    wip: true,
    cardName: 'Tortilla',
    name: 'Tortilla',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-06-07 01:01:56',
    modifiedAt: '2026-06-07 01:01:56',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.LATIN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.BREAD],
    yields: { amount: 12, unit: YIELD_UNITS.EACH },
    prepTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 6, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Tortilla', link: 'https://www.tiktok.com/@patrickzeinali/video/7162198941730082090?lang=en', authors: ['Patrick Zeinali'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 4.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HEAVY_CREAM, amount: 2.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        KITCHEN_TOWEL,
    ],
    directions: [
        { step: `In a mixing bowl, combine the flour and salt.`, section: SECTIONS.FORM_DOUGH },
        { step: `Make a well in the center.`, section: SECTIONS.FORM_DOUGH },
        { step: `Slowly pour in cream. Mix until dough forms.`, section: SECTIONS.FORM_DOUGH },
        { step: `Knead on a clean, floured surface until dough is soft and smooth (about 15 to 20 minutes).`, section: SECTIONS.FORM_DOUGH },
        { step: `Divide into 12 portions.`, section: SECTIONS.FORM_DOUGH },
        { step: `Form small balls.`, section: SECTIONS.FORM_DOUGH },
        { step: `Cover with a damp kitchen towel. Let it rise for 20 minutes.`, section: SECTIONS.FORM_DOUGH },
        { step: `On lightly floured countertop, roll dough out to a circular shape (about the size of a plate).`, section: SECTIONS.FORM_DOUGH },

        { step: `Over medium-high heat, cook tortilla until it bubbles (about 15 to 20 seconds).`, section: COOK_TORTILLA },
        { step: `Flip. Cook until bottom forms light brown spots.`, section: COOK_TORTILLA },

        { step: `Enjoy these delicious tortilla with your favorite recipes or by themselves.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium-high heat, heat tortilla until warmed through (about 15 to 30 seconds per side).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Wrap tortilla in a damp paper towel. Microwave until warmed through (about 15 to 30 seconds).',
        },
    ],
    mealPrep: true,
};