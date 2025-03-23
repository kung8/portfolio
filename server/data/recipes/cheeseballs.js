const cheeseballs = '../assets/Products/cheeseballs.jpeg';
const pizzaDough = '../assets/Products/pizza-dough.jpeg';
const frozenDough = '../assets/Products/frozen-pizza-dough.jpeg';
const refrigeratedDough = '../assets/Products/refrigerated-pizza-dough.jpeg';
const tossing = '../assets/Products/pizza-toss.MOV';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    BREAD_FLOUR,
    SALT,
    HONEY,
    WARM_WATER,
    OLIVE_OIL,
    MOZZARELLA_CHEESE,
    UNSALTED_BUTTER,
    GARLIC,
    YEAST,
    MARINARA_SAUCE,
} = require('./ingredients');

module.exports = {
    cardName: 'Cheeseballs',
    name: 'Cheeseballs',
    img: cheeseballs,
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD, TYPES.FINGER_FOOD],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 72.5, unit: TIME_UNITS.HOUR },
    ingredients: [
        { ...BREAD_FLOUR, amount: 9 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...YEAST, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WARM_WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room-temperature', section: SECTIONS.DOUGH },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...MARINARA_SAUCE, amount: '', unit: '', additionalDetails: 'warmed', section: SECTIONS.MAIN },
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
        { step: 'Continue to work the liquid into the entire mixture until the dough becomes only a little sticky.', type: SECTIONS.DOUGH },
        { step: 'Coat the inside of a large bowl with some oil.', type: SECTIONS.DOUGH },
        { step: 'Place the dough inside that oiled bowl and cover with plastic wrap or a cooking towel and refrigerate between 48 to 72 hours. This allows the dough to rise and adds flavor.', type: SECTIONS.DOUGH, img: refrigeratedDough },
        { step: 'When you are ready to make the cheeseballs, preheat the oven too 450ºF.', type: SECTIONS.DOUGH },
        { step: 'Grease a baking sheet with 1 Tablespoon olive oil.', type: SECTIONS.DOUGH },
        { step: 'This is the fun part where you will work the dough. Again on a clean counter sprinkle some flour (and you may need to add some more later so keep that flour handy).', type: SECTIONS.DOUGH },
        { step: 'Cut a portion of the dough (about a 4-inch ball). Freeze the remainder in the freezer. Note that the dough will rise slightly more as it returns to room temperature.', type: SECTIONS.DOUGH, img: frozenDough },
        { step: 'Place the dough ball on the floured counter. And begin kneading and pulling and stretching the dough. Continue until the dough has become less sticky. Add more flour conservatively. If you have added too much flour, you can add more water but try to avoid doing that.', type: SECTIONS.DOUGH, img: pizzaDough },
        { step: 'Tossing the dough helps form the crust and gives the dough texture and flavor. Flatten the dough using a rolling pin until it\'s about 8 inches wide and you will place your closed fists beneath it (at about 10-and-2 steering wheel position). The tricky part is to avoid tearing the dough by making it too thin and accidentally ripping the dough with your fingers. So tuck those fingers in and use just your knuckles.', type: SECTIONS.DOUGH },
        { step: 'Pull your fists apart to pull the dough edges and try to get all around. Then with a quick flick of the wrists throw the dough directly up in the air and catch the dough with your closed fists.', type: SECTIONS.DOUGH, video: tossing },
        { step: 'Keep doing this until you are satisfied with the dough size and thickness.', type: SECTIONS.DOUGH },
        { step: 'Cut the dough into about 2 to 2-1/2 inch squares and fill the center with shredded cheese.', type: SECTIONS.MAIN },
        { step: 'Enclose the cheese by folding in the edges and press the dough to seal in the cheesy goodness.', type: SECTIONS.MAIN },
        { step: 'Shape the cheese filled dough into a ball and brush the outside with melted butter. Optionally sprinkle minced garlic. Then place the cheeseballs on the baking sheet', type: SECTIONS.MAIN },
        { step: 'Bake the cheeseball for 20 to 25 minutes or until a nice golden brown.', type: SECTIONS.MAIN },
        { step: 'Enjoy the cheesballs warm with warm pizza sauce.', type: SECTIONS.MAIN },
    ],
    notes: [
        { note: 'The focaccia bread recipe which was used for the pizza was the same dough that we used for this cheeseballs recipe. Freeze the remainder of the dough to make future breadsticks, cheese balls, or pizza.' }
    ]
};