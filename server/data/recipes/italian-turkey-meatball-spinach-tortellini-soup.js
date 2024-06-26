const meatballSpinachTortelliniSoup = '../assets/Products/turkey-meatball-spinach-tortellini-soup.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Tortellini Soup',
    name: 'Turkey Meatball Spinach Tortellini Soup',
    img: meatballSpinachTortelliniSoup,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.TURKEY],
    type: [TYPES.NOODLE, TYPES.SOUP],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '35 m',
    ingredients: [
        { name: 'ground turkey', amount: '16 oz', additionalDetails: '', optional: false },
        { name: 'breadcrumbs', amount: '2 Tbsp', additionalDetails: '', optional: false },
        { name: 'parmesan cheese', amount: '2 Tbsp', additionalDetails: '', optional: false },
        { name: 'parsley', amount: '2 Tbsp', additionalDetails: '', optional: false },
        { name: 'egg', amount: '1 large', additionalDetails: '', optional: false },
        { name: 'garlic', amount: '1 clove', additionalDetails: 'minced', optional: false },
        { name: 'salt', amount: '1/8 tsp', additionalDetails: '', optional: false },
        { name: 'unsalted butter', amount: '1/2 Tbsp', additionalDetails: '', optional: false },
        { name: 'celery', amount: '2 stalks', additionalDetails: '', optional: false },
        { name: 'onion', amount: '1 small', additionalDetails: '', optional: false },
        { name: 'carrot', amount: '1 large', additionalDetails: 'peeled and chopped', optional: false },
        { name: 'garlic', amount: '2 cloves', additionalDetails: 'minced', optional: false },
        { name: 'chicken broth', amount: '58 oz', additionalDetails: '', optional: false },
        { name: 'spinach cheese tortellini', amount: '18 oz', additionalDetails: '', optional: false },
        { name: 'baby spinach', amount: '3 c', additionalDetails: '', optional: false },
        { name: 'black pepper', amount: '', additionalDetails: 'to taste', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large bowl' },
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Combine the ground turkey, breadcrumbs, parmesan cheese, parsley, egg, garlic, and salt in a large bowl.', type: SECTIONS.MAIN },
        { step: 'Gently mix together with hands until combined.', type: SECTIONS.MAIN },
        { step: 'Make small meatballs (about 1 Tbsp each).', type: SECTIONS.MAIN },
        { step: 'Melt butter in a large pot over medium heat.', type: SECTIONS.MAIN },
        { step: 'Once melted, add the celery, onion, carrot, and garlic. Cover and reduce heat to low. Cook until vegetables begin to soften (about 8 to 10 minutes).', type: SECTIONS.MAIN },
        { step: 'Add the chicken broth and increase heat to medium-high. Bring to a boil.', type: SECTIONS.MAIN },
        { step: 'Add black pepper to taste.', type: SECTIONS.MAIN },
        { step: 'Reduce heat to medium and drop in the meatballs. Cook for about 4 minutes.', type: SECTIONS.MAIN },
        { step: 'Add tortellini and simmer until cooked (about 7 minutes).', type: SECTIONS.MAIN },
        { step: 'Once cooked, add the baby spinach and stir to combine.', type: SECTIONS.MAIN },
    ]
}