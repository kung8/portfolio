const cake1 = '../assets/Products/carrot-cake-1.jpeg';
const cake2 = '../assets/Products/carrot-cake-2.jpeg';
const cake3 = '../assets/Products/carrot-cake-3.jpeg';
const cake4 = '../assets/Products/carrot-cake-4.jpeg';
const cake5 = '../assets/Products/carrot-cake-5.jpeg';
const cake6 = '../assets/Products/carrot-cake-6.jpeg';
const cake7 = '../assets/Products/carrot-cake-7.jpeg';
const cake8 = '../assets/Products/carrot-cake-8.jpeg';
const cake9 = '../assets/Products/carrot-cake-9.jpeg';
const cake10 = '../assets/Products/carrot-cake-10.jpeg';
const cake11 = '../assets/Products/carrot-cake-11.jpeg';
const cake12 = '../assets/Products/carrot-cake-12.jpeg';
const cake13 = '../assets/Products/carrot-cake-13.jpeg';
const cake14 = '../assets/Products/carrot-cake-14.jpeg';
const cake15 = '../assets/Products/carrot-cake-15.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SODA, BROWN_SUGAR, CAKE_PAN, CARROT, CINNAMON, CREAM_CHEESE, EGG, MEDIUM_BOWL, MIXING_BOWL, OVEN, POWDERED_SUGAR, SALT, STAND_MIXER, UNSALTED_BUTTER, VANILLA_EXTRACT, VEGETABLE_OIL, WALNUTS, WHITE_SUGAR } = require('./ingredients');

const CARROT_MIXTURE = 'Carrot Mixture';
const CAKE = 'Cake';
const FROSTING = 'Frosting';
const ASSEMBLING = 'Assembling';

module.exports = {
    cardName: 'Carrot Cake',
    name: 'Carrot Cake',
    img: cake15,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.TREE_NUT, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 16, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Carrot Cake', 
            link: "https://www.allrecipes.com/recipe/17393/best-carrot-cake-ever/",
            authors: ['Nan'],
            finder: 'Kevin Ung', 
        },
        { 
            label: 'Frosting', 
            link: "https://www.inspiredtaste.net/25753/carrot-cake-recipe/",
            authors: ['Joanne Gallagher'],
            finder: 'Kevin Ung', 
        },
    ],
    ingredients: [
        { ...CARROT, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'freshly grated', section: CARROT_MIXTURE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CARROT_MIXTURE },
        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: CAKE },
        { ...WHITE_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CAKE },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CAKE },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAKE },
        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CAKE },
        { ...CINNAMON, amount: 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAKE },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAKE },
        { ...BAKING_SODA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAKE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAKE },
        { ...WALNUTS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CAKE },
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: FROSTING },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: FROSTING },
        { ...POWDERED_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FROSTING },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FROSTING },
        { ...WALNUTS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ASSEMBLING },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        MEDIUM_BOWL,
        { ...MIXING_BOWL, amount: 2, unit: '' },
        { ...CAKE_PAN, amount: 2, additionalDetails: '10 inch' },
    ],
    directions: [
        { step: 'In a medium bowl, mix together the grated carrots and brown sugar.', section: CARROT_MIXTURE, img: cake1 },
        { step: 'Set aside for 1 hour.', section: CARROT_MIXTURE },
        { step: 'Preheat the oven to 350ºF.', section: CAKE },
        { step: 'Grease and flour the cake pans.', section: CAKE },
        { step: 'In a mixing bowl, beat eggs until light and fluffy.', section: CAKE, img: cake2 },
        { step: 'Slowly beat in sugar, oil and vanilla.', section: CAKE },
        { step: 'Mix in cinnamon, baking soda, salt and flour one at a time.', section: CAKE, img: [cake3, cake4, cake5] },
        { step: 'Mix in the carrot mixture and walnuts.', section: CAKE, img: [cake6, cake7] },
        { step: 'Carefully pour the batter into the pans.', section: CAKE, img: cake8 },
        { step: 'Bake until a toothpick comes out clean (about 45 to 50 minutes).', section: CAKE, img: cake9 },
        { step: 'Cool for 10 minutes before taking the cake out of the pan.', section: CAKE },
        { step: 'Cool completely before assembling and decorating the cake.', section: CAKE },
        { step: 'In a mixing bowl, combine together the softened cream cheese and butter.', section: FROSTING, img: cake10 },
        { step: 'Add powdered sugar and vanilla and mix until well incorporated.', section: FROSTING, img: cake11 },
        { step: 'Spread the frosting on one layer of the cake and place the other layer on top.', section: ASSEMBLING, img: cake12 },
        { step: 'Frost the top layer and sprinkle it with walnut, as desired.', section: ASSEMBLING, img: cake13 },
        { step: 'Slice up the cake and enjoy this tasty rabbit food (just kidding don\'t feed this to rabbits).', section: SECTIONS.SERVE, img: cake14 },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};