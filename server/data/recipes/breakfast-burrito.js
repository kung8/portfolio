// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { AVOCADO, SHALLOT, GARLIC, JALAPENO_PEPPER, LIME_JUICE, SALT, CUMIN, CILANTRO, EGG, PAPRIKA, CHORIZO, MONTEREY_JACK_CHEESE, TORTILLA, VEGETABLE_OIL, VINE_TOMATO } = require('./ingredients');

const AVOCADO_TOMATO_SALSA_SECTION = 'Avocado Tomato Salsa';
const BURRITO_SECTION = 'Burrito Section';

const PREPARE_SALSA = 'Prepare Salsa';
const COOK_FILLING = 'Cook Filling';
const ASSEMBLE_BURRITO = 'Assemble Burrito';
const COOK_BURRITO = 'Cook Burrito';

module.exports = {
    wip: true,
    cardName: 'Breakfast Burrito',
    name: 'Breakfast Burrito',
    img: '',
    recipeAuthor: 'Jennifer Segal',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.BURRITO],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Breakfast Burrito', link: 'https://www.onceuponachef.com/recipes/breakfast-burritos.html' }
    ],
    separated: true,
    ingredients: [
        { ...AVOCADO, amount: 1, unit: '', additionalDetails: 'peeled, pitted and diced', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...VINE_TOMATO, amount: 2, unit: '', additionalDetails: 'diced seeded parts', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...SHALLOT, amount: 1, unit: '', additionalDetails: 'minced', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...JALAPENO_PEPPER, amount: 1, unit: '', additionalDetails: 'seeded and minced', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...CUMIN, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...CILANTRO, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: AVOCADO_TOMATO_SALSA_SECTION },
        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: BURRITO_SECTION },
        { ...PAPRIKA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BURRITO_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BURRITO_SECTION },
        { ...CHORIZO, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BURRITO_SECTION },
        { ...MONTEREY_JACK_CHEESE, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BURRITO_SECTION },
        { ...TORTILLA, amount: 4, unit: '', additionalDetails: '10-inch size', section: BURRITO_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BURRITO_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowls' },
        { name: 'large pan with lid' },
        { name: 'slotted spoon' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'In a medium bowl, combine the "Avocado-Tomato Salsa" section ingredients.', section: PREPARE_SALSA },
        { step: 'In a medium bowl, combine eggs, paprika and salt. Set aside.', section: COOK_FILLING },
        { step: 'Over medium-high heat, heat a large pan.', section: COOK_FILLING },
        { step: 'Add sausage. Cook and stir frequently until browned (about 4 to 5 minutes).', section: COOK_FILLING },
        { step: 'Transfer the sausage with a slotted spoon. Use the drippings for the eggs.', section: COOK_FILLING },
        { step: 'Bring to low heat, add the eggs. Scramble and cook until just cooked through.', section: COOK_FILLING },
        { step: 'Transfer cooked eggs to plate.', section: COOK_FILLING },
        { step: 'Wipe pan clean.', section: COOK_FILLING },
        { step: 'Fill each tortilla with 1/4 cup salsa. There will be a little leftover for topping.', section: ASSEMBLE_BURRITO },
        { step: 'Add 1/4 of the sausage, eggs and cheese to each tortilla.', section: ASSEMBLE_BURRITO },
        { step: 'Fold the sides and roll the burrito, tucking in the edges as you roll.', section: ASSEMBLE_BURRITO },
        { step: 'Over medium heat, heat oil in the pan.', section: COOK_BURRITO },
        { step: 'Add burritos seam side down. Cover with a lid.', section: COOK_BURRITO },
        { step: 'Cook until the bottom is golden brown (about 3 minutes).', section: COOK_BURRITO },
        { step: 'Flip and continue cooking until bottom is golden brown (a few minutes).', section: COOK_BURRITO },
        { step: 'Enjoy this warm', section: SECTIONS.SERVE },
        { step: 'Wrap in foil and warm them at 350ºF for 15 minutes. They won\'t be as crispy but are still good.', section: SECTIONS.REHEAT },
    ]
};