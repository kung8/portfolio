// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { ALL_PURPOSE_FLOUR, DURUM_WHEAT, EGGS, RICOTTA_CHEESE, PARMIGIANO_REGGIANO, SALT, BLACK_PEPPER, UNSALTED_BUTTER, SAGE, FRESH_SAGE } = require('./ingredients');

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
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.PASTA],
    yields: '6 servings',
    prepTime: '45 m',
    cookTime: '15 m',
    websites: [
        { label: 'Ravioli', link: 'https://www.saturdaysinrome.com/blog/ricotta-ravioli-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '2/3 c', unit: '', additionalDetails: '', section: PASTA_SECTIONS },
        { ...DURUM_WHEAT, amount: '2/3 c', unit: '', additionalDetails: '', section: PASTA_SECTIONS },
        { ...EGGS, amount: '3', unit: '', additionalDetails: '', section: PASTA_SECTIONS },

        { ...RICOTTA_CHEESE, amount: '18 oz', unit: '', additionalDetails: '', section: FILLING_SECTIONS },
        { ...EGGS, amount: '2', unit: '', additionalDetails: '', section: FILLING_SECTIONS },
        { ...PARMIGIANO_REGGIANO, amount: '3 Tbsp', unit: '', additionalDetails: '', section: FILLING_SECTIONS },
        { ...SALT, amount: '2 tsp', unit: '', additionalDetails: '', section: FILLING_SECTIONS },
        { ...BLACK_PEPPER, amount: '1 Tbsp', unit: '', additionalDetails: '', section: FILLING_SECTIONS },

        { ...UNSALTED_BUTTER, amount: '4 Tbsp', unit: '', additionalDetails: '', section: SAUCE_SECTIONS },
        { ...FRESH_SAGE, amount: '', unit: '', additionalDetails: '', section: SAUCE_SECTIONS },
        { ...PARMIGIANO_REGGIANO, amount: '6 Tbsp', unit: '', additionalDetails: '', section: SAUCE_SECTIONS },
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
        { step: 'In a mixing bowl, combine the flour and wheat.', type: PREP_DOUGH },
        { step: 'Pour the flour mixture on a clean surface.', type: PREP_DOUGH },
        { step: 'Make a well in the center.', type: PREP_DOUGH },
        { step: 'Crack the eggs in the center. Beat the eggs.', type: PREP_DOUGH },
        { step: 'Gradually mix the flour mixture into the eggs.', type: PREP_DOUGH },
        { step: 'Knead until the dough is combined (about 5 to 6 minutes).', type: PREP_DOUGH },
        { step: 'Cover the dough in plastic wrap. Let it chill in the fridge for 30 minutes.', type: PREP_DOUGH },
        { step: 'In a mixing bowl, combine the "Filling" ingredients.', type: PREP_FILLING },
        { step: 'Roll out the dough into long, thin sheets either with a rolling pin or with a pasta attachment/machine.', type: PREP_PASTA },
        { step: 'Cut the pasta sheet in half. Now you have the top and bottom layer.', type: PREP_PASTA },
        { step: 'Evenly add a tablespoon of the filling to the pasta sheet with a gap between each spoonful.', type: ASSEMBLE_RAVIOLI },
        { step: 'Once a row of ravioli is filled, cut the row.', type: ASSEMBLE_RAVIOLI },
        { step: 'Lightly wet the edges of dough with water.', type: ASSEMBLE_RAVIOLI },
        { step: 'Cover the row of ravioli with a sheet of pasta.', type: ASSEMBLE_RAVIOLI },
        { step: 'Press to seal the ravioli pieces. Remove any air between the layers.', type: ASSEMBLE_RAVIOLI },
        { step: 'Cut the ravioli into the squares.', type: ASSEMBLE_RAVIOLI },
        { step: 'Set on a lightly floured baking sheet.', type: ASSEMBLE_RAVIOLI },
        { step: 'Repeat until all of the ravioli is assembled.', type: ASSEMBLE_RAVIOLI },
        { step: 'Over medium-high heat, bring a saucepan of salted water to a boil.', type: COOK_RAVIOLI },
        { step: 'Cook the ravioli (about about 3 to 4 minutes).', type: COOK_RAVIOLI },
        { step: 'Drain and set aside.', type: COOK_RAVIOLI },
        { step: 'Over medium-high heat, melt the butter in a pan.', type: PREP_SAUCE },
        { step: 'Add sage. Saute until lightly browned.', type: PREP_SAUCE },
        { step: 'Add the ravioli to the sauce. Coat it in the sauce.', type: PREP_SAUCE },
        { step: 'Enjoy this simple Italian cuisine topped with more cheese.', type: SECTIONS.SERVE },
    ]
};