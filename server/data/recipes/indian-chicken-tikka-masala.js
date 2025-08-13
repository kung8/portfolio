const chickenSauce1 = '../assets/Products/chicken-tikka-masala-chicken-in-sauce-1.jpeg';
const chickenSauce2 = '../assets/Products/chicken-tikka-masala-chicken-in-sauce-2.jpeg';
const cream = '../assets/Products/chicken-tikka-masala-cream.jpeg';
const curryChicken = '../assets/Products/chicken-tikka-masala-curry-chicken.jpeg';
const ghee = '../assets/Products/chicken-tikka-masala-ghee.jpeg';
const mixedSpicesVeggies = '../assets/Products/chicken-tikka-masala-mixed-spices-and-veggies.jpeg';
const sugarAdded = '../assets/Products/chicken-tikka-masala-mixed-sugar-added.jpeg';
const mixedVeggies = '../assets/Products/chicken-tikka-masala-mixed-veggies.jpeg';
const mixed = '../assets/Products/chicken-tikka-masala-mixed.jpeg';
const oil = '../assets/Products/chicken-tikka-masala-oil.jpeg';
const cookedChickenZoomed = '../assets/Products/chicken-tikka-masala-partially-cooked-chicken-zoomed.jpeg';
const plated1 = '../assets/Products/chicken-tikka-masala-plated-1.jpeg';
const sauce = '../assets/Products/chicken-tikka-masala-sauce.jpeg';
const spices = '../assets/Products/chicken-tikka-masala-spices.jpeg';
const sugar = '../assets/Products/chicken-tikka-masala-sugar.jpeg';
const tomato = '../assets/Products/chicken-tikka-masala-tomato-sauce.jpeg';
const translucent = '../assets/Products/chicken-tikka-masala-translucent-onion.jpeg';

const { CATEGORIES, GENRES, TYPES, METHODS, SECTIONS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const { GHEE, YELLOW_ONION, GARLIC, CUMIN, SALT, GINGER, CAYENNE_PEPPER, CINNAMON, TURMERIC, TOMATO_SAUCE, HEAVY_CREAM, WHITE_SUGAR, PAPRIKA, VEGETABLE_OIL, BONELESS_AND_SKINLESS_CHICKEN_BREAST, CURRY_POWDER, } = require('./ingredients');

module.exports = {
    cardName: 'Chicken Tikka Masala',
    name: 'Chicken Tikka Masala',
    img: chickenSauce2,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDIAN, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.CURRY, TYPES.RICE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 75, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Chicken Tikka Masala', link: "https://www.allrecipes.com/recipe/228293/curry-stand-chicken-tikka-masala-sauce" }
    ],
    ingredients: [
        { ...GHEE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CINNAMON, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TURMERIC, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_SAUCE, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PAPRIKA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: '1 inch pieces', section: SECTIONS.CHICKEN },
        { ...CURRY_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'large pan' },
    ],
    directions: [
        { step: 'Over medium heat, heat ghee in a large pot.', section: SECTIONS.SAUCE, img: ghee },
        { step: 'Add onions. Cook and stir until it becomes translucent (about 5 minutes).', section: SECTIONS.SAUCE, img: translucent },
        { step: 'Add garlic. Cook and stir until fragrant (about 1 minute).', section: SECTIONS.SAUCE, img: mixedVeggies },
        { step: 'Add cumin, salt, ginger, cayenne pepper, cinnamon, and turmeric. Cook and stir until fragrant (about 2 minutes).', section: SECTIONS.SAUCE, img: [spices, mixedSpicesVeggies] },
        { step: 'Add tomato sauce. Bring to a boil and reduce to low heat.', section: SECTIONS.SAUCE, img: tomato },
        { step: 'Simmer sauce for 10 minutes.', section: SECTIONS.SAUCE },
        { step: 'Add cream, sugar and paprika.', section: SECTIONS.SAUCE, img: [sugar, sugarAdded, cream] },
        { step: 'Bring to a simmer and cook until sauce has thickened (about 10 to 15 minutes).', section: SECTIONS.SAUCE, img: sauce },
        { step: 'Over medium heat, heat vegetable oil in a large pan.', section: SECTIONS.MAIN, img: oil },
        { step: 'Add chicken and curry powder.', section: SECTIONS.MAIN, img: curryChicken },
        { step: 'Sear chicken until lightly browned (about 3 minutes). It is fine to not be cooked all the way through.', section: SECTIONS.MAIN, img: cookedChickenZoomed },
        { step: 'Transfer chicken to the sauce. Simmer until sauce is cooked through (about 30 minutes).', section: SECTIONS.MAIN, img: [chickenSauce1, mixed] },
        { step: 'Add salt and sugar to taste.', section: SECTIONS.MAIN },
        { step: 'Serve with rice and naan or roti.', section: SECTIONS.MAIN, img: plated1 },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};