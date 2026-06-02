const enchiladas1 = '../assets/Products/mexican-enchiladas-1.jpeg';
const enchiladas2 = '../assets/Products/mexican-enchiladas-2.jpeg';
const enchiladas3 = '../assets/Products/mexican-enchiladas-3.jpeg';
const enchiladas4 = '../assets/Products/mexican-enchiladas-4.jpeg';
const enchiladas5 = '../assets/Products/mexican-enchiladas-5.jpeg';
const enchiladas6 = '../assets/Products/mexican-enchiladas-6.jpeg';
const enchiladas7 = '../assets/Products/mexican-enchiladas-7.jpeg';
const enchiladas8 = '../assets/Products/mexican-enchiladas-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BAY_LEAF, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, CHEESE, CHICKEN_BROTH, CHILI_POWDER, CILANTRO, CUMIN, FLOUR_TORTILLA, FORK, FRYING_PAN, GARLIC_POWDER, LETTUCE, MEXICAN_BLEND_CHEESE, MIXING_BOWL, OLIVE_OIL, ONION_POWDER, OREGANO, OVEN, SALT, SAUCEPAN, SOUR_CREAM, STOVE, TOMATO_PASTE, WHITE_ONION, YELLOW_ONION } = require('./ingredients');

module.exports = {
    cardName: 'Mexican Enchiladas',
    name: 'Mexican Enchiladas',
    img: enchiladas8,
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN, PROTEIN.ALTERNATIVE],
    type: [TYPES.CASSEROLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Shredded Chicken', 
            link: 'https://www.isabeleats.com/easy-shredded-chicken-recipe/',
            authors: ['Isabel Orozco-Moore'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Enchilada Sauce', 
            link: 'https://www.isabeleats.com/easy-enchilada-sauce/',
            authors: ['Isabel Orozco-Moore'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Chicken Enchilada', 
            link: 'https://www.isabeleats.com/red-chicken-enchiladas/',
            authors: ['Isabel Orozco-Moore'],
            finder: 'Kevin Ung', 
        },
    ],
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC_POWDER, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...WHITE_ONION, amount: 1 / 4, unit: '', additionalDetails: 'diced', section: SECTIONS.CHICKEN },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_BROTH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHILI_POWDER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ONION_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CUMIN, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OREGANO, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_PASTE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...FLOUR_TORTILLA, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...MEXICAN_BLEND_CHEESE, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.ASSEMBLE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.ASSEMBLE },

        { ...LETTUCE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        FRYING_PAN,
        MIXING_BOWL,
        FORK,
        SAUCEPAN,
        BAKING_PAN,
    ],
    directions: [
        // 25 minutes cook, 5 minutes prep
        { step: `Season both sides of the chicken with salt, pepper and garlic powder.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Over medium-high heat, heat olive oil in a frying pan.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Add chicken to the pan and sear each side (about 3 to 4 minutes per side).`, section: SECTIONS.PREP_CHICKEN },
        { step: `Add onions, bay leaf and broth.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Cover and reduce to medium-low heat. Poach the chicken until it reaches 165ºF (about 8 to 10 minutes).`, section: SECTIONS.PREP_CHICKEN },
        { step: `Remove pan from heat.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Transfer chicken to mixing bowl and shred with forks. Set aside.`, section: SECTIONS.PREP_CHICKEN, img: enchiladas1 },

        // 8 minutes cook, 2 minutes prep
        { step: `Over medium-high heat, heat olive oil in small pot.`, section: SECTIONS.PREP_SAUCE },
        { step: `Add flour. Mix for 1 minute.`, section: SECTIONS.PREP_SAUCE },
        { step: `Add all the seasonings. Mix for 30 seconds.`, section: SECTIONS.PREP_SAUCE },
        { step: `Add broth and mix continuously until there are no clumps.`, section: SECTIONS.PREP_SAUCE },
        { step: `Add tomato paste. Mix until smooth.`, section: SECTIONS.PREP_SAUCE },
        { step: `Bring to a simmer. Remove from heat.`, section: SECTIONS.PREP_SAUCE },

        // 20 minutes cook, 10 minutes prep
        { step: `Preheat oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `In the mixing bowl with the chicken, add a quarter of the enchilada sauce and as much salt and pepper as desired. Mix.`, section: SECTIONS.ASSEMBLE, img: enchiladas2 },
        { step: `Place tortillas on a plate and microwave for 30 seconds. Flip. Microwave for another 30 seconds.`, section: SECTIONS.ASSEMBLE },
        { step: `Evenly divide 1 cup of cheese and shredded chicken and fill the tortillas.`, section: SECTIONS.ASSEMBLE, img: enchiladas3 },
        { step: `Tightly roll the tortillas and place each in a baking dish with the seam side down.`, section: SECTIONS.ASSEMBLE, img: enchiladas4 },
        { step: `Pour the rest of the enchilada sauce over the tortillas.`, section: SECTIONS.ASSEMBLE, img: enchiladas5 },
        { step: `Top with the rest of the cheese.`, section: SECTIONS.ASSEMBLE, img: enchiladas6 },
        { step: `Bake until cheese is melted and bubbly (about 20 minutes).`, section: SECTIONS.ASSEMBLE, img: enchiladas7 },

        { step: `Serve immediately with your favorite toppings.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original recipe was a bit salty for my liking, so I reduced the amount of salt in the sauce.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};