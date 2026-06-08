const burrito1 = '../assets/Products/breakfast-burrito-1.jpeg';
const burrito2 = '../assets/Products/breakfast-burrito-2.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BREAKFAST_SAUSAGE, EGG, LARGE_PAN, MEDIUM_BOWL, MONTEREY_JACK_CHEESE, PAPRIKA, PLATE, SALT, SLOTTED_SPOON, STOVE, TORTILLA, VEGETABLE_OIL } = require('./ingredients');

const BURRITO_SECTION = 'Burrito Section';

const COOK_BURRITO = 'Cook Burrito';

module.exports = {
    cardName: 'Breakfast Burrito',
    name: 'Breakfast Burrito',
    img: burrito1,
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
    ingredients: [
        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: BURRITO_SECTION },
        { ...PAPRIKA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BURRITO_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BURRITO_SECTION },
        { ...BREAKFAST_SAUSAGE, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BURRITO_SECTION },
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
        { step: `In a medium bowl, combine eggs, paprika and salt. Set aside.`, section: SECTIONS.COOK_FILLING },
        { step: `Over medium-high heat, heat a large pan.`, section: SECTIONS.COOK_FILLING },
        { step: `Add sausage. Cook and stir frequently until browned (about 4 to 5 minutes).`, section: SECTIONS.COOK_FILLING },
        { step: `Transfer the sausage with a slotted spoon. Use the drippings for the eggs.`, section: SECTIONS.COOK_FILLING },
        { step: `Bring to low heat, add the eggs. Scramble and cook until just cooked through.`, section: SECTIONS.COOK_FILLING },
        { step: `Transfer cooked eggs to plate.`, section: SECTIONS.COOK_FILLING },
        { step: `Wipe pan clean.`, section: SECTIONS.COOK_FILLING },
        { step: `Add 1/4 of the sausage, eggs and cheese to each tortilla.`, section: SECTIONS.ASSEMBLE },
        { step: `Fold the sides and roll the burrito, tucking in the edges as you roll.`, section: SECTIONS.ASSEMBLE },
        { step: `Over medium heat, heat oil in the pan.`, section: COOK_BURRITO },
        { step: `Add burritos seam side down. Cover with a lid.`, section: COOK_BURRITO },
        { step: `Cook until the bottom is golden brown (about 3 minutes).`, section: COOK_BURRITO },
        { step: `Flip and continue cooking until bottom is golden brown (a few minutes).`, section: COOK_BURRITO },
        { step: `Enjoy this warm`, section: SECTIONS.SERVE, img: burrito2 },
    ],
    notes: [
        { note: 'I did not like chorizo as the protein for this recipe, so I am going to substitute it with sausage next time.' },
        { note: 'I also did not like the avocado tomato salsa in this original recipe, so I have omitted it from the recipe all together.'}
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