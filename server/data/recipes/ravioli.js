const ravioli0 = '../assets/Products/ravioli-0.jpeg';
const ravioli1 = '../assets/Products/ravioli-1.jpeg';
const ravioli2 = '../assets/Products/ravioli-2.jpeg';
const ravioli3 = '../assets/Products/ravioli-3.mov';
const ravioli4 = '../assets/Products/ravioli-4.jpeg';
const ravioli5 = '../assets/Products/ravioli-5.jpeg';
const ravioli6 = '../assets/Products/ravioli-6.jpeg';
const ravioli7 = '../assets/Products/ravioli-7.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, BLACK_PEPPER, BOWL, CHEESECLOTH, EGG, FORK, GARLIC, HEAVY_CREAM, LARGE_POT, MEDIUM_BOWL, NUTMEG, PARMIGIANO_REGGIANO, PASTA_MAKER, RICOTTA_CHEESE, SALT, SAUCEPAN, SPINACH, STOVE, STRAINER, UNSALTED_BUTTER, WHITE_TRUFFLE_OIL } = require('./ingredients');

const RICOTTA_AND_SPINACH_FILLING = 'Ricotta & Spinach Filling';
const WHITE_TRUFFLE_CREAM_SAUCE = 'White Truffle Cream Sauce';

const PREP_RICOTTA = 'Prep Ricotta';
const PREP_SPINACH = 'Prep Spinach';
const PREP_RICOTTA_SPINACH_FILLING = 'Prep Ricotta & Spinach Filling';
const MAKE_RAVIOLI = 'Make Ravioli';
const COOK_RAVIOLI = 'Cook Ravioli';
const PREP_WHITE_TRUFFLE_CREAM_SAUCE = 'Prep White Truffle Cream Sauce';

