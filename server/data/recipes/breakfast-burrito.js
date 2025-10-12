// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { AVOCADO, CHORIZO, CILANTRO, CUMIN, EGG, GARLIC, JALAPENO_PEPPER, LARGE_PAN, LIME_JUICE, MEDIUM_BOWL, MONTEREY_JACK_CHEESE, PAPRIKA, PLATE, SALT, SHALLOT, SLOTTED_SPOON, STOVE, TORTILLA, VEGETABLE_OIL, VINE_TOMATO } = require('./ingredients');

const AVOCADO_TOMATO_SALSA_SECTION = 'Avocado Tomato Salsa';
const BURRITO_SECTION = 'Burrito Section';

const PREPARE_SALSA = 'Prepare Salsa';
const COOK_BURRITO = 'Cook Burrito';

module.exports = {
    wip: true,
    cardName: 'Breakfast Burrito',
    name: 'Breakfast Burrito',
    img: '',
    recipeAuthors: ['Jennifer Segal'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.BURRITO],
    allergies: [ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
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
        { ...TORTILLA, amount: 4, unit: '', additionalDetails: '10 inch size', section: BURRITO_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BURRITO_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MEDIUM_BOWL,
        {...LARGE_PAN, additionalDetails: 'with lid' },
        SLOTTED_SPOON,
        PLATE,
    ],
    directions: [
        { step: `In a medium bowl, combine the "${AVOCADO_TOMATO_SALSA_SECTION}" section ingredients.`, section: PREPARE_SALSA },
        { step: 'In a medium bowl, combine eggs, paprika and salt. Set aside.', section: SECTIONS.COOK_FILLING },
        { step: 'Over medium-high heat, heat a large pan.', section: SECTIONS.COOK_FILLING },
        { step: 'Add sausage. Cook and stir frequently until browned (about 4 to 5 minutes).', section: SECTIONS.COOK_FILLING },
        { step: 'Transfer the sausage with a slotted spoon. Use the drippings for the eggs.', section: SECTIONS.COOK_FILLING },
        { step: 'Bring to low heat, add the eggs. Scramble and cook until just cooked through.', section: SECTIONS.COOK_FILLING },
        { step: 'Transfer cooked eggs to plate.', section: SECTIONS.COOK_FILLING },
        { step: 'Wipe pan clean.', section: SECTIONS.COOK_FILLING },
        { step: 'Fill each tortilla with 1/4 cup salsa. There will be a little leftover for topping.', section: SECTIONS.ASSEMBLE },
        { step: 'Add 1/4 of the sausage, eggs and cheese to each tortilla.', section: SECTIONS.ASSEMBLE },
        { step: 'Fold the sides and roll the burrito, tucking in the edges as you roll.', section: SECTIONS.ASSEMBLE },
        { step: 'Over medium heat, heat oil in the pan.', section: COOK_BURRITO },
        { step: 'Add burritos seam side down. Cover with a lid.', section: COOK_BURRITO },
        { step: 'Cook until the bottom is golden brown (about 3 minutes).', section: COOK_BURRITO },
        { step: 'Flip and continue cooking until bottom is golden brown (a few minutes).', section: COOK_BURRITO },
        { step: 'Enjoy this warm', section: SECTIONS.SERVE },
        { step: 'Wrap in foil and warm them at 350ºF for 15 minutes. They won\'t be as crispy but are still good.', section: SECTIONS.REHEAT },
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
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 330ºF until heated through and the tortilla is golden brown (about 10 to 15 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Wrap in foil and bake at 350ºF until heated through and the tortilla is crispy (about 20 to 30 minutes).',
        },
    ],
    mealPrep: true,
};