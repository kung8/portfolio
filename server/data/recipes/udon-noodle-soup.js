// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BEEF_BROTH, BEEF_RIBS, CARROT, CINNAMON_STICK, EGG, GINGER, GREEN_ONION, LIGHT_SOY_SAUCE, MIRIN, NAPA_CABBAGE, PORK_TENDERLOINS, SALT, SESAME_SEEDS, SHIITAKE_MUSHROOM, THAI_CHILI_PEPPER, UDON_NOODLES, WHITE_SUGAR, YELLOW_ONION } = require('./ingredients');

const SOUP_1_SECTION = 'Soup Part 1';
const SOUP_2_SECTION = 'Soup Part 2';

module.exports = {
    wip: true,
    cardName: 'Udon Noodle Soup',
    name: 'Udon Noodle Soup',
    img: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SOUP, TYPES.NOODLE],
    allergies: [ALLERGIES.EGG, ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 3, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Udon Noodle Soup', 
            link: 'https://howtofeedaloon.com/udon-noodle-soup-with-pork/',
            authors: ['Kris Longwell'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BEEF_RIBS, amount: 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BROTH },
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'peeled and quartered', section: SECTIONS.BROTH },
        { ...CARROT, amount: 1, unit: '', additionalDetails: 'peeled and chunked', section: SECTIONS.BROTH },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.BROTH },
        { ...GINGER, amount: 3, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'whole', section: SECTIONS.BROTH },

        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...UDON_NOODLES, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'peeled and julienned', section: SOUP_1_SECTION },
        { ...SHIITAKE_MUSHROOM, amount: 7 / 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SOUP_1_SECTION },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: SOUP_1_SECTION },
        { ...THAI_CHILI_PEPPER, amount: 2, unit: '', additionalDetails: 'whole', section: SOUP_1_SECTION },
        { ...MIRIN, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SOUP_1_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SOUP_1_SECTION },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SOUP_1_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SOUP_1_SECTION },
        { ...PORK_TENDERLOINS, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SOUP_2_SECTION },
        { ...NAPA_CABBAGE, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '', section: SOUP_2_SECTION },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'chopped', section: SOUP_2_SECTION },
        { ...SESAME_SEEDS, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
    ],
    directions: [
        { step: `Over medium-high heat, combine the "${SECTIONS.BROTH}" section ingredients in a large pot.`, section: SECTIONS.MAKE_BROTH },
        { step: `Lower heat and let simmer for 3 hours, stirring occasionally. Add more water to keep ingredients covered.`, section: SECTIONS.MAKE_BROTH },
        { step: `Let the broth cool and remove the bones (reserve the bones and meat for other use).`, section: SECTIONS.MAKE_BROTH },
        { step: `Strain the broth and chill overnight (or at least 3 hours). Remove any congealed fat from the surface.`, section: SECTIONS.MAKE_BROTH },

        { step: `Over medium-high heat, fill a saucepan with enough water to cover eggs and bring to a boil.`, section: SECTIONS.COOK_EGGS },
        { step: `Gently lower eggs into boiling water. Boil for 8 minutes.`, section: SECTIONS.COOK_EGGS },
        { step: `Remove eggs with a slotted spoon and place eggs in cool water.`, section: SECTIONS.COOK_EGGS },

        { step: `Over high heat, bring a pot of water to a boil.`, section: SECTIONS.COOK_NOODLES },
        { step: `For fresh udon, boil for about 1 minute. For dry udon, boil until tender (about 5 to 7 minutes).`, section: SECTIONS.COOK_NOODLES },
        { step: `Drain. Rinse with cool water.`, section: SECTIONS.COOK_NOODLES },

        { step: `Over medium-low heat, bring a large pot of the beef broth to a simmer.`, section: SECTIONS.MAKE_SOUP },
        { step: `Increase the heat to high, add all the "${SOUP_1_SECTION}" section ingredients (except the pork). Bring to a boil.`, section: SECTIONS.MAKE_SOUP },
        { step: `Lower the heat to medium, simmer for 5 minutes.`, section: SECTIONS.MAKE_SOUP },
        { step: `Add pork. Cook for a couple of minutes.`, section: SECTIONS.MAKE_SOUP },
        { step: `Add the noodles and the remaining "${SOUP_2_SECTION}" section ingredients. Cook until the cabbage wilts.`, section: SECTIONS.MAKE_SOUP },
        { step: `Remove the chili peppers.`, section: SECTIONS.MAKE_SOUP },
        { step: `Taste and adjust as necessary.`, section: SECTIONS.MAKE_SOUP },

        { step: `Peel the eggs and slice in half.`, section: SECTIONS.PREP_EGGS },

        { step: `Ladle soup into bowls.`, section: SECTIONS.SERVE },
        { step: `Enjoy this soup dish topped with the halved eggs, green onions and sesame seed.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the ingredients separately.'
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};