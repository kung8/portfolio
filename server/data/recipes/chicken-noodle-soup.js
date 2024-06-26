const chickenNoodle = '../assets/Products/chicken-noodle-soup.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Chicken Soup',
    name: 'Chicken Noodle Soup',
    img: chickenNoodle,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE, TYPES.SOUP],
    yields: '5 - 6 servings',
    prepTime: '6 - 8 m',
    cookTime: '40 - 45 m',
    ingredients: [
        { name: 'chicken breast', amount: '1.5 lbs', additionalDetails: 'cubed', optional: false },
        { name: 'olive oil', amount: '1 Tbsp', additionalDetails: '', optional: false },
        { name: 'large onion', amount: '1', additionalDetails: 'sliced', optional: false },
        { name: 'large carrots', amount: '2', additionalDetails: 'sliced', optional: false },
        { name: 'celery', amount: '2 stalks', additionalDetails: 'sliced', optional: false },
        { name: 'chicken broth', amount: '6 c', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'oregano', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'rosemary', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'thyme', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'egg noodles', amount: '16 oz', additionalDetails: '', optional: false },
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