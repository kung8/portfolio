// const roast1 = '../assets/Products/roasted-pork-belly-1.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, TYPES } = require('./constants');
const { PORK_BELLY, SALT, EGG_WHITES, HOISIN_SAUCE, SHAOXING_WINE, VEGETABLE_OIL, WHITE_SUGAR, WHITE_PEPPER, WHITE_VINEGAR } = require('./ingredients');

const PORK_BELLY_SECTION = 'Pork Belly';
const SPICES_SECTION = 'Spices';

const PREP_PORK_BELLY = 'Prep Pork Belly';
const COOK_PORK_BELLY = 'Cook Pork Belly';

module.exports = {
    wip: true,
    cardName: 'Roasted Pork Belly',
    name: 'Roasted Pork Belly',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.AIR_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '1 h',
    websites: [
        { label: 'Roasted Pork Belly', link: 'https://cjeatsrecipes.com/air-fryer-crispy-pork-belly/' }
    ],
    separated: true,
    ingredients: [
        { ...PORK_BELLY, amount: '3 lbs', additionalDetails: 'skin on', section: PORK_BELLY_SECTION },
        { ...HOISIN_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: PORK_BELLY_SECTION },
        { ...SHAOXING_WINE, amount: '1/2 Tbsp', additionalDetails: '', section: PORK_BELLY_SECTION },
        { ...SALT, amount: '1 c', additionalDetails: '', section: PORK_BELLY_SECTION },
        { ...EGG_WHITES, amount: '1', additionalDetails: '', section: PORK_BELLY_SECTION },
        { ...WHITE_VINEGAR, amount: '1 Tbsp', additionalDetails: '', section: PORK_BELLY_SECTION },
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', section: PORK_BELLY_SECTION },

        { ...SALT, amount: '1/2 Tbsp', additionalDetails: '', section: SPICES_SECTION },
        { ...WHITE_PEPPER, amount: '1/2 Tbsp', additionalDetails: '', section: SPICES_SECTION },
        { name: '5-Spice', amount: '1/2 Tbsp', additionalDetails: '', section: SPICES_SECTION, link: { id: 'five-spice-blend', url: 'recipes/five-spice-blend' } },
        { ...WHITE_SUGAR, amount: '1/2 Tbsp', additionalDetails: '', section: SPICES_SECTION },
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
        { step: 'Pat the pork belly dry with paper towels.', type: PREP_PORK_BELLY },
        { step: 'Poke holes on the pork skin (not the meat) using a fork or knife.', type: PREP_PORK_BELLY },
        { step: 'Score the meat in a criss cross pattern (1 inch apart, 1/4 inch deep).', type: PREP_PORK_BELLY },
        { step: 'In a small bowl, combine hoisin sauce and shaoxing wine.', type: PREP_PORK_BELLY },
        { step: 'Brush the meat side with the sauce mixture.', type: PREP_PORK_BELLY },
        { step: 'In a small bowl, combine all the "Spice" section ingredients.', type: PREP_PORK_BELLY },
        { step: 'Cover the pork in aluminum foil except the skin.', type: PREP_PORK_BELLY },
        { step: 'In a small bowl, combine egg whites and salt until it becomes a paste.', type: PREP_PORK_BELLY },
        { step: 'Brush the skin with vinegar.', type: PREP_PORK_BELLY },
        { step: 'Cover with the salt mixture and rub into the pork.', type: PREP_PORK_BELLY },
        { step: 'Air fry at 250ºF until the salt has dried (about 30 minutes).', type: COOK_PORK_BELLY },
        { step: 'Remove the salt and pat dry with a paper towel.', type: COOK_PORK_BELLY },
        { step: 'Brush the skin with oil.', type: COOK_PORK_BELLY },
        { step: 'Air fry at 400ºF until the skin is golden and crispy (about 30 to 40 minutes). Check the pork at 20 minutes and then every 5 minutes after that. Cover the areas that are beginning to burn with tin foil.', type: COOK_PORK_BELLY },
        { step: 'Let it rest for about 10 minutes before carving.', type: COOK_PORK_BELLY },
    ],
    notes: [
        { note: 'Rubbing the skin with salt helps draw moisture from the pork skin and helps it crisp up better.' },
        { note: 'Letting the pork rest after cooking will help the juices redistribute and make the meat more tender.' },
    ]
};