const bowl = '../assets/Products/bibimbap-bowl.jpeg';
const carrots = '../assets/Products/bibimbap-carrot-matchsticks.jpeg';
const cookedMatchsticks = '../assets/Products/bibimbap-cooked-carrot-matchsticks.jpeg';
const cookingChicken = '../assets/Products/bibimbap-cooking-chicken.jpeg';
const eggs = '../assets/Products/bibimbap-eggs.jpeg';
const marinating = '../assets/Products/bibimbap-marinating-chicken.jpeg';
// const spinach = '../assets/Products/bibimbap-spinach.jpeg';
const sauce = '../assets/Products/bibimbap-with-sauce.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    GROUND_BEEF,
    LIGHT_SOY_SAUCE,
    SESAME_OIL,
    BROWN_SUGAR,
    GARLIC,
    CARROT,
    SPINACH,
    CORN,
    EGG,
    GOCHUJANG_SAUCE,
    WHITE_SUGAR,
    WARM_WATER,
    SESAME_SEEDS,
    WHITE_VINEGAR,
    JASMINE_RICE,
} = require('./ingredients');

const BEEF = 'Beef';
const VEGETABLES = 'Vegetables';
const EGGS_SECTION = 'Eggs';
const BIBIMBAP_SAUCE = 'Bibimbap Sauce';

module.exports = {
    cardName: 'Bibimbap',
    name: 'Korean Bibimbap',
    img: bowl,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.KOREAN, GENRES.ASIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Bibimbap', link: "https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/" }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BEEF },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: BEEF },
        { ...CARROT, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'matchsticks', section: VEGETABLES },
        { ...SPINACH, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: VEGETABLES },
        { ...CORN, amount: '', unit: '', additionalDetails: '', section: VEGETABLES },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: EGGS_SECTION },
        { ...GOCHUJANG_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIBIMBAP_SAUCE },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIBIMBAP_SAUCE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIBIMBAP_SAUCE },
        { ...WARM_WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIBIMBAP_SAUCE },
        { ...SESAME_SEEDS, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIBIMBAP_SAUCE },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BIBIMBAP_SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: BIBIMBAP_SAUCE },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'pan' },
        { name: 'medium bowl' },
        { name: 'serving bowl' },
    ],
    directions: [
        { step: 'Mix the "Beef" section ingredients.', type: BEEF },
        { step: 'Marinate the beef for at least 30 minutes. You can replace this with pork, chicken, or any other protein alternative.', type: BEEF, img: marinating },
        { step: 'Over medium-high heat, cook the beef until browned then remove.', type: BEEF, img: cookingChicken },
        { step: 'To prepare the vegetable toppings, boil each of the vegetables separately until they soften/wilt.', type: VEGETABLES, img: cookedMatchsticks },
        { step: 'Set the vegetables aside until ready to top.', type: VEGETABLES, img: carrots },
        { step: 'Over medium-high heat, add oil.', type: EGGS_SECTION },
        { step: 'Fry the eggs over-easy, or as preferred.', type: EGGS_SECTION, img: eggs },
        { step: 'Mix the sauce ingredients together in a medium bowl.', type: BIBIMBAP_SAUCE },
        { step: 'In a serving bowl, scoop some rice and top the rice with the beef, veggies, and eggs.', type: SECTIONS.SERVE, img: bowl },
        { step: 'Top with the sauce.', type: SECTIONS.SERVE, img: sauce },
        { step: 'Mix the toppings in the bowl when you ready to eat.', type: SECTIONS.SERVE },
    ]
};