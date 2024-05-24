const pizza = '../assets/Products/pizza-2.jpeg';
const pizzaDough = '../assets/Products/pizza-dough.jpeg';
const oil = '../assets/Products/pizza-oil-bowl.jpeg';
const oilDough = '../assets/Products/pizza-oil-dough-ball.jpeg';
const plastic = '../assets/Products/pizza-plastic-wrap.jpeg';
const ball = '../assets/Products/pizza-dough-ball.jpeg';
const frozenDough = '../assets/Products/frozen-pizza-dough.jpeg';
const refrigeratedDough = '../assets/Products/refrigerated-pizza-dough.jpeg';
const pizzaSpread = '../assets/Products/pizza-spread.jpeg';
const tossing = '../assets/Products/pizza-toss.MOV';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Homemade Pizza',
    name: 'Homemade Pizza',
    img: pizza,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    yields: '6 - 8 servings',
    prepTime: '45 m',
    cookTime: '25 m',
    separated: true,
    ingredients: [
        { name: 'bread flour', amount: '4 1/2 c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'salt', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'instant dry yeast', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'honey', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'water', amount: '2 c', additionalDetails: 'room-temperature', optional: false, section: SECTIONS.DOUGH },
        { name: 'olive oil', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'pizza sauce', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'shredded cheese', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'crisping pepperoni', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'cooked sausage', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'spinach', amount: '', additionalDetails: 'sliced or diced', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'red onion', amount: '', additionalDetails: 'sliced or diced', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'mushroom', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'olive', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'bell pepper', amount: '', additionalDetails: 'sliced or diced', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'ham', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'pineapple', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'ranch', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'bbq sauce', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'cooked chicken', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
        { name: 'cooked bacon', amount: '', additionalDetails: '', optional: true, section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'clean counter' },
        { name: 'large bowl' },
        { name: 'rolling pin' },
        { name: 'plastic wrap or cooking towel' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'On a clean counter, combine flour, salt, and yeast by hand. We are making focaccia bread.', type: SECTIONS.DOUGH },
        { step: 'Form a well in the center of the mixture and slowly add water and honey.', type: SECTIONS.DOUGH },
        { step: 'Continue to work the liquid into the entire mixture until the dough becomes only a little sticky.', type: SECTIONS.DOUGH, img: ball },
        { step: 'Coat the inside of a large bowl with some oil.', type: SECTIONS.DOUGH, img: oil },
        { step: 'Place the dough inside that oiled bowl and cover with plastic wrap or a cooking towel and refrigerate between 48 to 72 hours. This allows the dough to rise and adds flavor.', type: SECTIONS.DOUGH, img: oilDough },
        { step: 'When you are ready to make the pizza, preheat the oven too 450ºF.', type: SECTIONS.DOUGH },
        { step: 'Grease a baking sheet with 1 Tablespoon olive oil.', type: SECTIONS.DOUGH },
        { step: 'This is the fun part where you will work the dough. Again on a clean counter sprinkle some flour (and you may need to add some more later so keep that flour handy).', type: SECTIONS.DOUGH },
        { step: 'Depending on how much the dough rose you might be able to make 2 to 3 pizzas. Note that the dough will rise slightly more as it returns to room temperature. Cut the dough to that number of desired pizzas and re-ball each of the dough parts and set aside.', type: SECTIONS.DOUGH, img: pizzaDough },
        { step: 'Place one of dough balls on the floured counter. And begin kneading and pulling and stretching the dough. Continue until the dough has become less sticky. Add more flour conservatively. If you have added too much flour, you can add more water but try to avoid doing that.', type: SECTIONS.DOUGH },
        { step: 'Tossing the dough helps form the crust and gives the dough texture and flavor. Flatten the dough using a rolling pin until it\'s about 8 inches wide and you will place your closed fists beneath it (at about 10-and-2 steering wheel position). The tricky part is to avoid tearing the dough by making it too thin and accidentally ripping the dough with your fingers. So tuck those fingers in and use just your knuckles.', type: SECTIONS.DOUGH },
        { step: 'Pull your fists apart to pull the dough edges and try to get all around. Then with a quick flick of the wrists throw the dough directly up in the air and catch the dough with your closed fists.', type: SECTIONS.DOUGH, video: tossing },
        { step: 'Keep doing this until you are satisfied with the pizza size and thickness.', type: SECTIONS.DOUGH },
        { step: 'Place the shaped dough on the pan and add your favorite toppings.', type: SECTIONS.MAIN },
        { step: 'Bake the pizza for 20 to 25 minutes or until a nice golden brown.', type: SECTIONS.MAIN },
        { step: 'Enjoy these slices of heaven with friends and family.', type: SECTIONS.MAIN, img: pizzaSpread },
        { step: 'If you have any leftover dough that you aren\'t ready to use, you can freeze it and make pizzas, breadsticks, or cheeseballs.', type: SECTIONS.MAIN, img: frozenDough}
    ]
};