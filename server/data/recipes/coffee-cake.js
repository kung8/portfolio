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

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BAKING_POWDER, BROWN_SUGAR, BUTTERMILK, CINNAMON, COOKING_SPRAY, CORNSTARCH, CREAM_CHEESE, EGG, MEDIUM_BOWL, MILK, MIXING_BOWL, OVEN, POWDERED_SUGAR, SALT, SMALL_BOWL, STAND_MIXER, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const CINNAMON_SWIRL_SECTION = 'Cinnamon Swirl';
const STREUSEL_SECTION = 'Streusel';
const GLAZE_SECTION = 'Glaze';

const COMBINE_BATTERS = 'Combine Batters';
const MAKE_CINNAMON_SWIRL = 'Make Cinnamon Swirl';
const MAKE_STREUSEL_CRUMBLE = 'Make Streusel Crumble';
const MAKE_GLAZE = 'Make Glaze';

module.exports = {
    cardName: 'Coffee Cake',
    name: 'Coffee Cake',
    img: cake22,
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
        {
            label: 'Coffee Cake',
            link: 'https://sugarspunrun.com/cinnamon-coffee-cake/',
            authors: ['Sam Merritt'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },

        { ...ALL_PURPOSE_FLOUR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        
        { ...BUTTERMILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

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
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        BAKING_PAN,
        COOKING_SPRAY,
        MIXING_BOWL,
        MEDIUM_BOWL,
        SMALL_BOWL,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Spray a baking pan with a cooking spray.`, section: SECTIONS.PREP_WET_INGREDIENTS },
        { step: `In a stand mixer, cream together butter and cream cheese.`, section: SECTIONS.PREP_WET_INGREDIENTS, img: [cake1, cake2] },
        { step: `Mix in white and brown sugars until combined.`, section: SECTIONS.PREP_WET_INGREDIENTS, img: [cake3, cake4] },
        { step: `Beat in eggs, one at a time.`, section: SECTIONS.PREP_WET_INGREDIENTS, img: cake5 },
        { step: `Add vanilla. Mix.`, section: SECTIONS.PREP_WET_INGREDIENTS, img: cake6 },

        { step: `In another mixing bowl, combine the flour, baking powder, cornstarch and salt.`, section: SECTIONS.PREP_DRY_INGREDIENTS, img: cake7 },

        { step: `Measure out the buttermilk.`, section: COMBINE_BATTERS },
        { step: `Alternate adding ingredients to the wet batter: 1/3 dry, 1/2 buttermilk, 1/3 dry, 1/2 buttermilk, 1/3 dry.`, section: COMBINE_BATTERS, img: [cake8, cake9] },

        { step: `In a small bowl, mix the cinnamon and sugar.`, section: MAKE_CINNAMON_SWIRL },

        { step: `In the greased baking pan, pour half of the batter.`, section: SECTIONS.ASSEMBLE, img: cake10 },
        { step: `Sprinkle the cinnamon swirl evenly over the batter.`, section: SECTIONS.ASSEMBLE, img: cake11 },
        { step: `Add the rest of the batter and carefully spread it evenly (avoid moving the cinnamon swirl).`, section: SECTIONS.ASSEMBLE, img: cake12 },

        { step: `In a medium bowl, melt butter in 10 second increments until melted. Let it cool completely once it has melted.`, section: MAKE_STREUSEL_CRUMBLE, img: cake13 },
        { step: `In a mixing bowl, combine the remaining "Streusel" ingredients (except the butter) with a fork.`, section: MAKE_STREUSEL_CRUMBLE, img: [cake14, cake15] },
        { step: `Once the butter has cooled, add the butter and gently combine. It should be crumbly.`, section: MAKE_STREUSEL_CRUMBLE, img: cake16 },
        { step: `Top the cake with the streusel crumble`, section: MAKE_STREUSEL_CRUMBLE, img: cake17 },

        { step: `Bake until an inserted toothpick comes out clean (about 40 to 50 minutes). Avoid overbaking.`, section: SECTIONS.BAKE, img: cake18 },
        { step: `Let it cool before cutting and serving it.`, section: SECTIONS.BAKE },

        { step: `In a medium bowl, whisk the powdered sugar and a little milk at a time.`, section: MAKE_GLAZE, img: cake19 },

        { step: `Drizzle the glaze over the coffee cake.`, section: SECTIONS.SERVE, img: [cake20, cake21] },
        { step: `Enjoy this delicious cake as a breakfast treat or dessert.`, section: SECTIONS.SERVE, img: cake23 },
    ],

    notes: [
        { note: 'Coffee cake is traditionally eaten with coffee and is not coffee flavored.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};