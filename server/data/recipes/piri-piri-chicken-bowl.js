const bowl1 = '../assets/Products/piri-piri-chicken-bowl-1.jpeg';
const bowl2 = '../assets/Products/piri-piri-chicken-bowl-2.jpeg';
const bowl3 = '../assets/Products/piri-piri-chicken-bowl-3.jpeg';
const bowl4 = '../assets/Products/piri-piri-chicken-bowl-4.jpeg';
const bowl5 = '../assets/Products/piri-piri-chicken-bowl-5.jpeg';
const bowl6 = '../assets/Products/piri-piri-chicken-bowl-6.jpeg';
const bowl7 = '../assets/Products/piri-piri-chicken-bowl-7.jpeg';
const bowl8 = '../assets/Products/piri-piri-chicken-bowl-8.jpeg';
const bowl9 = '../assets/Products/piri-piri-chicken-bowl-9.jpeg';
const bowl10 = '../assets/Products/piri-piri-chicken-bowl-10.jpeg';
const bowl11 = '../assets/Products/piri-piri-chicken-bowl-11.jpeg';
const bowl12 = '../assets/Products/piri-piri-chicken-bowl-12.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { CHICKEN_THIGH, OLIVE_OIL, LEMON_JUICE, GARLIC, THAI_CHILI_PEPPER, BROWN_SUGAR, OREGANO, SWEET_PAPRIKA, CAYENNE_PEPPER, SALT, CORN, BABY_ARUGULA, AVOCADO, BLACK_PEPPER, VEGETABLE_OIL, BASMATI_RICE, CHICKEN_BROTH, CRUSHED_TOMATOES, SMOKED_PAPRIKA, BAY_LEAVES, CILANTRO, NANDOS_PERI_PERI_SAUCE, MAYONNAISE, DIJON_MUSTARD, HOT_SAUCE, CHIVE } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const MARINADE_SECTION = 'Marinade';
const CORN_SECTION = 'Corn';
const SALAD_SECTION = 'Salad';
const RICE_SECTION = 'Rice';
const SAUCE_SECTION = 'Sauce';

const MAKE_MARINADE = 'Make Marinade';
const MARINATE_CHICKEN = 'Marinate Chicken';
const COOK_RICE = 'Cook Rice';
const GRILL_CHICKEN = 'Grill Chicken';
const CHAR_CORN = 'Char Corn';
const MAKE_SAUCE = 'Make Sauce';
const ASSEMBLE_RICE_BOWL = 'Assemble Rice Bowl';

module.exports = {
    cardName: 'Piri Piri Chicken Bowl',
    name: 'Piri Piri Chicken Bowl',
    img: bowl12,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AFRICAN, GENRES.PORTUGUESE],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.SALAD],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Piri Piri Chicken', link: 'https://thebigmansworld.com/peri-peri-chicken/' },
        { label: 'Charred Corn and Salad', link: 'https://simply-delicious-food.com/peri-peri-chicken-salad/' },
        { label: 'Piri Piri Rice', link: 'https://vikalinka.com/easy-peri-peri-rice/' },
        { label: 'Piri Piri Aioli Sauce', link: 'https://weekdaypescatarian.com/spicy-aioli-sauce/' },
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_THIGH, amount: 6, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'bone-in', section: CHICKEN_SECTION },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MARINADE_SECTION },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MARINADE_SECTION },
        { ...GARLIC, amount: 3, unit: '', additionalDetails: 'minced', section: MARINADE_SECTION },
        { ...THAI_CHILI_PEPPER, amount: 1, unit: '', additionalDetails: '', section: MARINADE_SECTION },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MARINADE_SECTION },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MARINADE_SECTION },
        { ...SWEET_PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MARINADE_SECTION },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MARINADE_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MARINADE_SECTION },

        { ...CORN, amount: 3, unit: INGREDIENT_UNITS.EAR, additionalDetails: '', section: CORN_SECTION },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: '', section: CORN_SECTION },

        { ...BABY_ARUGULA, amount: '', unit: '', additionalDetails: '', section: SALAD_SECTION },
        { ...AVOCADO, amount: 1, unit: '', additionalDetails: 'sliced', section: SALAD_SECTION },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SALAD_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SALAD_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SALAD_SECTION },

        { ...BASMATI_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICE_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: RICE_SECTION },
        { ...CHICKEN_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...CRUSHED_TOMATOES, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...NANDOS_PERI_PERI_SAUCE, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICE_SECTION },
        { ...SMOKED_PAPRIKA, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_SECTION },
        { ...BAY_LEAVES, amount: 1, unit: '', additionalDetails: '', section: RICE_SECTION },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_SECTION },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: RICE_SECTION },

        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...GARLIC, amount: 1, unit: '', additionalDetails: 'minced', section: SAUCE_SECTION },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...HOT_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...CHIVE, amount: '', unit: '', additionalDetails: 'diced', section: SAUCE_SECTION },
    ],
    appliances: [
        { name: 'grill/grill pan/grill griddle' },
        { name: 'food processor or blender' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowls' },
        { name: 'knife' },
        { name: 'cooking brush' },
        { name: 'large pot' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'In a blender or food processor, combine all the "Marinade" section ingredients.', type: MAKE_MARINADE, img: bowl1 },
        { step: 'In a mixing bowl, combine chicken and the marinade.', type: MARINATE_CHICKEN, img: bowl2 },
        { step: 'Refrigerate overnight or at least 10 hours.', type: MARINATE_CHICKEN },

        { step: 'Wash the rice until the water is no longer murky.', type: COOK_RICE },
        { step: 'Over low heat, heat oil in a large pot.', type: COOK_RICE },
        { step: 'Add garlic and cook for 30 seconds.', type: COOK_RICE, img: bowl3 },
        { step: 'Add the rest of the "Rice" section ingredient (except the cilantro). Stir and bring to a boil.', type: COOK_RICE, img: bowl4 },
        { step: 'Over medium heat, cover with a lid and cook for 10 minutes.', type: COOK_RICE, img: bowl6 },
        { step: 'Turn heat off and leave the pot on the stove with the lid on for another 10 minutes.', type: COOK_RICE, img: bowl8 },

        { step: 'Heat a grill, grill griddle, or a grill pan on a stove.', type: GRILL_CHICKEN },
        { step: 'Once the preferred grill method gets hot, add the chicken. Cook chicken until it reaches an internal temperature of 165ºF, flip chicken regularly (about 12 minutes).', type: GRILL_CHICKEN, img: [bowl7, bowl9] },

        { step: 'Brush corn with olive oil.', type: CHAR_CORN },
        { step: 'Follow the same grilling method as the chicken, cook the corn and rotate every couple minutes until it is charred all around.', type: CHAR_CORN, img: bowl10 },
        { step: 'In a mixing bowl, combine together the rest of the salad ingredients.', type: ASSEMBLE_RICE_BOWL },
        { step: 'Remove the corn kernels by slicing them off with a knife. Add to the salad.', type: ASSEMBLE_RICE_BOWL },

        { step: 'In a small bowl, combine all the "Sauce" section ingredients.', type: MAKE_SAUCE, img: bowl5 },
        { step: 'Chill for 15 minutes.', type: MAKE_SAUCE },

        { step: 'Plate some rice, add salad and slice up some chicken. Top with the peri peri sauce.', type: SECTIONS.SERVE, img: bowl11 },
    ]
};