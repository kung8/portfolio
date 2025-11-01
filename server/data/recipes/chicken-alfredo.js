const alfredo1 = '../assets/Products/chicken-alfredo-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    CHICKEN_BREAST,
    COLANDER,
    CUTTING_BOARD,
    FETTUCCINE_NOODLES,
    HEAVY_CREAM,
    KNIFE,
    LARGE_PAN,
    LARGE_POT,
    MEDIUM_BOWL,
    MIXING_BOWL,
    NUTMEG,
    OLIVE_OIL,
    PARMESAN_CHEESE,
    RED_BELL_PEPPER,
    SALT,
    SMALL_BOWL,
    STOVE,
    UNSALTED_BUTTER,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Alfredo',
    name: 'Chicken Alfredo',
    img: alfredo1,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE, TYPES.PROTEIN],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Chicken Fettuccine Alfredo',
            link: 'https://www.foodnetwork.com/recipes/food-network-kitchen/chicken-fettuccine-alfredo-3364118#recipeHead',
            authors: ['Emily Saladino'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...FETTUCCINE_NOODLES, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: 'for tossing', section: SECTIONS.NOODLES },

        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: 'cut into 1/4-inch slices', section: SECTIONS.CHICKEN },
        
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 2, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...NUTMEG, amount: 2, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...PARMESAN_CHEESE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.CHEESE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHEESE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHEESE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        LARGE_PAN,
        CUTTING_BOARD,
        KNIFE,
        MIXING_BOWL,
        SMALL_BOWL,
        MEDIUM_BOWL,
        COLANDER,
    ],
    directions: [
        { step: 'Season sliced chicken with salt and pepper.', section: SECTIONS.PREP_CHICKEN },

        { step: 'In a large pot, bring water and salt to a boil.', section: SECTIONS.COOK_NOODLES },
        { step: 'Add pasta to pot and cook until al dente (tender but center is still a little firm).', section: SECTIONS.COOK_NOODLES },
        { step: 'Drain in a colander and save some of the starchy water for later.', section: SECTIONS.COOK_NOODLES },
        { step: 'In a large mixing bowl, add the pasta and toss with a little oil.', section: SECTIONS.COOK_NOODLES },

        { step: 'Over medium-high heat, melt butter in a pan.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Brown chicken for 2 to 3 minutes per side. Cook chicken in batches if necessary.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Transfer cooked chicken to a medium bowl.', section: SECTIONS.COOK_CHICKEN },

        { step: `In the same pan, melt butter.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Saute the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Set the vegetables aside with the chicken.`, section: SECTIONS.COOK_VEGGIES },

        { step: 'In the same pan, melt the butter.', section: SECTIONS.COOK_SAUCE },
        { step: 'In a bowl, combine heavy cream and nutmeg. Add to pan.', section: SECTIONS.COOK_SAUCE },
        { step: 'Bring to a simmer.', section: SECTIONS.COOK_SAUCE },
        { step: 'Cook for another 2 minutes.', section: SECTIONS.COOK_SAUCE },
        { step: 'Reduce to low heat.', section: SECTIONS.COOK_SAUCE },

        { step: 'Slowly mix everything together including the starchy noodle water.', section: SECTIONS.ASSEMBLE },

        { step: 'Serve and enjoy the nostalgic creamy, delicious chicken alfredo!', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a tablespoon or two of milk. Over medium-low heat, reheat in a saucepan and stir frequently. Bring to a simmer and simmer until heated through (about a few minutes).',
        },
    ],
    mealPrep: true,
};