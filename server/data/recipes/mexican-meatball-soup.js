// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS } = require('./constants');
const { VINE_TOMATOES, WHITE_ONION, GARLIC, VEGETABLE_OIL, CHICKEN_BROTH, CILANTRO, SALT, GROUND_BEEF, BREAD, MILK, EGG, BLACK_PEPPER, GARLIC_POWDER, WHITE_RICE, ZUCCHINI } = require('./ingredients');

const TOMATO_BROTH = 'Tomato Broth';
const MEATBALLS = 'Meatballs';

const PREP_MEATBALLS = 'Prep Meatballs';
const PREP_SOUP = 'Prep Soup';
const ASSEMBLE = 'Assemble';

module.exports = {
    wip: true,
    cardName: 'Mexican Meatball Soup',
    name: 'Mexican Meatball Soup (Albondigas)',
    img: '',
    recipeCredit: 'Zam Illescas',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SOUP],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '30 m',
    websites: [
        { label: 'Mexican Meatball Soup', link: 'https://www.mexicoinmykitchen.com/mexican-meatball-soup-recipe/?fbclid=IwY2xjawIfTotleHRuA2FlbQIxMAABHQYcxHPcv1hhY25EjsAP33ufzYdcUKwRuldIir42OU8j8QqMZ9iXbduoEg_aem_WbP6pIyotuLceI-yiIsTIw' }
    ],
    separated: true,
    ingredients: [
        { ...WHITE_RICE, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: MEATBALLS },
        { ...GROUND_BEEF, amount: 1, unit: UNITS.POUND, additionalDetails: '', section: MEATBALLS },
        { ...ZUCCHINI, amount: 1, unit: '', additionalDetails: 'grated', section: MEATBALLS },
        { ...WHITE_ONION, amount: 1 / 4, unit: UNITS.MEDIUM, additionalDetails: 'chopped', section: MEATBALLS },
        { ...EGG, amount: 1, unit: '', additionalDetails: 'beaten', section: MEATBALLS },
        { ...GARLIC_POWDER, amount: 1 / 3, unit: UNITS.TEASPOON, additionalDetails: '', section: MEATBALLS },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: MEATBALLS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: MEATBALLS },


        { ...VINE_TOMATOES, amount: 1, unit: UNITS.POUND, additionalDetails: '', section: TOMATO_BROTH },
        { ...GARLIC, amount: 1, unit: UNITS.CLOVE, additionalDetails: '', section: TOMATO_BROTH },
        { ...VEGETABLE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: TOMATO_BROTH },
        { ...WHITE_ONION, amount: 1 / 4, unit: UNITS.MEDIUM, additionalDetails: '', section: TOMATO_BROTH },
        { ...CHICKEN_BROTH, amount: 4, unit: UNITS.CUP, additionalDetails: '', section: TOMATO_BROTH },

        { ...CILANTRO, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'blender' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'mixing bowl' },
        { name: 'small bowl' },
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Boil water.', type: PREP_MEATBALLS },
        { step: 'In a medium bowl, soak rice in boiling water for 45 minutes.', type: PREP_MEATBALLS },
        { step: 'In a mixing bowl, mix together the ground beef, grated squash and chopped onions.', type: PREP_MEATBALLS },
        { step: 'In a small bowl, whisk together eggs, garlic powder, salt and black pepper.', type: PREP_MEATBALLS },
        { step: 'Combine the egg mixture to the meat mixture.', type: PREP_MEATBALLS },
        { step: 'Drain the rice and mix into the meat.', type: PREP_MEATBALLS },
        { step: 'Form 1.5 inch meatballs (about 24).', type: PREP_MEATBALLS },

        { step: 'Over medium-high heat, bring a pot of water to a boil.', type: PREP_SOUP },
        { step: 'Carefully add tomatoes to the boiling water and let it cook for 5 minutes.', type: PREP_SOUP },
        { step: 'Remove the tomatoes from the water and peel.', type: PREP_SOUP },
        { step: 'Blend the peeled tomatoes and garlic until smooth.', type: PREP_SOUP },
        { step: 'Over medium-low heat, heat oil in a large pot.', type: PREP_SOUP },
        { step: 'Add onions and cook until soft (not browned)', type: PREP_SOUP },
        { step: 'Add the tomato puree and bring to a boil. Cook for about 3 minutes.', type: PREP_SOUP },
        { step: 'Add broth and bring to a simmer.', type: PREP_SOUP },

        { step: 'Add meatballs gently into simmering broth. Cover with lid.', type: ASSEMBLE },
        { step: 'Simmer for about 30 to 45 minutes.', type: ASSEMBLE },

        { step: 'Serve in deep bowls. Traditionally it is served with rice or beans and warm corn tortillas.', type: SECTIONS.SERVE },
    ]
};