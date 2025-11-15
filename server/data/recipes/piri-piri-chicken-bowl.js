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
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { AVOCADO, BABY_ARUGULA, BASMATI_RICE, BASTING_BRUSH, BAY_LEAF, BLACK_PEPPER, BLENDER, BROWN_SUGAR, CAYENNE_PEPPER, CHICKEN_BROTH, CHICKEN_THIGH, CHIVE, CILANTRO, CORN, CRUSHED_TOMATOES, DIJON_MUSTARD, GARLIC, GRILL_OR_STOVE, HOT_SAUCE, KNIFE, LARGE_POT, LEMON_JUICE, MAYONNAISE, MIXING_BOWL, NANDOS_PERI_PERI_SAUCE, OLIVE_OIL, OREGANO, PAPRIKA, SALT, SMALL_BOWL, SMOKED_PAPRIKA, STOVE, THAI_CHILI_PEPPER, VEGETABLE_OIL } = require('./ingredients');

const CORN_SECTION = 'Corn';
const GRILL_CHICKEN = 'Grill Chicken';
const CHAR_CORN = 'Char Corn';

module.exports = {
    cardName: 'Piri Piri Chicken Bowl',
    name: 'Piri Piri Chicken Bowl',
    img: bowl12,
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
        { 
            label: 'Piri Piri Chicken', 
            link: 'https://thebigmansworld.com/peri-peri-chicken/',
            authors: ['Arman Liew'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Charred Corn and Salad', 
            link: 'https://simply-delicious-food.com/peri-peri-chicken-salad/',
            authors: ['Alida Ryder'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Piri Piri Rice', 
            link: 'https://vikalinka.com/easy-peri-peri-rice/',
            authors: ['Julia Frey Vikalinka'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Piri Piri Aioli Sauce', 
            link: 'https://weekdaypescatarian.com/spicy-aioli-sauce/',
            authors: ['Christina Jolam'],
            finder: 'Kevin Ung', 
        },
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 6, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'bone-in', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...THAI_CHILI_PEPPER, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...CORN, amount: 3, unit: INGREDIENT_UNITS.EAR, additionalDetails: '', section: CORN_SECTION },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: '', section: CORN_SECTION },

        { ...BABY_ARUGULA, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SALAD },
        { ...AVOCADO, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.SALAD },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SALAD },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SALAD },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SALAD },

        { ...BASMATI_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.RICE },
        { ...CHICKEN_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...CRUSHED_TOMATOES, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...NANDOS_PERI_PERI_SAUCE, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...SMOKED_PAPRIKA, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.RICE },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.RICE },

        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HOT_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHIVE, amount: '', unit: '', additionalDetails: 'diced', section: SECTIONS.SAUCE },
    ],
    appliances: [
        GRILL_OR_STOVE,
        BLENDER,
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        KNIFE,
        BASTING_BRUSH,
        LARGE_POT,
        SMALL_BOWL,
    ],
    directions: [
        { step: `In a blender or food processor, combine all the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.PREP_MARINADE, img: bowl1 },
        { step: `In a mixing bowl, combine chicken and the marinade.`, section: SECTIONS.MARINATE_CHICKEN, img: bowl2 },
        { step: `Refrigerate overnight or at least 10 hours.`, section: SECTIONS.MARINATE_CHICKEN },

        { step: `Wash the rice until the water is no longer murky.`, section: SECTIONS.COOK_RICE },
        { step: `Over low heat, heat oil in a large pot.`, section: SECTIONS.COOK_RICE },
        { step: `Add garlic and cook for 30 seconds.`, section: SECTIONS.COOK_RICE, img: bowl3 },
        { step: `Add the rest of the "${SECTIONS.RICE}" section ingredient (except the cilantro). Stir and bring to a boil.`, section: SECTIONS.COOK_RICE, img: bowl4 },
        { step: `Over medium heat, cover with a lid and cook for 10 minutes.`, section: SECTIONS.COOK_RICE, img: bowl6 },
        { step: `Turn heat off and leave the pot on the stove with the lid on for another 10 minutes.`, section: SECTIONS.COOK_RICE, img: bowl8 },

        { step: `Heat a grill, grill griddle, or a grill pan on a stove.`, section: GRILL_CHICKEN },
        { step: `Once the preferred grill method gets hot, add the chicken. Cook chicken until it reaches an internal temperature of 165ºF, flip chicken regularly (about 12 minutes).`, section: GRILL_CHICKEN, img: [bowl7, bowl9] },

        { step: `Brush corn with olive oil.`, section: CHAR_CORN },
        { step: `Follow the same grilling method as the chicken, cook the corn and rotate every couple minutes until it is charred all around.`, section: CHAR_CORN, img: bowl10 },
        { step: `In a mixing bowl, combine together the rest of the salad ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: `Remove the corn kernels by slicing them off with a knife. Add to the salad.`, section: SECTIONS.ASSEMBLE },

        { step: `In a small bowl, combine all the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE, img: bowl5 },
        { step: `Chill for 15 minutes.`, section: SECTIONS.COOK_SAUCE },

        { step: `Plate some rice, add salad and slice up some chicken. Top with the peri peri sauce.`, section: SECTIONS.SERVE, img: bowl11 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the ingredients separately.'
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};