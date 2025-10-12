const roast1 = '../assets/Products/roasted-pork-belly-1.jpeg';
const roast2 = '../assets/Products/roasted-pork-belly-2.jpeg';
const roast3 = '../assets/Products/roasted-pork-belly-3.jpeg';
const roast4 = '../assets/Products/roasted-pork-belly-4.jpeg';
const roast5 = '../assets/Products/roasted-pork-belly-5.jpeg';
const roast6 = '../assets/Products/roasted-pork-belly-6.jpeg';
const roast7 = '../assets/Products/roasted-pork-belly-7.jpeg';
const roast8 = '../assets/Products/roasted-pork-belly-8.jpeg';
const roast9 = '../assets/Products/roasted-pork-belly-9.jpeg';
const roast10 = '../assets/Products/roasted-pork-belly-10.jpeg';
const roast11 = '../assets/Products/roasted-pork-belly-11.jpeg';
const roast12 = '../assets/Products/roasted-pork-belly-12.jpeg';
const roast13 = '../assets/Products/roasted-pork-belly-13.jpeg';
const roast14 = '../assets/Products/roasted-pork-belly-14.jpeg';
const roast15 = '../assets/Products/roasted-pork-belly-15.jpeg';

const fiveSpicePowder = '../assets/Products/five-spices-blend-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { EGG_WHITES, HOISIN_SAUCE, PORK_BELLY, SALT, SHAOXING_WINE, VEGETABLE_OIL, WHITE_PEPPER, WHITE_SUGAR, WHITE_VINEGAR } = require('./ingredients');

const PORK_BELLY_SECTION = 'Pork Belly';
const RUB_SECTION = 'Spices';

const PREP_PORK_BELLY = 'Prep Pork Belly';
const COOK_PORK_BELLY = 'Cook Pork Belly';

module.exports = {
    cardName: 'Roasted Pork Belly',
    name: 'Roasted Pork Belly',
    img: roast14,
    recipeAuthors: ['Chris Joe'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.AIR_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Roasted Pork Belly', link: 'https://cjeatsrecipes.com/air-fryer-crispy-pork-belly/' }
    ],
    separated: true,
    ingredients: [
        { ...PORK_BELLY, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'skin on', section: PORK_BELLY_SECTION },

        { ...HOISIN_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RUB_SECTION },
        { ...SHAOXING_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RUB_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RUB_SECTION },
        { ...WHITE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RUB_SECTION },
        { name: '5-Spice', amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RUB_SECTION, link: { id: 'five-spice-blend', url: 'recipes/five-spice-blend' }, img: fiveSpicePowder },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RUB_SECTION },

        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PORK_BELLY_SECTION },
        { ...EGG_WHITES, amount: 1, unit: '', additionalDetails: '', section: PORK_BELLY_SECTION },

        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PORK_BELLY_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PORK_BELLY_SECTION },

    ],
    appliances: [
        { name: 'air fryer' },
    ],
    supplies: [
        { name: 'fork' },
        { name: 'knife' },
        { name: '3 small bowls' },
        { name: 'aluminum foil' },
        { name: 'cooking brush' },
    ],
    directions: [
        { step: 'Pat the pork belly dry with paper towels.', section: PREP_PORK_BELLY },
        { step: 'Poke holes on the pork skin (not the meat) using a fork or knife.', section: PREP_PORK_BELLY, img: roast2 },
        { step: 'Score the meat in a criss cross pattern (1 inch apart, 1/4 inch deep).', section: PREP_PORK_BELLY, img: roast3 },
        { step: `In a small bowl, combine the "${RUB_SECTION}" section ingredients.`, section: PREP_PORK_BELLY, img: roast1 },
        { step: 'Brush the meat side with the rub mixture.', section: PREP_PORK_BELLY, img: [roast4, roast5] },
        { step: 'Cover the pork in aluminum foil except the skin.', section: PREP_PORK_BELLY, img: roast6 },
        { step: 'In a small bowl, combine egg whites and salt until it becomes a paste.', section: PREP_PORK_BELLY, img: [roast7, roast8] },
        { step: 'Brush the skin with vinegar.', section: PREP_PORK_BELLY },
        { step: 'Cover with the salt mixture and rub into the pork.', section: PREP_PORK_BELLY, img: [roast9, roast10] },
        { step: 'Air fry at 250ºF until the salt has dried (about 30 minutes).', section: COOK_PORK_BELLY, img: roast11 },
        { step: 'Remove the salt and pat dry with a paper towel.', section: COOK_PORK_BELLY, img: roast12 },
        { step: 'Brush the skin with oil.', section: COOK_PORK_BELLY },
        { step: 'Air fry at 400ºF until the skin is golden and crispy (about 30 to 40 minutes). Check the pork at 20 minutes and then every 5 minutes after that. Cover the areas that are beginning to burn with tin foil.', section: COOK_PORK_BELLY, img: roast13 },
        { step: 'Let it rest for about 10 minutes before carving.', section: COOK_PORK_BELLY },
        { step: 'Serve and enjoy! It will be salty so best eaten with rice.', section: SECTIONS.SERVE, img: roast15 },
    ],
    notes: [
        { note: 'Rubbing the skin with salt helps draw moisture from the pork skin and helps it crisp up better.' },
        { note: 'Letting the pork rest after cooking will help the juices redistribute and make the meat more tender.' },
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
            instruction: 'Air fry at 400ºF with the skin side up until crispy (about 10 to 15 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a little water, cover with foil and bake at 400ºF until warmed through (about 15 minutes). Remove the foil and broil to crisp the skin (about 1 to 2 minutes).',
        },
    ],
    mealPrep: true,
};