module.exports = {
    cardName: 'Ravioli',
    name: 'Ravioli',
    img: ravioli7,
    available: true,
    recommended: true,
    createdAt: '2025-01-01 14:44:15',
    modifiedAt: '2026-06-23 22:28:21',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SIMMER],
    type: [TYPES.PASTA],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Ricotta & Spinach Filling', link: 'https://www.thespruceeats.com/ricotta-and-spinach-filling-recipe-1808376', authors: ['Peggy Trowbridge Filippone'], finder: 'Kevin Ung' },
        { label: 'Pasta', link: 'https://foodtourrome.com/recipes-the-roman-food-tour/', authors: ['Food Tour Rome'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...RICOTTA_CHEESE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: RICOTTA_AND_SPINACH_FILLING },
        { ...SPINACH, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: RICOTTA_AND_SPINACH_FILLING },
        { ...PARMIGIANO_REGGIANO, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: RICOTTA_AND_SPINACH_FILLING },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: RICOTTA_AND_SPINACH_FILLING },
        { ...NUTMEG, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICOTTA_AND_SPINACH_FILLING },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: RICOTTA_AND_SPINACH_FILLING },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: RICOTTA_AND_SPINACH_FILLING },

        { ...ALL_PURPOSE_FLOUR, amount: 200, unit: INGREDIENT_UNITS.GRAM, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.DOUGH },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: WHITE_TRUFFLE_CREAM_SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: WHITE_TRUFFLE_CREAM_SAUCE },
        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WHITE_TRUFFLE_CREAM_SAUCE },
        { ...PARMIGIANO_REGGIANO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WHITE_TRUFFLE_CREAM_SAUCE },
        { ...WHITE_TRUFFLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: WHITE_TRUFFLE_CREAM_SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: WHITE_TRUFFLE_CREAM_SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: WHITE_TRUFFLE_CREAM_SAUCE },
    ],
    appliances: [
        STOVE,
        PASTA_MAKER,
    ],
    supplies: [
        STRAINER,
        CHEESECLOTH,
        BOWL,
        LARGE_POT,
        { ...MEDIUM_BOWL, amount: 2 },
        FORK,
        SAUCEPAN,
    ],
    directions: [
        // Ricotta & Spinach Filling
        /** 
         * Prep: 12 m
         * Cook: 30 s
         * Wait: 1 h
        */
        { step: `Place cheese cloth or paper towel in strainer. Place strainer over bowl.`, section: PREP_RICOTTA },
        { step: `Strain ricotta cheese to drain liquid (about 5 to 10 minutes).`, section: PREP_RICOTTA },

        { step: `Over medium-high heat, bring a pot of salted water to a boil.`, section: PREP_SPINACH },
        { step: `Blanch spinach for 30 seconds.`, section: PREP_SPINACH },
        { step: `Run spinach under cold water. Drain.`, section: PREP_SPINACH },
        { step: `Chop spinach.`, section: PREP_SPINACH },

        { step: `In a medium bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: PREP_RICOTTA_SPINACH_FILLING, img: ravioli1 },
        { step: `Chill in fridge for at least one hour.`, section: PREP_RICOTTA_SPINACH_FILLING },

        // Ravioli
        /**
         * Prep: 10 m
         * Cook: 5 m
         * Wait: 0 m
        */
        { step: `In another medium bowl, add flour.`, section: MAKE_RAVIOLI },
        { step: `Make a well in the flour.`, section: MAKE_RAVIOLI },
        { step: `Add eggs in the center. Slowly mix the flour into the eggs with a fork.`, section: MAKE_RAVIOLI, img: ravioli2 },
        { step: `Continue to mix until the dough comes to a ball.`, section: MAKE_RAVIOLI },
        { step: `Knead dough with your palm, stretch and fold.`, section: MAKE_RAVIOLI },
        { step: `Run the dough through the pasta maker several times gradually until it gets to level 6. I ran it through levels: 0, 4 and 6.`, section: MAKE_RAVIOLI, video: ravioli3 },
        { step: `Cut dough strip in half length-wise. Now you have a top and bottom layer.`, section: MAKE_RAVIOLI },
        { step: `Place a dollop of filling in the center about 2 inches apart.`, section: MAKE_RAVIOLI },
        { step: `Place the top layer of dough and cut ravioli into squares. Brush egg wash along the edges so the squares can seal.`, section: MAKE_RAVIOLI, img: ravioli4 },

        { step: `Over medium-high heat, bring a pot of salted water to a boil.`, section: COOK_RAVIOLI },
        { step: `Cook ravioli (about 4 to 5 minutes).`, section: COOK_RAVIOLI, img: ravioli5 },
        { step: `Transfer ravioli to a plate and reserve pasta water.`, section: COOK_RAVIOLI },

        // White Truffle Cream Sauce
        /**
         * Prep: 5 m
         * Cook: 10 m
         * Wait: 0 m 
        */
        { step: `Over medium-low heat, melt butter in a saucepan.`, section: PREP_WHITE_TRUFFLE_CREAM_SAUCE },
        { step: `Add garlic. Saute until fragrant (about 1 minute).`, section: PREP_WHITE_TRUFFLE_CREAM_SAUCE },
        { step: `Add heavy cream and bring to a simmer.`, section: PREP_WHITE_TRUFFLE_CREAM_SAUCE },
        { step: `Let it thicken (about 3 to 5 minutes).`, section: PREP_WHITE_TRUFFLE_CREAM_SAUCE, img: ravioli6 },
        { step: `Remove from heat. Stir in cheese until smooth.`, section: PREP_WHITE_TRUFFLE_CREAM_SAUCE },
        { step: `Add white truffle oil and reserved pasta water.`, section: PREP_WHITE_TRUFFLE_CREAM_SAUCE },

        { step: `Toss cooked ravioli in white truffle cream sauce until coated.`, section: SECTIONS.ASSEMBLE },

        { step: `Serve and enjoy the best ravioli I have ever had!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `The recommended pasta maker is the Marcato Atlas 150.` },
        { note: `Best ravioli I had was at Trattoria Zaza in Florence.`, img: ravioli0 }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: `Store ravioli and sauce separately.`
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.SAUTE,
            instruction: 'Over medium-low heat, heat a little butter or oil in a pan. Add ravioli in a single layer. Cook until warmed through (about 2 to 3 minutes per side). Heat sauce in a separate pan and add ravioli to sauce. Toss until coated.',
        },
    ],
    mealPrep: true,
};