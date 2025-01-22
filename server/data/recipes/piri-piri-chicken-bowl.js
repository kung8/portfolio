// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { CHICKEN_THIGH, OLIVE_OIL, LEMON_JUICE, GARLIC, THAI_CHILI_PEPPERS, BROWN_SUGAR, OREGANO, SWEET_PAPRIKA, CAYENNE_PEPPER, SALT, CORN, BABY_ARUGULA, AVOCADO, BLACK_PEPPER, VEGETABLE_OIL, BASMATI_RICE, CHICKEN_BROTH, CRUSHED_TOMATOES, SMOKED_PAPRIKA, BAY_LEAVES, CILANTRO, NANDOS_PERI_PERI_SAUCE, MAYONNAISE, DIJON_MUSTARD, HOT_SAUCE, CHIVES } = require('./ingredients');

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
    wip: true,
    cardName: 'Piri Piri Chicken Bowl',
    name: 'Piri Piri Chicken Bowl',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AFRICAN, GENRES.PORTUGUESE],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.SALAD],
    yields: '6 servings',
    prepTime: '10 m',
    cookTime: '35 m',
    websites: [
        { label: 'Piri Piri Chicken', link: 'https://thebigmansworld.com/peri-peri-chicken/' },
        { label: 'Charred Corn and Salad', link: 'https://simply-delicious-food.com/peri-peri-chicken-salad/' },
        { label: 'Piri Piri Rice', link: 'https://vikalinka.com/easy-peri-peri-rice/' },
        { label: 'Piri Piri Aioli Sauce', link: 'https://weekdaypescatarian.com/spicy-aioli-sauce/' },
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_THIGH, amount: '6', additionalDetails: 'bone-in', section: CHICKEN_SECTION },
        { ...OLIVE_OIL, amount: '2 Tbp', additionalDetails: '', section: MARINADE_SECTION },
        { ...LEMON_JUICE, amount: '1 to 2 Tbsp', additionalDetails: '', section: MARINADE_SECTION },
        { ...GARLIC, amount: '3', additionalDetails: 'minced', section: MARINADE_SECTION },
        { ...THAI_CHILI_PEPPERS, amount: '1', additionalDetails: '', section: MARINADE_SECTION },
        { ...BROWN_SUGAR, amount: '1 Tbsp', additionalDetails: '', section: MARINADE_SECTION },
        { ...OREGANO, amount: '1 tsp', additionalDetails: '', section: MARINADE_SECTION },
        { ...SWEET_PAPRIKA, amount: '1 tsp', additionalDetails: '', section: MARINADE_SECTION },
        { ...CAYENNE_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: MARINADE_SECTION },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: MARINADE_SECTION },

        { ...CORN, amount: '2 to 3 ears of', additionalDetails: '', section: CORN_SECTION },
        { ...OLIVE_OIL, amount: '', additionalDetails: '', section: CORN_SECTION },

        { ...BABY_ARUGULA, amount: '', additionalDetails: '', section: SALAD_SECTION },
        { ...AVOCADO, amount: 'ripe', additionalDetails: 'sliced', section: SALAD_SECTION },
        { ...LEMON_JUICE, amount: '1 to 2 Tbsp', additionalDetails: '', section: SALAD_SECTION },
        { ...SALT, amount: '', additionalDetails: '', section: SALAD_SECTION },
        { ...BLACK_PEPPER, amount: '', additionalDetails: '', section: SALAD_SECTION },

        { ...VEGETABLE_OIL, amount: '1.5 Tbsp', additionalDetails: '', section: RICE_SECTION },
        { ...GARLIC, amount: '3', additionalDetails: 'minced', section: RICE_SECTION },
        { ...BASMATI_RICE, amount: '1.5 c', additionalDetails: '', section: RICE_SECTION },
        { ...CHICKEN_BROTH, amount: '3 c', additionalDetails: '', section: RICE_SECTION },
        { ...CRUSHED_TOMATOES, amount: '3/4 c', additionalDetails: '', section: RICE_SECTION },
        { ...NANDOS_PERI_PERI_SAUCE, amount: '1.5 Tbsp', additionalDetails: '', section: RICE_SECTION },
        { ...SMOKED_PAPRIKA, amount: '3/4 tsp', additionalDetails: '', section: RICE_SECTION },
        { ...BAY_LEAVES, amount: '1.5', additionalDetails: '', section: RICE_SECTION },
        { ...SALT, amount: '1.5 tsp', additionalDetails: '', section: RICE_SECTION },
        { ...CILANTRO, amount: '', additionalDetails: 'chopped', section: RICE_SECTION },

        { ...MAYONNAISE, amount: '1/2 c', additionalDetails: '', section: SAUCE_SECTION },
        { ...GARLIC, amount: '1', additionalDetails: 'minced', section: SAUCE_SECTION },
        { ...DIJON_MUSTARD, amount: '1 Tbsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...HOT_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...LEMON_JUICE, amount: '2 tsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...CAYENNE_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: SAUCE_SECTION },
        { ...CHIVES, amount: '', additionalDetails: 'diced', section: SAUCE_SECTION },
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
        { step: 'In a blender or food processor, combine all the "Marinade" section ingredients.', type: MAKE_MARINADE },
        { step: 'In a mixing bowl, combine chicken and the marinade.', type: MARINATE_CHICKEN },
        { step: 'Refrigerate overnight or at least 10 hours.', type: MARINATE_CHICKEN },

        { step: 'Wash the rice until the water is no longer murky.', type: COOK_RICE },
        { step: 'Over low heat, heat oil in a large pot.', type: COOK_RICE},
        { step: 'Add garlic and cook for 30 seconds.', type: COOK_RICE},
        { step: 'Add the rest of the "Rice" section ingredient (except the cilantro). Stir and bring to a boil.', type: COOK_RICE},
        { step: 'Over medium heat, cover with a lid and cook for 10 minutes.', type: COOK_RICE},
        { step: 'Turn heat off and leave the pot on the stove with the lid on for another 10 minutes.', type: COOK_RICE},

        { step: 'Heat a grill, grill griddle, or a grill pan on a stove.', type: GRILL_CHICKEN },
        { step: 'Once the preferred grill method gets hot, add the chicken. Cook chicken until it reaches an internal temperature of 165ºF, flip chicken regularly (about 12 minutes).', type: GRILL_CHICKEN },

        { step: 'Brush corn with olive oil.', type: CHAR_CORN },
        { step: 'Follow the same grilling method as the chicken, cook the corn and rotate every couple minutes until it is charred all around.', type: CHAR_CORN },
        { step: 'In a mixing bowl, combine together the rest of the salad ingredients.', type: ASSEMBLE_RICE_BOWL },
        { step: 'Remove the corn kernels by slicing them off with a knife. Add to the salad.', type: ASSEMBLE_RICE_BOWL },

        { step: 'In a small bowl, combine all the "Sauce" section ingredients.', type: MAKE_SAUCE },
        { step: 'Chill for 15 minutes.', type: MAKE_SAUCE },

        { step: 'Plate some rice, add salad and slice up some chicken. Top with the peri peri sauce.', type: SECTIONS.SERVE },
    ]
};