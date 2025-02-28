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
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { SALT, BAKING_SODA, BACON, SMALL_YELLOW_ONION, BROWN_SUGAR, KETCHUP, MAPLE_SYRUP, APPLE_CIDER_VINEGAR, DRY_NAVY_BEAN } = require('./ingredients');

const BEANS = 'Beans';

module.exports = {
    cardName: 'Baked Beans',
    name: 'Baked Beans',
    img: plateZoomed,
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK, PROTEIN.BEAN],
    type: [TYPES.PROTEIN],
    yields: '14 servings',
    prepTime: '30 m',
    cookTime: '3 h',
    websites: [
        { label: 'Baked Beans', link: 'https://dancearoundthekitchen.com/baked-beans-from-scratch/' }
    ],
    separated: true,
    ingredients: [
        { ...DRY_NAVY_BEAN, amount: '1 lb', additionalDetails: '', section: BEANS },
        { ...SALT, amount: '2 tsp', additionalDetails: '', section: BEANS },
        { ...BAKING_SODA, amount: '1/4 tsp', additionalDetails: '', section: BEANS },
        { ...BACON, amount: '8 slices', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...SMALL_YELLOW_ONION, amount: '1 c', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...KETCHUP, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MAPLE_SYRUP, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...APPLE_CIDER_VINEGAR, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'dutch oven pot' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a large pot, add the dry beans.', type: BEANS, img: label },
        { step: 'Fill the pot with cold water until it is a few inches above the beans.', type: BEANS, img: soaking },
        { step: 'Cover with a lid and soak the beans for 12 hours or overnight.', type: BEANS },
        { step: 'Drain beans in a colander.', type: BEANS, img: drained },
        { step: 'Again fill the pot with water until there\'s 2 inches above the beans.', type: BEANS, img: boiling },
        { step: 'Add salt and baking soda and mix.', type: BEANS, img: seasoning },
        { step: 'Over medium-high heat, bring the pot of beans to a boil.', type: BEANS },
        { step: 'Reduce to a low heat and simmer for one hour. Stirring occasionally.', type: BEANS },
        { step: 'Drain the beans. Reserve about 3 cups of the bean water for later. Set aside the beans.', type: BEANS },
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Over medium-high heat, add the diced bacon in a dutch oven pot. Cook for a few minutes.', type: SECTIONS.MAIN, img: cookingBacon },
        { step: 'Add onions. Cook until the bacon is crisp and onions are translucent.', type: SECTIONS.MAIN, img: cookingOnion },
        { step: 'Add the brown sugar, ketchup, syrup, apple cider vinegar and 1 1/2 cups of the bean liquid.', type: SECTIONS.MAIN, img: sauce },
        { step: 'Add the beans to the dutch oven and cover with a lid.', type: SECTIONS.MAIN, img: beanWithSauce },
        { step: 'Bake for 1 hour.', type: SECTIONS.MAIN },
        { step: 'Stir. If it looks dry, add more of the reserved bean water.', type: SECTIONS.MAIN },
        { step: 'Bake for another 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Remove the lid. Bake for another 30 minutes. The beans will thicken now.', type: SECTIONS.MAIN, img: cooked },
        { step: 'Stir and serve warm.', type: SECTIONS.MAIN },
    ]
};