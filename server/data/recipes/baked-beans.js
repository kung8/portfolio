const boiling = '../assets/Products/baked-beans-boiling.jpeg';
const cooked = '../assets/Products/baked-beans-cooked.jpeg';
const cookingBacon = '../assets/Products/baked-beans-cooking-bacon.jpeg';
const cookingOnion = '../assets/Products/baked-beans-cooking-onion.jpeg';
const drained = '../assets/Products/baked-beans-drained.jpeg';
const label = '../assets/Products/baked-beans-raw-with-label.jpeg';
const beanWithSauce = '../assets/Products/baked-beans-sauce-with-beans.jpeg';
const sauce = '../assets/Products/baked-beans-sauce.jpeg';
const seasoning = '../assets/Products/baked-beans-seasoning.jpeg';
const soaking = '../assets/Products/baked-beans-soaking.jpeg';
const plateZoomed = '../assets/Products/baked-beans-full-plate-zoomed.jpeg';
const { wip } = require('./apple-dump-cake');
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { SALT, BAKING_SODA, BACON, YELLOW_ONION, BROWN_SUGAR, KETCHUP, MAPLE_SYRUP, APPLE_CIDER_VINEGAR, DRY_NAVY_BEAN, LARGE_POT, DUTCH_OVEN_POT, SPATULA, STOVE, OVEN } = require('./ingredients');

const BEANS = 'Beans';

module.exports = {
    wip: true,
    cardName: 'Baked Beans',
    name: 'Baked Beans',
    img: plateZoomed,
    recipeAuthors: ['Kelsey'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK, PROTEIN.BEAN],
    type: [TYPES.PROTEIN],
    yields: { amount: 14, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 3, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Baked Beans', link: 'https://dancearoundthekitchen.com/baked-beans-from-scratch/' }
    ],
    separated: true,
    ingredients: [
        { ...DRY_NAVY_BEAN, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BEANS },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEANS },
        { ...BAKING_SODA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEANS },
        { ...BACON, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MAPLE_SYRUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...APPLE_CIDER_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        LARGE_POT,
        DUTCH_OVEN_POT,
        SPATULA,
    ],
    directions: [
        { step: 'In a large pot, add the dry beans.', section: BEANS, img: label },
        { step: 'Fill the pot with cold water until it is a few inches above the beans.', section: BEANS, img: soaking },
        { step: 'Cover with a lid and soak the beans for 12 hours or overnight.', section: BEANS },
        { step: 'Drain beans in a colander.', section: BEANS, img: drained },
        { step: 'Again fill the pot with water until there\'s 2 inches above the beans.', section: BEANS, img: boiling },
        { step: 'Add salt and baking soda and mix.', section: BEANS, img: seasoning },
        { step: 'Over medium-high heat, bring the pot of beans to a boil.', section: BEANS },
        { step: 'Reduce to a low heat and simmer for one hour. Stirring occasionally.', section: BEANS },
        { step: 'Drain the beans. Reserve about 3 cups of the bean water for later. Set aside the beans.', section: BEANS },
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Over medium-high heat, add the diced bacon in a dutch oven pot. Cook for a few minutes.', section: SECTIONS.MAIN, img: cookingBacon },
        { step: 'Add onions. Cook until the bacon is crisp and onions are translucent.', section: SECTIONS.MAIN, img: cookingOnion },
        { step: 'Add the brown sugar, ketchup, syrup, apple cider vinegar and 1 1/2 cups of the bean liquid.', section: SECTIONS.MAIN, img: sauce },
        { step: 'Add the beans to the dutch oven and cover with a lid.', section: SECTIONS.MAIN, img: beanWithSauce },
        { step: 'Bake for 1 hour.', section: SECTIONS.MAIN },
        { step: 'Stir. If it looks dry, add more of the reserved bean water.', section: SECTIONS.MAIN },
        { step: 'Bake for another 30 minutes.', section: SECTIONS.MAIN },
        { step: 'Remove the lid. Bake for another 30 minutes. The beans will thicken now.', section: SECTIONS.MAIN, img: cooked },
        { step: 'Stir and serve warm.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 6, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until hot and bubbly (about 30 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 30 seconds intervals, stirring in between, until hot.',
        },
    ],
    mealPrep: true,
};