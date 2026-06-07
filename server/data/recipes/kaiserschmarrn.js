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
const { ALL_PURPOSE_FLOUR, EGG_WHITES, EGG_YOLK, MILK, MIXING_BOWL, OVEN, POWDERED_SUGAR, RUBBER_SPATULA, SALT, SPATULA, STAND_MIXER, STOVE, VANILLA_EXTRACT, VEGETABLE_OIL, WHITE_SUGAR } = require('./ingredients');

const EGG_WHITE_MIXTURE = 'Egg White Mixture';
const EGG_YOLK_MIXTURE = 'Egg Yolk Mixture';
const BATTER_SECTION = 'Batter';

const PREP_EGG_WHITE_MIXTURE = 'Prepare Egg White Mixture';
const COOK_KAISERSCHMARRN = 'Cook Kaiserschmarrn';

module.exports = {
    wip: true,
    cardName: 'Kaiserschmarrn',
    name: 'Kaiserschmarrn',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DESSERT],
    genre: [GENRES.AUSTRIAN],
    method: [METHODS.BAKE, METHODS.PAN_FRY],
    type: [TYPES.CASSEROLE, TYPES.DESSERT],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Kaiserschmarrn', link: 'https://www.lilvienna.com/shredded-pancake-kaiserschmarrn/', authors: ['Ursula'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...EGG_WHITES, amount: 4, unit: '', additionalDetails: '', section: EGG_WHITE_MIXTURE },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGG_WHITE_MIXTURE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: EGG_WHITE_MIXTURE },
        
        { ...EGG_YOLK, amount: 4, unit: '', additionalDetails: '', section: EGG_YOLK_MIXTURE },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: EGG_YOLK_MIXTURE },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGG_YOLK_MIXTURE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: EGG_YOLK_MIXTURE },
        
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BATTER_SECTION },
        { ...MILK, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BATTER_SECTION },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.OIL },

        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        // { ..., amount: '', unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        RUBBER_SPATULA,
        {...SPATULA, amount: 2}
    ],
    directions: [
        { step: `Preheat the oven to 400ºF and set to the center rack.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `In a mixing bowl, combine "${EGG_WHITE_MIXTURE}" section ingredients.`, section: PREP_EGG_WHITE_MIXTURE },
        { step: `Beat until soft peaks form.`, section: PREP_EGG_WHITE_MIXTURE },
        { step: `Set aside.`, section: PREP_EGG_WHITE_MIXTURE },

        { step: `In a stand mixer, combine "${EGG_YOLK_MIXTURE}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `Add flour. Mix until smooth.`, section: SECTIONS.PREP_BATTER },
        { step: `Add milk.`, section: SECTIONS.PREP_BATTER },

        { step: `Add 1/3 of the egg white mixture. This should lighten the batter.`, section: SECTIONS.PREP_BATTER },
        { step: `Fold in the rest of the egg white mixture.`, section: SECTIONS.PREP_BATTER },

        { step: `Over medium heat, heat oil in a dutch oven pan.`, section: COOK_KAISERSCHMARRN },
        { step: `Pour batter into hot pan. Cook for 1 minute.`, section: COOK_KAISERSCHMARRN },
        { step: `Transfer pan to oven.`, section: COOK_KAISERSCHMARRN },
        { step: `Bake until puffy and the top is golden (about 10 to 12 minutes). If it has not browned on top after 15 minutes, check the bottom.`, section: COOK_KAISERSCHMARRN },
        { step: `Transfer to stovetop over low heat.`, section: COOK_KAISERSCHMARRN },
        { step: `Quarter the pancake with two spatulas and flip.`, section: COOK_KAISERSCHMARRN },
        { step: `Once the top and bottom have browned, turn off heat.`, section: COOK_KAISERSCHMARRN },
        { step: `Tear into pieces and transfer to serving plates.`, section: COOK_KAISERSCHMARRN },

        { step: `Serve warm and enjoy this delicious Austrian dish as a main course or dessert.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a little butter. Heat over medium-low heat until warmed through and the edges are cripy.',
        },
    ],
    mealPrep: true,
};