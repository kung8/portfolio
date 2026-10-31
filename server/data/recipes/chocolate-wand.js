const wand1 = '../assets/Products/chocolate-wand-1.jpeg';
const wand2 = '../assets/Products/chocolate-wand-2.jpeg';
const wand3 = '../assets/Products/chocolate-wand-3.jpeg';

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
const { BAKING_SHEET, MILK_CHOCOLATE_CHIPS, PARCHMENT_PAPER, PRETZEL_RODS, SAUCEPAN, STOVE } = require('./ingredients');

const CHOCOLATE_SECTION = 'Chocolate';

const MELT_CHOCOLATE = 'Melt Chocolate';
const DIP_PRETZEL = 'Dip Pretzel';
const COOL_PRETZEL = 'Cool Pretzel';

module.exports = {
    cardName: 'Chocolate Wand',
    name: 'Chocolate Wand',
    img: wand3,
    available: true,
    recommended: true,
    createdAt: '2026-10-31 15:06:40',
    modifiedAt: '2026-10-31 15:06:40',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.MELT],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 16, unit: YIELD_UNITS.EACH },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chocolate Wands', link: 'https://houseofnasheats.com/chocolate-covered-pretzel-rods/', authors: ['Amy Nash'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...MILK_CHOCOLATE_CHIPS, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'or preferred chocolate', section: CHOCOLATE_SECTION },
        { ...PRETZEL_RODS, amount: 16, unit: INGREDIENT_UNITS.EACH, additionalDetails: '', section: CHOCOLATE_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        { name: 'tall glass jar' },
        PARCHMENT_PAPER,
        BAKING_SHEET,
    ],
    directions: [
        { step: `Line a baking sheet with parchment paper.`, section: SECTIONS.PREP_PAN },
        { step: `Fill a saucepan with water about halfway.`, section: MELT_CHOCOLATE },
        { step: `Fill a glass jar with chocolate chips and place in the saucepan.`, section: MELT_CHOCOLATE },
        { step: `Turn on heat to medium-high. Melt chocolate.`, section: MELT_CHOCOLATE },
        { step: `Once melted, remove the saucepan from heat.`, section: MELT_CHOCOLATE, img: wand1 },
        { step: `Dip the pretzel rods.`, section: DIP_PRETZEL },
        { step: `Optionally sprinkle with toppings of your choice, such as sprinkles, crushed nuts, or sea salt.`, section: DIP_PRETZEL },
        { step: `Place pretzel rods on a parchment-lined baking sheet.`, section: COOL_PRETZEL, img: wand2 },
        { step: `Serve once the chocolate has set.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};