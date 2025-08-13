const baked3 = '../assets/Products/baked-macaroni-and-cheese-baked-3.jpeg';
const baked4 = '../assets/Products/baked-macaroni-and-cheese-baked-4.jpeg';
const boiled = '../assets/Products/baked-macaroni-and-cheese-boiled-macaroni.jpeg';
const boilingRoux = '../assets/Products/baked-macaroni-and-cheese-boiling-roux.jpeg';
const water = '../assets/Products/baked-macaroni-and-cheese-boiling-water.jpeg';
const cheeseLayer = '../assets/Products/baked-macaroni-and-cheese-cheese-layer.jpeg';
const macaroni = '../assets/Products/baked-macaroni-and-cheese-cooked-macaroni.jpeg';
const cream = '../assets/Products/baked-macaroni-and-cheese-cream.jpeg';
const crumbLayer = '../assets/Products/baked-macaroni-and-cheese-crumb-layer.jpeg';
const crumb = '../assets/Products/baked-macaroni-and-cheese-crumb.jpeg';
const flour = '../assets/Products/baked-macaroni-and-cheese-flour.jpeg';
const butter = '../assets/Products/baked-macaroni-and-cheese-melted-butter.jpeg';
const cheesesZoomed = '../assets/Products/baked-macaroni-and-cheese-mixed-cheeses-zoomed.jpeg';
const mixedPan = '../assets/Products/baked-macaroni-and-cheese-mixed-in-pan.jpeg';
const mixed = '../assets/Products/baked-macaroni-and-cheese-mixed.jpeg';
const sauce = '../assets/Products/baked-macaroni-and-cheese-sauce.jpeg';
const seasoning = '../assets/Products/baked-macaroni-and-cheese-seasoning.jpeg';
const second = '../assets/Products/baked-macaroni-and-cheese-second-cheeses.jpeg';
const topPasta = '../assets/Products/baked-macaroni-and-cheese-top-pasta-layer.jpeg';
const tupperware = '../assets/Products/baked-macaroni-and-cheese-tupperware.jpeg';
const plate4 = '../assets/Products/baked-macaroni-and-cheese-full-plate-4.jpeg';
const plate5 = '../assets/Products/baked-macaroni-and-cheese-full-plate-5.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { ELBOW_MACARONI, OLIVE_OIL, UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, WHOLE_MILK, HEAVY_CREAM, CHEDDAR_CHEESE, BLACK_PEPPER, SALT, PANKO_BREADCRUMBS, PARMESAN_CHEESE, SMOKED_PAPRIKA, GRUYERE_CHEESE } = require('./ingredients');

module.exports = {
    cardName: 'Baked Mac and Cheese',
    name: 'Baked Macaroni and Cheese',
    img: plate4,
    recipeAuthors: ['Trish'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL, METHODS.BAKE],
    type: [TYPES.CASSEROLE, TYPES.PASTA],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Macaroni and Cheese', link: 'https://www.momontimeout.com/best-homemade-baked-mac-and-cheese-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...ELBOW_MACARONI, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...CHEDDAR_CHEESE, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.SAUCE },
        { ...GRUYERE_CHEESE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHOLE_MILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...PANKO_BREADCRUMBS, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PARMESAN_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...SMOKED_PAPRIKA, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'cooking oil spray' },
        { name: 'large pot' },
        { name: 'colander' },
        { name: '2 mixing bowl' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Light spray some cooking oil spray in a baking dish.', section: SECTIONS.MAIN, img: tupperware },
        { step: 'In a large pot, boil water.', section: SECTIONS.NOODLES, img: water },
        { step: 'Cook pasta until it is cooked to al dente (follow the instructions on the package).', section: SECTIONS.NOODLES, img: boiled },
        { step: 'Drain the pasta in a colander and place in a bowl.', section: SECTIONS.NOODLES },
        { step: 'Drizzle with olive oil and mix until pasta is coated. Set aside.', section: SECTIONS.NOODLES, img: macaroni },
        { step: 'In a mixing bowl, combine shredded cheese and set aside.', section: SECTIONS.SAUCE, img: cheesesZoomed },
        { step: 'Over medium heat, melt butter in a large pot.', section: SECTIONS.SAUCE, img: butter },
        { step: 'Whisk flour until it becomes golden (about 1 minute).', section: SECTIONS.SAUCE, img: [flour, boilingRoux] },
        { step: 'Add milk and heavy cream and whisk until smooth.', section: SECTIONS.SAUCE, img: cream },
        { step: 'Continue to whisk until it bubbles (for about 2 minutes)', section: SECTIONS.SAUCE },
        { step: 'Add salt and pepper.', section: SECTIONS.SAUCE, img: seasoning },
        { step: 'Add 2 cups of the mixed cheeses and mix. Repeat with another 2 cups. Sauce should be thick.', section: SECTIONS.SAUCE, img: [second, sauce] },
        { step: 'Mix together the sauce and the pasta until the pasta is coated.', section: SECTIONS.ASSEMBLE, img: [mixed, mixedPan] },
        { step: 'Pour half of the macaroni and cheese into the baking dish.', section: SECTIONS.ASSEMBLE },
        { step: 'Add the last 2 cups of cheese on top of the mac and cheese.', section: SECTIONS.ASSEMBLE, img: cheeseLayer },
        { step: 'Add the last of the mac and cheese.', section: SECTIONS.ASSEMBLE, img: topPasta },
        { step: 'In a small bowl, combine together panko breadcrumbs, parmesan cheese, paprika and melted butter.', section: SECTIONS.ASSEMBLE, img: crumb },
        { step: 'Sprinkle this mixture over the mac and cheese.', section: SECTIONS.ASSEMBLE, img: crumbLayer },
        { step: 'Bake until bubbly and golden brown (about 30 minutes).', section: SECTIONS.ASSEMBLE, img: [baked3, baked4] },
        { step: 'Serve this warm and enjoy this comfort food.', section: SECTIONS.SERVE, img: plate5 },
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a little milk or cheese sauce. Cover in foil and bake at 350ºF until heated through (about 20 minutes). Remove foil and broil until the crust is crispy (about 5 minutes).',
        },
    ],
    mealPrep: true,
};