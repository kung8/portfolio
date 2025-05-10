const cake1 = '../assets/Products/coffee-cake-1.jpeg';
const cake2 = '../assets/Products/coffee-cake-2.jpeg';
const cake3 = '../assets/Products/coffee-cake-3.jpeg';
const cake4 = '../assets/Products/coffee-cake-4.jpeg';
const cake5 = '../assets/Products/coffee-cake-5.jpeg';
const cake6 = '../assets/Products/coffee-cake-6.jpeg';
const cake7 = '../assets/Products/coffee-cake-7.jpeg';
const cake8 = '../assets/Products/coffee-cake-8.jpeg';
const cake9 = '../assets/Products/coffee-cake-9.jpeg';
const cake10 = '../assets/Products/coffee-cake-10.jpeg';
const cake11 = '../assets/Products/coffee-cake-11.jpeg';
const cake12 = '../assets/Products/coffee-cake-12.jpeg';
const cake13 = '../assets/Products/coffee-cake-13.jpeg';
const cake14 = '../assets/Products/coffee-cake-14.jpeg';
const cake15 = '../assets/Products/coffee-cake-15.jpeg';
const cake16 = '../assets/Products/coffee-cake-16.jpeg';
const cake17 = '../assets/Products/coffee-cake-17.jpeg';
const cake18 = '../assets/Products/coffee-cake-18.jpeg';
const cake19 = '../assets/Products/coffee-cake-19.jpeg';
const cake20 = '../assets/Products/coffee-cake-20.jpeg';
const cake21 = '../assets/Products/coffee-cake-21.jpeg';
const cake22 = '../assets/Products/coffee-cake-22.jpeg';
const cake23 = '../assets/Products/coffee-cake-23.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { UNSALTED_BUTTER, CREAM_CHEESE, BROWN_SUGAR, WHITE_SUGAR, EGG, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, BAKING_POWDER, CORNSTARCH, SALT, BUTTERMILK, CINNAMON, POWDERED_SUGAR, MILK } = require('./ingredients');

const WET_CAKE_BATTER = 'Wet Cake Batter';
const DRY_CAKE_BATTER = 'Dry Cake Batter';
const CINNAMON_SWIRL_SECTION = 'Cinnamon Swirl';
const STREUSEL_SECTION = 'Streusel';
const GLAZE_SECTION = 'Glaze';

const MAKE_WET_BATTER = 'Make Wet Batter';
const MAKE_DRY_BATTER = 'Make Dry Batter';
const COMBINE_BATTERS = 'Combine Batters';
const MAKE_CINNAMON_SWIRL = 'Make Cinnamon Swirl';
const ASSEMBLE_CAKE = 'Assemble Cake';

const MAKE_STREUSEL_CRUMBLE = 'Make Streusel Crumble';
const MAKE_GLAZE = 'Make Glaze';
const BAKE_CAKE = 'Bake Cake';

module.exports = {
    cardName: 'Coffee Cake',
    name: 'Coffee Cake',
    img: cake22,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CAKE],
    yields: { amount: 24, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Coffee Cake', link: 'https://sugarspunrun.com/cinnamon-coffee-cake/' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_CAKE_BATTER },
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: WET_CAKE_BATTER },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_CAKE_BATTER },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_CAKE_BATTER },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: WET_CAKE_BATTER },
        { ...VANILLA_EXTRACT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_CAKE_BATTER },

        { ...ALL_PURPOSE_FLOUR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...BUTTERMILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_CAKE_BATTER },

        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CINNAMON_SWIRL_SECTION },
        { ...CINNAMON, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CINNAMON_SWIRL_SECTION },

        { ...UNSALTED_BUTTER, amount: 10, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted but cooled', section: STREUSEL_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 4 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: STREUSEL_SECTION },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: STREUSEL_SECTION },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: STREUSEL_SECTION },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: STREUSEL_SECTION },
        { ...CINNAMON, amount: 9 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: STREUSEL_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: STREUSEL_SECTION },

        { ...POWDERED_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GLAZE_SECTION },
        { ...MILK, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GLAZE_SECTION },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'cooking spray' },
        { name: 'mixing bowl' },
        { name: 'medium bowls' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: MAKE_WET_BATTER },
        { step: 'Spray a baking pan with a cooking spray.', section: MAKE_WET_BATTER },
        { step: 'In a stand mixer, cream together butter and cream cheese.', section: MAKE_WET_BATTER, img: [cake1, cake2] },
        { step: 'Mix in white and brown sugars until combined.', section: MAKE_WET_BATTER, img: [cake3, cake4] },
        { step: 'Beat in eggs, one at a time.', section: MAKE_WET_BATTER, img: cake5 },
        { step: 'Add vanilla. Mix.', section: MAKE_WET_BATTER, img: cake6 },

        { step: 'In another mixing bowl, combine the flour, baking powder, cornstarch and salt.', section: MAKE_DRY_BATTER, img: cake7 },

        { step: 'Measure out the buttermilk.', section: COMBINE_BATTERS },
        { step: 'Alternate adding ingredients to the wet batter: 1/3 dry, 1/2 buttermilk, 1/3 dry, 1/2 buttermilk, 1/3 dry.', section: COMBINE_BATTERS, img: [cake8, cake9] },

        { step: 'In a small bowl, combine together the cinnamon and sugar.', section: MAKE_CINNAMON_SWIRL },

        { step: 'In the greased baking pan, pour half of the batter.', section: ASSEMBLE_CAKE, img: cake10 },
        { step: 'Sprinkle the cinnamon swirl evenly over the batter.', section: ASSEMBLE_CAKE, img: cake11 },
        { step: 'Add the rest of the batter and carefully spread it evenly (avoid moving the cinnamon swirl).', section: ASSEMBLE_CAKE, img: cake12 },

        { step: 'In a medium bowl, melt butter in 10 second increments until melted. Let it cool completely once it has melted.', section: MAKE_STREUSEL_CRUMBLE, img: cake13 },
        { step: 'In a mixing bowl, combine the remaining "Streusel" ingredients (except the butter) with a fork.', section: MAKE_STREUSEL_CRUMBLE, img: [cake14, cake15] },
        { step: 'Once the butter has cooled, add the butter and gently combine. It should be crumbly.', section: MAKE_STREUSEL_CRUMBLE, img: cake16 },
        { step: 'Top the cake with the streusel crumble', section: MAKE_STREUSEL_CRUMBLE, img: cake17 },

        { step: 'Bake until an inserted toothpick comes out clean (about 40 to 50 minutes). Avoid overbaking.', section: BAKE_CAKE, img: cake18 },
        { step: 'Let it cool before cutting and serving it.', section: BAKE_CAKE },

        { step: 'In a medium bowl, whisk the powdered sugar and a little milk at a time.', section: MAKE_GLAZE, img: cake19 },

        { step: 'Drizzle the glaze over the coffee cake.', section: SECTIONS.SERVE, img: [cake20, cake21] },
        { step: 'Enjoy this delicious cake as a breakfast treat or dessert.', section: SECTIONS.SERVE, img: cake23 },

        { step: 'Store in an airtight container at room temperature up to 3 days.', section: SECTIONS.STORE },
    ],

    notes: [
        { note: 'Coffee cake is traditionally eaten with coffee and is not coffee flavored.' }
    ]
};