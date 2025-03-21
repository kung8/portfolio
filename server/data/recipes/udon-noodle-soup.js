// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS } = require('./constants');
const { BEEF_RIBS, YELLOW_ONION, CARROTS, CINNAMON_STICK, GINGER, PORK_TENDERLOINS, EGG, BEEF_BROTH, SHIITAKE_MUSHROOMS, THAI_CHILI_PEPPERS, MIRIN, LIGHT_SOY_SAUCE, WHITE_SUGAR, SALT, NAPA_CABBAGE, GREEN_ONIONS, SESAME_SEEDS, UDON_NOODLES, WARM_WATER } = require('./ingredients');

const BEEF_BROTH_SECTION = 'Beef Broth';
const EGG_SECTION = 'Eggs';
const NOODLE_SECTION = 'Noodles';
const SOUP_1_SECTION = 'Soup Part 1';
const SOUP_2_SECTION = 'Soup Part 2';

const MAKE_BEEF_BROTH = 'Make Beef Broth';
const COOK_EGGS = 'Cook Eggs';
const COOK_NOODLES = 'Cook Noodles';
const MAKE_SOUP = 'Make Soup';
const PREP_EGGS = 'Prep Eggs';

module.exports = {
    wip: true,
    cardName: 'Udon Noodle Soup',
    name: 'Udon Noodle Soup',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SOUP, TYPES.NOODLE],
    yields: ' servings',
    prepTime: '15 m',
    cookTime: '20 m',
    websites: [
        { label: 'Udon Noodle Soup', link: 'https://howtofeedaloon.com/udon-noodle-soup-with-pork/' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_RIBS, amount: 4, unit: UNITS.POUND, additionalDetails: '', section: BEEF_BROTH_SECTION },
        { ...YELLOW_ONION, amount: 2, unit: UNITS.MEDIUM, additionalDetails: 'peeled and quartered', section: BEEF_BROTH_SECTION },
        { ...CARROTS, amount: 1, unit: '', additionalDetails: 'peeled and chunked', section: BEEF_BROTH_SECTION },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: BEEF_BROTH_SECTION },
        { ...GINGER, amount: 3, unit: UNITS.INCH, additionalDetails: 'whole', section: BEEF_BROTH_SECTION },

        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: EGG_SECTION },
        { ...UDON_NOODLES, amount: 1 / 2, unit: UNITS.POUND, additionalDetails: '', section: NOODLE_SECTION },
        { ...CARROTS, amount: 1, unit: UNITS.LARGE, additionalDetails: 'peeled and julienned', section: SOUP_1_SECTION },
        { ...SHIITAKE_MUSHROOMS, amount: 7 / 2, unit: UNITS.OUNCE, additionalDetails: '', section: SOUP_1_SECTION },
        { ...GINGER, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: 'minced', section: SOUP_1_SECTION },
        { ...THAI_CHILI_PEPPERS, amount: 2, unit: '', additionalDetails: 'whole', section: SOUP_1_SECTION },
        { ...MIRIN, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: SOUP_1_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SOUP_1_SECTION },
        { ...WHITE_SUGAR, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SOUP_1_SECTION },
        { ...SALT, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SOUP_1_SECTION },
        { ...PORK_TENDERLOINS, amount: 1, unit: UNITS.POUND, additionalDetails: 'sliced', section: SOUP_2_SECTION },
        { ...NAPA_CABBAGE, amount: 2, unit: UNITS.MEDIUM, additionalDetails: '', section: SOUP_2_SECTION },
        { ...GREEN_ONIONS, amount: 2, unit: '', additionalDetails: 'chopped', section: SOUP_2_SECTION },
        { ...SESAME_SEEDS, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: '' },
    ],
    directions: [
        { step: 'Over medium-high heat, combine the "" section ingredients in a large pot.', type: MAKE_BEEF_BROTH },
        { step: 'Lower heat and let simmer for 3 hours, stirring occasionally. Add more water to keep ingredients covered.', type: MAKE_BEEF_BROTH },
        { step: 'Let the broth cool and remove the bones (reserve the bones and meat for other use).', type: MAKE_BEEF_BROTH },
        { step: 'Strain the broth and chill overnight (or at least 3 hours). Remove any congealed fat from the surface.', type: MAKE_BEEF_BROTH },

        { step: 'Over medium-high heat, fill a saucepan with enough water to cover eggs and bring to a boil.', type: COOK_EGGS },
        { step: 'Gently lower eggs into boiling water. Boil for 8 minutes.', type: COOK_EGGS },
        { step: 'Remove eggs with a slotted spoon and place eggs in cool water.', type: COOK_EGGS },

        { step: 'Over high heat, bring a pot of water to a boil.', type: COOK_NOODLES },
        { step: 'For fresh udon, boil for about 1 minute. For dry udon, boil until tender (about 5 to 7 minutes).', type: COOK_NOODLES },
        { step: 'Drain. Rinse with cool water.', type: COOK_NOODLES },

        { step: 'Over medium-low heat, bring a large pot of the beef broth to a simmer.', type: MAKE_SOUP },
        { step: 'Increase the heat to high, add all the "Soup Part 1" section ingredients (except the pork). Bring to a boil.', type: MAKE_SOUP },
        { step: 'Lower the heat to medium, simmer for 5 minutes.', type: MAKE_SOUP },
        { step: 'Add pork. Cook for a couple of minutes.', type: MAKE_SOUP },
        { step: 'Add the noodles and the remaining "Soup Part 2" section ingredients. Cook until the cabbage wilts.', type: MAKE_SOUP },
        { step: 'Remove the chili peppers.', type: MAKE_SOUP },
        { step: 'Taste and adjust as necessary.', type: MAKE_SOUP },

        { step: 'Peel the eggs and slice in half.', type: PREP_EGGS },

        { step: 'Ladle soup into bowls.', type: SECTIONS.SERVE },
        { step: 'Enjoy this soup dish topped with the halved eggs, green onions and sesame seed.', type: SECTIONS.SERVE },
    ]
};