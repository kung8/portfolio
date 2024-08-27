const pizza = '../assets/Products/pizza-2.jpeg';
const pizzaDough = '../assets/Products/pizza-dough.jpeg';
const oil = '../assets/Products/pizza-oil-bowl.jpeg';
const oilDough = '../assets/Products/pizza-oil-dough-ball.jpeg';
// const plastic = '../assets/Products/pizza-plastic-wrap.jpeg';
const ball = '../assets/Products/pizza-dough-ball.jpeg';
const frozenDough = '../assets/Products/frozen-pizza-dough.jpeg';
// const refrigeratedDough = '../assets/Products/refrigerated-pizza-dough.jpeg';
const pizzaSpread = '../assets/Products/pizza-spread.jpeg';
const tossing = '../assets/Products/pizza-toss.MOV';
const butter = '../assets/Products/philly-cheesesteak-pizza-butter.jpeg';
const cookedSteak = '../assets/Products/philly-cheesesteak-pizza-cooked-steak.jpeg';
const zoomed = '../assets/Products/philly-cheesesteak-pizza-cooked-zoomed.jpeg';
const zoomed1 = '../assets/Products/philly-cheesesteak-pizza-cooked-zoomed-1.jpeg';
const phillyCooked = '../assets/Products/philly-cheesesteak-pizza-cooked.jpeg';
const flour = '../assets/Products/philly-cheesesteak-pizza-flour.jpeg';
const garlicMilk = '../assets/Products/philly-cheesesteak-pizza-milk-and-garlic.jpeg';
const oilSteak = '../assets/Products/philly-cheesesteak-pizza-oil.jpeg';
const parmesan = '../assets/Products/philly-cheesesteak-pizza-parmesan.jpeg';
const rue = '../assets/Products/philly-cheesesteak-pizza-rue.jpeg';
const seared = '../assets/Products/philly-cheesesteak-pizza-seared-steak.jpeg';
const strips = '../assets/Products/philly-cheesesteak-pizza-steak-strips.jpeg';
const steak = '../assets/Products/philly-cheesesteak-pizza-steak.jpeg';
const topped = '../assets/Products/philly-cheesesteak-pizza-topped.jpeg';
const cooked = '../assets/Products/pizza-cooked.jpeg';
const well = '../assets/Products/pizza-flour-well.jpeg';
const wellWater = '../assets/Products/pizza-flour-well-with-water.jpeg';
const expandedWell = '../assets/Products/pizza-flour-expanded-well-with-water.jpeg';
const dough = '../assets/Products/pizza-dough-in-bowl.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS } = require("./constants");
const {
    BREAD_FLOUR,
    SALT,
    HONEY,
    WARM_WATER,
    OLIVE_OIL,
    MOZZARELLA_CHEESE,
    SPINACH,
    RED_ONION,
    MUSHROOMS,
    RED_BELL_PEPPERS,
    COOKED_HAM,
    PINEAPPLE,
    RANCH_DRESSING,
    UNSALTED_BUTTER,
    ALL_PURPOSE_FLOUR,
    GARLIC,
    BLACK_PEPPER,
    NUTMEG,
    PARMESAN_CHEESE,
    PROVOLONE_CHEESE,
    FLANK_STEAK,    
    MEDIUM_YELLOW_ONION,
    YEAST,
    PIZZA_SAUCE,
    SAUSAGE,
    OLIVES,
    BBQ_SAUCE,
    CHICKEN_BREAST,
    BACON,
    PEPPERONI,
    MILK,
} = require('./ingredients');

const PHILLY_CHEESESTEAK_SAUCE = 'Philly Cheesesteak Sauce';
const PHILLY_CHEESESTEAK_PIZZA = 'Philly Cheesesteak Pizza';

