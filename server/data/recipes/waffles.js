const aesthetic = '../assets/Products/waffles-aesthetic.jpeg';
const iron = '../assets/Products/waffles-iron.jpeg';
// const plated = '../assets/Products/waffles-plated.jpeg';
const zoomed = '../assets/Products/waffles-zoomed.jpeg';
const batter = '../assets/Products/waffles-batter.jpeg';
const dry = '../assets/Products/waffles-dry-ingredients.jpeg';
const wet = '../assets/Products/waffles-wet-ingredients.jpeg';
const egg = '../assets/Products/waffles-egg-whites-fluffed.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_POWDER,
    SALT,
    WHITE_SUGAR,
    EGGS,
    MILK,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    STRAWBERRIES,
    BANANA,
    BLUEBERRIES,
    RASPBERRIES,
    PEANUT_BUTTER,
    SYRUP,
    SWEET_CHOCOLATE,
    NUTELLA,
    POWDERED_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Waffles',
    name: 'Waffles',
    img: zoomed,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.GRILL],
    type: [TYPES.BREAD],
    yields: '3 servings',
    prepTime: '1 m',
    cookTime: '2 m',
    websites: [
        'https://www.spendwithpennies.com/fluffy-homemade-waffle-recipe/'
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '2', additionalDetails: 'separated', section: SECTIONS.MAIN },
        { ...MILK, amount: '1 2/3 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '1/3 c', additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...STRAWBERRIES, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BANANA, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BLUEBERRIES, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RASPBERRIES, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PEANUT_BUTTER, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SYRUP, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SWEET_CHOCOLATE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...NUTELLA, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...POWDERED_SUGAR, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'waffle iron' },
        { name: 'mixer' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Preheat the waffle iron.', type: SECTIONS.MAIN },
        { step: 'Whisk together flour, baking powder, salt and sugar in a mixing bowl.', type: SECTIONS.MAIN, img: dry },
        { step: 'In a large bowl, mix together milk, butter, and vanilla.', type: SECTIONS.MAIN, img: wet },
        { step: 'In a small bowl, beat egg whites with a mixer or with a fork.', type: SECTIONS.MAIN, img: egg },
        { step: 'Add egg yolk to dry ingredients.', type: SECTIONS.MAIN },
        { step: 'Combine the wet and dry ingredients.', type: SECTIONS.MAIN },
        { step: 'Fold egg whites into the the combined ingredients.', type: SECTIONS.MAIN, img: batter },
        { step: 'Once the waffle iron is heated, use a cooking spray on the waffle iron then fill between 3/4 way to almost full.', type: SECTIONS.MAIN, img: iron },
        { step: 'Cook for 3 to 5 minutes, or until golden brown.', type: SECTIONS.MAIN },
        { step: 'Eat these warm topped with your favorite toppings.', type: SECTIONS.SERVE, img: aesthetic },
    ],
    notes: [
        'To keep waffles warm, place them in an oven at 225ºF.',
        'If you want to make buttermilk waffles, use buttermilk in place of milk and use 1 1/2 tsp baking powder instead and 1/2 tsp baking soda.',
        'Do not overmix the batter. It is okay if there are a few lumps.',
        'Fill the waffle iron until it is almost full--it will spill out a little bit.'
    ]
}