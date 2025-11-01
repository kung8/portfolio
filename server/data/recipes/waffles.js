const waffles1 = '../assets/Products/waffles-1.jpeg';
const waffles2 = '../assets/Products/waffles-2.jpeg';
const waffles3 = '../assets/Products/waffles-3.jpeg';
const waffles4 = '../assets/Products/waffles-4.jpeg';
const waffles5 = '../assets/Products/waffles-5.jpeg';
const waffles6 = '../assets/Products/waffles-6.jpeg';
const waffles7 = '../assets/Products/waffles-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_POWDER,
    BANANA,
    BLUEBERRY,
    EGG,
    MEDIUM_BOWL,
    MILK,
    MIXER,
    MIXING_BOWL,
    NUTELLA,
    PEANUT_BUTTER,
    POWDERED_SUGAR,
    RASPBERRY,
    SALT,
    SMALL_BOWL,
    STRAWBERRY,
    SWEET_CHOCOLATE,
    SYRUP,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WAFFLE_MAKER,
    WHITE_SUGAR,
} = require('./ingredients');

const PREHEAT_WAFFLE_IRON = 'Preheat Waffle Iron';
const COOK_WAFFLES = 'Cook Waffles';

module.exports = {
    cardName: 'Waffles',
    name: 'Waffles',
    img: waffles7,
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.GRILL],
    type: [TYPES.BREAD],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.PEANUT, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Waffles',
            link: 'https://www.spendwithpennies.com/fluffy-homemade-waffle-recipe/',
            authors: ['Holly Nilsson'],
            finder: 'Kevin Ung',
        }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

        { ...MILK, amount: 5 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...UNSALTED_BUTTER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },

        { ...EGG, amount: 2, unit: '', additionalDetails: 'separated', section: SECTIONS.EGGS },

        { ...STRAWBERRY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BANANA, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BLUEBERRY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RASPBERRY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PEANUT_BUTTER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SYRUP, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SWEET_CHOCOLATE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...NUTELLA, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        WAFFLE_MAKER,
        MIXER,
    ],
    supplies: [
        MIXING_BOWL,
        MEDIUM_BOWL,
        SMALL_BOWL,
    ],
    directions: [
        { step: 'Preheat the waffle iron.', section: PREHEAT_WAFFLE_IRON },

        { step: `In a mixing bowl, combine the "${SECTIONS.DRY_INGREDIENTS}" section ingredients.`, section: SECTIONS.PREP_BATTER, img: waffles1 },
        { step: `In a large bowl, combine the "${SECTIONS.WET_INGREDIENTS}" section ingredients.`, section: SECTIONS.PREP_BATTER, img: waffles2 },
        { step: 'In a small bowl, beat egg whites with a mixer or with a fork.', section: SECTIONS.PREP_BATTER, img: waffles3 },
        { step: 'Add egg yolk to dry ingredients.', section: SECTIONS.PREP_BATTER },
        { step: 'Combine the wet and dry ingredients.', section: SECTIONS.PREP_BATTER },
        { step: 'Fold egg whites into the the combined ingredients.', section: SECTIONS.PREP_BATTER, img: waffles4 },

        { step: 'Once the waffle iron is heated, use a cooking spray on the waffle iron then fill between 3/4 way to almost full.', section: COOK_WAFFLES, img: waffles5 },
        { step: 'Cook until golden brown (for 3 to 5 minutes).', section: COOK_WAFFLES },

        { step: 'Eat these warm topped with your favorite toppings.', section: SECTIONS.SERVE, img: waffles6 },
    ],
    notes: [
        { note: 'To keep waffles warm, place them in an oven at 225ºF.' },
        { note: 'If you want to make buttermilk waffles, use buttermilk in place of milk and use 1 1/2 tsp baking powder instead and 1/2 tsp baking soda.' },
        { note: 'Do not overmix the batter. It is okay if there are a few lumps.' },
        { note: 'Fill the waffle iron until it is almost full--it will spill out a little bit.' },
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
            instruction: 'Bake at 300ºF until heated through (about 10 minutes).',
        },
    ],
    mealPrep: true,
}