module.exports = {
    cardName: 'Homemade Pizza',
    name: 'Homemade Pizza',
    img: zoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    yields: '6 - 8 servings',
    prepTime: '45 m',
    cookTime: '25 m',
    separated: true,
    websites: [
        'https://littlespicejar.com/philly-cheese-steak-pizza/'
    ],
    ingredients: [
        { ...BREAD_FLOUR, amount: '4 1/2 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: '2 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...YEAST, amount: '1 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HONEY, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WARM_WATER, amount: '2 c', additionalDetails: 'room-temperature', section: SECTIONS.DOUGH },
        { ...OLIVE_OIL, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...PIZZA_SAUCE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...MOZZARELLA_CHEESE, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...PEPPERONI, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SAUSAGE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SPINACH, amount: '', additionalDetails: 'sliced or diced', section: SECTIONS.TOPPINGS },
        { ...RED_ONION, amount: '', additionalDetails: 'sliced or diced', section: SECTIONS.TOPPINGS },
        { ...MUSHROOMS, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...OLIVES, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RED_BELL_PEPPERS, amount: '', additionalDetails: 'sliced or diced', section: SECTIONS.TOPPINGS },
        { ...COOKED_HAM, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PINEAPPLE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RANCH_DRESSING, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BBQ_SAUCE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHICKEN_BREAST, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BACON, amount: '', additionalDetails: 'cooked', section: SECTIONS.TOPPINGS },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...ALL_PURPOSE_FLOUR, amount: '1 Tbsp', additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...MILK, amount: '1/2 c', additionalDetails: 'cold', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...GARLIC, amount: '3 cloves', additionalDetails: 'minced', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...SALT, amount: '1/8 tsp', additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...BLACK_PEPPER, amount: 'pinch', additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...NUTMEG, amount: 'pinch', additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...PARMESAN_CHEESE, amount: '1/4 c', additionalDetails: '', section: PHILLY_CHEESESTEAK_SAUCE },
        { ...PROVOLONE_CHEESE, amount: '1 1/4 c', additionalDetails: 'shredded', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...OLIVE_OIL, amount: '2 tsp', additionalDetails: '', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...FLANK_STEAK, amount: '6 oz', additionalDetails: 'thinly sliced', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...RED_BELL_PEPPERS, amount: '1/2', additionalDetails: 'sliced', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...MUSHROOMS, amount: '5', additionalDetails: 'sliced', section: PHILLY_CHEESESTEAK_PIZZA },
        { ...MEDIUM_YELLOW_ONION, amount: '1/2', additionalDetails: 'sliced', section: PHILLY_CHEESESTEAK_PIZZA },
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
        { step: 'Form a well in the center of the mixture and slowly add water and honey.', type: SECTIONS.DOUGH, img: [well, wellWater, expandedWell] },
        { step: 'Continue to work the liquid into the entire mixture until the dough becomes only a little sticky.', type: SECTIONS.DOUGH, img: [dough, ball] },
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
        { step: 'Over medium heat, melt the butter in a saucepan.', type: PHILLY_CHEESESTEAK_SAUCE, img: butter },
        { step: 'Mix in flour and cook (about 1 minute).', type: PHILLY_CHEESESTEAK_SAUCE, img: [flour, rue] },
        { step: 'Slowly mix in cold milk and garlic. Bring the sauce to a simmer.', type: PHILLY_CHEESESTEAK_SAUCE, img: garlicMilk },
        { step: 'Add salt, black pepper and nutmeg. Mix.', type: PHILLY_CHEESESTEAK_SAUCE },
        { step: 'Remove from heat and add parmesan cheese.', type: PHILLY_CHEESESTEAK_SAUCE, img: parmesan },
        { step: 'Let the sauce cool for 5 to 10 minutes.', type: PHILLY_CHEESESTEAK_SAUCE },
        { step: 'Over medium-high heat, add olive oil in a frying pan.', type: PHILLY_CHEESESTEAK_PIZZA, img: oilSteak },
        { step: 'Add the thin steak slices to the pan and season with salt and pepper.', type: PHILLY_CHEESESTEAK_PIZZA, img: steak },
        { step: 'Sear for 1 to 2 minutes total, making sure to flip halfway.', type: PHILLY_CHEESESTEAK_PIZZA, img: [seared, cookedSteak] },
        { step: 'Cut the steak into strips or bite-sized pieces. Set aside to top the pizza.', type: PHILLY_CHEESESTEAK_PIZZA, img: strips },
        { step: 'Add a layer of Philly cheesesteak sauce on the dough.', type: PHILLY_CHEESESTEAK_PIZZA },
        { step: 'Add the other ingredients evenly across the pizza and follow the baking steps below.', type: PHILLY_CHEESESTEAK_PIZZA, img: topped },
        { step: 'Place the shaped dough on the pan and add your favorite toppings.', type: SECTIONS.MAIN },
        { step: 'Bake the pizza for 20 to 25 minutes or until a nice golden brown.', type: SECTIONS.MAIN },
        { step: 'Enjoy these slices of heaven with friends and family.', type: SECTIONS.MAIN, img: [pizzaSpread, pizza, cooked, phillyCooked, zoomed1] },
        { step: 'If you have any leftover dough that you aren\'t ready to use, you can freeze it and make pizzas, breadsticks, or cheeseballs.', type: SECTIONS.MAIN, img: frozenDough },
    ],
    notes: [
        "If you need to slice the beef into thin slices, you can place the beef in the freezer for 20 to 30 minutes to make it easier to slice.",
    ]
};