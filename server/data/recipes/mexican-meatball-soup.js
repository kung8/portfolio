// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, BLENDER, BREAD, CHICKEN_BROTH, CILANTRO, EGG, GARLIC, GARLIC_POWDER, GROUND_BEEF, LARGE_POT, MEDIUM_BOWL, MILK, MIXING_BOWL, SALT, SMALL_BOWL, STOVE, VEGETABLE_OIL, VINE_TOMATO, WHITE_ONION, WHITE_RICE, ZUCCHINI } = require('./ingredients');

const MEATBALLS = 'Meatballs';
const PREP_MEATBALLS = 'Prep Meatballs';

module.exports = {
    wip: true,
    cardName: 'Mexican Meatball Soup',
    name: 'Mexican Meatball Soup (Albondigas)',
    img: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SOUP],
    allergies: [ALLERGIES.EGG],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Mexican Meatball Soup', 
            link: 'https://www.mexicoinmykitchen.com/mexican-meatball-soup-recipe/?fbclid=IwY2xjawIfTotleHRuA2FlbQIxMAABHQYcxHPcv1hhY25EjsAP33ufzYdcUKwRuldIir42OU8j8QqMZ9iXbduoEg_aem_WbP6pIyotuLceI-yiIsTIw',
            authors: ['Mely Martinez'],
            finder: 'Zam Illescas', 
        }
    ],
    ingredients: [
        { ...WHITE_RICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MEATBALLS },
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: MEATBALLS },
        { ...ZUCCHINI, amount: 1, unit: '', additionalDetails: 'grated', section: MEATBALLS },
        { ...WHITE_ONION, amount: 1 / 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'chopped', section: MEATBALLS },
        { ...EGG, amount: 1, unit: '', additionalDetails: 'beaten', section: MEATBALLS },
        { ...GARLIC_POWDER, amount: 1 / 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALLS },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALLS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: MEATBALLS },

        { ...VINE_TOMATO, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BROTH },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.BROTH },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...WHITE_ONION, amount: 1 / 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '', section: SECTIONS.BROTH },
        { ...CHICKEN_BROTH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BROTH },

        { ...CILANTRO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
        BLENDER,
    ],
    supplies: [
        MEDIUM_BOWL,
        MIXING_BOWL,
        SMALL_BOWL,
        LARGE_POT,
    ],
    directions: [
        { step: `Boil water.`, section: PREP_MEATBALLS },
        { step: `In a medium bowl, soak rice in boiling water for 45 minutes.`, section: PREP_MEATBALLS },
        { step: `In a mixing bowl, mix together the ground beef, grated squash and chopped onions.`, section: PREP_MEATBALLS },
        { step: `In a small bowl, whisk together eggs, garlic powder, salt and black pepper.`, section: PREP_MEATBALLS },
        { step: `Combine the egg mixture to the meat mixture.`, section: PREP_MEATBALLS },
        { step: `Drain the rice and mix into the meat.`, section: PREP_MEATBALLS },
        { step: `Form 1.5 inch meatballs (about 24).`, section: PREP_MEATBALLS },

        { step: `Over medium-high heat, bring a pot of water to a boil.`, section: SECTIONS.MAKE_SOUP },
        { step: `Carefully add tomatoes to the boiling water and let it cook for 5 minutes.`, section: SECTIONS.MAKE_SOUP },
        { step: `Remove the tomatoes from the water and peel.`, section: SECTIONS.MAKE_SOUP },
        { step: `Blend the peeled tomatoes and garlic until smooth.`, section: SECTIONS.MAKE_SOUP },
        { step: `Over medium-low heat, heat oil in a large pot.`, section: SECTIONS.MAKE_SOUP },
        { step: `Add onions and cook until soft (not browned)`, section: SECTIONS.MAKE_SOUP },
        { step: `Add the tomato puree and bring to a boil. Cook for about 3 minutes.`, section: SECTIONS.MAKE_SOUP },
        { step: `Add broth and bring to a simmer.`, section: SECTIONS.MAKE_SOUP },

        { step: `Add meatballs gently into simmering broth. Cover with lid.`, section: SECTIONS.ASSEMBLE },
        { step: `Simmer for about 30 to 45 minutes.`, section: SECTIONS.ASSEMBLE },

        { step: `Serve in deep bowls. Traditionally it is served with rice or beans and warm corn tortillas.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium-low heat, reheat the soup until heated through.',
        },
    ],
    mealPrep: true,
};