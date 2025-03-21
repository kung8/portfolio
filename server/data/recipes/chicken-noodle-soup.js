const chickenNoodle = '../assets/Products/chicken-noodle-soup.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN, UNITS } = require('./constants');
const {
    CHICKEN_BREAST,
    OLIVE_OIL,
    YELLOW_ONION,
    CARROTS,
    CELERY,
    CHICKEN_BROTH,
    SALT,
    BLACK_PEPPER,
    OREGANO,
    ROSEMARY,
    THYME,
    EGG_NOODLES,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Soup',
    name: 'Chicken Noodle Soup',
    img: chickenNoodle,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE, TYPES.SOUP],
    yields: '5 - 6 servings',
    prepTime: '6 - 8 m',
    cookTime: '40 - 45 m',
    ingredients: [
        { ...CHICKEN_BREAST, amount: 3 / 2, unit: UNITS.POUND, additionalDetails: 'cubed', optional: false },
        { ...OLIVE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...YELLOW_ONION, amount: 1, unit: UNITS.LARGE, additionalDetails: 'sliced', optional: false },
        { ...CARROTS, amount: 2, unit: '', additionalDetails: 'sliced', optional: false },
        { ...CELERY, amount: 2, unit: UNITS.STALK, additionalDetails: 'sliced', optional: false },
        { ...CHICKEN_BROTH, amount: 6, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...OREGANO, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...ROSEMARY, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...THYME, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...EGG_NOODLES, amount: 16, unit: UNITS.OUNCE, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'large pot' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'cutting boards' },
        { name: 'knives' },
        { name: 'mixing bowl' },
        { name: 'small bowl' },
        { name: 'spoon' },
    ],
    directions: [
        { step: 'Prep all the vegetables and add them to the mixing bowl. Then prep the raw chicken. Or best to use separate cutting boards to avoid cross contamination.', type: SECTIONS.MAIN },
        { step: 'In a hot pan with oil over medium-high heat, add the chicken, salt, pepper, and oregano. Cook until chicken is browned on both sides. Set aside.', type: SECTIONS.MAIN },
        { step: 'In a large pot, add together the chicken broth, onion, carrots, celery, salt, pepper, oregano, rosemary, and thyme and cook for 8 - 10 minutes over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add the noodles and bring to a roaring boil (about another 6 to 8 minutes).', type: SECTIONS.MAIN },
        { step: 'Add the chicken and let it simmer on a low-heat for about 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Serve and enjoy - I typically make this when I or somebody I know is sick, so get better if you too are sick!', type: SECTIONS.MAIN },
    ]
};