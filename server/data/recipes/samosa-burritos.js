// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { TORTILLA, CAULIFLOWER, POTATO, RED_ONION, JALAPENO_PEPPER, GARLIC, CUMIN, CORIANDER, GARAM_MASALA, FENNEL_SEEDS, TURMERIC, LEMON_JUICE, FROZEN_PEAS, SEA_SALT, BLACK_PEPPER, GINGER_PUREE, VEGETABLE_BROTH, GINGER, GREEK_YOGURT, MINT_LEAF, CILANTRO, MAPLE_SYRUP, LIME_JUICE } = require('./ingredients');

const TORTILLA_SECTION = 'Tortilla';
const VEGETABLES_SECTION = 'Vegetables';
const HERBS_SECTION = 'Herbs';
const PEAS_SECTION = 'Peas';
const CHUTNEY_SECTION = 'Chutney';

const PREP_TORTILLA = 'Prep Tortilla';
const PREP_FILLING = 'Prep Filling';
const ASSEMBLE_AND_COOK = 'Assemble and Cook';
const PREP_CHUTNEY = 'Prep Chutney';

module.exports = {
    wip: true,
    cardName: 'Samosa Burritos',
    name: 'Samosa Burritos',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Chelsey Hickenlooper',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BURRITO],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Samosa Burritos', link: 'https://www.plantpurenation.com/blogs/recipes/samosa-burritos' }
    ],
    separated: true,
    ingredients: [
        { ...TORTILLA, amount: 8, unit: '', additionalDetails: '', section: TORTILLA_SECTION },
        { ...CAULIFLOWER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: VEGETABLES_SECTION },
        { ...POTATO, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: VEGETABLES_SECTION },
        { ...RED_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: VEGETABLES_SECTION },
        { ...JALAPENO_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: VEGETABLES_SECTION },
        { ...VEGETABLE_BROTH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGETABLES_SECTION },

        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: HERBS_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HERBS_SECTION },
        { ...CUMIN, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HERBS_SECTION },
        { ...CORIANDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HERBS_SECTION },
        { ...GARAM_MASALA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HERBS_SECTION },
        { ...FENNEL_SEEDS, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HERBS_SECTION },
        { ...TURMERIC, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: HERBS_SECTION },

        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PEAS_SECTION },
        { ...FROZEN_PEAS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PEAS_SECTION },
        { ...SEA_SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEAS_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEAS_SECTION },

        { ...GREEK_YOGURT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHUTNEY_SECTION },
        { ...MINT_LEAF, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHUTNEY_SECTION },
        { ...CILANTRO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHUTNEY_SECTION },
        { ...JALAPENO_PEPPER, amount: 1, unit: '', additionalDetails: 'seeded', section: CHUTNEY_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'grated', section: CHUTNEY_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: CHUTNEY_SECTION },
        { ...MAPLE_SYRUP, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHUTNEY_SECTION },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHUTNEY_SECTION },
        { ...SEA_SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHUTNEY_SECTION },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
        { name: 'blender' },
    ],
    supplies: [
        { name: 'damp kitchen towel' },
        { name: 'baking dish' },
        { name: 'aluminum foil' },
        { name: 'large pot' },
        { name: 'large pan' },
        { name: 'baking sheet' },
        { name: 'parchment paper' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREP_TORTILLA },
        { step: 'Wrap the tortilla in a damp kitchen towel. Place in a baking dish and cover with foil.', section: PREP_TORTILLA },
        { step: 'Heat until they are warmed through (about 15 to 20 minutes).', section: PREP_TORTILLA },
        { step: 'Over medium-high heat, bring a pot of water to a boil.', section: PREP_FILLING },
        { step: 'Add potatoes and cauliflower. Boil until tender.', section: PREP_FILLING },
        { step: 'Drain. Set aside.', section: PREP_FILLING },
        { step: 'Over medium-high heat, add onions and jalapeno to a large pan.', section: PREP_FILLING },
        { step: 'Saute and deglaze with a little vegetable broth as needed.', section: PREP_FILLING },
        { step: 'Once onions are tender, add the "Herbs" section ingredients.', section: PREP_FILLING },
        { step: 'Turn down to medium-low heat and simmer for 5 minutes.', section: PREP_FILLING },
        { step: 'Add potatoes, cauliflower and all the "Peas" section ingredients. Mix and slightly mash the potatoes and cauliflower.', section: PREP_FILLING },
        { step: 'Turn up to medium heat and cook for 8 to 10 minutes.', section: PREP_FILLING },
        { step: 'Turn oven to 400ºF (make sure to remove the tortillas from the oven).', section: ASSEMBLE_AND_COOK },
        { step: 'Line a baking sheet with parchment paper.', section: ASSEMBLE_AND_COOK },
        { step: 'Fill the tortilla with about 1/2 to 3/4 cup of filling (avoid overfilling).', section: ASSEMBLE_AND_COOK },
        { step: 'Carefully fold the sides and roll into a burrito.', section: ASSEMBLE_AND_COOK },
        { step: 'Place the burrito on the baking sheet with the seam side down.', section: ASSEMBLE_AND_COOK },
        { step: 'Bake until golden brown and crispy (about 10 to 15 minutes).', section: ASSEMBLE_AND_COOK },
        { step: 'While the burritos are baking, add all the "Chutney" section ingredients to a blender.', section: PREP_CHUTNEY },
        { step: 'Blend until smooth and creamy.', section: PREP_CHUTNEY },
        { step: 'Pair these with your favorite condiments.', section: SECTIONS.SERVE },
    ]
};