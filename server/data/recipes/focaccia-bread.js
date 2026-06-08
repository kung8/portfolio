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
const { ALL_PURPOSE_FLOUR, BAKING_PAN, FLAKY_SEA_SALT, FRESH_ROSEMARY, MIXING_BOWL, OLIVE_OIL, OVEN, PLASTIC_WRAP, SEA_SALT, SPATULA, STAND_MIXER, WATER, WHITE_SUGAR, YEAST } = require('./ingredients');

const YEAST_MIXTURE = 'Yeast Mixture';
const FLOUR_MIXTURE = 'Flour Mixture';

const PREP_YEAST_MIXTURE = 'Prep Yeast Mixture';
const DIMPLE_DOUGH = 'Dimple Dough';

module.exports = {
    wip: true,
    cardName: 'Focaccia Bread',
    name: 'Focaccia Bread',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Focaccia Bread',
            link: 'https://www.loveandlemons.com/focaccia/',
            authors: ['Jeanine Donofrio', 'Phoebe Moore'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...WATER, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: YEAST_MIXTURE },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: YEAST_MIXTURE },
        { ...YEAST, amount: 9 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: YEAST_MIXTURE },

        { ...ALL_PURPOSE_FLOUR, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_MIXTURE },
        { ...SEA_SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_MIXTURE },
        
        { ...OLIVE_OIL, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided', section: SECTIONS.DOUGH },
        
        { ...FLAKY_SEA_SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...FRESH_ROSEMARY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
        PLASTIC_WRAP,
        SPATULA,
    ],
    directions: [
        { step: `In a stand mixer, combine the "${YEAST_MIXTURE}" section ingredients.`, section: PREP_YEAST_MIXTURE },
        { step: `Set aside.`, section: PREP_YEAST_MIXTURE },

        { step: `Add the "${FLOUR_MIXTURE}" section ingredients. Mix until the dough forms.`, section: SECTIONS.PREP_DOUGH },
        { step: `In another mixing bowl, brush bowl with 2 tablespoons of olive oil.`, section: SECTIONS.PREP_DOUGH },
        { step: `Transfer dough with a spatula to the mixing bowl.`, section: SECTIONS.PREP_DOUGH },
        { step: `Use your finger to brush any pools of oil along the surface of the dough.`, section: SECTIONS.PREP_DOUGH },
        { step: `Cover and let the dough double in size (about 1 to 1.5 hours).`, section: SECTIONS.PREP_DOUGH },

        { step: `In a baking dish, brush the bottom and sides with 2 tablespoons of olive oil.`, section: SECTIONS.PREP_PAN },

        { step: `Uncover the dough and rub your hands with oil.`, section: SECTIONS.FORM_DOUGH },
        { step: `Slide your hand under one side of the dough and fold it over.`, section: SECTIONS.FORM_DOUGH },
        { step: `Continue to free the rest of the dough from the bowl.`, section: SECTIONS.FORM_DOUGH },
        { step: `Form a ball by folding it on itself a few times.`, section: SECTIONS.FORM_DOUGH },
        { step: `Transfer the ball to the baking dish.`, section: SECTIONS.FORM_DOUGH },
        { step: `Spread the dough to cover the baking dish by pressing it. It will shrink.`, section: SECTIONS.FORM_DOUGH },
        { step: `Repeat spreading it.`, section: SECTIONS.FORM_DOUGH },
        { step: `Cover with plastic wrap and let it double in size (about 45 minutes).`, section: SECTIONS.FORM_DOUGH },
        
        { step: `Preheat the oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },
        
        { step: `Uncover pan. Drizzle 2 tablespoons of olive oil.`, section: DIMPLE_DOUGH },
        { step: `Rub your hands with oil. Use your fingers to poke holes in the dough.`, section: DIMPLE_DOUGH },
        { step: `Optionally sprinkle dough with any desired toppings.`, section: DIMPLE_DOUGH },

        { step: `Bake until golden brown (about 20 to 30 minutes).`, section: SECTIONS.BAKE },
        
        { step: `Enjoy this bread by itself or as part of a sandwich or meal.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `Rubbing your hands with oil helps you work with the sticky dough.` },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};