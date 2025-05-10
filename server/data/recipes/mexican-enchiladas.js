const enchiladas1 = '../assets/Products/mexican-enchiladas-1.jpeg';
const enchiladas2 = '../assets/Products/mexican-enchiladas-2.jpeg';
const enchiladas4 = '../assets/Products/mexican-enchiladas-4.jpeg';
const enchiladas5 = '../assets/Products/mexican-enchiladas-5.jpeg';
const enchiladas6 = '../assets/Products/mexican-enchiladas-6.jpeg';
const enchiladas7 = '../assets/Products/mexican-enchiladas-7.jpeg';
const enchiladas8 = '../assets/Products/mexican-enchiladas-8.jpeg';
const enchiladas9 = '../assets/Products/mexican-enchiladas-9.jpeg';
const enchiladas10 = '../assets/Products/mexican-enchiladas-10.jpeg';
const enchiladas11 = '../assets/Products/mexican-enchiladas-11.jpeg';
const enchiladas12 = '../assets/Products/mexican-enchiladas-12.jpeg';
const enchiladas13 = '../assets/Products/mexican-enchiladas-13.jpeg';
const enchiladas14 = '../assets/Products/mexican-enchiladas-14.jpeg';
const enchiladas15 = '../assets/Products/mexican-enchiladas-15.jpeg';
const enchiladas16 = '../assets/Products/mexican-enchiladas-16.jpeg';
const enchiladas17 = '../assets/Products/mexican-enchiladas-17.jpeg';
const enchiladas18 = '../assets/Products/mexican-enchiladas-18.jpeg';
const enchiladas19 = '../assets/Products/mexican-enchiladas-19.jpeg';
const enchiladas20 = '../assets/Products/mexican-enchiladas-20.jpeg';
const enchiladas21 = '../assets/Products/mexican-enchiladas-21.jpeg';
const enchiladas22 = '../assets/Products/mexican-enchiladas-22.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { GARLIC_POWDER, SALT, BONELESS_AND_SKINLESS_CHICKEN_BREAST, BLACK_PEPPER, OLIVE_OIL, WHITE_ONION, BAY_LEAF, CHICKEN_BROTH, ALL_PURPOSE_FLOUR, CHILI_POWDER, ONION_POWDER, CUMIN, OREGANO, TOMATO_PASTE, FLOUR_TORTILLA, MEXICAN_BLEND_CHEESE, LETTUCE, YELLOW_ONION, CILANTRO, SOUR_CREAM, CHEESE } = require('./ingredients');

const CHICKEN = 'Chicken';
const ENCHILADA_SAUCE = 'Enchilada Sauce';
const ENCHILADA_ASSEMBLY = 'Enchilada Assembly';

const PREP_CHICKEN = 'Prep Chicken';
const PREP_ENCHILADA_SAUCE = 'Prep Enchilada Sauce';
const ASSEMBLE_ENCHILADAS = 'Assemble Enchiladas';

