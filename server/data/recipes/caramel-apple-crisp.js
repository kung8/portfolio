const caramelAppleCrisp1 = '../assets/Products/caramel-apple-crisp-1.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BROWN_SUGAR, CARAMEL_SAUCE, CINNAMON, COOKING_SPRAY, CORNSTARCH, GRANNY_SMITH_APPLE, LEMON_JUICE, MIXING_BOWL, OVEN, ROLLED_OATS, SERVING_SPOON, UNSALTED_BUTTER, VANILLA_ICE_CREAM } = require('./ingredients');

const APPLE_FILLING = 'Apple Filling';
const OAT_CRUMBLE_FLOUR_MIXTURE = 'Oat Crumble Flour Mixture';

const PREP_APPLE_FILLING = 'Prep Apple Filling';
const PREP_OAT_CRUMBLE = 'Prep Oat Crumble';

module.exports = {
    cardName: 'Caramel Apple Crisp',
    name: 'Caramel Apple Crisp',
    img: caramelAppleCrisp1,
    available: true,
    recommended: false,
    createdAt: '2026-11-08 01:26:23',
    modifiedAt: '2026-11-08 23:19:12',
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Caramel Apple Crisp',
            link: 'https://www.thechunkychef.com/old-fashioned-easy-apple-crisp/',
            authors: ['The Chunky Chef'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...GRANNY_SMITH_APPLE, amount: 5, unit: '', additionalDetails: 'peeled, cored, and sliced', section: APPLE_FILLING },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: APPLE_FILLING },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: APPLE_FILLING },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: APPLE_FILLING },

        { ...ROLLED_OATS, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: OAT_CRUMBLE_FLOUR_MIXTURE },
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: OAT_CRUMBLE_FLOUR_MIXTURE },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'packed', section: OAT_CRUMBLE_FLOUR_MIXTURE },
        { ...CINNAMON, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: OAT_CRUMBLE_FLOUR_MIXTURE },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold and cut into small cubes', section: SECTIONS.BUTTER },

        { ...VANILLA_ICE_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CARAMEL_SAUCE, amount: '', unit: '', additionalDetails: 'for drizzling', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        COOKING_SPRAY,
        BAKING_PAN,
        { ...MIXING_BOWL, amount: 2 },
        SERVING_SPOON,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Grease a baking dish with cooking spray.`, section: SECTIONS.PREP_PAN },
        { step: `In a mixing bowl, combine the "${APPLE_FILLING}" section ingredients until evenly coated.`, section: PREP_APPLE_FILLING },
        { step: `Transfer to the prepared baking dish.`, section: PREP_APPLE_FILLING },

        { step: `In a separate bowl, combine the "${OAT_CRUMBLE_FLOUR_MIXTURE}" section ingredients.`, section: PREP_OAT_CRUMBLE },
        { step: `Add butter with your fingers until the mixture resembles coarse crumbs. Avoid overmixing.`, section: PREP_OAT_CRUMBLE },

        { step: `Sprinkle the oat crumble evenly over the apples.`, section: SECTIONS.ASSEMBLE },

        { step: `Bake until the apples are tender and topping is golden and bubbling (about 35 to 45 minutes).`, section: SECTIONS.BAKE },

        { step: `Serve this warm topped with vanilla ice cream and caramel sauce.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `I want to work on this recipe a little more to get the top a bit crispier. I might actually try a struessel.` },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Reheat at 350ºF until warmed through.',
        },
    ],
    mealPrep: true,
};