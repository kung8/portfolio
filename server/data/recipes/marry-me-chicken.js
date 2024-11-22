// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, SALT, BLACK_PEPPER, OLIVE_OIL, GARLIC, CHICKEN_BROTH, HEAVY_CREAM, PARMESAN_CHEESE, OREGANO, RED_PEPPER_FLAKES, BASIL_LEAVES, SUN_DRIED_TOMATOES } = require('./ingredients');

const SUN_DRIED_TOMATO_CREAM_SAUCE = 'Sun-Dried Tomato Cream Sauce';

module.exports = {
    cardName: 'Marry Me Chicken',
    name: 'Marry Me Chicken',
    img: '',
    available: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CHICKEN],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '30 m',
    websites: [
        { label: 'Marry Me Chicken', link: 'https://40aprons.com/marry-me-chicken/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '3 lb', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...GARLIC, amount: '3', additionalDetails: 'minced', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...CHICKEN_BROTH, amount: '3/4 c', additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...HEAVY_CREAM, amount: '1/2 c', additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...PARMESAN_CHEESE, amount: '1/3 c', additionalDetails: 'shredded', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...SUN_DRIED_TOMATOES, amount: '1 c', additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...OREGANO, amount: '1 tsp', additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...RED_PEPPER_FLAKES, amount: '1/2 tsp', additionalDetails: '', section: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { ...BASIL_LEAVES, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'dutch oven pot' },
        { name: 'tongs' },
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF. Arrange the rack so the dutch oven pot will be cooked in the center of the oven.', type: SECTIONS.CHICKEN },
        { step: 'Prepare chicken by removing any fat and at dry.', type: SECTIONS.CHICKEN },
        { step: 'Season with salt and pepper generously on both sides.', type: SECTIONS.CHICKEN },
        { step: 'Over medium-high heat, add olive oil and spread until covered.', type: SECTIONS.CHICKEN },
        { step: 'Sear chicken until lightly golden (about 3 to 4 minutes).', type: SECTIONS.CHICKEN },
        { step: 'Flip and sear the other side (about 3 to 4 minutes).', type: SECTIONS.CHICKEN },
        { step: 'Transfer chicken to plate (chicken should not be cooked all the way through).', type: SECTIONS.CHICKEN },
        
        { step: 'Reduce to medium-low heat and wait until dutch oven pot cools.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Add garlic. Saute until fragrant (about 1 to 2 minutes).', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Add broth and deglaze the pan.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Remove pan from heat.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Add cream and mix.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Add cheese and stir until the cheese melts.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Move pot back to burner and stir for a minute (while the pot returns to heat).', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Add sun-dried tomatoes, oregano and red pepper flakes. Stir.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Taste sauce and adjust with seasoning as needed.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Simmer over medium-low heat and stir occasionally.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Once simmering, add chicken and flip several times until the chicken is coated.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Transfer the pot to the oven.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Bake until the chicken reaches 160ºF (about 12 to 15 minutes).', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Carefully remove pot from oven and spoon sauce over chicken.', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Let chicken rest for 5 minutes (residual heat will cook the chicken, wait until it is at least 165ºF).', type: SUN_DRIED_TOMATO_CREAM_SAUCE },
        { step: 'Serve with your favorite sides and be sure to ladle sauce over the chicken.', type: SECTIONS.SERVE },
    ]
};