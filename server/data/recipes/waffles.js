// const wraps = '../assets/Products/wraps.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');

module.exports = {
    cardName: 'Waffles',
    name: 'Waffles',
    // img: wraps,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.GRILL],
    type: [TYPES.BREAD],
    yields: '1 serving',
    prepTime: '1 m',
    cookTime: '2 m',
    websites: [
        'https://www.spendwithpennies.com/fluffy-homemade-waffle-recipe/'
    ],
    ingredients: [
        { name: 'flour', amount: '2 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'baking powder', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'sugar', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'large eggs', amount: '2', additionalDetails: 'separated', optional: false, section: SECTIONS.MAIN },
        { name: 'milk', amount: '1 2/3 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'butter', amount: '1/3 c', additionalDetails: 'melted', optional: false, section: SECTIONS.MAIN },
        { name: 'vanilla', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'strawberries', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'banana', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'blueberries', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'raspberries', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'peanut butter', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'syrup', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'chocolate', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'nutella', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'powder sugar', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
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
        { step: 'Whisk together flour, baking powder, salt and sugar in a mixing bowl.', type: SECTIONS.MAIN },
        { step: 'In a large bowl, mix together milk, butter, and vanilla.', type: SECTIONS.MAIN },
        { step: 'In a small bowl, beat egg whites with a mixer.', type: SECTIONS.MAIN },
        { step: 'Add egg yolk to dry ingredients.', type: SECTIONS.MAIN },
        { step: 'Combine the wet and dry ingredients.', type: SECTIONS.MAIN },
        { step: 'Fold egg whites into the the combined ingredients.', type: SECTIONS.MAIN },
        { step: 'Once the waffle iron is heated, lightly brush the iron with oil.', type: SECTIONS.MAIN },
        { step: 'Fill the waffle iron about 3/4 way with the batter and cook for 3 to 5 minutes.', type: SECTIONS.MAIN },
    ]
}