module.exports = {
    cardName: 'Mexican Enchiladas',
    name: 'Mexican Enchiladas',
    img: enchiladas21,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
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
        { label: 'Shredded Chicken', link: 'https://www.isabeleats.com/easy-shredded-chicken-recipe/' },
        { label: 'Enchilada Sauce', link: 'https://www.isabeleats.com/easy-enchilada-sauce/' },
        { label: 'Chicken Enchilada', link: 'https://www.isabeleats.com/red-chicken-enchiladas/' },
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CHICKEN },
        { ...SALT, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN },
        { ...GARLIC_POWDER, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN },
        { ...WHITE_ONION, amount: 1 / 4, unit: '', additionalDetails: 'diced', section: CHICKEN },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: CHICKEN },
        { ...CHICKEN_BROTH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHICKEN },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...CHILI_POWDER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...ONION_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...CUMIN, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...OREGANO, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...CHICKEN_BROTH, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...TOMATO_PASTE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ENCHILADA_SAUCE },

        { ...FLOUR_TORTILLA, amount: 8, unit: '', additionalDetails: '', section: ENCHILADA_ASSEMBLY },
        { ...MEXICAN_BLEND_CHEESE, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ENCHILADA_ASSEMBLY },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: ENCHILADA_ASSEMBLY },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: ENCHILADA_ASSEMBLY },

        { ...LETTUCE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'mixing bowl' },
        { name: 'forks' },
        { name: 'small pot' },
        { name: 'baking dish' },
    ],
    directions: [
        // 25 minutes cook, 5 minutes prep
        { step: 'Season both sides of the chicken with salt, pepper and garlic powder.', section: PREP_CHICKEN, img: enchiladas1 },
        { step: 'Over medium-high heat, heat olive oil in a frying pan.', section: PREP_CHICKEN },
        { step: 'Add chicken to pan and sear each side (about 3 to 4 minutes per side).', section: PREP_CHICKEN, img: [enchiladas2, enchiladas4] },
        { step: 'Add onions, bay leaf and broth.', section: PREP_CHICKEN, img: enchiladas5 },
        { step: 'Cover and reduce to medium-low heat. Poach the chicken until it reaches 165ºF (about 8 to 10 minutes).', section: PREP_CHICKEN, img: [enchiladas6, enchiladas12] },
        { step: 'Remove pan from heat.', section: PREP_CHICKEN },
        { step: 'Transfer chicken to mixing bowl and shred with forks. Set aside.', section: PREP_CHICKEN, img: enchiladas13 },

        // 8 minutes cook, 2 minutes prep
        { step: 'Over medium-high heat, heat olive oil in small pot.', section: PREP_ENCHILADA_SAUCE },
        { step: 'Add flour. Mix for 1 minute.', section: PREP_ENCHILADA_SAUCE, img: [enchiladas7, enchiladas8] },
        { step: 'Add all the seasonings. Mix for 30 seconds.', section: PREP_ENCHILADA_SAUCE, img: enchiladas9 },
        { step: 'Add broth and mix continuously until there are no clumps.', section: PREP_ENCHILADA_SAUCE, img: enchiladas10 },
        { step: 'Add tomato paste. Mix until smooth.', section: PREP_ENCHILADA_SAUCE, img: enchiladas11 },
        { step: 'Bring to a simmer. Remove from heat.', section: PREP_ENCHILADA_SAUCE },

        // 20 minutes cook, 10 minutes prep
        { step: 'Preheat oven to 350ºF.', section: ASSEMBLE_ENCHILADAS },
        { step: 'In the mixing bowl with the chicken, add a quarter of the enchilada sauce and as much salt and pepper as desired. Mix.', section: ASSEMBLE_ENCHILADAS, img: enchiladas14 },
        { step: 'Place tortillas on a plate and microwave for 30 seconds. Flip. Microwave for another 30 seconds.', section: ASSEMBLE_ENCHILADAS, img: enchiladas15 },
        { step: 'Evenly divide 1 cup of cheese and shredded chicken and fill the tortillas.', section: ASSEMBLE_ENCHILADAS, img: enchiladas16 },
        { step: 'Tightly roll the tortillas and place each in a baking dish with the seam side down.', section: ASSEMBLE_ENCHILADAS, img: enchiladas17 },
        { step: 'Pour the rest of the enchilada sauce over the tortillas.', section: ASSEMBLE_ENCHILADAS, img: enchiladas18 },
        { step: 'Top with the rest of the cheese.', section: ASSEMBLE_ENCHILADAS, img: enchiladas19 },
        { step: 'Bake until cheese is melted and bubbly (about 20 minutes).', section: ASSEMBLE_ENCHILADAS, img: enchiladas20 },

        { step: 'Serve immediately with your favorite toppings.', section: SECTIONS.SERVE, img: enchiladas22 },
    ],
    notes: [
        { note: 'The original recipe was a bit salty for my liking, so I reduced the amount of salt in the sauce.' }
    ]
};