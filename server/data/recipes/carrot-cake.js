const two = '../assets/Products/carrot-cake-baked-two-layers.jpeg';
const three = '../assets/Products/carrot-cake-baked-three-layers.jpeg';
const bakedZoomed = '../assets/Products/carrot-cake-baked-zoomed.jpeg';
const batter = '../assets/Products/carrot-cake-batter.jpeg';
const brownSugar = '../assets/Products/carrot-cake-brown-sugar.jpeg';
const carrotBatter = '../assets/Products/carrot-cake-carrot-batter.jpeg';
const creamed = '../assets/Products/carrot-cake-creamed.jpeg';
const eggs = '../assets/Products/carrot-cake-eggs.jpeg';
const flour = '../assets/Products/carrot-cake-flour.jpeg';
const nonFlour = '../assets/Products/carrot-cake-non-flour-dry-ingredients.jpeg';
const pans = '../assets/Products/carrot-cake-pans.jpeg';
const topping = '../assets/Products/carrot-cake-topping.jpeg';
const walnuts = '../assets/Products/carrot-cake-walnuts.jpeg';
const side = '../assets/Products/carrot-cake-plated-side.jpeg';
const zoomed = '../assets/Products/carrot-cake-plated-zoomed.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { BROWN_SUGAR, CARROT, EGG, WHITE_SUGAR, VEGETABLE_OIL, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, CINNAMON, BAKING_SODA, SALT, BAKING_POWDER, CREAM_CHEESE, UNSALTED_BUTTER, POWDERED_SUGAR, WALNUTS, OVEN, MEDIUM_BOWL, MIXING_BOWL, CAKE_PAN, STAND_MIXER } = require('./ingredients');

const CARROT_MIXTURE = 'Carrot Mixture';
const CAKE = 'Cake';
const FROSTING = 'Frosting';
const ASSEMBLING = 'Assembling';

module.exports = {
    cardName: 'Carrot Cake',
    name: 'Carrot Cake',
    img: zoomed,
    recipeAuthors: ['Nan and Joanne Gallagher'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    yields: { amount: 16, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Carrot Cake', link: "https://www.allrecipes.com/recipe/17393/best-carrot-cake-ever/" },
        { label: 'Frosting', link: "https://www.inspiredtaste.net/25753/carrot-cake-recipe/" },
    ],
    separated: true,
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
        { step: 'In a medium bowl, mix together the grated carrots and brown sugar.', section: CARROT_MIXTURE, img: brownSugar },
        { step: 'Set aside for 1 hour.', section: CARROT_MIXTURE },
        { step: 'Preheat the oven to 350ºF.', section: CAKE },
        { step: 'Grease and flour the cake pans.', section: CAKE },
        { step: 'In a mixing bowl, beat eggs until light and fluffy.', section: CAKE, img: eggs },
        { step: 'Slowly beat in sugar, oil and vanilla.', section: CAKE },
        { step: 'Mix in cinnamon, baking soda, salt and flour one at a time.', section: CAKE, img: [nonFlour, flour, batter] },
        { step: 'Mix in the carrot mixture and walnuts.', section: CAKE, img: [carrotBatter, walnuts] },
        { step: 'Carefully pour the batter into the pans.', section: CAKE, img: [pans] },
        { step: 'Bake until a toothpick comes out clean (about 45 to 50 minutes).', section: CAKE, img: bakedZoomed },
        { step: 'Cool for 10 minutes before taking the cake out of the pan.', section: CAKE },
        { step: 'Cool completely before assembling and decorating the cake.', section: CAKE },
        { step: 'In a mixing bowl, combine together the softened cream cheese and butter.', section: FROSTING, img: creamed },
        { step: 'Add powdered sugar and vanilla and mix until well incorporated.', section: FROSTING, img: topping },
        { step: 'Spread the frosting on one layer of the cake and place the other layer on top.', section: ASSEMBLING, img: two },
        { step: 'Frost the top layer and sprinkle it with walnut, as desired.', section: ASSEMBLING, img: three },
        { step: 'Slice up the cake and enjoy this tasty rabbit food (just kidding don\'t feed this to rabbits).', section: SECTIONS.SERVE, img: side },
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