const rawIngredients = '../assets/Products/raw-cheesecake-ingredients.jpeg';
const raw = '../assets/Products/raw-cheesecake.jpeg';
const bath = '../assets/Products/baked-cheesecake-in-bath.jpeg';
const baked = '../assets/Products/baked-cheesecake.jpeg';
const slice = '../assets/Products/cheesecake-slice.jpeg';
const glaze = '../assets/Products/glazed-strawberries.jpeg';
const aerial = '../assets/Products/aerial-cheesecake.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Cheesecake',
    name: 'Cheesecake Factory Cheesecake',
    img: aerial,
    available: true,
    type: [CATEGORIES.DESSERT],
    yields: '8 servings',
    prepTime: '45 m',
    cookTime: '2 h',
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
        { name: 'strawberries', amount: '1 lb', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'cornstarch', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'warm water', amount: '1/4 c', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'sugar', amount: '1/4 c', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'lemon', amount: '1', additionalDetails: 'juiced', optional: false, section: SECTIONS.TOPPINGS },
    ],
    supplies: [
        { name: 'oven' },
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
        { step: 'In the stand mixer bowl, combine graham cracker, sugar and butter until well incorporated.', type: SECTIONS.CRUST },
        { step: 'Press crust mixture into the pan\'s bottom and up the sides.', type: SECTIONS.CRUST },
        { step: 'In the stand mixer bowl, beat cream cheese and sugar at medium speed until smooth and fluffy (about 2 to 3 minutes).', type: SECTIONS.FILLING },
        { step: 'Add eggs one at a time and beat well.', type: SECTIONS.FILLING },
        { step: 'Add vanilla, sour cream, flour, and salt and continue to beat until all is combined.', type: SECTIONS.FILLING },
        { step: 'Preheat oven to 325ºF.', type: SECTIONS.MAIN },
        { step: 'Pour filling into the crust.', type: SECTIONS.MAIN },
        { step: 'Place the cake pan in the roasting pan.', type: SECTIONS.MAIN },
        { step: 'Fill the roasting pan with water (about halfway up the cake pan).', type: SECTIONS.MAIN, img: raw },
        { step: 'Place the roasting pan carefully in the oven and bake until just slightly jiggly, or until the center registers 145ºF (about 1 hour 30 minutes)', type: SECTIONS.MAIN },
        { step: 'Turn oven off, leave door open, and let cool for 1 hour.', type: SECTIONS.MAIN, img: bath },
        { step: 'Move cheesecake into the fridge and chill for about 5 hours to overnight.', type: SECTIONS.MAIN, img: baked },
        { step: 'In a small bowl, whisk cornstarch and water until combined.', type: SECTIONS.TOPPINGS },
        { step: 'In a saucepan, add strawberries, sugar, lemon juice, and cornstarch mixture.', type: SECTIONS.TOPPINGS },
        { step: 'Bring mixture to a simmer over medium heat.', type: SECTIONS.TOPPINGS },
        { step: 'Cook until the sauce thickens to a syrupy texture and strawberries are coated.', type: SECTIONS.TOPPINGS },
        { step: 'Transfer to bowl. Let cool and cover with plastic wrap.', type: SECTIONS.TOPPINGS, img: glaze },
        { step: 'Place in fridge to cool until ready to serve.', type: SECTIONS.TOPPINGS },
        { step: 'Enjoy this decadent, rich "Cheesecake Factory" imitation by topping each slice with the glazed strawberries and whipped cream.', type: SECTIONS.SERVE, img: slice },
    ]
};