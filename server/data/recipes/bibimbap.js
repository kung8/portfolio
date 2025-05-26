const bowl = '../assets/Products/bibimbap-bowl.jpeg';
const carrots = '../assets/Products/bibimbap-carrot-matchsticks.jpeg';
const cookedMatchsticks = '../assets/Products/bibimbap-cooked-carrot-matchsticks.jpeg';
const cookingChicken = '../assets/Products/bibimbap-cooking-chicken.jpeg';
const eggs = '../assets/Products/bibimbap-eggs.jpeg';
const marinating = '../assets/Products/bibimbap-marinating-chicken.jpeg';
// const spinach = '../assets/Products/bibimbap-spinach.jpeg';
const sauce = '../assets/Products/bibimbap-with-sauce.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
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
    SESAME_SEEDS,
    WHITE_VINEGAR,
    JASMINE_RICE,
    WATER
} = require('./ingredients');

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
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.BEEF },
        { ...CARROT, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'matchsticks', section: SECTIONS.VEGGIES },
        { ...SPINACH, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CORN, amount: '', unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...GOCHUJANG_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.SAUCE },
        { ...SESAME_SEEDS, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
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
        { step: `Mix the "${SECTIONS.BEEF}" section ingredients.`, section: SECTIONS.MARINATE_BEEF },
        { step: 'Marinate the beef for at least 30 minutes. You can replace this with pork, chicken, or any other protein alternative.', section: SECTIONS.MARINATE_BEEF, img: marinating },
        { step: 'Over medium-high heat, cook the beef until browned then remove.', section: SECTIONS.COOK_BEEF, img: cookingChicken },
        { step: 'To prepare the vegetable toppings, boil each of the vegetables separately until they soften/wilt.', section: SECTIONS.COOK_VEGGIES, img: cookedMatchsticks },
        { step: 'Set the vegetables aside until ready to top.', section: SECTIONS.COOK_VEGGIES, img: carrots },
        { step: 'Over medium-high heat, add oil.', section: SECTIONS.COOK_EGGS },
        { step: 'Fry the eggs over-easy, or as preferred.', section: SECTIONS.COOK_EGGS, img: eggs },
        { step: 'Mix the sauce ingredients together in a medium bowl.', section: SECTIONS.PREP_SAUCE },
        { step: 'In a serving bowl, scoop some rice and top the rice with the beef, veggies, and eggs.', section: SECTIONS.SERVE, img: bowl },
        { step: 'Top with the sauce.', section: SECTIONS.SERVE, img: sauce },
        { step: 'Mix the toppings in the bowl when you ready to eat.', section: SECTIONS.SERVE },
    ]
};