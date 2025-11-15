// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BREADCRUMBS, COOLING_RACK, EGG, FRYING_PAN, MILK, PAPER_TOWELS, PIZZA_SAUCE, SMALL_BOWL, STOVE, STRING_CHEESE, VEGETABLE_OIL } = require('./ingredients');

const EGG_DREDGE_STATION = 'Egg Dredge Station';
const FLOUR_DREDGE_STATION = 'Flour Dredge Station';
const BREADCRUMB_DREDGE_STATION = 'Breadcrumb Dredge Station';

module.exports = {
    wip: true,
    cardName: 'Mozzarella Sticks',
    name: 'Mozzarella Sticks',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    yields: { amount: 12, unit: YIELD_UNITS.STICK },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 24, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Mozzarella Sticks', 
            link: 'https://www.food.com/recipe/mozzarella-sticks-30977',
            authors: ['Karen'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGE_STATION },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: EGG_DREDGE_STATION },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: EGG_DREDGE_STATION },

        { ...BREADCRUMBS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADCRUMB_DREDGE_STATION },

        { ...STRING_CHEESE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut in half', section: SECTIONS.ASSEMBLY },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DEEP_FRY },
        { ...PIZZA_SAUCE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        { ...SMALL_BOWL, amount: 3 },
        BAKING_SHEET,
        PAPER_TOWELS,
        COOLING_RACK,
        FRYING_PAN,
    ],
    directions: [
        { step: `Set flour in a shallow bowl.`, section: SECTIONS.ASSEMBLE },
        { step: `In a shallow bowl, whisk the "${EGG_DREDGE_STATION}" section ingredients together.`, section: SECTIONS.ASSEMBLE },
        { step: `Set breadcrumb in a shallow bowl.`, section: SECTIONS.ASSEMBLE },
        { step: `Dip each piece of cheese in the three dredging station: flour, egg mixture and breadcrumb.`, section: SECTIONS.ASSEMBLE },
        { step: `Dip in egg mixture and breadcrumbs again.`, section: SECTIONS.ASSEMBLE },

        { step: `Freeze for 6 to 24 hours.`, section: SECTIONS.FREEZE },

        { step: `Heat oil in a frying pan.`, section: SECTIONS.DEEP_FRY },
        { step: `Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels.`, section: SECTIONS.DEEP_FRY },
        { step: `Deep fry until golden before cheese leaks (about 1 minute per side).`, section: SECTIONS.DEEP_FRY },
        { step: `Place cooked mozzarella sticks on draining station.`, section: SECTIONS.DEEP_FRY },
        { step: `Enjoy these fresh with warmed pizza sauce.`, section: SECTIONS.SERVE },
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