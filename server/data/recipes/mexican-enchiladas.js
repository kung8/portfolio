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

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { GARLIC_POWDER, SALT, BONELESS_AND_SKINLESS_CHICKEN_BREAST, BLACK_PEPPER, OLIVE_OIL, WHITE_ONION, BAY_LEAVES, CHICKEN_BROTH, ALL_PURPOSE_FLOUR, CHILI_POWDER, ONION_POWDER, CUMIN, OREGANO, TOMATO_PASTE, FLOUR_TORTILLA, MEXICAN_BLEND_CHEESE, LETTUCE, YELLOW_ONION, CILANTRO, SOUR_CREAM, CHEESE } = require('./ingredients');

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
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MEXICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN, PROTEIN.ALTERNATIVE],
    type: [TYPES.CASSEROLE],
    yields: '4 servings',
    prepTime: '20 m',
    cookTime: '55 m',
    websites: [
        { label: 'Shredded Chicken', link: 'https://www.isabeleats.com/easy-shredded-chicken-recipe/' },
        { label: 'Enchilada Sauce', link: 'https://www.isabeleats.com/easy-enchilada-sauce/' },
        { label: 'Chicken Enchilada', link: 'https://www.isabeleats.com/red-chicken-enchiladas/' },
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '2 lb', unit: '', additionalDetails: '', section: CHICKEN },
        { ...SALT, amount: '2 1/2 tsp', unit: '', additionalDetails: '', section: CHICKEN },
        { ...GARLIC_POWDER, amount: '1 1/2 tsp', unit: '', additionalDetails: '', section: CHICKEN },
        { ...BLACK_PEPPER, amount: '1/2 tsp', unit: '', additionalDetails: '', section: CHICKEN },
        { ...OLIVE_OIL, amount: '2 Tbsp', unit: '', additionalDetails: '', section: CHICKEN },
        { ...WHITE_ONION, amount: '1/4', unit: '', additionalDetails: 'diced', section: CHICKEN },
        { ...BAY_LEAVES, amount: '1', unit: '', additionalDetails: '', section: CHICKEN },
        { ...CHICKEN_BROTH, amount: '1 c', unit: '', additionalDetails: '', section: CHICKEN },

        { ...OLIVE_OIL, amount: '2 Tbsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...ALL_PURPOSE_FLOUR, amount: '2 Tbsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...CHILI_POWDER, amount: '4 Tbsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...ONION_POWDER, amount: '1 tsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...GARLIC_POWDER, amount: '1/2 tsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...SALT, amount: '1/8 tsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...CUMIN, amount: '1/4 tsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...OREGANO, amount: '1/4 tsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...CHICKEN_BROTH, amount: '2 1/4 c', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },
        { ...TOMATO_PASTE, amount: '2 Tbsp', unit: '', additionalDetails: '', section: ENCHILADA_SAUCE },

        { ...FLOUR_TORTILLA, amount: '8', unit: '', additionalDetails: '', section: ENCHILADA_ASSEMBLY },
        { ...MEXICAN_BLEND_CHEESE, amount: '2 1/2 c', unit: '', additionalDetails: '', section: ENCHILADA_ASSEMBLY },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: ENCHILADA_ASSEMBLY },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: ENCHILADA_ASSEMBLY },
        
        { ...LETTUCE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...YELLOW_ONION, amount: 'small', unit: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
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
        { step: 'Season both sides of the chicken with salt, pepper and garlic powder.', type: PREP_CHICKEN, img: enchiladas1 },
        { step: 'Over medium-high heat, heat olive oil in a frying pan.', type: PREP_CHICKEN },
        { step: 'Add chicken to pan and sear each side (about 3 to 4 minutes per side).', type: PREP_CHICKEN, img: [enchiladas2, enchiladas4] },
        { step: 'Add onions, bay leaf and broth.', type: PREP_CHICKEN, img: enchiladas5 },
        { step: 'Cover and reduce to medium-low heat. Poach the chicken until it reaches 165ºF (about 8 to 10 minutes).', type: PREP_CHICKEN, img: [enchiladas6, enchiladas12] },
        { step: 'Remove pan from heat.', type: PREP_CHICKEN },
        { step: 'Transfer chicken to mixing bowl and shred with forks. Set aside.', type: PREP_CHICKEN, img: enchiladas13 },

        // 8 minutes cook, 2 minutes prep
        { step: 'Over medium-high heat, heat olive oil in small pot.', type: PREP_ENCHILADA_SAUCE },
        { step: 'Add flour. Mix for 1 minute.', type: PREP_ENCHILADA_SAUCE, img: [enchiladas7, enchiladas8] },
        { step: 'Add all the seasonings. Mix for 30 seconds.', type: PREP_ENCHILADA_SAUCE, img: enchiladas9 },
        { step: 'Add broth and mix continuously until there are no clumps.', type: PREP_ENCHILADA_SAUCE, img: enchiladas10 },
        { step: 'Add tomato paste. Mix until smooth.', type: PREP_ENCHILADA_SAUCE, img: enchiladas11 },
        { step: 'Bring to a simmer. Remove from heat.', type: PREP_ENCHILADA_SAUCE },

        // 20 minutes cook, 10 minutes prep
        { step: 'Preheat oven to 350ºF.', type: ASSEMBLE_ENCHILADAS },
        { step: 'In the mixing bowl with the chicken, add a quarter of the enchilada sauce and as much salt and pepper as desired. Mix.', type: ASSEMBLE_ENCHILADAS, img: enchiladas14 },
        { step: 'Place tortillas on a plate and microwave for 30 seconds. Flip. Microwave for another 30 seconds.', type: ASSEMBLE_ENCHILADAS, img: enchiladas15 },
        { step: 'Evenly divide 1 cup of cheese and shredded chicken and fill the tortillas.', type: ASSEMBLE_ENCHILADAS, img: enchiladas16 },
        { step: 'Tightly roll the tortillas and place each in a baking dish with the seam side down.', type: ASSEMBLE_ENCHILADAS, img: enchiladas17 },
        { step: 'Pour the rest of the enchilada sauce over the tortillas.', type: ASSEMBLE_ENCHILADAS, img: enchiladas18 },
        { step: 'Top with the rest of the cheese.', type: ASSEMBLE_ENCHILADAS, img: enchiladas19 },
        { step: 'Bake until cheese is melted and bubbly (about 20 minutes).', type: ASSEMBLE_ENCHILADAS, img: enchiladas20 },

        { step: 'Serve immediately with your favorite toppings.', type: SECTIONS.SERVE, img: enchiladas22 },
    ], 
    notes: [
        { note: 'The original recipe was a bit salty for my liking, so I reduced the amount of salt in the sauce.' }
    ]
};