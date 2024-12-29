const two = '../assets/Products/carrot-cake-baked-two-layers.jpeg';
const three = '../assets/Products/carrot-cake-baked-three-layers.jpeg';
const bakedZoomed = '../assets/Products/carrot-cake-baked-zoomed.jpeg';
const baked = '../assets/Products/carrot-cake-baked.jpeg';
const batter = '../assets/Products/carrot-cake-batter.jpeg';
const brownSugar = '../assets/Products/carrot-cake-brown-sugar.jpeg';
const carrotBatter = '../assets/Products/carrot-cake-carrot-batter.jpeg';
const creamed = '../assets/Products/carrot-cake-creamed.jpeg';
const eggs = '../assets/Products/carrot-cake-eggs.jpeg';
const flour = '../assets/Products/carrot-cake-flour.jpeg';
const grated = '../assets/Products/carrot-cake-grated-carrots.jpeg';
const nonFlour = '../assets/Products/carrot-cake-non-flour-dry-ingredients.jpeg';
const pans = '../assets/Products/carrot-cake-pans.jpeg';
const softened = '../assets/Products/carrot-cake-softened.jpeg';
const topping = '../assets/Products/carrot-cake-topping.jpeg';
const walnuts = '../assets/Products/carrot-cake-walnuts.jpeg';
const side = '../assets/Products/carrot-cake-plated-side.jpeg';
const flat = '../assets/Products/carrot-cake-plated-sliced-flat.jpeg';
const plated = '../assets/Products/carrot-cake-plated.jpeg';
const zoomed = '../assets/Products/carrot-cake-plated-zoomed.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { BROWN_SUGAR, CARROTS, EGGS, WHITE_SUGAR, VEGETABLE_OIL, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, CINNAMON, BAKING_SODA, SALT, BAKING_POWDER, CREAM_CHEESE, UNSALTED_BUTTER, POWDERED_SUGAR, WALNUTS } = require('./ingredients');

const CARROT_MIXTURE = 'Carrot Mixture';
const CAKE = 'Cake';
const FROSTING = 'Frosting';
const ASSEMBLING = 'Assembling';

module.exports = {
    cardName: 'Carrot Cake',
    name: 'Carrot Cake',
    img: zoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    yields: '16 servings',
    prepTime: '20 m',
    cookTime: '50 m',
    websites: [
        { label: 'Carrot Cake', link: "https://www.allrecipes.com/recipe/17393/best-carrot-cake-ever/" },
        { label: 'Frosting', link: "https://www.inspiredtaste.net/25753/carrot-cake-recipe/" },
    ],
    separated: true,
    ingredients: [
        { ...CARROTS, amount: '6 c', additionalDetails: 'freshly grated', section: CARROT_MIXTURE },
        { ...BROWN_SUGAR, amount: '1 c', additionalDetails: '', section: CARROT_MIXTURE },
        { ...EGGS, amount: '4', additionalDetails: '', section: CAKE },
        { ...WHITE_SUGAR, amount: '1 1/2 c', additionalDetails: '', section: CAKE },
        { ...VEGETABLE_OIL, amount: '1 c', additionalDetails: '', section: CAKE },
        { ...VANILLA_EXTRACT, amount: '2 tsp', additionalDetails: '', section: CAKE },
        { ...ALL_PURPOSE_FLOUR, amount: '3 c', additionalDetails: '', section: CAKE },
        { ...CINNAMON, amount: '4 tsp', additionalDetails: '', section: CAKE },
        { ...BAKING_POWDER, amount: '2 tsp', additionalDetails: '', section: CAKE },
        { ...BAKING_SODA, amount: '2 tsp', additionalDetails: '', section: CAKE },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: CAKE },
        { ...WALNUTS, amount: '1 c', additionalDetails: '', section: CAKE },
        { ...CREAM_CHEESE, amount: '8 oz', additionalDetails: 'softened', section: FROSTING },
        { ...UNSALTED_BUTTER, amount: '1/4 c', additionalDetails: 'softened', section: FROSTING },
        { ...POWDERED_SUGAR, amount: '1 c', additionalDetails: '', section: FROSTING },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: FROSTING },
        { ...WALNUTS, amount: '1/2 c', additionalDetails: '', section: ASSEMBLING },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: '1 medium bowl' },
        { name: '2 mixing bowls' },
        { name: '2 10-inch cake pans' },
        { name: 'mixer' },
    ],
    directions: [
        { step: 'In a medium bowl, mix together the grated carrots and brown sugar.', type: CARROT_MIXTURE, img: [grated, brownSugar] },
        { step: 'Set aside for 1 hour.', type: CARROT_MIXTURE },
        { step: 'Preheat the oven to 350ºF.', type: CAKE },
        { step: 'Grease and flour the cake pans.', type: CAKE },
        { step: 'In a mixing bowl, beat eggs until light and fluffy.', type: CAKE, img: eggs },
        { step: 'Slowly beat in sugar, oil and vanilla.', type: CAKE },
        { step: 'Mix in cinnamon, baking soda, salt and flour one at a time.', type: CAKE, img: [nonFlour, flour, batter] },
        { step: 'Mix in the carrot mixture and walnuts.', type: CAKE, img: [carrotBatter, walnuts] },
        { step: 'Carefully pour the batter into the pans.', type: CAKE, img: [pans] },
        { step: 'Bake until a toothpick comes out clean (about 45 to 50 minutes).', type: CAKE, img: [baked, bakedZoomed] },
        { step: 'Cool for 10 minutes before taking the cake out of the pan.', type: CAKE },
        { step: 'Cool completely before assembling and decorating the cake.', type: CAKE },
        { step: 'In a mixing bowl, combine together the softened cream cheese and butter.', type: FROSTING, img: [softened, creamed] },
        { step: 'Add powdered sugar and vanilla and mix until well incorporated.', type: FROSTING, img: topping },
        { step: 'Spread the frosting on one layer of the cake and place the other layer on top.', type: ASSEMBLING, img: [two] },
        { step: 'Frost the top layer and sprinkle it with walnut, as desired.', type: ASSEMBLING, img: [three] },
        { step: 'Slice up the cake and enjoy this tasty rabbit food (just kidding don\'t feed this to rabbits).', type: SECTIONS.SERVE, img: [plated, side, flat] },
    ]
};