const rawIngredients = '../assets/Products/cheesecake-raw-cheesecake-ingredients.jpeg';
const baked = '../assets/Products/cheesecake-baked-cheesecake.jpeg';
const slice = '../assets/Products/cheesecake-slice.jpeg';
const glaze = '../assets/Products/cheesecake-glazed-strawberries.jpeg';
const crustMixed = '../assets/Products/cheesecake-crust-mixed.jpeg';
const crustRaw = '../assets/Products/cheesecake-crust-raw.jpeg';
const crust = '../assets/Products/cheesecake-crust.jpeg';
const fillingCombined = '../assets/Products/cheesecake-filling-combined.jpeg';
const filling = '../assets/Products/cheesecake-filling-added.jpeg';
const beforeCreaming = '../assets/Products/cheesecake-filling-before-creaming.jpeg';
const creamed = '../assets/Products/cheesecake-filling-creamed.jpeg';
const hulled = '../assets/Products/cheesecake-hulled-strawberries.jpeg';
// const crummies = '../assets/Products/cheesecake-in-cake-holder-with-crummies.jpeg';
const cakeHolder = '../assets/Products/cheesecake-in-cake-holder.jpeg';
const roastingPan = '../assets/Products/cheesecake-in-roasting-pan.jpeg';
const coolingRack = '../assets/Products/cheesecake-on-cooling-rack.jpeg';
const strawberriesInPan = '../assets/Products/cheesecake-strawberries-in-pan.jpeg';
// const toppingsInPan = '../assets/Products/cheesecake-strawberry-toppings-in-pan.jpeg';
const wholeGlazed = '../assets/Products/cheesecake-whole-glazed-strawberry.jpeg';
const zoomed = '../assets/Products/cheesecake-zoomed-in.jpeg';
// const aerial = '../assets/Products/cheesecake-aerial.jpeg';
// const zoomed = '../assets/Products/cheesecake-zoomed.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, TYPES } = require("./constants");

module.exports = {
    cardName: 'C.F. Cheesecake',
    name: 'Cheesecake Factory Cheesecake',
    img: cakeHolder,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '8 servings',
    prepTime: '45 m',
    cookTime: '2 h',
    separated: true,
    websites: [
        'https://www.delish.com/cooking/recipe-ideas/a37762621/cheesecake-factory-original-cheesecake-copycat-recipe/'
    ],
    ingredients: [
        { name: 'cooking spray', amount: '', additionalDetails: '', optional: false, section: SECTIONS.CRUST },
        { name: 'graham crackers', amount: '14.4 oz', additionalDetails: 'finely crushed', optional: false, section: SECTIONS.CRUST },
        { name: 'sugar', amount: '6 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.CRUST },
        { name: 'butter', amount: '12 Tbsp', additionalDetails: 'melted', optional: false, section: SECTIONS.CRUST },
        { name: 'cream cheese', amount: '32 oz', additionalDetails: 'softened', optional: false, section: SECTIONS.FILLING },
        { name: 'sugar', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'large egg', amount: '4', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'vanilla extract', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'sour cream', amount: '8 oz', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'all-purpose flour', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.FILLING },
        { name: 'strawberries', amount: '1 lb', additionalDetails: 'halved', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'cornstarch', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'warm water', amount: '1/4 c', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'sugar', amount: '1/4 c', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'lemon', amount: '1', additionalDetails: 'juiced', optional: false, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'stand mixer and bowl' },
        { name: 'cake spring form pan' },
        { name: 'roasting pan' },
        { name: 'aluminum foil' },
        { name: 'refrigerator' },
        { name: 'sauce pan' },
        { name: 'plastic wrap' },
    ],
    directions: [
        { step: 'Grease cake pan with cooking spray.', type: SECTIONS.CRUST, img: rawIngredients },
        { step: 'Cover the bottom of the cake pan with the aluminum foil (to prevent it from soaking in water).', type: SECTIONS.CRUST },
        { step: 'In the stand mixer bowl, combine graham cracker, sugar and butter until well incorporated.', type: SECTIONS.CRUST, img: crustRaw },
        { step: 'Press crust mixture into the pan\'s bottom and up the sides.', type: SECTIONS.CRUST, img: crust },
        { step: 'In the stand mixer bowl, beat cream cheese and sugar at medium speed until smooth and fluffy (about 2 to 3 minutes).', type: SECTIONS.FILLING, img: beforeCreaming },
        { step: 'Add eggs one at a time and beat well.', type: SECTIONS.FILLING },
        { step: 'Add vanilla, sour cream, flour, and salt and continue to beat until all is combined.', type: SECTIONS.FILLING, img: fillingCombined },
        { step: 'Preheat oven to 325ºF.', type: SECTIONS.MAIN },
        { step: 'Pour filling into the crust.', type: SECTIONS.MAIN, img: filling },
        { step: 'Place the cake pan in the roasting pan and fill the roasting pan with water (about halfway up the cake pan).', type: SECTIONS.MAIN, img: roastingPan },
        { step: 'Place the roasting pan carefully in the oven and bake until just slightly jiggly, or until the center registers 145ºF (about 1 hour 30 minutes)', type: SECTIONS.MAIN },
        // { step: 'Turn oven off, leave door open, and let cool for 1 hour.', type: SECTIONS.MAIN, img: bath },
        { step: 'Remove from the oven, transfer to a cooling rack and carefully remove the tin foil.', type: SECTIONS.MAIN, img: coolingRack },
        { step: 'Move cheesecake into the fridge and chill for about 5 hours to overnight.', type: SECTIONS.MAIN, img: baked },
        { step: 'In a small bowl, whisk cornstarch and water until combined.', type: SECTIONS.TOPPINGS },
        { step: 'In a saucepan, add strawberries, sugar, lemon juice, and cornstarch mixture.', type: SECTIONS.TOPPINGS, img: hulled },
        { step: 'Bring mixture to a simmer over medium heat.', type: SECTIONS.TOPPINGS, img: strawberriesInPan },
        { step: 'Cook until the sauce thickens to a syrupy texture and strawberries are coated.', type: SECTIONS.TOPPINGS, img: wholeGlazed },
        { step: 'Transfer to bowl. Let cool and cover with plastic wrap.', type: SECTIONS.TOPPINGS, img: glaze },
        { step: 'Place in fridge to cool until ready to serve.', type: SECTIONS.TOPPINGS },
        { step: 'Enjoy this decadent, rich "Cheesecake Factory" imitation by topping each slice with the glazed strawberries and whipped cream.', type: SECTIONS.SERVE, img: slice },
    ]
};