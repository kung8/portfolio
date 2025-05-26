const ravioli1 = '../assets/Products/ravioli-1.jpeg';
const ravioli2 = '../assets/Products/ravioli-2.jpeg';
const ravioli3 = '../assets/Products/ravioli-3.jpeg';
// const ravioli4 = '../assets/Products/ravioli-4.jpeg';
// const ravioli5 = '../assets/Products/ravioli-5.jpeg';
// const ravioli6 = '../assets/Products/ravioli-6.jpeg';
// const ravioli7 = '../assets/Products/ravioli-7.jpeg';
// const ravioli8 = '../assets/Products/ravioli-8.jpeg';
// const ravioli9 = '../assets/Products/ravioli-9.jpeg';
// const ravioli10 = '../assets/Products/ravioli-10.jpeg';
// const ravioli11 = '../assets/Products/ravioli-11.jpeg';
// const ravioli12 = '../assets/Products/ravioli-12.jpeg';
// const ravioli13 = '../assets/Products/ravioli-13.jpeg';
// const ravioli14 = '../assets/Products/ravioli-14.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, DURUM_WHEAT, EGG, RICOTTA_CHEESE, PARMIGIANO_REGGIANO, SALT, BLACK_PEPPER, UNSALTED_BUTTER, SAGE, FRESH_SAGE } = require('./ingredients');

const PASTA_SECTIONS = 'Pasta';
const FILLING_SECTIONS = 'Filling';
const SAUCE_SECTIONS = 'Sauce';

const PREP_DOUGH = 'Prep Dough';
const PREP_FILLING = 'Prep Filling';
const PREP_PASTA = 'Prep Pasta';
const ASSEMBLE_RAVIOLI = 'Assemble Ravioli';
const COOK_RAVIOLI = 'Cook Ravioli';
const PREP_SAUCE = 'Prep Sauce';

module.exports = {
    wip: true,
    cardName: 'Ravioli',
    name: 'Ravioli',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.PASTA],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Ravioli', link: 'https://www.saturdaysinrome.com/blog/ricotta-ravioli-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2/3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTA_SECTIONS },
        { ...DURUM_WHEAT, amount: 2/3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTA_SECTIONS },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: PASTA_SECTIONS },

        { ...RICOTTA_CHEESE, amount: 18, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: FILLING_SECTIONS },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: FILLING_SECTIONS },
        { ...PARMIGIANO_REGGIANO, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FILLING_SECTIONS },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FILLING_SECTIONS },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FILLING_SECTIONS },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTIONS },
        { ...FRESH_SAGE, amount: '', unit: '', additionalDetails: '', section: SAUCE_SECTIONS },
        { ...PARMIGIANO_REGGIANO, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTIONS },
    ],
    appliances: [
        { name: 'refrigerator' },
        { name: 'stove' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: 'plastic wrap' },
        { name: 'rolling pin' },
        { name: 'tablespoon' },
        { name: 'baking sheet' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the flour and wheat.', section: PREP_DOUGH },
        { step: 'Pour the flour mixture on a clean surface.', section: PREP_DOUGH },
        { step: 'Make a well in the center.', section: PREP_DOUGH },
        { step: 'Crack the eggs in the center. Beat the eggs.', section: PREP_DOUGH, img: ravioli1 },
        { step: 'Gradually mix the flour mixture into the eggs.', section: PREP_DOUGH, img: ravioli2 },
        { step: 'Knead until the dough is combined (about 5 to 6 minutes).', section: PREP_DOUGH, img: ravioli3 },
        { step: 'Cover the dough in plastic wrap. Let it chill in the fridge for 30 minutes.', section: PREP_DOUGH },
        { step: 'In a mixing bowl, combine the "Filling" ingredients.', section: PREP_FILLING },
        { step: 'Roll out the dough into long, thin sheets either with a rolling pin or with a pasta attachment/machine.', section: PREP_PASTA },
        { step: 'Cut the pasta sheet in half. Now you have the top and bottom layer.', section: PREP_PASTA },
        { step: 'Evenly add a tablespoon of the filling to the pasta sheet with a gap between each spoonful.', section: ASSEMBLE_RAVIOLI },
        { step: 'Once a row of ravioli is filled, cut the row.', section: ASSEMBLE_RAVIOLI },
        { step: 'Lightly wet the edges of dough with water.', section: ASSEMBLE_RAVIOLI },
        { step: 'Cover the row of ravioli with a sheet of pasta.', section: ASSEMBLE_RAVIOLI },
        { step: 'Press to seal the ravioli pieces. Remove any air between the layers.', section: ASSEMBLE_RAVIOLI },
        { step: 'Cut the ravioli into the squares.', section: ASSEMBLE_RAVIOLI },
        { step: 'Set on a lightly floured baking sheet.', section: ASSEMBLE_RAVIOLI },
        { step: 'Repeat until all of the ravioli is assembled.', section: ASSEMBLE_RAVIOLI },
        { step: 'Over medium-high heat, bring a saucepan of salted water to a boil.', section: COOK_RAVIOLI },
        { step: 'Cook the ravioli (about about 3 to 4 minutes).', section: COOK_RAVIOLI },
        { step: 'Drain and set aside.', section: COOK_RAVIOLI },
        { step: 'Over medium-high heat, melt the butter in a pan.', section: PREP_SAUCE },
        { step: 'Add sage. Saute until lightly browned.', section: PREP_SAUCE },
        { step: 'Add the ravioli to the sauce. Coat it in the sauce.', section: PREP_SAUCE },
        { step: 'Enjoy this simple Italian cuisine topped with more cheese.', section: SECTIONS.SERVE },
    ]
};