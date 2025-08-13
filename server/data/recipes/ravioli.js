const ravioli1 = '../assets/Products/ravioli-1.jpeg';
const ravioli2 = '../assets/Products/ravioli-2.jpeg';
const ravioli3 = '../assets/Products/ravioli-3.jpeg';
const ravioli4 = '../assets/Products/ravioli-4.jpeg';
const ravioli5 = '../assets/Products/ravioli-5.jpeg';
const ravioli6 = '../assets/Products/ravioli-6.jpeg';
const ravioli7 = '../assets/Products/ravioli-7.jpeg';
const ravioli8 = '../assets/Products/ravioli-8.jpeg';
const ravioli9 = '../assets/Products/ravioli-9.jpeg';
const ravioli10 = '../assets/Products/ravioli-10.jpeg';
const ravioli11 = '../assets/Products/ravioli-11.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { ALL_PURPOSE_FLOUR, DURUM_WHEAT, EGG, RICOTTA_CHEESE, PARMIGIANO_REGGIANO, SALT, BLACK_PEPPER, UNSALTED_BUTTER, SAGE, FRESH_SAGE } = require('./ingredients');

const COOK_RAVIOLI = 'Cook Ravioli';

module.exports = {
    wip: true,
    cardName: 'Ravioli',
    name: 'Ravioli',
    img: ravioli11,
    recipeAuthors: [''],
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
        { ...ALL_PURPOSE_FLOUR, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PASTA },
        { ...DURUM_WHEAT, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PASTA },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.PASTA },

        { ...RICOTTA_CHEESE, amount: 9, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...PARMIGIANO_REGGIANO, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FRESH_SAGE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PARMIGIANO_REGGIANO, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
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
        { step: 'In a mixing bowl, combine the flour and wheat.', section: SECTIONS.PREP_DOUGH },
        { step: 'Pour the flour mixture on a clean surface.', section: SECTIONS.PREP_DOUGH },
        { step: 'Make a well in the center.', section: SECTIONS.PREP_DOUGH },
        { step: 'Crack the eggs in the center. Beat the eggs.', section: SECTIONS.PREP_DOUGH, img: ravioli1 },
        { step: 'Gradually mix the flour mixture into the eggs.', section: SECTIONS.PREP_DOUGH, img: ravioli2 },
        { step: 'Knead until the dough is combined (about 5 to 6 minutes).', section: SECTIONS.PREP_DOUGH, img: ravioli3 },
        { step: 'Cover the dough in plastic wrap. Let it chill in the fridge for 30 minutes.', section: SECTIONS.PREP_DOUGH },
        { step: 'In a mixing bowl, combine the "Filling" ingredients.', section: SECTIONS.PREP_FILLING, img: ravioli4 },
        { step: 'Roll out the dough into long, thin sheets either with a rolling pin or with a pasta attachment/machine.', section: SECTIONS.PREP_PASTA, img: ravioli5 },
        { step: 'Cut the pasta sheet in half. Now you have the top and bottom layer.', section: SECTIONS.PREP_PASTA },
        { step: 'Evenly add a tablespoon of the filling to the pasta sheet with a gap between each spoonful.', section: SECTIONS.ASSEMBLE, img: ravioli6 },
        { step: 'Once a row of ravioli is filled, cut the row.', section: SECTIONS.ASSEMBLE },
        { step: 'Lightly wet the edges of dough with water.', section: SECTIONS.ASSEMBLE },
        { step: 'Cover the row of ravioli with a sheet of pasta.', section: SECTIONS.ASSEMBLE },
        { step: 'Press to seal the ravioli pieces. Remove any air between the layers.', section: SECTIONS.ASSEMBLE },
        { step: 'Cut the ravioli into the squares.', section: SECTIONS.ASSEMBLE },
        { step: 'Set on a lightly floured baking sheet.', section: SECTIONS.ASSEMBLE },
        { step: 'Repeat until all of the ravioli is assembled.', section: SECTIONS.ASSEMBLE },
        { step: 'Over medium-high heat, bring a saucepan of salted water to a boil.', section: COOK_RAVIOLI },
        { step: 'Cook the ravioli (about about 3 to 4 minutes).', section: COOK_RAVIOLI, img: ravioli7 },
        { step: 'Drain and set aside.', section: COOK_RAVIOLI, img: ravioli8 },
        { step: 'Over medium-high heat, melt the butter in a pan.', section: SECTIONS.PREP_SAUCE },
        { step: 'Add sage. Saute until lightly browned.', section: SECTIONS.PREP_SAUCE, img: ravioli9 },
        { step: 'Add the ravioli to the sauce. Coat it in the sauce.', section: SECTIONS.PREP_SAUCE, img: ravioli10 },
        { step: 'Enjoy this simple Italian cuisine topped with more cheese.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original filling was way too much so I cut it down in half. I think if you were to double the ravioli dough you can still make do with this updated normal batch.' },
        { note: 'Do not chill as long as I did. It ended up drying out the dough since I left it overnight.'}
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