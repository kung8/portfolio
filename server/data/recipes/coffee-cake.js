// const cake1 = '../assets/Products/coffee-cake-1.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { UNSALTED_BUTTER, CREAM_CHEESE, BROWN_SUGAR, WHITE_SUGAR, EGGS, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, BAKING_POWDER, CORNSTARCH, SALT, BUTTERMILK, CINNAMON, POWDERED_SUGAR, MILK } = require('./ingredients');

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
    wip: true,
    cardName: 'Coffee Cake',
    name: 'Coffee Cake',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CAKE],
    yields: '24 servings',
    prepTime: '30 m',
    cookTime: '40 m',
    websites: [
        { label: 'Coffee Cake', link: 'https://sugarspunrun.com/cinnamon-coffee-cake/' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: '', section: WET_CAKE_BATTER },
        { ...CREAM_CHEESE, amount: '8 oz', additionalDetails: '', section: WET_CAKE_BATTER },
        { ...BROWN_SUGAR, amount: '1 c', additionalDetails: '', section: WET_CAKE_BATTER },
        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: WET_CAKE_BATTER },
        { ...EGGS, amount: '2', additionalDetails: '', section: WET_CAKE_BATTER },
        { ...VANILLA_EXTRACT, amount: '1 1/2 tsp', additionalDetails: '', section: WET_CAKE_BATTER },

        { ...ALL_PURPOSE_FLOUR, amount: '2 1/2 c', additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...BAKING_POWDER, amount: '2 tsp', additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...CORNSTARCH, amount: '1 tsp', additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: DRY_CAKE_BATTER },
        { ...BUTTERMILK, amount: '1/2 c', additionalDetails: '', section: DRY_CAKE_BATTER },

        { ...WHITE_SUGAR, amount: '1/4 c', additionalDetails: '', section: CINNAMON_SWIRL_SECTION },
        { ...CINNAMON, amount: '1 1/2 tsp', additionalDetails: '', section: CINNAMON_SWIRL_SECTION },

        { ...UNSALTED_BUTTER, amount: '10 Tbsp', additionalDetails: 'melted but cooled', section: STREUSEL_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: '1 1/3 c', additionalDetails: '', section: STREUSEL_SECTION },
        { ...BROWN_SUGAR, amount: '1 c + 2 Tbsp', additionalDetails: '', section: STREUSEL_SECTION },
        { ...WHITE_SUGAR, amount: '3 Tbsp', additionalDetails: '', section: STREUSEL_SECTION },
        { ...CINNAMON, amount: '4 1/2 tsp', additionalDetails: '', section: STREUSEL_SECTION },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: STREUSEL_SECTION },

        { ...POWDERED_SUGAR, amount: '1/2 c', additionalDetails: '', section: GLAZE_SECTION },
        { ...MILK, amount: '2 - 3 tsp', additionalDetails: '', section: GLAZE_SECTION },
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
        { step: 'Preheat the oven to 350ºF.', type: MAKE_WET_BATTER },
        { step: 'Spray a baking pan with a cooking spray.', type: MAKE_WET_BATTER },
        { step: 'In a stand mixer, cream together butter and cream cheese.', type: MAKE_WET_BATTER },
        { step: 'Mix in white and brown sugars until combined.', type: MAKE_WET_BATTER },
        { step: 'Beat in eggs, one at a time.', type: MAKE_WET_BATTER },
        { step: 'Add vanilla. Mix.', type: MAKE_WET_BATTER },

        { step: 'In another mixing bowl, combine the flour, baking powder, cornstarch and salt.', type: MAKE_DRY_BATTER },

        { step: 'Measure out the buttermilk.', type: COMBINE_BATTERS },
        { step: 'Alternate adding ingredients to the wet batter: 1/3 dry, 1/2 buttermilk, 1/3 dry, 1/2 buttermilk, 1/3 dry.', type: COMBINE_BATTERS },

        { step: 'In a small bowl, combine together the cinnamon and sugar.', type: MAKE_CINNAMON_SWIRL },

        { step: 'In the greased baking pan, pour half of the batter.', type: ASSEMBLE_CAKE },
        { step: 'Sprinkle the cinnamon swirl evenly over the batter.', type: ASSEMBLE_CAKE },
        { step: 'Add the rest of the batter and carefully spread it evenly (avoid moving the cinnamon swirl).', type: ASSEMBLE_CAKE },

        { step: 'In a medium bowl, melt butter in 10 second increments until melted. Let it cool completely once it has melted.', type: MAKE_STREUSEL_CRUMBLE },
        { step: 'In a mixing bowl, combine the remaining "Streusel" ingredients (except the butter) with a fork.', type: MAKE_STREUSEL_CRUMBLE },
        { step: 'Once the butter has cooled, add the butter and gently combine. It should be crumbly.', type: MAKE_STREUSEL_CRUMBLE },
        { step: 'Top the cake with the streusel crumble', type: MAKE_STREUSEL_CRUMBLE },

        { step: 'Bake until an inserted toothpick comes out clean (about 40 to 50 minutes). Avoid overbaking.', type: BAKE_CAKE },
        { step: 'Let it cool before cutting and serving it.', type: BAKE_CAKE },

        { step: 'In a medium bowl, whisk the powdered sugar and a little milk at a time.', type: MAKE_GLAZE },
        
        { step: 'Drizzle the glaze over the coffee cake.', type: SECTIONS.SERVE },
        { step: 'Enjoy this delicious cake as a breakfast treat or dessert.', type: SECTIONS.SERVE },

        { step: 'Store in an airtight container at room temperature up to 3 days.', type: SECTIONS.STORE },
    ],

    notes: [
        { note: 'Coffee cake is traditionally eaten with coffee and is not coffee flavored.'}
    ]
};