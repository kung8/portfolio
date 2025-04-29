const chips1 = '../assets/Products/fish-and-chips-1.jpeg';
const chips2 = '../assets/Products/fish-and-chips-2.jpeg';
const chips3 = '../assets/Products/fish-and-chips-3.jpeg';
const chips4 = '../assets/Products/fish-and-chips-4.jpeg';
const chips5 = '../assets/Products/fish-and-chips-5.jpeg';
const chips6 = '../assets/Products/fish-and-chips-6.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { COD_FISH, SALT, BLACK_PEPPER, ALL_PURPOSE_FLOUR, GARLIC_POWDER, PAPRIKA, EGG, BEER, VEGETABLE_OIL } = require('./ingredients');

const FISH_SECTION = 'Fish';
const BEER_BATTER_SECTION = 'Beer Batter';

const PREP_FISH = 'Prep Fish';
const DEEP_FRY = 'Deep Fry';

module.exports = {
    cardName: 'Fish and Chips',
    name: 'Fish and Chips',
    img: chips6,
    recipeAuthor: 'Shawn',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.BRITISH],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.FISH],
    type: [TYPES.MAIN_COURSE, TYPES.FINGER_FOOD],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Crispy Beer-Battered Fish', link: 'https://iwashyoudry.com/crispy-beer-batter-fish-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...COD_FISH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: FISH_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FISH_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FISH_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BEER_BATTER_SECTION },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEER_BATTER_SECTION },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEER_BATTER_SECTION },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEER_BATTER_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: BEER_BATTER_SECTION },
        { ...BEER, amount: 4 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BEER_BATTER_SECTION },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: '' },
    ],
    appliances: [
        { name: 'deep fryer or stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'deep pot' },
        { name: '' },
    ],
    directions: [
        { step: 'Heat about 2 to 3 inches of oil in a deep fryer or in a pot. Bring it to 375ºF.', type: PREP_FISH },
        { step: 'Cut the fish to 1 inch wide and 3 inches long.', type: PREP_FISH },
        { step: 'Pat dry with a paper towel.', type: PREP_FISH },
        { step: 'Season with salt and pepper.', type: PREP_FISH, img: chips1 },
        { step: 'Line a baking sheet with paper towels and place a wire rack on top.', type: PREP_FISH },
        { step: 'In a mixing bowl, combine the "Beer Batter" section ingredients until it is smooth.', type: PREP_FISH, img: chips2 },
        { step: 'Dip the fish into the beer batter, one at a time, then immediately into the hot oil. Be carefully to not crowd the oil.', type: PREP_FISH, img: chips3 },
        { step: 'Deep fry the fish until they are golden brown (about 3 to 4 minutes).', type: DEEP_FRY, img: chips4 },
        { step: 'Transfer the fish to the wire rack to drip.', type: DEEP_FRY, img: chips5 },
        { step: 'Enjoy the fish with your favorite type of fries.', type: SECTIONS.SERVE },
    ]
};